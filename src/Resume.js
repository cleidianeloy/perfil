import Config from './Config';
import json from './json/resume.json';
import './scss/resume.scss';
function Resume(props){
    const [languages, currentLang = languages[0]] = props.lang;
    const {text} = currentLang;
    const docName = text.doc.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(json)
    return (
        <section data-theme-dark={false}>
            <main id="resume">            
                    <section id="principal">

                    </section>
                    <section id="contact">

                    </section>
                    <section id="about">

                    </section>
                    <section id="career">

                    </section>

                    <section id="education">

                    </section>
                    <section id="extras">

                    </section>
            </main>
        </section>

    )
}
export default Resume;