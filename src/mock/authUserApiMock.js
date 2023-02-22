import { Base64 } from 'js-base64';
import { nanoid } from 'nanoid';

const usersDbMock = [{ email: 'candidate@test.com', password: 'Sj3jtod@!3' }];

export const authUserApiMock = (userEmail, userPassword) => {
  const user = usersDbMock.find(({ email }) => email === userEmail);
  if (user) {
    const password = Base64.decode(userPassword);
    if (user.password === password)
      return Promise.resolve({ data: { token: nanoid() } });
    return Promise.reject({ message: 'Неверный пароль' });
  }

  return Promise.reject({ message: 'Пользователь не найден' });
};
