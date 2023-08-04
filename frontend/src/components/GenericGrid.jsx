import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SingleGridItem from "./SingleGridItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import { getNews } from "../redux/All_News/Action";
export default function GenericGrid() {
  const news = useSelector((store) => {
    if (store.NewsReducer.news.length > 0) {
      return store.NewsReducer.news;
    } else {
      return [];
    }
  });

  const { isLoading } = useSelector((store) => {
    //console.log(store)
    return store.NewsReducer;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews).then((res) => {
      // console.log(res);
    });
  }, []);

  //Saved code
  const [savedItems, setSavedItems] = useState(JSON.parse(localStorage.getItem("savedItems"))|| []);

  const handleSaveForLater = (item) => {
    setSavedItems((prevSavedItems) => [...prevSavedItems, item]);
    //console.log(savedItems)
  };

  useEffect(() => {
    // Update localStorage whenever savedItems change
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    // console.log(savedItems);
  }, [savedItems]);

  //return
  if (isLoading) {
    return (
      <Box padding="6" boxShadow="lg" bg="#2d2b2e">
        <SkeletonText
          mt="4"
          noOfLines={10}
          spacing="4"
          skeletonHeight="10"
          startColor="#4DCCBD"
        />
      </Box>
    );
  }

  return (
    <Box pt={30} minH={"100vh"}>
      <Heading
        py={[1, 1, 1, 2]}
        fontSize={["3xl", "3xl", "5xl"]}
        color={"#fff"}
        fontFamily={"kalam"}
      >
        All News
      </Heading>
      <Grid
        margin={"auto"}
        width={"90%"}
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(1,1fr)",
        ]}
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {news?.map((item) => {
          return (
            <SingleGridItem
              {...item}
              handleSaveForLater={handleSaveForLater}
              key={Math.random()}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
