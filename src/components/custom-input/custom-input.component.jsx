import './custom-input.styles.scss'

const CustomInput = ({ handleChange, ...otherProps }) => (
    <input className="custom-input" onChange={handleChange} 
    {...otherProps}/>
)

export default CustomInput