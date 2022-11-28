import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import Button from "../../components/Button/Button";
import RumourCard from "../../components/RumorCard/Rumorcard";

import { useHistory } from 'react-router-dom'

import classes from "./Preview.module.css";

const Preview = () => {
    const history = useHistory()
    const data = history.location.state?.data
    console.log('passed data', data)

    return (
        <div className={classes.preview}>
            <Header title="Preview" subtitle="Here’s what will be published" />
            <RumourCard data={data} />

            <div className={classes.create__links}>
                <Link label="Edit" to={{ pathname: "/create", state: { data }}} iconBefore="chevronLeft" variant="secondary" />
                <Button label="Publish rumor" variant="primary" type="submit" onClick={() => {}} />
            </div>
        </div>
    )
}

export default Preview
