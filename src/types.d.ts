import { Map } from 'immutable';

export interface RootState {
  readonly animals: Map<string, Animal>;
}

export interface Animal {
  readonly id: string;
  readonly name: string;
  readonly adopted: boolean;
  readonly type: 'Cat' | 'Dog';
}
