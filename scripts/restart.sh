#!/bin/bash
docker compose down
docker rmi $(docker images -q)
docker compose up -d