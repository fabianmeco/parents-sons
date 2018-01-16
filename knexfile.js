// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://cqwdfdcp:eLbYiNuzLLcAhVq7uz2Rx9kFCGpPIDiT@baasu.db.elephantsql.com:5432/cqwdfdcp',
    searchPath: 'public',
    pool:{
      min: 2,
      max: 10
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
