import request from 'supertest'
import {expect} from 'chai'
import { app } from '../app.js'
describe("Comprobando que el servidor funcione bien", function () {

    it('recibir ', async function () {
        const response= await request(app).get('/api/object')
        expect(response.status).to.equal(200)
    })

    it('guardar', async function () {
        let nuevoObjeto = {}
        const response=await request(app).post('/api/object').send({nuevoObjeto})
        expect(response.status).to.equal(200)
    })

    it('editar', async function () {
        let id = ''
        const response=await request(app).put('/api/object').send({id})
        expect(response.status).to.equal(200)
    })
    
    it('eliminar', async function () {
        let id
        const response=await request(app).delete('/api/object').send({id})
        expect(response.status).to.equal(200)
    })
    
})