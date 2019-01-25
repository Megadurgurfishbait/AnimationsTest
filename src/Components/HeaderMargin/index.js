import React from "react";
import styled from "styled-components";

const HeaderMargin = () => (
  <Container>
    <Box color="#F6F8F9">
      <Title color="rgba(61,28,84,1)">Waterfalls of Iceland</Title>
      <Description color="rgba(61,28,84,1)">
        Iceland is a country of many amazing waterfalls, but which are the best
        ones? Where do you need to travel to find the most spectacular
        waterfalls? Are there waterfalls all around the country?
      </Description>
    </Box>
    <Box color="rgba(61,28,84,1)">
      <Title>Museums of Iceland</Title>
      <Description>
        What Museums are in Iceland? What are the best museums in Reykjavik and
        where can I find them?
      </Description>
    </Box>
    <Box color="#F6F8F9">
      <Title color="rgba(61,28,84,1)">GEOLOGIC FORMATIONS</Title>
      <Description color="rgba(61,28,84,1)">
        Iceland is one of the most active volcanic regions on Earth, where
        almost all types of volcanic and geothermal activity can be found. The
        volcanism on Iceland is attributed to the combination of the Iceland
        plume hotspot activity and the Mid-Atlantic Ridge activity.
      </Description>
    </Box>
    <Box color="rgba(61,28,84,1)">
      <Title color="#F6F8F9">GEOLOGIC FORMATIONS</Title>
      <Description color="#F6F8F9">
        Iceland is one of the most active volcanic regions on Earth, where
        almost all types of volcanic and geothermal activity can be found. The
        volcanism on Iceland is attributed to the combination of the Iceland
        plume hotspot activity and the Mid-Atlantic Ridge activity.
      </Description>
    </Box>
  </Container>
);
export default HeaderMargin;

const Container = styled.div`
  height: 200px;
  width: 100vw;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  flex-direction: nowrap;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 25%;
  background-color: ${props => props.color};
`;
const Title = styled.h1`
  height: 60px;
  width: 100%;
  color: white;
  font-size: 20px;
  font-weight: 800;
  line-height: 60px;
  color: ${props => props.color};
  text-transform: uppercase;
`;

const Description = styled.div`
  font-size: 13px;

  font-weight: 500;
  line-height: 1.4;
  padding: 10px;
  color: ${props => props.color}
`;
