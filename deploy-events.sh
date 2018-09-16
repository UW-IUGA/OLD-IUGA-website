# THIS SCRIPT IS DEPRECATED

docker pull brendankellogg/iugaevtapi
docker pull redis

docker rm -f iuga-events
docker rm -f redis

docker run -d --name redis --network iuga-net redis

docker run -d --name iuga-events \
--network iuga-net \
-e REDISADDR=redis:6379 \
-e FBKEY=$FBKEY \
-e PORT=4002 \
brendankellogg/iugaevtapi
