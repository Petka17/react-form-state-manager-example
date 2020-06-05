interface ApplicationFormFields {
  stepName: 'First' | 'Second'
  firstName: string
  vipFlag: boolean
}

interface ApplicationFormExtFields {
  employmentFlag: boolean
}

interface UserFormFields {
  email: string
  password: string
  firstName: string
  lastName: string
}

type SetValueFn<Values extends object> = <FieldName extends keyof Values>(
  name: FieldName,
  value: Values[FieldName],
) => void
