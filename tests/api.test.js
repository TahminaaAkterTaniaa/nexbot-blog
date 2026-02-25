// API tests
const fetch = require('node-fetch');

describe('API Tests', () => {
  test('GET /api/posts returns posts', async () => {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();
    expect(Array.isArray(posts)).toBe(true);
  });
});
