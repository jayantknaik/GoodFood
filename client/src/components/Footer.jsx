const Footer = ({type}) => {
    return (
        <div data-testid="footer" className={type == 'fixed' ? "footer fixed" : "footer"}>All Rights Reserved. &copy; 2026 goodfood | Made with ❤️ in India</div>
    )
}

export default Footer;