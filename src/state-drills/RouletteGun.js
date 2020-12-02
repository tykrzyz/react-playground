import React from 'react'

class RouletteGun extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    render(){
        return (
            <div>
                <p>{this.currentStatus()}</p>
                <button onClick={() => this.pulltrigger()}>Pull the trigger!</button>
            </div>
        )
    }

    pulltrigger(){
        this.setState({spinningTheChamber: true})
        setTimeout(e =>{
            let chamber = Math.ceil(Math.random() * 8)
            this.setState({chamber: chamber,
                           spinningTheChamber: false});
        }, 2000)
    }

    currentStatus(){
        if(this.state.spinningTheChamber===true){
            return 'spinning the chamber and pulling the trigger! ...';
        }
        else if(this.state.chamber === parseInt(this.props.bulletInChamber)){
            return 'BANG!';
        }
        else{
            return `you're safe!`;
        }
    }
}

export default RouletteGun