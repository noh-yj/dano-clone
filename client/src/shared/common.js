// 회원가입, 회원정보 수정 정규식

export const emailCheck = (email) => {
  let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;

  return _reg.test(email);
};
export const idCheck = (id) => {
  let _reg = /^[0-9a-z]+$/;
  return _reg.test(id);
};

export const phone_numCheck = (phone_num) => {
  let _reg = /(\d{3}).*(\d{3}).*(\d{4})/;
  return _reg.test(phone_num);
};
