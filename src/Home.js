import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faImage } from '@fortawesome/free-solid-svg-icons'
import { library, toHtml, icon } from "@fortawesome/fontawesome-svg-core";
import Address from './Address';
import './lightTheme.scss'
import './darkTheme.scss'

library.add(faMoon, faSun, faImage);
const getSVGURI = (faIcon, color) =>{
    const abstract = icon(faIcon).abstract[0];
    if(color) {
         abstract.children[0].attributes.fill = color;
    }

    return `data:image/svg+xml;base64,${btoa(toHtml(abstract))}`;
}

function Home(props){
    const [themeDark, setThemeDark] = props.themeDark;
    const [languages, currentLang] = props.lang;
    const {text} = currentLang;
    return (
        <section data-theme-dark={themeDark}>
            <aside>
                <div className='config-container'>
                    <button onClick={() => setThemeDark((prevTheme) => !prevTheme)} aria-label={themeDark ? text.themeDarkLabel : text.themeLightLabel}>
                        <FontAwesomeIcon icon={`fa-solid ${themeDark ?  'fa-sun' :'fa-moon' }` }/> 
                    </button>
                    <select style={{backgroundImage: `url(${getSVGURI(faImage,  themeDark ? "black": "white")})`}} aria-label={text.selectLabel}>
                        {
                            languages.map((lang, id) =>{
                                return <option  value={lang.name} select={lang.name === currentLang.name}>
                                        <span>{lang.name}</span>
                                       </option>
                            })  
                        }
                    </select>
                </div>

            </aside>
            <main>
                <div className="left">
                    <img style={{backgroundImage: `url(${getSVGURI(faImage)})`}} width="200px" height="200px" alt=""/>
                </div>
                <div className="right">
                    <h1>Cleidiane da Rosa Eloy</h1>
                    <h2>{text.position}</h2>
                    <p>{text.aboutMe}</p>
                    <Address/>
                    <a href=""><span>&#8594;</span> {text.doc}</a>
                </div>
            </main>
        </section>

    )
}
export default Home;