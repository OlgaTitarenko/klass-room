import React from 'react';

import ListDishes from "./Data/List";
import DishItem from "./Components/DishItem";
import Modal from "./Components/Modal";
import Header from "./Components/Header"

import './App.css';

class App extends React.Component{
  state = {
    showModal: false,
    repeat: 1,
    loading: false,
    listDishes:[]
  };

  componentDidMount() {
    this.setState({
      listDishes: ListDishes
    });
    this.refs.myscroll.addEventListener("scroll", () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
        this.refs.myscroll.scrollHeight
      ) {
        this.loadMore();
      }
    });
  };

  searchDish = (search) => {
    this.setState(prewState => {
      const list = prewState.listDishes
        .filter(dish =>
          dish.nameDish.toLowerCase().includes(search.toLowerCase())
        );
      const listIngred = prewState.listDishes.map((dish) => {
          if  (dish.listIndgredients.filter(ingreds =>
            ingreds.name.toLowerCase().includes(search.toLowerCase())).length !==0) {
            return dish;
          }
        }
      );
      const listDishes = prewState.listDishes.map(dish => {
        if (!list.includes(dish) && !listIngred.includes(dish)) {
          dish.isVisible = false;
        } else {
          dish.isVisible = true;
        }
        return dish;
      });
      return {
        listDishes
      }
    })
  };

  showModal = e => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  addDish = (dish) => {
    this.setState(prewState => {
      const list = prewState.listDishes;
      list.push(dish);
      return {
        listDishes: list
      }
    })
  };

  showItems() {
    const items = [];
    const list = this.state.listDishes.filter(item=>item.isVisible===true);
    for ( let i=0; i<this.state.repeat; i++) {
      for (let j=0; j<list.length; j++) {
        items.push(<DishItem key={Math.random()} value={list[j]}/>)
      }
    }
    return items;
  };

  loadMore() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ repeat: this.state.repeat + 1, loading: false });
    }, 1000);
  };

  render() {
    return (
      <div
        className="App"
        ref="myscroll"
      >
        <Header onStartSearch={this.searchDish} />
        <div className="dishList container">
          <div className="dishListHeader">
            <div>
              <h2>Meat Dishes</h2>
              <p>Some of the best meat dishes</p>
            </div>
            <button className="btn" onClick={e => {
              this.showModal();
            }}
            > + Add new dish </button>
          </div>

          <div className="List">
            {this.showItems()}
          </div>

          {this.state.loading
            ? <p>loading...</p>
            : ""}
        </div>
        <Modal show={this.state.showModal} onClose={this.showModal} onSaveDish={this.addDish}/>
      </div>
    );
  }
}

export default App;
