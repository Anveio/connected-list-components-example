import { Map } from 'immutable';

export interface RootState {
  readonly animals: AnimalMap;
}

export interface Animal {
  readonly id: string;
  readonly name: string;
  readonly adopted: boolean;
  readonly type: 'Cat' | 'Dog';
}

export type AnimalMap = Map<string, Animal>;
