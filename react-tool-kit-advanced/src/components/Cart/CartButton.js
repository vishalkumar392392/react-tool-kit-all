import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import {uiActions} from '../../store/slices/ui-slice'

const CartButton = (props) => {

  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart.totalQuantity);

  const toogleHandler = () => {
    dispatch(uiActions.toogle())
  }

  return (
    <button className={classes.button} onClick={toogleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
