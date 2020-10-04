import { row, col, css } from '../utils.js'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`))
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(
      this.value.reduce(
        (acc, val) => `${acc}
          ${col(`<p>${val}</p>`)}
        `,
        ''
      )
    )
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { imageStyles, alt = '', styles } = this.options
    return row(
      `<img src=${this.value} alt="${alt}" style="${css(imageStyles)}"/>`
    )
  }
}
