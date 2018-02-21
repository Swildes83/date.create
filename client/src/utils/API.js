import axios from "axios";
const BASEURL = "/api/DateCreateUsers/";

export default {
    findMatch: function (city, state, gender) {
        // /:id/search/city\=:locCity&state\=:locState&gender\=:gender
        return axios.get(BASEURL + "/search/city=" + city + "&state=" + state + "&gender=" + gender);
    },
    getUserData: function (id) {
       return axios.get(BASEURL + id);
    },

    login: function(screenName, password) {
        return axios.post(`${BASEURL}/authenticate`, {screenName: screenName, password: password});
    }
};