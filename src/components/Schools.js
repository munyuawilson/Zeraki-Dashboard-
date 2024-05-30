import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InvoiceManagement from './InvoiceManagement';

const Schools = () => {
    const schools = [
        {
            id: 1,
            name: 'Greenfield Primary',
            type: 'Primary',
            product: 'Zeraki Analytics',
            county: 'Nairobi',
            registrationDate: '2023-01-15',
            contact: 'greenfield@example.com',
            balance: 200,
            invoices: [
                { id: 1, item: 'Zeraki Analytics', amount: 100, dueDate: '2024-05-15', paidAmount: 100, balance: 0, status: 'Paid', creationDate: '2023-01-01' },
                { id: 2, item: 'Zeraki Analytics', amount: 100, dueDate: '2024-06-15', paidAmount: 0, balance: 100, status: 'Unpaid', creationDate: '2023-02-01' }
            ]
        },
        {
            id: 2,
            name: 'Hillside Secondary',
            type: 'Secondary',
            product: 'Zeraki Finance',
            county: 'Mombasa',
            registrationDate: '2023-03-20',
            contact: 'hillside@example.com',
            balance: 500,
            invoices: [
                { id: 3, item: 'Zeraki Finance', amount: 250, dueDate: '2024-05-20', paidAmount: 250, balance: 0, status: 'Paid', creationDate: '2023-03-01' },
                { id: 4, item: 'Zeraki Finance', amount: 250, dueDate: '2024-06-20', paidAmount: 0, balance: 250, status: 'Unpaid', creationDate: '2023-04-01' }
            ]
        }
    ];

    const [selectedSchool, setSelectedSchool] = useState(null);

    return (
        <div>
            <h2>Schools</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>School Name</th>
                        <th>Type</th>
                        <th>Product</th>
                        <th>County</th>
                        <th>Registration Date</th>
                        <th>Contact</th>
                        <th>Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {schools.map((school) => (
                        <tr key={school.id}>
                            <td>{school.name}</td>
                            <td>{school.type}</td>
                            <td>{school.product}</td>
                            <td>{school.county}</td>
                            <td>{school.registrationDate}</td>
                            <td>{school.contact}</td>
                            <td>${school.balance}</td>
                            <td>
                                <Button variant="info" onClick={() => setSelectedSchool(school)}>
                                    Manage Invoices
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {selectedSchool && (
                <InvoiceManagement school={selectedSchool} />
            )}
        </div>
    );
};

export default Schools;
