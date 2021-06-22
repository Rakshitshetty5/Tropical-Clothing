import BrandShowcase from '../brand-showcase/brand-showcase.component'
import Banner from '../banner/banner.component'

import './home-content.styles.scss'

const HomeContent = () => {
    return(
        <div className="home-content">
            <Banner imgUrl={"https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/appIMG%2Fpexels-min-an-1183457.jpg?alt=media&token=f23f28b9-870a-4e85-afa4-493467ce4c6c"} />
            <BrandShowcase />
        </div>
    )
}

export default HomeContent