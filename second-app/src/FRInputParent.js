import React, {Component} from 'react';
import FRInput from './PRInput';

class FRInputParent extends React.Component {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    clickHandle = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandle}>Focus Input</button>
            </div>
        );
    }
}

export default FRInputParent