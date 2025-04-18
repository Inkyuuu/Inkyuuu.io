import {useState} from 'react'
import Skills, {type skill_mode} from '../Skills/Skills'
const [mode, setMode] = useState<skill_mode>('skillset');
function Home(){
    return(
    <div>
        <button onClick = {() => setMode('skillset')}> skillset </button>
        |
        <button onClick = {() => setMode('coursework')}> relevant coursework </button>
        <Skills setMode={setMode} mode={mode}/>
    </div>
    );
}
export default Home;
