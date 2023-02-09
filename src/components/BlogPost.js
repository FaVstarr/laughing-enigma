const BlogPost = ({post})=>{
    return(
        <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>{post.id}</p>
        </div>
    )
}
export default BlogPost