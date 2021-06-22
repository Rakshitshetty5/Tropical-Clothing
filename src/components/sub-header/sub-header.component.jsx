import sprite from '../../assets/sprite.svg'

import './sub-header.styles.scss'

const SubHeader = () => (
    <div className="sub-header">
       <ul className="nav">
           <li className="nav-item">
               <img src='https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/appIMG%2Ficon-shirt.png?alt=media&token=a330e991-ff6f-491b-883e-3cc4aec8a45c' alt="s" />
               <span>Shirts</span>
           </li>
           <li className="nav-item">
               <img src="https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/appIMG%2Ficon-jacket.png?alt=media&token=c2c6c326-658e-4005-8128-6c8dd143eff4" alt="j" />
               <span>Jackets</span>
           </li>
           <li className="nav-item">
               <img src="https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/appIMG%2Ficon-hat.png?alt=media&token=e7b00cfd-a65a-432f-8c84-df98566ef2b5" alt="h" />
               <span>Hats</span>
           </li>
           <li className="nav-item">
               <img src="https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/appIMG%2Ficon-shoe.png?alt=media&token=3b185fe8-7607-455a-91dc-f064d804455c" alt="s" />
               <span>Shoes</span>
           </li>
       </ul>
    </div>
)

export default SubHeader