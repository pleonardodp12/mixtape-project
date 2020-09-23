require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    username: 'postgres',
    host: 'localhost',
    database: 'dev_mixtape_db',
    password: 'hastatus6',
    port: 5432,
  },

  test: {
    dialect: 'postgres',
    username: 'postgres',
    host: 'localhost',
    database: 'test_mixtape_db',
    password: 'hastatus6',
    port: 5432,
  },

  production: { use_env_variable: 'DATABASE_URL' },
};
