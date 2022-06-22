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
  },

  getUserProfile(userId) {
    return profileAPI.getProfile();
  },

  follow(userId) {
    return instance.post(`follow/${userId}`, {}, 
    { withCredentials: true,
    headers: {
      "API-KEY": "ecc2d79b-33a1-4445-9958-488e691027b8"
    }}).then(response => { return response.data; })
  },

  unFollow(userId) {
    return instance.delete(`follow/${userId}`,
      { withCredentials: true,
      headers: {
        "API-KEY": "ecc2d79b-33a1-4445-9958-488e691027b8"
      }}).then(response => { return response.data; })
  }

}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
    .then(response => { return response.data });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
    .then(response => { return response.data });
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status})
    .then(response => { return response.data });
  },
}



export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => { return response.data; })
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
    .then(response => { return response.data; })
  },
  logout() {
    return instance.delete(`auth/login`).then(response => { return response.data; })
  }
}

//перенесли сюда все запросы на сервер