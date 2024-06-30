import React from 'react';
import { Box, BoxContainer } from './BlankoContainers';
function SquareBoxes() {
  return (
    <BoxContainer>
      {[...Array(12)].map((_, index) => (
        <Box key={index}></Box>
      ))}
    </BoxContainer>
  );
}

export default SquareBoxes;