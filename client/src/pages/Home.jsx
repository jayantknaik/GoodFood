import { useOutletContext } from 'react-router-dom';
import RestaurantCard, {isVeg} from '../components/restaurant/RestaurantCard';
import Shimmer from '../components/Shimmer';
import '../scss/pages/home.scss';
import Footer from '../components/Footer';
import { isMobile } from '../utils/hooks/isMobile';
import Search from '../components/Search';

const Home = () => {
    
    const resList = useOutletContext();
    const VegRestaurantCard = isVeg(RestaurantCard);

    return resList.length === undefined ? <Shimmer/> : (
        <>
            <div className="home">
                {
                    isMobile() &&
                    <Search resList={resList} />
                }
                <div className="home__head-container">
                    <div className="home__head">Order Food At Your Doorstep Now!</div>
                </div>
                <div className="home__title">Top restaurant chains in Bangalore</div>
                <div className="home__container" id='topRes'>
                    {
                        resList.map((res) => {
                            return (
                                res.info.veg === true ? <VegRestaurantCard resData={res} key={res.info.id} /> : <RestaurantCard resData={res} key={res.info.id} /> 
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;