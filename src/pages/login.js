import React from 'react'
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from "@mantine/core";
  import { useState } from 'react';
// import Mbutton from '../components/mybutton'

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry,setAllEntry] = useState([]);

  

  const log_in = (e) => {
    e.preventDefault();

    if (email && password){
     const newEntry = {email:email , password:password};

    //  console.log(newEntry)

     setAllEntry([...allEntry , newEntry]);
     console.log(AllEntry)

     setEmail("")
     setPassword("")
  }
  else{
    alert("Plz fill the data")
  }

  
}


  
    return ( <div>
        {/* < Mbutton/> */}
        <form action="">
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Login Page
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor component='a'
          href="http://localhost:3000/login1"
          size="sm"
          
        >
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required  value={email}
        onChange = {(e) => setEmail(e.target.value)} type= "email"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required 
          mt="md" value= {password}
          onChange = {(e) => setPassword(e.target.value)}
          type = "pass"
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
          <Anchor component='a'
            onClick={(event) => event.preventDefault()}
            href="#"
            size="sm"
          >
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={log_in}>
          Sign in
        </Button>
      </Paper>
      
    </Container>
    </form>
    </div>
    )
}

export default login