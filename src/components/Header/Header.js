import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <HeaderWrapper>
      <SuperHeader />
      <MainHeader>
        <Logo />
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
      </MainHeader>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
`;

const MainHeader = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  background-color: ${COLORS.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
  height: 72px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px;
  margin-right: auto;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
