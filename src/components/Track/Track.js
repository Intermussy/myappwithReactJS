import React from "react";
import "./Track.css";

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            term:""
        };

        this.addTrack=this.addTrack.bind(this);
        this.removeTrack=this.removeTrack.bind(this);
    }

    addTrack(event){
     this.props.onAdd(this.props.track)
    }
    removeTrack(){
        this.props.onRemove(this.state.track);
    }

    renderAction(){
        if(this.props.isRemoval){
            return{
                <button className="Track-action" onClick={this.removeTrack}> - </button>
            };
        }
    }

    render(){
        return{
            <div className="SearchBar">
            <><input placeholder="Enter song, album or artist" onChange={this.handleTermChange} onKeyUp={this.handleEnter} />
            <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        };
    }
}

export default SearchBar;