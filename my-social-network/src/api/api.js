import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "ecc2d79b-33a1-4445-9958-488e691027b8"
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})



export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true,
    headers: {
      "API-KEY": "ecc2d79b-33a1-4445-9958-488e691027b8"
    }})
    .then(response => { return response.data });
  }
}

export const followAPI = {
  getFollow(userId) {
    return instance.post(`follow/${userId}`, {}, 
    { withCredentials: true,
    headers: {
      "API-KEY": "ecc2d79b-33a1-4445-9958-488e691027b8"
    }}).then(response => { return response.data; })
  },

  getUnFollow(userId) {
    return instance.delete(`follow/${userId}`,
      { withCredentials: true,
      headers: {
        "API-KEY": "ecc2d79b-33a1-4445-9958-488e691027b8"
      }}).then(response => { return response.data; })
  }
}


//перенесли сюда все запросы к серверу


// export const getUsers = (currentPage, pageSize) => {
//   return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, { withCredentials: true,
//   headers: {
//     "API-KEY": "ecc2d79b-33a1-4445-9958-488e691027b8"
//   }})
//   .then(response => { return response.data });
// }

// export const getFollow = (userId) => {
//   return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, 
//   { withCredentials: true,
//   headers: {
//     "API-KEY": "ecc2d79b-33a1-4445-9958-488e691027b8"
//   }}).then(response => { return response.data; })
// }

// export const getUnFollow = (userId) => {
//   return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
//     { withCredentials: true,
//     headers: {
//       "API-KEY": "ecc2d79b-33a1-4445-9958-488e691027b8"
//     }}).then(response => { return response.data; })
// }
