import React from "react";

const All = ({data}) =>{
    // console.log("Arr" + arr);
    return (
        <>      
        {
            data.map((data)=>(
                <>
                    <img src="" alt="" />
                    <h2>{data.title}</h2>
                    <p>{data.price}</p>
                    <p>{data.desc}</p>
                </>
            ))
        }
        </>
    )
}

export default All;