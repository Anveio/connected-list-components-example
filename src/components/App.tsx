import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { RootState, AnimalMap, Animal } from '../types';
import { AdoptAction, adoptAnimal } from '../actions/adopt';

interface Props {
  readonly animals: AnimalMap;
}

interface Handlers {
  readonly onAdopt: (id: string) => void;
}

class App extends React.Component<Props & Handlers, never> {
  render() {
    return (
      <div>
        {this.props.animals.map((animal: Animal) => (
          <p key={animal.id}>{animal.name}</p>
        ))}
      </div>
    );
  }
}

const mapState = (state: RootState): Props => ({
  animals: state.animals
});

const mapDispatch = (dispatch: Dispatch<AdoptAction>): Handlers => ({
  onAdopt: (id: string) => dispatch(adoptAnimal(id))
});

export default connect<Props, Handlers>(mapState, mapDispatch)(App);
