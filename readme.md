'''

cd ..\server\  

yarn init -y || npm init -y

yarn add -D nodemon @types/express @types/node @types/mongoose concurrently

yarn add typescript mongoose express dotenv cors ...more

npx tsc --init

'''

**Inside tsconfig.json **

'''
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

'''
