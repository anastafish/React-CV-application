import '../styles/info.css'

export default function Info(props){
function editForm(){
    props.setSubmit(false)
}

    return(
        <div className="info-container">
            <h1 className='info'>First Name: {props.form.firstName}</h1>
            <h1 className='info'>Last Name: {props.form.lastName}</h1>   
            <h1 className='info'>Email: {props.form.email}</h1>
            <h1 className='info'>Study Period: <span className="date">{props.form.studyDateFro}</span> <span className="date">{props.form.studyDateTo}</span></h1>
            <h1 className='info'>School Name: {props.form.schoolName}</h1>
            <h1 className='info'>Study Title: {props.form.studyTitle}</h1>
            <h1 className='info'>Company Name: {props.form.companyName}</h1>
            <h1 className='info'>Position Title: {props.form.positionTitle}</h1>
            <h1 className='info'>Main Tasks: {props.form.mainTasks}</h1>
            <h1 className='info'>Working Period: From <span className="date">{props.form.workingDateFrom}</span> TO <span className="date">{props.form.workingDateTo}</span></h1>
            <button onClick={editForm} className='edit-btn'>Edit</button>
        </div>
    )
}