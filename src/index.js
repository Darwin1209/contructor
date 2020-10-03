const htmlTemplate = {
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

const model = [
  {
    type: 'title',
    value: 'Hello World from JS',
  },
  {
    type: 'text',
    value: 'Some text',
  },
  {
    type: 'columns',
    value: ['111111', '1124124', '51251251'],
  },
  {
    type: 'image',
    value: './assets/image.png',
  },
]

const $site = document.querySelector('#site')

model.forEach((block) => {
  const html = htmlTemplate[block.type](block)
  console.log(html)
  $site.insertAdjacentHTML('beforeend', html)
})
