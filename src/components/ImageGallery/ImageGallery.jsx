import { ImageGaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <ImageGaleryItem image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};
