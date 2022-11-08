import './App.css';

import { Routes, Route} from 'react-router-dom';
import Main from './Pages/main';
import Projects from './Pages/project';
import Components from './Pages/components';
import Career from './Pages/career';

function App() {
  return (
    <Routes>
       <Route path="/" element={<Main/>}/>
       <Route path="/projects" element={<Projects/>}/>
       <Route path="/components" element={<Components/>}/>
       <Route path="/career" element={<Career/>}/>

    </Routes>
  );
}

export default App;
