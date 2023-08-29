import React from "react";

const Lunch = ({data}) =>{
    // console.log("Arr" + arr);
    data = data.filter((e,i)=>{
        return e.category === 'lunch';
    })
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

export default Lunch;