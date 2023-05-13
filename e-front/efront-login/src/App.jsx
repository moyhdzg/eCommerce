import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Container, Row, Card, Button, Col} from 'react-bootstrap'
import { productContext } from './context/productContext'

const App = () => {
  const [products,setProducts] = useState([])
  const {productData, setProductData} = useContext(productContext)

  const getProducts = async() => {
    const url = 'http://localhost:4003/apis/v1/products'
    const productos = await axios.get(url)
    setProducts(productos.data)
    
  }

  const navigation = useNavigate()
  const buyProducts = () => {
    navigation('/login')
  }

  const viewProduct= async(i)=>{
    const url = `http://localhost:4003/apis/v1/products/${i}`
    const selection = await axios.get(url)
    setProductData(selection.data)
    console.log(productData)
    navigation('/singleproductview')
  }

  const addToCart = () =>{
    
  }

  useEffect(()=>{
    getProducts()
  },[]);

  return (
      <>
        <Container>
          <Row>
            {
              products.length > 0 ?
              products.map((pr,i)=>(
                <Col md={6} key={i}>
                  <Card style={{witdh:'18rem'}}>
                    <Card.Img variant="top" src={pr.image} />
                    <Card.Body>
                      <Card.Title>{pr.name}</Card.Title>
                      <Card.Text>
                        {pr.description}
                      </Card.Text>
                      <Card.Text>
                        {pr.price}
                      </Card.Text>
                      <Button variant="primary" onClick={()=>{viewProduct(pr._id)}}>Ver Producto / View Product</Button>
                      <Button variant="primary" onClick={addToCart}>Agregar al Carrito / Add to Cart</Button>
                    </Card.Body>
                    </Card>
                </Col>
              ))
              :
              <div>
                <h1>Sin Productos / No products available</h1>
              </div>
            }
          </Row>
          <Button variant="secondary" onClick={buyProducts}>Ir a Carito de Compras</Button>
        </Container>    
      </>
  )
}

export default App