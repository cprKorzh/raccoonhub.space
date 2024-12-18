import { createEvent, createStore, createEffect, forward } from 'effector';

// События для формы
export const setEmail = createEvent();
export const setPassword = createEvent();
export const submitForm = createEvent();

// Эффект для отправки запроса регистрации
export const registerFx = createEffect(async ({ email, password }) => {
    const response = await fetch('https://example.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error('Registration failed');
    return response.json();
});

// Состояние для формы
export const $email = createStore('')
    .on(setEmail, (_, email) => email); // Обновляем email

export const $password = createStore('')
    .on(setPassword, (_, password) => password); // Обновляем пароль

// Состояние для статуса регистрации
export const $registerStatus = createStore('idle')
    .on(registerFx.pending, () => 'loading') // Статус загрузки
    .on(registerFx.done, () => 'success')   // Успех
    .on(registerFx.fail, () => 'error');    // Ошибка

// Связываем submit формы с эффектом регистрации
forward({
    from: submitForm,
    to: registerFx,
});

// Отправляем данные на регистрацию
submitForm.watch(() => {
    registerFx({ email: $email.getState(), password: $password.getState() });
});
