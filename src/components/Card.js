import React, {Component} from 'react';
import classnames from 'classnames';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
    this.id = this.key;
    
    this.state = {
      flipped: false,
      matched: false
    };
  }
  
  handleClick(e) {
    var flipped = this.state.flipped;
    this.setState({
      flipped: !flipped
    });
  }
  
  render() {
    var cardClasses = classnames(
      'card',
      {'card--flipped': this.state.flipped},
      {'card--matched': this.state.matched}
    );
    
    var cardId = this.id;
    
    return (
      <div className={cardClasses} dataId={cardId} onClick={this.handleClick}>
        {this.props.type}
      </div>
    );
  }
}