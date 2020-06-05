import createFormContext from './createFormContext'

const { FormContextProvider, useField } = createFormContext<UserFormFields>({
  email: {},
  password: {},
  firstName: {},
  lastName: {},
})

export { FormContextProvider, useField }

