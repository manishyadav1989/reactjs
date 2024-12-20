import { useParams } from 'react-router-dom';
import resData from './../utils/data';

const Restaurant = (props) => {
    const { id } = useParams();
    const listData = resData.filter((data)=> data.info.id == id);
    const {name, avgRatingString, cuisines, areaName, cloudinaryImageId} = listData[0].info;
    return (
        <div className="item">
            <div className="card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Avatar" style={{"width":"100%"}} />
                <div className="details">
                    <h4><b>{name}</b></h4> 
                    <p>{avgRatingString}</p> 
                    <p>{cuisines}</p> 
                    <p>{areaName}</p> 
                </div>
            </div>
        </div>
    );
}

export default Restaurant;