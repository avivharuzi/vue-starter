import lowercase from './lowercase'
import uppercase from './uppercase'
import capitalize from './capitalize'
import ucwords from './ucwords'
import repeat from './repeat'
import truncate from './truncate'
import trim from './trim'
import placeholder from './placeholder'
import slugify from './slugify'
import json from './json'
import slice from './slice'
import currency from './currency'
import date from './date'

const methods = {
  lowercase,
  uppercase,
  capitalize,
  ucwords,
  repeat,
  truncate,
  trim,
  placeholder,
  slugify,
  json,
  slice,
  currency,
  date
}

const filters = {
  install: (Vue) => {
    Object.keys(methods).forEach(key => {
      Vue.filter(key, methods[key])
    })

    Vue.prototype['$filters'] = methods
  }
}

export default filters
