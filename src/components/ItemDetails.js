import React from "react";
import PropTypes from "prop-types";
import items from "../data";

const ItemDetails = ({ items }) => {
  return <p>{items.name}</p>;
};

export default ItemDetails;
