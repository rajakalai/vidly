import React from 'react';
import Input from '../common/input';
import Joi from 'joi-browser';
import Form from '../common/form';
class Login extends Form {
    state = { 
        data : {
            username : "",
            password : ""
        },
        errors: {}
     };
    schema = {
        username : Joi.string().required(),
        password : Joi.string().required()
    }
    doSubmit = () => {
        //call server
    }
   
    render() { 
        const {data, errors} = this.state;
        return ( 
            <div>
                <h1>Login form</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        label="User Name"
                        name="username" 
                        value= {data.username}
                        onChange={this.handleInputChange}
                        type="text"
                        error={errors.username}
                    />
                    <Input 
                        label="Password"
                        name="password" 
                        value= {data.password}
                        onChange={this.handleInputChange}
                        type="text"
                        error={errors.password}
                    />                    
                    <button disabled={this.validate()} className="btn btn-primary btn-md">Login</button>
                </form>
            </div>
         );
    }
}
 
export default Login;