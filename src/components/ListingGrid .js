import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: space-between;
  text-align: center;
`;

const Pic = styled.img`
  position: relative;
  top: -50px;
  width: 250px;
  border-radius: 20px;
`;

const Description = styled.div`
  font-size: 40px;
  display: block;
  font-weight: bolder;
`;

const LatinDescription = styled(Description)`
  font-style: italic;
  font-size: 20px;
  color: #bfbfbf;
`;

const Item = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 20px 2px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 20px 2px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 20px 2px rgba(204, 204, 204, 1);
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
            <Description>{item.name}</Description>
            <LatinDescription>{item.latinName}</LatinDescription>
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
