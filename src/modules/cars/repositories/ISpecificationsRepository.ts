import { Specification } from "../model/Specification";

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationssRepository {
  create({ name, description }: ICreateSpecificationsDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationssRepository, ICreateSpecificationsDTO };
