FROM ubuntu:latest

RUN apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y curl

RUN curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  echo 'deb http://dl.google.com/linux/chrome/deb stable main' >> /etc/apt/sources.list.d/google-chrome.list && \
  apt-get update && \
  apt-get install -y google-chrome-unstable

EXPOSE 9222

ENTRYPOINT ["google-chrome"]
CMD ["--user-data-dir=/tmp", "--disable-gpu", "--headless", "--remote-debugging-port=9222", "--remote-debugging-address=0.0.0.0"]