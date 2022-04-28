export default ({ fields }) => {
  const convertRow = (value) => fields.map((field) => field.field(value))

  return (data) => [fields.map((field) => field.name), ...data.map(convertRow)]
}
