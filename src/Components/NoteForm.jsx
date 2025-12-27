import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitNote = () => {
    if (!title && !content) return;
    addNote({ title, content });
    setTitle("");
    setContent("");
  };

  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setContent((prev) => prev + " " + speechResult);
    };

    recognition.start();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 border border-gray-300 break-inside-avoid transition-all duration-300 hover:-translate-y-1 hover:shadow-xl fade-in rounded shadow">
      <input
        className="w-full border p-2 mb-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border p-2 mb-3 rounded"
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex gap-2 justify-center">
        <button
          onClick={submitNote}
          className="bg-yellow-400 text-gray-900 px-3 py-2 rounded font-semibold hover:bg-yellow-500 transition"
        >
          Add Note
        </button>

        <button
          onClick={startVoiceInput}
          className="bg-yellow-400 text-gray-900 px-3 py-2 rounded font-semibold hover:bg-yellow-500 transition"
        >
          Voice
        </button>
      </div>
    </div>
  );
};

export default NoteForm;
