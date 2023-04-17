<p align="right">2023.01.30 ~ </p>

# 🪨 OYS-LAB
> 유니크한 인테리어 자체 제작 가구 쇼핑몰 
<div align="center">
<img width="700" alt="image" src="https://user-images.githubusercontent.com/87024040/232561423-cc293543-b204-48e0-964d-07c328d6ad0a.png">
</div>

## 👩🏻‍💻 프로젝트 소개
OYS-LAB은 하나의 작품과도 같은, 흔하지 않은 디자인이지만 기능적으로 미학적으로 만족하는, 그러면서도 어디에나 잘 어울리는 </br>
가구 ,조명, 인테리어 소품샵…  공간에 들어가는 모든 것들이 있는 곳입니다. </br>
</br>
- OYS-LAB 프로젝트는 클라이언트 요구사항에 맞춰 개발부터 배포까지 진행한 프로젝트입니다.
- 디자이너와 매주 회의를 가지면서 수정사항들을 반영하여 작업했습니다. 
- 웹사이트 특성상 SEO가 중요했기 때문에 Next 프레임워크를 사용했습니다.
- 가구 디자인 중인 관계로 현재는 1차 배포가 완료된 상태입니다.
- 추후 2차, 3차 배포를 통해 완성시킬 계획입니다.
</br>

## 👀  Initial Screen
### 메인화면, (영상 편집)
</br>

## 🛠 주요 기능
- NEXT 프레임워크로  SSG 및 SEO 최적화
- 상태관리를 위해 Recoil 적용
- Mobile, Tablet, PC 반응형 웹
- AWS 사용 CDN 구성 & github로 CI/CD
</br>

## 🚀 사용 기술

<table>
<tr>
 <td align="center">언어</td>
 <td>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=ffffff"/>
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
<tr>
 <td align="center">상태관리</td>
 <td>
  <img src="https://img.shields.io/badge/Recoil-1678e0?style=for-the-badge&logo=Recoil&logoColor=ffffff"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">라이브러리/프레임워크</td>
 <td>
 <img src="https://img.shields.io/badge/SASS(SCSS)-DB7093?style=for-the-badge&logo=SASS&logoColor=ffffff"/>&nbsp
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp  
 <img src="https://img.shields.io/badge/Next-cccccc?style=for-the-badge&logo=Next.js&logoColor=ffffff"/>
  </td>
</tr>

<tr>
 <td align="center">git 브랜치</td>
 <td>
    <img src="https://img.shields.io/badge/git flow-ff9900?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">배포</td>
 <td><img src="https://img.shields.io/badge/github action-000000?style=for-the-badge&logo=GithubAction&logoColor=white"/>&nbsp 
 <img src="https://img.shields.io/badge/netlify-33cccc?style=for-the-badge&logo=Vercel&logoColor=white"/>&nbsp
 <img src="https://img.shields.io/badge/AWS-ffcc00?style=for-the-badge&logo=aws&logoColor=white"/>&nbsp
 </td>
</tr>
<tr>
 <td align="center">Formatter</td>
 <td>
  <img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>&nbsp </td>
</tr>
</table>
</br>

## 👾 주요 개발 이슈
### Issue 1 - [Recoil]다크모드 상태관리

**🚨 Situation**
- 클라이언트 요구사항에 의해 **다크모드**가 필요했습니다.
- 다크모드를 사용하는 컴포넌트 수가 점점 많아지면서 다크모드 상태를 수정해야할 경우, 각각의 컴포넌트를 하나하나 수정해야했습니다.
- 이에 따라 코드 중복문제와 상태를 관리하기 어려운 문제가 발생했습니다.
- 따라서 상태관리 라이브러리를 사용해  컬러모드 상태를 전역적으로 관리했습니다. 

**💡 Solution**
- `Recoil`로 다크모드/라이트모드 상태를 저장한 뒤 컴포넌트마다 한 번만 호출하도록 변경했습니다.
- CSS in JS로 `Styled-component`와 `custom hook`을 통해 컬러 상태를 변화시켰습니다.
- 다크모드를 사용하는 모든 컴포넌트에서 `atom`만 변경하면 동일하게 모든 변경값이 적용되어 상태관리가 용이해졌습니다.
<br/>
<br/>
### Issue 2 - github action 사용 CI/CD 구성

**🚨 Situation**
- OYS-LAB을 배포하기 위해 `AWS`를 사용했습니다.
- `S3`와 `CloudFront`로 CDN을 구성하고, Route53으로 도메인을 연결했습니다.
- Github action으로 CI/CD 파이프라인을 구성했습니다.

**💡 구성방법**<br/>
<img width="350" src="https://user-images.githubusercontent.com/87024040/232572106-51330685-b22c-495d-a05f-4c2908c9ba3d.png"><br/>
🪵 **git-flow**
총 5가지 브랜치로 작업했습니다.
- Feature: 개별 브랜치를 통해 작업
- Develop: Feature에서 완성된 기능 병합
- Dry: `Netlify`로 애플리케이션 배타버전 확인
- Release: 배포 준비를 위한 브랜치
- Master: Release에 올라온 브랜치를 병합하여 배포

  
