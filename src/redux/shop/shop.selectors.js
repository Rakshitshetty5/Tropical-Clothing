import { createSelector } from "reselect";

const selectShop = state => state.shop


export const selectIsBrandsFetching = createSelector(
    [selectShop],
    shop => shop.isBrandsFetching
)

export const selectBrands = createSelector(
    [selectShop],
    shop => shop.brands ? shop.brands.topBrands : []
)

export const selectBrandNames = createSelector(
    [selectBrands],
    brands => {
        return brands.map(brand => brand.name)
    }
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isCollectionsFetching
)

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections ? shop.collections : null
)

// const brandArray = ['roadster','puma','hrx','h&m','mast&harbour']

// export const selectCollection = urlParam => createSelector(
//     selectBrandNames,
//     selectCollections,
//     (brandArray, collections) => {
//         if(collections && brandArray){
//             const brandExists = brandArray.find(b => urlParam === b.replace(/\s/gi,"").toLowerCase())
//             console.log(brandExists)
//             if(!brandExists){
//                 return collections[urlParam]
//             }else{
//                 const brandCollection = {
//                     category : urlParam,
//                     items: []
//                 }
//                 for(let collection in collections){
//                     const reducedArr = collections[collection].items.reduce((acc,item) => {
//                         if(item.prodName.replace(/\s/g,"").toLowerCase() === urlParam.toLowerCase()){
//                             acc.push(item)
//                         }
//                         return acc
//                     }, [])

//                     brandCollection.items = [...brandCollection.items, ...reducedArr]
//                 }
//                 return brandCollection
               
                
//             }
//         }else{
//             return null
//         }
        
//     }
// )

export const selectCollection = urlParam => createSelector(
    selectBrandNames,
    selectCollections,
    (brandArray, collections) => {
        if(collections && brandArray){
            const brandExists = brandArray.find(b => urlParam === b.replace(/\s/gi,"").toLowerCase())
            if(!brandExists){
                const arr = []
                for(let collection in collections){
                    arr.push(collection)
                }
               
                const matched = arr.filter(str => str
                      .toLowerCase()
                      .startsWith(urlParam.slice(0, Math.max(str.length - 1, 1)))
                );

                return collections[matched]
            }else{
                const brandCollection = {
                    category : urlParam,
                    items: []
                }
                const matched = brandArray.filter(str => str
                    .toLowerCase()
                    .startsWith(urlParam.slice(0, Math.max(str.length - 1, 1)))
                );

                for(let collection in collections){
                    const reducedArr = collections[collection].items.reduce((acc,item) => {
                        if(item.prodName.replace(/\s/g,"").toLowerCase() === matched[0].toLowerCase()){
                            acc.push(item)
                        }
                        return acc
                    }, [])

                    brandCollection.items = [...brandCollection.items, ...reducedArr]
                }
                return brandCollection
               
                
            }
        }else{
            return null
        }
        
    }
)