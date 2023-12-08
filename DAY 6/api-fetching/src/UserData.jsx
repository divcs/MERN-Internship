import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

const UserData = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        const udata = await fetch('https://reqres.in/api/users?page=2');
        const udata1 = await udata.json();
        setData(udata1.data);
        console.log(udata1.data);
    }
    return (
        <div>
            User Data
            <Button variant="primary" onClick={() => getData()}>Get Data</Button>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dt, i) =>
                        <tr>
                            <td>{dt.id}</td>
                            <td>{dt.first_name}</td>
                            <td>{dt.last_name}</td>
                            <td>{dt.email}</td>
                            <td>
                                <img style={{borderRadius:"100%"}} src={dt.avatar} alt="" />
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default UserData

