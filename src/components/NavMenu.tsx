import React, { CSSProperties } from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from "office-ui-fabric-react";

const navLinkActiveStyle: CSSProperties = {
  borderBottom: "3px solid #5e5eff",
};

const MyNavLink = styled(NavLink)`     
   color: black;
   padding: 25px 12px 5px 12px;
   text-align: center;
   display: inline-block;
   text-decoration: none;
   margin: 7px;
   border-bottom: 3px solid #c9c9c9;

  :hover  {
    text-decoration: none;    
    border-bottom: 3px solid #9e9e9e;
  };
`;

const NavText = styled(Text)`
  font-size: 18px;
`;

export class NavMenu extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <nav>
        <MyNavLink to="/" exact activeStyle={navLinkActiveStyle}>
          <NavText>Home</NavText>
        </MyNavLink>
        <MyNavLink to="/projects" activeStyle={navLinkActiveStyle}>
          <NavText>Projects</NavText>
        </MyNavLink>
      </nav>
    );
  }
}