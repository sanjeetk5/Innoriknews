import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SingleGridItem from "./SingleGridItem";
import Navbar from "./Navbar";

const Singlesave = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("savedItems")) || [];
    setItem(arr);
  }, []);

  return (
    <>
      <Navbar />

      <Box>
        {item?.map((el) => {
          return <SingleGridItem {...el} />;
        })}
      </Box>
    </>
  );
};

export default Singlesave;
