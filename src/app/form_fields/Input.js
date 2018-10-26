import React from 'react';

export const Input = (props) => {
    return (
        <div className="form-group">
            <label className="form-label">{props.title}</label>
            <input
                className="form-control"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
            />
        </div>
    )
};