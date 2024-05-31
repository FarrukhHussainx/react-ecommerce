import React, { useState } from "react";
import UserContext from "./UserContext";
const UserData = (props) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState();
  const userLogin = async (userx) => {
    console.log("from context ", user);
    setUser(userx);
    console.log("from context ", userx);
    console.log("from context ", user);
  };
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1553859943-a02c5418b798?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Long Sleve T-Shert",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "",
      title: "Sleve T-Shert",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "",
      title: "Hat and Gee",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <UserContext.Provider value={{ data, userLogin, user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserData;

//////////////////////////////////////////
{
  /* <UserContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, fetchAllNote }}
    >
      {props.children}
    </UserContext.Provider> */
}
/////////////////////////////////////////////

// const notesInitial = [{ name: farrukh }, { name: aliza }];
// const [notes, setNotes] = useState(notesInitial);

// //fetch all notes
// const fetchAllNote = async (noteq) => {
//   const url = "http://localhost:5000/api/notes/fetchallnotes";
//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token":
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//     },
//   });
//   const json = await response.json();
//   setNotes(json);
// };
// //Add a note
// const addNote = async (noteq) => {
//   const url = "http://localhost:5000/api/notes/createnotes";
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token":
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//     },
//     body: JSON.stringify({
//       title: noteq.title,
//       description: noteq.description,
//       tag: noteq.tag,
//     }),
//   });
//   fetchAllNote();
//   //const note={
//   //   name:"" only for understanding
//   // }
//   // setNotes(notes.concat(note));
// };

// const deleteNote = async (notex) => {
//   const url = `http://localhost:5000/api/notes/deletenote/${notex}`;
//   const response = await fetch(url, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token":
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//     },
//   });
//   const json = await response.json();
//   // console.log("delete is called " + notex);
//   const newNote = notes.filter((note) => note._id !== notex);
//   fetchAllNote();
//   // setNotes(newNote);
//   // console.log(notes);

//   //setNotes(json);
// };
// const updateNote = async (id, title, description, tag) => {
//   const url = `http://localhost:5000/api/notes/updatenote/${id}`;
//   const response = await fetch(url, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token":
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//     },
//     body: JSON.stringify({ title, description, tag }),
//   });
//   const json = response.json();
//   console.log(json);
//   for (let index = 0; index < notes.length; index++) {
//     const element = notes[index];
//     if (element._id === id) {
//       element.title = title;
//       element.description = description;
//       element.tag = tag;
//     }
//   }
// };
