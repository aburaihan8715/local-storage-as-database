// ===============common function start==============
const getDb = () => JSON.parse(localStorage.getItem("shopping-cart"));
const updateDb = (shoppingCart) => localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
// ===============common function end==============

// add to local storage
const addToDb = (id) => {
  let shoppingCart = {};
  const storedShoppingCart = getDb();
  if (!storedShoppingCart) {
    shoppingCart[id] = 1;
  } else {
    shoppingCart = storedShoppingCart;
    if (shoppingCart[id]) {
      const newQuantity = shoppingCart[id] + 1;
      shoppingCart[id] = newQuantity;
    } else {
      shoppingCart[id] = 1;
    }
  }
  updateDb(shoppingCart);
};

// ==========using only if not else start============
// const addToDb = (id) => {
//   let shoppingCart = {};
//   const storedShoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
//   if (!storedShoppingCart) {
//     shoppingCart[id] = 1;
//   }
//   if (storedShoppingCart) {
//     shoppingCart = storedShoppingCart;
//     if (shoppingCart[id]) {
//       const newQuantity = shoppingCart[id] + 1;
//       shoppingCart[id] = newQuantity;
//     }
//     if (!shoppingCart[id]) {
//       shoppingCart[id] = 1;
//     }
//   }
//   localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
// };
// ==========using only if not else end============

// delete from local storage
const deleteFromDb = (id) => {
  const storedShoppingCart = getDb();
  if (!storedShoppingCart) {
    // nothing to do
  } else {
    const shoppingCart = storedShoppingCart;
    delete shoppingCart[id];
    updateDb(shoppingCart);
  }
};

// remove  form local storage
const removeDb = () => {
  localStorage.removeItem("shopping-cart");
};

// get data form local storage
const getShoppingCartData = () => {
  const storedShoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (storedShoppingCart) {
    return storedShoppingCart;
  } else {
    return {};
  }
};

export { addToDb, deleteFromDb, removeDb, getShoppingCartData };

// removeDb();
// addToDb("100abc");
// addToDb("100abc");
// addToDb("101abc");
// deleteFromDb("100abc");
// console.log(getShoppingCartData());

// =============end==================
