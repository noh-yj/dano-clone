# 다노 클론 코딩 프로젝트

## 개요

- 프로젝트 주제: 클론 코딩
- 개발인원 4명 (프론트엔드: 노유진, 여지영 / 백엔드: 윤현동, 최재성)
- 개발 기간: 2021.04.02 ~ 2021.04.08
- 클라이언트: React, 서버: spring-boot 사용
- 형상관리 툴: git
<hr/>
<br/>

## 프로젝트 특징

- 본 프로젝트는 팀 프로젝트로 특정 웹사이트(다노샵)를 선정하여 클론코딩을 진행함
- UI 부분은 styled-components, material-ui, react-bootstrap(캐러셀)을 사용
- 컴포넌트 구성: 컴포넌트는 중간단위 및 페이지 단위로 구성했으며 디렉토리로 구분함
- 주요 기능: 로그인, 회원가입, 회원정보 수정 및 탈퇴, 장바구니 추가, 삭제, 조회, 주문내역 추가, 조회, 상품 조회 등
- 페이지 단위 컴포넌트 구성: 메인, 회원가입, 로그인, 마이페이지, 회원정보 수정, 제품 상세, 전체 제품, 인기 상품, 신상품, 다노제품, 알뜰상품, 무료배송, 다노샵 소개, 장바구니, 구매내역, 준비중 페이지
- DB구성
- user: {username, name, password, email, phone}
- product: {id, image_url, product_name, price, dano, free, trending, bestDeal, new}
- cart: {img_url, product_name, price, amount, username}
- order: {img_url, product_name, price, amount, username}
<hr/>
<br/>

## 상태관리 패키지

- react-redux, redux (+ redux-actions, immer 사용)
- redux-middleware(redux-thunk)
- react-router-dom
- 클라이언트-서버 통신: axios 사용
