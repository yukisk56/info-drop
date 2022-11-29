import React, { useState } from 'react'
import PropTypes from "prop-types";
import Button from '../../Button/Button'
import Label from "../../Label/Label"
import StatusMessage from "../../StatusMessage/StatusMessage";

import classes from './DateInputGroup.module.css'

const DateInputGroup = ({ register, error }) => {
    const [today, setToday] = useState({})
    const applyCurrentDate = () => {
        const date = new Date()
        setToday({
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
        })
    }

    return (
        <div className={classes.dateInputGroup}>
            <Label text="When did you hear it?" />
            <div className={classes.dateInputGroupFields}>
                <div className={classes.dateInputGroupFieldsInput}>
                    <label>Day</label>
                    <input placeholder="dd" name="date" type="number" label="Day" {...register('date', { required: 'The field is required'})} defaultValue={today.date} />
                </div>
                <div className={classes.dateInputGroupFieldsInput}>
                    <label>Month</label>
                    <input placeholder="mm" name="month" type="number" label="Month" {...register('month', { required: 'The field is required'})} defaultValue={today.month} />
                </div>
                <div className={classes.dateInputGroupFieldsInput}>
                    <label>Year</label>
                    <input placeholder="yyyy" name="year" type="number" label="Year" {...register('year', { required: 'The field is required'})} defaultValue={today.year} />
                </div>

                <Button label="Today" variant="tertiary" onClick={applyCurrentDate} />
            </div>
            { (error.date || error.month || error.year ) && <StatusMessage label="This field is required" variant="error"/> }
        </div>
    )
}

export default DateInputGroup

DateInputGroup.propTypes = {
    register: PropTypes.func,
    error: PropTypes.object
};

DateInputGroup.defaultProps = {
    register: undefined,
    error: undefined,
}