import React from 'react';

const UpdateMovie = (props) => {
    const id = props.match.params.id
    
    return (
        <p>Hi</p>
        // <div>
        // <h1>Update {id}</h1>
        // <form onSubmit={handleSubmit}>
        //   <input
        //     type="text"
        //     name="name"
        //     onChange={changeHandler}
        //     placeholder="name"
        //     value={item.name}
        //   />
        //   <div className="baseline" />
  
        //   <input
        //     type="number"
        //     name="price"
        //     onChange={changeHandler}
        //     placeholder="Price"
        //     value={item.price}
        //   />
        //   <div className="baseline" />
  
        //   <input
        //     type="string"
        //     name="imageUrl"
        //     onChange={changeHandler}
        //     placeholder="Image"
        //     value={item.imageUrl}
        //   />
        //   <div className="baseline" />
  
        //   <input
        //     type="string"
        //     name="description"
        //     onChange={changeHandler}
        //     placeholder="Description"
        //     value={item.description}
        //   />
        //   <div className="baseline" />
  
        //   <input
        //     type="string"
        //     name="shipping"
        //     onChange={changeHandler}
        //     placeholder="Shipping"
        //     value={item.shipping}
        //   />
        //   <div className="baseline" />
  
        //   <button className="md-button form-button">Update</button>
        // </form>
        // </div>
    )
}

export default UpdateMovie;