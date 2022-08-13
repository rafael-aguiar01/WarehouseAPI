import request from "supertest";
import { Connection } from "typeorm"

import { app } from '@shared/infra/http/app'

import  createConnection from '@shared/infra/typeorm'

let connection: Connection;

describe("Create Product Type Controller", () =>{
    beforeAll(async() => {
        connection = await createConnection();

        await connection.runMigrations();
    })

    afterAll(async() =>{
        await connection.dropDatabase();
        await connection.close();

    })

    it('should be able to create a new product type', async() =>{
        const response = await request(app)
        .post("/types")
        .send({
            description:"Matéria Prima",
        })

        expect(response.status).toBe(201)
    })

})