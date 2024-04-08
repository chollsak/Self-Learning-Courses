import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>This is h1 Heading</Typography>
        <Typography variant='h2'>This is h2 Heading</Typography>
        <Typography variant='h3'>This is h3 Heading</Typography>
        <Typography variant='h4' component='h1'gutterBottom marginBlock={'50px'}>This is h4 Heading</Typography>
        <Typography variant='h5'>This is h5 Heading</Typography>
        <Typography variant='h6'>This is h6 Heading</Typography>

        <Typography variant='subtitle1'>Subtiltle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis, vel dolores nobis molestiae quis. Excepturi, tempora ad veniam earum itaque tenetur ex quibusdam perferendis delectus. Voluptatibus pariatur velit maxime!</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum molestiae blanditiis obcaecati vel, iusto et temporibus quia quod! Numquam animi reiciendis labore quo dolor nulla omnis nemo quisquam iste.</Typography>
    </div>
  )
}

export default MuiTypography;