import style from './FeedBackForm.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { PhoneNumberValidation } from './validation/PhoneNumberValidation';



export const FeedBackForm=()=>{
    return(<div className={style.wrapper}>
        <div className={style.FeedBackForm}>Feed back form</div>
        <div className={style.wrapperItem}><div><FontAwesomeIcon icon={faUser} /></div><input type='text' placeholder='Name'></input></div>
        <div className={style.wrapperItem}><FontAwesomeIcon icon={faAt} /><input type='email' placeholder='email'></input></div>
        {/* <div className={style.wrapperItem}> <FontAwesomeIcon icon={faPhone} /><input type='tel' placeholder='phone'></input></div> */}
        <div className={style.wrapperItem}><FontAwesomeIcon icon={faPhone} /><PhoneNumberValidation></PhoneNumberValidation></div>
        <div className={style.wrapperItem}><FontAwesomeIcon icon={faComments} /> <textarea placeholder='Message' color='white' cols="21" rows="6" ></textarea></div>
        <div className={style.wrapperItem}> <div className={style.send}><FontAwesomeIcon icon={faPaperPlane} /> Send</div></div>
    </div>)
}