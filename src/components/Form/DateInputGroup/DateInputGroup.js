import PropTypes from "prop-types";

import Button from '../../Button/Button'
import Label from "../../Label/Label"
import StatusMessage from "../../StatusMessage/StatusMessage";

import classes from './DateInputGroup.module.css'

const DateInputGroup = ({ register, error }) => {
    return (
        <div className={classes.dateInputGroup}>
            <Label text="When did you hear it?" />
            <div className="date-input-group-fields">
                <input placeholder="dd" name="date" type="number" label="Day" {...register('date', { required: 'The field is required'})} />
                <input placeholder="mm" name="month" type="number" label="Month" {...register('month', { required: 'The field is required'})} />
                <input placeholder="yyyy" name="year" type="number" label="Year" {...register('year', { required: 'The field is required'})}
 />
                <Button label="Today" variant="tertiary" onClick={() => {}} />
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