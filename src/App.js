import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Home'
import './scss/style.scss';

import brazil from "./imgs/brazil.png";
import eua from "./imgs/eua.png";
import resume from "./pdf/resume.pdf"
import curriculo from "./pdf/curriculo.pdf";

function App() {
  const [themeDark, setThemeDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const languages = [{flag: brazil, name: "PT-BR", text: {
      themeDarkLabel: "Mudar para o tema claro",
      themeLightLabel: "Mudar para o tema escuro",
      selectLabel: "Mudar a Linguagem",
      position: "Desenvolvedora Front-End", 
      aboutMe: "Desenvolvedora Web com paixão por tecnologia e experiência em projetos de ensino a distância. Possui habilidades sólidas em javascript, jquery, CSS, HTML e React. Comprometida com a acessibilidade digital e com o desenvolvimento de soluções inovadoras. Proativa, colaborativa e sempre disposta a aprender e crescer profissionalmente.",
      doc: "Currículo"
  }, doc: curriculo} 
  ,{ flag:eua, name:"EN",  text: {
    themeDarkLabel: "switch to light theme",
    themeLightLabel: "switch to dark theme",
    selectLabel: "switch language",
    position: "Front-End Developer", 
    aboutMe: "Passionate Brazilian Web Developer with a focus on creating accessible and inclusive digital experiences. Experienced in developing e-learning platforms and web applications using JavaScript, React, and other front-end technologies. Committed to making a positive impact through technology.",
    doc: "Résumé"
}, doc: resume }];
  return (
    <div className='app'>
          <Routes>
               <Route exact path="/" element={<Home themeDark={[themeDark, setThemeDark]} lang={[languages]}/>}/>
               {languages.map(function(lang, index){
                 console.log(`/${lang.name.toLowerCase()}`)
                  return <Route path={`/${lang.name.toLowerCase()}`} element={<Home themeDark={[themeDark, setThemeDark]} lang={[languages, lang]} key={index} />}/>
              })}
          </Routes>
    </div>

  );
}

export default App;
