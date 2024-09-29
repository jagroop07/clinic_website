"use client"

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';

export default function ContactPage() {
    const [rows, setrows] = useState([])

    const fetchData = async() => {
        const { data } = await axios.get('http://localhost:3000/api/contact')
        setrows(data.details.map(d => ({ ...d, id: d?._id, })))
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    async function handleDelete(id) {
        const {data} = await axios.delete('http://localhost:3000/api/contact/'+ id)
        const newRows = rows.filter(item => item.id !== data.contactDeleted._id)
        setrows(newRows)
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.first_name || ''} ${row.last_name || ''}`,
        },
        {
            field: 'email',
            headerName: 'Email',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            field: 'phone_number',
            headerName: 'Phone Number',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            field: 'message',
            headerName: 'Message',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            field: 'company',
            headerName: 'Company Name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            headerName: 'Action',
            renderCell: ({row}) => (
                <strong>
                    <Button
                        variant="contained"
                        onClick={() => handleDelete(row.id)}
                        size="small"
                        style={{ backgroundColor: 'red', boxShadow: 'none', fontWeight: 'bold' }}
                    >
                        Delete
                    </Button>
                </strong>
            )
    
        }
    ];
    return (
        <Paper sx={{ height: "82dvh", width: '100%', borderRadius: 0 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                hideFooter
                sx={{ border: 0 }}
            />
        </Paper>
    );
}
