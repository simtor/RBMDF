// eslint-disable-next-line
import React, {useState}from "react"
import styled from "styled-components"



// eslint-disable-next-line
const StyledH1 = styled.h1`
color: blue;
`


export default function DrugSearch(){
    return(
        <form> <label>Search for Drugs:
        <input type="text" name="drug" id="drug"></input>
        </label>
        <input type="submit" name="submit"></input>
        </form>
    //   <StyledH1>Hello{props.name}. your{props.age}</StyledH1>
    )
  }