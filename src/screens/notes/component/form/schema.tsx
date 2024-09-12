import * as yup from 'yup';
export const Schema = yup
  .object({
    title: yup.string().required('Title Should be required'),
    description: yup
      .string()
      .required('Description Should be required')
  })
  .required();
