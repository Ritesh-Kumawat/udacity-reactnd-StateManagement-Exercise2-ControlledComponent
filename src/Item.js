import React from 'react';
import PropTypes from 'prop-types';

/*
This presentational component should just be a Stateless Functional Component.

Its a common pattern - a component for a thing and a component for a list
of those things.
*/
const Item = props => {
  return <li>{props.item}</li>;
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Item;
