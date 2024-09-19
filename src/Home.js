import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faImage } from '@fortawesome/free-solid-svg-icons'
import { library, toHtml, icon } from "@fortawesome/fontawesome-svg-core";

import './lightTheme.scss'
import './darkTheme.scss'

library.add(faMoon, faSun, faImage);
const getSVGURI = (faIcon, color) =>{
    const abstract = icon(faIcon).abstract[0];
    if(color) abstract.chldren[0].attributes.fill = color;
    return `data:image/svg+xml;base64,${btoa(toHtml(abstract))}`;
}
function Home(props){
    const [themeDark, setThemeDark] = props.themeDark;
    const [languages, currentLang] = props.lang;
    return (
        <section data-theme-dark={themeDark}>
            <aside>
                <div className='config-container'>
                    <button onClick={() => setThemeDark((prevTheme) => !prevTheme)}>
                        <FontAwesomeIcon icon={`fa-solid ${themeDark ?  'fa-sun' :'fa-moon' }` }/> 
                    </button>
                    <select>
                        {
                            languages.map(lang =>{
                                return <option value={lang.name} select={lang.name === currentLang.name}>
                                        <img  src={lang.flag} alt="bandeira representando o país da opção"/><span>{lang.name}</span>
                                    </option>
                            })
                        }
                    </select>
                </div>

            </aside>
            <main>
                <div className="left">
                    <img style={{backgroundImage: `url(${getSVGURI(faImage)})`}} width="200px" height="200px" alt='foto de perfil'/>
                </div>
                <div className="right">
                    <h1>Cleidiane da Rosa Eloy</h1>
                    <h2>Desenvolvedora Front-End</h2>
                    <p>Desenvolvedora Web com paixão por tecnologia e experiência em projetos de ensino a distância. Possui habilidades sólidas em javascript, jquery, CSS, HTML e React. Comprometida com a acessibilidade digital e com o desenvolvimento de soluções inovadoras. Proativa, colaborativa e sempre disposta a aprender e crescer profissionalmente.</p>

                    <address>

                    </address>
                    <a href=""> <span>&#8594;</span> Curriculo</a>
                </div>
            </main>
        </section>

    )
}
export default Home;