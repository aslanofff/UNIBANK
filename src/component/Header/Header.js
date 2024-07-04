import "./Header.css"
import logo_uni from "../../assets/logo_uni.webp"
import search_button from "../../assets/search_button.png"
import arrow_down from "../../assets/arrow_logo.png"
import burger_menu from "../../assets/burger_menu.png"
import phone_orange from "../../assets/phone_orange.png"
import { Link } from "react-router-dom"
let Header = () => {
    return (
        <header>
            <div className="header_container">
                <div className="asd"> <a href="http://localhost:3000/" ><img src={logo_uni} alt="" className="logo_uni" /></a></div>
                <div className="titles_header">
                    <Link to="/services">Xidmət şəbəkəsi</Link>
                    <Link to="/about">Bank haqqında</Link>
                    <Link to="/cashback">Keşbek</Link>
                    <Link to="/tariffs">Tariflər</Link>
                    <Link to="/resource">İnsan Resursları</Link>
                    <Link to="/contact">Bankla əlaqə və təkliflər</Link>
                    <Link to="/faq">F.A.Q</Link>
                </div>
                <div className="header_buttons">
                    <button style={{ margin: '0', border: 'display' }}>Fərdi</button>
                    <button>Biznes</button>
                    <div className="languages_container">
                        <p>Az</p>
                        <img src={arrow_down} alt="" className="burger_language" />
                    </div>
                    <button className="lang">AZE</button>
                    <button className="lang">ENG</button>
                    <button className="lang">RUS</button>
                    <button> <img src={search_button} alt="" className="search_button" /> </button>
                </div>
            </div>
            <div className="burger_contact">
                <div className="header_burger">
                    <img src={burger_menu} alt="" className="burger_menu" />
                </div>
                <div className="header_contact">
                    <img src={phone_orange} alt="" />
                    <p>117</p>
                </div>

            </div>
        </header>
    )
}
export default Header;