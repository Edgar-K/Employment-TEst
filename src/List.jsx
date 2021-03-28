import React from 'react';

export default function List(props) {
    const {data, onRemove} = props;
    
    return <div className='list'>
        {
            !data.length
                ? <p>Nothing was found</p>
                : data.map((item, index) => <div className="list-item-row" key={item.id}>
                    {item.label}
                    <button className="remove-button" onClick={() => onRemove(index)}>X</button>
                </div>)
        }
    </div>
}
