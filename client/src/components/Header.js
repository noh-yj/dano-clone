import React, { useState } from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';
import { getCookie } from '../shared/Cookie';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

function Header(props) {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  let menustyle;
  menu ? (menustyle = { display: 'block' }) : (menustyle = { display: 'none' });
  const user = useSelector((state) => state.user);
  console.log(user.user);
  // const username = user.user.name
  // const is_login = user.is_login;
  const cookie = getCookie('is_login') ? true : false;
  // console.log(getCookie('is_login'));
  // console.log(cookie, is_login);
  if (cookie) {
    return (
      <>
        <Container>
          <FlexBox>
            <div>
              <Span>
                <Atag href='https://corp.dano.me/' target='_blank'>
                  다노 소개
                </Atag>
                &nbsp;&nbsp;
                <strong style={{ color: 'rgb(239, 239, 239)' }}>|</strong>
              </Span>
              <Atag
                href='https://mydano.net/?utm_source=danoshop&utm_medium=referral&utm_campaign=danoshop'
                target='_blank'
              >
                마이다노
              </Atag>
            </div>
            <HeaderTopUl>
              <HeaderLi
                onClick={() => {
                  history.push('/mypage');
                }}
              >
                name님
              </HeaderLi>
              <HeaderLi
                onClick={() => {
                  dispatch(userActions.logOut());
                  history.push('/');
                }}
              >
                로그아웃
              </HeaderLi>
              <HeaderLi
                onClick={() => {
                  history.push('/mypage');
                }}
              >
                마이페이지
              </HeaderLi>
              <HeaderLi
                onClick={() => {
                  history.push('/orderlist');
                }}
              >
                주문내역
              </HeaderLi>
              <HeaderLi
                onClick={() => {
                  history.push('/shoppingbag');
                }}
              >
                장바구니
              </HeaderLi>
              <HeaderLi
                onClick={() => {
                  history.push('/prepare');
                }}
              >
                Q&A
              </HeaderLi>
            </HeaderTopUl>
          </FlexBox>

          <FlexBoxMid>
            <Logo
              onClick={() => {
                history.push('/');
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='183' height='31'>
                <g fill='none' fillRule='evenodd'>
                  <path
                    fill='#000'
                    d='M107.448.077c4.155 0 6.366 2.21 6.366 6.366v2.918c0 .442-.221.707-.708.707h-4.465c-.442 0-.707-.265-.707-.707V7.504c0-1.15-.575-1.768-1.769-1.768h-2.431c-1.105 0-1.769.618-1.769 1.768v3.758l10.7 3.448c.75.266 1.149.796 1.149 1.636v8.311c0 4.156-2.21 6.367-6.366 6.367h-4.952c-4.112 0-6.366-2.21-6.366-6.367v-2.873c0-.486.265-.707.707-.707h4.465c.487 0 .708.22.708.707v1.857c0 1.193.663 1.768 1.768 1.768h2.387c1.15 0 1.769-.575 1.769-1.768v-4.465l-10.61-3.449c-.796-.265-1.194-.796-1.194-1.636V6.443c0-4.156 2.254-6.366 6.366-6.366h4.952zm23.342.707c0-.442.265-.707.707-.707h4.554c.53 0 .751.265.751.707v29.532c0 .443-.22.708-.751.708h-4.554c-.442 0-.707-.265-.707-.708v-11.76h-5.659v11.76c0 .443-.265.708-.708.708h-4.553c-.53 0-.752-.265-.752-.708V.784c0-.442.221-.707.752-.707h4.553c.443 0 .708.265.708.707v11.937h5.659V.784zm21.662 24.536c1.15 0 1.768-.574 1.768-1.768V7.548c0-1.15-.618-1.768-1.768-1.768h-2.83c-1.149 0-1.768.619-1.768 1.768v16.004c0 1.194.62 1.769 1.769 1.769h2.83zM142.107 6.444c0-4.156 2.21-6.366 6.366-6.366h4.952c4.155 0 6.366 2.21 6.366 6.366v18.214c0 4.156-2.21 6.367-6.366 6.367h-4.952c-4.156 0-6.366-2.21-6.366-6.367V6.443z'
                  ></path>
                  <path
                    fill='#000'
                    d='M10.27 15.771c1.194 0 1.77-.663 1.77-1.768V7.548c0-1.15-.576-1.768-1.77-1.768l-4.42.044v9.992l4.42-.045zM.103.784C.102.342.368.077.81.077h10.61c4.156 0 6.366 2.21 6.366 6.366v8.665c0 4.112-2.21 6.322-6.366 6.366l-5.57.045v8.842c0 .442-.221.707-.708.707L.81 31.024c-.442 0-.708-.265-.708-.708V.784z'
                    mask='url(#DanoshopLogo-desktop_svg__70n6nwba7b)'
                    transform='translate(164.993)'
                  ></path>
                  <path
                    fill='#000'
                    d='M10.087 25.128c1.148.004 1.769-.568 1.773-1.76l.052-15.68c.004-1.192-.613-1.812-1.761-1.816l-4.064-.014-.063 19.257 4.063.013zM.097.716C.1.274.322.01.808.01l10.6.035c4.151.014 6.352 2.274 6.338 6.425l-.06 18.153c-.014 4.151-2.23 6.352-6.38 6.339l-10.6-.036c-.486-.001-.707-.223-.705-.709L.098.716zm32.904 6.897L30.18 19.617l5.565.018-2.743-12.022zm6.195 23.34c-.397-.001-.618-.223-.705-.62l-1.395-5.57-8.303-.027-1.388 5.56c-.09.397-.311.617-.708.616l-4.329-.014c-.485-.002-.705-.268-.571-.753L29.227.622c.089-.441.355-.617.752-.616l6.14.02c.397.002.661.18.748.621l7.234 29.572c.13.486-.091.75-.62.748l-4.285-.014z'
                  ></path>
                  <path
                    fill='#000'
                    d='M18.325.058c.442.001.706.267.704.709l-.097 29.503c-.002.441-.268.705-.71.704l-3.488-.012c-.398-.001-.618-.179-.793-.577L5.693 13.486l-.056 16.74c-.001.441-.223.705-.709.704l-4.151-.014c-.442-.001-.706-.267-.704-.709L.17.704C.172.263.438 0 .88 0l3.489.012c.397 0 .617.178.792.576l8.248 16.9.055-16.74c.002-.442.224-.706.71-.704l4.15.014z'
                    mask='url(#DanoshopLogo-desktop_svg__n6hr3f1dmd)'
                    transform='translate(48.6)'
                  ></path>
                  <path
                    fill='#000'
                    d='M83.292 25.253c1.149.004 1.77-.569 1.774-1.761l.053-15.988c.003-1.149-.613-1.77-1.762-1.773l-2.827-.01c-1.147-.003-1.768.613-1.771 1.762l-.053 15.988c-.004 1.192.612 1.769 1.76 1.772l2.826.01zM73.021 6.36C73.034 2.208 75.25.007 79.4.02l4.947.017c4.152.014 6.353 2.229 6.339 6.381l-.06 18.196c-.014 4.152-2.23 6.353-6.381 6.34l-4.947-.017c-4.151-.014-6.352-2.23-6.339-6.381l.06-18.196z'
                  ></path>
                </g>
              </svg>
            </Logo>
            <div>
              <InputBox>
                <Search type='text' placeholder='다노닭' />
                <SearchImg>
                  <Img
                    src='https://danoshop.net/mall/upload/resource/common/danoshop-search-ic@.png'
                    alt='input'
                  />
                </SearchImg>
              </InputBox>
              <Info>
                *배송안내{' '}
                <InfoStrong>평일 낮 12시 이전 주문시 당일 출고</InfoStrong>
              </Info>
            </div>
          </FlexBoxMid>
        </Container>
        <NavBar>
          <Container>
            <Nav>
              <NavBox>
                <li
                  onClick={() => {
                    history.push('/products/allproducts');
                  }}
                >
                  전체 보기
                </li>
                <li
                  onClick={() => {
                    history.push('/danoinfo');
                  }}
                >
                  다노샵 소개
                </li>
                <li
                  onClick={() => {
                    history.push('/products/popularproducts');
                  }}
                >
                  인기상품
                </li>
                <li
                  onClick={() => {
                    history.push('/products/newproducts');
                  }}
                >
                  신상품
                </li>
                <li
                  onClick={() => {
                    history.push('/products/danoproducts');
                  }}
                >
                  다노제품
                </li>
                <li
                  onClick={() => {
                    history.push('/products/cheapproducts');
                  }}
                >
                  알뜰상품
                </li>
                <li
                  onClick={() => {
                    history.push('/products/freeproducts');
                  }}
                >
                  무료 배송
                </li>
                <li
                  onMouseOver={() => {
                    setMenu(true);
                  }}
                  onMouseOut={() => {
                    setMenu(false);
                  }}
                  onClick={() => {
                    history.push('/prepare');
                  }}
                >
                  상품유형별
                  <HoverMenu style={menustyle}>
                    <ul>
                      <li>홈 트레이닝</li>
                      <li>식단세트</li>
                      <li>식사대용</li>
                      <li>건강간식</li>
                      <li>차/음료/두유</li>
                      <li>오일/소스/향신료</li>
                      <li>키친툴</li>
                    </ul>
                  </HoverMenu>
                </li>
                <li
                  onClick={() => {
                    history.push('/prepare');
                  }}
                >
                  공지사항
                </li>
              </NavBox>
            </Nav>
          </Container>
        </NavBar>
      </>
    );
  }
  return (
    <>
      <Container>
        <FlexBox>
          <div>
            <Span>
              <Atag href='https://corp.dano.me/' target='_blank'>
                다노 소개
              </Atag>
              &nbsp;&nbsp;
              <strong style={{ color: 'rgb(239, 239, 239)' }}>|</strong>
            </Span>
            <Atag
              href='https://mydano.net/?utm_source=danoshop&utm_medium=referral&utm_campaign=danoshop'
              target='_blank'
            >
              마이다노
            </Atag>
          </div>
          <HeaderTopUl>
            <HeaderLi
              onClick={() => {
                history.push('/user/login');
              }}
            >
              로그인
            </HeaderLi>
            <HeaderLi
              onClick={() => {
                history.push('/user/signup');
              }}
            >
              회원가입
            </HeaderLi>
            <HeaderLi
              onClick={() => {
                history.push('/orderlist');
              }}
            >
              주문내역
            </HeaderLi>
            <HeaderLi
              onClick={() => {
                history.push('/shoppingbag');
              }}
            >
              장바구니
            </HeaderLi>
            <HeaderLi
              onClick={() => {
                history.push('/prepare');
              }}
            >
              Q&A
            </HeaderLi>
          </HeaderTopUl>
        </FlexBox>

        <FlexBoxMid>
          <Logo
            onClick={() => {
              history.push('/');
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='183' height='31'>
              <g fill='none' fillRule='evenodd'>
                <path
                  fill='#000'
                  d='M107.448.077c4.155 0 6.366 2.21 6.366 6.366v2.918c0 .442-.221.707-.708.707h-4.465c-.442 0-.707-.265-.707-.707V7.504c0-1.15-.575-1.768-1.769-1.768h-2.431c-1.105 0-1.769.618-1.769 1.768v3.758l10.7 3.448c.75.266 1.149.796 1.149 1.636v8.311c0 4.156-2.21 6.367-6.366 6.367h-4.952c-4.112 0-6.366-2.21-6.366-6.367v-2.873c0-.486.265-.707.707-.707h4.465c.487 0 .708.22.708.707v1.857c0 1.193.663 1.768 1.768 1.768h2.387c1.15 0 1.769-.575 1.769-1.768v-4.465l-10.61-3.449c-.796-.265-1.194-.796-1.194-1.636V6.443c0-4.156 2.254-6.366 6.366-6.366h4.952zm23.342.707c0-.442.265-.707.707-.707h4.554c.53 0 .751.265.751.707v29.532c0 .443-.22.708-.751.708h-4.554c-.442 0-.707-.265-.707-.708v-11.76h-5.659v11.76c0 .443-.265.708-.708.708h-4.553c-.53 0-.752-.265-.752-.708V.784c0-.442.221-.707.752-.707h4.553c.443 0 .708.265.708.707v11.937h5.659V.784zm21.662 24.536c1.15 0 1.768-.574 1.768-1.768V7.548c0-1.15-.618-1.768-1.768-1.768h-2.83c-1.149 0-1.768.619-1.768 1.768v16.004c0 1.194.62 1.769 1.769 1.769h2.83zM142.107 6.444c0-4.156 2.21-6.366 6.366-6.366h4.952c4.155 0 6.366 2.21 6.366 6.366v18.214c0 4.156-2.21 6.367-6.366 6.367h-4.952c-4.156 0-6.366-2.21-6.366-6.367V6.443z'
                ></path>
                <path
                  fill='#000'
                  d='M10.27 15.771c1.194 0 1.77-.663 1.77-1.768V7.548c0-1.15-.576-1.768-1.77-1.768l-4.42.044v9.992l4.42-.045zM.103.784C.102.342.368.077.81.077h10.61c4.156 0 6.366 2.21 6.366 6.366v8.665c0 4.112-2.21 6.322-6.366 6.366l-5.57.045v8.842c0 .442-.221.707-.708.707L.81 31.024c-.442 0-.708-.265-.708-.708V.784z'
                  mask='url(#DanoshopLogo-desktop_svg__70n6nwba7b)'
                  transform='translate(164.993)'
                ></path>
                <path
                  fill='#000'
                  d='M10.087 25.128c1.148.004 1.769-.568 1.773-1.76l.052-15.68c.004-1.192-.613-1.812-1.761-1.816l-4.064-.014-.063 19.257 4.063.013zM.097.716C.1.274.322.01.808.01l10.6.035c4.151.014 6.352 2.274 6.338 6.425l-.06 18.153c-.014 4.151-2.23 6.352-6.38 6.339l-10.6-.036c-.486-.001-.707-.223-.705-.709L.098.716zm32.904 6.897L30.18 19.617l5.565.018-2.743-12.022zm6.195 23.34c-.397-.001-.618-.223-.705-.62l-1.395-5.57-8.303-.027-1.388 5.56c-.09.397-.311.617-.708.616l-4.329-.014c-.485-.002-.705-.268-.571-.753L29.227.622c.089-.441.355-.617.752-.616l6.14.02c.397.002.661.18.748.621l7.234 29.572c.13.486-.091.75-.62.748l-4.285-.014z'
                ></path>
                <path
                  fill='#000'
                  d='M18.325.058c.442.001.706.267.704.709l-.097 29.503c-.002.441-.268.705-.71.704l-3.488-.012c-.398-.001-.618-.179-.793-.577L5.693 13.486l-.056 16.74c-.001.441-.223.705-.709.704l-4.151-.014c-.442-.001-.706-.267-.704-.709L.17.704C.172.263.438 0 .88 0l3.489.012c.397 0 .617.178.792.576l8.248 16.9.055-16.74c.002-.442.224-.706.71-.704l4.15.014z'
                  mask='url(#DanoshopLogo-desktop_svg__n6hr3f1dmd)'
                  transform='translate(48.6)'
                ></path>
                <path
                  fill='#000'
                  d='M83.292 25.253c1.149.004 1.77-.569 1.774-1.761l.053-15.988c.003-1.149-.613-1.77-1.762-1.773l-2.827-.01c-1.147-.003-1.768.613-1.771 1.762l-.053 15.988c-.004 1.192.612 1.769 1.76 1.772l2.826.01zM73.021 6.36C73.034 2.208 75.25.007 79.4.02l4.947.017c4.152.014 6.353 2.229 6.339 6.381l-.06 18.196c-.014 4.152-2.23 6.353-6.381 6.34l-4.947-.017c-4.151-.014-6.352-2.23-6.339-6.381l.06-18.196z'
                ></path>
              </g>
            </svg>
          </Logo>
          <div>
            <InputBox>
              <Search type='text' placeholder='다노닭' />
              <SearchImg>
                <Img
                  src='https://danoshop.net/mall/upload/resource/common/danoshop-search-ic@.png'
                  alt='input'
                />
              </SearchImg>
            </InputBox>
            <Info>
              *배송안내{' '}
              <InfoStrong>평일 낮 12시 이전 주문시 당일 출고</InfoStrong>
            </Info>
          </div>
        </FlexBoxMid>
      </Container>
      <NavBar>
        <Container>
          <Nav>
            <NavBox>
              <li
                onClick={() => {
                  history.push('/products/allproducts');
                }}
              >
                전체 보기
              </li>
              <li
                onClick={() => {
                  history.push('/danoinfo');
                }}
              >
                다노샵 소개
              </li>
              <li
                onClick={() => {
                  history.push('/products/popularproducts');
                }}
              >
                인기상품
              </li>
              <li
                onClick={() => {
                  history.push('/products/newproducts');
                }}
              >
                신상품
              </li>
              <li
                onClick={() => {
                  history.push('/products/danoproducts');
                }}
              >
                다노제품
              </li>
              <li
                onClick={() => {
                  history.push('/products/cheapproducts');
                }}
              >
                알뜰상품
              </li>
              <li
                onClick={() => {
                  history.push('/products/freeproducts');
                }}
              >
                무료 배송
              </li>
              <li
                onMouseOver={() => {
                  setMenu(true);
                }}
                onMouseOut={() => {
                  setMenu(false);
                }}
                onClick={() => {
                  history.push('/prepare');
                }}
              >
                상품유형별
                <HoverMenu style={menustyle}>
                  <ul>
                    <li>홈 트레이닝</li>
                    <li>식단세트</li>
                    <li>식사대용</li>
                    <li>건강간식</li>
                    <li>차/음료/두유</li>
                    <li>오일/소스/향신료</li>
                    <li>키친툴</li>
                  </ul>
                </HoverMenu>
              </li>
              <li
                onClick={() => {
                  history.push('/prepare');
                }}
              >
                공지사항
              </li>
            </NavBox>
          </Nav>
        </Container>
      </NavBar>
    </>
  );
}

const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Span = styled.span`
  color: #a1a1a1;
  font-size: 13px;
  margin: 0 11px 0 5px;
  cursor: pointer;
  line-height: 40px;
`;
const Atag = styled.a`
  color: #a1a1a1;
  font-size: 13px;
  margin: 0 11px 0 5px;
  cursor: pointer;
  line-height: 40px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #a1a1a1;
  }
`;
const HeaderTopUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;
const HeaderLi = styled.li`
  list-style: none;
  color: #000;
  font-size: 12px;
  cursor: pointer;
  margin: 10px auto;
  &::after {
    content: '|';
    margin: 0 13px;
    color: rgb(0, 0, 0);
  }
  &:last-child {
    &::after {
      content: '';
      margin: 0;
    }
  }
`;

const FlexBoxMid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 117px;
`;
const Logo = styled.div`
  cursor: pointer;
`;
const InputBox = styled.div`
  position: relative;
  margin-top: 20px;
`;

const Search = styled.input`
  width: 250px;
  height: 35px;
  padding: 5px 10px;
  font-weight: 300;
  font-size: 14px;
  border: 1px solid rgb(216, 216, 216);
  color: rgb(255, 111, 97);
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const SearchImg = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
  width: 18px;
`;

const Img = styled.img`
  border: none;
  vertical-align: middle;
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

const Info = styled.div`
  font-size: 13px;
  margin-top: 13px;
  text-align: right;
  font-weight: normal;
  cursor: default;
`;
const InfoStrong = styled.strong`
  color: rgb(255, 111, 97);
`;

const NavBar = styled.div`
  width: 100%;
  background-color: rgb(250, 248, 248);
  z-index: 100;
  height: 50px;
  position: sticky;
  top: 0;
`;
const Nav = styled.div`
  padding: 0px;
  box-sizing: border-box;
  height: 50px;
`;

const NavBox = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: space-between;

  & li {
    list-style: none;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    height: 50px;
    font-size: 16px;
    color: #000;
    cursor: pointer;
    &:hover {
      color: rgb(255, 111, 97);
    }
  }
`;
const HoverMenu = styled.div`
  background-color: rgb(255, 255, 255);
  z-index: 999;
  & ul {
    padding: 0;
    margin: 0;
  }
`;

export default Header;
