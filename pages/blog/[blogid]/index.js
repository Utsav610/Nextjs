
const blogDetails = ({posts}) => {
    return (
      <>
      
      <div>blogDetail Page</div>

      <h3>{posts.title}</h3>
      </>
      
    )
  }
  
  export default blogDetails

export const getStaticPaths=async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await res.json();

  const paths=post.map((value)=>{
    return{
      params:{
        blogid:value.id.toString(),
      }
    }
  })

  return{
    paths: paths,
    fallback:false,
  }
}

export async function getStaticProps(context) {
  //console.log(context);
// console.log(context.params);
  const id=context.params.blogid;
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  return {
    props: { posts },
  };
}