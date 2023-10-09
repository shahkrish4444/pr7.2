
import React, { useState } from 'react';

const CrudOperation = () => {
 const [items, setItems] = useState([]);
 const [text, setText] = useState('');
 const [editItem, setEditItem] = useState({ id: null, text: '' });

 const addItem = (e) => {
    e.preventDefault();
    if (!text) return;
    const newItem = { text, id: Date.now() };
    setItems([...items, newItem]);
    setText('');
 };

 const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
 };

 const editItemText = (e) => {
    setEditItem({ ...editItem, text: e.target.value });
 };

 const updateItemText = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, text: editItem.text } : item)));
    setEditItem({ id: null, text: '' });
 };

 return (
    <center>
    <div className=''>
      <form onSubmit={addItem} className='form'>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      <ul className='detail'>
        {items.map((item) => (
          <li key={item.id}>
            {item.id === editItem.id ? (
              <input type="text" value={editItem.text} onChange={editItemText} />
            ) : (
              item.text
            )}
            <button onClick={() => setEditItem({ id: item.id, text: item.text })}> Edit </button>
            <button onClick={() => updateItemText(item.id)}> Update</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </center>
 );
};

export default CrudOperation;