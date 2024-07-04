import "./Home.css"
import ucard from "../../assets/ucard.webp"
import phone_logo from "../../assets/phone_logo.webp"
import arrow_down from "../../assets/arrow_logo.png"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
let Home = () => {
    return (
        <>
            <Header />
            <div className="Home_container">
                <div className="Home_container_info">
                    <div>
                        <h3>Nağd kreditlər</h3>
                        <p><span>11%</span><br /><br />-dən başlayaraq</p>
                        <button>Sifariş et</button>
                    </div>
                    <div>
                        <h3>Əmanətlər</h3>
                        <p><span>9.5%</span><br /><br />-dək illik gəlir</p>
                        <button>Ətraflı</button>
                    </div>  <div>
                        <h3>Plastik kartlar</h3>
                        <p><span>10%</span><br /><br />-dək keşbek xidmət</p>
                        <button>Ətraflı</button>
                    </div>
                    <div>
                        <h3>Kredit kartı</h3>
                        <p><span>40</span><br /><br />günədək güzəşt<br /> müddəti</p>
                        <button>Ətraflı</button>
                    </div>
                </div>

                <div className="Home_container_ucard">
                    <div className="ucard">
                        <img src={ucard} alt="" />
                    </div>
                    <div className="Home_ucard_info">
                        <h2>Sənin kartın - UCarddır!</h2>
                        <p> Bu kart sənə dünyanın istənilən yerində multivalyutalı hesablarla alış-veriş imkanı,
                            15 000 ₼-dək və 40 günədək faizsiz kredit xətti, keşbek və illik 6%-dək gəlir əldə
                            etmək imkanı verir. Bir sözlə, bütün ehtiyaclar tək kartda!
                        </p>

                        <div className="Home_ucard_buttons">
                            <div>
                                <button className="ucard_button1">Ətraflı</button>
                            </div>
                            <div>
                                <button className="ucard_button2">Partnyorlar</button>
                                <button className="ucard_button3">Şəxsi kabinet</button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="Home_appbar">
                    <div>
                        <h1>UBank</h1>
                        <p>UBank 24/7 bank xidmətlərinə çıxışı smartfonunda təmin edən mobil tətbiqdir.
                            Ödənişlərini banka gəlmədən, telefonunda bir toxunuşla həyata keçir!
                        </p>
                        <button>Haqqında</button>
                    </div>
                    <div className="phone_logo">
                        <img src={phone_logo} alt="" />
                    </div>
                </div>

                <div className="Home_container_exchange">
                    <h1>Valyuta məzənnələri</h1>

                    <div className="responsive_buttons">
                        <button>Nağd</button>
                        <button>Nağdsız</button>
                        <button>Kart</button>
                    </div>

                    <div className="Exchange_price">
                        <div className="Home_exchange_table container1">
                            <p>Nağd</p>
                            <p className="update">Yeniləndi 10.05.2024</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Valyuta</th>
                                        <th>Alış</th>
                                        <th>Satış</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>USD</td>
                                        <td>1.6970 <img src={arrow_down} alt="" /></td>
                                        <td>1.7025 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>EUR</td>
                                        <td>1.8078 <img src={arrow_down} alt="" /> </td>
                                        <td>1.8554 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>RUB</td>
                                        <td>1.0175 <img src={arrow_down} alt="" /> </td>
                                        <td>1.0187 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>GBP</td>
                                        <td>2.0957 <img src={arrow_down} alt="" /> </td>
                                        <td>2.1691 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="Home_exchange_table container2">
                            <p>Nağdsız</p>
                            <p className="update">Yeniləndi 10.05.2024</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Valyuta</th>
                                        <th>Alış</th>
                                        <th>Satış</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>USD</td>
                                        <td>1.6970 <img src={arrow_down} alt="" /></td>
                                        <td>1.7025 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>EUR</td>
                                        <td>1.8078 <img src={arrow_down} alt="" /> </td>
                                        <td>1.8554 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>RUB</td>
                                        <td>1.0175 <img src={arrow_down} alt="" /> </td>
                                        <td>1.0187 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>GBP</td>
                                        <td>2.0957 <img src={arrow_down} alt="" /> </td>
                                        <td>2.1691 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="Home_exchange_table container3">
                            <p>Kart</p>
                            <p className="update">Yeniləndi 10.05.2024</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Valyuta</th>
                                        <th>Alış</th>
                                        <th>Satış</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>USD</td>
                                        <td>1.6970 <img src={arrow_down} alt="" /></td>
                                        <td>1.7025 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>EUR</td>
                                        <td>1.8078 <img src={arrow_down} alt="" /> </td>
                                        <td>1.8554 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>RUB</td>
                                        <td>1.0175 <img src={arrow_down} alt="" /> </td>
                                        <td>1.0187 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>GBP</td>
                                        <td>2.0957 <img src={arrow_down} alt="" /> </td>
                                        <td>2.1691 <img src={arrow_down} alt="" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>


                    {/* <div className="Exchange_table">
                    <div className="Exchange_calculator">
                        <p>Valyuta kalkulyatoru</p>
                        <p>Nağd məzənnə əsasında hesablanır</p>
                    </div>

                    <div className="Exchange_input_container">
                        <div className="Exchange_input">
                            <input type="number" placeholder="0" />
                            <div className="Exchange_result">
                                <span>A</span>
                                <span>USD</span>
                                <img src={arrow_down} alt="" className="Arrow_exchange" />
                            </div>
                        </div>

                   
                    </div>
                </div> */}

                </div>

                <div className="Front_news">
                    <div>
                        <p>Unibank kredit faizini aşağı saldı, kredit məbləğini və müddəti artırdı!</p>
                        <p>Unibank müştərilərinin üç istəyini bir məhsulda birləşdirib. Bank nağd kreditlərin faizini xeyli aşağı salıb,
                            kreditin maksimal məbləğini və verilmə müddətini isə artırıb. İndi “Unibank”a müraciət edənlər 50 000 AZN-dək
                            krediti illik cəmi 11%-dən başlayaraq, həm də 60 ayadək müddətə əldə edə biləcəklər.</p>
                        <p>06.05.2024</p>
                    </div>
                    <div>
                        <p>Unibank “Yaşıl layihələr”in dəstəklənməsi istiqamətində əməkdaşlığa başlayıb</p>
                        <p>Unibank yaşıl maliyyələşmənin təşkili və ICMA standartlarına uyğun “yaşıl istiqrazlar”ın emissiyası istiqamətində,
                            AIFC Yaşıl Maliyyə Mərkəzi (Astana Beynəlxalq Maliyyə Mərkəzi) ilə əməkdaşlığa başlayıb. Bu əməkdaşlıq 2024-cü il
                            üçün Bankın strateji inkişaf prioritetlərindən olan “ESG” (Ətraf mühit, Sosial və İdarəetmə) istiqaməti üzrə
                            layihələrin həyata keçirməsinə imkan yaradacaq.</p>
                        <p>01.05.2024 </p>
                    </div>
                    <div>
                        <p>Unibank İdarə Heyətinin sədri ABŞ-yə ilk bankçılıq missiyasında iştirak edib</p>
                        <p>Mərkəzi Bankın sədri Taleh Kazımovun rəhbərliyi ilə Azərbaycanın Bankçılıq Missiyasının ABŞ-yə geniş tərkibdə ilk
                            işgüzar səfəri başa çatıb. Azərbaycan Banklar Assosiasiyası və ABŞ-Azərbaycan Ticarət Palatası tərəfindən təşkil
                            edilən səfərdə Unibank İdarə Heyətinin sədri Fərid Abuşov da iştirak edib.</p>
                        <p>29.04.2024</p>
                    </div>
                </div>
                <div className="News_button"><button>Bütün xəbərlər</button></div>

                {/* <div className="info_container_home">
            <div className="container_atm">
                <div>
                    <h2>UTM və filial <br/>şəbəkəsi</h2>
                    <p>Filial və UTM-lərin ünvanları, həmçinin - iş saatları və digər məlumatlar haqqında ətraflı.</p>
                    <button>Daha ətraflı</button>
                </div>
                <div className="atm">
                    <img src={atm} alt=""/>
                </div>
            </div>
            <div>
                <h2>Sualın var? <br/>Bizimlə əlaqə saxla !</h2>
                <p>Onlayn-məsləhətçi, 117 Çağrı mərkəzi və ya bank filiallarına müraciət et və suallarına cavab al. Rahat və asan!</p>
                <button>Daha ətraflı</button>
            </div>
        </div> */}
            </div>
            <Footer />
        </>
    )
}


export default Home;