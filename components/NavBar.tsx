import logo from "../src/assets/Group.png"

export default function NavBar() {
    return (
     <div>
        <nav>
            <div className="logo">
                <img src={logo} />
                <h2 className="logotxt">tere</h2>
            </div>
            <div className="options">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">How tere works</a></li>
                    <li><a href="#">Tere benefits</a></li>
                </ul>
                <button>Help Centre</button>
            </div>
        </nav>
     </div>
    )
}