import React from 'react'
import './Horizontalcontainer.css'



const Horizontalcontainer=(props) =>{
    return (
<>
    <div className='Horizontalcontainer'>
        <img src={props.image} alt="" />
        
     <div className="HorizontalcontainerText">
         <h2>{props.title}</h2>
         {/* <button className='view'>VIEW NOW</button> */}
         
         </div>
       
    </div>
    </>
  )
}
export default Horizontalcontainer
