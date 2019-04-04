function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

/**
 * 返回当前日期时间
 * @param date
 * @param type 1: 只返回日期  2：只返回时间
 * @returns {string}
 */
function formatTime (date, type) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return type === 1 ? `${t1}` : type === 2 ? `${t2}` : `${t1} ${t2}`
}

export default {
  formatTime,
  formatNumber
}
