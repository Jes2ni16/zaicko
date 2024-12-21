"use client";

import React, { useState , useEffect} from 'react';
import { Box, TextField, Button, Typography, Alert, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { AxiosError } from 'axios';


const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();



  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          'https://zaiko-server.vercel.app/api/users/', // URL to check if the user is logged in
          { withCredentials: true }
        );

        if (response.status === 200) {
          // If user is logged in, redirect to /list
          router.push('/list');
        }
      } catch (error) {
        console.log('User is not logged in.', error);
        // If not logged in, stay on the login page (no redirect)
      }
    };

    checkLoginStatus();
  }, [router]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Send login request to the backend
      const response = await axios.post(
        'https://zaiko-server.vercel.app/api/users/login', 
        { username, password },
        { withCredentials: true } // Include credentials for cookies
      );

      if (response.status === 200) {
        router.push('/list'); // Redirect on successful login
      }
    } catch (err) {
        // Type the error as AxiosError for better typing
        if (err instanceof AxiosError) {
          setError(err.response?.data?.message || 'Login failed. Please try again.');
        } else {
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          backgroundColor: 'white',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2, textAlign: 'center' }}>
          Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{ mb: 2 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </form>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          Dont have an account? <a href="/register">Register here</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
