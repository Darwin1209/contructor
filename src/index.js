import { model } from './model'
import { templates } from './templates'
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach((block) => {
  const html = templates[block.type](block)
  console.log(html)
  $site.insertAdjacentHTML('beforeend', html)
})
