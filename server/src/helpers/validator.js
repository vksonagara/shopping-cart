module.exports = {
  isEmail(email) {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(pattern.test(email)) {
      return true;
    } else {
      return false;
    }
  },
  isEmpty(data) {
    if(!data) {
      return true;
    } else {
      return false;
    }
  },
  isMobile(mobile) {
    let pattern = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    if(pattern.test(mobile)) {
      return true;
    } else {
      return false;
    }
  }
}