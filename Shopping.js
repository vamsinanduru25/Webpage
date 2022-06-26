import React from "react";
import imageA from './imageA.jpg';
import imageB from './imageB.jpg';
import imageC from './imageC.jpg';
import "./style.css";
function ShoppingDetails(){
    return<>
    <div className="box1">
        <img src={imageA} alt="logo" width={150} height={100} />
        <div className="name">
        <h3>Nord Stage 3 88 Keys</h3></div>
        <p className="Price">$5,738.00</p>
    </div>
    
    <div className="box1">
        <img src={imageB} alt="logo" width={150} height={100} />
        <div className="name">
        <h3>Line 6 Helix Rack Guitar Processor -1x opened box</h3>
        <p className="Price">$1831.57.00</p></div>
    </div>
    <div className="box1">
        <img src={imageC} alt="logo" width={150} height={100} />
        <div className="name">
        <h3>Nord Lead A1</h3>
        <p className="Price">$1700</p></div>
    </div>
    </>
}
export default ShoppingDetails;