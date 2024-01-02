import { Grid } from "@mui/material";


const NewForm = () => {


    return (
        <>
            <Grid sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <Grid width={'50%'}>
                    <Grid>
                        <label for="fullname">Full Name</label>
                        <input type="text" id="fullname" />
                    </Grid>
                    <Grid>
                        <label for="email">Email address</label>
                        <input type="email" id="email" />
                    </Grid>
                    <Grid>
                        <label for="phone">Phone Number</label>
                        <input type="text" id="phone" />
                    </Grid>
                    <Grid>
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default NewForm;