import customer from "../src/assets/customer.svg"
import cash from "../src/assets/cash.svg"
import realcus from "../src/assets/real cus.svg"

export default function Benefits() {
    return (
        <div>
            <div className="headdiv">
            <h1 className="headerb"><label className="blab">TERE</label> BENEFITS</h1> </div>
            <div className="flexhours">
                <label>01.</label>
                <h4>Flexible <br /> working hours</h4>
                <p>You can decide when, and how much <br />
                   time you want to drive.</p>
                <img src={customer} />
            </div>
            <div className="earnings">
            <label>02.</label>
                <h4>Earnings</h4>
                <p>By driving with tere you can 
                   earn more.</p>
                <img src={cash} />
            </div>
            <div className="cussupport">
            <label>03.</label>
                <h4>Customer <br /> support 24/7</h4>
                <p>Tere is a local service provider and we are proud to <br /> support you in your local language. We are proud <br /> to be at your service 24/7!</p>
                <img src={realcus}  />
            </div>
        </div>
    )
}