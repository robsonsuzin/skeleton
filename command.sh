#!/bin/bash

if [[ ! -d /var/www/app/node_modules ]]; then
  echo "~> installing dependencies"
  yarn install
fi

if [[ -f /usr/local/bin/node ]]; then
  echo "~> expose bin"
  cp /usr/local/bin/node /home/node/bin/node
fi

echo "Details: '$(pwd)' | '$(quasar -v)'"

chown -R node:node .
echo "~> fix permissions"

echo "~> starting dev"
quasar dev
