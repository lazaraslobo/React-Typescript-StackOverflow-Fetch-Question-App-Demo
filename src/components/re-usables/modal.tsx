import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';


const DialogWrapper = styled.div`
`;

const handleClose = () =>{

}

type ModalPropsInterface = {
    isOpen      :   boolean
}   

export const Modal : React.FunctionComponent<ModalPropsInterface> = ({children, isOpen}) =>(
    <DialogWrapper>
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={isOpen}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            {children}
        </Dialog>
    </DialogWrapper>
)