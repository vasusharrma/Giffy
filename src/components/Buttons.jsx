import {Component} from 'react';

class Wrapper extends Component {


    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="buttonSection">
                <button>Randomize</button>
                <input type="text" placeholder={'Search for....'}/>
            </div>
        )
    }

}

export default Wrapper