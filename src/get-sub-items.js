export default ({ items, field }) =>
  field
    ? items.reduce((previousValue, currentValue) => {
      previousValue.push(currentValue)
      const value = currentValue[field]
      if (value && value.length > 0) {
        previousValue.push(...value)
      }
      return previousValue
    }, [])
    : items
