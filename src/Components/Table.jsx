import React, { useReducer } from 'react';
import Products from './Products';
import Basket from './Basket';


function Table() {
    const products = [
        {
            id: 1,
            name: "Էկրան",
            price: 100000,
            count: 1,
            isSelected: false
        },
        {
            id: 2,
            name: "Համակարգային Բլոկ",
            price: 230000,
            count: 1,
            isSelected: false
        },
        {
            id: 3,
            name: "Ստեղնաշար",
            price: 80000,
            count: 1,
            isSelected: false
        },
        {
            id: 4,
            name: "Խաղային Joystick",
            price: 40000,
            count: 1,
            isSelected: false
        },
        {
            id: 5,
            name: "Մկնիկ",
            price: 15000,
            count: 1,
            isSelected: false
        },
        {
            id: 6,
            name: "Մկան խալի",
            price: 6000,
            count: 1,
            isSelected: false
        },
        {
            id: 7,
            name: "Տառականի տապչկեք",
            price: 12000,
            count: 1,
            isSelected: false
        }
    ];

    const [product, dispatch] = useReducer((current, action) => {
        switch (action.type) {
            case 'add':
                if (current.some((prod) => prod.id === action.product.id)) {
                    return current.map((prod) =>
                        prod.id === action.product.id ? { ...prod, count: prod.count + 1 } : prod
                    );
                } else {
                    return [...current, { ...action.product, isSelected: true }];
                }
            case "increase":
                return current.map((apranq) =>
                    apranq.id === action.product.id ? { ...apranq, count: apranq.count + 1 } : apranq
                );
            case 'decrease':
                if (action.product.count === 1) {
                    return current.filter((apranq) => apranq.id !== action.product.id);
                } else {
                    return current.map((apranq) =>
                        apranq.id === action.product.id ? { ...apranq, count: apranq.count - 1 } : apranq
                    );
                }
            default:
                return current;
        }
    }, []);
    console.log(product);

    function handleClick(prod) {
        dispatch({ type: 'add', product: prod });
    }


    return (
        <div className='flex gap-[200px]'>
            <div className='flex'>
                <div>
                    <table className='border border-collapse w-[500px] h-[330px]'>
                        <thead>
                            <tr>
                                <th>Համար</th>
                                <th>Անուն</th>
                                <th>Գինը</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((prod) => (
                                <Products key={prod.id} name={prod.name} id={prod.id} price={prod.price} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='mt-5'>
                    {products.map((but) => (
                        <div key={but.id}>
                            <button onClick={() => handleClick(but)}>Add</button>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Basket product={product} dispatch={dispatch} />
            </div>
        </div>
    );
}

export default Table;
