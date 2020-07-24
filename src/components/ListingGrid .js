import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: space-between;
`;

const Pic = styled.img`
  width: 200px;
`;

const Description = styled.div``;

const Item = styled.div`
  width: 300px;
  height: 300px;
`;

const ListingGrid = ({ list }) => {
  console.log(list);
  return (
    <Grid>
      {list.map((item) => {
        return (
          <Item>
            <Link key={item.id} to={`/items/${item.name}`}>
              <Pic src={item.imageSrc} />
            </Link>
            <Description>
              {item.name} {item.latinName}
            </Description>
          </Item>
        );
      })}
    </Grid>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListingGrid;
