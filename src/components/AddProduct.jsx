import React from "react";
import { Button,Select,Radio,RadioGroup,ModalBody,Modal,Input, useDisclosure } from '@chakra-ui/react';
import axios from "axios";

const AddProduct = ({products,setProducts}) => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  
  const handleSubmit=()=>{
    onClose();
 
  }
  return (
    <>

      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add Product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <h1>Add New Product</h1>
          <h2>Title</h2>
          <Input data-cy="add-product-title" placeholder="Title"/>
          <h2>Category</h2>
          <Select data-cy="add-product-category"  placeholder="Select Category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <h2>Gender</h2>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <h2>Price</h2>
          <Input data-cy="add-product-price" placeholder="Rs. Price" />
          <Button data-cy="add-product-submit-button" onClick={handleSubmit}>Create</Button>
        </ModalBody>
      </Modal>

    </>  
  );
};

export default AddProduct;
