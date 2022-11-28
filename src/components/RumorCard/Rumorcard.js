import React from 'react'
import Tag from '../Tag/Tag'

import classes from './RumorCard.module.css'

const RumourCard = ({ data }) => {
    return (
        <div className={classes.rumorCardWrapper}>
            <div className={classes.rumorCard}>
                <h3 className={classes.rumorCardTitle}>NEW RUMOR</h3>
                <hr className={classes.rumorCardHr} />

                <span className={classes.rumorCardPublisherName}>Barnacles</span>
                <Tag label="Trusted Source" />

                <p className={classes.rumorCardSupportText}>says</p>

                <span className={classes.rumorCardCompanyName}>{data?.companyName}</span>

                <p className={classes.rumorCardSupportText}>will be raising</p>

                <div className={classes.rumorCardPrice}>
                    <span>{data?.currencyCode || 'GBP'}</span>
                    <span className={classes.rumorCardPriceAmount}>{data?.million}</span>
                    <span>m</span>
                </div>
            </div>
        </div>
    )
}

export default RumourCard