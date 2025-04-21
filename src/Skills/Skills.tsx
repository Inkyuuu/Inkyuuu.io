import './Skills.css'
export type skill_mode = 'skillset' | 'coursework' | null;
function Skills({mode}:{mode: skill_mode;}){
    return(
        <div className =  "skills">
            <div>
                {mode === 'skillset' && <h4>
                    I have experience in languages such as <b>Python, C, C++, JavaScript/TypeScript, HTML</b> and <b>Java</b>. 
                    In addition, I am able to utilize other industry standard technologies and frameworks such as <b>Jira, GitHub, React</b> and have experience in <b>Agile development</b>.
                    </h4>}
                {mode === 'coursework' && 
                    <div>
                        <center><h5><b>click</b> to view course descriptions</h5></center>
                        <ul className="custom">
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