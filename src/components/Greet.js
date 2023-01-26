import React from 'react'

// function Greet(){
//     return <h1>Hello Favour</h1>
// }

    const Greet = props => { 
        const {name, heroName} = props
        // const {state1, state2} = this.state
        return (
            <div>
        <h1>Hello {name} a.k.a {heroName} </h1>
            {/* {props.children} */}
        </div>
        )
    }

export default Greet