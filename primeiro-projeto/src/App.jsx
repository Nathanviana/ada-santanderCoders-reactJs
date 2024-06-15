import React from "react";
// import { Article } from "./components/Article/Article";
import { Navbar } from "./components/navBar/Navbar";
import { Counter } from "./components/Counter/Counter";

import './Styles/App.css';

// import artImg01 from "./asserts/images/article01.jpg"
// import artImg02 from "./asserts/images/article02.jpg"

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Counter />

      {/* <section id="articles">
        <Article title="Programação" provider="canso 1" description="Rotina de garotos de programa tentem a ser puxadas e muitas das vezes cansativas, aonde diariamente buscam aumentar seus conhecimentos com linhas e linhas de codigo, alguns buscam desafio mais hard e vão direto pra programação em java, sendo umas das linguagem que mais causam medo nos virgem da programação." thumbnail={artImg01}  />

        <Article title="Programação" provider="canso 2" description="Rotina de garotos de programa tentem a ser puxadas e muitas das vezes cansativas, aonde diariamente buscam aumentar seus conhecimentos com linhas e linhas de codigo, alguns buscam desafio mais hard e vão direto pra programação em java, sendo umas das linguagem que mais causam medo nos virgem da programação." thumbnail={artImg02}/>

        <Article title="Programação" provider="canso 3" description="Rotina de garotos de programa tentem a ser puxadas e muitas das vezes cansativas, aonde diariamente buscam aumentar seus conhecimentos com linhas e linhas de codigo, alguns buscam desafio mais hard e vão direto pra programação em java, sendo umas das linguagem que mais causam medo nos virgem da programação." thumbnail={artImg01} />

        <Article title="Programação" provider="canso 4" description="Rotina de garotos de programa tentem a ser puxadas e muitas das vezes cansativas, aonde diariamente buscam aumentar seus conhecimentos com linhas e linhas de codigo, alguns buscam desafio mais hard e vão direto pra programação em java, sendo umas das linguagem que mais causam medo nos virgem da programação." thumbnail={artImg02}/>
      </section> */}
      </>
    );
  }
}

export default App;
