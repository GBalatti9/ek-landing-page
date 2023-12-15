import { useRef, useState } from "react";

const initialValue = {}

export const useForm = () => {
    
    const [ formState, setFormState ] = useState( initialValue );
    const [ showDialog, setShowDialog ] = useState( false );
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // https://ek-landing-page.onrender.com/lead
        setShowDialog(true);
        try {
            const response = await fetch('http://localhost:3000/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ formState })
            })
            console.log( response );


            if (response.ok) {
                const jsonResponse = await response.json(); // Parsea la respuesta JSON
                console.log("Correo enviado correctamente:", jsonResponse.message);

            }
            console.log({ formState });
        } catch (error) {
            console.log("ERROR", error);
        }
        
    }
    const updateState = (name, value, type) => {

        if (type === 'checkbox') {    
            setFormState( (prevFormState) => ({
                ...prevFormState,
                [name]: [...(prevFormState[name] || []), value ],
            }))
        } 
        
        if (type === 'text') {
            setFormState(( prevFormState ) => ({
                ...prevFormState,
                [name]: value,
            }))
        }


    }

    const deleteElementFromFormState = (name, value) => {
        setFormState(( prevFormState ) => {
            const foundElement = prevFormState[name];
            if (!foundElement) return prevFormState;
            console.log({ foundElement });
            const newArrWithoutElement = foundElement.filter(( el ) => el !== value);
            console.log({ newArrWithoutElement });

            return{
                ...prevFormState,
                [name]: newArrWithoutElement,
            }
        })
    }

    const handleChange = ({ target }) => {
        const { name, value, checked, type } = target;
        console.log({ checked });

        if ( type === 'checkbox' && !checked ) {
            deleteElementFromFormState( name, value )
        }
        else {
            updateState( name, value, type )
        }
    }

    const handleDialogClose = () => {
        window.location.reload();
        setShowDialog(false);
    }

    return {
        handleSubmit,
        handleChange,
        showDialog,
        handleDialogClose,
    }

}
