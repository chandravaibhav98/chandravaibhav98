# No Template error #

npm uninstall -g create-react-app

yarn global remove create-react-app

which create-react-app - If it returns something (e.g. /usr/local/bin/create-react-app), then do a rm -rf /usr/local/bin/create-react-app to delete manually.

npm cache clean --force

npm cache verify

npx create-react-app@latest

npm install create-react-app@^5.0.1
