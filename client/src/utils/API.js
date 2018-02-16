import axios from "axios";
const BASEURL = "/api/DateCreateUsers/";

export default {
    findMatch: function (id, query) {
        return axios.get(BASEURL + id + query);
    },
    getUserData: function (id) {
       return axios.get(BASEURL + id);
    }
};