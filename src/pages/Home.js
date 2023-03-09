import './../styles/Home.css';
import { useParams } from "react-router-dom";
import NotePreview from "./../elements/NotePreview";
import { useOutletContext } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import Editor from './../elements/Editor';
import Viewer from '../elements/Viewer';
import { useNavigate } from "react-router-dom";



const Home = () => {

  const navigate = useNavigate();

  const { elementID, mode } = useParams();
  const [navigationBarState] = useOutletContext();
  const [body, setBody] = useState(<></>)

  useEffect(()=>{
    if (elementID && noteList.length > elementID) {
      if (mode === "edit") {
        let editor = new Editor
        console.log(editor.return())
        setBody(<div className='content-container'>{editor.return}</div>)
      } else { 
        setBody(<div className='content-container'>{Viewer(noteList[parseInt(elementID)])}</div>)
      }
    } else {
      navigate(`/notes`)
      setBody(<div className='content-container'><div className='body-placeHolder-container'><div className='body-placeHolder-text'>Select a note, or create a new one.</div></div></div>)
    }
  }, [elementID, mode])

  function makeElements(item) {
    return <NotePreview text={item.text} title={item.title} date={item.date}></NotePreview>
  }

  const [noteList, setNoteList] = useState( 
    [
      // { 
      //   text: "<< Place Holder Text >>", 
      //   title: "Untitled", 
      //   uuid: "PreSet01", 
      //   date: "No Selected Date"
      // },
      // {
      //   text: "<< Place Holder Text >>", 
      //   title: "Untitled", 
      //   uuid: "PreSet02", 
      //   date: "No Selected Date"
      // },
      // {
      //   text: "<< Place Holder Text >>", 
      //   title: "Untitled", 
      //   uuid: "PreSet03", 
      //   date: "No Selected Date"
      // }
    ]
  )

  const AddNewNote = (listLenght) => {
    setNoteList([...noteList, {
      text: "<< Place Holder Text >>", 
      title: "Untitled", 
      uuid: uuidv4(), 
      date: "No Selected Date"
    }])
    navigate(`/notes/${parseInt(listLenght)}/edit`)
  }

  const SaveNote = ()  => {

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    
    const formatDate = (when) => {
      const formatted = new Date(when).toLocaleString("en-US", options);
      if (formatted === "Invalid Date") {
          return "";
      }
      return formatted;
    };

    const dateTime = document.getElementById('date_time_edit').value
    const currentNote = noteList[elementID]
    const quill = document.querySelector('ql-editor').ELEMENT_NODE
    console.log(quill)

    setNoteList([...noteList, {
      text: "<< Place Holder Text >>", 
      title: "Untitled", 
      uuid: currentNote.uuid, 
      date: dateTime
    }])

    console.log(noteList)

    // const nextList = noteList.map(note => {
    //   if (note.uuid === 'square') {
    //     // No change
    //     return note;
    //   } else {
    //     // Return a new circle 50px below
    //     return {
    //       ...note,
    //       y: note.y + 50,
    //     };
    //   }
    // });
    // // Re-render with the new array
    // setNoteList(nextList);

    navigate(`/notes/${elementID}`)
  }

  const DeleteNote = ()  => {
    console.log("DeleteNote")
  }

  
  return (
    <div className='body'>
      <div className='navigation-bar'>
        <div className='navigation-header'>
          <div>Notes</div>
          <button onClick={() => {AddNewNote(noteList.length)}}>+</button>
        </div>
        <div className='navigation-items'>
          {noteList.map(makeElements)}
        </div>
      </div>
      {body}
    </div>
  );
}

export default Home;
