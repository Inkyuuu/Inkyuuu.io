import {useState} from 'react'
import Skills, {type skill_mode} from '../Skills/Skills'
import './Home.css'
function Home(){
    const [mode, setMode] = useState<skill_mode>('skillset');
    return(
    <>
        <img src="src\assets\IMG_7104.jpg" className = "circle-image"/>
        <div className = "info-box">
            <button onClick = {() => setMode('skillset')}> <a className="text-ul">skillset</a> </button>
            |
            <button onClick = {() => setMode('coursework')}> <a className="text-ul">relevant coursework</a> </button>
            <Skills mode={mode}/>
        </div>
    </>
    );
}
export default Home;
