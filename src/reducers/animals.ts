import { ADOPT_ANIMAL } from '../constants';
import { AdoptAction } from '../actions/adopt';
import sampleData from '../sampleData';

const initial = sampleData;

export default (state = initial, action: AdoptAction) => {
  switch (action.type) {
    case ADOPT_ANIMAL:
      return state.update(action.animalId, (animal) => ({
        ...animal,
        adopted: true
      }));
    default:
      return state;
  }
};
