import React from 'react';
import {Box, Link, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import MainLogo from "../../shared/components/Mainlogo/MainLogo";

const LoginBox = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
                height: '100vh'
            }}
        >
            <Box /*logo*/>
                <MainLogo />
            </Box>

            <Box  /*white box*/
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    px: 6,
                    pt: 10,
                    pb: 12.5,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: 452
                }}
            >
                <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
                    ВХОД В СИСТЕМУ
                </Typography>

                {/* Поле для ввода логина */}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="login"
                    label="Логин"
                    name="login"
                />

                {/* Поле для ввода пароля */}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                />

                {/* Ссылка "Забыли пароль?" */}
                <Link href="#" variant="body2" sx={{
                    textDecoration: "none",
                    alignSelf: 'start',
                    marginBottom: 2,
                    color: 'var(--Nature-Gray)',
                    '&:hover': { color: 'var(--Slate-Gray)' },
                }}>
                    Забыли пароль?
                </Link>

                {/* Кнопки */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Button
                        variant="outlined"
                        sx={{
                            width: '45%',
                            color: 'var(--Ocean-Breeze)',
                            borderColor: 'var(--Ocean-Breeze)',
                            '&:hover': { backgroundColor: 'var(--Ocean-Breeze20)' },
                        }}
                    >
                        РЕГИСТРАЦИЯ
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            width: '45%',
                            backgroundColor: 'var(--Amber-Glow)',
                            color: 'var(--Steel-Blue)'
                        }}
                    >
                        ВХОД
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginBox;