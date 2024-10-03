```

cd ..\server\  

yarn init -y || npm init -y

yarn add -D nodemon @types/express @types/node @types/mongoose concurrently

yarn add typescript mongoose express dotenv cors ...more

npx tsc --init

```

* Inside tsconfig.json 

```
{
  "compilerOptions": {
    "target": "ES2023",
    "module": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}

```
** Inside package.json 

```
{
  "name": "server",
  "version": "1.0.0",
  "main": "app.js",
  "license": "MIT",
  "scripts": {
    "start": "concurrently \"tsc -w\" \"nodemon dist/app.js\" "
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^22.7.4",
    "concurrently": "^9.0.1",
    "nodemon": "^3.1.7"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "mongoose": "^8.7.0",
    "typescript": "^5.6.2"
  }
}
```

** File structure
```
──src
    ├───controllers
    ├───errors
    ├───interfaces
    ├───models
    ├───public
    ├───routes
    └───uploads
    └───app.ts
```
** start server 

`yarn start `
