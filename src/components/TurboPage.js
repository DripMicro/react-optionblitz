import React from 'react'
import styled from 'styled-components'
function TurboPage() {
    return (
        <Container>
            <Wrap>
                <HeadOne>
                    <h1>TRADING PRODUCTS: TURBOS</h1>
                </HeadOne>
                <HeadTwo>
                    <h1>OptionBlitz presents world’s first decentralised Turbos</h1>
                </HeadTwo>
                <Boxes>
                    <div>
                        <img src="/images/10.png"/>
                        <p>1:200 leverage</p>
                    </div>
                    <div>
                        <img src="/images/11.png"/>
                        <p>NO MARGIN</p>
                    </div>
                    <div>
                        <img src="/images/1211.png"/>
                        <p>NO EXPIRATION</p>
                    </div>
                    <div>
                        <img src="/images/13.png"/>
                        <p>Fixed 0.1% spread</p>
                    </div>
                    <div>
                        <img src="/images/14.png"/>
                        <p>0% slippage</p>
                    </div>
                    <div>
                        <img src="/images/15.png"/>
                        <p>Guaranteed execution</p>
                    </div>
                </Boxes>
                <HeadThree>
                    <h1>What are Turbos?</h1>
                </HeadThree>
                <Para>
                    <p>Turbos are leveraged instruments which track an underlying price. You can go long or short and your risk is capped. Instead of margin you have a knock-out barrier price level which you control by configuring the “protection” level. </p>
                    <p>If this level is hit your position is liquidated. Optionblitz Turbos also have a funding rate to similar to perpetual futures/swaps although due to the trade specification of Turbos, swap rates are fundamentally lower.</p>
                    <p>Turbos are linear instruments and   you can choose leverage from 10x to 200x. You can set contract size from any amount above $1 up to a maximum according to platform liquidity.</p>
                </Para>
                <Image>
                    <img src="/images/Desktop.png" />
                </Image>
            </Wrap>
        </Container>
    )
}
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: url("/images/Bg3.png");
background-size: cover;
background-repeat: no-repeat;
margin-top: 250px;

@media only screen and (max-width: 600px) {
    margin-top: 50px;
}
`

const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
`

const HeadOne = styled.div`
margin-top: 450px;

@media only screen and (max-width: 600px) {
    margin-top: 200px;
}

h1{
    font-weight: 600;
font-size: 34px;
line-height: 46px;
text-align: center;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #00CD86;
font-family: "Conthrax Sb";

@media only screen and (max-width: 600px) {
    font-size: 24px;
line-height: 34px;
}
}
`

const HeadTwo = styled.div`
  margin-top: 60px;
  
  h1{
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    color: #CDD6F5;
    text-align: center;
    letter-spacing: 0.04em;
    font-family: "Conthrax Sb";
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const Boxes = styled.div`
border-top: 1px solid #CDD6F5;
border-left: 1px solid #CDD6F5;
border-right: 1px solid #CDD6F5;
border-radius: 8px 8px 0 0;
width: 100%;
margin-top: 30px;
div {
  padding: 20px;
  img {
    height: 26px;
    margin-bottom: 1rem;
  }
  p {
    font-family: "Conthrax Sb";
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #CDD6F5;
  }
}
@media only screen and (max-width: 600px) {
  display: grid;
  grid-template-columns: 50% 50%;
  div {
    padding: 15px 10px;
    p {
      font-size: 12px;
      line-height: 16px;
    }
  }
  div:nth-child(odd) {
    border-right: 1px solid #CDD6F5;
  }
  div:not(:nth-last-child(-n+2)) {
    border-bottom: 1px solid #CDD6F5;
  }
}
@media only screen and (min-width: 601px) {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  div {
    padding: 20px;
  }
  div:not(:last-child) {
    border-right: 1px solid #CDD6F5;
  }  
}
`

const HeadThree = styled.div`
   margin: 100px 0 30px 0;
   width: 100%;

   @media only screen and (max-width: 600px) {
    margin: 50px 0 20px 0;
}

  h1{
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
letter-spacing: 0.04em;
text-transform: uppercase;
font-family: "Conthrax Sb";
color: #CDD6F5;

@media only screen and (max-width: 600px) {
    font-size: 20px;
line-height: 24px;
}


  }
`

const Para = styled.div`
  display: flex;
  align-items: center;
  justify-content: ceneter;
  width: 90%;
  margin: 20px 0;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
}

  p{
    font-size: 20px;
    line-height: 30px;
    color: #CDD6F5;
    text-align: left;
    margin: 0 20px;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
line-height: 22px;
    }
    
  }

`

const Image = styled.div`

  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 120px;

  @media only screen and (max-width: 600px) {
    margin-right: 20px;
    margin-top: 30px;
}

  img{
      width: 100%;
  }
`
export default TurboPage
