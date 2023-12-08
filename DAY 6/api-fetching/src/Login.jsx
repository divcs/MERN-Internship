import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBRadio,
}
    from 'mdb-react-ui-kit';

function Login() {
    return (
        <MDBContainer fluid className='bg-dark'>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol>
                    <MDBCard className='my-4'>
                        <MDBRow className='g-0'>
                            <MDBCol md='6' className="d-none d-md-block">
                                <MDBCardImage src='https://as1.ftcdn.net/v2/jpg/01/82/04/38/1000_F_182043866_cQZwPYqKo2xZvZ8sSwW7rdRbf72GcsH4.jpg' height={200} width={1000} alt="Sample photo" className="rounded-start" fluid />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                                    <h3 className="mb-5 text-uppercase fw-bold">Student Login form</h3>
                                    <MDBRow>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' label='Enter your Username' size='lg' id='form1' type='text' />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' label='Enter your Password' size='lg' id='form1' type='text' />
                                        </MDBCol>
                                    </MDBRow>
                                    <div className="d-flex justify-content-end pt-3">
                                        <MDBBtn className='ms-2' color='primary' size='lg'>Login</MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Login;