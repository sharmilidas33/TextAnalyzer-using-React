import React, { useState } from 'react'

export default function About(props) {
    return (
        <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}}>
            <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}} >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}}>
                    ABOUT THE APP
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}}>
                    <strong>It is a TextAnalyzer App build by using React JS. Other components such as BootStrap have also been used here. This app is used to manupulate your texts in various ways to make it easier for you.</strong> 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}}>
                    ABOUT US
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}}>
                    <strong>This React web application has been developed by Sharmili Das, a 3rd year BTech Student. Here is her <a href='https://github.com/sharmilidas33'>Github Link</a>.</strong> 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}}>
                    Contact Us
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}}>
                    <strong>You can email us at <a href='mailto://sharmilidas1@gmailcom'>sharmilidas1@gmailcom</a>. You can also reach us out at <a href='https://www.linkedin.com/in/sharmili-das-980984220/'>LinkedIn</a>. </strong> 
                </div>
                </div>
            </div>
        </div>
    )
}
