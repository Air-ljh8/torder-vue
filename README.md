# 🔨 프로젝트

프로젝트명: Vue.js 3 온보딩 - 베스트 라빈스

배스킨 라빈스 아이스크림을 모르거나 조합을 결정하기 힘든 사람들을 위한 재료 기반 아이스크림 추천 서비스

# 🔨 프로젝트 주요 기능

- 메인 페이지의 캐로셀 슬라이더를 통해 독특한 아이스크림 조합을 추천받을 수 있습니다.
  - 데스크탑 환경에서는 화살표 버튼을, 모바일 환경에서는 스와이프를 통해 슬라이더를 이동할 수 있습니다.
- 라이트 모드와 다크 모드를 지원합니다.
- 원하는 사이즈와 재료들을 선택하여 아이스크림 조합을 추천받을 수 있습니다.

# 🔨 프로젝트 구조

프로젝트 파악에 도움이 될만한 구조만 작성하였습니다.

```
📦
├─ .eslintrc.cjs
├─ .gitignore
├─ README.md
├─ package.json
├─ public
├─ src
│  ├─ App.vue
│  ├─ main.ts
│  ├─ apis
│  ├─ assets
│  ├─ components
│  │  ├─ BackButton.vue
│  │  ├─ Loading.vue
│  │  ├─ Logo.vue
│  │  ├─ NextButton.vue
│  │  ├─ RecipeCard.vue
│  │  ├─ SizeRow.vue
│  │  └─ ThemeSwitcher.vue
│  ├─ composables
│  │  └─ useTheme.ts
│  ├─ constants
│  ├─ containers
│  │  ├─ Carousel.vue
│  │  ├─ GlobalNavBar.vue
│  │  ├─ IngredientBoard.vue
│  │  ├─ ProgressNavBar.vue
│  │  ├─ SizeBoard.vue
│  │  └─ TopNavBar.vue
│  ├─ interface
│  │  ├─ ingredients.ts
│  │  ├─ recipes.ts
│  │  ├─ recommendations.ts
│  │  ├─ sizes.ts
│  │  └─ users.ts
│  ├─ contexts
│  │  ├─ ModeContext
│  │  └─ UserItemContext
│  ├─ router
│  ├─ store
│  │  └─ storeUserSelect.ts
│  ├─ views
│  │  ├─ Homepage.vue
│  │  ├─ IngredientPage.vue
│  │  ├─ RecipePage.vue
│  │  ├─ SizePage.vue
│  │  └─ UserPage.vue
│  ├─ styles
│  │  └─ main.css
│  └─ utils
├─ tsconfig.json
└─ index.html
```

# 🔨 프로젝트 커밋 컨벤션

- feat : 새로운 기능 추가
- edit : 코드 수정
- fix : 버그 수정
- docs : 문서 수정
- style : Style 변경
- refactor : 코드 리펙토링
- test : 테스트 코드 추가 및 수정, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정
