import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  console.log(props.images);
  //destructuring props.images object
  const image = props.images.map(image => {
    return (
      <ImageCard image={image} key={image.id}/>
    );
  });
    // image is now array of objects 
  return <div className="image-list">{image}</div>
  
};
export default ImageList;
