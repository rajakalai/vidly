import React from 'react';

const ListGroup = props => {
    const {onSelectGenre,items,textProperty, valueProperty,selectedItem} = props;
    console.log(props);
    return (
        <ul className="list-group">            
            {items.map (genre => {
                return <li onClick={() => onSelectGenre(genre)} 
                key ={genre[valueProperty]} 
                className=  {selectedItem === genre ?"list-group-item active" : "list-group-item"}>
                {genre[textProperty]}</li>
            })}                            
        </ul>
    );   
};

ListGroup.defaultProps = {
    textProperty:'name',
    valueProperty:'_id'
};
 
export default ListGroup;