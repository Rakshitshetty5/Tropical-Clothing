export const addItemToCart = (cart, itemToAdd) => {
    //check whether item exists in cart
    const existingItem = cart.find(item => item.id === itemToAdd.id && item.prodSize === itemToAdd.prodSize)
    
    //if exists update quantity
    if(existingItem){
        return cart.map(item => 
                item.id === itemToAdd.id && item.prodSize === itemToAdd.prodSize  ?
                    {...item, quantity: item.quantity + 1}
                :
                    item
            )
    }

    // if not exists add item and new field quantity : 1

    return [...cart, {...itemToAdd, quantity: 1}]
}

export const clearItem = (cart, itemToDelete) => {
    return cart.filter(item => 
        {
            return item.id === itemToDelete.id && item.prodSize === itemToDelete.prodSize ?
                null
                :
                item
        }    
    )
}

export const removeItem = ( cart, itemToDelete ) => {
    const existingItem = cart.find(item => item.id === itemToDelete.id && item.prodSize === itemToDelete.prodSize)

    if(existingItem.quantity === 1){
        return clearItem(cart, itemToDelete)
    }
    return cart.map(
            item => 
                item.id === itemToDelete.id && item.prodSize === itemToDelete.prodSize ? 
                    {...item, quantity : item.quantity - 1}
                    :
                    item
            
        )
    
}