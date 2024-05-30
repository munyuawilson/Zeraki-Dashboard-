import React, { useState } from 'react';
import { Table, Button, Modal, Form, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InvoiceManagement = ({ school }) => {
    // Ensure that we are checking for the existence of invoices properly
    const [invoices, setInvoices] = useState(school.invoices || []);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [formData, setFormData] = useState({
        item: '',
        dueDate: '',
        amount: '',
        paidAmount: '',
    });

    const handleClose = () => setShowModal(false);
    const handleShow = (type, invoice = null) => {
        setModalType(type);
        setSelectedInvoice(invoice);
        if (invoice) {
            setFormData({
                item: invoice.item,
                dueDate: invoice.dueDate,
                amount: invoice.amount,
                paidAmount: invoice.paidAmount,
            });
        } else {
            setFormData({
                item: '',
                dueDate: '',
                amount: '',
                paidAmount: '',
            });
        }
        setShowModal(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (modalType === 'add') {
            const newInvoice = {
                id: invoices.length + 1,
                item: formData.item,
                dueDate: formData.dueDate,
                amount: parseFloat(formData.amount),
                paidAmount: parseFloat(formData.paidAmount),
                balance: parseFloat(formData.amount) - parseFloat(formData.paidAmount),
                status: parseFloat(formData.amount) === parseFloat(formData.paidAmount) ? 'Completed' : 'Pending',
                creationDate: new Date().toISOString().split('T')[0],
            };
            setInvoices([...invoices, newInvoice]);
        } else if (modalType === 'edit') {
            const updatedInvoices = invoices.map((invoice) =>
                invoice.id === selectedInvoice.id
                    ? {
                          ...invoice,
                          item: formData.item,
                          dueDate: formData.dueDate,
                          amount: parseFloat(formData.amount),
                          paidAmount: parseFloat(formData.paidAmount),
                          balance: parseFloat(formData.amount) - parseFloat(formData.paidAmount),
                          status: parseFloat(formData.amount) === parseFloat(formData.paidAmount) ? 'Completed' : 'Pending',
                      }
                    : invoice
            );
            setInvoices(updatedInvoices);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setInvoices(invoices.filter((invoice) => invoice.id !== id));
    };

    const daysUntilDue = (dueDate) => {
        const today = new Date();
        const due = new Date(dueDate);
        const difference = due - today;
        return Math.ceil(difference / (1000 * 60 * 60 * 24));
    };

    return (
        <div>
            <h2>{school.name} - Invoices</h2>
            <Button variant="primary" onClick={() => handleShow('add')}>
                Add Invoice
            </Button>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Invoice Number</th>
                        <th>Item</th>
                        <th>Creation Date</th>
                        <th>Due Date</th>
                        <th>Amount</th>
                        <th>Paid Amount</th>
                        <th>Balance</th>
                        <th>Status</th>
                        <th>Days Until Due</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                        <tr key={invoice.id}>
                            <td>{index + 1}</td>
                            <td>{invoice.item}</td>
                            <td>{invoice.creationDate}</td>
                            <td>{invoice.dueDate}</td>
                            <td>${invoice.amount}</td>
                            <td>${invoice.paidAmount}</td>
                            <td>${invoice.balance}</td>
                            <td>
                                <Badge bg={invoice.status === 'Completed' ? 'success' : 'warning'}>
                                    {invoice.status}
                                </Badge>
                            </td>
                            <td>{daysUntilDue(invoice.dueDate)}</td>
                            <td>
                                <Button variant="secondary" onClick={() => handleShow('edit', invoice)}>
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(invoice.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalType === 'add' ? 'Add Invoice' : 'Edit Invoice'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSave}>
                        <Form.Group controlId="formItem">
                            <Form.Label>Item</Form.Label>
                            <Form.Control
                                type="text"
                                name="item"
                                value={formData.item}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDueDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPaidAmount">
                            <Form.Label>Paid Amount</Form.Label>
                            <Form.Control
                                type="number"
                                name="paidAmount"
                                value={formData.paidAmount}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default InvoiceManagement;
