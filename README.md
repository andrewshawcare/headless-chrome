# headless-chrome

Run a headless Chrome browser from a container.

## Deployment

### Prerequisites

This project is deployed with Docker. The easiest way to setup a Docker environment is by installing the [Docker Toolbox](https://www.docker.com/docker-toolbox).

### Docker Compose

1. `docker-compose up`

## Getting Started

This project provides two images:

* andrewshawcare/chrome: Runs chrome in headless mode with xvfb.
* andrewshawcare/webdriverio: Runs webdriverio and, by default, connects to the chrome host to run tests against

You can find this configuration in the `docker-compose.yml` file included in the base directory of this project.

If you want to use these images in your own project, just make sure to mount the `wdio.conf.js` file and the `specs` folder so that your configuration and spec files are available to the `webdriverio` container.
