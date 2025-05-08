import {useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import { library} from "@fortawesome/fontawesome-svg-core";

function Config(props){
    const [themeDark, setThemeDark] = props.themeDark;
    const [languages, currentLang = languages[0]] = props.lang;
    const {text} = currentLang;
    const navigate = useNavigate();

    library.add(faMoon, faSun);
    const changePage = async (event)=>{
        const selectedValue = event.target.value;
        navigate(`/${selectedValue.toLowerCase()}`);
    }
    
    return(
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
    )
}
export default Config;