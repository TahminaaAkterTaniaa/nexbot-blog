// API endpoint for posts
export default function handler(req, res) {
  const posts = [
    { id: 1, title: 'First Post', content: 'Hello World!' }
  ];
  res.status(200).json(posts);
}
