import React, {useState, useEffect} from 'react';

const leftPage = 'Left';
const rightPage = 'right';

const range = (from, to, step = 1)=> {
    let i = from;
    const range = [];

    while (i <= to){
        range.push(i);
        i += step;
    }
    return range;
};

const Pagination = (props)=>{
    const {
        totalRecords,
        pageLimit,
        pageNeigbours,
        onPageChanged,
        currentPage
    } = props;
    const [totalPages, setTotalPages] =useState(0);
    useEffect (()=> {
        setTotalPages(Math.ceil(totalRecords/pageLimit));

    }, [setTotalPages]);

    const fetchPageNumbers = ()=>{
        const totalNumbers = pageNeigbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks){
            const startPage = Math.max(2, currentPage - pageNeigbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeigbours);
            let pages = range(startPage, endPage);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = totalPages - endPage > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch(true){
                case hasLeftSpill && !hasRightSpill:{
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [leftPage, ...extraPages, ...pages];
                    break;
                }
                case hasLeftSpill && hasRightSpill:
                    default:{
                        pages = [leftPage, ...pages, ...rightPage];
                        break;
                    }
            }return [1, ...pages, totalPages];
    } return range (1, totalPages);
}

const page = fetchPageNumbers () || [];

return(
    <nav aria-label='Blog Pagination'>
         <ul className='pagination' >{page.map((pages,index)=> {
        if (pages === leftPage)
        return (
            <li key={index} className="page-item">
                <a href='/'
            className='page-link'
            aria-label='Previous'>
            onClick={(e) => onPageChanged(e, pageNeigbours * 2 - 1)}
            </a><span aria-hidden="true">&laquo;</span>
            </li>
            
    )
    if (page === rightPage)
    return (
        <li key={index} className="page-item">
                <a href='/'
            className='page-link'
            aria-label='Next'>
            onClick={(e) => onPageChanged(e, pageNeigbours * 2 + 3)}
            </a><span aria-hidden="true">&raquo;</span>
            </li>
            
    )

    return (
        <li key={index}
        className={`page-item ${currentPage ===page ? "active" : ""}`}>
            <a className='page-link'
            href='/'
            onClick={(e) => onPageChanged(e, page)}>{page}</a>
        </li>
    )

    }
    )}</ul>
    </nav>
   
    
)
}

export default Pagination;