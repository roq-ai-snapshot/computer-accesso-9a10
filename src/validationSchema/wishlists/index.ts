import * as yup from 'yup';

export const wishlistValidationSchema = yup.object().shape({
  added_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
