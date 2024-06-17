npm create vite client -- --template react-ts
rm -r client/src
cp -r src client
cd client
npm install
npm install -D aws-amplify @aws-amplify/ui-react

# Specify names depending on your environment.
cat <<EOF >.env
VITE_USER_POOL_ID=
VITE_APP_CLIENT_ID=
EOF
