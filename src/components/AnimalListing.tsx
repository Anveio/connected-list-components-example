import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { RootState, Animal } from '../types';
import { AdoptAction, toggleAdoption } from '../actions/adopt';

export interface Props {
  readonly animal: Animal;
}

export interface OwnProps {
  readonly animalId: string;
}

export interface Handlers {
  readonly onToggle: (id: string) => void;
}

const mapState = (state: RootState, ownProps: OwnProps): Props => ({
  animal: state.animals.get(ownProps.animalId)
});

const mapDispatch = (dispatch: Dispatch<AdoptAction>): Handlers => ({
  onToggle: (id: string) => dispatch(toggleAdoption(id))
});

class AnimalListing extends React.PureComponent<
  Props & OwnProps & Handlers,
  never
> {
  static generateAnimalStatus = (adopted: boolean) =>
    adopted ? 'Adopted!' : 'Not Adopted';

  public render() {
    const { animal: { name, type, adopted } } = this.props;
    return (
      <div
        className="pt-card pt-elevation-1"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        {`Adopt ${name} the ${type}.`}
        <div>{AnimalListing.generateAnimalStatus(adopted)}</div>
        <button
          className="pt-button pt-icon-refresh"
          onClick={() => this.props.onToggle(this.props.animal.id)}
        />
      </div>
    );
  }
}

export default connect<Props, Handlers>(mapState, mapDispatch)(AnimalListing);
