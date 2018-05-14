import moment from 'moment'

function date(value, format = 'MM/DD/YYYY hh:mm') {
  return moment(value).format(format)
}

export default date
