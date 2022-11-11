import React from "react";
import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import "./Create.css";

const Create = () => {
    return (
        <div className="create">
            <Header title="New Rumour" subtitle="Enter the details of the rumour you heard" />
            <div className="create__links">
                <Link label="Discard" to="/" iconBefore="chevronLeft" variant="secondary" />
                <Link label="Validate and preview" to="/" variant="primary" />
            </div>
        </div>
    )
}

export default Create