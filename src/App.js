import React, {Component} from "react"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Style Script', cursive;
}
`
const CaixaPrincipal = styled.div`
  background-color: brown;
  width: 100%;
  height: 100vh;
`

export default class App extends Component{
  
  render(){
    return(
      <CaixaPrincipal>
        <GlobalStyle/>
        <Header titulo="Minha comida favorita:" comida="Japonesa"/>
        <Main/>
        <Footer rodape="&copy; Desenvolvido pela aluna Adriana Gutierrez"/>
      </CaixaPrincipal>
    )
  }
}