
import ClassifierElemModel from "./classifier.model.ts";
import ClassifierElemDto from "../../dtos/classifierElemDto.ts";

class ClassifierElemService {
  constructor() {}

  readonly classifierElemModel = new ClassifierElemModel();

  getRecipes = async () => {
    return await this.classifierElemModel.find();
  };

  createRecipe = async (cElem: ClassifierElemDto) => {
    return await this.classifierElemModel.insertOne(cElem);
  };
}

export default RecipeService;