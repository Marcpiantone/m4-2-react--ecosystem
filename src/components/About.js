import React from "react";

import { Text } from "../globalstyles";
import { Bold } from "../globalstyles";

const About = (props) => {
  return (
    <>
      <Text>
        Fruit emporium is founded on a very simple principle:
        <Bold> Fruit is good.</Bold>
      </Text>
      <Text>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </Text>
    </>
  );
};

export default About;
