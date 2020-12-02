import React from 'react';

class Accordion extends React.Component{
    static defaultProps = {sections: []}
    constructor(props){
        super(props);
        this.state = {currentSection: -1}
    }


    render(){
        return(
            <ul>
                {!!this.props.sections.length && (this.renderSections())}
            </ul>
        )
    }

    renderSections(){
        return this.props.sections.map((section, index) => (
        <li key={index}><button onClick={() => this.setState({currentSection: index})}>
        {section.title}</button><p>{this.state.currentSection === index && section.content}</p></li>
        ))
    }
}

export default Accordion