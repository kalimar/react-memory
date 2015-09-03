import React, {Component} from 'react';
import Game from 'components/Game';

export default class App extends Component {
  render() {
    var cards = [1, 2, 2, 1, 3, 4, 3, 4];
    return (
      <div>
        <Game cards={cards} />
      </div>
    );
  }
}