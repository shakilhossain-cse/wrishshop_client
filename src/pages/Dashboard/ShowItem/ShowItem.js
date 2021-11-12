import React from 'react'
import { useParams } from 'react-router';
import AddProduct from '../AddProduct/AddProduct';
import AllOrder from '../AllOrder/AllOrder';
import MakeADmin from '../MakeAdmin/MakeADmin';
import MyOrder from '../MyOrder/MyOrder';
import ProductList from '../ProductList/ProductList';
import Review from '../Review/Review';

const ShowItem = () => {
    const { Topic } = useParams();
    console.log(Topic);
    return (
        <>
        {Topic == 'addproduct' && <AddProduct/>}
        {Topic == 'productlist' && <ProductList/>}
        {Topic == 'makeadmin' && <MakeADmin/>}
        {Topic == 'allorders' && <AllOrder/>}
        {Topic == 'myorder' && <MyOrder/>}
        {Topic == 'review' && <Review/>}
      </>
    )
}

export default ShowItem
