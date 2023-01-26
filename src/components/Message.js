import React, { Component } from "react";

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    render(){
        return <h1>
            {this.state.message}
        </h1>
    }
}

export default Message;