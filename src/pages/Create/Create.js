import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import Button from "../../components/Button/Button";
import DateInputGroup from "../../components/Form/DateInputGroup/DateInputGroup";
import InputGroup from "../../components/Form/InputGroup/InputGroup";
import classes from "./Create.module.css";
import { useHistory } from 'react-router-dom'

const Create = () => {
    const history = useHistory()
    const data = history.location.state?.data
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log("here",data);
        history.push({
            pathname: '/preview',
            state: {
                data
            }
        })
    };

    return (
        <div className={classes.create}>
            <Header title="New Rumour" subtitle="Enter the details of the rumour you heard" />
            <form onSubmit={handleSubmit(onSubmit)}>

                <DateInputGroup register={register} error={errors} />
                <InputGroup key="company-name" label="What company was it about?" placeholder="Company Name" name="companyName" isRequired register={register} error={errors.companyName} value={data?.companyName} />
                <InputGroup key="million" label="How many millions?" placeholder="999.999" name="million" register={register} error={errors.million} value={data?.million} />
                <InputGroup key="currency-code" label="In what currency?" placeholder="Currency code" name="currencyCode" register={register} error={errors.currencyCode} value={data?.currencyCode} />
                <InputGroup key="codename" label="Source codename" placeholder="codename" name="codename" register={register} error={errors.codename} value={data?.codename} />

                <div className={classes.create__links}>
                    <Link label="Discard" to="/" iconBefore="chevronLeft" variant="secondary" />
                    <Button label="Validate and preview" variant="primary" type="submit" onClick={() => {}} />
                </div>
            </form>
        </div>
    )
}

export default Create