import * as React from 'react';
import { Animal } from '../types';

export interface Props {
  readonly animal: Animal;
}

export interface Handlers {
  readonly onAdopt: (id: string) => void;
}

class AnimalListing extends React.PureComponent<Props & Handlers, never> {
  public render() {
    const { animal: { name, type } } = this.props;
    return (
      <div
        className="pt-card pt-elevation-0 pt-interactive"
        onClick={() => this.props.onAdopt(this.props.animal.id)}
      >
        Adopt {name} the {type}.
      </div>
    );
  }
}

export default AnimalListing;
