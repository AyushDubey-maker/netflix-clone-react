import React from 'react'
import footer_img from '../images/footer_img.png'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <img src={footer_img}/>
            <div className="footer_text">
        <p>@ 2021 Netflix Clone! Rights reserved--Ayush Dubey</p>
            <p>Privacy • Terms • Enjoy • Company Details</p>
        </div>
        </div>
    )
}

export default Footer
