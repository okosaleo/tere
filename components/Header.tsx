import Map from "./Map"
import Location from "./Location"
import Locl from "./Locl"
import car from "../src/assets/car.svg"
import playstore from "../src/assets/playsor.svg"
import appstore from "../src/assets/appstore.svg"

export default function Header() {
    return (
        <div>
        <div className="hero">
        <div className="herotxt">
            <h1>DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!</h1>
            <p>Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for ?  
             Lets ride together</p>
             <button className="playstore"><img src={playstore}  />DOWNLOAD</button>
             <button className="appstore"><img src={appstore} />DOWNLOAD</button>

        </div>
        <div className="heroimg">
       <Map />
       <Locl />
       <Location />
       <img src={car} className="car" />
        </div>
        </div>
        </div>
    )
}