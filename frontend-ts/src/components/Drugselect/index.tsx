// eslint-disable-next-line
import React, {useState, FormEvent}from "react"
import styled from "styled-components"



// eslint-disable-next-line
const StyledH1 = styled.h1`
color: blue;
`


    interface IDrugSelectProps{
        name: string 
      }

    export function DrugSelect(props: IDrugSelectProps){
        let [basket, setBasket] = useState<string[]>([])
        const handlesubmit =(e: FormEvent<HTMLFormElement>) =>{
            e.preventDefault()
            basket.push(props.name)
            setBasket(basket)
        }
        return(
            <form onSubmit={handlesubmit}>
                <label>Drug lists</label>
                <button type="button">{props.name}</button>
            </form>
        )
    }
//     return(
        
//         <div>
//         <form onSubmit={handlesubmit}>
//         <button type="button"></button>
//         </form>
//         <div>
//             <h2>Search drugs</h2>
//         {searchDrugs.map(drugs => <p>{drugs}</p>)}
//         </div>

//     </div>
//     //   <StyledH1>Hello{props.name}. your{props.age}</StyledH1>
//     )
//   }