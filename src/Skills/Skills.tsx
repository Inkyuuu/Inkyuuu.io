export type skill_mode = 'skillset' | 'coursework' | null;
import {useState} from 'react';
function Skills({setMode, mode}:{setMode: (value: skill_mode) => void; mode: skill_mode;}){
    return(
        <div className =  "option">
            <div>
                {mode === 'skillset' && <h2>
                    I have experience in languages such as <b>Python, C, C++, JavaScript/TypeScript, HTML</b> and <b>Java</b>. 
                    In addition, I am able to utilize other industry standard technologies and frameworks such as <b>Jira, GitHub, React</b> and have experience in <b>Agile development</b>.
                    </h2>}
                {mode === 'coursework' && 
                    <div>
                        <h2><b>click</b> to view course descriptions</h2>
                        <ul>
                            <li>
                                <a href = "https://catalog.ucsc.edu/en/current/general-catalog/courses/cse-computer-science-and-engineering/lower-division/cse-40/" target = "_blank">
                                    Machine Learning Basics: Data Analysis and Empirical Methods
                                </a>
                            </li>
                            <li>
                                <a href = "https://catalog.ucsc.edu/en/current/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-101/" target = "_blank">
                                    Introduction to Data Structures and Algorithms
                                </a>
                            </li>
                            <li>
                                <a href = "https://catalog.ucsc.edu/en/2021-2022/general-catalog/courses/cse-computer-science-and-engineering/lower-division/cse-13s/" target = "_blank">
                                    Computer Systems and C programming
                                </a>
                            </li>
                            <li>
                                <a href = "https://catalog.ucsc.edu/en/current/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-120/" target = "_blank">
                                    Computer Architecture
                                </a>
                            </li>
                            <li>
                                <a href = "https://catalog.ucsc.edu/en/current/general-catalog/courses/cse-computer-science-and-engineering/lower-division/cse-30/" target = "_blank">
                                    Programming Abstractions: Python
                                </a>
                            </li>
                            <li>
                                <a href = "https://catalog.ucsc.edu/en/current/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-130/" target = "_blank">
                                    Principles of Computer Systems Design
                                </a>
                            </li>
                            <li>
                                <a href = "https://ucsc.smartcatalogiq.com/en/current/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-115a/" target = "_blank">
                                    Introduction to Software Engineering
                                </a>
                            </li>
                        </ul>
                    </div>
                    }
            </div>
            
        </div>
        

    );
}

export default Skills