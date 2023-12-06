
import { Checkbox, FormControlLabel, Typography } from "@mui/material"
import React from "react"

export const CheckboxForm = ({ questions, handleChange }) => {

    return (
        <>
            {
                questions.map((question, i) => (
                    <React.Fragment key={question.id + i}>
                            <Typography variant="h6" sx={{ fontWeight: '500', textTransform: 'uppercase' }}>
                                {question.pregunta}
                            </Typography>
                        {
                            question.opciones.map((opcion, i) => (
                                <React.Fragment key={opcion + i}>
                                    {opcion === 'Tres ambientes' ? <br /> : null}
                                    <FormControlLabel
                                        key={`${question.id}-${opcion}-${i}`}
                                        control={<Checkbox color="primary"/>}
                                        label={opcion}
                                        value={opcion}
                                        name={question.id}
                                        onChange={(event) => handleChange(event)}
                                    />
                                </React.Fragment>
                            ))
                        }
                    </React.Fragment>

                ))
            }
        </>
    )
}
