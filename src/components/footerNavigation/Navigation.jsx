import classes from './navigation.module.scss'
import searchLogo from '../../static/logos/search-svgrepo-com.svg'
import homeLogo from '../../static/logos/home-1-svgrepo-com.svg'
import addLogo from '../../static/logos/add-svgrepo-com.svg'
import { Link } from 'react-router-dom';

const Navigation =({displaySearchInput,setDisplaySearchInput,setFilterdRecipes}) =>{
    const openSearchBox= ()=>{
        if(displaySearchInput===true){
            setDisplaySearchInput(false)
            setFilterdRecipes('')


        }
        else{
            setDisplaySearchInput(true)
        }
    }
    return (
        <div className={classes.mainContainer}>

            <img src={searchLogo} alt="" onClick={openSearchBox}/>
            <Link to="/">

            <img src={homeLogo} alt="" />
            </Link>
            <Link to="/add">
            <img src={addLogo} alt="" />
            </Link>

            
        </div>
    )
}
export default Navigation