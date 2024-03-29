import style from './FeedBackForm.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt,faPhone,faComments,faUser,faPaperPlane,faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { PhoneNumberValidation } from './validation/PhoneNumberValidation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from './modal/Modal.jsx';


export const FeedBackForm=()=>{
    const[modalActive,setModalActive]=useState(true)

    const[email,setEmail]=useState();
    const[emailDirty,setEmailDirty]=useState(false);
    const[emailError,setEmailError]=useState("Email must be filled");

    const[msg,setMsg]=useState();
    const[msgDirty,setMsgDirty]=useState(false);
    const[msgError,setMsgError]=useState("Message must be filled");


    const[name,setName]=useState();
    const[nameDirty,setNameDirty]=useState(false);
    const[nameError,setNameError]=useState("Name must be filled");


    const [formValid,setFormValid]=useState(false);
    useEffect(()=>{
        if(emailError || nameError || msgError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    },[emailError,nameError,msgError])

    const onServer=()=>{

        const userData = {
            name: name,
            email: email,
            msg:msg
          };

        axios
        .get("http://localhost:9090/api/ping")
        .then(result => {
        console.log(result.data.message)
        })
        .catch((error) => console.log(error));

        
        
        axios.post("http://localhost:9090/api/registration", userData).then((response) => {
            console.log(response.data) 
            setName("")
            setEmail("")
            setMsg("")
          })
          .catch((error) => console.log(error));
    }

    const blurHandler=(e)=>{
        // eslint-disable-next-line 
        switch(e.target.name){
            case 'email':
                setEmailDirty(true)  
                break   
            case 'name':
                setNameDirty(true)  
                break 
            case 'msg':
                setMsgDirty(true)  
                break
        }
    }

    const emailHandler =(e)=>{
        setEmail(e.target.value)
            const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(!re.test(String(e.target.value).toLowerCase())){
                setEmailError('Not a valid email')
            }
            else{
                setEmailError('')
            }     
    }

    const nameHandler=(e)=>{
        setName(e.target.value)
        if(!e.target.value){
            setNameError("Name must be filled")
        }
        else{
            setNameError("")
        }
    }

    const msgHandler=(e)=>{
        setMsg(e.target.value)
        if(!e.target.value){
            setMsgError("Message must be filled")
        }
        else{
            setMsgError("")
        }
    }



    return(<div className={style.wrapper}>
        <div className={style.FeedBackForm}>Feedback form</div>

        <div className={style.wrapperItem}>
            {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}

            <div className={style.item}>
                <div><FontAwesomeIcon icon={faUser} /></div>
                <input 
                    onChange={e=>nameHandler(e)} 
                    value={name} 
                    onBlur={e=>blurHandler(e)} 
                    name='name' 
                    type='text' 
                    placeholder='Name'>
                </input>
            </div>

        </div>

        <div className={style.wrapperItem}>
            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
            <div className={style.item}>
                <FontAwesomeIcon icon={faAt} />
                <input 
                    onChange={e=>emailHandler(e)} 
                    value={email} 
                    onBlur={e=>blurHandler(e)} 
                    name='email' 
                    type='email' 
                    placeholder='email'>
                </input>
            </div>
        </div>

        
        <div className={style.wrapperItem}>
            {/* {(phoneDirty && phoneError) && <div style={{color:'red'}}>{phoneError}</div>} */}
            <div className={style.item}>
                <FontAwesomeIcon icon={faPhone} style={{marginRight:'10px'}}/> <PhoneNumberValidation></PhoneNumberValidation>
            </div>
        </div>
        
        <div className={style.wrapperItem}>
            {(msgDirty && msgError) && <div style={{color:'red'}}>{msgError}</div>}   
            <div className={style.item}>
                <FontAwesomeIcon icon={faComments} /> 
                <textarea  
                    onChange={e=>msgHandler(e)} 
                    onBlur={e=>blurHandler(e)} 
                    placeholder='Message' 
                    value={msg} name='msg' 
                    color='white' 
                    cols="21" 
                    rows="6" >
                </textarea>
            </div>
        </div>

        <div className={style.wrapperItem}> 
        <button 
            onClick={()=>onServer()} 
            disabled={!formValid} 
            className={style.send}>
            <FontAwesomeIcon icon={faPaperPlane} /> 
                 Send
        </button></div>
        <button
            onClick={()=>setModalActive(false)}
            className={style.send}>
                <FontAwesomeIcon icon={faWindowRestore}/>  Modal
        </button>
        <Modal active={modalActive} setActive={setModalActive}/>
    </div>)
}