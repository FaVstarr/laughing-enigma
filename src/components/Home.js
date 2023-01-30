import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import {blogData as db} from '../db'

const Home = () => {
    const [blogs, setBlogs] = useState([]);


    const [isPending, setIsPending] = useState(true);


    

    useEffect(() => {
       setTimeout(()=> {
        setIsPending(true);

        setBlogs(db);
        setIsPending(false);
       }, 1000)

        
        
    }, [] )

    return ( 
        <div className="home">
            {isPending && <div>Loading... </div>}
          {!isPending && <BlogList blogs={blogs} title = "All Blogs"  />} 
          
        
    
        </div>
     );
}
 
export default Home;