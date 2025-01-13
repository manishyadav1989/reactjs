const ItemLists = ({cards}) => {
    return (
        <div>
            {cards.map((card) => (
                <div 
                    key={card.id} 
                    className="m-2 p-2 border-gray-200 border-b-2 text-left"
                >
                    <div className="py-2">
                        <span>{card.name}</span>
                        <span> - Rs {card.price}</span>
                    </div>
                    <div className="flex flex-auto">
                        <p className="text-xs w-9/12">{card.desc}</p>
                        <img src={card.img} className="w-3/12 flex justify-end" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemLists;