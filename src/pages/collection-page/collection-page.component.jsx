import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Card from '../../components/card/card.component'
import FilterIcon from '../../components/filter-icon/filter-icon.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import { selectCollection } from '../../redux/shop/shop.selectors'
import { getWishlistedIdsThunk } from '../../redux/wishlist/wishlist.actions'
import { selectUserId } from '../../redux/user/user.selector'

import { sortItems, filterBySex } from './collection-page.utils'

import './collection-page.styles.scss'

const CollectionPage = ({collection, getWishlistedIdsThunk, user_id}) => {
    const [ sort, setSort ] = useState('')
    const [ filterToggler, setFilterToggler ] = useState(false)
    const [ sexFilter, setSexFilter ] = useState(null)
    const sex = []
    
    useEffect(() => {
        getWishlistedIdsThunk(user_id)
    },[getWishlistedIdsThunk,user_id])

    const handleChange = (e) => {
        const val = e.target.name.toLowerCase()
        if(sex.includes(val)){
            const index = sex.indexOf(val)
            sex.splice(index,1)
        }else{
            sex.push(val)
        }

    }
    if(collection){
        const { category, items } = collection
        return(
            <div className="collection">
                <div className="collection-head">
                    <h1 className="collection-head__title">{category.toUpperCase()} COLLECTION </h1>
                    <select className="collection-head__sort" onChange={e => setSort(e.target.value)}>
                        <option defaultValue="">Sort By:</option>
                        <option value="high">Price : High To Low</option>
                        <option value="low">Price : Low To High</option>
                    </select>
                </div>
                <div className="collection-container">
                    {
                        filterBySex(sortItems(items,sort),sexFilter).map(
                            item => <Card item={item} key={item.id}/>
                        )
                    }
                </div>
                {
                    filterToggler ?
                        <form className="filter-form" onSubmit={e => e.preventDefault()}>
                            <h1>Select Sex</h1>
                            <div className="filter-form__checkbox">
                                <input type="checkbox" name="men" onChange={handleChange}/>Male
                            </div>
                            <div className="filter-form__checkbox">
                                <input type="checkbox" name="women" onChange={handleChange} />Female
                            </div>
                            <div className="filter-form__checkbox">
                                <input type="checkbox" name="unisex" onChange={handleChange}/>Unisex
                            </div>
                            <CustomButton 
                                style={{ height: '2rem', width: '100%' }} 
                                onClick={() => {
                                    setFilterToggler(!filterToggler)
                                    setSexFilter(sex)
                                }}
                                type="button"
                                >
                                    Apply
                            </CustomButton>
                        </form>
                        :
                        null
                }
                <FilterIcon onClick={() => setFilterToggler(!filterToggler)}/>
            </div>

        )
        }else{
            return null
        }
}

const mapStateToProps = (state, props) => ({
    collection : selectCollection(props.match.params.collectionId)(state),
    user_id: selectUserId(state)
})

const mapDispatchToProps = dispatch => ({
    getWishlistedIdsThunk: (user_id) => dispatch(getWishlistedIdsThunk(user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage)