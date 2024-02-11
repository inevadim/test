import style from './FeedBackForm.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { PhoneNumberValidation } from './validation/PhoneNumberValidation';
import { useEffect, useState } from 'react';



export const FeedBackForm=()=>{
    const[email,setEmail]=useState();
    const[emailDirty,setEmailDirty]=useState(false);
    const[emailError,setEmailError]=useState("Email must be filled");

    const[name,setName]=useState();
    const[nameDirty,setNameDirty]=useState(false);
    const[nameError,setNameError]=useState("Name must be filled");

    const [formValid,setFormValid]=useState(false);
    useEffect(()=>{
        if(emailError || nameError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    },[emailError,nameError])

    const getServer=()=>{
        console.log('123')
    }

    const blurHandler=(e)=>{
        switch(e.target.name){
            case 'email':
                setEmailDirty(true)  
                break   
                case 'name':
                setNameDirty(true)  
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

    return(<div className={style.wrapper}>
        <div className={style.FeedBackForm}>Feed back form</div>

        <div className={style.wrapperItem}>
            {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
            <div><FontAwesomeIcon icon={faUser} /></div>
            <input onChange={e=>nameHandler(e)} value={name} onBlur={e=>blurHandler(e)} name='name' type='text' placeholder='Name'></input>
        </div>

        <div className={style.wrapperItem}>
            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
            <FontAwesomeIcon icon={faAt} />
            <input onChange={e=>emailHandler(e)} value={email} onBlur={e=>blurHandler(e)} name='email' type='email' placeholder='email'></input>
        </div>

        <div className={style.wrapperItem}><FontAwesomeIcon icon={faPhone} /><PhoneNumberValidation></PhoneNumberValidation></div>
        <div className={style.wrapperItem}><FontAwesomeIcon icon={faComments} /> <textarea placeholder='Message' color='white' cols="21" rows="6" ></textarea></div>
        <div className={style.wrapperItem}> <button onClick={()=>getServer()} disabled={!formValid} className={style.send}><FontAwesomeIcon icon={faPaperPlane} /> Send</button></div>
    </div>)
}