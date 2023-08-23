import axios from "axios";

const users = {
    namespaced: true,
    state: {
        usersData: [],
    },
    getters: {
        getUsers: (state) => state.usersData,
    },
    actions: {
        async fetchUsers ({ commit }) {
            try {
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/user/info"
                );
                commit("SET_USERS" ,data.data);
            } catch(error) {
                alert (error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_USERS(state, users) {
            state.usersData = users
        },
    },
};

export default users;