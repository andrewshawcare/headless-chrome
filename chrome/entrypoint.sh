#!/bin/bash

nohup google-chrome \
  --no-sandbox \
  --headless \
  --disable-gpu \
  --user-data-dir=/tmp \
  --remote-debugging-port=9222 \
  --remote-debugging-address=0.0.0.0 &

xvfb-run chromedriver --whitelisted-ips=''
