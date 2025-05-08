import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faPaperPlane  } from '@fortawesome/free-solid-svg-icons'
import { library, toHtml, icon } from "@fortawesome/fontawesome-svg-core";

import Address from './Address';
import Config from './Config';

import perfil from "./imgs/perfil.jpg";


library.add(faImage, faPaperPlane);
const getSVGURI = (faIcon, color) =>{
    const abstract = icon(faIcon).abstract[0];
    if(color) {
         abstract.children[0].attributes.fill = color;
    }

    return `data:image/svg+xml;base64,${btoa(toHtml(abstract))}`;
}

function Home(props){
    const [themeDark] = props.themeDark;
    const [languages, currentLang = languages[0]] = props.lang;
    const {text} = currentLang;
    const docName = text.doc.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return (
        <section data-theme-dark={themeDark}>
            <Config themeDark={props.themeDark} lang={props.lang}/>
            <main>
                <div className="left">
                    <img src={perfil} style={{backgroundImage: `url(${getSVGURI(faImage)})`}} width="200px" height="200px" alt=""/>
                </div>
                <div className="right">
                    <div className="text">
                        <h1>Cleidiane da Rosa Eloy</h1>
                        <h2>{text.position}</h2>
                        <p>{text.aboutMe}</p>
                    </div>
                    <Address/>
                    
                    <a className="doc" href={`/${docName}`} ><FontAwesomeIcon icon={faPaperPlane}/> <span>{text.doc}</span></a>
                </div>
            </main>
        </section>

    )
}
export default Home;