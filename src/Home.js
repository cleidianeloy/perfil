import {useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faImage } from '@fortawesome/free-solid-svg-icons'
import { library, toHtml, icon } from "@fortawesome/fontawesome-svg-core";
import Address from './Address';

import './lightTheme.scss';
import './darkTheme.scss';



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
    const [languages, currentLang = languages[0]] = props.lang;
    const {text} = currentLang;
    const navigate = useNavigate();
    const changePage = (event)=>{
        const selectedValue = event.target.value;
        navigate(`/${selectedValue.toLowerCase()}`); 
    }
    return (
        <section data-theme-dark={themeDark}>
            <aside>
                <div className='config-container'>
                    <button onClick={() => setThemeDark((prevTheme) => !prevTheme)} aria-label={themeDark ? text.themeDarkLabel : text.themeLightLabel}>
                        <FontAwesomeIcon icon={`fa-solid ${themeDark ?  'fa-sun' :'fa-moon' }` }/> 
                    </button>
                    <select onChange={changePage} defaultValue={currentLang.name} style={{backgroundImage: `url(${currentLang.flag})`}} aria-label={text.selectLabel}>
                        {
                            languages.map((lang, id) =>{
                                return <option  key={id} value={lang.name}>
                                            {lang.name}
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
                    <div className="text">
                        <h1>Cleidiane da Rosa Eloy</h1>
                        <h2>{text.position}</h2>
                        <p>{text.aboutMe}</p>
                    </div>

                    <Address/>
                    <a href=""><span>&#8594;</span> {text.doc}</a>
                </div>
            </main>
        </section>

    )
}
export default Home;