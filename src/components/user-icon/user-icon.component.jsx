import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleUserOptionsHidden  } from '../../redux/toggler/toggler.actions'
import { selectPhotoUrl } from '../../redux/user/user.selector'

import './user-icon.styles.scss'

const UserIcon = ({ toggleUserOptionsHidden, photoUrl }) => (
    <div className="user-icon" onClick={toggleUserOptionsHidden}>
        <img src={photoUrl ? photoUrl : 'https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/appIMG%2Fprofile.jpg?alt=media&token=d6c25c43-bb4c-4f43-a6fe-0a3e498658b4'} alt="" />
    </div>
)

const mapStateToProps = createStructuredSelector({
    photoUrl: selectPhotoUrl
})

const mapDispatchToProps = dispatch => ({
    toggleUserOptionsHidden: () => dispatch(toggleUserOptionsHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon)