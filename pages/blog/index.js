import Link from "next/link";
import Navbar from "@/Components/Navbar";

const blog = ({ posts }) => {
  return (
    <>
      <Navbar />

      <div>blog Page</div>
      <br />
      {posts.slice(0, 5).map((value) => {
        return (
          <div>
            <h1>{value.id}</h1>
            <Link href={`/blog/${value.id}`}>{value.title}</Link>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default blog;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
}
