import { useState } from 'react';
import Home from './Home'
import './style.scss';
function App() {
  const [themeDark, setThemeDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const languages = [{flag:"../dist/img", name: "pt-BR", text: {
      themeDarkLabel: "Mudar o tema para claro",
      themeLightLabel: "Mudar para o tema escuro",
      selectLabel: "Mudar a Linguagem",
      position: "Desenvolvedora Front-End", 
      aboutMe: "Desenvolvedora Web com paixão por tecnologia e experiência em projetos de ensino a distância. Possui habilidades sólidas em javascript, jquery, CSS, HTML e React. Comprometida com a acessibilidade digital e com o desenvolvimento de soluções inovadoras. Proativa, colaborativa e sempre disposta a aprender e crescer profissionalmente.",
      doc: "Curriculo"
  }} 
  ,{ flag:"../dist/img", name:"en"}];
  const [pt, eng] = languages;
  return (
    <div className="App">
      <Home themeDark={[themeDark, setThemeDark]} lang={[languages, pt]}/>
    </div>
  );
}

export default App;
