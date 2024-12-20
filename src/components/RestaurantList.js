import { Link } from 'react-router-dom'
import useOnlineStatus from './../utils/useOnlineStatus';
const RestaurantList = (props) => {
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) return(<h1>Opps! You have lost your internet connection. Please check your connection and retry.</h1>)
    return (
        <div>
            {props.lists.map((data) => { 
                return (<div key={data.info.id} className="item">
                    <div className="card">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+data.info.cloudinaryImageId} alt="Avatar" style={{"width":"100%"}} />
                        <div className="details">
                            <h4><b>
                              <Link to={'/list/'+data.info.id} > {data.info.name} </Link>
                            </b></h4> 
                            <p>{data.info.avgRatingString}</p> 
                            <p>{data.info.cuisines}</p> 
                            <p>{data.info.areaName}</p> 
                        </div>
                    </div>
                </div>)
            })}
        </div>
    );
}

export default RestaurantList;