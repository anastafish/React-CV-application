import '../styles/info.css'


export default function Msg(props){
    function close(){
        props.setValidation(false)
        if(props.setSubmitMsg){
        props.setSubmitMsg(false)
        }
    }    
    return(
        <div className="msg-container">
            <h1>{props.msg}</h1>
            <button onClick={close} className='close-msg'>Close</button>
        </div>
    )
}