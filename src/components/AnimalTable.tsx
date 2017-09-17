import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types';
import { List } from 'immutable';
import { animalIdsSelector } from '../selectors';

import AnimalListing from './AnimalListing';

interface Props {
  readonly animalIds: List<string>;
}

const mapState = (state: RootState): Props => ({
  animalIds: animalIdsSelector(state)
});

class AnimalTable extends React.PureComponent<Props, never> {
  shouldComponentUpdate(nextProps: Props) {
    return !nextProps.animalIds.equals(this.props.animalIds);
  }

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
