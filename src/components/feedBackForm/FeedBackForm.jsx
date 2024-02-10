import style from './FeedBackForm.module.scss'; 

export const FeedBackForm=()=>{
    return(<div className={style.wrapper}>
        <div className={style.wrapperItem}>Name: <input type='text'></input></div>
        <div className={style.wrapperItem}>E-mail <input type='email'></input></div>
        <div className={style.wrapperItem}>Phone <input type='tel'></input></div>
        <div className={style.wrapperItem}>Message <textarea></textarea></div>
    </div>)
}