import React from 'react';

const Like = (props) => {
    let likeStyle = 'fa fa-heart';    
    if(!props.liked)   likeStyle += '-o';        
    return<i onClick = {props.onClick}  style={{cursor : 'pointer'}} className={likeStyle}></i>    
}
 
export default Like;