import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = (props) => {
    return (
        <div style={{ height: `${props.height}` }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;