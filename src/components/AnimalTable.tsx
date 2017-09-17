import * as React from 'react';
import { connect } from 'react-redux';
import { RootState, Animal } from '../types';
import { List } from 'immutable';

import AnimalListing from './AnimalListing';

interface Props {
  readonly animalIds: List<string>;
}

const mapState = (state: RootState): Props => ({
  animalIds: state.animals.map((animal: Animal) => animal.id).toList()
});

class AnimalTable extends React.Component<Props, never> {
  
  public render() {
    return (
      <main>
        <h4 className=".pt-ui-text">
          These animals are available for adoption:
        </h4>
        {this.props.animalIds.map((id: string) => (
          <AnimalListing key={id} animalId={id} />
        ))}
      </main>
    );
  }
}

export default connect<Props>(mapState)(AnimalTable);
