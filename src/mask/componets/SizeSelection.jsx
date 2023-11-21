import React, { Fragment, useState } from 'react';
import { Label, RedeemRounded } from '@mui/icons-material';
import { TextField, Typography, Stack, Box, Button, Input } from '@mui/material';
import PizzaBanner from '../img/pizza-banner.png';
const sizes = [
    {
        size: 'small',
        percentage: 30
    },
    {
        size: 'meddium',
        percentage: 15
    },
    {
        size: 'large',
        percentage: 30
    }
]


const PizzaSizeOption = ({ size, porcentage, selectedSize, onSelectSize }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                ...(selectedSize === size
                    ? {
                        borderRadius: '50%',

                    }
                    : {
                        border: 'transparent',
                        filter: 'saturate(0.1)',
                    }),
            }}
        >
            <img
                style={{
                    borderRadius: selectedSize === size ? '50%' : '0',
                    border: selectedSize === size ? '1px solid orange' : 'none',
                }}
                width={45}
                height={45}
                src={PizzaBanner}
                alt="Pizza"
            />
            <Input
                type="radio"
                name="size"
                value={size}

                checked={selectedSize === 'size'}
                onChange={() => onSelectSize(size)}
            />
            <Box sx={{ color: 'blue' }}>{size}</Box>
        </Box>
    );
};

export const SizeSelection = () => {
    const [selectedSize, setSelectedSize] = useState('');


    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    return (
        <Stack
            sx={{
                // bgcolor: 'red',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
            }}
        >
            <Typography
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            >
                {sizes.map((size, index) => {
                    return (
                        <Fragment key={index}>
                            <Box sx={{ color: 'blue' }}>{size.size}</Box>
                            <Input
                                type="radio"
                                name={selectedSize} 
                                value={size.size}
                                checked={selectedSize === size.size} 
                                onChange={() => handleSizeSelection(size.size)} 
                            />
                        </Fragment>
                    )
                })}
            </Typography>

        </Stack>
    );
};
