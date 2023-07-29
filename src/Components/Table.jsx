import React, { useState } from 'react'
import Product from './Product'

function Table() {

    const [product, setProduct] = useState([])

    const products = [
        {
            id: 1,
            name: "Էկրան",
            price: 100000,
            isSelected: false
        },
        {
            id: 2,
            name: "Համակարգային Բլոկ",
            price: 230000,
            isSelected: false
        },
        {
            id: 3,
            name: "Ստեղնաշար",
            price: 80000,
            isSelected: false
        },
        {
            id: 4,
            name: "Խաղային Joystick",
            price: 40000,
            isSelected: false
        },
        {
            id: 5,
            name: "Մկնիկ",
            price: 15000,
            isSelected: false
        },
        {
            id: 6,
            name: "Մկան խալի",
            price: 6000,
            isSelected: false
        },
        {
            id: 7,
            name: "Տառականի տապչկեք",
            price: 12000,
            isSelected: false
        }
    ]

    function isThereProduct(selectedProduct) {
        console.log(selectedProduct, product);
        console.log(product.includes(selectedProduct));
        return product.includes(selectedProduct)
    }

    function handleClick(prod) {
        if (isThereProduct(prod)) {
            setProduct([...product, { id: prod.id, name: prod.name, price: prod.price, isSelected: true }])
        } else {
            setProduct([...product, prod])
        }
    }


    // const priceResult = 0
    const priceResult = product.reduce((aggr, el) => {
        return aggr += el.price

    }, 0)

    return (
        <div className='flex gap-[200px]'>
            <div className='flex'>

                <div >

                    <table className='border border-collapse w-[500px] h-[330px]'>
                        <thead>
                            <tr>
                                <th>Համար</th>
                                <th>Անուն</th>
                                <th>Գինը</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((prod) => {
                                    return (
                                        <Product key={prod.id} name={prod.name} id={prod.id} price={prod.price} />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='mt-5'>

                    {
                        products.map((but) => {
                            return (
                                <div key={but.id} >
                                    <button onClick={() => handleClick(but)}>Add</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <p>Զամբյուղ</p>
                {
                    product.map((product) => {
                        // let prodPrice = product.price
                        // product.isSelected == true ? (
                        //     priceResult += prodPrice
                        // ) : ""

                        return (

                            <div key={Math.random()}>
                                <div className='flex gap-[20px] mt-[10px]'>
                                    <p>{product.name}</p>
                                    <p>-</p>
                                    <p>{prodPrice}</p>
                                </div>
                            </div>
                        )

                    })
                }
                <p className='mt-[10px]'>Ընդհանուր - {priceResult}</p>
            </div>
        </div>
    )
}

export default Table