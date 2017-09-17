import { createSelector } from 'reselect';
import { RootState, Animal } from './types';

const animalsSelector = (state: RootState) => state.animals;

export const animalIdsSelector = createSelector(
  [ animalsSelector ],
  (animals) => animals.map((animal: Animal) => animal.id).toList()
);
