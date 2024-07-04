import "./Tariffs.css"
import download_orange from "../../assets/download_orange.png"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
let Tariffs = ()=>{
return(
  <>
  <Header />
    <div className="main_tariffs_container">
        {/* <Header/> */}
        <h1 className="Tariffs_container_h1">Tariflər</h1>

      <div className="main_tariffs"> 
      <div>
        <p><span>Rəqəmsal Bankçılıqda ödəniş xidmətləri üzrə</span><br/>313 kB, 08.11.2023</p>
      </div>
      <div className="download">
        <p>Yüklə<img src={download_orange} alt=""/></p>
      </div>
    </div>

    <div className="main_tariffs"> 
      <div>
        <p><span>Hüquqi şəxslərə və fərdi sahibkarlara göstərilən xidmətlər üzrə</span><br/>777.9 kB, 16.01.2024</p>
      </div>
      <div className="download">
        <p>Yüklə<img src={download_orange} alt=""/></p>
      </div>
    </div>

    <div className="main_tariffs"> 
      <div>
        <p><span>Digər xidmətlər üzrə</span><br/>308.4 kB, 02.04.2024</p>
      </div>
      <div className="download">
        <p>Yüklə<img src={download_orange} alt=""/></p>
      </div>
    </div>

    <div className="main_tariffs"> 
      <div>
        <p><span>Ödəniş xidmətləri üzrə</span><br/>864.9 kB, 22.04.2024</p>
      </div>
      <div className="download">
        <p>Yüklə<img src={download_orange} alt=""/></p>
      </div>
    </div>
    {/* <Footer/> */}
    </div>
    <Footer />
        </>

)}

export default Tariffs;