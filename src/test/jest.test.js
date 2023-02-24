const axios = require('axios');
const url = 'http://localhost:8400/api/object'
let object = {
    name:'objeto',
    code:999,
    description:'description de objeto',
    image:'objeto.png'
}

test('[GET] api/object/ returns data correctly', async() => {
    const response = await axios.get(url)
    const {data} = response
    data.forEach(element => {
        expect(typeof element.name).toBe('string')
        expect(typeof element.code).toBe('number')
        expect(typeof element.description).toBe('string')
        expect(typeof element.image).toBe('string')
    });
})

test('[POST] api/object/ returns data correctly', async() => {
    const response = await axios.post(url,object)
    id = response.data.success.slice(22)
    expect(response.status).toBe(201)
})

test('[UPDATE] api/object/:id returns data correctly', async() => {
    object.name= 'ObjetoUpdate'
    const response = await axios.put(url+'/'+id,object)
    expect(response.status).toBe(200)
})

test('[DELETE] api/object/:id returns data correctly', async() => {
    const response = await axios.delete(url+'/'+id)
    expect(response.status).toBe(200)
})


