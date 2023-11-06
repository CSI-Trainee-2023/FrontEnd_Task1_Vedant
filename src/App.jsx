import './App.css'
import Navbar from './MyComponents/Navbar'
import SearchBar from './MyComponents/SearchBar'
import Horizontalcontainer from './MyComponents/Horizontalcontainer'
import TopRatingBox from './MyComponents/TopRatingBox'
import freeShipping from '../assets/freeShipping.png'
import refund from '../assets/refund.png'
import support from '../assets/support.png'
import Chair from '../assets/Chair.png'
import Footer from './MyComponents/Footer'
import VerticalCard from './MyComponents/VerticalCard'

const verticalImages = [
  {
      id: "towel.png",
      desc: "Linen Beach Towel",
      price: "30$",
      
  },
  {
      id: "plates.png",
      desc: "4-pack Small Ceramic Plates",
      price: "30$",

  },
  {
      id: "glassBox.png",
      desc: "Square Clear Glass",
      price: "30$",
      
  },
  {
      id: "basket.png",
      desc: "Metal Wire Basket",
      price: "30$",
      
  },
  {
      id: "largeBox.png",
      desc: "Large Clear Glass Box",
      price: "30$",
     
  },
  {
      id: "mat.png",
      desc: "Round Jute Placemat",
      price: "30$",
      
  },
  {
      id: "basket.png",
      desc: "Metal Wire Basket",
      price: "30$",
      
  },
  {
      id: "basket.png",
      desc: "Metal Wire Basket",
      price: "30$",
      
  },

]

const topRating = [
  {
      id: "Tray.png",
      desc: "Tray with Foot",
      price: "30$"
  },
  {
      id: "cushion.png",
      desc: "Twill Seat Cushion",
      price: "30$"
  },
  {
      id: "beverageGlass.png",
      desc: "Fluted Beverage Glass",
      price: "30$"
  },
  {
      id: "eggCup.png",
      desc: "Ceramic Egg Cup",
      price: "30$"
  },
  {
      id: "bambooBox.png",
      desc: "Small Bamboo Box",
      price: "30$",
  },
  {
      id: "cutleryBasket.png",
      desc: "Metal Cutlery Basket",
      price: "30$"
  },
  {
      id: "ceramicCups.png",
      desc: "4-pack Ceramic Cups",
      price: "30$"
  },
  {
      id: "Napkins.png",
      desc: "2-pack Linen Napkins",
      price: "30$"
  },
  {
      id: "stonewarePlate.png",
      desc: "Glazed Stoneware Plate",
      price: "30$"
  }
]

function App() {
  return (
    <>
      <Navbar/>
      <SearchBar />

    {/*Container below search bar*/}
    <div className="ContainerBelowSearchBar">
          <div className="TextBesideIcon">
              <img src={freeShipping} alt="" height="20rem" width="25rem" />
                    <h3>Free Shipping</h3>
          </div>
          <div className="TextBesideIcon">
                    <img src={refund} alt=""  height="18rem" width="15rem"/>
                    <h3>100% Refund</h3>
          </div>
          <div className="TextBesideIcon">
                    <img src={support} alt=""  height="20rem" width="20rem"/>
                    <h3>Support 24/7</h3>
           </div>
           </div><br />
      {/*Banner for sale*/}
      <div className="BannerForSale">
          <img src={Chair} alt="" height="270rem" width="370rem" />
        <div className="SaleText">
          <h4>HOT DEALS THIS WEAK</h4>
          <b><div id='SaleTextBig'>SALE 50% OFF <br/>MODERN FURNITURE</div></b><br /><br />
          <button className='view'>VIEW NOW</button>
        </div>
       </div><br />
        <div className="horizontalContainerInApp">
                <Horizontalcontainer image="../assets/vintageChair.png" title="INY VINTAGE CHAIR" /> 
                <Horizontalcontainer image="../assets/terracotaVase.png" title="LARGE TERRACOTA VASE" />
            </div>
<br />
<div className="verticalCardHolder">
                {verticalImages.map((element,id) => (
                    <VerticalCard image={`../assets/${element.id}`} title1={element.desc} title2={element.price} details={element.details} list={verticalImages} key={id}/>
                ))}
            </div>
<br />
<div className="bedSheetSet">
                <img src="../assets/bedSheet.png" alt="" />
                <div className="overImageContent">
                    <h2>BEDSHEET SETS</h2>
                    <h3>$50.0 <span>$220.0</span></h3>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iste est exercitationem</h4>
                </div>
            </div>

        <div className="topRating">
          <h2>TOP RATING</h2>
              <div className="topRatingHolder">
      {topRating.map((element) => (
             <TopRatingBox image={`../assets/${element.id}`} title1={element.desc} title2={element.price} />
              ))}
            </div>
        </div>
        <br />  <br />  <br />  <br />  <br />  <br />  <br />

            <div className="SignUpForNewsletter">
                <div className="SignUpForNewsletterContent">
                    <h2>SIGN UP FOR OUR NEWSLETTER</h2>
                    <h3>Subscribe for the latest deals and promotions</h3>
                </div>
                <div className="emailContainer">
                    <input type="email" id="emailInput" />
                    <a href="#"><img src="../assets/email.png" alt="" /></a>
                </div>
            </div>
            <br />  <br />
      <Footer />
    </>
  )
}

export default App
