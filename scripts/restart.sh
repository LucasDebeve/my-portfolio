#!/bin/bash
docker compose down
docker rmi $(docker compose images -q)
docker compose up -d