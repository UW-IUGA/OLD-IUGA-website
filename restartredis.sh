docker pull redis

docker rm -f redis

docker run -d --name redis --network iuga-net redis
