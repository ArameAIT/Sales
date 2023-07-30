import React from 'react'

function Basket({ product, dispatch }) {

    const priceResult = product.reduce((aggr, el) => {
        return aggr += el.price * el.count

    }, 0)

    function increasePrice(product) {
        dispatch({ type: 'increase', product });
    }

    function decreasePrice(product) {
        dispatch({ type: 'decrease', product });
    }

    return (
        <div>
            <p>Զամբյուղ</p>
            {
                product.map((product) => {
                    return (
                        <div className='flex justify-center items-center gap-[15px]' key={Math.random()}>
                            <div className='flex gap-[20px] mt-[10px]'>


                                <p>{product.count} Հատ</p>
                                <p>{product.name}</p>
                                <p>-</p>
                                <p>{product.count * product.price}</p>

                            </div>
                            <div>
                                <button onClick={() => increasePrice(product)}>+</button>
                                <button onClick={() => decreasePrice(product)}>-</button>
                            </div>
                        </div>
                    )

                })
            }
            <p className='mt-[10px]'>Ընդհանուր - {priceResult}</p>
        </div>
    )
}

export default Basket

