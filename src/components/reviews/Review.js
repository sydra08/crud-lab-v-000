import React, { Component } from 'react';

class Review extends Component {
  handleReviewClick(){
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    });
  }

  render() {
    return (
      <li>
        {this.props.review.text} &nbsp;
        <button onClick={() => this.handleReviewClick()}>Delete</button>
      </li>
    );
  }
};

export default Review;
