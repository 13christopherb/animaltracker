import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';

export const DatePickerInput = ({input:{value, ...input}, ...props }) => {
    console.log(value);
    return (
        <div>
            <DatePicker {...input} {...props} selected={value ? moment(value) : null} />
        </div>
    );
}