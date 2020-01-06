import _ from "lodash"
import jsonPlaceHolder from "../apis/jsonPlaceHolder"

export const fetchPosts = () => async (dispatch) => {
    const resp = await jsonPlaceHolder.get("/posts")
    dispatch({
      type: "FETCH_POSTS", 
      payload: resp.data
    })

  }

// export const fetchPosts = () => {
//   return (dispatch, getState) => {
//     const promise = jsonPlaceHolder.get('/posts')

//     return {
//       type: "FETCH_POSTS",
//       payload: promise
//     }
//   }
// }

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch)
// }


// // memoize getting a user using lodash memoize to only fetch each user once
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const resp = await jsonPlaceHolder.get(`/users/${id}`)
//   dispatch({
//     type: "FETCH_USER",
//     payload: resp.data
//   })
// })

export const fetchUser = (id) => async (dispatch) => {
  const resp = await jsonPlaceHolder.get(`/users/${id}`)
  dispatch({
    type: "FETCH_USER",
    payload: resp.data
  })
}


// memoize getting a user using lodash memoize to only fetch each user once


