export const sortItems = (items, sort) => {
    let newItemsArr = []
    if(sort === 'high'){    
        newItemsArr = items.sort((a, b) => b.prodPrice - a.prodPrice)
        return newItemsArr
    }else if(sort === 'low'){
        newItemsArr = items.sort((a, b) => a.prodPrice - b.prodPrice)
        return newItemsArr
    }else{
        return items
    }
}


export const filterBySex = (items, filterConditions) => {
    if(!filterConditions){

        return items
    }else{
        const newItemsArr = items.filter(item => filterConditions.includes(item.prodGender.toLowerCase()));
        return newItemsArr;
    }
}