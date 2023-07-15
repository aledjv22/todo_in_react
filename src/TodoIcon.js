import React from 'react';
import { ReactComponent as ApprovalSVG } from './icons/approval.svg';
import { ReactComponent as DelateSVG } from './icons/delate.svg';

function TodoIcon({ type }){
    return (
        <span> 
            {
                type === 'check' ? <ApprovalSVG /> : <DelateSVG />
            } </span>
        
        
    );
}

export { TodoIcon }