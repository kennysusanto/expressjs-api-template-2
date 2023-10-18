scripts to run when init

npm init -y
npm i express dotenv cors helmet
npm i -D typescript
npm i -D @types/node @types/express @types/dotenv @types/cors @types/helmet
npx tsc --init
npm i -D ts-node-dev
add "ts-node-dev --respawn --pretty --transpile-only src/index.ts" as "dev" script

git init
git remote add origin https://github.com/kennysusanto/expressjs-api-template-2.git
git push origin main