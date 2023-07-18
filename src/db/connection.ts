import {INTEGER, Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

secret: process.env.DB_PORT as string;

// const sequelize = new Sequelize('almacen', 'userdba', 'Grecia*456', data);
//console.log (process.env.DB_HOSTDIR)
const sequelize = new Sequelize('almacen', 'userdba', 'Grecia*456', {
    
    host: process.env.DB_HOSTDIR,//, 
    dialect: 'mysql',
    port: process.env.DB_PORT as unknown as number,
  }); 

  export default sequelize;