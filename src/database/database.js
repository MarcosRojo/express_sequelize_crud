import Sequelize from "sequelize";

export const sequelize = new Sequelize ( 'project_db', 'postgres', '2012103284', {
    host:'localhost',
    dialect:'postgres'
});