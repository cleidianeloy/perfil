import { useState } from 'react';
import Home from './Home'
function App() {
  const [themeDark, setThemeDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  return (
    <div className="App">
      <Home themeDark={[themeDark, setThemeDark]}/>
    </div>
  );
}

export default App;
