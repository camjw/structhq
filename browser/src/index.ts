import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { Browser, Page } from "puppeteer";
import fs from "fs";
import morgan from "morgan";
import bodyParser from "body-parser";
import { setTimeout } from "node:timers/promises";

import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import AdblockerPlugin from "puppeteer-extra-plugin-adblocker";

puppeteer.use(StealthPlugin());
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

dotenv.config();

const app = express();
app.use(morgan("common"));
app.use(bodyParser.json());

let browser: Browser | null = null;

async function getBrowser() {
  if (browser) {
    return browser;
  }

  const executablePath = process.env.CHROME_BIN_PATH || undefined;

  browser = await puppeteer.launch({
    args: [
      "--hide-scrollbars",
      "--no-sandbox",
      "--ignore-certificate-errors",
      "--disable-web-security",
      "--disable-setuid-sandbox",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
      "--incognito",
    ],
    executablePath,
    ignoreHTTPSErrors: true,
    headless: true,
  });

  return browser;
}

let version: string | undefined;

function getVersion() {
  if (version) {
    return version;
  }

  if (process.env.RENDER_GIT_COMMIT) {
    version = process.env.RENDER_GIT_COMMIT;
    return version;
  }

  try {
    version = fs.readFileSync(".version").toString();
  } catch (e) {
    version = "local";
  }

  return version;
}

app.get("/healthcheck", (_req: Request, res: Response) => {
  return res.send({ version: getVersion() });
});

const stripUrl = (url: string) =>
  // strip a url of its protocol, www, and trailing slash url
  url
    .replace(/(^\w+:|^)\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");

const stripText = (text: string) => {
  return (
    text
      .replace("\n", " ")
      .replace("\t", " ")
      .replace("\r", " ")
      .replace(/\\n/g, "\n")
      .replace(/\\xa0/g, "\xa0")
      .split("\\n")
      .join(" ")
      .split("\n")
      .join(" ")
      // get rid of extra spaces
      .replace(/\s{2,}/g, " ")
      .trim()
  );
};

const waitTillHTMLRendered = async (page: Page, timeout = 30000) => {
  const checkDurationMsecs = 1000;
  const maxChecks = timeout / checkDurationMsecs;
  let lastHTMLSize = 0;
  let checkCounts = 1;
  let countStableSizeIterations = 0;
  const minStableSizeIterations = 3;

  while (checkCounts++ <= maxChecks) {
    let html = await page.content();
    let currentHTMLSize = html.length;

    let bodyHTMLSize = await page.evaluate(
      () => document.body.innerHTML.length
    );

    console.log(
      "last: ",
      lastHTMLSize,
      " <> curr: ",
      currentHTMLSize,
      " body html size: ",
      bodyHTMLSize
    );

    if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
      countStableSizeIterations++;
    else countStableSizeIterations = 0; //reset the counter

    if (countStableSizeIterations >= minStableSizeIterations) {
      console.log("Page rendered fully..");
      break;
    }

    lastHTMLSize = currentHTMLSize;
    await setTimeout(checkDurationMsecs);
  }
};

app.post("/website/scrape", async (req: Request, res: Response) => {
  const { url } = req.body;

  console.log(`Scraping ${url}`);

  const startTime = Date.now();
  const browser = await getBrowser();
  console.log(`Browser took ${Date.now() - startTime}ms to start`);
  const context = await browser.createBrowserContext();
  console.log(`Context took ${Date.now() - startTime}ms to start`);
  const page = await context.newPage();
  console.log(`Page took ${Date.now() - startTime}ms to start`);

  try {
    await page.setViewport({ width: 1664, height: 768, deviceScaleFactor: 2 });

    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    await waitTillHTMLRendered(page);

    const frame = page.mainFrame();

    const html = await page.$eval("body", (el) => el.innerHTML);
    const title = stripText(await frame.title());

    const jsonRes = {
      title,
      html,
    };

    await page.close();
    await context.close();

    console.log(`Scraping took ${Date.now() - startTime}ms`);

    return res.send(JSON.stringify(jsonRes));
  } catch (e: unknown) {
    console.error(e);
    await page.close();
    await context.close();

    if (typeof e === "string") {
      return res.status(500).send(e);
    }

    if (e instanceof Error) {
      return res.status(500).send(e.message);
    }

    return res.status(500).send("Unknown error");
  }
});

const port = process.env.PORT || 3014;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
