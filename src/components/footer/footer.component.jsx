import { Link } from 'react-router-dom'

import './footer.styles.scss'

const Footer = () => (
    <footer className="footer">
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/appIMG%2Flogo.png?alt=media&token=72a73bbf-556b-4c87-a469-5a2672a72ab8" alt="" className="footer-logo" />
            <div className="footer-nav">
                <h1>Products</h1>
                <ul className="footer-nav__items">
                    <Link to='/shop/products/shirts' className="item">Shirts</Link>    
                    <Link to='/shop/products/jackets' className="item">Jackets</Link>    
                    <Link to='/shop/products/hats' className="item">Hats</Link>    
                    <Link to='/shop/products/shoes' className="item">Shoes</Link>    
                </ul>
            </div>
            <div className="footer-info">
                <h1>Information</h1>
                <ul className="footer-info__items">
                    <li className="item">About</li>
                    <li className="item">Contact</li>
                    <li className="item">Terms & Conditions</li>
                    <li className="item">Privacy Policy</li>
                </ul>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/appIMG%2FStripe.png?alt=media&token=89272c1a-0dde-498e-92f5-af88e4f9fafd" alt="" className="footer-payment" />
        </div>
        <div className="footer-copyright">&copy; 2021 Tropical. All rights reserved</div>
    </footer>
)


export default Footer