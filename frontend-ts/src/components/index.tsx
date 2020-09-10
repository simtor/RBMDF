import React from 'react';

interface HeaderProps{
    name: string
    age: number  
  }

export default function Header(props: HeaderProps){
    return(
      <h1>Hello{props.name}. your{props.age}</h1>
    )
  }