import { model } from './model'
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach((block) => {
  // const toHtml = templates[block.type]
  // if (toHtml) {
  $site.insertAdjacentHTML('beforeend', block.toHTML())
  // }
})
