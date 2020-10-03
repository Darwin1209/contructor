import { row, col, css } from './utils'

export const templates = {
  title(block) {
    const { tag = 'h1', styles } = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
  },

  text(block) {
    return row(col(`<p>${block.value}</p>`))
  },

  columns(block) {
    return row(
      block.value.reduce(
        (acc, val) => `${acc}
          ${col(`<p>${val}</p>`)}
        `,
        ''
      )
    )
  },

  image(block) {
    const { imageStyles, alt = '', styles } = block.options
    return row(
      `<img src=${block.value} alt="${alt}" style="${css(imageStyles)}"/>`
    )
  },
}
