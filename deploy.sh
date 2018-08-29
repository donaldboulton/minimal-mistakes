cd DWB

echo "Pulling from gh-pages"

git pull origin gh-pages

echo "Pulled successfully from gh-pages"

echo "Restarting server..."

npm install

npm start

echo "Server restarted Successfully"
