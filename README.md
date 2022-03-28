# 감정 분석 서비스 "Emotion Catcher"

#### 광고 시청자의 감정을 분석하는 서비스

##

## 목차
### [문제 정의](#문제-정의)
### [환경 설정 및 구조](#환경-설정-및-구조)
### [모델 이슈](#모델-이슈)
### [결과](#모델-이슈)
####
####
####
####
####
####
####
####
####
####
####
####
####
####
####
##

### 문제 정의 
- 무엇을 해결하려 하는가?
   - 상품 출시 전, 소비자 반응을 리서치함으로써 광고의 반응을 사전조사.
   - 마케팅 효율성 증대 기대
 
- 감성적인 컨텐츠가 마케팅에 효과가 있을까?
![image](https://user-images.githubusercontent.com/19571027/160348486-3a29dd8c-e68a-4dec-8875-d7810ea6ce8a.png)
    - Pringle, Hamish. Brand immortality: How brands can live long and prosper. Kogan Page Publishers, 2008.
- 약 15% 광고 효과 증대를 기대할 수 있음

### 환경 설정

##### 사용 도구
- React
- Jupyter
- Tensorflow.JS
- AmazonAWS
- JavaScript

##### 구조
- 이슈
    - 사람의 얼굴 데이터는 민감한 정보로 취급됨
    - 서버로 얼굴데이터를 보내지 않고 사용자의 클라이언트에서 감정 분석 수행
    - 분석된 데이터를 서버에 전송
 ![image](https://user-images.githubusercontent.com/19571027/160350661-54d4d00e-18bb-48f4-a5bc-73f4212452d0.png)

##### 모델 이슈
- 한국인 감정 얼굴 데이터
   - -> 양재 AI 허브에서 수집
- 얼굴을 인식하는데 Xception이 탁월한 성능을 보임.
- 유저의 로컬환경에서 모델이 진행되므로 보다 가벼운 모델이 이상적
- Ver 1.
   - -> Mini Exception 사용
   - -> 정확도 약70% (기존 Xception과 유사) 
   - -> Training 시간 1/5로 감소
![image](https://user-images.githubusercontent.com/19571027/160360813-d05acb99-5a78-43e4-896f-8c61c39fffc5.png)

- Ver 2.
   - 사용자 컴퓨터 환경에 따른 두번째 버전
   - -> 가장 정확한 모델
   - -> Face Expression Model
![image](https://user-images.githubusercontent.com/19571027/160361674-1dc9c284-fe02-40cd-98b7-55eb6f80d77f.png)

##### 결과

1. 메인페이지
 ![image](https://user-images.githubusercontent.com/19571027/160361948-611c1ace-6847-4957-a90a-c16a2374a764.png)
##
2. 영상 콘텐츠 제공 페이지 
![image](https://user-images.githubusercontent.com/19571027/160362030-becb3f66-6562-45e0-b9de-9cc8a7d283f3.png)
##
3. 감정 분석 페이지
![image](https://user-images.githubusercontent.com/19571027/160362087-4fede351-1dbe-41cb-b3dd-ceaae2353614.png)
##
4. 감정 분석 결과 페이지
![image](https://user-images.githubusercontent.com/19571027/160362481-ae781ff5-ae58-4df3-93d9-85b3ac1626d6.png)





