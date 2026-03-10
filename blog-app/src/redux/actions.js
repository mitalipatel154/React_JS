import axios from "axios"

import {
  FETCH_POSTS,
  ADD_POST,
  DELETE_POST
} from "./types"

const API = "http://localhost:3001/posts"

export const fetchPosts = () => async dispatch => {

  const res = await axios.get(API)

  dispatch({
    type: FETCH_POSTS,
    payload: res.data
  })
}

export const addPost = post => async dispatch => {

  const res = await axios.post(API, post)

  dispatch({
    type: ADD_POST,
    payload: res.data
  })
}

export const deletePost = id => async dispatch => {

  await axios.delete(`${API}/${id}`)

  dispatch({
    type: DELETE_POST,
    payload: id
  })
}