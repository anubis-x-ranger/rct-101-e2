import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel} from "@chakra-ui/react";
const Product = () => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category">text</Text>
      <Tag>
        <TagLabel data-cy="product-gender">label</TagLabel>
      </Tag>
      <Heading data-cy="product-title">heading</Heading>
      <Box data-cy="product-price">price</Box>
    </Stack>
  );
};

export default Product;
