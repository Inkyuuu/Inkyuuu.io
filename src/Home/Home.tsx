import {useState} from 'react'
import Skills, {type skill_mode} from '../Skills/Skills'
import './Home.css'
function Home(){
    const [mode, setMode] = useState<skill_mode>('skillset');
    return(
    <div className="main">
        <div className="info">
            <img src="src\assets\IMG_7104.jpg" className = "circle-image"/>
            <div className="intro">
                <h1>
                    printf("Hello, World!");
                </h1>
                <h2>
                    My name is Amy Zeng, I'm currently a third-year Computer Science major at the University of California, Santa Cruz.
                </h2>
            </div>
        </div>
        <div className = "info-box">
            <button onClick = {() => setMode('skillset')}> <a className="text-ul">skillset</a> </button>
            |
            <button onClick = {() => setMode('coursework')}> <a className="text-ul">relevant coursework</a> </button>
            <Skills mode={mode}/>
        </div>
    </div>
    );
}
export default Home;
