import { Button, Grid } from '@mui/material'

import { CheckboxForm } from './CheckboxForm';
import { InputForm } from './InputForm';
import { FormData } from './FormData';
import { useForm } from '../hooks/useForm';
import { DialogFormSubmit } from './DialogFormSubmit';

export const Form = () => {

    const { questions, info } = FormData();

    const { handleChange, handleSubmit, showDialog, handleDialogClose } = useForm();

    return (
            <Grid alignItems="center" sx={{ textAlign: 'center', boxShadow: 2, borderRadius: 2, p: 3, backgroundColor: 'white' }}>
                <form onSubmit={handleSubmit} id='secondSection'>
                    <CheckboxForm questions={questions} handleChange={handleChange} />
                    <br />
                    <InputForm info={ info } handleChange={handleChange} />

                    { showDialog && ( <DialogFormSubmit open = { showDialog } onClose={ handleDialogClose } /> ) }

                    <Button type='submit' variant='contained' sx={{ fontSize: '1.2rem' }}>Enviar</Button>
                </form>
            </Grid>
    )
}
