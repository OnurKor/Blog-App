import React, { useContext } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Avatar,
  Button,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { BlogContext } from "../context/BlogContextProvider";



const NewBlog = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext)
  const {addNewBlog} = useContext(BlogContext)

  const formik = useFormik({
    initialValues: {
      title: "",
      imgUrl: "",
      content:"",
      email:currentUser.email,
    },
    onSubmit:async (values) => {
        try {
          await addNewBlog(values)
          navigate("/")
        } catch (err) {
          alert(err.message)
        }
        
    },

  });

  return (
    <Container
      sx={{
        marginTop: "2rem",
        height: "calc(85vh - 1rem)",
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        textAlign: "center",
        padding: "1rem",
      }}
      maxWidth="sm"
    >
      <Avatar
        sx={{
          margin: "0.5rem auto",
          bgcolor: "#4CAF50",
        }}
      >
        <AddCircleOutlineOutlinedIcon/>
      </Avatar>

      <Typography sx={{ margin: "0.5rem" }} variant="h4">
        New Blog
      </Typography>
      <Formik>
        {() => (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="title"
                  label="Title *"
                  variant="outlined"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.title && formik.errors.title}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="imgUrl"
                  label="Image URL *"
                  variant="outlined"
                  value={formik.values.imgUrl}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.imgUrl && formik.errors.imgUrl}
                  error={
                    formik.touched.imgUrl && Boolean(formik.errors.imgUrl)
                  }
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  fullWidth
                  multiline
                  inputProps={{
                    style: {
                      height: "150px",
                    },
                  }}
                  name="content"
                  label="Content *"
                  variant="outlined"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.content && formik.errors.content}
                  error={
                    formik.touched.content && Boolean(formik.errors.content)
                  }
                />
              </Grid>
              <Grid>
                  
              </Grid>
              <Grid item xs={12}>
                <Button sx={{backgroundColor:'#4CAF50'}}  fullWidth item variant="contained" type="submit">
                  Submit 
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      
    </Container>
  );
};

export default NewBlog;
