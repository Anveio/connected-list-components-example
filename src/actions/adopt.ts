import { ADOPT_ANIMAL } from '../constants';

export interface AdoptionAction {
  type: ADOPT_ANIMAL;
  animalId: string;
}

export const adoptAnimal = (animalId: string): AdoptionAction => ({
  type: ADOPT_ANIMAL,
  animalId
});
