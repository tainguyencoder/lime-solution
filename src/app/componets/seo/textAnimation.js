"use client"
import React from 'react'

import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation(){
    return(
        <h1
            className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Your benefits:
            <TypeAnimation
                sequence={[
                    ' Modern Culture',
                    1500,
                    ' Where Talents Shine',
                    1500,
                    ' Every effort is well-merited',
                    1500,
                    ' Financial',
                    1500,
                    ' Health & Wellness',
                    1500,
                    ' Learning & Growth',
                    1500,
                    ' Friendly Environment',
                    1500,
                    ' Company Events',
                    1500,
                ]}
                wrapper="span"
                speed={50}
                className="typewrite"
                repeat={Infinity}
            />
        </h1>
    )
}