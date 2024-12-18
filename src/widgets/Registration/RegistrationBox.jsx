import React, {useState} from 'react';
import {Box, TextField, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import MainLogo from "../../shared/components/Mainlogo/MainLogo";
import Button from "@mui/material/Button";
import { ManActive, WomanActive, ManInActive, WomanInActive } from "../../shared/icons";

const RegistrationBox = () => {

    const [gender, setGender] = useState('male');

    const handleGenderChange = (event, newGender) => {
        if (newGender !== null) {
            setGender(newGender);
            setForm({ ...form, gender: newGender });
        }
    };

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        patronymic: '',
        gender: 'male',
        key: '',
        login: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        console.log('Форма отправлена:', form);
    };

    const handleCancel = () => {
        setForm({
            firstName: '',
            lastName: '',
            patronymic: '',
            gender: 'male',
            key: '',
            login: '',
            password: '',
            confirmPassword: '',
        });
    };

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
                    pt: 4,
                    pb: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: 452
                }}
            >
                <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    РЕГИСТРАЦИЯ
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <TextField
                            fullWidth
                            label="Ваше имя"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            size="small"
                        />
                        <TextField
                            fullWidth
                            label="Ваша фамилия"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            size="small"
                        />
                    </Box>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Ваше отчество"
                        name="patronymic"
                        value={form.patronymic}
                        onChange={handleChange}
                        size="small"
                    />

                    <Typography
                        sx={{
                            color: '#555',
                            font: 1
                        }}
                    >
                        Ваш пол:
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <ToggleButtonGroup
                                value={gender}
                                exclusive
                                onChange={handleGenderChange}
                                aria-label="Пол"
                                sx={{
                                    height: 40
                                }}
                            >
                                {/* Мужская кнопка */}
                                <ToggleButton
                                    value="male"
                                    aria-label="Мужской"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 0,
                                        '&.Mui-selected': {
                                            backgroundColor: '#e3f2fd',
                                            color: '#0d47a1'
                                        },
                                    }}
                                >
                                    {gender === 'male' ? <ManActive /> : <ManInActive />}
                                </ToggleButton>

                                {/* Женская кнопка */}
                                <ToggleButton
                                    value="female"
                                    aria-label="Женский"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 0,
                                        '&.Mui-selected': {
                                            backgroundColor: '#fce4ec',
                                            color: '#880e4f'
                                        },
                                    }}
                                >
                                    {gender === 'female' ? <WomanActive /> : <WomanInActive />}
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                        <TextField
                            fullWidth
                            label="Ключ подразделения"
                            name="key"
                            value={form.key}
                            onChange={handleChange}
                            size="small"
                            sx={{

                            }}
                        />
                    </Box>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Логин"
                        name="login"
                        value={form.login}
                        onChange={handleChange}
                        size="small"
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        type="password"
                        label="Придумайте пароль"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        size="small"
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        type="password"
                        label="Повторите пароль"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        size="small"
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Button
                            onClick={handleCancel}
                            variant="outlined"
                            sx={{
                                width: '45%',
                                color: 'var(--Ocean-Breeze)',
                                borderColor: 'var(--Ocean-Breeze)',
                                '&:hover': { backgroundColor: 'var(--Ocean-Breeze20)' },
                            }}
                        >
                            отмена
                        </Button>

                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            sx={{
                                width: '45%',
                                backgroundColor: 'var(--Amber-Glow)',
                                color: 'var(--Steel-Blue)'
                            }}
                        >
                            подтвердить
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default RegistrationBox;