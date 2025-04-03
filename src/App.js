import { useState, Fragment } from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import './scss/style.scss';
import { languages } from './js/languages';

function App() {
  const [themeDark, setThemeDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className='app'>
          <Routes>
               <Route exact path="/" element={<Home themeDark={[themeDark, setThemeDark]} lang={[languages]}/>}/>
               {languages.map(function(lang, index){
                  let docName = lang.text.doc.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                  return <Fragment key={index}>
                            <Route path={`/${lang.name.toLowerCase()}`} element={<Home themeDark={[themeDark, setThemeDark]} lang={[languages, lang]} />}/>
                            <Route exact path={`/${docName}`} element={<Resume themeDark={[themeDark, setThemeDark]} lang={[languages]} />}/>
                        </Fragment>
              })}
          </Routes>
    </div>

  );
}

export default App;
