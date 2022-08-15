import {project} from '../models/Project.js'
import { Task } from '../models/Task.js';


export const getProjects = async (req, res) => {    
    try {
        const projects = await project.findAll()
        console.log(projects);
        res.json(projects);
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export const getProject = async (req, res) => {    
    try {
        const {id} = req.params;
        const getProject = await project.findOne({
            where: {
                id
            }
        })
        if (!getProject) return res.status(404).json({message: 'project does exists'})
        res.json(getProject);
        /* console.log(projects);
        res.json(projects); */
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export const createProject  = async (req, res) => {
    const {name, priority, description } = req.body
    try {
        const newProject = await project.create({
            name,
            priority,
            description
        })
        res.json(newProject);
    } catch (error) {
        res.status(500).json({message: error.message})
    }   
    
}

export const updateProject  = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, priority, description } = req.body;
        const findProject = await project.findByPk(id);
        findProject.name = name;
        findProject.priority = priority;
        findProject.description = description;
        findProject.save();
        console.log(findProject);
        res.json(findProject);

    } catch (error) {
        res.status(500).json({message: error.message})
    }   
    
}

export const deleteProject  = async (req, res) => {
    console.log(req.params.id);
    const {id} = req.params;
    try {
        await project.destroy({
            where:{
                id,
            }
        });
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: error.message})
    }   
    
}

export const getProjectTasks = async (req, res) => {    
    try {
        const {id} = req.params
        const tasks = await Task.findAll({
            where:{projectId: id}
        })
        res.json(tasks)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}