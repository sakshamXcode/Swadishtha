import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({ category, setCategory }) => {
  console.log('Category:', category);
  console.log('setCategory:', typeof setCategory);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1> Dishes You Love : </h1>
      <p className='explore-menu-text'>
        Discover an array of delectable dishes on our menu, crafted to satisfy every craving. From hearty pastas and flavorful curries to fresh salads and gourmet burgers, each option is prepared with the finest ingredients. Whether you are in the mood for a light snack or a full-course meal, our diverse selection ensures there is something delicious for everyone to enjoy.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

