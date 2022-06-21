import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote(props){
  return (
    <Note 
      id = {props.id}
      title = {props.title}
      content = {props.content} 
    />
  );
}

function App(){
    return (
    <div>
      <Header />
      {/* <Note /> */}
      {notes.map(createNote)}
      <Footer />
    </div>
    
    );
}

export default App;