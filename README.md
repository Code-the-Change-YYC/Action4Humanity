# Code the Change - Action4Humanity

## set up
dependencies:
* [node](https://nodejs.org/en/)
* [docker](https://www.docker.com)

copy .env.example into a .env file and add the protected secrets
```bash 
cp .env.example .env
```

## get started
for local development
```bash
# server
npm run cock # starts database
npm run dev

# when ur done
npm run cock:stop
```

see [package.json](package.json) for other relevant scripts

## t3

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

