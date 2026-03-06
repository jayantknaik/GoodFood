import "../scss/pages/payment.scss";
import { Link } from "react-router-dom";
const PaymentFailedIcon = new URL("../../assets/images/payment-failed.svg", import.meta.url);

const PaymentFailed = () => {
    return (
        <div className="payment">
            <div className="payment__img-wrp">
                <img src={PaymentFailedIcon} alt="payment-failed-icon" width={380} height={300} className="payment__img" />
            </div>
            <div className="payment__title payment__title--fail">Payment Failed</div>
            <div className="payment__message">Your payment was unsuccessful. Please try again.</div>
            <Link to={'/'} className="payment__cta">Get Food</Link>
        </div>
    )
}

export default PaymentFailed;