import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";


const NewForm = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <Grid sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <Grid width={'50%'}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid>
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" name="fullName" {...register("fullName")} />
                        </Grid>
                        <Grid>
                            <label for="email">Email address</label>
                            <input type="email" id="email" name="email" {...register("email")} />
                        </Grid>
                        <Grid>
                            <label for="phone">Phone Number</label>
                            <input type="text" id="phone" name="phone" {...register("phone")} />
                        </Grid>
                        <Grid>
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" {...register("password")} />
                        </Grid>
                        <Grid>
                            <button type="submit">
                                Submit
                            </button>
                        </Grid>

                    </form>

                </Grid>
            </Grid>
        </>
    )
}

export default NewForm;