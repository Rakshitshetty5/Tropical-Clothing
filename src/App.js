import { Switch ,Route, Redirect } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from './components/header/header.component'
import Footer from './components/footer/footer.component';
import WithLoader from "./components/with-loader/with-loader.component";
import Loader from "./components/loader/loader.component";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import { fetchBrandsStartThunk } from "./redux/shop/shop.actions";
import { selectIsBrandsFetching } from './redux/shop/shop.selectors'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSessionThunk } from './redux/user/user.actions'

import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import("./pages/shop-page/shop-page.component"))
const SignInSignUpPage = lazy(() => import("./pages/sign-in-sign-up/sign-in-sign-up.component"))
const CheckoutPage = lazy(() => import('./pages/checkout-page/checkout-page.component'))
const ProfilePage = lazy(() => import('./pages/profile-page/profile-page.component'))

const HomePageWithLoader = WithLoader(HomePage)

const App = ({ fetchBrandsStartThunk, checkUserSessionThunk, isFetching, currentUser }) => {

  useEffect(() => {
    fetchBrandsStartThunk()
    checkUserSessionThunk()
  },[fetchBrandsStartThunk,checkUserSessionThunk])


  return (
    <div className="App">
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route exact path='/'
                        render={props => (<HomePageWithLoader isLoading={isFetching} {...props}/>)}/>   
            <Route path='/shop' component={ShopPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/settings' component={ProfilePage} />
            <Route exact path='/signin' 
                render = {() => 
                  currentUser ? 
                    (<Redirect to='/'/>) : (<SignInSignUpPage/>)} 
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  isFetching : selectIsBrandsFetching,
  currentUser : selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  fetchBrandsStartThunk : () => dispatch(fetchBrandsStartThunk()),
  checkUserSessionThunk : () => dispatch(checkUserSessionThunk())

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
