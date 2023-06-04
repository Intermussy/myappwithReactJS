import React from "react";
import logo from './logo.svg';
import './App.css';

import Playlist from "../Playlist/Playlist";
import SearchBar from ".//SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../ultl/Spotify";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      SearchResults: [],
      PlaylistName: "New Playlist",
      playlistTracks: []
    }

    this.search=this.search.bind(this);
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.removeTrackSearch=this.removeTrackSearch.bind(this);
    this.doThese=this.doThese.bind(this);
  }

  search(term){
    Spotify.search(term).then(SearchResults => {
          this.setState({SearchResults: SearchResults});
    });
  }
  addTrack(track){
    let tracks=this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    track.push(track);
    this.setState({playlistTracks: tracks});
  }
  removeTrack(track){
    let tracks = this.state.playlistTracks;
    let trackSearch=this.state.SearchResults;
    tracks=tracks.filter(currentTrack => currentTrack.id !== track.id);
    trackSearch.unshift(track);
    this.setState({playlistTrack: tracks});
  }
  removeTrackSearch(track){
    let tracks=this.state.SearchResult
    tracks=tracks.filter(currentTrack => currentTrack.id!==track.id);
    this.setState({SearchResults});
  }
  doThese(track){
    this.addTrack(track);
    this.removeTrackSearch(track);
  }
  updatePlaylistName(name){
    this.setState({updatePlaylistName: name});
  }
  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track => track.url);
    Spotify.savePlaylist(this.state.PlaylistName, trackUris).then( () => {
      this.setState({
        updatePlaylistName : "New Playlist",
        playlistTracks:[]
      });
    });
  }

}

function App() {
  return (
    <div className="App">
      <h1>
        <a href="http://localhost:3000">Musicophile</a>
      </h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults SearchResults={this.state.SearchResult} onAdd={this.doThese}/>
          <Playlist playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onSave={this.savePlaylist}/>
          

        </div>
      </div>
    </div>
  );
}

export default App;
