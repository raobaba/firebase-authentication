import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDashboardLine } from 'react-icons/ri';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #333;
  color: white;
  padding: 0 50px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

const RKIcon = styled(RiDashboardLine)`
  font-size: 32px;
  margin-right: 10px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin: 0 15px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Home({ name }) {
  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <IconContext.Provider value={{ className: 'rk-icon' }}>
            <RKIcon />
          </IconContext.Provider>
          <h1>RK</h1>
        </LogoContainer>
        <NavLinks>
          {
            name ? <li><NavLink to="/dashboard">Dashboard</NavLink></li>:""
          }
          

          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
        </NavLinks>
        <UserContainer>
          <IconContext.Provider value={{ className: 'user-icon' }}>
            <FaSignInAlt />
          </IconContext.Provider>
          <IconContext.Provider value={{ className: 'user-icon' }}>
            <FaUserPlus />
          </IconContext.Provider>
        </UserContainer>
      </NavContainer>
    </Nav>
  );
}

export default Home;
