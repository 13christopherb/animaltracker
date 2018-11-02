import React from 'react';

export const Select = ({input, title, options, ...other}) => {
    return (
        <div className="form-group">
            <label>{title}</label>
            <select
                className="custom-select"
                value={input.value}
                onChange={input.onChange}
                {...other}
            >
                <option value="" disabled></option>
                {options.map(option => {
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