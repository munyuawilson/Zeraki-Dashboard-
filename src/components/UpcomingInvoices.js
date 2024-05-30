import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpcomingInvoices = () => {
    const invoices = [
        { id: 1, schoolName: 'Greenfield Primary', amountDue: 200, dueDate: '2024-06-15' },
        { id: 2, schoolName: 'Hillside Secondary', amountDue: 500, dueDate: '2024-06-20' },
        { id: 3, schoolName: 'Riverside IGCSE', amountDue: 350, dueDate: '2024-06-25' }
    ];

    const sortedInvoices = invoices.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    const [show, setShow] = useState(false);
    const [selectedInvoice, setSelectedInvoice] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (invoice) => {
        setSelectedInvoice(invoice);
        setShow(true);
    };

    const handlePayment = (event) => {
        event.preventDefault();
        // Handle payment collection logic here
        console.log('Payment collected for:', selectedInvoice);
        handleClose();
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-3">Upcoming Invoices</h2>
            <Table striped bordered hover className='mt-3' >
                <thead className='mt-3'>
                    <tr>
                        <th>School Name</th>
                        <th>Amount Due</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedInvoices.map(invoice => (
                        <tr key={invoice.id}>
                            <td>{invoice.schoolName}</td>
                            <td>${invoice.amountDue}</td>
                            <td>{new Date(invoice.dueDate).toLocaleDateString()}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleShow(invoice)}>
                                    Collect Payment
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Collect Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedInvoice && (
                        <Form onSubmit={handlePayment}>
                            <Form.Group controlId="formSchoolName">
                                <Form.Label>School Name</Form.Label>
                                <Form.Control type="text" value={selectedInvoice.schoolName} readOnly />
                            </Form.Group>
                            <Form.Group controlId="formAmountDue">
                                <Form.Label>Amount Due</Form.Label>
                                <Form.Control type="text" value={`$${selectedInvoice.amountDue}`} readOnly />
                            </Form.Group>
                            <Form.Group controlId="formDueDate">
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control type="text" value={new Date(selectedInvoice.dueDate).toLocaleDateString()} readOnly />
                            </Form.Group>
                            <Form.Group controlId="formCollectionDetails">
                                <Form.Label>Collection Details</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter collection details" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Collect Payment
                            </Button>
                        </Form>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default UpcomingInvoices;
