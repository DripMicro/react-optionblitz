import React from 'react'
import styled from 'styled-components'
function Footer() {
    return (
        <Container>
            <Head>
                <div>
                    <p>Blog</p>
                    <p>Legal</p>
                    <p>Privacy Policy</p>
                </div>

                <div>
                    <img src="/images/logo_Coin.png" />
                </div>

                <div>
                    <Social src="/images/fb.png"/>
                    <Social src="/images/twitter.png"/>
                    <Social src="/images/insta.png"/>
                    
                    <Social src="/images/fb.png"/>
                    <Social src="/images/utube.png"/>
                    <Social src="/images/telegram.png"/>
                </div>
                
            </Head>

            <Body>
                <p>© Option Blitz 2021</p>
                </Body>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 100px;
flex-direction: column;

@media only screen and (max-width: 600px) {
    margin-top: 50px;
}

@media only screen and (min-width: 601px) {
    
}
`

const Head = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 30px;
border-bottom: 1px solid #CDD6F5;

div{
    display: flex;
    p{
        margin: 0 20px;
        font-size: 16px;
        line-height: 22px;
        color: #CDD6F5;
    }
}

@media only screen and (max-width: 600px) {

flex-direction: column;

div:not(:last-child) {
    margin-bottom: 1rem;
}
div:nth-of-type(1) {
    order: 2;
}
div:nth-of-type(2) {
    order: 1;
}
div:nth-of-type(3) {
    order: 3;
}

}

`

const Body = styled.div`
width: 100%;
display: flex;
aligb-items: center;
justify-content: center;
margin-top: 15px;
padding-bottom: 20px;
p{
    font-size: 14px;
line-height: 20px;
color: #59648A;
}
`

const Social = styled.img`
margin: 0 10px;
`
export default Footer
