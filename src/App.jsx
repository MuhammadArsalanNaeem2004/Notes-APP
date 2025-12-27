import { useState, useEffect } from "react";
import NoteForm from "./Components/NoteForm";
import NoteCard from "./Components/NoteCard";
import NotesAppLogo from "./assets/NOTESAPPLOGO.png";

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-center gap-3">
        <img
          src={NotesAppLogo}
          width="28%"
          alt="Notes App Logo"
          className="rounded"
        />
        {/* <h1 className="text-3xl font-bold text-gray-800">Notes App</h1> */}
      </div>
      <NoteForm addNote={addNote} />
      <div className="mt-6 px-2">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {notes.map((note, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <NoteCard note={note} onDelete={() => deleteNote(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
