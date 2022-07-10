import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import {variables} from './Variables.js';

export class EditCardModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(variables.API_URL + 'paymentdetails',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                paymentDetailId: event.target.PaymentDetailId.value,
                cardOwnerId: event.target.CardOwnerId.value,
                cardNumber: event.target.CardNumber.value,
                expirationDate: event.target.ExpirationDate.value,
                securityCode: event.target.SecurityCode.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Department
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="PaymentDetailId">
                        <Form.Label>PaymentDetailId</Form.Label>
                        <Form.Control type="text" name="PaymentDetailId" required
                        disabled
                        defaultValue={this.props.cardid} 
                        placeholder="PaymentDetailId"/>
                    </Form.Group>

                    <Form.Group controlId="CardOwnerId">
                        <Form.Label>CardOwnerId</Form.Label>
                        <Form.Control type="text" name="CardOwnerId" required 
                        defaultValue={this.props.ownerid} 
                        placeholder="CardOwnerId"/>
                    </Form.Group>

                    <Form.Group controlId="CardNumber">
                        <Form.Label>CardNumber</Form.Label>
                        <Form.Control type="text" name="CardNumber" required 
                        defaultValue={this.props.cardnum} 
                        placeholder="CardNumber"/>
                    </Form.Group>

                    <Form.Group controlId="ExpirationDate">
                        <Form.Label>ExpirationDate</Form.Label>
                        <Form.Control type="text" name="ExpirationDate" required
                        defaultValue={this.props.exdate}  
                        placeholder="ExpirationDate"/>
                    </Form.Group> 

                    <Form.Group controlId="SecurityCode">
                        <Form.Label>SecurityCode</Form.Label>
                        <Form.Control type="text" name="SecurityCode" required 
                        defaultValue={this.props.security} 
                        placeholder="SecurityCode"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Department
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>
</div>
)
}

}