import React, {Component}  from 'react';
import styled from 'styled-components';
import { TimelineLite, Power4 } from "gsap/all";
import {MainColor, SecondColor} from '../../Assets/myColors';

export default class Card extends Component {

      constructor(props){
		super(props);
		this.logoTl = new TimelineLite({ paused:true });
		this.content = null;
		this.head = null;
            this.description = null;
            this.cord = null;
	}

      componentDidMount(){
            this.logoTl
            .set(this.content, { autoAlpha: 1 })// show content div
            .from(this.head, .2, { y: "-150%", ease: Power4.easeOut })
            .from(this.description, 0.3, {autoAlpha: 0 })
            .from(this.cord, .2, {y: 50});
      }


      render(){
            const {values} = this.props;
            return(
                  <Container onMouseOver={() => this.logoTl.play()} onMouseLeave={() => this.logoTl.reverse()}>
                  <img src={`${values.image}`}></img>
                  <CardItems ref= {CardItems => this.content = CardItems}>
                        <TitleContainer>
                              <Title ref= {Title => this.head = Title} >
                                    {values.name}
                              </Title>
                        </TitleContainer>
                        <DescContainer >
                              <Desc ref= {DescContainer => this.description = DescContainer}>
                                    {values.desc}
                              </Desc>
                        </DescContainer>
                        <CordContainer ref= {CordContainer => this.cord = CordContainer}>
                              <Cord>{values.cord}</Cord>
                        </CordContainer>
                  </CardItems>
            </Container>
            )
      }
}


const Container = styled.div`
      display: flex;
      height: 400px;
      width: 100;

      margin: 0px;
      position: relative;
      & > img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position:center;
            position:absolute;
            z-index: -1;
      @media (max-width: 1200px) {
            min-width: 300px;
            max-height: 300px;
            }

      @media (max-width: 800px) {
            width: 100%;
            max-height: 100%;
            }
      }
`;

const CardItems = styled.div`
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      overflow: hidden;
      transition: all .3s;
      &:hover {
            background-color: rgba(89,45,106,.6);
      }
`;

const TitleContainer = styled.div`
      display: flex;
      overflow: hidden;
      position: relative;
      justify-content: center;
      width: 100%;
`;

const Title = styled.h1`
      margin-top: 20px;
      height: 100%;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 5px;
      font-weight: 800;
`;

const DescContainer = styled.div`
      display:flex;
      justify-content: center;
      align-items: center;
      line-height: 40px;
      padding: 10px;
      width: 100%;
`;

const Desc = styled.div`
      display: block;
      font-size: 14px;
      font-weight: 400;
`;

const CordContainer = styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      width: 100%;

`;

const Cord = styled.h5`
      font-weight: 100;
      font-size: 14px;
      margin-right: 10px;
`;

