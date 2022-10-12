import React from "react";

let List = ({name, image, age, removeFunc, id}) =>{

    

return <article>
            <div className="image-container">
            <img src={image} alt="image" className="my-image"></img>
            </div>
            <div className="info">
                  <h4>{name}</h4>
                  <p>{age} Years Old</p>
                  <button className='remove-person' onClick={()=>removeFunc(id)}>Remove</button>


            </div>


       </article>


}

export default List;