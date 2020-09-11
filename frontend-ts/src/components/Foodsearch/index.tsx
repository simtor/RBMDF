// eslint-disable-next-line
import React, {useState, FormEvent}from "react"
import styled from "styled-components"



// eslint-disable-next-line
const StyledH1 = styled.h1`
color: blue;
`


export default function DrugSearch(){
    // let searchDrug = useState("Beta")
    let [searchDrug, setsearchDrug] = useState("Beta")
    let [searchDrugs, setsearchDrugs] = useState([])

    // const updateDrug = ()=>{
    //     console.log("Input have been chnaged")
    //     // console.log("Updatedx")
    //     // setsearchDrug("Sorbitan")
    // }

    const updateDrug = (e: FormEvent<HTMLInputElement>)=>{
        console.log(e)
        // console.log("Input have been chnaged")
        // console.log("Updatedx")
        // setsearchDrug("Sorbitan")
    }
    return(
        <div>
        <form> <label>Search for Drugs:
        <input type="text" name="drug" id="drug" value={searchDrug} onChange={updateDrug}/>
        </label>
        <input type="submit" name="submit"></input>
        </form>
        {/* <button onClick={updateDrug}>Click me</button> */}
    <p>{searchDrug}</p>
    </div>
    //   <StyledH1>Hello{props.name}. your{props.age}</StyledH1>
    )
  }