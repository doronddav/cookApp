import classes from './OpenMenuBtn.module.scss'

const OpenMenuBtn = ({setOpenMenu, openMenu})=>{

 const openMenuBtnSection= openMenu ? `${classes.openMenuBtnSection} ${classes.active}`: `${classes.openMenuBtnSection}`


    return(

        <div className={openMenuBtnSection} onClick={()=>{setOpenMenu(!openMenu)}}>
       <span className={classes.topLine}></span>
       <span className={classes.middleLine}></span>
       <span className={classes.bottomLine}></span>
       </div>
       
      
       
  
        )
}

export default OpenMenuBtn