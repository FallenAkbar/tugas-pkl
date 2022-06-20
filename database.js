import { Sequelize } from 'sequelize';
0
const database = new Sequelize('laptop', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

export default database