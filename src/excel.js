import XLSX from 'xlsx'
import makeconvert from './convert.js'

export default ({ fields, outputType }) => {
  const convert = makeconvert({ fields })

  return ({ data, type }) => {
    const ws = XLSX.utils.aoa_to_sheet(convert(data))
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')

    return XLSX.write(wb, { type: outputType, bookType: type })
  }
}
