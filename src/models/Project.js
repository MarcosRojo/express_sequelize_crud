import {DataTypes} from "sequelize";
import {sequelize} from '../database/database.js'
import {Task} from '../models/Task.js'

export const project = sequelize.define('Projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    priority:{
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING
    }
});

project.hasMany(Task,{
    foreignKey: 'projectId',
    sourceKey: 'id',
})

Task.belongsTo(project, {
    foreignKey: 'projectId',
    targetId: 'id',
})