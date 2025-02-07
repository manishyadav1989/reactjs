import { Link } from 'react-router-dom'
import { useContext } from 'react';
import useOnlineStatus from './../utils/useOnlineStatus';
import UserContext from '../utils/userContext';
import { addItem, removeItem } from './../redux/cartSlice'
import { useDispatch } from 'react-redux';

const RestaurantList = (props) => {
    const dispatch = useDispatch();
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) return(<h1>Opps! You have lost your internet connection. Please check your connection and retry.</h1>)
    
    const { loggedInUser }  = useContext(UserContext);
    const  { id, name, cloudinaryImageId, avgRatingString, cuisines, areaName } = props.data.info;
    return (
        <div className="item m-4 p-4 w-[250px] bg-cyan-100 shadow-sm">
            <div className="card" data-testid="restaurant-card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Avatar" style={{"width":"100%"}} />
                <div className="details">
                    <h4 className="font-bold py-4">
                        <Link to={'/list/'+id} > {name} </Link>
                    </h4> 
                    <p>{avgRatingString}</p> 
                    <p>{cuisines}</p> 
                    <p>{areaName}</p> 
                    <p>Username : {loggedInUser}</p>
                </div>
                <div>
                    <button className="p-4 m-4 rounded-lg shadow-md bg-black text-white size-16 w-auto hover:shadow-slate-500 cursor-pointer" onClick={()=> dispatch(addItem(props))}>Add Items</button>
                </div>
                <div>
                    <button className="p-4 m-4 rounded-lg shadow-md bg-black text-white size-16 w-auto hover:shadow-slate-500 cursor-pointer" onClick={()=> dispatch(removeItem())}>Remove Items</button>
                </div>
            </div>
        </div>
    );
}

export const withPromotedRestaurant = (Component) => {
    return (props) =>{
        return (
            <div>
                <label className="absolute text-white bg-black m-2 p-2 rounded-md">Promoted</label>
                <Component {...props} />
            </div>
        )
    }
}

export default RestaurantList;