const { Counter } = require("../class/counter/counter")

import React from 'react';

export default class About extends React.Component {

    constructor(props){
     super(props);
     console.log("Parent Constructor called");
    }

    componentDidMount(){
        console.log("Parent ComponentDiD Mount")
    }

    render(){
        console.log("Parent render called");
        return (
            <>
            <Counter initialCount={2}/>
            <Counter initialCount={3}/>
            <p> About Page works here</p>
            </>
        )
    }
}

/**
 * 
 * Parent constructor
 * Parent render
 *    first Child - constructor 
 *    first child - render
 *    second child - constructor
 *    second child - render
 *    Fist child - component did mount
 *    second child component did mount
 *  Parent component did mount
 * 
 */

