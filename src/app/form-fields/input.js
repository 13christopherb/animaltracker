import React from 'react';

export const Input = ({input, title, ...other}) => {
    return (
        <div className="form-group">
            <label className="form-label">{title}</label>
            <input
                className="form-control"
                value={input.value}
                onChange={input.onChange}
                {...other}
            />
        </div>
    )
};