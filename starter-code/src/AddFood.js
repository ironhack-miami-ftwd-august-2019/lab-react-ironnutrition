import React, { Component } from 'react';

class AddFood extends Component {
    state = {
        name:'',
        calories: '',
        image: '',
        quantity: ''
    }

    handleSubmit = (e) => { //handles form submit 
        e.preventDefault()
        this.props.addFood(this.state)

    }

    handleChange = (e) => { //handles typing into input 
        this.setState({
            [e.target.name] : e.target.value
        })
    }   

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
                <input type="text" name="calories" placeholder="calories" onChange={this.handleChange}/>
                <input type="text" name="image" placeholder="image" onChange={this.handleChange} />
                <input type="text" name="quantity" placeholder="quantity" onChange={this.handleChange}/>
                <input type="submit" value="Submit!!!" />
            </form>
        );
    }
}

export default AddFood;