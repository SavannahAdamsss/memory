module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///resolutions'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL  //DATABASE_URL is dynamic
  }

}
