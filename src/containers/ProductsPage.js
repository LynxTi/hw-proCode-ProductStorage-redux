import { useDispatch, useSelector } from 'react-redux';

const products = [{name:'Vafelki', price: 10, id: '1'}, {name:'Bubliki', price: 5, id: '2'},{name:'Pizza', price: 15, id: '3'}]

function ProductsPage () {
    const dispatch = useDispatch();
    const userProducts = useSelector( state => state.userProducts.items);
    
    // Ломанулся отдельно экшОны писать
    const clickBtnProduct = (el) => {
        dispatch({type: 'add_product', payload: {name: el.name, price: el.price, id: el.id}})
    }

    return (
        
        <div className="productsBlock">

            <h1>Products</h1>
            {products.map( el=> 
            <div key={el.id} >
                <div>{el.name}</div>
                <div>{el.price}</div>
                <button onClick={()=>clickBtnProduct(el)}>Buy</button>
            </div>)}
            <button onClick={()=> console.log(userProducts)}>State</button>
        </div>
    )
}

export default ProductsPage;