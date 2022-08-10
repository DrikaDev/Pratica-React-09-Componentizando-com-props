import React, {Component} from "react"
import styled from "styled-components"

const Rodape = styled.p`
    border: 1px solid black;
    text-align: center;
    font-size: 1.5rem;
`

export default class Footer extends Component{
    render(){
        return(
            <>
                <Rodape>{this.props.rodape}</Rodape>
            </>
        )
    }
}