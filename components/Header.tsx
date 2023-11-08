import Map from "./Map"
import Location from "./Location"
import Locl from "./Locl"
import car from "../src/assets/car.svg"
import playstore from "../src/assets/playsor.svg"
import appstore from "../src/assets/appstore.svg"
import { motion } from "framer-motion"

export default function Header() {
    return (
        <div>
        <div className="hero">
        <div className="herotxt">
            <h1>DOWNLOAD APP,<br /> SAVE MONEY,<br></br> MAKE FRIENDS!</h1>
            <p>Its simple and its free. Play your part in reducing<br /> Carbon Footprint and help Mother Nature to <br /> sustain its beauty. So what are you waiting for ? <br /> 
             Lets ride together</p>
             <button className="playstore"><img src={playstore}  />DOWNLOAD</button>
             <button className="appstore"><img src={appstore} />DOWNLOAD</button>

        </div>
        <div className="heroimg">
       <Map />
       <Locl />
       <Location />
       <motion.img
       initial={{
        opacity : 0,
        x : -80 }}
       whileInView={{ 
        opacity : 1,
        x : 1 }}
       transition={{duration : 0.7}}
        src={car} className="car" />
        </div>
        </div>
        <div className="headerv">
            <p>Let’s go. Get a link <br />
                to download the app.</p>
                    <input type="text" placeholder="Enter mobile phone number" />
                    <button>APPLY T0 DRIVE</button>
        </div>
        </div>
    )
}