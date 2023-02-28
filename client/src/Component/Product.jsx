import axios from 'axios'
import React, { useEffect, useState } from 'react'

import style from "./product.module.css"
import { BsSearch } from "react-icons/bs"
import ProductList from './ProductList'

const getdata = (query) => {
    return axios(`https://searchfunctionality.onrender.com/photos?query=${query}`)
}
// console.log(getdata())
function Product() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("flower")

    const handleQuery = (e) => {
        let val = e.target.value
        setQuery(val)
    }
    // console.log(query)

    useEffect(() => {
        getdata(query)
            .then((res) => {
                setData(res.data.hits)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [query])
    // console.log(data)
    return (
        <>
            <div className={style.search_box}>
                <input type="text" id="search" onChange={handleQuery} placeholder="Search Images Here" />
                <span className={style.input_span}><BsSearch />
                </span>
            </div>
            <div className={style.productContainer}>
                {
                    data?.map((el, i) => {
                        // console.log(el.largeImageURL)
                        return (
                            <div key={i}>
                                <ProductList images={el.largeImageURL} />
                      
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Product