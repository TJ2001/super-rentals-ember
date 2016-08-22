
import Ember from 'ember';

export function rentalCost(params) {
  var rentalPrice = params[0].get('cost');

  if (rentalPrice >= 2000){
    return '$$$$$';
  } else if (rentalPrice >= 1200){
    return '$$$$';
  } else if (rentalPrice >= 1000){
    return '$$$';
  } else if (rentalPrice >= 800){
    return '$$';
  } else if (rentalPrice <= 500){
    return '$';
  }
}

export default Ember.Helper.helper(rentalCost);
