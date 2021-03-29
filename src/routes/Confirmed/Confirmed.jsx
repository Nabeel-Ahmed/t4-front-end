import { Typography } from '@material-ui/core'
import React from 'react'
import Map from './map.png'


// Styles
import './Confirmed.css'

export default function confirmed() {
    return (
        <div className={"bg"}>
            <div className={"confirmation-box"}> 
            <Typography variant="h3"> Booking Confirmed</Typography>
            <Typography variant="overline"> Confrimation sent to example@example.com </Typography>

            <div className={"dropbox"}>
            <Typography variant="h5">Drop Between</Typography>
            <Typography variant="h5">Mon - Fri 9AM - 7PM </Typography>
            <Typography variant="h5">Sat - Sun 7AM - 11PM </Typography>
            </div>
             </div>
             <div className={"help-box"}> 
            <Typography variant="h3"> Need Help?</Typography>
            <Typography variant="body 1"> Call us in case you face an issue with our services 033 456 731 </Typography>
             </div>
             <div className={"map-box"}>
                 <img src={Map} alt="map"/>
             </div>
        </div>
    )
}
