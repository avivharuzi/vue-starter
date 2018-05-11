import moment from 'moment'

export function date(value, format = 'MM/DD/YYYY hh:mm') {
  return moment(value).format(format)
}
