import React from 'react'
import './Footer.css'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/insta.png'
import youtube from '../assets/youtube.png'


const Footer=() =>{
    return (
         <div className="footerContainer">
            <div className="contactInfo">
            <div id="brandNameFooter">Urban Nest</div>
            <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Asperiores, tempora </p>
            <p id="contactInfoContent"><b>121 King Street, Melbourne 3000<br />
            +12 3 0000 0000<br />
            contact@urbannest.gmail.com
            </b>
            </p><br />
        <div className="footerImages">
            <img src={facebook} height="20rem" width="10rem" alt='' />
            <img src={twitter}  height="20rem" width="20rem"  alt='' />
            <img src={insta} height="20rem" width="20rem" alt='' />
            <img src={youtube} height="20rem" width="20rem" alt='' />
        </div>
            </div>
            <div className="shoppingInfo">
            <div id="headingFooter"><b>SHOPPING</b></div>
            <p id="footerContent">
                Your cart<br />
                Your orders<br />
                Compared items<br />
                Wishlist items<br />
                Shipping detail<br />
            </p>    
            </div>
            <div className="moreLinks">
            <div id="headingFooter"><b>MORE LINKS</b></div>
            <p id="footerContent">
                Blog<br />
                Gift Center<br />
                Buying Guides<br />
                New Arrivals<br />
                Clearance<br />
            </p>   
            </div>
            <div className="promoUpdate">
            <div id="headingFooter"><b>PROMO UPDATE</b></div>
            <p><span id="largeNumber">14 </span>May</p>
            <p id="contactInfoContent">Lorem ipsum dolor sit amet, consectetur <br />
            adipisicing elit</p>    
            <p>3 comments</p>
            <hr />
            <p><span id="largeNumber">15 </span>July</p>
            <p id="contactInfoContent">Lorem ipsum dolor sit amet, consectetur <br />
            adipisicing elit</p>    
            <p>3 comments</p>
            </div>
         </div>


    )}
    export default Footer