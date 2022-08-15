import {Router} from 'express';
import {createProject ,deleteProject,getProjects, updateProject, getProject, getProjectTasks} from '../controllers/projects.controler.js'


const router = Router();
router.get('/projects', getProjects);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id', getProject);
router.get('/projects/:id/tasks', getProjectTasks);

export default router;