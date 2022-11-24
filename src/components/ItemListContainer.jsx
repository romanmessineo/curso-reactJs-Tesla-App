import React from "react";

const ItemListContainer = ({greeating}) =>{
return (
    <div className="container">
        <div className="col-md-12">
        <div class="alert alert-info text-center" role="alert">
        {greeating}
    </div>
        </div>
    </div>
)};


export default ItemListContainer;