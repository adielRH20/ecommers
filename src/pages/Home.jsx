import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterProductsThunk,
  getProductsThunk,
  filterPruductsInputThunk
} from '../store/slices/products.slice'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import Cart from '../assets/icons/cart.svg'
import axios from 'axios'
import '../styles/products.css'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Home = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.Products)
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [productsSearch, setProductsSearch] = useState('')

  useEffect(() => {
    dispatch(getProductsThunk())

    axios
      .get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
      .then((res) => setCategories(res.data))
  }, [])

  return (
    <div className='products'>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
          value={productsSearch}
          onChange={e => setProductsSearch(e.target.value)}
        />
        <Button
          onClick={() => dispatch(filterPruductsInputThunk(productsSearch))}
          variant='outline-secondary'
          id='button-addon2'
        >
          Button
        </Button>
      </InputGroup>
      <Accordion className='acoordion' defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Category</Accordion.Header>
          <Accordion.Body>
            {categories.map((category) => (
              <Button
                className='button-category'
                key={category.id}
                onClick={() => dispatch(filterProductsThunk(category.id))}
              >
                {category.name}
              </Button>
            ))}

          </Accordion.Body>
        </Accordion.Item>

      </Accordion>

      <div className='fathercontainer'>

        {productList.map((Products) => (
          <Card
            className='card1'
            key={Products.id}
            onClick={() => navigate(`/product/${Products.id}`)}
            style={{ width: '18rem' }}
          >
            <Card.Img
              className='imgcard'
              variant='top'
              src={Products.images[0].url}
              style={{ width: 230, height: 250, objectFit: 'contain' }}
            />
            <Card.Body className='card'>
              <Card.Title>{Products.title}</Card.Title>
              <Card.Text>${Products.price}</Card.Text>
              <Button className='buttoncart' variant='danger'>
                <img src={Cart} />
              </Button>{' '}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home
