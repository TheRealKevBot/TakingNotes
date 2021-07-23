import React from 'react';
import { NewNoteInput } from './components/NewNoteInput'
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from './redux/reducers/Notes';
import { addNote } from './actions'


function App() {

  const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes);
  const dispatch = useDispatch();
  const onAddNote = (note:string) => {
    dispatch(addNote(note));
  }

  
  return (
    <div className="App">
      <NewNoteInput addNote={onAddNote}/>
      <hr />
      <ul>
        {notes.map((note) => {
              return <li key={note}>{note}</li>
            }
          )
        }
      </ul>
    </div>
  );
}

export default App;
