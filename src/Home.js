import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

import './lightTheme.scss'
import './darkTheme.scss'
library.add(faMoon, faSun);
function Home(props){
    const [themeDark, setThemeDark] = props.themeDark;
    const [languages, currentLang] = props.lang;
    return (
        <section data-theme-dark={themeDark}>
            <aside>
                <button onClick={() => setThemeDark((prevTheme) => !prevTheme)}>
                    <FontAwesomeIcon icon={`fa-solid ${themeDark ?  'fa-sun' :'fa-moon' }` }/> 
                </button>
                <select>
                    {
                        languages.map(lang =>{
                            return <option value={lang.name} select={lang.name === currentLang.name}>
                                    <img src={lang.flag} alt="bandeira representando o país da opção"/><span>{lang.name}</span>
                                </option>
                        })
                    }
                </select>
            </aside>
            <main>
                <div className="left">
                    <img width="200px" height="200px" alt='foto de perfil'/>
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