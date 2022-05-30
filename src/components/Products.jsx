import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import {Flex,Grid} from '@chakra-ui/react'

const Products = ({products,setProducts,limit,setLimit,page,setPage,tcount,setTcount}) => {
  // TODO: Remove below const and instead import them from chakra
  
  return (
    <Flex direction="column">
      {/*  AddProduct */}
      <AddProduct products={products} setproducts={setProducts}/>
      <Grid>
        {/* List of Products */}
        <Product/>
      </Grid>
      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;
