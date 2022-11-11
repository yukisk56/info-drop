import React from "react";
import { useForm } from "react-hook-form";

import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import DateInputGroup from "../../components/Form/DateInputGroup/DateInputGroup";
import InputGroup from "../../components/Form/InputGroup/InputGroup";
import "./Create.css";

const Create = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => { console.log(data); };

    return (
        <div className="create">
            <Header title="New Rumour" subtitle="Enter the details of the rumour you heard" />
            <form onSubmit={handleSubmit(onSubmit)}>

                <DateInputGroup value="When did you hear it?" placeholder="" />
                <InputGroup key="company-name" label="What company was it about?" placeholder="Company Name" name="company-name" value="" register={register} />
                <InputGroup key="million" label="How many millions?" placeholder="999.999" value="" showTag name="million" register={register}/>
                <InputGroup key="currency-code" label="In what currency?" placeholder="Currency code" name="currency-code" value="" showTag register={register}/>
                <InputGroup key="codename" label="Source codename" placeholder="codename" name="currency-code" value="" showTag register={register}/>

                <div className="create__links">
                    <Link label="Discard" to="/" iconBefore="chevronLeft" variant="secondary" />
                    <Link label="Validate and preview" to="/" variant="primary" />
                </div>
            </form>
        </div>
    )
}

export default Create