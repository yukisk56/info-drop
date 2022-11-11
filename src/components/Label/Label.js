import PropTypes from 'prop-types'
import "./Label.css"

const Label = ({text}) => {
    return (
        <label className="label">{text}</label>
    )
}

export default Label

Label.propTypes = {
    text: PropTypes.string.isRequired
}