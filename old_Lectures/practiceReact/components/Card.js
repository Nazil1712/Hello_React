import { useEffect, useState } from "react";

const Card = () =>{

    // useEffect(()=>{
    //     console.log("useEffect() called...")
    // })

    // useEffect(()=>{
    //     console.log("with empty dep array called...")
    // },[])
    
    const [val, setVal] = useState(0);

    useEffect(()=>{
        console.log("I am called, bcoz val changed...")
    },[val])




    
    return (
        <>
        <p>{val}</p>
        <button onClick={()=>{
            setVal(val + 1)
        }}>+</button>

        </>
    )
}

export default Card;