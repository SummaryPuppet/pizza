#!/bin/bash

if [ ! -f "docker-compose-dev.yml" ]; then
    echo "Error: El archivo docker-compose-dev.yml no se encuentra."
    exit 1
fi

docker compose -f ./docker-compose.yml down

echo ""
echo "Program says goodbye"
echo ""
