import React, { Component } from "react";
import styled from "styled-components";
import HeaderBackground from "../../Assets/Header/eezy_02.svg";
import { MainColor, SecondColor } from "../../Assets/myColors";
import { TimelineLite, Power0, Linear } from "gsap/all";

class Header extends Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.logoTl = new TimelineLite({ paused: false });

    this.content = null;
    this.head = null;
    this.subhead = null;
    this.thirdhead = null;
    this.bottomhead = null;
  }

  componentDidMount() {
    // use the node ref to create the animation
    this.logoTl
      .set(this.content, { autoAlpha: 1, delay: 1 }) // show content div
      .from(this.head, 0.2, { y: "100%", ease: Linear.easeOut })
      .from(this.subhead, 0.2, { y: "100%", ease: Linear.easeOut }) // added -0.22 seconds prior to end this.of timeline
      .from(this.thirdhead, 0.2, { y: "100%", ease: Linear.easeOut }) // added 0.2 seconds after end of timeline
      .from(this.bottomhead, 0.2, { y: "100%", ease: Linear.easeOut });
  }
  render() {
    return (
      <Container>
        <NavBar>
          <TitleOfSite>Attractions of Iceland</TitleOfSite>
          <NavButtons>
            <NavItem> Home </NavItem>
            <NavItem> Waterfalls </NavItem>
            <NavItem> Museums </NavItem>
            <NavItem> Geologic Formations </NavItem>
          </NavButtons>
        </NavBar>
        <Drasl ref={Drasl => (this.content = Drasl)}>
          <Text>
            {" "}
            <TextItem ref={Partner => (this.head = Partner)}>
              <Span>Your</Span> partner
            </TextItem>{" "}
          </Text>
          <Text>
            {" "}
            <TextItem ref={Journey => (this.subhead = Journey)}>
              for <Span>your</Span> journey
            </TextItem>{" "}
          </Text>
          <Text>
            {" "}
            <TextItem ref={Beautiful => (this.thirdhead = Beautiful)}>
              around the beautiful{" "}
            </TextItem>{" "}
          </Text>
          <Text>
            {" "}
            <TextItem ref={Iceland => (this.bottomhead = Iceland)}>
              island of Iceland
            </TextItem>{" "}
          </Text>
        </Drasl>
      </Container>
    );
  }
}
export default Header;

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url(${HeaderBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;

const NavBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100px;
`;

const TitleOfSite = styled.h2`
  width: 50%;
  color: white;
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 30px;
  letter-spacing: -3px;
  text-transform: uppercase;
  margin: 0;
  &:hover,
  &:focus {
    color: ${MainColor};
    cursor: pointer;
  }
`;

const NavButtons = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 50%;
  align-items: center;
  height: 100%;
`;

const NavItem = styled.li`
  color: white;
  font-size: 18px;

  font-weight: 500;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  &:hover,
  &:focus {
    color: ${MainColor};
    cursor: pointer;
  }
`;

const Drasl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100vw;
  margin-left: 40px;
`;

const Text = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const TextItem = styled.h3`
  font-size: 80px;
  font-weight: 800;
  line-height: 1.3;
  text-shadow: -1px 0 ${MainColor}, 0 1px ${MainColor}, 1px 0 ${MainColor},
    0 -1px ${MainColor};
`;

const Span = styled.span`
  color: ${SecondColor};
  text-shadow: none;
`;
