import style from './Modal.module.scss'; 

export const Modal=({active,setActive})=>{
    return(
        <div 
            className={active ? style.wrapperModal: style.wrapperModalActive}
            onClick={()=>setActive(true)}
        >
            <div 
                className={active ? style.content : style.contentActive}
                onClick={e=>e.stopPropagation()}
            >Text Text Text Text Text Text Text Text Text</div>
        </div>
    )
}