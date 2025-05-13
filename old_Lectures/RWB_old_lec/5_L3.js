import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// 1) React Element (Object) => CORE React
/* const heading = React.createElement("h1",{id:"heading"},"Nazil is going to die");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(heading) */

// 2) Writing JSX
/* const JsxHeading = (<h1>This is JSX</h1>);
// This is jsxheading is React Element => Which is coming from JSX Syntax

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(JsxHeading);
root.render(JsxHeading); */

// 3) Components
const Heading = () => {
  return <h1>This is Functional Component</h1>;
};

// const Testing = () => {
//   return (
//     <>
//       <h1>
//         React Functional Components are nothing but normal JS functions that
//         returns some peice of JSXs
//       </h1>
//     </>
//   );
// };

// const Heading2 = () =>(
//     <h1>This is same as Above</h1>
// )//Remember here rounded brackets are there

// const num = 10000;

// const Heading2 = () =>(
//     <div id="container">
//         <h2>{num}</h2>
//         <Heading/> {/*babel tranpiles this*/}
//         <h1>This Heading2 is same as above</h1>
//     </div>
// )//Remember here rounded brackets are there

// const Heading3 = () => <h1>This is also same as above both</h1>;

// const Heading4 = function () {
//   return <h1>This is non-arrow function but yes this is also same as above</h1>;
// };

// const MyComp = () => (
//   <div>
//     <h1>This is MyComp</h1>
//   </div>
// );

// const Title1 = ()=> (
//   <div>
//     <h1>This is React Element</h1>
//     <MyComp/>
//     <MyComp></MyComp>
//   </div>
// );

// const Title2 =()=>(
//     <div>
//         <h1>This is Component</h1>
//     </div>
// )

// const MyComp = () =>(
//     <div>
//         {Title2()}
//         <h2>This is Another component</h2>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<MyComp/>);





const Nazil = () =>(
    <div>
        <h1>This is Nazil from India</h1>
    </div>
)

const Vadodara = () =>(
    <div>
        {Nazil()}
        <h2>This is Vadodara inside India</h2>
    </div>
)


const SeriousReactPractice = () =>{
    
    const [btn, setBtn] = useState("SignIn");

    const handleClick = () =>{
        setBtn(btn=="SignIn"?"SignOut":"SignIn")
    }

    console.log("Me wapas render hua 🙃 ")


    useEffect(()=>{
        console.log("Me hu useEffect, Mere ko call kiya jata he barbar 🪴")
    },[btn])
    
    return (
        <>
        <h1>Hey This is React by Akshay Saini 🚀 </h1>
            <button onClick={handleClick}>
                {btn}
            </button>
        
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<SeriousReactPractice/>)
