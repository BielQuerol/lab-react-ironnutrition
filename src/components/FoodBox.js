import React, {Component} from 'react'
import foods from '../foods.json'
import Form from '../components/Form.js'
import Search from '../components/Search.js'

class FoodBox extends Component {

    constructor (props){
        super (props)
        this.state = {
            foods: foods,
            
        }
    }

    showForm = () => {
        this.setState({isClicked: !this.state.isClicked})
    }

    addNewFood = (newFood) => {
        const copyFood = [...this.state.foods]
        copyFood.push(newFood)
        this.setState({foods: copyFood})
    }

    searchFood = (foodName) => {
        const copyFood = [...this.state.foods]
        const newFoodArray = copyFood.filter((element) => element.name.includes(foodName))
        this.setState({foods: newFoodArray})
    }

    render () {
        return (
        <>
            <div>
                {this.state.isClicked ? <Form  addFood={this.addNewFood}/> : null}
                <button onClick={this.showForm}>Add new food</button>
            </div>

            <Search searchFood={this.searchFood}/>

            <div className="box">

            {this.state.foods.map((food, index) => {
                return (
                        <article className="media">
                            <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={food.image} alt='hola'/>
                            </figure>
                            </div>
                            <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories}</small>
                                </p>
                            </div>
                            </div>
                            <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                <input className="input" type="number" value="1" />
                                </div>
                                <div className="control">
                                <button className="button is-info">
                                    +
                                </button>
                                </div>
                            </div>
                            </div>
                        </article>
                 )
            })}
            </div>
        </>
        )
    }
}

export default FoodBox 