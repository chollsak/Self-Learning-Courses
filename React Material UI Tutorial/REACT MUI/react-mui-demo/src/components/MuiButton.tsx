import { Stack, Button, Typography, Icon, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import PrintIcon from '@mui/icons-material/Print';

export const MuiButton = () => {
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
                <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
                <Button variant="contained" startIcon={<PrintIcon/>}>Print</Button>
            </Stack>

            <Stack spacing={2} direction={'column'}>
                <Button variant="contained" endIcon={<SendIcon/>} disableElevation onClick={() => alert("Nissannnnnnnnnnn")}>Nissan</Button>
            </Stack>
            
            <IconButton aria-label="send" color="success">
                <SendIcon/>
            </IconButton>

        </Stack>

    )
}


export default MuiButton;