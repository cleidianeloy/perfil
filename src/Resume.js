
import json from './json/resume.json';
import './scss/resume.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHouse} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
function Resume(props){
    const [languages, currentLang = languages[0]] = props.lang;
    const {text} = currentLang;
    const docName = text.doc.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const {principal, contact} = json;
    const currentJsonLang = json[docName];
    return (
        <section data-theme-dark={false} >
            <main id="resume"> 
                   <Link to={`/`} className='doc'><FontAwesomeIcon icon={faHouse}/> <span>Home</span></Link>
                    <header>
                        <div id="principal">
                            <div className="topic-container">
                                <h1>{principal.name}</h1>
                                <h2>{currentJsonLang.occupation}</h2>
                            </div>
                        </div>
                        <div id="contact">
                            <div className='topic-container'>
                                <div className="container-email">
                                    <a href={`"mailto:${contact.email}`}>{contact.email}</a>
                                </div>
                                <div className="container-icons">
                                    <a href={`${contact.linkedin}`}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                    <a href={`${contact.instagram}`}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                                    <a href={`${contact.github}`}><FontAwesomeIcon icon={['fab', 'github']} /></a>
                                    <a href={`${contact.phone}`}><FontAwesomeIcon icon={faPhone} /></a>
                                </div>
                            </div>
                        </div>
                    </header> 
                    <>
                    {
                        Object.keys(currentJsonLang).map(function(sectionName){
                            if(sectionName !== "occupation"){
                                return (
                                    <section id={sectionName} key={sectionName}>
                                         <h3>{currentJsonLang[sectionName].title}</h3>
                                         <div className='topic-container'>
                                            {currentJsonLang[sectionName].elements.map(function(currentElement){
                                                 return (
                                                    <div>
                                                         <h4>{currentElement.title}</h4>
                                                         <h5>
                                                            <span className="institution">{currentElement.institution}</span> {currentElement.institution && currentElement.start ?  "|" : "" } <span className="start">{currentElement.start}</span> {currentElement.start && currentElement.end ?  "-" : "" }  <span class="end">{currentElement.end}</span>
                                                         </h5>
                                                         <p>
                                                            {currentElement.desc}
                                                         </p>
                                                    </div>
                                                 )   
                                            })}
                                         </div>
                                    </section>
                                )
                            }
                            return null

                        })
                    }    
                    </>    
            </main>
        </section>

    )
}
export default Resume;