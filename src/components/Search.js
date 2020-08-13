
import React, {Component} from 'react'

class Search extends Component {
    constructor (){
        super ()
        this.state = {
            name: ''
        }
    }

    handleInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({[name] : value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.searchFood(this.state.name)
        this.setState({
            name: '',
        })
    }

    render () {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="field">
                <div className="control">
                    <input className="input is-danger" name='name' type="text" placeholder="Search..." value={this.state.name} onChange={this.handleInput}/>
                </div>
                </div>
            </form>

        )
    }
}

export default Search;