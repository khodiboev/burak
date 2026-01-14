import express from 'express';
import path, { dirname } from "path"

/**1-Entrance**/
const app = express();
console.log("__dirname", __dirname)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

/**2-sessions**/

/**3-views**/
app.set('view', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


/**4-routers**/


export default app;