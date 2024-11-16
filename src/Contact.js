import React,{Components} from "react";

class  Contact extends React.Component{
   constructor(){
    super();
    this.state = { displayInformation : false }
    this.toggleDisplayInformation = this.toggleDisplayInformation .bind(this);
   }
   toggleDisplayInformation(){
    this.setState( { displayInformation : !this.state.displayInformation })
     
   }
   render(){
    if(this.state.displayInformation){
        return(
        <div><div>
            <h2>this is contact page..</h2>
            </div><div>
                <ul>
                    <li>
                        Name: b97 class
                    </li>
                    <li>
                        Time: 7:00 Pm to 9:00 Pm
                    </li>
                    <li>
                        Location: Nagaram
                    </li>
                </ul>
            </div>
            <button onClick={this.toggleDisplayInformation}>Read less..</button>
            
            </div>
        );
    }
    else{
        return(
            <div>
                <h2>this is Contact Page</h2>
                <button onClick={this.toggleDisplayInformation}>Read More..</button>
            </div>
        );
    }
}
}
export default Contact;