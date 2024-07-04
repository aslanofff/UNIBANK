import "./Contact.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import facebook_orange from "../../assets/facebook_orange.png"
import insta_orange from "../../assets/insta_orange.png"
import linkedin_orange from "../../assets/linkedin_orange.png"
import twiter_orange from "../../assets/twitter_orange.png"
import telegram_orange from "../../assets/telegram_orange.png"
import youtube_orange from "../../assets/youtube_orange.png"
import phone_orange from "../../assets/phone_orange.png"
import message_orange from "../../assets/message_orange.png"
import complain_orange from "../../assets/complain_orange.png"
import filial_orange from "../../assets/filial_orange.png"
let Contact = () => {
    return (
        <>
            <Header />
            <div style={{ marginBottom: 100 }} className="contacts-container">
                <h1 className="contact_socialmedias_h1">Sosial şəbəkələr</h1>
                
                <div className="contact_socialmedias">
                <a href="https://www.facebook.com/unibank.az/" className="fb-link">
                    <div className="AA">
                        <img src={facebook_orange} alt="" />
                        <div>
                            <h3>Facebook</h3>
                            <p className="az">Ən son yenilikləri və xəbərləri rəsmi Facebook səhifəmizdən əldə et!</p>
                        </div>

                    </div>
                    </a>
                    <a href="https://www.instagram.com/unibank.az/"  className="fb-link">
                    <div className="AA">
                        <img src={insta_orange} alt="" />
                        <div>
                            <h3>Instagram</h3>
                            <p>Ən son xəbərlər, maraqlı müsabiqələr və s. rəsmi Instagram səhifəmizdə!</p>
                        </div>
                    </div>
                    </a>
                    <div className="AA">
                        <img src={linkedin_orange} alt="" />
                        <div>
                            <h3>Linkedin</h3>
                            <p>Korporativ həyatımızı rəsmi LinkedIn səhifəmizdə izlə!</p>
                        </div>
                    </div>
                    <div className="AA">
                        <img src={twiter_orange} alt="" />
                        <div>
                            <h3>Twitter</h3>
                            <p>Uzun sözün qısası rəsmi Twitter səhifəmizdə! </p>
                        </div>
                    </div>
                    <div className="AA">
                        <img src={telegram_orange} alt="" />
                        <div>
                            <h3>Telegram</h3>
                            <p>Rəsmi Telegram kanalımıza da abunə ol!</p>
                        </div>
                    </div>
                    
                    <div className="AA">
                        <img src={youtube_orange} alt="" />
                        <div>
                            <h3>Youtube</h3>
                            <p>Bütün reklam çarxlarımızı və videolarımızı rəsmi YouTube kanalımızda izlə!</p>
                        </div>
                    </div>
                    <a href=""></a>
                    <div className="AA">
                        <img src={youtube_orange} alt="" />
                        <div>
                            <h3>İstifadə təlimatları</h3>
                            <p>Unibankın xidmət və məhsullarından istifadəni buradan öyrən!</p>
                        </div>
                    </div>
                </div>


                <h1 className="contact_socialmedias_h1">Əlaqələr</h1>
                <div className="contact_socialmedias">
                    <div className="AA">
                        <img src={phone_orange} alt="" />
                        <div>
                            <h3>117 Çağrı Mərkəzi </h3>
                            <p>Bank xidmətləri ilə bağlı suallarını 24/7 fəaliyyət göstərən 117 Çağrı mərkəzimizə təqdim edə bilərsən</p>
                        </div>
                    </div>

                    <div className="AA">
                        <img src={message_orange} alt="" />
                        <div>
                            <h3>Onlayn məsləhətçi</h3>
                            <p>Əgər danışmağı sevmirsənsə, suallarını Onlayn məsləhətçimizə yazaraq, ünvanlaya bilərsən </p>
                        </div>
                    </div>

                    <div className="AA">
                        <img src={complain_orange} alt="" />
                        <div>
                            <h3>Təklif və Şikayətlər</h3>
                            <p>Bizim fəaliyyətimizin təkmilləşdirilməsində sənin rolun böyükdür!
                                Təklif və şikayətlərini buradan bizimlə bölüş.</p>
                        </div>
                    </div>

                    <div className="AA">
                        <img src={filial_orange} alt="" />
                        <div>
                            <h3>Filial şəbəkəsi</h3>
                            <p>Sənin Bankının filial, 24/7 çalışan UTM və terminalların ünvanları ilə buradan tanış ol!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contact;