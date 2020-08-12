# React Hooks

-   [x] useState
-   [ ] useEffect
-   [ ] useTitle
-   [ ] useInput
-   [ ] usePageLeave
-   [ ] useClick
-   [ ] useFadeIn
-   [ ] useFullscreen
-   [ ] useHover
-   [ ] useNetwork
-   [ ] useNotification
-   [ ] useScroll
-   [ ] useTabs
-   [ ] usePreventLeave
-   [ ] useConfirm
-   [ ] useAxios

## useState

-   useState 는 2개의 value( state, state 업데이트 함수 )를 retrun 한다.
-   선언시 state의 기본값을 인자로 받는다.
-   state 업데이트 함수의 이름은 임의로 지정할 수 있지만 가독성 등의 편의를 위해 state 이름의 앞에 set을 붙이고 카멜케이스를 사용 한다.

```
- ex)

const [count, setCount] = useState(0);
```
