import React, {Component} from 'react';
import Card from 'components/Card';

export default class Game extends Component {
  renderCards(cards) {
    return cards.map((card, index) => {
        return <Card key={index} type={card} id={index} />;
    });
  }
  
  render() {
    return (
      <div>
        {this.renderCards(this.props.cards)}
      </div>
    )
  }
}