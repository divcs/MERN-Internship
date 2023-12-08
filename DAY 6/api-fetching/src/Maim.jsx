import Table from 'react-bootstrap/Table';

function Maim() {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Manshi</td>
                    <td>Sharma</td>
                    <td>@__maansii__</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Pawan</td>
                    <td>Gupta</td>
                    <td>@only_pawan</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Maim;