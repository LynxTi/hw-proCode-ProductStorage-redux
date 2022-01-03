import update from 'immutability-helper';

const initialState = {
    items: []
  }

const reducer = (state = initialState, action) => {
    const product = state.items.find(item => item.id === action.payload.id);
    const indxProduct = state.items.indexOf(product);

    switch (action.type) {
        case 'add_product': 

          if (indxProduct !== -1) {
            return update(state, {items: {[indxProduct]: {value: {$set: product.value + 1}}}})
          }

          const newProduct = {...action.payload, value: 1}
          return update(state, {items: {$push: [newProduct]}});    
        
        case 'remove_product': 

          if (product.value !== 0) {
            return update(state, {items: {[indxProduct]: {value: {$set: product.value - 1}}}})
          }
          return update(state, {items: {$splice: [[indxProduct, 1]] }})
            
        default:
          return state;
    }
}

export default reducer;