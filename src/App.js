import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoPage from './todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleColor: '',
      items : [],
      // toggled: false
      toggledSearch: false
    }
  }

  onChange = (event) => {
    // this.state.titleColor = event.target.value;
    console.log('1p, onChange')
    this.setState({
      titleColor: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.titleColor.length == 0) {
      return;
    }
    console.log("onSubmit", this.state.items)
    const newItem = {
      text: this.state.titleColor,
      id: Date.now(),
      toggled: false,
      done: false,
      search: false
    };

    this.setState({
      items: [
        ...this.state.items,
        newItem,
      ],
      titleColor: ''
    });
     console.log("after", this.state.items)
  }
 
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('2p shouldComponentUpdate: nextState', nextState)
  //   // console.log('2p state', this.state)
  //   return true;
  // }
  onClickClose = (index) =>{
     this.setState({
            items: [
              ...this.state.items.slice(0, index),
              ...this.state.items.slice(index+1)
            ]
        });
  }
  markCompleted = (id) =>{
    var updatedItems = this.state.items.map(item => {
      if(id === item.id){
        item.done = !item.done;
      }
      return item;
    });

    this.setState({
      items: [].concat(updatedItems)
    });

  }
  markCompletedAll = ()=>{
    var updatedItemsAll = this.state.items.map(item => {
      if(item.done == false)
        item.done = !item.done;
      return item;
    });
   //console.log("updta:", this.state);
   //var updatedItemsAll = !this.state.items.done
   //console.log(this.state.items)

    this.setState({
      items: [].concat(updatedItemsAll)
    });

  }

  updateTask = (index, text) => {
    this.setState({
      items: [
         ...this.state.items.slice(0,index),
        {
          ...this.state.items[index],
          text: text,
        },
        ...this.state.items.slice(index+1)
      ]
    })
  }
  ItsClick = (index) => {
    this.setState({
      items: [
        ...this.state.items.slice(0,index),
        {
          ...this.state.items[index],
          toggled: !this.state.items[index].toggled,
        },
        ...this.state.items.slice(index+1)
      ]
    }) 
  }
  onSearch= (event, text) => {
     event.preventDefault();
    var searchItemsAll = this.state.items.map(item => {
      if(text === item.text){
        item.search = !item.search;
        this.state.toggledSearch =  !this.state.toggledSearch;
      }
      return item;
    });

    this.setState({
      items: [].concat(searchItemsAll),
      toggledSearch : this.state.toggledSearch
    });
    console.log("toggledSearch:",this.state.toggledSearch)
  }
   
  render() {
    // if(this.state.items[0] !== undefined){
    //  console.log("mang: ",this.state.items[0].text); 
    // }
    
    return (

      <div className="App" style={{ backgroundColor: 'pink'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 id="title"> Looks like another Monday</h3>
          <form onSubmit={this.onSubmit}>
            <input placeholder="What needs to be done today?" type="text" id="parent" value={this.state.titleColor} onChange={this.onChange} />
            <button>+</button>
          </form>
        </header>
        <TodoPage titleColor={this.state.titleColor} ItsClick={this.ItsClick} onClickClose={this.onClickClose}  items={this.state.items} markCompleted={this.markCompleted} markCompletedAll={this.markCompletedAll} name={'duong'} age={'2'} updateTask={this.updateTask} onSearch={this.onSearch} toggledSearch={this.state.toggledSearch}/>

      </div>
    );

  }
}

export default App;


// Truyen tu thang con => thang cha
