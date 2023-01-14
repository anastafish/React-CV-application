import '../styles/info.css'

export default function Info(props){
function editForm(){
    props.setSubmit(false)
}



// companyName:"",
// positionTitle:"",
// mainTasks:"",
// workingDateFrom:"",
// workingDateTo:""    
    return(
        <div className="info-container">
            <div className="form">
                <div className="form-section">
                    <h1>First Name: {props.form.firstName}</h1>
                    <h1>LastName: {props.form.lastName}</h1>
                </div>
                <div className='form-section'>
                    <h1>Email: {props.form.email}</h1>
                    <h1>Phone Number: {props.form.phoneNumber}</h1>
                </div>
                <div className="form-section">
                    <h1>School Name: {props.form.schoolName}</h1>
                    <h1>Study Title: {props.form.studyTitle}</h1>
                    <h1>Study Period: From <span className="date">{props.form.studyDateFrom}</span> To <span className="date">{props.form.studyDateTo}</span></h1>
                </div>
                <div className="form-section">
                    <h1>Previous Company: {props.form.companyName}</h1>
                    <h1>Position Title: {props.form.positionTitle}</h1>
                    <h1>Main Tasks: {props.form.mainTasks}</h1>
                    <h1>Working Period: From <span className="date">{props.form.workingDateFrom}</span> To <span className="date">{props.form.workingDateTo}</span></h1>
                </div>
                
            </div>
            <button onClick={editForm} className='edit-btn'>Edit</button>
        </div>
    )
}