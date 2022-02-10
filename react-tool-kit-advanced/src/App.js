import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/slices/ui-slice";
import { sendCartData, fetchCartData } from "./store/actions/cart-action";

// let initialState = true;
function App() {
  const isCart = useSelector((state) => state.ui.cartIsVisibe);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const enableNotification = useSelector(
    (state) => state.ui.enableNotification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!enableNotification) {
      dispatch(uiActions.flagNotification());
      // initialState = false;
      return;
    }
    if(cart.changed){

      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
