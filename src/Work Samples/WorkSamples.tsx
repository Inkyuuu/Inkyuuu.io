function WorkSamples(){
    return(
        <div>
            <h1>NoteFlow: React, Python</h1>
            <p>
                NoteFlow is a collaborative, AI-assisted note-taking application that helps students write better notes. With NoteFlow, you can:
            </p>
            <ul>
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
            <h2>Explore NoteFlow!</h2>
            <embed src="https://cse115a-noteflow.github.io/noteflow/" width = "100%" height ="800"></embed>
            <h2> Or watch a demonstration video, if you prefer: </h2>
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/iY8Q5H_qj2A?si=4SRyGbFdvtNVEArm" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
            </iframe>
            <h2>GitHub Repository: <a href = "https://github.com/cse115a-noteflow/noteflow" target = "_blank">click!</a></h2>
            <h1>Multithreaded HTTP Server</h1>
            <p>
                This HTTP Server is capable of handling multiple concurrent HTTP requests, allowing users to add and edit files using PUT requests as well as retrieve files with GET requests. 
                This server:
            </p>
            <ul>
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
            <h2>GitHub Repository: <a href = "https://github.com/Inkyuuu/Multithreaded-HTTP-Server">click!</a></h2>
        </div>


    );
}
export default WorkSamples;