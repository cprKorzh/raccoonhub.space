import React from 'react';
import { useStore } from 'effector-react';
import { setEmail, setPassword, submitForm, $email, $password, $registerStatus } from '../model/RegistrationModel';

const RegistrationForm = () => {
    const email = useStore($email); // Получаем состояние email
    const password = useStore($password); // Получаем состояние пароля
    const registerStatus = useStore($registerStatus); // Получаем статус регистрации

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(); // Отправляем форму
    };

    return (
        <div>
            <h2>Registration</h2>
            {registerStatus === 'loading' && <p>Loading...</p>}
            {registerStatus === 'success' && <p>Registration successful!</p>}
            {registerStatus === 'error' && <p>Error during registration.</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={registerStatus === 'loading'}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
