import { useEffect, useState } from 'react';
import resData from './../utils/data';

const Card = (props) => {
    const {name, avgRatingString, cuisines, areaName, cloudinaryImageId} = props.data.info;
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

const Body = () => {
    const callAPI = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.47420&lng=77.70270&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',{ mode: 'no-cors'});
        //const json = data.json();
        console.log(data);
    }
    const [lists, setLists] = useState(resData);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        //callAPI();
    });

    return (
        <div className="container">
            <div className="search">
                <input type="text" className="inputBox" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="btnClass" onClick={()=>{
                    const updateResData = resData.filter((data) => {
                        return data.info.name.toLowerCase().includes(searchText.toLowerCase())
                    });
                    setLists(updateResData);
                }}>Search</button>
            </div>
            {lists.map((data) => <Card key={data.info.id} data={data} /> )}
        </div>
    )
}

export default Body;