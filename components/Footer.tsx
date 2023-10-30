import logo from "../src/assets/footer logo.svg"
import playstore from "../src/assets/playsor.svg"
import appstore from "../src/assets/appstore.svg"

export default function Footer() {
    return (
        <div>
            <div className="foot-container">
                <div className="fotlogo">
                    <img src={logo} />
                </div>
                <div className="friend">
                    <h4>Be Our Friend</h4>
                    <p>3, Season Park, Jakarta <br /> support@Okosaleo.co,id <br />021 - 1111 - 2222</p>
                </div>
                <div className="friend2">
                <h4>Be Our Friend</h4>
                <p>3, Season Park, Jakarta <br /> support@Okosaleo.co,id <br />021 - 1111 - 2222</p>
                </div>
                <div className="buttons">
                <button className="playstore"><img src={playstore}  />DOWNLOAD</button>
             <button className="appstore"><img src={appstore} />DOWNLOAD</button>
                </div>
            </div>
        </div>
    )
}