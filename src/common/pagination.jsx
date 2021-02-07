import React from 'react';
import _ from 'lodash';

const Pagination = props => {
    const {pageSize, itemsCount,currentPage,onPageChange} = props;
    const pageCount = Math.ceil(itemsCount/pageSize);
    const pages = _.range(1 , pageCount+1);
    if(pageCount > 1)  {
        return (
            <nav>
                <ul className="pagination">
                    {pages.map(page => {
                        return <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'}><a onClick={() => onPageChange(page)} className="page-link">{page}</a></li>
                    })}            
                </ul>
            </nav>
        )   
    }else {
        return null;
    }
}
 
export default Pagination;
