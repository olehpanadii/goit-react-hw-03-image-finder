export const ImageGaleryItem = ({ image }) => {
  return (
    <div>
      <img src={image.webformatURL} alt="" />
    </div>
  );
};
