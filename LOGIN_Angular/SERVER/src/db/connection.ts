import { Sequelize } from "sequelize";

const sequelize = new Sequelize('user', 'root', 'kamch25',{
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;