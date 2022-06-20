export const getBasketTotal = (basket) => basket?.reduce((amount,item)=>item.price +amount,0);

export const initialState = {
    basket: [{
        id:12312,
        title:"GSM Fitness Hex Dumbbell, 7.5 kgs, Pack of 2, Rubber Coatedo",
        price:4051.00,
        rating:3,
        image:"https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"
    }],
    user:null,
};
//action can be for ex: add or remove etc
const reducer= (state,action) => {
    //console.log(action); //very important to understant what is happening
    switch(action.type){
        case 'ADD_TO_BASKET':
            //
            return {
                ...state,
                basket:[...state.basket, action.item], //we are adding the new item to the previous state or database
                //action.item will access the item with its info we can check it with consol.log 
            };
            

        case 'REMOVE_FROM_BASKET':
            //we cloned the basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            //item exists in basket, remove it
            if (index >=0){
                newBasket.splice(index,1);
                
            }
            return {...state,
                 basket:newBasket};

        default:
            return state;
    }
}
export default reducer;