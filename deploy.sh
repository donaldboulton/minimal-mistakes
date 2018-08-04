cd DWB

echo "Pulling from Master"

git pull origin gh-pages

echo "Pulled successfully from master"

echo "Restarting server..."

npm install

npm start

pm2 start bin/www

echo "Server restarted Successfully"