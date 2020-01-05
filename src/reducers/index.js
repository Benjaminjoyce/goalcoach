import { SIGNED_IN } from '../constants';

let user = {
    email: null
}

export default (state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const { email } = action;
            user = {
                email
            }
            return user;
        default:
            return state;
    }
}

  /*
   Again with using break OR return if you want to use return there's isn't any need to declare the "user" object before returning it.

  case SIGNED_IN:
     return { email: action.email };
  */
