
const ContactButton =(props)=>{
    return(
        <button onClick={props.action}>
            {props.icon}
            {props.text}  
            
        </button>
    );
}
export default ContactButton;