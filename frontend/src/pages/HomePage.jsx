import React, { useEffect } from "react";


import GenericGrid from "../components/GenericGrid";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";




const HomePage = () => {
  return (
    <Box bgRepeat={"no-repeat"} bgAttachment={"fixed"}>
      {/* <BeginCarousel arr={animies} /> */}
      {/* <GenericCarousel arr={arr} heading={"TRENDING"} /> */}
      <Navbar/>
       <GenericGrid /> 
    
      {/* <GenericGrid />
      <GenericGrid /> */}
    </Box>
  );
};

export default HomePage;