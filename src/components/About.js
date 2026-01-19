// import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    // const [btnText,setbtnText] = useState("dark Mode")

    // const toggleStyle = () =>{
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText('dark Mode')
    //     } else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setbtnText('light Mode')
    //     }
    // }

    let myStyle = {
        color : props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor : props.mode === 'dark' ? '#042743': 'white',
    }
    let border = {
        border  :  '1px solid',
        borderColor : props.mode === 'dark' ? 'white' : '#042743',
    }

    return (
        <div className='container my-2' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Purpose</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a simple yet powerful text-processing utility designed to help you analyze and transform text quickly. Whether you need to convert text to uppercase or lowercase, clean unnecessary spaces, or copy content instantly, TextUtils makes everyday text operations fast and effortless.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Key Features</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils offers essential features such as case conversion, word and character counting, estimated reading time, and quick clipboard copying. The application responds instantly to your input and provides real-time feedback, making it ideal for students, writers, and developers who work with text regularly.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>User-friendly & Accessible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils supports both light and dark modes for a comfortable reading experience in different environments. The clean interface, responsive design, and accessibility-friendly controls ensure that users can focus on their text without distractions, even during long sessions.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
