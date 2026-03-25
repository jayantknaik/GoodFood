import "../scss/pages/payment.scss";
import { Link } from "react-router-dom";
const PaymentSuccessIcon = new URL("../../assets/images/payment-success.svg", import.meta.url);

const PaymentSuccess = () => {
    return (
        <div className="payment">
            <div className="payment__img">
                <img src={PaymentSuccessIcon} alt="payment-success-icon" width={380} height={300} className="payment__img" />
            </div>
            <div className="payment__title payment__title--success">Payment Success</div>
            <div className="payment__message">Your payment was successful.</div>
            <Link to={'/'} className="payment__cta">Still Hungry? Get More Food!</Link>
        </div>
    )
}

export default PaymentSuccess