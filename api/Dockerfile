# The base image we want to inherit from
FROM python:3.12.7-slim-bookworm

ENV DJANGO_ENV=production \
  # python:
  PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PYTHONOPTIMIZE=1 \
  # pip:
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100 \
  # uv:
  UV_VERSION=0.4.1 

EXPOSE 10000

# System deps:
RUN apt-get clean && apt-get update \
  && apt-get install --no-install-recommends -y \
  bash \
  build-essential \
  curl \
  ca-certificates \
  gettext \
  git \
  libpq-dev \
  default-libmysqlclient-dev \
  libmagic1 \
  wget \
  libpango1.0-dev \
  supervisor \
  vim \
  && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* 

# Download the uv installer
ADD https://astral.sh/uv/$UV_VERSION/install.sh /uv-installer.sh

# Run the installer then remove it
RUN sh /uv-installer.sh && rm /uv-installer.sh

# Ensure the installed binary is on the `PATH`
ENV PATH="/root/.cargo/bin/:$PATH"

# Set up supervisord stuff
COPY supervisor/conf.d/celeryflower.conf /etc/supervisor/conf.d/

# set work directory
WORKDIR /code
COPY pyproject.toml uv.lock ./

# Install dependencies:
RUN uv sync --frozen

COPY . . 

CMD ["./scripts/entrypoint"]
