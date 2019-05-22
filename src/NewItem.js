import React from 'react';
import PropTypes from 'prop-types';

/*
This one cannot be a Stateless Functional Component
because forms in React are Controlled Components, meaning React
manages the data that's rendered on the screen when someone types something into
the form and what to do with that data.
*/
class NewItem extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}

NewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default NewItem;
