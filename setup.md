nest new nest-auth-project<br/>

## prisma
npm i --save-dev prisma <br/>
npm i @prisma/client <br/>
npx prisma init <br/>
extension ->  prisma  |-> auto schema and .env db url <br/>
npx prisma migrate dev --create-only<br/>  not work yet. it will work after db-configure of docker compose yml 

## docker-compose.yml
db settings<br/>
docker-compose up

## prisma studio
npx prisma studio

## create migrations after npx prisma db push 
npx prisma db push

## auth module 
npx nest g module auth <br/>
npx nest g service auth <br/>
npx nest g controller auth <br/>
## prisma module 
npx nest g module prisma  | @Global()<br/>
npx nest g service prisma  | imports:[PrisnaService] exports:[PrismaService]<br/>
db connect configure in service for use findMany,findOne  <br> 

## new migrate  and db push because changed on user model 
npx prisma migrate dev --create-only <br>
npx prisma db push

## npm i bcrypt for password 

## create types for return controller and service

## strategies
npm i @nestjs/jwt passport-jwt @nestjs/passport
npm i --save-dev @types/passport-jwt

## create access and refreshToken strategy
## strategies import with jwtmodule in auth module || jwt guard

## create hashpasword fonk.
## create jwt token fonk.
## create fonk. for refresh token updated from db