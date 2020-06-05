import createFormContext from 'react-form-state-manager'

const { FormContextProvider, useField } = createFormContext<ApplicationFormFields, {}, ApplicationFormExtFields>({
  stepName: {
    effects: {
      firstName: () => 'test effect',
    },
  },
  firstName: { validate: (value, { vipFlag }) => !vipFlag || value.length > 2 || 'enter name' },
  vipFlag: {},
})

export { FormContextProvider, useField }

