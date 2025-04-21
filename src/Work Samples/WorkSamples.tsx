import './WorkSamples.css'
function WorkSamples(){
    return(
        <div className="main">
            <center><h1>Work Samples</h1></center>
            <div className="sample-info">
                <h2>NoteFlow: React, Python</h2>
                <h4>
                    NoteFlow is a collaborative, AI-assisted note-taking application that helps students write better notes. With NoteFlow, you can:
                </h4>
                <ul className="custom">
                    <li>
                        Write your notes in an intuitive WYSIWYG editor
                    </li>
                    <li>
                        Ask questions about your note using a RAG search algorithm
                    </li>
                    <li>
                        Summarize your notes and generate study materials
                    </li>
                    <li>
                        Collaborate with peers in real time
                    </li>
                </ul>
            </div>
            <center>
                <h4>Explore NoteFlow!</h4>
                <embed src="https://cse115a-noteflow.github.io/noteflow/" width = "80%" height ="600"></embed>
                <h4> Or watch a demonstration video, if you prefer: </h4>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/iY8Q5H_qj2A?si=4SRyGbFdvtNVEArm" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
                </iframe>
                <h5>GitHub Repository: <a href = "https://github.com/cse115a-noteflow/noteflow" target = "_blank">click!</a></h5>
            </center>
            <div className="sample-info">
                <h2>Multithreaded HTTP Server</h2>
                <h4>
                    Multithreaded HTTP Server is capable of handling multiple concurrent HTTP requests, allowing users to add and edit files using PUT requests as well as retrieve files with GET requests. 
                    This server:
                </h4>
                <ul className="custom">
                    <li>
                        Is locally compiled and run
                    </li>
                    <li>
                        Preserves atomicity and linearization of requests
                    </li>
                    <li>
                        Features a robust error reporting system
                    </li>
                </ul>
                <h5>GitHub Repository: <a href = "https://github.com/Inkyuuu/Multithreaded-HTTP-Server" target="_blank">click!</a></h5>  
            </div>
        </div>


    );
}
export default WorkSamples;