import axios from "axios";


// --------------------------------------  ЭТО УСЛОВНО НАШ !!! DAL !!! -----------------------------------

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ebec2d0d-27c8-4e9c-a395-8724831b2a37'
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 1) => {
        return  instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollow: (id: number) => {
        return  instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow: (id: number) => {
        return  instance
            .post(`follow/${id}`)
            .then(response => response.data)
    },
    headerLogin: () => {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },
    // setUserProfile: (userId: string) => {
    //     return instance
    //         .get(`profile/${userId}`)
    //         .then(response => response.data)
    // }
}


