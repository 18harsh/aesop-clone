import React from 'react'
import './BrandHome.css'
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import {  IconButton } from '@material-ui/core';

function BrandHome() {
    return (
        <div className="brandHome">
            <div className="brandHome__aesop">
                <p className="brandHome__aesopName">Aesop</p>
            </div>
            <div className="brandHome__content">
                <div>
                    <p className="brandHome__contentDay">Father’s Day</p>
                </div>
                <div>
                    <p className="brandHome__contentHeader">Bountiful bonds</p>
                </div>
                <div>
                    <p className="brandHome__contentBody">
                        It is the thought that goes into our products that leaves an indelible impression on a loved one. For father figures of all stripes, an array of apt choices is provided—from the uplifting, to the softly soothing.
                    </p>
                </div>
                <div   className="brandHome__contentbutton">
                    <Button>
                        Discover gifts for father figures
                        <ArrowForwardIcon style={{marginLeft: "10px"}}/>
                    </Button>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default BrandHome
