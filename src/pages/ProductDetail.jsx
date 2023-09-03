import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { filterProductsThunk } from '../store/slices/products.slice'
import '../styles/productsDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const similarProducts = useSelector(state => state.Products)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data)
        dispatch(filterProductsThunk(res.data.category.id))
      })
  }, [id])

  return (
    <div className='product'>
      <h3>{product.title}</h3>
      <img src={product.images?.[0].url} />
      <h2>{product.brand}</h2>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <div className='cards'>
        {
                similarProducts.map(productsItem => (
                  <div
                    className='products'
                    key={productsItem.id}
                    onClick={() => navigate(`/product/${productsItem.id}`)}
                  >
                    <figure>
                      <img
                        className='image' src={productsItem.images?.[0].url}
                      />
                    </figure>
                    <hr />
                    <div className='content'>
                      <h2>{productsItem.brand}</h2>
                      <h2>{productsItem.title}</h2>
                      <h3>Price:</h3>
                      <h2>{productsItem.price}</h2>
                    </div>
                  </div>
                ))
            }
      </div>
    </div>

  )
}

export default ProductDetail
