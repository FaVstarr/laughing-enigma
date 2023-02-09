import React, {useEffect, useState} from 'react'





const SearchBar = ({inputValue, setInputValue}) => {
const [searchTerm, setSearchTerm] = useState([]);



// let input = document.getElementById(searchTerm).value
// input = input.toLowerCase();
// let x = document.getElementsByClassName('posts');



useEffect(() => {
    
    

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> res.json()) 
    .then((data) =>{
        console.log(data)
        setSearchTerm(data)})
    .catch((error) => {
        console.error("Error Fetching posts:", error)
    })
    
},[])




// const handleChange = (event) => {
//     setSearchTerm(event.target.value)
// }

const handleSubmit = (event) => {
    event.preventDefault();

}
const filteredSearch = searchTerm.filter(post=> 
post.title.toLowerCase().includes(inputValue.toLowerCase()));

return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={inputValue}
        onChange={(event)=> setInputValue(event.target.value)}
        placeholder="Search..." />

        <button type="submit">Search</button>
        </form>
        
        {/* <div>
        {searchTerm.map((searchTerm) => (
                <li key={searchTerm.id}>{searchTerm.title}</li>
            ))}
        </div> */}
            
        

    </div>
    
    
);


};

export default SearchBar

