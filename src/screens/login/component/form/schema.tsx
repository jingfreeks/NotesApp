import * as yup from 'yup';
export const Schema = yup
  .object({
    phoneno: yup.string().required('Phone No Should be required'),
  })
  .required();
