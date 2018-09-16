# THIS SCRIPT IS DEPRECATED

docker rm -f iugaserver

docker run -d --name iugaserver \
--network iuga-net \
-e ADDR=:443 \
-e TLSKEY=/root/certs/iuga/iuga.info-key.pem \
-e TLSCERT=/root/certs/iuga/fullchain.pem \
-e IUGASITEADDR=$IUGASITEADDR \
-e IUGAEVENTSADDR=$IUGAEVENTSADDR \
 -v /root/:/root/certs/iuga/:ro \
 -p 80:80 -p 443:443 \
brendankellogg/iugaserver
