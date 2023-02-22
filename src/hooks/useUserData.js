
export default function useUserData() {

    const userData = JSON.parse(localStorage.getItem('BIAS_COMP_USER_DATA'));
  
    return userData;
  }
