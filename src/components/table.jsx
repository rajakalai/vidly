import React, { Component } from 'react';
import TableHeader from './moviesHeader'
import TableBody from './tableBody';

const Table = (props) => {
    const {columns,onSort,data, sortColumn} = props;
    return (  
        <table className="table">
            <TableHeader 
            columns = {columns}  
            onSort= {onSort}
            sortColumn = {sortColumn}
            />
            <TableBody data = {data} columns={columns}/> 
        </table>
    );
}
 
export default Table;