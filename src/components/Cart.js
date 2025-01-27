import { useSelector } from "react-redux";
import RestaurantList from "./RestaurantList";

const Cart = () => {
    const cartItems = useSelector((state)=> state.cart.items);
    return (
        <div className="flex flex-wrap w-6/12">
            { cartItems.length == 0 ? 'Cart is empty' : '' }
            { cartItems.map((item) => {
                return <RestaurantList key={item.data.info.id} data={item.data}/>
            })}
        </div>
    );
}

export default Cart;