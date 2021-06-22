import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'
const MenuItem = ({imgUrl, title, history}) => (
    <div className="menu-item"  onClick={() => history.push(`shop/products/${title.toLowerCase()}`)}>
        <img src={imgUrl} alt="Item" className="menu-item__image" />
        <div className="menu-item__title">
            {title}
        </div>  
    </div>
)

export default withRouter(MenuItem)