import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css';
import PropTypes from 'prop-types'; 
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    // console.log(typeof(id))
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {
                    !cartItems[id] ? 
                    <img 
                        className='add' 
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white} 
                        alt='Add to cart'
                    />
                    :
                    <div className='food-item-counter'>
                        <img 
                            onClick={() => removeFromCart(id)} 
                            src={assets.remove_icon_red} 
                            alt='Remove from cart'
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            onClick={() => addToCart(id)} 
                            src={assets.add_icon_green} 
                            alt='Add to cart'
                        />
                    </div>
                }
            </div>

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='Rating stars' />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
}

FoodItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default FoodItem;
