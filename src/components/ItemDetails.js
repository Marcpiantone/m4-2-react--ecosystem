import React from "react";
import PropTypes from "prop-types";
import items from "../data";

const Fruit = ({ items }) => {
  return <p>{items.name}</p>;
};

export default Fruit;
