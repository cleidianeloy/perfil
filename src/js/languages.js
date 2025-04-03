//images
import brazil from "../imgs/brazil.png";
import eua from "../imgs/eua.png";
//pdf
import resume from "../pdf/resume.pdf"
import curriculo from "../pdf/curriculo.pdf";

export const languages = [{
    flag: brazil, 
    name: "PT-BR", text: {
    themeDarkLabel: "Mudar para o tema claro",
    themeLightLabel: "Mudar para o tema escuro",
    selectLabel: "Mudar a Linguagem",
    position: "Desenvolvedora Front-End", 
    aboutMe: "Desenvolvedora Web com paixão por tecnologia e experiência em projetos de ensino a distância. Possui habilidades sólidas em javascript, jquery, CSS, HTML e React. Comprometida com a acessibilidade digital e com o desenvolvimento de soluções inovadoras. Proativa, colaborativa e sempre disposta a aprender e crescer profissionalmente.",
    doc: "Currículo"
}, doc: curriculo} ,
    { flag:eua, 
        name:"EN",  
        text: {
        themeDarkLabel: "switch to light theme",
        themeLightLabel: "switch to dark theme",
        selectLabel: "switch language",
        position: "Front-End Developer", 
        aboutMe: "Passionate Brazilian Web Developer with a focus on creating accessible and inclusive digital experiences. Experienced in developing e-learning platforms and web applications using JavaScript, React, and other front-end technologies. Committed to making a positive impact through technology.",
        doc: "Résumé"
    }, doc: resume }];