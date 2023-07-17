import {Sequelize} from 'sequelize';


const sequelize = new Sequelize('almacen', 'userdba', 'Grecia*456', {
    host: '192.168.1.154',
    dialect: 'mysql',
    
  });

  
  export default sequelize;