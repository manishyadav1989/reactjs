import { useState } from 'react';
import resData from './../utils/data';
import RestaurantList from './RestaurantList';

const Body = () => {
    const [searchText, setSearchText] = useState("");
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
            <RestaurantList lists={resData}/>
        </div>
    )
}

export default Body;