import React from 'react';
import './ApprovalIcon.css';
import { CiCircleCheck } from "react-icons/ci";

function ApprovalIcon(){
    return (
        <CiCircleCheck className='approval_icon' />
    );
}

export { ApprovalIcon }