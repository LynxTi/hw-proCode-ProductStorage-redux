import { useDispatch, useSelector } from 'react-redux';

function StoragePage () {
    const userProducts = useSelector(state =>state.userProducts.items);
    const dispatch = useDispatch();
    console.log('userProducts', userProducts);
    // Ломанулся отдельно экшОны писать
    const clickBtnAddProduct = (el) => {
        dispatch({type: 'add_product', payload: {name: el.name, price: el.price, id: el.id}})
    }
    const clickBtnRemoveProduct = (el) => {
        dispatch({type: 'remove_product', payload: {name: el.name, price: el.price, id: el.id}})
    }

    return (
        <div>
            <h1>Storage</h1>
            <div>
                {userProducts.map(el => 
                    <div key={el.id}>
                        <div>{el.name}</div>
                        <div>Цена за еденицу товара {el.price}</div>
                        <div>Количество {el.value}</div>
                        <div>Цена всего {el.value * el.price}</div>
                        <button onClick={()=>clickBtnAddProduct(el)}>Добавить</button>
                        <button onClick={()=>clickBtnRemoveProduct(el)}>Убрать</button>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default StoragePage; 