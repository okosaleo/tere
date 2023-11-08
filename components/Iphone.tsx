import ellipse from "../src/assets/Ellipse 1.png"
import Yoo from "./Yoo"
import circle from "../src/assets/circle.svg"
import car from "../src/assets/Group 3693.svg"
import { motion } from "framer-motion"

export default function Iphone() {
    return (
        <div>
            <div className="textt">
            <h1 className="iph1">HOW <label className="iplabel">TERE</label> WORKS</h1> 
            <p className="ipp">Download and install the tere app. Enter your phone <br /> number and make your user account. when approved you <br /> may start driving.</p>
            </div>
           <div className="container">
            <motion.div
            initial={{
                x : -40,
                opacity : 0}}
            whileInView={{ 
                x : 5,
                opacity : 1}}
                transition={{duration : 1.5}}
             className="item1" ><img src={circle} /> <label>1</label>
            <h2>REQUEST A RIDE</h2>
            <p>Have to reach office or going for shopping ? 
Just put your current location and destination and search a ride that suits you</p>
            </motion.div>
            <motion.div
             initial={{
                x : -40,
                opacity : 0}}
            whileInView={{ 
                x : 5,
                opacity : 1}}
                transition={{duration : 1.5}}
             className="item2">
                <img src={circle} /><label>3</label>
            <h2>INSTANT NOTIFICATIONS</h2>
            <p>Get instant notifications for your rides and be in contact with fellow riders all the time</p>
            </motion.div>
            <div className="item3"><img src={ellipse} className="ellipse" /> <motion.img 
            initial={{
                opacity : 0}}
                whileInView={{
                    opacity : 1,
                }}
            transition={{ duration : 0.5}}
            src={car} className="iphone" />
            </div>
            <motion.div 
             initial={{
                x : 40,
                opacity : 0}}
            whileInView={{ 
                x : 5,
                opacity : 1}}
                transition={{duration : 1.5}}
            className="item4"><img src={circle} /> <label>2</label>
            <h2>POST A RIDE</h2>
            <p>Going somewhere but hate to travel alone - 
just post your ride details and publish it</p>
            </motion.div>
            <motion.div
             initial={{
                x : 40,
                opacity : 0}}
            whileInView={{ 
                x : 5,
                opacity : 1}}
                transition={{duration : 1.5}}
             className="item5"><img src={circle} /><label>4</label>
            <h2>CASHLESS PAYMENT</h2>
            <p>Payment made easy by using your own Wallet - no more cash to carry</p>
            </motion.div>
           </div>
           <Yoo />
           </div>
    )
}