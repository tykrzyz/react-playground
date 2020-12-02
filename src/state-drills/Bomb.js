import React from 'react';

class Bomb extends React.Component{
    state = {
        count: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count+1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render(){
        return(
            <div>
                <p>{this.getTickOrTock()}</p>
            </div>
        )
    }

    getTickOrTock(){
        if(this.state.count>=8){
            return 'BOOM!';
        }
        else if(this.state.count%2===0){
            return 'tick';
        }
        else{
            return 'tock';
        }
    }
}

export default Bomb