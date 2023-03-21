import React, { Component } from "react";
import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/navbar";
import CardUser from "./components/CardUser/CardUser";
import Button from "./components/Button/Button";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header
          title="Soy el titulo a partir de una prop"
          subTitle="Soy un subtitulo a partir de una prop"
        />
        <div className="UserSection">
          <CardUser
            name="Daniel Di Salvo"
            date="Se unio en Enero 2021"
            description="Front-end Developer y profesor del Curso de React.js en CoderHouse"
            img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            backgroundColor="yellow"
          />
          <CardUser
            name="Raul Gutierrez"
            date="Se unió en Abril 2021"
            description="Scrum Master y UX Designer en Mercado Libre"
            img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          />
          <CardUser
            name="Francesca Bertotti"
            date="Se unió en Julio 2021"
            description="DevOps y profesora del curso de React.js en CoderHouse"
            img="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            backgroundColor="green"
          />
          <CardUser img="https://react.semantic-ui.com/images/avatar/large/daniel.jpg">
            <AccountCircleIcon />
          </CardUser>
        </div>
        <Button>Press Me!</Button>
        <Button>Press Me!</Button>
      </div>
    );
  }
}

export default App;