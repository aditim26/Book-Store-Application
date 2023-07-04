import { Box, Button, FormLabel, TextField } from '@mui/material';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

export const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name:"",
    description:"",
    price:"",
    author:"",
    image:""
  });

  const [checked, setChecked] = useState(false) ;

  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/books",{
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked)
    }).then(res=>res.data);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=>history("/books"))
  }

  const myStyle={
    backgroundImage: `url(https://i.pinimg.com/736x/48/ba/42/48ba4280002826bad53baeedae59e9c3.jpg)`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
  }

  return (
    <div style={myStyle} >
    <form onSubmit={handleSubmit} >
      <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent={"center"} 
      maxWidth={700} 
      alignItems={'center'}
      alignSelf="center"
      marginLeft={'auto'}
      marginRight="auto"
      // marginTop={4}
      padding={5}
      >
      <FormLabel><b>Name</b></FormLabel>
      <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="name" />
      <FormLabel><b>Author</b></FormLabel>
      <TextField  value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="author" />
      <FormLabel><b>Star Rating</b></FormLabel>
      <TextField  value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="description" />
      <FormLabel><b>Price</b></FormLabel>
      <TextField value={inputs.price} onChange={handleChange}  type="number" margin="normal" fullWidth variant='outlined' name="price" />
      <FormLabel><b>Image link</b></FormLabel>
      <TextField value={inputs.image} onChange={handleChange}  margin="normal" fullWidth variant='outlined' name="image" />
      <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
      <Button variant="contained" type="submit">Add Book</Button>
      </Box>
    </form>
    </div>
  )
}
