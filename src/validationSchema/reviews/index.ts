import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string().nullable(),
  review_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
