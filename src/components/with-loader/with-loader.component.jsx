import './with-loader.styles.scss'

const WithLoader = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading === true ? (
        <div className="loader-container">
            <div className="loader-icon">
                <h1>TC</h1>
            </div>
        </div>
        ) : 
        <WrappedComponent {...otherProps} />

}

export default WithLoader