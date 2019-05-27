import React from 'react';
import {useTheme} from '@material-ui/styles';
import styled from 'styled-components';

function Header () {
  const {header, palette} = useTheme ();

  const Header = styled.header`
    display: flex;
    align-items: center;

    position: fixed;
    z-index: 3;
    height: ${header.height};
    width: 100%;
    top: 0;
    left: 0;

    background-color: ${palette.primary.main};
  `;

  const Logo = styled.a`
    color: white;
    display: flex;
    flex: 0;
    padding: 0 40px;
    position: relative;
  `;

  return (
    <Header>
      <Logo>Spotaroom</Logo>
      {/* <Nav></Nav> */}
    </Header>
  );
}

export default Header;
