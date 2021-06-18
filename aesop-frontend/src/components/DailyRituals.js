import React from 'react'
import './DailyRituals.css'
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function DailyRituals({name,title,body,image,button}) {
    return (
        <div className="dailyRituals">
            <div className="dailyRituals__image">
                <img src={image} atl=""/>
            </div>
             <div className="dailyRituals__content">
                <div>
                    <p className="dailyRituals__contentDay">{name}</p>
                </div>
                <div>
                    <p className="dailyRituals__contentHeader">{title}</p>
                </div>
                <div>
                    <p className="dailyRituals__contentBody">
                        {body}
                    </p>
                </div>
                <div   className="dailyRituals__contentbutton">
                    <Button>
                        {button}
                        <ArrowForwardIcon style={{marginLeft: "10px"}}/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DailyRituals
