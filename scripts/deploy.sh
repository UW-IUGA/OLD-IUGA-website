echo ""
echo ""
echo "Deploying to Server: http://beta.iuga.info"
echo "You will need to input your password"
echo ""
echo ""

rsync -av \
-e 'ssh -p 7822' \
--exclude=.DS_Store \
build/ iuga@iuga.info:~/www/beta/

echo ""
echo ""
echo "Deployed!! visit it at: http://beta.iuga.info"
echo ""
echo ""
