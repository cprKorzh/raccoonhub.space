import React from 'react';
import {Box, MenuItem, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import MainLogo from "../../shared/components/Mainlogo/MainLogo";

const ResetPassBox = () => {
    const [form, setForm] = React.useState({
        login: '',
        firstName: '',
        lastName: '',
        patronymic: '',
        group: '',
    });

    const groups = ['group0', 'group1', 'group2']; // группы

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        console.log('Форма отправлена:', form);
    };

    const handleCancel = () => {
        console.log('Отмена');
        setForm({
            login: '',
            firstName: '',
            lastName: '',
            patronymic: '',
            group: '',
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
                    pt: 8,
                    pb: 8,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: 452
                }}
            >
                <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    ВОССТАНОВЛЕНИЕ ПАРОЛЯ
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Логин"
                        name="login"
                        value={form.login}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Ваше имя"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Ваша фамилия"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Ваше отчество"
                        name="patronymic"
                        value={form.patronymic}
                        onChange={handleChange}
                    />
                    <TextField
                        select
                        fullWidth
                        margin="normal"
                        label="Подразделение"
                        name="group"
                        value={form.group}
                        onChange={handleChange}
                    >
                        {groups.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
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

export default ResetPassBox;