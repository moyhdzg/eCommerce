import React, {useContext} from 'react'
//import { useNavigate } from 'react-router-dom'
import { productContext } from '../context/productContext'

const ProductView = () => {
    const {productData}= useContext(productContext)

    // 

    // const goBack = () =>{
    //     navigation('/')
    // }

    return (
        <h1> {productData.name}</h1>
    )
}

export default ProductView