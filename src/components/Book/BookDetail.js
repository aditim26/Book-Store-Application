import axios  from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, FormLabel, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";

export const BookDetail = () => {
    const [inputs, setInputs] = useState({});
    const id=useParams().id;
    const [checked,setChecked] = useState(false);
    const history =useNavigate();
    const fetchHandler = async()=>{
      await axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res)=>res.data)
  }
    useEffect(()=>{
        fetchHandler()
    },[id]);

    const sendRequest = async() =>{
        await axios.put(`http://localhost:5000/books/${id}`,{
      price: Number(inputs.price),
      available: Boolean(checked)
        }).then(res=>res.data).then(data => setInputs(data.book));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(()=>history("/books"));
    }
    const handleChange = (e) =>{
        console.log(e);
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
          }));
    }
    // console.log("hello",inputs);
    const myStyle={
      backgroundImage:`url(https://media.istockphoto.com/id/638383032/photo/textbooks-stacked-on-school-desk-with-chalkboard-background.jpg?b=1&s=170667a&w=0&k=20&c=v0pEsXCm4L5g45kSSYsMmdy9frASELzGrD6bFIehczI=)`,
      backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:650
    }
  return (
    <div style={myStyle}>
      {inputs && (<form onSubmit={handleSubmit} >
      <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent={"center"} 
      maxWidth={700} 
      alignItems={'center'}
      alignSelf="center"
      marginLeft={'auto'}
      marginRight="auto"
      >
      {/* <FormLabel>Name</FormLabel>
      <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="name" />
      <FormLabel>Author</FormLabel>
      <TextField  value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="author" />
      <FormLabel>Star Rating</FormLabel>
      <TextField  value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="description" /> */}
      <FormLabel>Price</FormLabel>
      <TextField value={inputs.price} onChange={handleChange}  type="number" margin="normal" fullWidth variant='outlined' name="price" />
      {/* <FormLabel>Image</FormLabel>
      <TextField value={inputs.image} onChange={handleChange}  margin="normal" fullWidth variant='outlined' name="image" /> */}
      <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
      <Button variant="contained" type="submit">Update Book</Button>
      </Box>
    </form> )}
    </div>
  )
}
