import request from "supertest";
import { Connection } from "typeorm"

import { app } from '@shared/infra/http/app'

import  createConnection from '@shared/infra/typeorm'


let connection: Connection;

describe("Create Unity Controller", () =>{
    beforeAll(async() => {
        connection = await createConnection();

        await connection.runMigrations();
    })

    afterAll(async() =>{
        await connection.dropDatabase();
        await connection.close();

    })

    it('should be able to create a new unit', async() =>{
        const response = await request(app)
        .post("/units")
        .send({
            description:"UN",
        })

        expect(response.status).toBe(201)
    })

})