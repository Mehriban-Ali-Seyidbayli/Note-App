import React, {useState} from 'react';
import MyContext from '.';
import {Alert} from 'react-native';

const Provider = ({children}) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(0);

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Design Engineer',
      description: 'First note description',
      date: '12:20 pm',
      read: false,
    },
    {
      id: 2,
      title: 'Software Engineer',
      description: 'Second note description',
      date: '12:20 pm',
      read: false,
    },
    {
      id: 3,
      title: 'Content Writer',
      description: 'Third note description',
      date: '12:20 pm',
      read: false,
    },
    {
      id: 4,
      title: 'Data Engineer',
      description: 'Fouth note description',
      date: '12:20 pm',
      read: false,
    },
  ]);

  const changeCount = () => {
    setCount(count + 1);
  };
  const changeMessage = text => {
    setMessage(text);
  };
  const addNote = item => {
    if (item) setNotes([...notes, item]);
    Alert.alert('Your note was added successfully!');
  };
  const deleteNote = id => {
    if (id) {
      const filteredNotes = notes.filter(item => item.id !== id);
      setNotes(filteredNotes);
      Alert.alert('Note deleted successfully!');
    } else {
      Alert.alert("There isn't a note like this.");
    }
  };
  const updateNote = (id, item) => {
    const updatedItems = notes.map(note =>
      note.id === id
        ? {
            ...note,
            title: item.title,
            description: item.description,
            read: true,
            date: '20:00',
          }
        : note,
    );
    setNotes(updatedItems);
    Alert.alert('Your note updated successfully!');
  };

  return (
    <MyContext.Provider
      value={{
        count,
        changeCount,
        message,
        changeMessage,
        notes,
        addNote,
        deleteNote,
        updateNote,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
