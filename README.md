# React Hooks

-   [x] useState
-   [ ] useEffect
-   [ ] useTitle
-   [x] useInput
-   [ ] usePageLeave
-   [ ] useClick
-   [ ] useFadeIn
-   [ ] useFullscreen
-   [ ] useHover
-   [ ] useNetwork
-   [ ] useNotification
-   [ ] useScroll
-   [x] useTabs
-   [ ] usePreventLeave
-   [ ] useConfirm
-   [ ] useAxios

## [useState](./src/hooksComponent/useInputComponent.js)

-   useState는 가장 기본적인 Hook으로서, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
-   useState 는 2개의 value( state, state 업데이트 함수 )를 retrun 하며, 선언시 state의 기본값을 인자로 받는다.
-   state 업데이트 함수의 이름은 임의로 지정할 수 있지만 가독성 등의 편의를 위해 state 이름의 앞에 set을 붙이고 카멜케이스를 사용 한다.

```
- ex)

const [count, setCount] = useState(0);
```

## 커스텀 Hooks

-   useState 를 모듈화 하여 여러 컴포넌트의 비슷한 기능을 공유 할 때 커스텀 Hook을 만들어 로직의 재사용성을 강화 할 수 있다.

### [useInput](./src/hooksComponent/useInputComponent.js)

-   여러 Input을 관리 하기 위한 커스텀 Hook

### [useTabs](./src/hooksComponent/useTabsComponent.js)

-   탭기능 구현을 위한 커스텀 Hook
