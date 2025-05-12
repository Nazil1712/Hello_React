import React from "react"

class FirstChild extends React.Component {
    constructor(props) {
        super(props)
        console.log("First Child Constructor")
    }

    render() {
        console.log("First Child Class Render")
        return (
            <>
            <h1>First Child</h1>
            
            </>
        )
    }

    componentDidMount() {
        console.log("First Child Mounted ()")
    }

}



export default FirstChild