import "./Services.css"
import information_orange from "../../assets/information_orange.png"
import informatin_white from "../../assets/information_white.png"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
let Services = () => {
    return (
        <>
            <Header />
            <div className="main_services">
                <div className="location_name">
                    <div>
                        <h3>"Aptek Dokta"</h3>
                        <p>Ganja city, crossing of Nizami and N. Narimanov streets</p>
                    </div>
                    <div className="info_amount">
                        <img className="orange_info" src={information_orange} alt="" />
                        <span>(AZN)</span>
                    </div>
                </div>

                <div className="location_name">
                    <div>
                        <h3>"Bolmart" supermarket</h3>
                        <p>9th distr., Mir Jalal str., 103</p>
                    </div>
                    <div className="info_amount">
                        <img src={information_orange} alt="" />
                        <span>(AZN)</span>
                    </div>
                </div>

                <div className="location_name">
                    <div>
                        <h3>"Garage" parking "Aptek Dokta"</h3>
                        <p>Azerbaijan ave., 2</p>
                    </div>
                    <div className="info_amount">
                        <img src={information_orange} alt="" />
                        <span>(AZN)</span>
                    </div>
                </div>

                <div className="location_name">
                    <div>
                        <h3>"Baku Store"</h3>
                        <p>Mashtaga settlement, H. Heybatov str.,13</p>
                    </div>
                    <div className="info_amount">
                        <img src={information_orange} alt="" />
                        <span>(AZN)</span>
                    </div>
                </div>

                <div className="location_name">
                    <div>
                        <h3>"Bolmart" supermarket</h3>
                        <p>9th distr., Mir Jalal str., 103</p>
                    </div>
                    <div className="info_amount">
                        <img src={information_orange} alt="" />
                        <span>(AZN)</span>
                    </div>
                </div>

                <div className="location_name">
                    <div >
                        <h3>"Dry Cleaning" </h3>
                        <p>Badamdar highway, 105</p>
                    </div>
                    <div className="info_amount">
                        <img src={information_orange} alt="" />
                        <span>(AZN)</span>
                    </div>
                </div>

                <div className="location_name">
                    <div>
                        <h3>"Nizami Mall"</h3>
                        <p>S. Asgarova str.</p>
                    </div>
                    <div className="info_amount">
                        <img src={information_orange} alt="" />
                        <span>(AZN)</span>
                    </div>
                </div>

                <div className="location_name">
                    <div>
                        <h3>"Araz" superstore</h3>
                        <p>Sumgait city, 9th distr,, U. Hajibayov str., 23</p>
                    </div>
                    <div className="info_amount">
                        <img src={information_orange} alt="" />
                        <span>(AZN)</span>
                    </div>
                </div>

                <div className="location_name">
                    <div>
                        <h3>"Araz" market</h3>
                        <p>Karabakh str., 26 </p>
                    </div>
                    <div className="info_amount">
                        <img src={information_orange} alt="" />
                        <span>(AZN)</span>
                    </div>
                </div>



                <div className="note_service">
                    <img src={information_orange} alt="" />
                    <span>Note: after 17:00 only card and loan services are provided</span>
                </div>

            </div>
            <Footer />
        </>)
}
export default Services;