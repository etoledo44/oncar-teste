module.exports = {
  development: {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    seeds:{
      directory: 'src/database/seeds'
    },
    migrations: {
      directory: 'src/database/migrations'
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'superuser',
        password: 'superuser',
        database: 'oncar'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'superuser',
        password: 'superuser',
        database: 'oncar'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
