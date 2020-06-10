import { RouterContext } from "../../deps.ts";

import ClassifiersService from "./classifier.services.ts";

const classifiersService = new ClassifiersService();

export const getRecipes = async (context: RouterContext) => {
  context.response.body = await classifiersService.getRecipes();
};

export const createRecipe = async (context: RouterContext) => {
  const { request, response } = context;
  //TODO: validaciones por datos incompletos
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid recipe data" };
    return;
  }

  const { value: { title, desc, url } } = await request.body();
  // si existe aumentar el contador
  const recipeId = await classifiersService.createRecipe(
    { title, desc, url },
  );

  response.body = { msg: "Recipe Created", recipeId };
};