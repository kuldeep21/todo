import React from "react";

const ItemList = (props: any) => {

    const {itemname} = props;

    return(
        <label>{itemname}</label>
    );
}

export default ItemList;