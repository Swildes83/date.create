import React from "react";
import { Button, Header, Image, Modal, Icon, Form, TextArea } from 'semantic-ui-react'
import "./contactQuiz.css";

const ContactQuizModal = () => (
    <Modal trigger={<Button>Contact Me!</Button>}>
        <Modal.Header>FizzBuzz!</Modal.Header>
        <Modal.Content image>
            <Image wrapped size='small' src='/assets/profile/lcrouch/lcrouch-profile.jpg' />
            <Modal.Description>
                <Header>Create a custom version of <a href="https://blog.codinghorror.com/why-cant-programmers-program/">FizzBuzz</a>, be creative!</Header>
                <Form>
                    <TextArea placeholder='enter your code here:' style={{ minHeight: 300 }} />
                </Form>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                Submit <Icon name='right chevron' />
            </Button>
        </Modal.Actions>
    </Modal>
)

export default ContactQuizModal;