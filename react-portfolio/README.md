## Eh:Eunhye Hangout

<img width="80%" src="./src/assets/images/portfolio_cover.png"/>

#### 목차

- [기획 의도](#기획의도)
- [프로젝트 소개](#프로젝트-소개)
- [기술 스택](#기술-스택)
- [폴더 구성](#프로젝트-폴더-구성)
- [페이지 구성](#페이지-구성)
- [React로 개발하게 된 이유](#react로-개발하게-된-이유)
- [기여한 일](#기여한-일)
- [기능 구현](#기능-구현)
- [개발 후기](#개발-후기)

<br>
<br>

### 프리뷰

<img width="80%" src="./src/assets/images/about_02.png"/>
<img width="80%" src="./src/assets/images/skills_01.png"/>
<img width="80%" src="./src/assets/images/projects_01.png"/>
<img width="80%" src="./src/assets/images/contact_01.png"/>

<br>
<br>

### 기획 의도

첫 프로젝트를 React로 나만의 홈페이지를 만들기 위해 제작하게 되었습니다.

**첫 프로젝트로 선택한 이유**

- 개발자로 진로를 정하고 처음으로 만드는 프로젝트라 **애정이 남다를것**이라고 생각했습니다.
- 간단한 기능 구현으로 시작해서 점차 발전되는 **성장형 프로젝트**를 만들기 위해 제작하게 되었습니다.
  (_ver01은 초라하지만 ver이 높아질수록 점점 발전하는 프로젝트를 기대해주세요_)

<br>
<br>

### 프로젝트 소개

- 홈페이지 겸 포트폴리오 웹사이트
- 기획, 디자인, 마크업, 사이트 구성, 기능 구현, 배포를 공부하는 개념으로 만든 프로젝트
- Home, About, SKills, Contact 페이지로 구성

<br>
<br>

### 기술 스택

- HTML/SCSS
- JavaScript
- React, react-router-dom(v.6), CRA

<br>
<br>

### 폴더 구성

#### src/assets

- fonts 폴더
- images 폴더

#### src/components

> 사이트 전역에서 사용할 컴포넌트 폴더

- Layout : 페이지 틀, Header, Container, Footer 컴포넌트로 구성
  - Header : Logo(Home-page), 각각의 페이지로 가능 링크 버튼
  - Footer : 자연스로운 페이지 탐색을 위해 맨위로 올라가지 않아도 다른 페이지로 전환가능하게 설계
  - Layout.js
- ScrollToTop : url이 변경되면 자동으로 맨위로 올라가는 컴포넌트
- ToTopButton : 클릭 시 맨위로 올라가는 컴포넌트

#### src/containers

- Home : Intro, About, Skills, Projects, Contact페이지를 요약해놓은 메인 페이지
- About : 자기소개 페이지
- Skills : Front-end, tools 숙련도 페이지
- Project : 선택한 프로젝트 페이지로 이동할 수 있는 페이지
- Contact : 이메일, 깃허브, 블로그로 이동할 수 있는 페이지

#### src/pages

> Layout 컴포넌트 구성 중 `main` 태그 안에 들어갈 컴포넌트
> `Container` 컴포넌트를 감싸는 컴포넌트

- HomePage.js
- AboutPage.js
- SkillsPage.js
- ProjectsPage.js
- ContactPage.js

#### src/styles

- \_variable.scss : 컴포넌트 전역에서 사용할 스타일 변수 모음 파일
  - colors, font size

<br />
<br />

### 페이지 구성

- Home
  - Navigate, Intro Section, About & SKills Section, Project List Section
- About
  - Overview Section, More About me Section
- Skills
  - CS, Front-end, tool Section
- Projects
  - Project Sections, Project Page Link
- Contact
  - Email Form, Connection(Github, Blog, Mobile)

<br>
<br>

### React로 개발하게 된 이유

- 취업 시장에서 탐색한 결과 높은 선호도
- 리로드가 없는 SPA 사이트를 만들 목적
- state를 컨트롤 해서 기능을 구현 시 React의 이해도가 높아질 것이라고 판단
- Component 단위로 개발하기 때문에 유지 보수가 좋다고 판단

<br>
<br>

### 기여한 일

- Figma로 웹사이트 구성과 디자인을 기획했습니다.
- React Router V6의 `Link` 의 `to=""` 속성을 활용하여 url 변경을 통해 **리로드 되지 않는 페이지 전환** 기능을 구현했습니다.
- `@media-query` 로 PC, 태블릿, 모바일 각각 스크린 사이즈에 맞게 **반응형**으로 제작했습니다.
- `Email.JS API` 와 연결해서 **Email Form** 기능을 구현했습니다.
- `state` 를 활용해서 **모달 창 열기 & 닫기, 탭 전환 기능**을 구현 했습니다.

<br>
<br>

### 기능 구현

#### Layout Component

```jsx
import React from 'react';
import './Layout.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
```

**각각의 Container 컴포넌트를 감싸줄 컴포넌트**
`main` 태그안에 `{props.children}` 이 들어올 수 있도록 설계

<br />

#### Header Component

```jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  /**
   * 토글을 닫아두기 위해 초기값을 false로 설정
   */
  const [btnClick, setBtnClick] = useState(false);

  /**
   * state(false) true/false 토글 함수
   */
  const showMenu = () => {
    setBtnClick(!btnClick);
  };

  return (
    <header>
      <div className={`header-container ${btnClick ? 'open' : ''}`}>
        {/* main-header */}
        <div className="main-header">
          // 생략
          <div
            className={`open-menu-btn ${btnClick ? 'clicked' : ''}`}
            onClick={showMenu}
            type="button"
          >
            // 생략
          </div>
        </div>
        {/* /main-header */}
      </div>
    </header>
  );
};
```

```scss
.active-link {
  opacity: 0.2;

  &.active {
    opacity: 1;
    font-weight: 700;
  }
}
```

**`NavLink` 태그로 링크에 active 효과주기**

선택한 링크에 효과를 주기 위해 구글링을 참고한 결과 `NavLink` 의 존재를 알게되었습니다.
`.active` 클래스에 `opacity: 1` 스타일링을 줘서 선택한 메뉴를 구분가능하게 했습니다.

**`useState` 를 활용해 모달창 열기/닫기 기능**

해당 태그에 삼항연산자 `${btnClick ? 'open' : ''}` 를 활용하여 `true` 일 때 `open` 클래스가 붙도록 구현했습니다.

> **Reference**
>
> 깃허브 링크
>
> - [https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio/src/components/Layout/Header](https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio/src/components/Layout/Header)
>
> 참고한 블로그 링크
>
> - [https://velog.io/@seong-dodo/React-Link와-NavLink](https://velog.io/@seong-dodo/React-Link%EC%99%80-NavLink)

<br />

#### ScrollToTop Component

```jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  /**
   * url변경 시 스크롤 위치를 맨 위로 옮기는 컴포넌트
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```

```jsx
// index.js
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
```

**url 변경 시 자동으로 맨 위로 올라가는 컴포넌트**

`Link to` 로 페이지 이동시 스크롤의 위치가 그대로 있는 현상을 발견했습니다.
공식문서를 참고하여 `Scroll Restoration` 라고 부르는 기능을 구현하는데 성공했습니다.
`pathname` 을 인식할 수 있게 `BrowserRouter` 태그 안에 `ScrollToTop` 컴포넌트를 넣어줬습니다.

> **Reference**
>
> React Router 공식문서 링크
>
> - [https://v5.reactrouter.com/web/guides/scroll-restoration](https://v5.reactrouter.com/web/guides/scroll-restoration)

<br />

#### ToTopButton Component

```jsx
import React, { useState, useEffect } from 'react';
import './ToTopButton.scss';

const ToTopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollYActive, setScrollYActive] = useState(false);

  /**
   * 클릭 시 스크롤을 맨 위로 옮기는 함수, 부드럽게 전환
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /**
   * 스크롤이 120이 되면 to-top-btn이 화면에 나오게 하는 함수
   */
  const toTopBtnEffect = () => {
    if (scrollY > 120) {
      setScrollY(window.pageYOffset);
      setScrollYActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollYActive(false);
    }
  };
  useEffect(() => {
    const scrollEvent = () => {
      window.addEventListener('scroll', toTopBtnEffect);
    };
    scrollEvent();
    return () => {
      window.removeEventListener('scroll', toTopBtnEffect);
    };
  });

  return (
    <button
      onClick={scrollToTop}
      className={`to-top-btn ${scrollYActive ? 'to-top-show' : ''}`}
    >
      top
    </button>
  );
};

export default ToTopButton;
```

**클릭 시 맨 위로 올라가는 컴포넌트**

스크롤이 길어지면서 맨 위로 올라가기 버겁다는 생각이 들었습니다.
공식문서를 참고하여 사용자 편의를 위해 한번에 맨 위로 올라갈 수 있는 기능을 구현했습니다.

`scrollTo()` 의 `options` 문법을 활용해서 기능을 구현했습니다.
(부드러운 효과를 주기 위해 `behavior: 'smooth'` 속성을 줬습니다.)

> **Reference**
>
> 깃허브 링크
>
> - [https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio/src/components/ToTopButton](https://github.com/Hyeun9991/toy-projects/tree/main/react-portfolio/src/components/ToTopButton)
>
> mdn 링크
>
> - [https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll](https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll)

<br>
<br>

### 개발 후기

**처음부터 끝까지 혼자하는 프로젝트이다 보니 어려움이 많았습니다.**

- 클론 코딩처럼 강사님과 같이 진행하는 프로젝트가 아니다 보니 이론과 실습으로 배웠던 내용들로는 감이 잡히지 않았습니다.
- 처음부터 단계별로 하기위해 기획하는 법부터 실무에서 진행하는 프로젝트 제작기 포스팅을 많이 참고했습니다.
- 디자인과 구성, 배치를 어떻게할지 고민이 많아 구글링한 결과 Figma라는 프로그램을 알게되었습니다.
  Figma를 활용해서 디자인, 구성, 배치문제를 해결했습니다.

<br />

**ver02에 추가할 내용**
- 코드 유지보수 용이하게 리팩토링
- CRUD 기능을 구현하여 Blog 컴포넌트 기능 구현


##

🔝 [Back To Top](#목차)
