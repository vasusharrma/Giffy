import {Component} from 'react';
import Img_Section from './Img_Section.jsx';
import Buttons from './Buttons.jsx';

class Wrapper extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <Img_Section/>
                <Buttons/>
            </>
        )
    }

}

export default Wrapper