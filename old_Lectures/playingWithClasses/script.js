import React from "react";
// import { Component } from "react"
import ReactDOM from "react-dom/client"
import FirstChild from "./FirstChild";
import SecChildClass from "./SecChildClass";


class Practice extends React.Component {
// class Practice extends Component { // then you have to import component from react

  constructor(props) {
    super(props)
    console.log("Parent Class Constructor")
  }

    render() {
      console.log("Parent Class Render")
      return (
        <div>
          <h1>Hey Here I am from Class Based component</h1>

          <FirstChild/>
          <SecChildClass/>
        </div>
      )
    }


    componentDidMount() {
      console.log("Parent Class Mounted()")
    }
}



const rootElem = document.getElementById("root")
const root = ReactDOM.createRoot(rootElem)


root.render(<Practice/>)