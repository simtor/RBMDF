// eslint-disable-next-line
import React, {useState, FormEvent}from "react"
import styled from "styled-components"



// eslint-disable-next-line
const StyledH1 = styled.h1`
color: blue;
`


export default function DrugSearch(){
    // let searchDrug = useState("Beta")
    let [searchDrug, setsearchDrug] = useState("")
    let [searchDrugs, setsearchDrugs] = useState<string[]>([])

    // const updateDrug = ()=>{
    //     console.log("Input have been chnaged")
    //     // console.log("Updatedx")
    //     // setsearchDrug("Sorbitan")
    // }

    const updateDrug = (e: FormEvent<HTMLInputElement>)=>{
        console.log(e.currentTarget.value)
        setsearchDrug(e.currentTarget.value)
        // console.log("Input have been chnaged")
        // console.log("Updatedx")
        // setsearchDrug("Sorbitan")
    }
    const handlesubmit =(e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        searchDrugs.push(searchDrug)
        setsearchDrugs(searchDrugs)
        setsearchDrug("")

    }
    return(
        <div>
        <form onSubmit={handlesubmit}><label>Search for Drugs:
        <input type="text" name="drug" id="drug" value={searchDrug} onChange={updateDrug}/>
        </label>
        <input type="submit" name="submit"></input>
        </form>
        {/* <button onClick={updateDrug}>Click me</button> */}
        <div>
            <h2>Search drugs</h2>
        {searchDrugs.map(drugs => <p>{drugs}</p>)}
        </div>

    </div>
    //   <StyledH1>Hello{props.name}. your{props.age}</StyledH1>
    )
  }