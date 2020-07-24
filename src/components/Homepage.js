import React from "react";

import { Text } from "../globalstyles";
import { Bold } from "../globalstyles";
import ListingGrid from "./ListingGrid ";

import { items } from "../data";

const Homepage = () => {
  const list = Object.values(items);
  return (
    <>
      <Text>
        Fruit emporium sells the finest fruits from this world and beyond
      </Text>
      <Text>
        <Bold>Browse items:</Bold>
      </Text>
      <ListingGrid list={list} />
    </>
  );
};

export default Homepage;
