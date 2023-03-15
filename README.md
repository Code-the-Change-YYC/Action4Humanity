# Action4Humanity - Code the Change

## set up
dependencies:
* [node](https://nodejs.org/en/)
* [docker](https://www.docker.com)

```bash
# for server
npm install

# for client
cd client
npm install
```

## get started

for local development start both the server and client in separate processes
```bash
# server
npm run cock # starts database
npm run dev

# when you're done developing (stops database)
npm run cock:stop 
```
```bash
# client
npm run dev
```

additional scripts can be found in the package.json files in the root and client folders

## tech
* [typescript](https://www.typescriptlang.org)
* [trpc](https://trpc.io)
* [react](https://reactjs.org) ([ts cheatsheet](https://react-typescript-cheatsheet.netlify.app))
* [cockroachdb](https://www.cockroachlabs.com/docs/cockroachcloud/learn-cockroachdb-sql.html) (postgresql)