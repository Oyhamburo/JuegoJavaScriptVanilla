import axios from  'axios'
import {strictEqual, deepStrictEqual} from 'assert'
const enviar = objeto => axios.post('http://localhost:8400/api/object',{objeto})
const recibir =()=> axios.get('http://localhost:8400/api/object')

describe("verificar create, get, delete and update",function(){
    it('verificar que traiga todos los objetos en su tipo correspondiente', async function(){
        const {data}= await recibir()
        data.forEach(objeto => {
            strictEqual(typeof objeto.name, 'string')
            strictEqual(typeof objeto.code, 'number')
            strictEqual(typeof objeto.description, 'string')
            strictEqual(typeof objeto.image, 'string')
        });
    })
    

})
