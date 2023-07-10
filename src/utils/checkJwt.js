const checkJwt = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
};

export default checkJwt;
