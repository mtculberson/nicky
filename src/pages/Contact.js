import { Form, Button } from 'react-bootstrap';
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact() {
    const initialState = {name: '', email: '', message: ''}
    const [eachEntry, setEachEntry] = useState(initialState)
    const {name, email, message} = eachEntry

    const handleOnChange = e => {
        setEachEntry({...eachEntry, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:8080/send', {
            method: "POST",
            body: JSON.stringify(eachEntry),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
           ).then((response)=> {
        if (response.status === 'success') {
            setEachEntry(initialState)//reset form
            alert("Message Sent.");
        } else if(response.status === 'fail') {
            alert("Message failed to send.")
        }
        })
    }

    return (
        <div style={{textAlign:'center'}}>
            <h1>Contact Me</h1>
            <br/>
            <a style={{color:'black'}} href='https://www.linkedin.com/in/nicholas-martinez-b72a42181/'><i className='bi bi-linkedin'></i></a>
            <a style={{color:'black'}} href='https://www.linkedin.com/in/nicholas-martinez-b72a42181/overlay/1635519879903/single-media-viewer/?profileId=ACoAACsL4AYB3VDnt093CYACMc74YYY3GkNwsiY'><i style={{paddingLeft:'10px'}} className="bi bi-file-earmark-person"></i></a>
            <a style={{color:'black'}} href='https://www.instagram.com/nickyysix/'><i style={{paddingLeft:'10px'}} className="bi bi-instagram"></i></a>
            <p style={{paddingTop:'5%'}}> You can email me at nickm264@gmail.com or leave a message below</p>
            <br/>
            <Form className='text-center'>
                    <Form.Group controlId='formBasicName'>           
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleOnChange}
                        value={name}
                        name='name'
                        type='text'
                    />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleOnChange}
                        value={email}
                        name='email'
                        type='text'
                    />
                    </Form.Group>
                    <Form.Group controlId='formBasicTextField'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} onChange={handleOnChange}
                        value={message}
                        name='message'
                        type='text'
                    />
                    </Form.Group>
                    <Button style={{backgroundColor: "black", marginTop: "10px"}} variant='success' type='submit' onClick={handleSubmit}>Send
                    </Button>
            </Form>
        </div>
    );
  }