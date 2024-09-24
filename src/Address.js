import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faInstagram, faLinkedin, faGithub);
function Address(){
    const contacts = [
        {
            name: "linkedin",
            link:"https://www.linkedin.com/in/cleidiane-eloy", 
            icon: faLinkedin
        },
        {
            name:"instagram",
            link:"https://www.instagram.com/cleidianeloy",
            icon: faInstagram
        },
        {
            name: "github",
            link: "https://www.github.com/cleidianeloy",
            icon: faGithub
        }
    ] 
    return(
        <address>
            {contacts.map((contact, id) => {
             return <a key={id} href={contact.link} aria-label={contact.name} target="_blank">
                         <FontAwesomeIcon icon={contact.icon} />
                    </a>
            })}
         </address>
    )
}
export default Address;