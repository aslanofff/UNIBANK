import "./Cashback.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import cashback_logo2 from "../../assets/swarovski-logo2-cashback.webp"
import cashback_logo3 from "../../assets/karting-logo3-cashback.jpg"
import cashback_logo4 from "../../assets/ubank-logo4-cashback.png"
import cashback_logo5 from "../../assets/toba-logo5-cashback.webp"
import cashback_logo6 from "../../assets/villeroy-logo6-cashback.webp"
import cashback_logo7 from "../../assets/adore=logo7-cashback.jpg"
import cashback_logo8 from "../../assets/asus-logo8-cashback.webp"
import cashback_logo10 from "../../assets/bg-logo10-cashback.jpeg"
import cashback_logo11 from "../../assets/beatrice-logo11-cashback.webp"
import cashback_logo12 from "../../assets/coincasa-logo12-cashback.jpg"
import cashback_logo120 from "../../assets/golderose-logo12-cashback.webp"
import cashback_logo13 from "../../assets/laparfumeria-logo13-cashback.webp"
import cashback_logo14 from "../../assets/note-logo14-cashback.jpg"
import cashback_logo15 from "../../assets/optimal-logo15-cashback.webp"
import cashback_logo16 from "../../assets/pease-logo16-cashback.webp"
import cashback_logo17 from "../../assets/sabina-logo17-cashback.webp"
import cashback_logo18 from "../../assets/logo18-cashback.jpg"
import cashback_logo19 from "../../assets/toys-logo19-cashback.webp"
import cashback_logo20 from "../../assets/twinset-logo20-cashback.webp"
import cashback_logo21 from "../../assets/villa-logo21-cashback.jpg"
import cashback_logo22 from "../../assets/yves-logo22-cashback.jpg"
import angle_orange from "../../assets/angle_orange.png"
let Cashback = () => {
    return (
        <>
            <Header />
            <div className="cashback_title">
                <h1>Daha çox ödə, daha çox qazan!</h1>
                <p>Pulunu Unibank kartında saxla və ödənişlər et, yüksək keşbek faizləri sənin olsun!</p>
            </div>
            <div className="servic_percent">
                <div>
                    <p>Marketlər*</p>
                    <p>6%</p>
                </div>
                <div>
                    <p>Kafe-restoran</p>
                    <p>5%</p>
                </div>
                <div>
                    <p>Parkinq</p>
                    <p>5%</p>
                </div>
                <div>
                    <p>Kommunal*</p>
                    <p>2%</p>
                </div>
            </div>
            <div className="cashback_title">
                <h1>Sevimli brendlərin indi daha sərfəli!</h1>
                <p>Unibank kartın ilə bu brendlərdə alış-veriş sənə limitsiz və yüksək keşbek gətirsin!</p>
            </div>

            <div className="select_conatiner_cashback">
                <div>
                    <p>Kateqoriyanı seç</p>
                    <select>
                        <option>-Bütün-</option>
                        <option>Aksessuarlar</option>
                        <option>Avto</option>
                        <option>Digər</option>
                        <option>Geyim</option>
                        <option>Istirahət və Əyləncə</option>
                        <option>Kosmetika</option>
                        <option>Parfumeriya</option>
                    </select>
                </div>
                <div>
                    <p>Axtarış</p>
                    <input placeholder="Daxil et"></input>
                </div>
            </div>
            <button className="angle"><img src={angle_orange} alt="" /></button>

            <div className="main_store_cashback">
                {/* <div className="store_cashback">
                <div>
                        <div>
                            <img src={cashback_logo1} alt="" />
                        </div>
                        <div className="store">
                            <p>Bravo</p>
                            <p>Supermarketlər</p>
                            <p>İstənilən Poss terminalda</p>
                        </div>
                </div>
                <div>6%</div>
            </div> */}

                <div className="store_cashback">
                    <div>
                        <img src={cashback_logo2} alt="" />
                    </div>

                    <div className="store">
                        <p>Swarovski</p>
                        <p>Aksessuarlar</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <div>
                        <img src={cashback_logo3} alt="" />
                    </div>

                    <div className="store">
                        <p>Baku Karting</p>
                        <p>Istirahət və Əyləncə</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo4} alt="" />
                    <div className="store">
                        <p>Era electronics</p>
                        <p>Texnika və Komputerlər</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>3%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo5} />
                    <div className="store">
                        <p>Toba Bike</p>
                        <p>Supermarketlər</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>3%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo6} alt="" />
                    <div className="store">
                        <p>Villeroy & Boch</p>
                        <p>Supermarketlər</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo7} alt="" />
                    <div className="store">
                        <p>Adore Parfumery & Cosmetics</p>
                        <p>Parfumeriya</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>2%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo8} alt="" />
                    <div className="store">
                        <p>Ambiance</p>
                        <p>Digər</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo4} alt="" />
                    <div className="store">
                        <p>Asus Brand Store</p>
                        <p>Texnika və Komputerlər</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>2%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo10} alt="" />
                    <div className="store">
                        <p>B & G Store</p>
                        <p>Uşaq üçün</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo11} />
                    <div className="store" >
                        <p>Beatrice</p>
                        <p>Kosmetika</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo12} alt="" />
                    <div className="store">
                        <p>Coincasa</p>
                        <p>Digər</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo120} alt="" />
                    <div className="store">
                        <p>Golden Rose</p>
                        <p>Kosmetika</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo13} alt="" />
                    <div className="store">
                        <p>La Parfumerie</p>
                        <p>Kosmetika</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo14} alt="" />
                    <div className="store">
                        <p>Note</p>
                        <p>Kosmetika</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo15} alt="" />
                    <div className="store">
                        <p>Optimal təkər mərkəzi</p>
                        <p>Avto</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>2%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo16} alt="" />
                    <div className="store">
                        <p>Paese</p>
                        <p>Kosmetika</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>8%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo17} alt="" />
                    <div className="store">
                        <p>Sabina</p>
                        <p>Parfumeriya</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>2%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo4} alt="" />
                    <div className="store">
                        <p>Silver Style</p>
                        <p>Aksessuarlar</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo18} alt="" />
                    <div className="store">
                        <p>Skandivaniya Evi</p>
                        <p>Digər</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo19} alt="" />
                    <div className="store">
                        <p>Super Toys</p>
                        <p>Uşaq üçün</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>3%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo20} alt="" />
                    <div className="store">
                        <p>Twinset</p>
                        <p>Geyim</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo21} alt="" />
                    <div className="store">
                        <p>Villa Pizza</p>
                        <p>Restoran</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>10%</div>
                </div>

                <div className="store_cashback">
                    <img src={cashback_logo22} alt="" />
                    <div className="store">
                        <p>Yves Delorme</p>
                        <p>Digər</p>
                        <p>Ancaq Unibank Poss terminalda</p>
                    </div>
                    <div>5%</div>
                </div>


            </div>
            <div className="cashback_information">
                <h1>Keşbek necə qazanım ?</h1>
                <div>
                    <button>Ətraflı məlumat</button>
                    <button>İstisna hallar</button>
                </div>
            </div>
            <div className="select_conatiner_cashbackk">
                <h1>Kalkulyator</h1>
                <div className="select_conatiner_cashback">
                    <div>
                        <p>Kateqoriyanı seç</p>
                        <select>
                            <option>-Bütün-</option>
                            <option>Aksessuarlar</option>
                            <option>Avto</option>
                            <option>Digər</option>
                            <option>Geyim</option>
                            <option>Istirahət və Əyləncə</option>
                            <option>Kosmetika</option>
                            <option>Parfumeriya</option>
                        </select>
                    </div>
                    <div>
                        <p>Partnuyoru seç</p>
                        <select>
                            <option>-Seçin-</option>
                            <option>Bolt Food</option>
                            <option>Bravo</option>
                            <option>Swarovski</option>
                            <option>Baku Karting</option>
                            <option>Era electronics</option>
                            <option>Kosmetika</option>
                            <option>Toba Bike</option>
                            <option>Villeroy & Boch</option>
                            <option>Adore Parfumery & Cosmetics</option>
                            <option>Ambiance</option>
                            <option>Asus Brand Store</option>
                            <option>B&G store</option>
                            <option>Beatrice</option>
                            <option>Coincasa</option>
                            <option>Golden Rose</option>
                            <option>La Parfumerie</option>
                            <option>Note</option>
                            <option>Optimal təkər mərkəzi</option>
                            <option>Paese</option>
                            <option>Sabina</option>
                            <option>Silver Style</option>
                            <option>Skandivaniya Evi</option>
                            <option>Super Toys</option>
                            <option>Villa Pizza</option>
                            <option>Yves Delorme</option>
                        </select>
                    </div>
                    <div>
                        <p>Məbləği daxil edin</p>
                        <input placeholder="0" type="number"></input>
                    </div>
                </div>
                <div className="select_conatiner_cashback_amount">
                    <p>Hesablanmış keşbek</p>
                    <p>0</p>
                    <p>azn</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Cashback;