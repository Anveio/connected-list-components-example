import { ADOPT_ANIMAL } from '../constants';

export interface AdoptAction {
  type: ADOPT_ANIMAL;
  animalId: string;
}

export const adoptAnimal = (animalId: string): AdoptAction => ({
  type: ADOPT_ANIMAL,
  animalId
});
