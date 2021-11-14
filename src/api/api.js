import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'c3749db5-bba1-4d49-be9d-c110de198628'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, usersCount = 10) {
        return instance.get(`users?page=${currentPage}&count=${usersCount}`)
            .then(responce => responce.data)
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(responce => responce.data)
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => responce.data)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(responce => responce.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(responce => responce.data)
    },

    setStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(responce => responce.data)
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form/data"
            }
        })
            .then(responce => responce.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}