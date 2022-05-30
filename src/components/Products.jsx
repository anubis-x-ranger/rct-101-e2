import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import {Flex,Grid} from '@chakra-ui/react'

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct />
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
