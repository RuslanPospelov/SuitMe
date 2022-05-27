import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addUserFetch } from '../../redux/reduxThunk/userThunk';

function Registration() {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur' }); // 'onBlur' - покажет ошибку в случае если изменил фокус инпута

  const addUser = (data) => {
    dispatch(addUserFetch(data));
  };

  return (
    <form className="container center" onSubmit={handleSubmit(addUser)}>
      <p className='center'> Зарегистрируйтесь, чтобы начать</p>
      <div className="container">
        <div className="container">
          <input {...register("name", { required: 'Необходимо указать ваше Имя' })} placeholder="Введите Имя" type="text" className="validate center" required />
          <div>{errors?.name && <p>{errors?.name?.message}</p>}</div>
        </div>
      </div>
      <div className="container">
        <div className="container">
          <input {...register("email", { required: 'Необходимо указать Email', pattern: {value:  /^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/, message: 'Необходимо указать @' } })} className="validate center" placeholder='Введите Email' />
          <div>{errors?.email && <p>{errors?.email?.message}</p>}</div>
        </div>
        <div className="container">
          <div className="input-field col s12">
            <input {...register("password", { required: 'Поле обязательно к заполнению', minLength: { value: 5, message: 'Пароль должен быть не менее 5 символов' } })} type="password" className="validate center" placeholder='Введите пароль' />
            <div>{errors?.password && <p>{errors?.password?.message}</p>}</div>
          </div>
          <p className='center'>Если Вы зарегистрированы, перейдите<Link to='/login'> Login</Link> </p>
          <button id='btn-reg' type='submit' className='waves-effect waves-light btn-large brown lighten-2' disabled={!isValid}>Зарегистрироваться</button>
        </div>
      </div>
    </form>
  );
}

export default Registration;
