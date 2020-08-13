import React, {Component} from 'react'


class Form extends Component {
    constructor (){
        super ()
        this.state = {
            name: "",
            calories: "",
            image: ""

        }
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
        })
    }

    handleInput = event => {
        const name = event.target.name
        const value = event.target.value
        this.setState({[name] : value})
    }

    // createName(event) {
    //     this.setState({
    //         name: event.target.value
    //     });
    // }

    // createCalories(event) {
    //     this.setState({
    //         calories: event.target.value
    //     })
    // }

    // createImage(event) {
    //     this.setState({
    //         image: event.target.value
    //     })
    // }

    render () {
        return (
            <> 
                <form onSubmit={this.handleFormSubmit}>
                
                    <label>Nombre</label>
                    <input className="input is-primary" name='name' type="text" value={this.state.name} placeholder="Name" onChange={this.handleInput}/>
                   
        

                
               
                    <label>Calorias</label>
                    <input className="input is-primary" name="calories"type="text" value={this.state.calories} placeholder="Calories" onChange={this.handleInput}/>
                 

               
                    <label>Imagen</label>
                    <input className="input is-primary" name="image" type="text" value={this.state.image} placeholder="images" onChange={this.handleInput}/>
        
                <button >Submit</button>
                </form>
            </> 
        )
    }
}

export default Form;