export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full py-16">
      <div className={`mt-0 max-w-5xl mx-auto flex flex-col lg:flex-row px-12`}>
        <div className="w-full items-center">
          <div className="pt-4">
            <div className="prose mx-auto prose-h1:font-semibold prose-gray">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
