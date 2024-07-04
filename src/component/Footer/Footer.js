
import "./Footer.css"
import React from 'react';
import apple__logo from "../../assets/apple__logo.png"
import android_logo from "../../assets/android_logo.png"
import facebook_logo from "../../assets/facebook_logo.png"
import twiter_logo from "../../assets/twiter_logo.png"
import linkedin_logo from "../../assets/linkedin_logo.png"
import youtube_logo from "../../assets/youtube_logo.png"
import insta_logo from "../../assets/insta_logo.png"
import telegram_logo from "../../assets/telegram_logo.png"
// import footer_logo1 from "../../assets/footer_logo1.webp"


const handleClick1 = (event) => {
    event.target.style.backgroundColor = "lightgray";
    window.open('https://apps.apple.com/ru/app/ubank-by-unibank/id1073632425', '_blank');
};
const handleClick2 = (event) => {
    event.target.style.backgroundColor = "lightgray";
    window.open('https://play.google.com/store/apps/details?id=az.unibank.mbanking', '_blank');
};

const handleClick3 = (event) => {
    event.target.style.backgroundColor = "lightgray";
    window.open('https://www.facebook.com/unibank.az/', '_blank');
};
const handleClick4 = (event) => {
    event.target.style.backgroundColor = "lightgray";
    window.open('https://x.com/unibank', '_blank');
};
const handleClick5 = (event) => {
    event.target.style.backgroundColor = "lightgray";
    window.open('https://www.linkedin.com/company/unibankazerbaijan/', '_blank');
};
const handleClick6 = (event) => {
    event.target.style.backgroundColor = "lightgray";
    window.open('https://www.youtube.com/c/UnibankAze', '_blank');
};
const handleClick7 = (event) => {
    event.target.style.backgroundColor = "lightgray";
    window.open('https://www.instagram.com/unibank.az/', '_blank');
};
const handleClick8 = (event) => {
    event.target.style.backgroundColor = "lightgray";
    window.open('https://t.me/UnibankAZ', '_blank');
};
let Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <h1>Sualın var?<br />Bizimlə əlaqə saxla! </h1>
                <p>Onlayn-məsləhətçi, 117 Çağrı mərkəzi və ya bank filiallarına müraciət et və suallarına cavab al. Rahat və asan! </p>
                <button>Daha ətraflı</button>
            </div>
            <div className="footer_info">
                <div>
                    <h3>Kartlar</h3>
                    <p>Kartlar</p>
                    <p>Debt kartlar</p>
                    <p>Digər kartlar</p>
                </div>
                <div>
                    <h3>Kreditlər</h3>
                    <p>Nağd</p>
                    <p>Mikro</p>
                    <p>İpoteka</p>
                    <p>Kredit xətti</p>
                </div>
                <div>
                    <h3>Əmanətlər</h3>
                    <p>Müddətli</p>
                    <p>Proqressiv</p>
                    <p>Yığım</p>
                    <p>Topla</p>
                </div>
                <div>
                    <h3>Köçürmələr</h3>
                    <p>Ölkədaxili pul köçürmələri</p>
                    <p>Ölkəxarici pul köçürmələri</p>
                </div>
                <div>
                    <h3>Onlayn xidmətlər</h3>
                    <p>Ubank</p>
                    <p>Şəxsi kabinet</p>
                    <p>Unimiles şəxsi kabineti</p>
                    <p>Onlayn kredit ödənişi</p>
                    <p>Onlayn kredit müraciəti</p>
                </div>
                <div>
                    <h3>Əlavə xidmətlər</h3>
                    <p>Hesablaşma-kassa xidməti</p>
                    <p>Depozit qutuları</p>
                    <p>Onlayn-ticarət (e-commerce)</p>
                </div>
                <div>
                    <h3>Bank haqqında</h3>
                    <p>Rəhbərlik</p>
                    <p>Müxbir hesablar</p>
                    <p>Təklif və şikayətlər</p>
                    <p>İnsan resursları</p>
                    <p>Hesabatlar</p>
                    <p>Digər sənədlər</p>
                </div>
            </div>
            <div className="social_medias">
                <div className="social_medias_logo">
                    <button onClick={handleClick1}><img src={apple__logo} alt="" /></button>
                    <button onClick={handleClick2}><img src={android_logo} alt="" /></button>
                    <button onClick={handleClick3}><img src={facebook_logo} alt="" /></button>
                    <button onClick={handleClick4}><img src={twiter_logo} alt="" /></button>
                    <button onClick={handleClick5}><img src={linkedin_logo} alt="" /></button>
                    <button onClick={handleClick6}><img src={youtube_logo} alt="" /></button>
                    <button onClick={handleClick7}><img src={insta_logo} alt="" /></button>
                    <button onClick={handleClick8}><img src={telegram_logo} alt="" /></button>
                </div>
                <div className="security">Məxfilik siyasəti</div>
            </div>
            <div className="line"></div>
        </footer>
    )
}

export default Footer;