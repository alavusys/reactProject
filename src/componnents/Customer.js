import React from 'react';

class  Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} iamge ={this.props.image} name={this.props.name} />
                <CustomerInfo sex={this.props.sex} age={this.props.age} job={this.props.job}  />
             </div>
        )
    }
}

/* CustomerProfile */
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2> {this.props.name} ( {this.props.id} ) </h2> 
               
            </div>

        )
    }

}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                 <p> sex : ( {this.props.sex} )  </p>
                 <p> job : ( {this.props.job} )  </p>
                 <p> age : ( {this.props.age} ) </p>
                 <p> ----  </p>
            </div>
        )
    }
}
export default Customer;