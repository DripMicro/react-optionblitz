import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function Nav() {
    const [isMobile, setisMobile] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const handleLogin = async() => {
        setisMobile(true);
        console.log('sdfasdf');
        console.log(isMobile);
    }
    const handleHamburger = async() => {
        if(hamburger)
            setisMobile(false);
        else 
            setisMobile(false);
    }
    let logo;
    if (isMobile){
        logo = (
            <Logo>
                <img src="/images/logo_Coin.png"/>
            </Logo>
        )
    } else {
        logo = (
            <Logo>
                <img src="/images/logo_Coin.png"/>
            </Logo>
        )
    }

    return (
        <Container>
            <Hamburger>
                <button ><img src="/images/union.png"/></button>
            </Hamburger>
            <Logo>
                <img src="/images/logo_Coin.png"/>
            </Logo>
            {/* {logo} */}
            <Menu>
                <div>
                    <div><button><img src="/images/close.png"/></button></div>
                    <div><img src="/images/logo_Coin.png"/></div>
                </div>
                <span><a>About</a></span>
                <span><a>Ecosystem</a></span>
                <span><a>Trading Products</a></span>
                <span><a>Markets</a></span>
                <span><a>Affilates</a></span>
                <span><a>Staking</a></span>
                <span><a>BLX tokens sale</a></span>
                <span><a>Roadmap</a></span>
                <span><a>FAQ</a></span>
                <span><a>Blog</a></span>
                <span><a>Trading Acadamy</a></span>
                <span><a>Help</a></span>
            </Menu>
            <Login>
                <button onClick = {handleLogin}>LOGIN</button>
            </Login>
        </Container>
    )
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const Hamburger = styled.div`
    button {
        border: 0;
        background-color: #101218;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
    }
    @media (min-width: 1025px) { 

        display: none;
    
    }        
`

const Logo = styled.div``

const Menu = styled.div`

display: flex;
flex-direction: row;
span {
    padding: 10px;
}
a {
    color: #fff;
    font-size: 15px;
    color: #CDD6F5;
}
@media (max-width: 1024px) { 

    flex-direction: column;
    background-color: #101218;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);

    div {
        display: flex;
    }
    div > div:nth-of-type(1) {
        margin-right: 1rem;
        padding-left: 10px;
    }
    div > div:nth-of-type(2) {
        align-items: center;
    }
    div > div > button {
        border: 0;
        background-color: #101218;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
    }
    div > div > button > img {
        height: 20px;
    }
    div > div > img {
        height: 12px;
    }
    span {
        text-align: left;
    } 

}
@media (min-width: 1025px) { 

    div {
        display: none;
    }

}
`

const Login = styled.div`

button{
    width: 100px;
    height: 38px;
    background: #F08F1C;
    border-radius: 4px;
    border: none;
    outline: noen;
}`
export default Nav
