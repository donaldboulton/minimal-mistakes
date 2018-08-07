cd DWB

echo "Pulling from Master"

git pull origin gh-pages

echo "Pulled successfully from master"

echo "Restarting server..."

npm install

npm start

echo "Server restarted Successfully"