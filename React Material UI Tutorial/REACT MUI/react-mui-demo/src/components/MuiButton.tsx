import { Stack, Button, Typography, Icon, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import PrintIcon from '@mui/icons-material/Print';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";

export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)
    console.log({formats})
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string|null) => {
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={4} direction={"column"}>
            <Stack spacing={2} direction={'row'}>
                <Button variant="text" href="https://google.com">Google</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>

            <Stack spacing={2} direction={'column'} width={100}>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success">Success</Button>
            </Stack>

            <Stack display={'block'} spacing={2} direction={'row'}>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>

            <Stack spacing={2} direction={'row'}>
                <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
                <Button variant="contained" startIcon={<PrintIcon />}>Print</Button>
            </Stack>

            <Stack spacing={2} direction={'column'}>
                <Button variant="contained" endIcon={<SendIcon />} disableElevation onClick={() => alert("Nissannnnnnnnnnn")}>Nissan</Button>
            </Stack>

            <IconButton aria-label="send" color="success">
                <SendIcon />
            </IconButton>

            <Stack direction={'row'}>
                <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-label="alignment button group">
                    <Button onClick={() => alert('Left Clicked')}>Left</Button>
                    <Button onClick={() => alert('Center Clicked')}>Center</Button>
                    <Button onClick={() => alert('Right Clicked')}>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction={'column'} width={200}>
                <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-label="alignment button group">
                    <Button onClick={() => alert('Left Clicked')}>Left</Button>
                    <Button onClick={() => alert('Center Clicked')}>Center</Button>
                    <Button onClick={() => alert('Right Clicked')}>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction={'row'}>
                <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} size="small" color="success" orientation="vertical" exclusive>
                    <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underline' aria-label='underline'><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </Stack>

    )
}


export default MuiButton;