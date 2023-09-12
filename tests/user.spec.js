const request = require('supertest');
const app = require("../app");
const { faker } = require('@faker-js/faker');


describe('User Controller', () => {
    it('Register a new user with new credentials', async () => {
        // Generate random email and username with faker
        const uniqueEmail = faker.internet.email();
        const uniqueUsername = faker.internet.userName();
        const uniquePassword = 'testPassword'; 

        const response = await request(app)
            .post('/users/register')
            .send({
                username: uniqueUsername,
                email: uniqueEmail,
                password: uniquePassword
            });
        expect(response.status).toBe(201);
    });

    it('Can login with existing user login credentials', async () => {
        const response = await request(app)
        .post('/users/login')
        .send({
            email: 'testuser@gmail.com',
            password: '123'
        });
    expect(response.status).toBe(200);
    })

    it ('Prompt user when wrong login credentials submitted', async () => {
        try { 
        const response = await request(app)
        .post('/user/login')
        .send({
            email: "fake@imail.com",
            password: "wrong"
        })
        } catch (err) {
            expect(err.message).toBe('duplicate key value violates unique constraint "user_account_username_key"')
        }
    })
});
