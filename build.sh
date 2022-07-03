#!/bin/sh

docker create -ti --name dummy test-upload bash
docker cp dummy:/var/task/function.zip /Users/nicky/Developer/side-projects/hashlips_art_engine
docker rm -f dummy
