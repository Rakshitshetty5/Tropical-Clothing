import './custom-button.styles.scss'

const CustomButton = ({children,cardbutton,bannerbutton,googlebutton, ...otherProps}) => (
    <button className={`${cardbutton ? 'card-button':''} ${bannerbutton ? 'banner-button' : ''} ${googlebutton ? 'google-button' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)


export default CustomButton