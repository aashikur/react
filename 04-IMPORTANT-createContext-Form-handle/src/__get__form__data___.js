/**
* 1. e.target.[name of the input field].value
* 2. use from action and fromDta in the action handler. formData.get('name of the  input field')
*
*3. Controlled component. one per each field. use state on change of the field. useful to dynamic handle error
*
* const [formData, setFormData] = useState({
  name: '',
  password: '',
  phone: '',
  })
* 
* 4. uncontrolled using ref
*
* 5.  Hooks form 
**/