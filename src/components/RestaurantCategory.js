import { useState } from 'react'
import ItemLists from "./ItemLists";

const RestaurantCategory  = (props) => {
    const [showItem, setShowItem] = useState(false);
    const handleClick = () => {
        setShowItem(!showItem);
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="text-lg font-bold">{props.title} ({props.cardLists.length})</span>
                    {showItem? <span>&uarr;</span> : <span>&darr;</span> }
                </div>
                {showItem ? <ItemLists cards={props.cardLists}/> : ""}
            </div>
        </div>
    )
}

export default RestaurantCategory;