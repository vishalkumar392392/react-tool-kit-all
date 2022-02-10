import { uiActions } from "../slices/ui-slice";
import { cartActions } from "../slices/cart-slice";
import axios from "axios";

export const fetchCartData =  () => {
  return function (dispatch) {

    axios
      .get("https://vishal-63dcb-default-rtdb.firebaseio.com/cart.json")
      .then((res) => {
        dispatch(cartActions.replaceCart({ data: res.data }));
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Fetching cart data failed..",
          })
        );
      });

    // const data = await response.json();

    // console.log(data);
    // dispatch(cartActions.replaceCart({ data}));
    //   .then((res) => {
    //     await res.json();
    //       dispatch(cartActions.replaceCart({ data: res.json() }));
    //       return res.json();
    //   })
    //   .catch((error) => {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "error",
    //         title: "Error!",
    //         message: "Fetching cart data failed..",
    //       })
    //     );
    //   });
  };
};

export const sendCartData = (cart) => {
  return async function (dispatch) {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `https://vishal-63dcb-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data to cart failed..");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully..",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed..",
        })
      );
    }
  };
};
