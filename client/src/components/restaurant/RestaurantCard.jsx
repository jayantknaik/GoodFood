import { IMG_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavRestaurant, removeFavRestaurant } from "../../utils/redux/cartSlice";

// Use Parcel 2 recommended way for local assets
const FoodNotFound = new URL("../../../assets/images/dummyFood.jpg", import.meta.url);

const RestaurantCard = ({ resData }) => {
  const { id, name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } = resData.info ? resData.info : resData;
  const favRestaurants = useSelector(state => state.cart.favRestaurants);
  const favResIndex = favRestaurants.findIndex(item => item.id === id);
  const dispatch = useDispatch();

  const toggleFavRestaurantItem = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (favResIndex !== -1) {
      dispatch(removeFavRestaurant(resData.info));
    } else {
      dispatch(addFavRestaurant(resData.info));
    }
  };

  // Get image src safely
  const imageSrc = cloudinaryImageId ? IMG_URL + cloudinaryImageId : FoodNotFound.href;

  return (
    <Link to={"/restaurants/" + id} className="res-card">
      <div className="res-card__imgCnt">
        <div
          className={`res-card__fav ${favResIndex !== -1 ? "active" : ""}`}
          onClick={(e) => toggleFavRestaurantItem(e)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </div>
        <img
          className="res-card__img"
          src={imageSrc}
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src !== FoodNotFound.href) {
              img.src = FoodNotFound.href;
            }
          }}
          alt={name}
        />
      </div>
      <div className="res-card__info">
        <div className="res-card__row">
          <div className="res-card__name" title={name}>{name}</div>
          <div className="res-card__rating">{avgRating}</div>
        </div>
        <div className="res-card__row">
          <div className="res-card__cuisine">{cuisines.join(", ")}</div>
          <div className="res-card__price">
            {costForTwo.includes("for two") ? (
              costForTwo
            ) : (
              <>
                <span className="rupees-arial">&#8377;</span>
                <span className="font-inter">{Math.round(costForTwo / 100)}</span> for two
              </>
            )}
          </div>
        </div>
        {sla?.deliveryTime && <div className="res-card__eta">{sla.deliveryTime} min</div>}
      </div>
    </Link>
  );
};

export const isVeg = (RestaurantCard) => {
  return (props) => (
    <div className="res-card__veg">
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
