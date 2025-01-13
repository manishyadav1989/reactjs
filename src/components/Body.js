import { useState, useContext } from 'react';
import resData from './../utils/data';
import RestaurantList, { withPromotedRestaurant } from './RestaurantList';
import UserContext from '../utils/userContext';

const PromotedRestaurantList = withPromotedRestaurant(RestaurantList);

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [lists, setLists] = useState(resData);
    const { loggedInUser, setUserName } = useContext(UserContext);
    
    return (
        <div className="container">
            <div className="search m-4 p-4">
                <input type="text" className="inputBox border border-solid border-black" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="btnClass m-4 px-4 py-2 bg-green-100" onClick={()=>{
                    const updateResData = resData.filter((data) => {
                        return data.info.name.toLowerCase().includes(searchText.toLowerCase())
                    });
                    setLists(updateResData);
                }}>Search</button>
            </div>
            <div className="search m-4 p-4">
                <input type="text" className="inputBox border border-solid border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="flex flex-wrap">
                { lists.map((data) => {
                    if(parseInt(data.info.avgRatingString) >= 4){
                        return <PromotedRestaurantList key={data.info.id} data={data} />
                    }
                    return <RestaurantList key={data.info.id} data={data}/>
                })}
            </div>
        </div>
    )
}

export default Body;