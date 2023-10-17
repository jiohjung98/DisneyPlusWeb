commit 9fac46faea645e0030197760544e4595add3cd4c
Author: 정지오 <104253583+jiohjung98@users.noreply.github.com>
Date:   Tue Oct 17 19:18:50 2023 +0900

    Update README.md

diff --git a/README.md b/README.md
index 060de01..5423b82 100644
--- a/README.md
+++ b/README.md
@@ -35,11 +35,15 @@ https://react-disney-plus-app-543ef.web.app
 useState, hook 등 리액트에서 사용되는 개념을 직접 사용하다보니 어렵게만 느껴졌던 리액트가 어느정도는 친숙해짐<br/>
 하지만, 유저 이미지를 가져오는 부분과 스와이퍼 부분에서 오류가 생겨 해결하지 못했음<br/>
 스와이퍼는 지난 과제에서도 해결하지 못해 슬릭을 이용해 슬라이더를 구현했는데 이번에도 스와이퍼를 사용하니 계속 import 오류가 남<br/>
+
 styled-component를 사용해 코드를<br/>
 <img width="487" alt="image" src="https://github.com/jiohjung98/DisneyPlusWeb/assets/104253583/47d8c083-706b-4290-90a4-315bf152d9ad"><br/><br/>
 이렇게 적고 styled-component를<br/>
 <img width="301" alt="image" src="https://github.com/jiohjung98/DisneyPlusWeb/assets/104253583/13a0e719-8cd4-417c-877d-1c6566dc357e"><br/><br/>
 이렇게 작성했는데, img is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`. 이런 오류가 계속 떠서<br/>
 styled.div로 작성해서 구성했음. 그래서 이미지가 안뜨는건지 잘 모르겠는데 이부분은 한 번 공부해봐야겠다는 생각을 함
+-> 해결(UserImg를 감싸는 부분이 잘못됐었음)
+
+
 
 
