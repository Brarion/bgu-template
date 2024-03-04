import { ChangeEvent, useEffect, useState } from "react";
import { cardImagesApi } from "../../api";

import './Images.css'

const Images = () => {
  const [image, setImage] = useState<string>('');
  const [code, setCode] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  }

  // debounce
  useEffect(() => {
    const getImages = async () => {
      try {
        const { deck_id } = await cardImagesApi.getDeckId();
        const { cards } = await cardImagesApi.getImage(deck_id);
        setImage(cards[0].image);
      } catch (error) {
        console.error(error);
      }
    }

    getImages();
  }, [code])

  return <div className="imagesWrapper">
    <input type="text" placeholder="Введите статус" value={code} onChange={onChange} />
    <img src={image} alt="Тут должна быть картинка с картой" />
  </div>
}

export default Images;