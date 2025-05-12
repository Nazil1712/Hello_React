import React from "react"

class SecChildClass extends React.Component{
    constructor(props) {
        super(props)

        console.log("Second Child Constructor")
    }

    render() {
        console.log("Second Child Class Render")
        return(
            <>
            <h2>Second Child Render</h2>
            </>
        )
    }

    componentDidMount() {
        console.log("Second Child Mounted ()")
    }
}


export default SecChildClass;