import React from 'react';
import { TextField } from "@mui/material";

export const InputForm = ({ info, handleChange }) => {
    return (
        <>
            {info.map((element, i) => (
                <React.Fragment key={ element + i }>
                    <TextField
                        sx={{ backgroundColor: 'white', borderRadius: 3 }}
                        required
                        key={element.label + i}
                        label={element.label}
                        variant="outlined"
                        margin="normal"
                        name={element.name}
                        fullWidth
                        onChange={handleChange}
                    />
                    <br />
                    </React.Fragment>
            ))}
        </>
    );
}
