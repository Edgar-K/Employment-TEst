import React from 'react';
import './App.css';
import AddForm from './AddForm';
import List from './List';
import getId from './getId';
import generateString from './randomString';

function App() {
    const [list, setList] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const item = {
            id: getId(),
            label: generateString(),
        };

        setList(prevState => [...prevState, item]);
        setInputValue('');
    }

    const handleRemove = (index) => {
        const deletedArray =  [...list];
        deletedArray.splice(index, 1);
        setList(deletedArray)
    };

    const filteredList = React.useMemo(() => {
        const query = inputValue.toLowerCase();
        return list.filter(item => item.label.toLowerCase().indexOf(query) >= 0);
    }, [list, inputValue]);

    return (
        <div className="App">
            <AddForm
                onAdd={handleAdd}
                onChange={handleChange}
                inputValue={inputValue}
            />
            <List
                data={filteredList}
                onRemove={handleRemove}
            />
        </div>
    );
}

export default App;
