import React from 'react'
import { Link } from 'gatsby';
import Menu from '../oldComponents/menu'
import styled from 'styled-components';

const UlStyle = styled.ul`
  marginRight: 10px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding: 0;
`;

const LiMenu = styled.li`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    border-left: 1px solid #d80a86;
    display: block;
    padding: 23px 46px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    font-family: "Open sans", sans-serif;
`

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '0rem',
      marginTop: '0',
      borderRight: '1px solid #d80a86',
    }}
  >
    <div
      style={{
        background: 'url(http://www.64labs.com/images/main_nav_bckgrd.png) #ec008c',
      backgroundImage: 'url(http://www.64labs.com/images/main_nav_bckgrd.png)',
      backgroundColor: 'rgb(236, 0, 140)',
      marginBottom: '2rem',
      marginTop: '0',
      borderRight: '1px solid #d80a86',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
      }}
    >
      <div class="logo" 
        style={{
          display: 'block',
          
          marginLeft: '-160px',
          
          height: '68px',
          }
        }>
                <img src="../../public/static/home_logo.png" alt="" title="" />
      </div>
      <Container>
    <UlStyle>
      <LiMenu>
          <Link to="/about" class="" style={{
            backgroundColor: 'transparent',
            display: 'block',
            padding: '23px 46px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '700',
            fontFamily: '"Open sans", sans-serif',
          }}>about</Link>
          <div class="menu-pointer "></div>
      </LiMenu>
      
      <LiMenu>
          <Link to="/work" class="" style={{
            backgroundColor: 'transparent',
            display: 'block',
            padding: '23px 46px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '700',
            fontFamily: '"Open sans", sans-serif',
          }}>work</Link>
          <div class="menu-pointer "></div>
      </LiMenu>
      <LiMenu>
          <Link to="/contact" class="" style={{
            backgroundColor: 'transparent',
            display: 'block',
            padding: '23px 46px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '700',
            fontFamily: '"Open sans", sans-serif',
          }}>contact</Link>
          <div class="menu-pointer "></div>
      </LiMenu>
  </UlStyle>
    </Container>
    </div>
  </div>
)

export default Header
