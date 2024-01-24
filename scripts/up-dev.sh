#!/bin/bash

if [ ! -f "docker-compose-dev.yml" ]; then
    echo "Error: docker-compose-dev.yml file not founded."
    exit 1
fi

# Run docker compose
docker compose -f ./docker-compose-dev.yml up -d

# Colors
GREEN="\e[32m"
ENDCOLOR="\e[0m"

# Messages
echo ""
echo -e "React in: ${GREEN}http://localhost:8000${ENDCOLOR}"
echo ""
echo -e "Node in: ${GREEN}http://localhost:3000${ENDCOLOR}"
echo ""