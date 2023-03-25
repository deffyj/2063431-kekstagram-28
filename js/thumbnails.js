const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const thumbnailContainer = document.querySelector('.pictures');

const createThumbnail = ({ url, description, comments, likes}) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);

  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__img').alt = description;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;

  return thumbnailElement;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnail(picture);
    fragment.append(thumbnailElement);
  });

  thumbnailContainer.append(fragment);
};

export { renderThumbnails };
