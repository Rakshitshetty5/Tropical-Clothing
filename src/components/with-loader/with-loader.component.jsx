import Loader from '../loader/loader.component'

const WithLoader = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading === true ? (
        <Loader/>
        ) : 
        <WrappedComponent {...otherProps} />

}

export default WithLoader