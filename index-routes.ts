import { Router } from './deps.ts';

import { getRecipes, createRecipe } from "./controllers/classifier/classifier.controllers.ts";

const indexRoutes = new Router();

indexRoutes
    .get(
        '/', ({response})=>{
            response.body = "hola mundo"
         }
    )
    .get("/recipes", getRecipes)
    .post("/recipes", createRecipe);

export default indexRoutes