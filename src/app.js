import express from "express";
import projectsRouter from './routes/projects.routes.js';
import taskRoutes from './routes/task.routes.js';

const app = express();

//midelware
app.use(express.json())

//
app.use(projectsRouter);
app.use(taskRoutes);

 export default app;