import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Info from './components/info'
import Msg from './components/msg'

function App() {
  const [validation,setValidation] = useState(false)
  const[Submit, setSubmit] = useState(false)
  const [submitMsg, setSubmitMsg] = useState(false)
  const [form,setForm] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    schoolName:"",
    studyTitle:"",
    studyDateFrom:"",
    studyDateTo:"",
    companyName:"",
    positionTitle:"",
    mainTasks:"",
    workingDateFrom:"",
    workingDateTo:""        
})

const success = "Thank You For Submitting your Cv!";
const failed = "Please Make Sure to Fill all the fields!"
  return (
    <div className="App">
      {!Submit && <Form submitMsg={submitMsg} setSubmitMsg={setSubmitMsg} setValidation={setValidation} setSubmit={setSubmit} submit={Submit} form={form} setForm={setForm}/>}
      {Submit && <Info setSubmit={setSubmit} form={form}/>}
      {submitMsg && <Msg setValidation={setValidation} setSubmitMsg={setSubmitMsg} submit={Submit} msg={success}/>}
      {validation && <Msg setValidation={setValidation} msg={failed}/> }
    </div>
  )
}

export default App
