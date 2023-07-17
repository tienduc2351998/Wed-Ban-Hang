// khai bao cac thong tin cau hinh chung cho API cua trang wed
import axios from "axios"

// khai bao thong tin chung cua axios: axios.create khoi tao cau hinh ban dau axios
const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    header: {
        "content-type": "application/json",
    }
})

// ham xu ly call api: 
// methor: phuong thuc get post put delete
// endpoint: duong link mo rong: duong link co ban + duong link mo rong
// payload: du lieu day kem khi call api 
export const api = (method_param, endpoint_param, payload_param) => {
    return axiosClient(endpoint_param, { method: method_param, data: payload_param })
        .then((response) => {
            //   console.log("api");
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
