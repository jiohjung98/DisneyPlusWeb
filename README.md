### 프로젝트 개요
리액트를 사용한 디지니플러스웹사이트 만들기

### 배포주소
https://react-disney-plus-app-543ef.web.app/

### 기술 스택
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">  
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">  
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"> <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">


### 구현화면

<h5>시작페이지</h5>
<img width="1440" alt="image" src="https://github.com/jiohjung98/Python_practice/assets/104253583/d9482e78-029e-4924-b302-a4ad50417e32">

<h5>로그인</h5>
<img width="1440" alt="image" src="https://github.com/jiohjung98/DisneyPlusWeb/assets/104253583/4adf909c-9ec0-42cf-9b30-f98830e06fc0">

<h5>메인</h5>
<img width="1440" alt="image" src="https://github.com/jiohjung98/DisneyPlusWeb/assets/104253583/0cd25cae-11f5-464e-8af6-a2472063898e">

<h5>슬라이더로 영화정보 제공</h5>
<img width="1440" alt="image" src="https://github.com/jiohjung98/DisneyPlusWeb/assets/104253583/f2256a86-64d3-484b-98e5-b5fdc64442c2">

<h5>검색 기능</h5>
<img width="1440" alt="image" src="https://github.com/jiohjung98/DisneyPlusWeb/assets/104253583/fbc158e7-c67f-4e61-bb91-f7504448e028">



### 프로젝트 회고
 useState, hook 등 리액트에서 사용되는 개념을 직접 사용하다보니 어렵게만 느껴졌던 리액트가 어느정도는 친숙해짐<br/>
 하지만, 유저 이미지를 가져오는 부분과 스와이퍼 부분에서 오류가 생겨 해결하지 못했음<br/>
 스와이퍼는 지난 과제에서도 해결하지 못해 슬릭을 이용해 슬라이더를 구현했는데 이번에도 스와이퍼를 사용하니 계속 import 오류가 남<br/>

 styled-component를 사용해 코드를<br/>
 <img width="487" alt="image" src="https://github.com/jiohjung98/DisneyPlusWeb/assets/104253583/47d8c083-706b-4290-90a4-315bf152d9ad"><br/><br/>
 이렇게 적고 styled-component를<br/>
 <img width="301" alt="image" src="https://github.com/jiohjung98/DisneyPlusWeb/assets/104253583/13a0e719-8cd4-417c-877d-1c6566dc357e"><br/><br/>
 이렇게 작성했는데, img is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`. 이런 오류가 계속 떠서<br/>
 styled.div로 작성해서 구성했음. 그래서 이미지가 안뜨는건지 잘 모르겠는데 이부분은 한 번 공부해봐야겠다는 생각을 함<br/>
 -> 해결(UserImg를 감싸는 부분이 잘못됐었음)

 
 
