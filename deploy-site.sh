# THIS SCRIPT IS DEPRECATED

docker pull brendankellogg/iuga-site

docker rm -f iuga-site
docker run -d --name iuga-site --network iuga-net brendankellogg/iuga-site
