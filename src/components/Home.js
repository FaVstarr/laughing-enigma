import { useCallback, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import SearchBar from './Searchbar';
import Paginate from './Pagination';





const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const {blogs, isPending } = useFetch("https://jsonplaceholder.typicode.com/posts")

   
    const onPageChanged = useCallback(
      (event, page) => {
        event.preventDefault();
        setCurrentPage(page);
       },
        [setCurrentPage]
      );
       
    let NUM_OF_RECORDS = blogs.length;
    let LIMIT = 5;

      const currentData = blogs.slice(
        (currentPage - 1) * LIMIT
        (currentPage - 1) * LIMIT + LIMIT
      )
  


   
    const [inputValue, setInputValue] = useState("");
    

    
    return ( 
      <div>

        <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
        <div className="home">
          
            {isPending && <div>Loading... </div>}
          {!isPending && <BlogList blogs={blogs} title = "All Blogs" inputValue={inputValue} />} 
          
           
        
    
        </div>
        <div className='pagination-wrapper'>
              <Paginate 
              totalRecords = {NUM_OF_RECORDS}
              pageLimit = {LIMIT}
              pageNeigbour={2}
              onPageChanged={onPageChanged}
              currentPage= {currentData} />
        </div>
        </div>
        
     );
}
 
export default Home;