import BlogPost from "./BlogPost"

const ListPage = ({searchTerm})  => {
    const results = searchTerm.map(post => <BlogPost key={post.id} post={post}/>)

    const content = results?.length ? results : <article> <p>No Matching post</p></article>
    return (
        <main>
            {content}
        </main>
    )
}

export default ListPage