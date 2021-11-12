import React from 'react'
import { Form,Button} from 'react-bootstrap'

const AddProduct = () => {
    return (
        <Form className="w-100">
           
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            id="productName"
          />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
          <Form.Label>Product Image Link</Form.Label>
          <Form.Control type="text" value="" id="image" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            id="price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="describtion">
          <Form.Label>Product Describtion</Form.Label>
          <Form.Control as="textarea" rows={3} id="describtion" value=""/>
        </Form.Group>
        <Button variant="primary" className="w-100" type="submit">
          Add Product
        </Button>
      </Form>
    )
}

export default AddProduct
