const BlogList = ({blogs,title, inputValue}) => {
    

console.log({inputValue})

    return ( 
        <div className="bloglist">
            <h2>{title}</h2>
             {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title} </h2>
                    <p> {blog.body} </p>
                    <p>Written by {blog.author}</p>
                    
                </div>
            ))} */}
            {blogs.filter((blog)=> blog.title.toLowerCase().includes(inputValue.toLowerCase()) || blog.body.toLowerCase().includes(inputValue.toLowerCase())
            ).map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title} </h2>
                    <p> {blog.body} </p>
                    <p>Written by {blog.author}</p>
                    
                </div>
            ))
            }

            
        </div>
     );
}
 
export default BlogList;