import "./About.css"
import people_orange from "../../assets/people_orange.png"
import price1 from "../../assets/prices_container_img1.jpg"
import price2 from "../../assets/prices_container_img2.jpg"
import price3 from "../../assets/prices_container_img3.webp"
import price4 from "../../assets/prices_container_img4.webp"
import value1 from "../../assets/value_container_img1.webp"
import value2 from "../../assets/value_container_img2.webp"
import value3 from "../../assets/value_container_img3.webp"
import value4 from "../../assets/value_container_img4.webp"
import value5 from "../../assets/value_container_img5.webp"
import value6 from "../../assets/value_container_img6.webp"
import notee_orange from "../../assets/notee_orange.png"
import note_orange from "../../assets/note_orange.png"
import message_orange from "../../assets/message_orange.png"
import information_orange from "../../assets/information_orange.png"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
let About = () => {
    return (
        <>
            <Header />
            <div className="about_bank_container">
                <div className="about_bank">
                    <h1>Bank haqqında</h1>
                    <p>Unibank – Azərbaycanın 1992-ci ilin iyul ayında, ilkin olaraq MBank adı altında, təsis edilmiş ən iri özəl banklarından biridir. MBank ilə Azərbaycanın aparıcı banklarından biri olan PROMTEXBANK-ın birləşməsindən sonra, onun adı 2002-ci ilin oktyabr ayının 15-də Unibank-a dəyişdirilmişdir. <br /><br />
                        Unibank müştəriyönümlü bank olaraq əsas fəaliyyət istiqamətlərini müştərinin istəkləri, ehtiyacları və rahatlığı üzərində qurub. Müştərinin istəklərindən, tələblərindən irəli gələrək çıxılan bu yol, onu dinləyərək daim inkişafa aparır. <br /><br />
                        2021-ci ildə Unibank Azərbaycanda ilk dəfə olaraq «mobile-only» (filialsız bank) prinsipinə uyğun olaraq Leobank-ı  yaratdı. Leo müştəriləri kredit limiti olan əlverişli Visa kartından istifadə etmək, ödəmə və köçürmələri həyata keçirmək, Keşbek almaq və daha çox üstünlüklərdən yararlanmaq imkanına malikdirlər</p>
                </div>

                <div className="note_container">
                    <img src={people_orange} alt="" />
                    <p>
                        Missiyamız, müştərilərin ilk seçimi olmaq və müştərilərə yönəlik (müştəri yönümlü) maliyyə xidmətləri
                        və innovativ həllər təqdim etməklə, bütün maraqlı olan tərəflər üçün uzunmüddətli dəyər yaratmaqdır.
                    </p>
                </div>

                <div className="info_containers">

                    <div className="info_container">
                        <img src={people_orange} alt="" />
                        <div>
                            <h3>Rəhbərlik</h3>
                            <p>Müşahidə Şurası, İdarə Heyəti və komitələr haqqında informasiya</p>
                        </div>
                    </div>
                    <div className="info_container">
                        <img src={information_orange} alt="" />
                        <div>
                            <h3>Müxbir hesablar</h3>
                            <p>Müxbir hesablar haqqında məlumat </p>
                        </div>
                    </div>
                    <div className="info_container">
                        <img src={message_orange} alt="" />
                        <div>
                            <h3>Təklif və Şikayətlər</h3>
                            <p>Müraciətlərin baxılması və cavablandırılması üzrə daxili qaydaların qısa icmalı </p>
                        </div>
                    </div>
                    <div className="info_container">
                        <img src={people_orange} alt="" />
                        <div>
                            <h3>İnsan resursları</h3>
                            <p>Mövcud vakansiyalar və peşəkar komanda haqqında informasiya </p>
                        </div>
                    </div>
                    <div className="info_container">
                        <img src={note_orange} alt="" />
                        <div>
                            <h3>Hesabatlar</h3>
                            <p>İllik və rüblük hesabatlar, təqdimatlar, auditor rəyi və digər hesabatlar </p>
                        </div>
                    </div>
                    <div className="info_container">
                        <img src={notee_orange} alt="" />
                        <div>
                            <h3>Digər sənədlər</h3>
                            <p>Səhmdar kapitalı, insayder əqdləri, və investisiya qiymətli kağızlar haqqında məlumat </p>
                        </div>
                    </div>
                </div>

                <div className="extra_info_containers">
                    <div>
                        <h1>Lisenziyalar</h1>
                        <p>“Unibank” Kommersiya Bankı” Açıq Səhmdar Cəmiyyəti Azərbaycan Respublikasının Mərkəzi Bankı tərəfindən verilmiş 14 dekabr 2010-cu il tarixli 73 saylı lisenziyaya əsasən “Banklar haqqında” Qanunun 32-ci maddəsində nəzərdə tutulmuş fəaliyyət növlərini həyata keçirə bilər.<br /><br />
                            “Unibank” Kommersiya Bankı” Açıq Səhmdar Cəmiyyətinə 29 dekabr 2009-cu il tarixində Maliyyə Nazirliyi tərəfindən sığorta agenti fəaliyyəti üzrə 000301 saylı lisenziya verilmişdir.<br /><br />
                            “Unibank” Kommersiya Bankı” Açıq Səhmdar Cəmiyyəti 30 iyul 2007-ci il tarixində 21 saylı qeydiyyat nömrəsi ilə Əmanətlərin Sığortalanması Fondunun iştirakçı banklarının reyestrinə daxil edilmişdir.</p>
                    </div>
                    <div>
                        <h1>Əlaqə koordinatları</h1>
                        <p><span>Hüquqi ünvan:</span><br />
                            Azərbaycan Respublikası, Bakı şəh., AZ1014, R.Behbudov küç., 55, məhəllə 384<br /><br />

                            Tel.: (99412) 117<br />
                            Tel.: (99412) 498 22 44<br />
                            Faks: (99412) 498 09 53<br /><br />

                            E-mail: bank@unibank.az<br />
                            Web: www.unibank.az<br /><br />

                            S.W.I.F.T. UBAZAZ22<br />
                            VÖEN 1300017201<br /><br />

                            <span>Kənar auditor haqda məlumat:</span><br />
                            "KPMG Azerbaijan" <br />
                            Neftçilər pr. 153, "Port Baku" Cənubi qüllə, 12-ci mərtəbə<br />
                            T: +994 (12) 4048910 | F: +994 (12) 4048914<br /><br />

                            <span>Beynəlxalq münasibətlər şöbəsi:</span><br />
                            i.relations@unibank.az
                        </p>
                    </div>
                    <div>
                        <h1>Qısa məlumat</h1>
                        <p>“Unibank” Kommersiya Bankı” Açıq Səhmdar Cəmiyyəti 2007-ci il tarixində “bir pəncərə” prinsipi ilə Vergilər Nazirliyində dövlət qeydiyyatına alınmışdır. <br /><br />

                            <span>Tam adı:</span><br />
                            “UNİBANK” Kommersiya Bankı” Açıq Səhmdar Cəmiyyəti<br /><br />

                            <span>Qısa:</span><br />
                            Unibank KB<br /><br />

                            <span>Təşkilati-hüquqi forması:</span><br />
                            Kommersiya Bankı Açıq Səhmdar Cəmiyyəti<br /><br />

                            <span>Qeydiyyat tarixi:</span><br />
                            27 iyul 1992-ci il.<br /><br />

                            <span>Ticarət nişanı:</span><br />
                            23.09.2008-ci il tarixində Azərbaycan Respublikası Dövlət Standartlaşdırma, Metrologiya və Patent üzrə Dövlət Agentliyinin dövlət reyestrində “Unibank” əmtəə nişanı yeni dizaynlı ticarət nişanı kimi qeydiyyata almışdır və bununla bağlı eyni tarixdə 2008 1142 saylı Şəhadətnamə vermişdir.<br /><br />

                            <span>Törəmə şirkətlər:</span><br />
                            <a href="https://unicapital.az/">Unicapital</a>
                        </p>
                    </div>
                </div>

                <div className="prices_containers_about">
                    <h1>Mükafatlar</h1>
                    <div className="prices_containers">
                        <div className="tableone">
                            <div>
                                <img src={price1} alt="" />
                                <p>Azərbaycanda Ən Tez İnkişaf Edən Bank 2004-cü il <br /><br />Azərbaycanda İlin Bankı - 2005-ci il<br /><br />
                                    Azərbaycanda İlin Bankı - 2008-ci il<br /><br />Azərbaycanda İlin Bankı - 2014-cü il</p>
                            </div>
                            <div>
                                <img src={price2} alt="" />
                                <p>AYİB-ın Azərbaycanda Ticarətin İnkişafı Proqramlarına Dəstək Verən Ən Fəal Bank -2003-cü il</p>
                            </div>
                        </div>
                        <div className="tabletwo">
                            <div>
                                <img src={price3} alt="" />
                                <p>Azərbaycanın Ən Yaxşı Bankı - 2005-ci il <br /> <br />Azərbaycanın Ən Yaxşı Bankı - 2007-ci il</p>
                            </div>
                            <div>
                                <img src={price4} alt="" className="large" />
                                <p>İlin Sazişi /2008 il (“Deutsche Bank”dan cəlb edilən sindikatlaşdırılmış kredit xətti)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="value_containers_about">

                    <div>
                        <img src={value1} alt="" />
                        <h3>Cəsarətlə yeniliklərə imza atmaq</h3>
                        <p>Bankımız uzun müddətdir ki, mövcud status-kvoya meydan oxuması və bankçılığın gələcəyini formalaşdırmaq üçün cəsarətli addımlar atması ilə tanınır. Beləliklə, bu ruh bizə fürsətlərdən istifadə edərək davamlı olaraq dəyər yaratmağa imkan verir.</p>
                    </div>
                    <div>
                        <img src={value2} alt="" />
                        <h3>Dayanıqlılığı təmin etmək</h3>
                        <p>Dayanıqlılığı qiymətləndirmək müştərilərimizin və cəmiyyətin inamını gücləndirir, hətta təlatümlü zamanlarda da öhdəliklərimizi yerinə yetirməyimizi təmin edir. Bir sözlə, anti-kövrəklik rəqabət üstünlüyümüzdür</p>
                    </div>
                    <div>
                        <img src={value3} alt="" />
                        <h3>Dürüst olmaq</h3>
                        <p>Biz ən yüksək etik standartlara sadiqik. Qərarlarımıza sahiblənirik və xüsusən də mühüm anlarda bütün maraqlı tərəflərin inamını qorumaq və düzgün davranmaq üçün özümüzü məsuliyyətə cavabdeh hesab edirik.</p>
                    </div>
                    <div>
                        <img src={value4} alt="" />
                        <h3>Komanda işini təşviq etmək</h3>
                        <p>Biz birlikdə işlədiyimiz zaman kollektiv imkanlarımızın genişləndiyini anlayırıq. Bir-birimizi dəstəkləmək və müxtəlif güclü tərəflərimizdən istifadə etmək ümumi uğura gətirib çıxarır. Gəlin, qəbul edək ki, ayrı-ayrılıqda deyil, birlikdə daha güclüyük </p>
                    </div>
                    <div>
                        <img src={value5} alt="" />
                        <h3>Davamlı təkmilləşmək</h3>
                        <p>Davamlı təkmilləşməyə bağlılığımız bizi məhsuldarlığı, xidməti və səmərəliliyi artırmaq üçün yeni yollar tapmağa sövq edir. Bunlar vasitəsilə gündəlik olunan kiçik dəyişikliklər zamanla böyüyür.</p>
                    </div>
                    <div>
                        <img src={value6} alt="" />
                        <h3>Müştəri üçün dəyər yaratmaq</h3>
                        <p>Biz müştərilərimizin ehtiyaclarını başa düşməyə, inam yaratmağa və onların rifahını yaxşılaşdırmaq üçün fərdi həllər təqdim etməyə çalışırıq. Bununla biz daha xoş və əziyyətsiz müştəri təcrübəsinə töhfə verir, brendimizə olan loyallığı gücləndiririk </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default About;