const axios = require('axios');


test('[GET] api/object/ returns data correctly', async() => {
    const response = await axiosGet('http://localhost:8400/api/object')
    response.forEach(element => {
        expect(typeof element.name).toBe('string')
        expect(typeof element.code).toBe('number')
        expect(typeof element.description).toBe('string')
        expect(typeof element.image).toBe('string')
    });
})

test('[POST] api/object/ returns data correctly', async() => {
    let object = {
        name:'objeto',
        code:999,
        description:'description de objeto',
        image:'objeto.png'
    }
    const response = await axiosPost('http://localhost:8400/api/object',{object})
    response.forEach(element => {
        expect(typeof element.name).toBe('string')
        expect(typeof element.code).toBe('number')
        expect(typeof element.description).toBe('string')
        expect(typeof element.image).toBe('string')
    });
})



const axiosGet = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

const axiosPost = async (url,object) => {
    const response = await axios.post(url,object);
    return response.data;
};