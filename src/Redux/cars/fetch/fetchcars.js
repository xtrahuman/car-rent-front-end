import { loadCars, failCars } from '../actions/actions';

const fetchCars = () => fetch('http://127.0.0.1:3002/api/cars');

const fetchAllCars = () => (dispatch) => {
  fetchCars()
    .then((result) => result.json())
    .then((res) => dispatch(loadCars(res)))
    .catch((error) => dispatch(failCars(error.message)));
};
export default fetchAllCars;
