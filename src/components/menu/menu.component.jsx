import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectMenuItems } from '../../redux/menu/menu.selector'

import MenuItem from '../menu-item/menu-item.component'

import './menu.styles.scss'

const Menu = ({menuItems}) => (
    <div className="menu">
        {
            menuItems.map(({id, ...otherProps}) => 
                    <MenuItem key={id} {...otherProps} /> 
            )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    menuItems: selectMenuItems
})

export default connect(mapStateToProps)(Menu)