import React, { Component } from 'react';

class TableHeader extends Component {
    //sortColumn : object
    //onSort : function
    //columns : array
    raiseSort = (path) => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' :'asc';
        }else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }
    //
    renderSortIcon = (path) => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path !== path) return null;
        if(sortColumn.order === 'asc') return <i className = "fa fa-sort-asc"></i>;
        return <i className = "fa fa-sort-desc"></i>;
    }
    render() { 
        const {columns} = this.props;
        return ( 
            <thead>
                <tr className='clickable'>
                    {columns.map(column => {
                        return <th key={column.path || column.key} 
                        onClick={() => this.raiseSort(column.path)}>
                            {column.label} {this.renderSortIcon(column.path)}
                        </th>
                    })}                    
                </tr>
            </thead> 
        );
    }
}
 
export default TableHeader;