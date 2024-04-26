// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Row, Col } from 'react-bootstrap'
// import Product from '../components/Product'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import Paginate from '../components/Paginate'
// import ProductCarousel from '../components/ProductCarousel'
// import { listProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import React from 'react';
import './home.css';

function HomeScreen({ history }) {
  const data = [
    {
        name: 'nature trip',
        url: 'https://picsum.photos/200/300',
    },
    {
        name: 'beach vacation',
        url: 'https://picsum.photos/200/300/?blur',
    },
    {
      name: 'nature trip',
      url: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/200/300/?blur',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'nature trip',
    url: 'https://picsum.photos/id/237/200/300',
  },
  
  ];
    // const dispatch = useDispatch()
    // const productList = useSelector(state => state.productList)
    // const { error, loading, products, page, pages } = productList

    // let keyword = history.location.search

    // useEffect(() => {
    //     dispatch(listProducts(keyword))

    // }, [dispatch, keyword])
    return (
        // <div>
        //     {!keyword && <ProductCarousel />}

        //     <h1>Latest Products</h1>
        //     {loading ? <Loader />
        //         : error ? <Message variant='danger'>{error}</Message>
        //             :
        //             <div>
        //                 <Row>
        //                     {products.map(product => (
        //                         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        //                             <Product product={product} />
        //                         </Col>
        //                     ))}
        //                 </Row>
        //                 <Paginate page={page} pages={pages} keyword={keyword} />
        //             </div>
        //     }
        // </div>

        <>
<Link to='/watch'>
<div className="video-container">
      {data.map((image, index) => ( 
        <div key={index} className="video-item">
          <img src={image.url} alt={image.name} className="video-thumbnail" /> 
          <div className="video-title">{image.name}</div> 
        </div>
      ))}
    </div>
    </Link>


    
        </>
    )
}

export default HomeScreen
