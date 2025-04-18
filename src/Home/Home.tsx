import {useState} from 'react'
import Skills, {type skill_mode} from '../Skills/Skills'
import './Home.css'
function Home(){
    const [mode, setMode] = useState<skill_mode>('skillset');
    return(
    <div>
        <img src="src\assets\IMG_7104.jpg" className = "circle-image"/>
        <button onClick = {() => setMode('skillset')}> skillset </button>
        |
        <button onClick = {() => setMode('coursework')}> relevant coursework </button>
        <Skills mode={mode}/>
    </div>
    );
}
export default Home;
