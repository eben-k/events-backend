require('dotenv').config();

module.exports = {
  name: 'default',
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  logging: true,
  entities: ['src/entities/*{.ts,.js}'],
};
