import { AdoptAction, TOGGLE_ADOPTION } from '../actions/adopt';
import sampleData from '../sampleData';

const initial = sampleData;

export default (state = initial, action: AdoptAction) => {
  switch (action.type) {
    case TOGGLE_ADOPTION:
      return state.update(action.animalId, (animal) => ({
        ...animal,
        adopted: !animal.adopted
      }));
    default:
      return state;
  }
};
