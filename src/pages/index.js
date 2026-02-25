// Home page - lists blog posts
export default function Home({ posts }) {
  return (
    <div>
      <h1>Welcome to nexBot Blog</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = [
    { id: 1, title: 'First Post', excerpt: 'Hello World!' }
  ];
  return { props: { posts } };
}
