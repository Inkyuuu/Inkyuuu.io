import {useState} from 'react'
import Skills, {type skill_mode} from '../Skills/Skills'
import './Home.css'
import img from '../../src/assets/IMG_7104.jpg'
function Home(){
    const [mode, setMode] = useState<skill_mode>('skillset');
    return(
    <div className="main">
        <div className="info">
            <div className="image-container">
                <img src={img} className = "circle-image"/>
                <h4>Amy Zeng</h4>
                <p>(she/her)</p>
                <h5>GitHub: <a href="https://github.com/Inkyuuu" target="_blank">Inkyuuu</a></h5>
                <h5>Email: amy.zeng.dev@gmail.com</h5>
            </div>
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
            <div className="mode-container">
                <button onClick = {() => setMode('skillset')}> <a className="text-ul">skillset</a> </button>
                |
                <button onClick = {() => setMode('coursework')}> <a className="text-ul">coursework</a> </button>
            </div>
            <Skills mode={mode}/>
        </div>
    </div>
    );
}
export default Home;
