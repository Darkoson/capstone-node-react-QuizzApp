
import React, { Component } from 'react'; 
class QonQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
       
        return ( 
            <div>
               
                    {this.props.question}
                

            </div>

         );
    }
}
 
export default QonQuestions;