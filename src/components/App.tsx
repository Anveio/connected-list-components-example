import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { RootState, AnimalMap, Animal } from '../types';
import { AdoptAction, adoptAnimal } from '../actions/adopt';
import AnimalListing from './AnimalListing';

interface Props {
  readonly animals: AnimalMap;
}

interface Handlers {
  readonly onAdopt: (id: string) => void;
}

const mapState = (state: RootState): Props => ({
  animals: state.animals
});

const mapDispatch = (dispatch: Dispatch<AdoptAction>): Handlers => ({
  onAdopt: (id: string) => dispatch(adoptAnimal(id))
});

class App extends React.Component<Props & Handlers, never> {
  render() {
    return (
      <main>
        <h4 className=".pt-ui-text">
          These animals are available for adoption:
        </h4>
        {this.props.animals.map((animal: Animal) => (
          <AnimalListing animal={animal} onAdopt={this.props.onAdopt} />
        ))}
      </main>
    );
  }
}

export default connect<Props, Handlers>(mapState, mapDispatch)(App);
