import app from "./app.js";
import {sequelize} from "./database/database.js";
/* import './models/Project.js';
import './models/Task.js'; */

const main = async () => {
    try {
        await sequelize.sync({force:false});
        let port = 3000;
        app.listen(port);
        console.log(`el servidor se levanto por el puerto ${port}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();

