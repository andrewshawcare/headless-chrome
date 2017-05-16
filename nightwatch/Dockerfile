FROM krallin/ubuntu-tini:xenial

# Install dependencies
RUN apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y curl build-essential

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
  apt-get install -y nodejs

COPY package.json .
RUN npm install

COPY tests /tests
COPY nightwatch.json .

ENTRYPOINT ["/usr/local/bin/tini", "--", "npm"]
CMD ["test"]
