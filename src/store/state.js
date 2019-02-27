let defaultCity = '深圳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city || '深圳'
  }
} catch (e) {}
export default {
  city: defaultCity
}
