FROM krallin/ubuntu-tini:xenial

EXPOSE 9222

# Install dependencies
RUN apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y curl unzip

# Install Google Chrome
RUN curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  echo 'deb http://dl.google.com/linux/chrome/deb stable main' >> /etc/apt/sources.list.d/google-chrome.list && \
  apt-get update && \
  apt-get install -y google-chrome-unstable

# Install ChromeDriver
ENV CHROMEDRIVER_VERSION=2.29
RUN curl -O https://chromedriver.storage.googleapis.com/${CHROMEDRIVER_VERSION}/chromedriver_linux64.zip && \
  unzip \
  -d /usr/local/bin \
  ./chromedriver_linux64.zip && \
  chmod +x /usr/local/bin/chromedriver

# Install xvfb
RUN apt-get update && \
  apt-get install -y xvfb

COPY entrypoint.sh .
RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["/usr/local/bin/tini", "--", "./entrypoint.sh"]
