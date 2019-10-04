import React from "react";

export default class Modal extends React.Component {
  state = {
    addlistIngredients: [{
      name: '',
      grams: undefined
    }],
    addNameDish: ''
  };

  handleNewDishName = (event) => {
    this.setState({
      addNameDish: event.target.value
    })
  };

  addIngred (event){
    event.preventDefault();
    this.setState(prewState => {
      const list = prewState.addlistIngredients;
      list.push({
        name: '',
        grams: undefined
      });
      return{
        addlistIngredients: list
      }
    })
  };

  handleNewDishIngred = (event,key) => {
    const name = event.target.name;
    event.persist();
    this.setState(prewState => {
      const list = prewState.addlistIngredients;
      list[key][name] = event.target.value;
      return {
        addlistIngredients: list
      }
    });
  };

  saveDish = (event) => {
    event.preventDefault();
    let sum = 0;
    this.state.addlistIngredients.forEach(item => {
      sum += +item.grams
    });
    const dish = {
      nameDish : this.state.addNameDish,
      listIndgredients: this.state.addlistIngredients,
      totalWeigth: sum,
      isVisible: true
    };
    this.props.onSaveDish(dish);
  };

  render() {
    if(!this.props.show){
      return null;
    }
    return (
      <div className="addDish">
        <button onClick={this.props.onClose} className="close">X</button>
        <h3>Add new Dish</h3>
        <p>Please enter all informations about your new dish</p>
        <form className="addDishForm" action="">
          <label >
            <span>Dish name</span>
            <input type="text"
                   value={this.state.addNameDish}
                   onChange={this.handleNewDishName} />
          </label>
          <div className="ingredients">
            <label>
              <span>Ingredients :</span>
              {this.state.addlistIngredients===0
                ? ''
                : (this.state.addlistIngredients.map((item,key) =>
                    <div key={'div_inputs_'+key}>
                      Name <input type="text"
                                  value={item.name}
                                  name="name"
                                  key={'name_'+key}
                                  onChange={(e) => this.handleNewDishIngred(e,key)}
                    />
                      Grams <input type = "number"
                                   value={item.grams}
                                   name="grams"
                                   key={'grams_'+key}
                                   onChange={(e) => this.handleNewDishIngred(e,key)}
                    />
                    </div>
                  )
                )}
              <button onClick={(event)=>this.addIngred(event)}> Add new </button>
            </label>
          </div>

          <input type="submit" onClick={this.saveDish} value="Add" className="submit"/>
        </form>
      </div>
    );
  }
}