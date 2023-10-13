import style from './porducts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_BASKET, ADD_PRODUCT } from '../../../store/store';
import { useEffect } from 'react';
import axios from 'axios';

const Porducts = () => {
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        'https://dummyjson.com/products?limit=10&skip=10'
      );
      dispatch({ type: ADD_PRODUCT, payload: response.data.products });
      console.log(response.data.products);
    };
    getProduct();
  }, []);
  const dataPoroducts = useSelector((state) => state.products);
  console.log(dataPoroducts);

  const dispatch = useDispatch();
  const heandelEddBasket = (e) => {
    dispatch({ type: ADD_BASKET, payload: e });
  };

  return (
    <div className={style.container}>
      {dataPoroducts &&
        dataPoroducts.map((product) => (
          <div key={product.id}>
            <div className={style.basketContainer}>
              <div className={style.imgContainer}>
                <img src={product.thumbnail} alt="" />
              </div>
              <div className={style.baskeName}>
                <h2>{product.title}</h2>
                <div className={style.basketBtnContainer}>
                  <span>{product.price} $</span>
                  <button
                    type="button"
                    onClick={() => heandelEddBasket(product)}
                  >
                    В корзинку
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Porducts;
