import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'
import { error } from 'console'

export const MuiSelect = () => {

    const [countries, setCountries] = useState<string[]>([])
    const [error, setError] = useState(false);
    console.log(countries)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value == 'string' ? value.split(','): value)
        setError(false);
        // let countries;

        // if (typeof value === 'string') {
        //     countries = value.split(',');
        // } else {
        //     countries = value;
        // }

        // setCountries(countries);
    }

    return (
        <Box width='200px'>
            <TextField label='Select country' select value={countries} onChange={handleChange}
                fullWidth
                SelectProps={{
                    multiple: true
                }}
                size='small'
                color='secondary'
                helperText='Please select your country'
                error = {error}
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='TH'>Thailand</MenuItem>
                <MenuItem value='US'>United State</MenuItem>
                <MenuItem value='UK'>United Kingdom</MenuItem>
            </TextField>
        </Box>
    )
}
