import React, {Component} from "react"
import styled from "styled-components"

const Title = styled.div`
    border: 3px solid black;
    border-radius: 20px;
    width: 100%;
    text-align: center;
    border: 1px solid black;

    h1{
        font-size: 4rem;
    }

    p{
        font-size: 4rem;
    }
`

export default class Header extends Component{
    render(){
        return(
            <Title>
                <h1>{this.props.titulo}</h1>
                <p>{this.props.comida}</p>
            </Title>
        )
    }
}