import ContactButton from "./ContactButton";
import {MdMessage,MdCall} from "react-icons/md";
const ContactBody=()=>{
    const via_support_chat=()=>{
        console.log("via support chat");
    }
    const onSubmit=(e)=>{
        alert("Your name: "+e.target[0].value+"\nYour email: "+e.target[1].value+"\nMessage: "+e.target[2].value );
        e.preventDefault();//to prevent page refresh
        /*console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);*/
    }
    return(
        <div className='contact-div-2'>
                <div className='via'>
                    <div className='via-type'>
                        <div className='via-type1'>
                        <ContactButton text="VIA SUPPORT CHAT" icon={<MdMessage/>} action={via_support_chat}/>
                        <ContactButton text="VIA CALL" icon={<MdCall/>}/>
                        </div>
                        <div className='via-type2'>
                        <ContactButton text="VIA EMAIL FORM" icon={<MdMessage/>}/>
                        </div>
                        
                    </div>
                    <form action="" onSubmit={onSubmit}>
                    <div className='form'>
                        <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" required/>
                        </div>
                        <div>
                        <label htmlFor="">E-mail</label>
                        <input type="email" name="" id="" required/>
                        </div>
                        
                        <div>
                            <label htmlFor="">Message</label>
                            <textarea name="" id="msg"  rows="6" required></textarea>
                        </div>
                        {/*<input type="text" name="" id="" placeholder="Message"/>
                        <input type="submit" value="Submit" />*/}
                        
                        <ContactButton text="SUBMIT"/>
                    </div>
                    </form>
                </div>
                <div className='img-div'>
                    <img src="./image/contact.png" alt="" />
                </div>
            </div>
    );
}
export default ContactBody;