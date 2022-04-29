export default ({ items, field }) =>
  field
    ? items.reduce((previousValue, currentValue) => {
      const value = currentValue[field]
      if (value && value.length > 0) {
        value.forEach((item) => {
          previousValue.push({
            ...currentValue,
            [field]: [item]
          })
        })
      } else {
        previousValue.push(currentValue)
      }
      return previousValue
    }, [])
    : items
