/**
 * Created by nasir on 16/07/2017.
 */
import store from '../store'


function getHipsterName(name, email) {
  return `Hipster name from ${name} and ${email}`
}

export function generateName(form) {
  const name = form.name
  const email = form.email
  const theme = form.theme
  let newName;

  switch (theme) {
    case 'classic':
      newName = `${name} and brothers`
      break;
    case 'business':
      newName = `${name} Corp`
      break;
    default:
      // this will be Hipster
      newName = getHipsterName(name, email)
  }

  const result = store.state.result
  result['companyName'] = newName
  store.setState({ result })

}

export function changePage(pageName) {
  store.setState({ pageName })
}