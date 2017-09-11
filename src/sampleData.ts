import * as v4 from 'uuid/v4';
import { Animal, AnimalMap } from './types';
import { Map } from 'immutable';

const sampleData: Animal[] = [
  {
    id: v4(),
    name: 'Arthur',
    adopted: false,
    type: 'Dog'
  },
  {
    id: v4(),
    name: 'Bob',
    adopted: false,
    type: 'Dog'
  },
  {
    id: v4(),
    name: 'Charlie',
    adopted: false,
    type: 'Cat'
  },
  {
    id: v4(),
    name: 'Delilah',
    adopted: false,
    type: 'Cat'
  },
  {
    id: v4(),
    name: 'Edmure',
    adopted: false,
    type: 'Cat'
  }
];

const createAnimalMap = (input: Animal[]): AnimalMap =>
  input.reduce(
    (map: AnimalMap, animal: Animal, index: number) =>
      map.set(animal.id, animal),
    Map<string, Animal>()
  );

export default createAnimalMap(sampleData);
