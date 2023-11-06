function Footer() {
    return (
        <footer className="grid-container">
            <div className="grid-item">
                <a><img src="assets/images/logo.png" width="200"/></a>
            </div>
            <div className="grid-item">
                <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
                    </ul>
            </div>
            <div className="grid-item">
                <h3>Contact</h3>
                    <ul>
                        <li><a>Address</a></li>
                        <li><a>Phone Number</a></li>
                        <li><a>Email</a></li>
                    </ul>
            </div>
            <div className="grid-item">
                <h3>Social Media Links</h3>
                    <ul>
                        <li><a>Address</a></li>
                        <li><a>Phone Number</a></li>
                        <li><a>Email</a></li>
                    </ul>
            </div>
        </footer>
    );
  }

export default Footer;