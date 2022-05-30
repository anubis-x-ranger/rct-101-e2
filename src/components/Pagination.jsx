import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
 
  return (
    <ButtonGroup size='sm' isAttached variant='outline'>
      <Button data-cy="pagination-first-button" colorScheme='gray'>First</Button>
      <Button data-cy="pagination-previous-button" colorScheme='gray'>Previous</Button>
      <Select data-cy="pagination-limit-select" placeholder='Select option'>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" colorScheme='gray'>Next</Button>
      <Button data-cy="pagination-last-button" colorScheme='gray'>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
