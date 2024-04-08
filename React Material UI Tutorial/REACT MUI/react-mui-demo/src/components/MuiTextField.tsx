import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

export const MuiTextField = () => {
    const [value, setValue] = useState('')

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' disabled />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' variant='outlined' size='small' color='secondary'></TextField>
            </Stack>
            <hr />
            <Stack direction='row' spacing={2}>
                <TextField
                    label='form input'
                    color='error'
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'Required' : 'Do not share password'}
                />


                <TextField
                    label='Password'
                    type={showPassword ? 'text' : 'password'}
                    color='error'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                {showPassword ? (
                                    <VisibilityOffIcon
                                        onClick={handleClickShowPassword}
                                        style={{ cursor: 'pointer' }}
                                    />
                                ) : (
                                    <VisibilityIcon
                                        onClick={handleClickShowPassword}
                                        style={{ cursor: 'pointer' }}
                                    />
                                )}
                            </InputAdornment>
                        ),
                    }}
                    required
                    helperText='Do not share your password with anyone'
                />
                <TextField label='Read Only' color='error' InputProps={{ readOnly: true }} ></TextField>
            </Stack>

            <Stack direction={'row'} spacing={2}>
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                }} />

                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
                }} />

                <TextField label='Love' InputProps={{
                    endAdornment: <InputAdornment position='end'><VolunteerActivismIcon /></InputAdornment>,
                }} />



            </Stack>
        </Stack>
    )
}
