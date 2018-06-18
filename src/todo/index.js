import React, { Component } from 'react';

class TodoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childBackground: "#222",   
            // toggled: false     
            textSearch:"",
    
        }
    }
    onChangeText = (event) => {
        this.setState({
            childBackground: event.target.value,
        });
    }

    onChangeSearch = (event) => {
        this.setState({
          textSearch: event.target.value,
        })
    }

    onChangeEachTask = (event, index) => {
        const updateTask = this.props.updateTask;
        updateTask(index, event.target.value)
    }
    componentWillReceiveProps = (nextProps) => { // arrow fucnction
      
    }
    shouldComponentUpdate = (props, state) => {
        return true;
    }
    onPressButton = () => {
        setTimeout(() => {
            this.setState({
                childBackground: 'black'
            })
        }, 5000)
    }
 
    

    render() { 
        const { childBackground } = this.state; 
        // const childBackground = this.state.childBackground
        console.log("sss:", this.props.items);
      
        return (
            <div style={{ backgroundColor: childBackground, flex: 1}}>
                <input id="son" type="text" name="name" value={childBackground} onChange={this.onChangeText}/>
                <button onClick={this.onPressButton} >
                Change color after 5s
                </button>
                <h1 id="title">List ToDo</h1>
                
                <input type="checkbox" className="checkbox-all" onClick={this.props.markCompletedAll} /> Hoan thanh het tat ca
                <ul >
                    {this.props.toggledSearch?    
                        
                        <div>  
                            <form onSubmit={(event) => this.props.onSearch(event, this.state.textSearch)}>
                                <button className="btn-search">Back</button>
                            </form>
                            {this.props.items.map((item, index) => (
                                <div className="list-todo">
                                    {item.search?
                                        <li  key={item.id}>
                                            <form>
                                                <input type="checkbox" className="checkbox" onChange={() => this.props.markCompleted(item.id)} />
                                                {item.done ?
                                                    <del><label className="done" >{item.text}</label></del>
                                                    : <label>{item.text}</label>
                                                }
                                                <button type="button" className="close" onClick={() => this.props.onClickClose(index)}>&times;</button>                            
                                                {item.toggled ? 
                                                 <div>
                                                    <input type="text" value={item.text} onChange={(event) => this.onChangeEachTask(event, index)} />
                                                    <span className="ok" onClick={() => this.props.ItsClick(index)}>OK</span>
                                                </div>
                                                :<span className="edit" onClick={() => this.props.ItsClick(index)}>Edit</span>}                               
                                            </form>
                                        </li>
                                    :""}
                                    
                                </div>
                                
                            ))}

                        </div>

                        :

                        <div>  
                        <form onSubmit={(event) => this.props.onSearch(event, this.state.textSearch)}>
                            <input type="text" className="search" value={this.state.textSearch} onChange={this.onChangeSearch}/>
                            <button className="btn-search"><i className="fas fa-search"></i></button>
                        </form>
                            <div className="list-todo"> 

                            {this.props.items.map((item, index) => (
                                <li  key={item.id}>
                                    <form >
                                        {item.done ?
                                            <div className="class1">
                                                <input type="checkbox" className="checkbox" checked="checked" onChange={() => this.props.markCompleted(item.id)} />
                                                <del><label className="done text-item" >{item.text}</label></del>
                                            </div>
                                            :
                                            <div className="class1"> 
                                                <input type="checkbox" className="checkbox" onChange={() => this.props.markCompleted(item.id)} />
                                                <label className="non-done text-item" >{item.text}</label>
                                            </div> 
                                            
                                        }
                                        
                                        {item.toggled ? 
                                         <div className="class3">
                                            <input type="text" value={item.text} onChange={(event) => this.onChangeEachTask(event, index)} />
                                            <span className="ok" onClick={() => this.props.ItsClick(index)}>OK</span>
                                        </div>
                                        :<span className="class3" onClick={() => this.props.ItsClick(index)}>Edit</span>}      
                                        
                                        <div className="class2">
                                            <button type="button" className="close" onClick={() => this.props.onClickClose(index)}>&times;</button>                            
                                        </div>
                                        <div className="clr"></div>                         
                                    </form>
                                </li>
                            ))}
                            </div>
                        </div>

                    }
                    
                </ul>
            </div>
        )
    }
}
export default TodoPage;
