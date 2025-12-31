import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import useFetchResInfo from '../utils/hooks/useFetchResInfo';
import useFetchResCategories from "../utils/hooks/useFetchResCategories";
import { IMG_URL } from "../utils/constants";
const FoodNotFound = new URL("../../assets/images/dummyFood.jpg", import.meta.url);
import RestaurantCategory from "../components/restaurant/RestaurantCategory";
import '../scss/pages/menu.scss';
import { useDispatch, useSelector } from "react-redux";
import { addFavRestaurant, removeFavRestaurant } from "../utils/redux/cartSlice";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useFetchResInfo(resId);
    const resCategories = useFetchResCategories(resId);
    const favRestaurants = useSelector(state => state.cart.favRestaurants);
    const { name, avgRating, totalRatingsString, cuisines, areaName, costForTwo, cloudinaryImageId } = resInfo;
    const [scrollUpArrow, setScrollUpArrow] = useState(false);
    const [isExpanded, setIsExpanded] = useState('cat-0');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favResIndex = favRestaurants.findIndex(item=>item.id === resId);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 100) {
                setScrollUpArrow(true);
            }
            else {
                setScrollUpArrow(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    const scrollUp = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const toggleCategory = ({ id }) => {
        isExpanded === id ? setIsExpanded('') : setIsExpanded(id);
    }

    const toggleFavRestaurantItem = () => {

        if(favResIndex !== -1) {
            dispatch(removeFavRestaurant(resInfo));
        }
        else {
            dispatch(addFavRestaurant(resInfo));
        }

    }

    return resCategories == null ? <Shimmer /> :
        <>
            <div className="menu">
                <div className="menu__imgCnt">
                    <div className="menu__back" onClick={() => navigate(-1)}></div>
                    <img className="menu__img" src={IMG_URL + cloudinaryImageId} onError={(e) => e.target.src = FoodNotFound} alt="" />
                </div>
                <div className="menu__info">
                    <div className="menu__info__scroll">

                        <div className="menu__info-container first">
                            <div className="menu__row">
                                <div className="menu__name-cnt">
                                    <div className="menu__name" title={name}>{name}</div>
                                    <div className={`menu__fav ${favResIndex!==-1?"active":""}`} onClick={() => toggleFavRestaurantItem()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="menu__rating-container">
                                    <div className="menu__rating">{avgRating}</div>
                                    <div className="menu__rating-total">{totalRatingsString}</div>
                                </div>
                            </div>
                            <div className="menu__cuisines">{cuisines.join(", ")}</div>
                        </div>

                        <div className="menu__info-container second">
                            <div className="menu__area">{areaName}</div>
                            <div className="menu__cost"><span className="font-inter">{costForTwo}</span></div>
                        </div>

                        <div className="menu__info-container third">
                            {
                                resCategories.map((item, index) => {

                                    const { title, itemCards } = item.card.card;

                                    return (
                                        <RestaurantCategory
                                            id={`cat-${index}`}
                                            key={`cat-${index}`}
                                            title={title}
                                            itemCards={itemCards}
                                            isExpanded={isExpanded}
                                            toggleCategory={toggleCategory}
                                            resName={name}
                                            resId={resId}
                                        />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className={`menu__scrollUp ${scrollUpArrow ? 'active' : ''}`} onClick={() => scrollUp()}></div>
            </div>

            <Footer />

        </>
}

export default RestaurantMenu;