import classes from './menu.module.scss'

const Menu=({openMenu,setOpenMenu})=>{
const toggaleMenuClass= openMenu ? `${classes.ActiveMainManu}`: `${classes.CloseMainManu}`

    return(
      <ul className={toggaleMenuClass}>
      <li>
Doron
      </li>
      <li>
Lior
      </li>
      <li>
ashchen
      </li>
      </ul>
    )
}


export default Menu