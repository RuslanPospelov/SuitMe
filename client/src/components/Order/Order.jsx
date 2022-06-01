import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderFetch } from '../../redux/reduxThunk/orderThunk';
import style from './order.module.css'


function Order(props) {
  const { user } = useSelector(store => store.user)
  console.log(user);
  const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur' }); // 'onBlur' - покажет ошибку в случае если изменил фокус инпута
  
    const addOrder = async (data) => {
      dispatch(addOrderFetch({...data, user_id: user.id, status: 'Ожидание'}));
    };
  return (
    <form  onSubmit={handleSubmit(addOrder)}>
    <div className={style.order}>
       <div>
         <input {...register("name", { required: 'Поле обязательно к заполнению' })} placeholder="Введите Имя" type="text" className="validate center" required />
         <div>{errors?.name && <p>{errors?.name?.message}</p>}</div>
       </div>
       <div>
         <input {...register("address", { required: 'Поле обязательно к заполнению'}) } className="validate center" placeholder='Введите Адрес' />
         <div>{errors?.adress && <p>{errors?.adress?.message}</p>}</div>
       </div>
         <div>
           <input {...register("phone", { required: 'Поле обязательно к заполнению', minLength: { value: 7,} })} type="number" placeholder='Введите номер телефона'/>
           <div>{errors?.phone && <p>{errors?.phone?.message}</p>}</div>
         </div>
         <div>
           <h4>Укажите дату начала аренды товара: </h4>
           <input {...register("start_rent", { required: 'Заполните дату', })} type="date"/>
           <div>{errors?.rent && <p>{errors?.rent?.message}</p>}</div>
         </div>
         <div>
           <h4>Укажите дату завершения аренды товара: </h4>
           <input {...register("end_rent", { required: 'Заполните дату', })} type="date"/>
           <div>{errors?.rent && <p>{errors?.rent?.message}</p>}</div>
         </div>
         <button className={style.button}  type='submit' disabled={!isValid}>Заказать</button>
         </div>
   </form>
  );
}

export default Order;