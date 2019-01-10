import React, { Component } from "react";
import { TimelineLite, CSSPlugin, Power4 } from "gsap/all";
import styled from 'styled-components';
import Picture from './Assets/984-PosterArt-414b2a2b70c214a2947f5729677d9459.jpg';
class Test extends Component {
	
	constructor(props){
		super(props);

		this.logoTl = new TimelineLite({ paused:true });

		this.content = null;
		this.head = null;
		this.subhead = null;
		this.feature = null;
		this.description = null;
		this.icons = [];
	}

	// add instances to the timeline
	componentDidMount(){
		this.logoTl
			.set(this.content, { autoAlpha: 1 })// show content div
			.from(this.head, .4, { y: "100%", ease: Power4.easeOut })
			.from(this.subhead, .3, { y: -100, autoAlpha: 0 }) // added -0.25 seconds prior to end this.of timeline
			.from(this.feature, .4, { x: -100, autoAlpha: 0 }) // added 0.5 seconds after end of timeline
			.from(this.description, 0.4, { x: 100, autoAlpha: 0 })
			.from(this.footer, .2, {y: 50});
	}

	render(){
		return (
            <Container >	
				<Card ref={ div => this.content = div }>
				<CardOverley/>
					<Head >
						<h3 ref={node => (this.head = node)}>Brainfall</h3>
					</Head>
					<ImageContainer ref={div => this.subhead = div}>
						<Image/>
					</ImageContainer>
					<TitleBlock ref={div => this.feature = div}>
						<Title>Which Breaking Bad character are you?</Title>
					</TitleBlock>
					<DescriptionBlock ref={div => this.description = div}>
						<Description>Do you enjoy your breakfest? Or are you more accustomed to wearing head to tail yellow gear?</Description>
					</DescriptionBlock>
					<ButtonContainer ref={div => this.icons = div}>
						<ButtonPlay> Play Now </ButtonPlay>
						<ButtonRef />
					</ButtonContainer>
					<Line/>
					<ViewsAndLikesContainer ref={div => this.footer = div}>
						<ViewsAndLikes>15K VIEWS</ViewsAndLikes>
						<ViewsAndLikes> 245 LIKES </ViewsAndLikes>
					</ViewsAndLikesContainer>
				</Card>

				<button
					className="btn gsap-btn"
					onClick={() => this.logoTl.play()}
				>Play</button>
			</Container>  
        )
	}

}

export default Test;


const Container = styled.div`
    display: flex; 
	justify-content: center;


`;

const CardOverley = styled.div`
	display: block;
	height: 100%;
	width: 100%;
	background-color: darkred;
	opacity: .5	;
	position: absolute;
	z-index: -1;

`;

const Card = styled.div`
    height: 530px; 
	width: 350px;
	margin-bottom: 200px;
	background-image: url(${Picture});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: right;
	position: relative;
	z-index: -2;
`;

const Head = styled.div`
	display: flex;
	flex-wrap: nowrap;
	height: 40px;
	justify-content: flex-start;
	z-index: 1;
	position: relative;
	overflow: hidden;	
	& > p {
		margin: 10px;
	}

	& > h3 {
		line-height: 60px;
		text-align: center;
		position: absolute;
	}
`;

const ImageContainer = styled.div`
	margin: 20px 0px;
	display: flex;
	width: 100%;
	justify-content: center;
`;

const Image = styled.div`
	display: flex;
	width: 80%;
	height: 130px;
	background-image: url(${Picture});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border: 2px solid white;	
`;

const TitleBlock = styled.div`
	display: flex;
	justify-content: center;
`;

const Title = styled.h3`
	display: flex;
	height: 100%;
	width: 80%;
	text-align: left;
	line-height: 1.2;
`;
const DescriptionBlock = styled.div`
	display: flex;
	justify-content: center;
`;

const Description = styled.h5`
	text-align: left;
	height: 100%;
	width: 80%;
	font-size: 14px;
	font-weight: 100;
	line-height: 1.5;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 80%;
	margin: 20px 30px 45px 30px;
`;

const ButtonPlay = styled.div`
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	text-align: center;
	vertical-align: middle;
	border: 1px solid white;
	border-radius: 20px;
	width: 140px;
	height: 35px;
	line-height: 30px;
	letter-spacing: 0.0px;
	
`;

const ButtonRef = styled.button`
	display: flex;
	border: 1px solid white;
	height: 25px;
	width: 25px;
	border-radius: 100%;
	margin-left: 15px;
	background-color: transparent;
`;

const Line = styled.div`
	display: block;
	height: 1px;
	width: 80%;
	background-color: white;
	margin: 30px auto 0px auto;
`;

const ViewsAndLikesContainer = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
	margin: 0px auto;
	overflow:hidden;
`;

const ViewsAndLikes = styled.h5`
	margin: 10px 0px;
	font-size: 12px;
	text-align: center;
	font-weight: 100;
	color: white;
	letter-spacing: 2;
	color: #FFFFFF;
`;
