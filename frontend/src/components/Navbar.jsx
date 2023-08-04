import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Button,
  useColorModeValue,
  Input,
  chakra,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/Innorik news logo.png";
// import { actionSearch } from "../redux/SearchReducer/Action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { GetNewsByGenre, getNews } from "../redux/All_News/Action";
// import SearchCompo from "./SearchCompo";
// import { GetAnimieByGenre, getAnimie } from "../redux/All_Animie/Action";

const category = [
  {
    title: "General",
    image:
      "https://media.tenor.com/F-PcfP_uW6EAAAAC/news-politics.gif",
    value: "general",
  },

  {
    title: "World",
    image:
      "https://thumbs.gfycat.com/HoarseWindingIvorygull-size_restricted.gif",
    value: "world",
  },

  {
    title: "Nation",
    image:
      "https://i0.wp.com/english.publictv.in/wp-content/uploads/2023/06/ezgif.com-video-to-gif_6_Jv4eIPG.gif?fit=600%2C338&ssl=1",
    value: "nation",
  },

  {
    title: "Business",
    image:
      "https://media.tenor.com/ILQPMy8OTbIAAAAC/stock-market-goes-up.gif",
    value: "business",
  },

  {
    title: "Technology",
    image:
      "https://i.gifer.com/Uds8.gif",
    value: "technology",
  },

  {
    title: "Sports",
    image:
      "https://i.gifer.com/7SOQ.gif",
    value: "sports",
  },

  {
    title: "Health",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_52/3161496/191226-health-misinfo-2x1-cover.gif",
    value: "health",
  },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  // console.log(pathname)
  // console.log(location)
  const [genreTitle, setgenreTitle] = useState("Category");

  const { isOpen, onToggle } = useDisclosure();
  const [navbarItems, setNavbarItems] = useState([
    { label: "Home", path: "/" },
  ]);

  // handle Genre Value
  const handleGenreValue = (e) => {
    if (e.currentTarget.value == "All") {
      setgenreTitle("Category");
      dispatch(getNews);
    } else {
      setgenreTitle(e.currentTarget.value);
      dispatch(GetNewsByGenre(e.currentTarget.value));
    }
  };

  return (
    <>
      <Box>
        <Flex
          backgroundSize={"fill"}
          // bg={useColorModeValue("#2D2B2E", "gray.800")}
          // color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          // borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          zIndex={"500"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon color={"black"} />
                ) : (
                  <HamburgerIcon color={"black"} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Link to={"/home"}>
              {" "}
              <Box display={{ base: "none", md: "flex" }}>
                <Image h={"50px"} src={logo} />
              </Box>{" "}
            </Link>

            <Flex
              display={{ base: "flex", md: "flex" }}
              justify={{ base: "center" }}
              ml={{ base: "0", md: "10" }}
            >
              {pathname == "/save" ? null : (
                <Menu>
                  <MenuButton
                    marginLeft={"10px"}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    bg={"#4DCCBD"}
                    color={"white"}
                    _focus={{
                      bg: "#4DCCBD",
                    }}
                    _hover={{ bg: "#4DCCBD" }}
                  >
                    {genreTitle}
                  </MenuButton>
                  <MenuList
                    h={"300px"}
                    overflowY={"auto"}
                    css={{
                      "&::-webkit-scrollbar": {
                        width: "2px",
                      },
                    }}
                    scrollBehavior={"smooth"}
                  >
                    <MenuItem
                      minH="48px"
                      key={Math.random()}
                      value={"All"}
                      onClick={handleGenreValue}
                    >
                      <Box display={"flex"} justifyContent={"space-evenly"}>
                        <Box>
                          <Image
                            borderRadius={"5px"}
                            width="70px"
                            src="https://cdn.dribbble.com/users/4143097/screenshots/9133710/comp_2_3.gif"
                          />
                        </Box>
                        <Box p={"10px"}>
                          <chakra.h4 fontWeight={"bold"}>All</chakra.h4>
                        </Box>
                      </Box>
                    </MenuItem>

                    {category
                      .sort((a, b) => {
                        if (a.title > b.title) {
                          return 1;
                        } else {
                          return -1;
                        }
                      })
                      .map((el) => (
                        <MenuItem
                          minH="48px"
                          key={Math.random()}
                          value={el.value}
                          onClick={handleGenreValue}
                        >
                          <Box display={"flex"} justifyContent={"space-evenly"}>
                            <Box>
                              <Image
                                borderRadius={"5px"}
                                width="70px"
                                src={el.image}
                              />
                            </Box>
                            <Box p={"10px"}>
                              <chakra.h4 fontWeight={"bold"}>
                                {el.title}
                              </chakra.h4>
                            </Box>
                          </Box>
                        </MenuItem>
                      ))}
                  </MenuList>
                </Menu>
              )}
            </Flex>
          </Flex>

          {pathname == "/save" ? null : (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <Box>
                <Link to={"/save"}>
                  <Button color={"black"}>Saved</Button>
                </Link>
              </Box>
            </Stack>
          )}
        </Flex>

        <Collapse in={isOpen}>
          <Flex
            // bg={useColorModeValue("#2D2B2E", "gray.800")}
            p={4}
            display={{ md: "none" }}
          >
            <Stack spacing={4}>
              {navbarItems.map((item, path) => (
                <Link to={"/home"} key={Math.random()}>
                  <Button
                    display={"inline-block"}
                    textAlign={"left"}
                    key={item.label}
                    variant={"link"}
                    href={item.path}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Flex>
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;
