import React from "react";
import PropTypes from "prop-types";
import { items, sellers } from "../data";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Text, Bold } from "../globalstyles";

const Name = styled.p`
  font-weight: bolder;
  font-size: 40px;
  margin: none;
`;

const LatinName = styled(Name)`
  font-weight: normal;
  font-size: 1em;
  font-style: italic;
  color: #bfbfbf;
`;

const Description = styled.p`
  font-size: 20px;
`;

const Pic = styled.img`
  border-radius: 15%;
  height: 500px;
`;

const Origin = styled.p`
  font-size: 20px;
  font-style: italic;
`;

const ButtonSection = styled.section`
  margin: 30px;
`;

const Button = styled.button`
  border-radius: 15px;
  background-color: rgb(153, 51, 255);
  font-size: 30px;
  color: white;
  width: 500px;
  padding: 20px;
`;

const Seller = styled.section`
  display: flex;
`;
const SoldBy = styled.p`
  font-size: 20px;
  margin-left: 10px;
`;

const PicSeller = styled(Pic)`
  border-radius: 50%;
  height: 60px;
`;

const Details = styled.div`
  display: flex;
`;

const Section = styled.section`
  margin: 30px;
`;

const ItemDetails = () => {
  const itemId = useParams();
  const name = itemId.itemId;
  const item = Object.values(items).find((item) => item.name === name);
  const seller = Object.values(sellers).find(
    (seller) => seller.id === item.sellerId
  );
  console.log(item);
  console.log(seller);

  return (
    <Details>
      <Pic src={item.imageSrc} alt={item.name}></Pic>
      <Section>
        <Name>{item.name}</Name>
        <LatinName>{item.latinName}</LatinName>
        <Description>{item.description}</Description>
        <Origin>Country of origin: {item.countryOfOrigin}</Origin>
        <ButtonSection>
          {item.quantity > 0 ? (
            <Button>${item.price} - Buy now</Button>
          ) : (
            <Button disabled>Out of Stock</Button>
          )}
        </ButtonSection>
        <Seller>
          <PicSeller src={seller.avatarSrc} alt={seller.id}></PicSeller>
          <SoldBy>
            Sold by <Bold>{seller.storeName}</Bold>
          </SoldBy>
        </Seller>
      </Section>
    </Details>
  );
};

export default ItemDetails;
