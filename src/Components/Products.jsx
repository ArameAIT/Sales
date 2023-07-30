import React from 'react'

function Products(props) {
    return (
        <>
            <tr key={props.id} >
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.price}</td>
            </tr>
        </>
    )
}

export default Products