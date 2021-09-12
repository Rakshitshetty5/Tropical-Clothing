import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'

import './banner.styles.scss'

const Banner = ({ imgUrl, history }) => (
    <div className="banner" 
        style={{backgroundImage : `url(${imgUrl})`}}
    >
        <div className="banner-box">
            <div className="banner-box__message">
                <div>"People Will Stare.</div>
                <div>Make it worth their</div>
                <div>while."</div>
            </div>
            <CustomButton bannerbutton  onClick={() => {
            history.push('/shop')}}>Shop Now</CustomButton>
        </div>
    </div>
)

export default withRouter(Banner)