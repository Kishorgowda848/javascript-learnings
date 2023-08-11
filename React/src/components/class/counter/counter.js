import React from 'react';

export class Counter extends React.Component{
     

    constructor(props){

    super(props);
    this.state = {
        count:this.props.initialCount,
        avatar_url:null
    }
      console.log("Child Constructor")
    }

    incrementCount1 = ()=>{
        const {count} = this.state;
        this.setState({
            count: count+1
        })
    }

    async componentDidMount(){
       this.timer =  setInterval(()=>{
            console.log("Set Interval Demonstrate componentWillUnmount")
        },1000);

        const data = await fetch(`https://api.github.com/users/kishorgowda848`);

        const json = await data.json();

        console.log(json);

        this.setState({
            avatar_url:json.avatar_url
        })

        console.log("child componentDidMount");
    }



    componentDidUpdate(){
        console.log('Child componentDidUpdate - Call Every Render');
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log('Child ComponentWillUnmount - Go to different page - Component destroy from DOM ')
    }

    render(){
        console.log("child Render",this)
        const {count,avatar_url} = this.state;
        return (<>
        counter:= {count}
        <img src={avatar_url}/>
        <button onClick={this.incrementCount1} >Increment</button>
        </>)
    }

}

/**
 * 
 * Child Constructor
 * Child Render
 * Child ComponentDidMount
 * 
 *  API call 
 *  UseState
 *  Rerender DOM
 * 
 */

