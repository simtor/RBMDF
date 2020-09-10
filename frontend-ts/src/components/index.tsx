import React from 'react';
import styled from "styled-components"

const StyledH1 = styled.h1`
color: blue;
`

interface HeaderProps{
    name: string
    age: number  
  }

export default function Header(props: HeaderProps){
    return(
      <StyledH1>Hello{props.name}. your{props.age}</StyledH1>
    )
  }


