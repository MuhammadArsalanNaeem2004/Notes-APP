import React from "react";

const NoteCard = ({ note, onDelete }) => {
  return (
    <div
      className="bg-white rounded shadow p-4 mb-4 break-inside-avoid transition-all duration-300 hover:-translate-y-1 hover:shadow-xl fade-in"
    >
      <div className="flex justify-center items-center flex-col">
        <h3 className="font-semibold text-3xl text-gray-800">{note.title}</h3>

        <p className="text-lg mt-2 text-gray-700 whitespace-pre-wrap">
          {note.content}
        </p>
      </div>

      <div className="flex justify-center py-4">
        <button
          onClick={onDelete}
          className="bg-yellow-400 text-gray-900 text-sm px-3 py-1.5 rounded font-semibold transition-all duration-200 hover:bg-yellow-500active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
