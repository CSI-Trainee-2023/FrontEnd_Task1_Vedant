import React from 'react'
import './topRating.css'
const TopRatingBox =(props) =>{
  return (
    <>
    <div className='topRatingBox'>
      <img src={props.image} alt="image" />
      <div className="priceTopRating">
        <h3>{props.title1}</h3>
        <img src="../src/assets/rating.png" alt="" />
        <h2>{props.title2}</h2>
      </div>
    </div>
    </>
  )
}
export default TopRatingBox