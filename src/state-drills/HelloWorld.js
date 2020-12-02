import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    }

    render(){
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={() => this.changeWord('world')}>World</button>
                <button onClick={() => this.changeWord('friend')}>Friend</button>
                <button onClick={() => this.changeWord('React')}>React</button>
            </div>

        )
    }

    changeWord(word){
        this.setState({who: word});
    }
}

export default HelloWorld