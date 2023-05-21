import {base_url} from '../../utils/base_url';
import axios from 'axios';
import {config} from '../../utils/axios_headers';
const getOrders = async() => {

    try{
        const response = await axios.get(`${base_url}order`,config)
        return response.data;
    }catch(err) {
        console.log(err);
    }
}
const getOrdersByUserId = async(id) => {
    try {
        const response = await axios.get(`${base_url}order/${id}`,config);
        return response.data;
    }catch(err) {
        console.log(err);
    }
}
const getMonthlyOrderIncome = async() => {
    try {
        const response = await axios.get(`${base_url}/order/admin/monthly-income`,config);
        return response.data;
    }catch(err) {
        console.log(err);
    }
}

const getYearlyOrderIncome = async() => {
    try {
        const response = await axios.get(`${base_url}/order/admin/yearly-income`,config);
        return response.data;
    }catch(err) {
        console.log(err);
    }
}

const getAllOrders = async() => {
    try {
        const response = await axios.get(`${base_url}/order/all/orders`,config)
        return response.data;
    }catch(err) {
        console.log(err);
    }
}
const getOrderById = async(id) => {
    try {
        const response = await axios.get(`${base_url}/order/${id}`,config);
        return response.data;
    }catch(err) {
        console.log(err)
    }
}

const updateOrderStatus = async(data) => {
    console.log(data.orderStatus);
    try {
        const response = await axios.patch(`${base_url}/order/u/${data.id}`,{orderStatus:data.orderStatus},config);
        return response.data;
    }catch(err) {
        console.log(err)
        throw new Error('rejected');
    }
}
export const orderService = {
    getOrders,
    getOrdersByUserId,
    getMonthlyOrderIncome,
    getYearlyOrderIncome,
    getAllOrders,
    getOrderById,
    updateOrderStatus
}