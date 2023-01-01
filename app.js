const images = [
  'images/andre-benz-FPyGfMHXWZU-unsplash.jpg',
  'images/andre-benz-PpsgIw3iWZ4-unsplash.jpg',
  'images/andre-benz-xmGeZL8gims-unsplash.jpg',
  'images/henry-chen-Uw67Pmcj5mE-unsplash.jpg',
  'images/jc-gellidon-Khqmo4T-rs0-unsplash.jpg',
  'images/katherine-gu-2CotQSBTcjI-unsplash.jpg',
  'images/luke-stackpoole-XvSio7n_X6k-unsplash.jpg',
  'images/yeshi-kangrang-Qq7A85iCzhQ-unsplash.jpg',
  'images/zac-ong-RpZxHPikR6A-unsplash.jpg',
  'images/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg',
]

let gallery = document.querySelector('.gallery')
const displayImageContainer = document.querySelector('.displayImage')

images.forEach((image) => {
  let img = document.createElement('img')
  img.src = image
  img.classList.add('image')
  img.addEventListener('click', () => displayImage(image))
  gallery.appendChild(img)
})

function displayImage(src) {
  displayImageContainer.classList.add('active')

  const imageDisplay = document.querySelector('.container img')
  imageDisplay.src = src

  const button = document.querySelector('.container button')
  button.addEventListener('click', removeImageDisplay)
}

function removeImageDisplay() {
  displayImageContainer.classList.remove('active')
}
