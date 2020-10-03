export const templates = {
  title(block) {
    return `
      <div class="row">
        <div class="col-sm">
        <h1>${block.value}</h1>
        </div>
      </div>
    `
  },

  text(block) {
    return `
      <div class="row">
        <div class="col-sm">
          <p>${block.value}</p>
        </div>
      </div>
    `
  },

  columns(block) {
    return `
      <div class="row">
      ${block.value.reduce(
        (acc, val) => `${acc}
        <div class="col-sm">
          <p>${val}</p>
        </div>
        `,
        ''
      )}
      </div>
    `
  },

  image(block) {
    return `
      <div class="row">
        <img src=${block.value} />
      </div>
    `
  },
}