import db from "../../bd/mongo.ts";
import ClassifierElemDto from "../../dtos/classifierElemDto.ts";

class ClassifierElemModel {
  constructor() {}

  readonly classifierElemCollection = db.collection("classifierElem");

  async find() {
    const recipes = await this.classifierElemCollection.find();
    return recipes;
  }

  async insertOne(cElem: ClassifierElemDto) {
    const { $oid } = await this.classifierElemCollection.insertOne(cElem);
    return $oid;
  }
}

export default ClassifierElemModel;