import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { HtmlTagWrapper } from './html-tag-wrapper';
import { ChatbotLogo, UserLogo } from "./ReactLogo";
import { useNavigate, NavigateFunction } from "react-router-dom";
interface DayProps {
  isToday?: boolean;
  isSelected?: boolean;
}

const Frame = styled.div`
  width: 400px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
`;

const Button = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props: DayProps) =>
    props.isToday &&
    css`
      border: 1px solid #eee;
    `}

  ${(props: DayProps) =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
`;

interface SimpleCalendarProps {
  clickDisabled?: boolean;
}
class SimpleCalendarDtl extends React.Component {


  
  render() {
    const icon = (
      <UserLogo
        width="30"
        height="30"
        className="boticon"
      />
    );
  return (
    <Frame>
      <Header>
       
      </Header>
      <Body>
         {icon}
      </Body>
    </Frame>
  );
  }
}

function SimpleCalendar(props: any) {
  let navigate: any = useNavigate();
  return <SimpleCalendarDtl {...props} navigate={navigate} />;
}//


export default(SimpleCalendar);

//export default SimpleCalendarDtl;