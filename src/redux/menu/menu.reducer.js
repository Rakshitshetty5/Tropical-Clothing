
const INITIAL_STATE = {
    items: [
        {
            id:1,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/images%2Fgreenshirt.webp?alt=media&token=a0789f90-2519-4190-9723-b3524eb534f4",
            title:"Shirts"
        },
        {
            id:2,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/images%2F9d1792c9-fc64-41e9-b162-08e4890374321603949595960-Puma-Men-Jackets-781603949594342-1.webp?alt=media&token=27a042a0-07e4-4990-9f75-e91bb03a22cc", 
            title:"Jackets"
        },
        {
            id:3,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/images%2F01fb55fd-96fb-4e60-ac32-6fbec42438341616767555443-1.jpg?alt=media&token=891b8b1d-cbc4-48a4-b80c-5e61c2ba5026",
            title:"Hats"
        },
        {
            id:4,
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/images%2F72e39b61-333b-4b1f-a2fb-4aeae4edad821617268457233-HRX-by-Hrithik-Roshan-Men-Black-Fly-Sneaker-5231617268456433-1.webp?alt=media&token=67b6c752-3b67-4d0f-808c-1e5f167b7aed",
            title:"Shoes"
        }
    ]
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default menuReducer