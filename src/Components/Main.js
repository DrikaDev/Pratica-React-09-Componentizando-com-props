import React, {Component} from "react"
import styled from "styled-components"
import comidaJaponesa from "../img/comida_japonesa.jpg"

const Foto = styled.img`
    width: 32rem;
    border-radius: 20px;
    margin: 2rem 0 2rem 25rem;
`

export default class Main extends Component{
    render(){
        return(
            <div>
                <Foto src={comidaJaponesa}/>
            </div>
        )
    }
}