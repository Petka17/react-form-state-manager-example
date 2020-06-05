import React from 'react'

import { FormContextProvider } from './applicationForm/context'
import Field from './applicationForm/Field'

const App = () => {
  const [values, setValues] = React.useReducer(
    (state: ApplicationFormFields, changes: Partial<ApplicationFormFields>) => ({
      ...state,
      ...changes,
    }),
    {
      stepName: 'First',
      firstName: '',
      vipFlag: false,
    },
  )

  const setValue: SetValueFn<ApplicationFormFields> = (name, value) => {
    setValues({ [name]: value })
  }

  const onClick = () => {
    if (values.stepName === 'First') {
      setValue('stepName', 'Second')
    } else {
      setValue('stepName', 'First')
    }
  }

  return (
    <FormContextProvider
      values={values}
      setValue={setValue}
      submitForm={(values: ApplicationFormFields) => {
        console.log('submit', values)
      }}
    >
      {({ values: formValues, errors, processSubmit }) => (
        <>
          {formValues.vipFlag === true && <Field name="firstName" />}
          <Field name="vipFlag" />

          <pre>{JSON.stringify(formValues, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>

          <Field name="stepName" />

          <button type="button" onClick={onClick}>
            update step
          </button>

          <br />

          <button type="submit">next</button>
        </>
      )}
    </FormContextProvider>
  )
}

export default App
