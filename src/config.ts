export const config = {
  dbUrl: process.env.DATABASE_URL ?? 'mongodb://localhost:27017/app',
  port: process.env.PORT ?? 5000,
  host: process.env.HOST ?? 'http://localhost',
  pubRoute: process.env.PUBLIC_ROUTE ?? 'home',
  fileRoute: process.env.FILE_ROUTE ?? 'uploads'
}
