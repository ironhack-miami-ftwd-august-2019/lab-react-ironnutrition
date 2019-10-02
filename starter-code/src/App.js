import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import AddFood from './AddFood'
import TodayFood from './TodayFood'
console.log(foods)

class App extends Component {

  state = {
    allFoods : foods, 
    showFoods: foods,
    show: false,
    listOfFoods: {
    //   "Pizza":{
    //     quantity: 5,
    //     calories: 500
    //   },
    //   "Salad": {
    //     quantity: 3,
    //     calories: 20
    //   },
    //   "Kiwi" : {
    //     quantity: 6,
    //     calories: 99
    //   }
    // }
    } 
  }

  addTheFoodToFoodBoxes = (food) => { 
    let newShowFoods = [...this.state.showFoods] //copy foods 
    newShowFoods.unshift(food) //add food to the beginning 
    this.setState({  //add new foods 
      showFoods:newShowFoods,
      allFoods: newShowFoods,
      show: false
    })
    
  }

  showFoodBoxes = () => { //show all the foods 
    return this.state.showFoods.map((eachFood,i) =>{
      return <FoodBox key={i} {...eachFood} addToList={this.addToList} />// name={eachFood.name} calories={eachFood.calories}
    })
  }

  handleChange = (e) => {
    let newShowFoods = this.state.allFoods.filter(food=>{ //filter foods because it never changes 
      return (
        food.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    })
    this.setState({
      showFoods: newShowFoods
    })
  }

  addToList = (food) => {
    console.log(food)
    let copyOfListOfFoods = { ...this.state.listOfFoods }
    copyOfListOfFoods[ food.name ] = food
    this.setState({
      listOfFoods:copyOfListOfFoods
    })
  }

  render() {
    return (
      <div className="App">
          <TodayFood listOfFoods={this.state.listOfFoods}/>
          <input type="text" placeholder="search" onChange={this.handleChange} />
          <br></br>
          { this.state.show ? 
            <AddFood addFood={this.addTheFoodToFoodBoxes}/>
          :
            <button onClick={ ()=>this.setState( {show:true} )} >Add Food</button>
          }
          {this.showFoodBoxes()}
      </div>
    );
  }
}

export default App;
