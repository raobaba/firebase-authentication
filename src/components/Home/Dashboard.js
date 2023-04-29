import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 48px;
  display:flex;
  justify-content:center;
`;
const Dashboard = ({ name }) => {
    console.log(name)
    alert(`Welcome To Dashboard ${name}`)
  return (
    <div>
        <Title>{name ? `Welcome - ${name}` : "Login please"}</Title>
    </div>
  );
}

export default Dashboard;