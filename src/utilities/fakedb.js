// use local storage as your db for now
const addToDb = id => {
  const exists = getDb();
  let booking_list = {};
  if (!exists) {
    booking_list[id] = 1;
  }
  else {
    booking_list = JSON.parse(exists);
    if (booking_list[id]) {
      const newCount = booking_list[id] + 1;
      booking_list[id] = newCount;
    }
    else {
      booking_list[id] = 1;
    }
  }
  updateDb(booking_list);
}

const getDb = () => localStorage.getItem('booking_list');

const updateDb = cart => {
  localStorage.setItem('booking_list', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const booking_list = JSON.parse(exists);
    delete booking_list[id];
    updateDb(booking_list);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('booking_list');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }