# React Hooks

-   [x] [useState](#useState)
-   [x] [useEffect](#useEffect)
-   [x] [useTitle](#useTitle)
-   [x] [useInput](#useInput)
-   [ ] usePageLeave
-   [ ] useClick
-   [ ] useFadeIn
-   [ ] useFullscreen
-   [ ] useHover
-   [ ] useNetwork
-   [ ] useNotification
-   [ ] useScroll
-   [x] [useTabs](#useTabs)
-   [ ] usePreventLeave
-   [ ] useConfirm
-   [ ] useAxios

---

## [useEffect](./src/hooksComponent/useEffectComponent.js)

```
...

const sayHello = () => console.log("Hello");

useEffect(() => {
    sayHello();
});

...
```

-   Hooks 에서는 useEffect를 통해 Lifecycle을 관리한다.
-   useEffect는 클래스 기반 Lifecycle 메소드 중 componentDidMount와 componentDidUpdate, componentWillUnmont의 역할을 한다고 볼 수 있다.

    1. componentDidMount의 역할을 하기 때문에 컴포넌트가 처음 렌더링 될 때 실행 된다.
    2. componentDidUpdate의 역할도 하기 때문에 state가 변경 되어 렌더링이 발생 할 경우 실행 된다.

*   useEffect는 두개의 인자를 받아야 하며, 첫번째 인자는 function으로서 effect가 된다.
    또한, 두번째 인자는 dependency로서 배열을 받는다.

### useEffect 함수 인자 실행 조건

-   dependency(배열)을 전달하지 않을 경우 모든 state가 변경 되어 렌더링 될 때마다 실행 된다.

```
useEffect(() => {
    sayHello();
});
```

-   비어있는 dependency(배열)을 전달할 경우 최초 렌터링(componentDidMount) 될 경우에 실행 된다.

```
useEffect(() => {
    sayHello();
}, []);
```

-   dependency(배열)에 state(값)가 있을 경우 최초 렌더링과 해당 state가 변경 될 경우에만 실행 된다.

```
useEffect(() => {
    sayHello();
}, [number, ]);
```

---

## [useState](./src/hooksComponent/useInputComponent.js)

-   useState는 가장 기본적인 Hook으로서, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
-   useState 는 2개의 value( state, state 업데이트 함수 )를 retrun 하며, 선언시 state의 기본값을 인자로 받는다.
-   state 업데이트 함수의 이름은 임의로 지정할 수 있지만 가독성 등의 편의를 위해 state 이름의 앞에 set을 붙이고 카멜케이스를 사용 한다.

```
- ex)

const [count, setCount] = useState(0);
```

---

## 커스텀 Hooks

-   useState 를 모듈화 하여 여러 컴포넌트의 비슷한 기능을 공유 할 때 커스텀 Hook을 만들어 로직의 재사용성을 강화 할 수 있다.

### [useInput](./src/hooksComponent/useInputComponent.js)

-   여러 Input을 관리 하기 위한 커스텀 Hook

### [useTabs](./src/hooksComponent/useTabsComponent.js)

-   탭기능 구현을 위한 커스텀 Hook

### [useTitle](./src/hooksComponent/useTitleComponent.js)

-   useEffect를 활용한 title 변경 커스텀 Hook

### [useClick](./src/hooksComponent/useClickComponent.js)

-   useEffect를 활용한 컴포넌트 Click 클릭 이벤트 커스텀 Hook
