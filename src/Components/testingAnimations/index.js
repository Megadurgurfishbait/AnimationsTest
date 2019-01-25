import React, { Component } from "react";
import styled from "styled-components";
import myData from "../../Assets/Fossar/index";
import Card from "./card";
import * as ScrollMagic from 'scrollmagic';



import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";
export default class testingAnimations extends Component {
  constructor(props) {
    super(props);
    // cards, elements tha will be used in the tween
    // the timeline instance
    this.dick = null;
      this.containerRef = null;
      this.myTween = null;
      this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
      
      this.myTween = TweenMax.to(this.containerRef, 1, {x: 100, y: 100, immediateRender: false });
       var scene = new ScrollMagic.Scene({
            triggerElement: this.dick,
            duration: "100%",
            offset: 250
          })
          .setPin(this.containerRef)
          .setTween(this.myTween)
          .addTo(this.controller)


  }

  render() {
    return (
      <Container ref={div => this.dick = div} >
        <King ref={div => this.containerRef = div}  className="scene">
          <Card  values={myData[0]} />
        </King>
      </Container>
    );
  }
}



const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-wrap: wrap;

  & > button {
    width: 100%;
  }
`;

const King = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 33.333%;
  min-width: 600px;
  max-height: 600px;

  @media (max-width: 1800px) {
    width: 33.333%;
    min-width: 500px;
    max-height: 500px;
  }

  @media (max-width: 1500px) {
    width: 33.333%;
    min-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 1200px) {
    width: 33.333%;
    min-width: 300px;
    max-height: 300px;
  }

  @media (max-width: 1050px) {
    width: 50%;
    min-width: 400px;
  }

  @media (max-width: 800px) {
    width: 100%;
    max-height: 100%;
  }
`;
