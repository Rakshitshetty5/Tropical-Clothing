import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectBrands } from '../../redux/shop/shop.selectors'

import './brand-showcase.styles.scss'

const BrandShowcase = ({history, brands}) => (
    <div className="brand-showcase">
        <img src="https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/appIMG%2Fbrand-title.gif?alt=media&token=b1ab70fb-a2b3-4438-8df1-ad086cef0f97" alt="head" className="brand-showcase__title" />
        <div className="brand-showcase__images">
            {
                brands.map(({src, name}) =>
                    <img src={src} alt={name} onClick={() => history.push(`shop/products/${name.replace(/\s/g,"").toLowerCase()}`)} key={name}/>

                )
            }
           
        </div>
       
    </div>
)

const mapStateToProps = createStructuredSelector({
    brands : selectBrands

})

export default withRouter(connect(mapStateToProps)(BrandShowcase))


