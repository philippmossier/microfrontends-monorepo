(self.webpackChunkhost=self.webpackChunkhost||[]).push([[116],{535:(e,t,r)=>{r.r(t);var n=r(619),d=r.n(n),o=r(29),i=r(131),l=r(739);class a extends d().Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){}render(){return this.state.hasError?this.props.error||(0,l.tZ)("div",{children:"Something went wrong."}):(0,l.tZ)(d().Suspense,{fallback:this.props.delayed||(0,l.tZ)("div",{}),children:this.props.children})}}var h=r(283);const c=["error","delayed"],s=e=>t=>{let{error:r,delayed:n}=t,d=(0,h.Z)(t,c);return(0,l.tZ)(a,{error:r,delayed:n,children:(0,l.tZ)(e,Object.assign({},d))})},Z=s(n.lazy((()=>r.e(952).then(r.t.bind(r,952,23))))),u=s(n.lazy((()=>r.e(909).then(r.t.bind(r,909,23))))),p=n.lazy((()=>r.e(260).then(r.t.bind(r,260,23))));o.s(document.getElementById("root")).render((0,l.tZ)(n.StrictMode,{children:(0,l.tZ)(i.BrowserRouter,{children:(0,l.tZ)((function(){return(0,l.BX)(n.Suspense,{fallback:null,children:[(0,l.BX)("ul",{children:[(0,l.tZ)("li",{children:(0,l.tZ)(i.Link,{to:"/",children:" Home "})}),(0,l.tZ)("li",{children:(0,l.tZ)(i.Link,{to:"/payment",children:" Payment "})}),(0,l.tZ)("li",{children:(0,l.tZ)(i.Link,{to:"/about",children:" About "})})]}),(0,l.BX)(i.Routes,{children:[(0,l.tZ)(i.Route,{path:"/",element:(0,l.tZ)(Z,{delayed:(0,l.tZ)("div",{children:"Loading shop ..."}),error:(0,l.tZ)("div",{children:"Error Loading shop remote"})})}),(0,l.tZ)(i.Route,{path:"/payment",element:(0,l.tZ)(u,{delayed:(0,l.tZ)("div",{children:"Loading payment ..."}),error:(0,l.tZ)("div",{children:"Error Loading payment remote"})})}),(0,l.tZ)(i.Route,{path:"/about",element:(0,l.tZ)(a,{delayed:(0,l.tZ)("div",{children:"Loading about ..."}),error:(0,l.tZ)("div",{children:"Error Loading about remote"}),children:(0,l.tZ)(p,{})})})]})]})}),{})})}))}}]);