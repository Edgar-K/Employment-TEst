import React from 'react';

export default function AddForm(props) {
    const { onAdd, onChange, inputValue } = props;
    return <form className="form" onSubmit={onAdd}>
        <input className="form-input" type="text" placeholder="search" onChange={onChange} value={inputValue}/>
        <button className="submit-button" type='submit'>+</button>
    </form>
}
