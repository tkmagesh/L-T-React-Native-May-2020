import axios from 'axios';

const serviceEndPoint = 'http://localhost:3000/products';
const productsApi = {
    async getAll(){
        const response = await axios.get(serviceEndPoint);
        return response.data;
    },
    async save(productData){
        if (productData.id === 0){
            const response = await axios.post(serviceEndPoint, productData);
            return response.data;
        } else {
            const response = await axios.put(`${serviceEndPoint}/${productData.id}`, productData);
            return response.data;
        }
    }
}

export default productsApi;