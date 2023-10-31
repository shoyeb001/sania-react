import "../style/Nav.css"

function Nav() {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src="/logo192.png" />
                </div>
                <div className="bars">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                </div>
            </div>
        </>
    )
}

export default Nav;