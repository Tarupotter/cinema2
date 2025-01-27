import { expect, test } from '@jest/globals';
import request from 'supertest';
import initApp from '../app.js'; 


test('Movie page shows title of movies', async () => {
const app = initApp({
oneMovie: async () => ({
    id: 1,
    title: 'Encanto'
}),
allMovies: async () => [
    {
        id: 1,
        title: 'Encanto'
    },
    {
        id: 2,
        title: 'Psycho'
    },
    {
        id: 3,
        title: 'Titanic'
    }
],
});

const response = await request(app)
.get('/movies')
.expect('Content-Type', /html/)
.expect(200);


expect(response.text).toMatch('Encanto');
expect(response.text).toMatch('Psycho');
expect(response.text).toMatch('Titanic');
});
