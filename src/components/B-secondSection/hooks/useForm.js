import { useRef, useState } from "react";

const initialValue = {}

export const useForm = () => {
    
    const [ formState, setFormState ] = useState( initialValue );
    const [ showDialog, setShowDialog ] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://ek-landing-page.onrender.com/lead', {
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

                setShowDialog(true);
            }
        } catch (error) {
            console.log("ERROR", error);
        }
        
    }
    const updateState = (name, value, type) => {

        if (type === 'checkbox') {            
            setFormState( (prevFormState) => ({
                ...prevFormState,
                [name]: [...(prevFormState[name] || []), value],
            }))
        }

        setFormState(( prevFormState ) => ({
            ...prevFormState,
            [name]: value,
        }))

    }

    const deleteElementFromFormState = (name, value) => {
        setFormState(( prevFormState ) => {
            const foundElement = prevFormState[name];
            if (!foundElement) return prevFormState;

            const newArrWithoutElement = foundElement.filter(( el ) => el !== value);

            return{
                ...prevFormState,
                [name]: newArrWithoutElement,
            }
        })
    }

    const handleChange = ({ target }) => {
        const { name, value, checked, type } = target;

        updateState(name, value)
        if (checked && !checked) {
            deleteElementFromFormState(name, value);
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
