import {Sequelize} from "sequelize";

const db = new Sequelize('crud_tbl', 'root', '', 
    {
    host: 'localhost',
    dialect: 'mysql'
    }
);

export default db;