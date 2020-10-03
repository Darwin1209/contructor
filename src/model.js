import image from './assets/image.png'
import { Block } from './classes/block'

export const model = [
  new Block('title', 'Constructor sites on pure js', {
    type: 'title',
    value: '',
    options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        'text-align': 'center',
        padding: '1.5rem',
      },
    },
  }),
  new Block('text', 'Some text'),
  new Block('columns', ['111111', '1124124', '51251251']),
  new Block('image', image, {
    styles: {},
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Это картинка',
  }),
]
