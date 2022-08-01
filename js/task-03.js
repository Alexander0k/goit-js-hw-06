const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const galleryListEl = document.querySelector(".gallery");
galleryListEl.style.listStyle = "none"; /// добавив базовий стиль

const makeGalleryImage = images => {
  return images.map(image => {
    const galleryImageEl = document.createElement('li');
    galleryImageEl.insertAdjacentHTML("afterbegin", "<img>");
    galleryImageEl.firstChild.src = image.url;
    galleryImageEl.firstChild.alt = image.alt;
    galleryImageEl.firstChild.style.height = '250px';
    return galleryImageEl;
  })
};

const elements = makeGalleryImage(images);

galleryListEl.append(...elements);