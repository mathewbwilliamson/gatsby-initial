import React from 'react';
import Link from 'gatsby-link';
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

const Menu = () => {
  return (
    <Container>
    <nav style={{
      display: 'block'
    }}>
    <UlStyle>
      <LiMenu>
          <Link to="/about" class="">about</Link>
          <div class="menu-pointer "></div>
      </LiMenu>
      <LiMenu>
          <Link to="/services" class="">services</Link>
          <div class="menu-pointer "></div>
      </LiMenu>
      <LiMenu>
          <Link to="/work" class="">work</Link>
          <div class="menu-pointer "></div>
      </LiMenu>
      <LiMenu>
          <Link to="/contact" class="">contact</Link>
          <div class="menu-pointer "></div>
      </LiMenu>
  </UlStyle>
    </nav> 
    </Container>
  )
}

export default Menu;