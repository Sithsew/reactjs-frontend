import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, ...props }) => {
  return (
    <div style={{ margin: "10px 0"}}>
        <Button
        {...props}
        sx={{
            backgroundColor: '#FE956F',
            height:'50px',
            color: '#fff',
            '&:hover': {
            backgroundColor: '#FFA270',
            },
        }}
        >
        {children}
        </Button>
    </div>
  );
};

export default CustomButton;
