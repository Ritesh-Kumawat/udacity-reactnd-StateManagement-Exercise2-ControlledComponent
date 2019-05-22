import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

/*
This presentational component should just be a Stateless Functional Component.
*/
const ListOfItems = props => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item">{props.items.map((item, index) => <Item key={index} item={item} />)}</ol>
    </div>
  );
};

ListOfItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListOfItems;
