import { Switch ,Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import ShopPage from "./pages/shop-page/shop-page.component";
import WithLoader from "./components/with-loader/with-loader.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from './pages/checkout-page/checkout-page.component'
import ProfilePage from './pages/profile-page/profile-page.component'

import { fetchBrandsStartThunk } from "./redux/shop/shop.actions";
import { selectIsBrandsFetching } from './redux/shop/shop.selectors'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSessionThunk } from './redux/user/user.actions'


import './App.css';

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
// request.time < timestamp.date(2021, 6, 24);