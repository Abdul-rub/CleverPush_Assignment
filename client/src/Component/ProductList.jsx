import React from 'react'
import { Link } from 'react-router-dom'
import style from "./product.module.css"
function ProductList({ images, id }) {

    return (
        <div className={style.imageContainer}>
            <Link to={images}>
                <img src={images} alt="images" />
            </Link>
        </div>
    )
}

export default ProductList