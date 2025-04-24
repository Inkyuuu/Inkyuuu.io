import resume from '../../src/assets/Resume 2025.pdf'
function Resume(){
    return(
      <center>
        <iframe
        src={resume}
        style={{ width: "100%", height: "1082px", border: "none" }}
        >
        </iframe>
      </center>
      
    );
}
export default Resume;