import { useState } from 'react';
import Home from './Home'
function App() {
  const [themeDark, setThemeDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const languages = [{flag:"../dist/img", name: "pt-BR"} ,{ flag:"../dist/img", name:"en"}];
  const [pt, eng] = languages;
  return (
    <div className="App">
      <Home themeDark={[themeDark, setThemeDark]} lang={[languages, pt]}/>
    </div>
  );
}

export default App;
