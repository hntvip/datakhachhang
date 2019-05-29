import axios from 'axios';
const serverUrl = 'http://localhost:1234/api'
const RESOURCE_NAME = '/donhang';
const url = `${serverUrl}${RESOURCE_NAME}`;
export default {
    getAllDonHang () {
        return axios.get(`${url}/getAll`);
    },

    getById (id) {
        return axios.get(`${url}/getById/${id}`);
    },

    create (data) {
        return axios.post(`${url}/create`, data);
    },

    update (id, data) {
        return axios.put(`${url}/update/${id}`, data);
    }
}