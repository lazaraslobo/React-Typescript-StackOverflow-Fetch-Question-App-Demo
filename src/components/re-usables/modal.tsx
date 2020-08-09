import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';


const DialogWrapper = styled.div`
`;

type ModalPropsInterface = {
    isOpen          :   boolean
    handleClose     :   () => void
}   

export const Modal : React.FunctionComponent<ModalPropsInterface> = ({children, isOpen, handleClose}) =>(
    <Dialog onClose={handleClose} aria-labelledby="iqm-app-dialog" open={isOpen}>
        {children}
    </Dialog>
)