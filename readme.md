scripts to run when init

npm init -y
npm i express dotenv cors helmet
npm i -D typescript
npm i -D @types/node @types/express @types/dotenv @types/cors @types/helmet
npx tsc --init
npm i -D ts-node-dev
add "ts-node-dev --respawn --pretty --transpile-only src/index.ts" as "dev" script
npm i jsonwebtoken
npm i -D @types/jsonwebtoken

git init
git remote add origin https://github.com/kennysusanto/expressjs-api-template-2.git
if error git pull --rebase origin main
git push origin main