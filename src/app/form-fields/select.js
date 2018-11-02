import React from 'react';

export const Select = (props) => {
    return (
        <div className="form-group">
            <label>{props.title}</label>
            <select
                name={props.name}
                value={props.value}
                className="custom-select"
                {...props}
            >
                <option value="" disabled></option>
                {props.options.map(option => {
                    return (
                      <option
                          key={option}
                          value={option}
                          label={option}
                      >{option}
                      </option>
                    );
                })}
            </select>
        </div>
    )
};