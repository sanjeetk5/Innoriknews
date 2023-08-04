import axios from "axios";

import {
  GET_NEWS_FAILURE,
  GET_NEWS_REQ,
  GET_NEWS_SUCCESS,
  NOT_GET_NEWS,
} from "./Actiontypes";

export const getNews = (dispatch) => {
  dispatch({ type: GET_NEWS_REQ });
 return axios
    .get(
      "https://gnews.io/api/v4/top-headlines?&apikey=7ecb60249db4469115fae9e800a131ae"
    )
    .then((res) => {
      
      if (Object.keys(res.data).length > 0) {
        //console.log(res.data.articles)
        dispatch({ type: GET_NEWS_SUCCESS, payload: res.data.articles});
      } else {
        dispatch({ type: NOT_GET_NEWS, payload: res.data.failed });
      }
      return res
    })
    .catch((err) => {
      dispatch({ type: GET_NEWS_FAILURE });
      return err
    });
};

export const GetNewsByGenre = (value) => (dispatch) => {
  dispatch({ type: GET_NEWS_REQ});
  axios
    .get(`https://gnews.io/api/v4/top-headlines?category=${value}&apikey=7ecb60249db4469115fae9e800a131ae`)
    .then((res) => {
      console.log(res);
      if (Object.keys(res.data).length > 0) {
        console.log(res.data.articles)
        // console.log(res.data.articles)
        dispatch({ type: GET_NEWS_SUCCESS, payload: res.data.articles});
        
      } else {
        dispatch({ type: NOT_GET_NEWS, payload: res.data.failed });
      }
    })
    .catch((err) => {
      dispatch({ type: GET_NEWS_FAILURE });
    });
};
