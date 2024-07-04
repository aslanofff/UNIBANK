import "./Faq.css"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

let Faq = () => {
    return (
        <>
            <Header />
            <div className="main_faq">
                <h2>F.A.Q</h2>
                <div>
                    <p>1. Nece yasdan nagd kredit verilir?</p>
                    <p>Nağd kredit 18 -70 yaş arası verilir.</p>
                </div>
                <div>
                    <p>2. Kredit almaq ucun maas ne qeder olmalidir?</p>
                    <p>Rəsmi gəlir varsa, kredit üçün müraciət etmək olar.</p>
                </div>
                <div>
                    <p>3. Nagd kredit muddeti ne qederdir?</p>
                    <p>Nəğd kreditin müddəti 3 aydan 60 ayadəkdir</p>
                </div>
                <div>
                    <p>4. Tələbələr kredit ala bilər?</p>
                    <p>Fin kod dəyişmir</p>
                </div>
                <div>
                    <p>5. Şəxsiyyət vəsiqəmi dəyişsəm fin kod dəyişir?</p>
                    <p>Bəli.</p>
                </div>
                <div>
                    <p>6. Sexsiyet vesiqemi deyishsem kredit odeye bilecem? </p>
                    <p>Bəli.</p>
                </div>
                <div>
                    <p>7. Krediti nece odeyim?</p>
                    <p>Kredit və ya UCard-ı UBank mobil tətbiqi, unibank.az saytı ( <a href="https://online.unibank.az/online-credit-payment/">https://onlineservices.unibank.az/<br></br>OnlineCreditPayment</a> ), Unibankın odeme terminalları, MilliÖn, eManat vasitəsilə ödəyə bilərsən</p>
                </div>
                <div>
                    <p>8. Unibank nece faizle kredit verir?</p>
                    <p>Kredit üzrə illik faiz dərəcəsi müştərinin kredit tarixçəsinə görə fərdi təyin olunur.</p>
                </div>
                <div>
                    <p>9. Kreditimdə niyə faizlər gündəlik artır? Annuitet nədir?</p>
                    <p>Annuitet ödəniş borcun (kredit üzrə əsas borcun və həmin borca hesablanmış faizlərin) ödənilməsinə yönəldilmiş müntəzəm bərabər aylıq ödənişlər. Bu ödənişlər aylar üzrə elə hesablanaraq bölüşdürülməlidir ki, kreditin ödəniş müddətinin sonunda borc tamamilə ödənilmiş olsun. </p>
                </div>
                <div>
                    <p>10. Eyni anda bir neçə kredit əldə edə bilərəm?</p>
                    <p>Eyni anda bir şəxsın adına bir nağd kredit ola bilər</p>
                </div>
                <div>
                    <p>11. CIF kod nedir və nə üçündür?</p>
                    <p>Hər bir Unibank müştərisinin kredit odenishi etmək üçün istifadə etdiyi unikal koddur.</p>
                </div>

            </div>
            <Footer />
        </>
    )
}


export default Faq;