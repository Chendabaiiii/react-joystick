import{i,c as I,j as o,G as R,b as D,J as P}from"./index-a0e9bad7.js";import{R as e}from"./isSymbol-659cbca8.js";import"./_commonjsHelpers-de833af9.js";import"./throttle-7cfb2d79.js";const d=({children:m,className:p,width:h,height:f})=>{const r=e.useRef(null),[s,A]=e.useState(null),[g,v]=e.useState(!1),n=e.useCallback((t,a)=>{if(!r.current)return;const{left:V,top:j,width:y,height:w}=r.current.getBoundingClientRect(),_=t-V,u=a-j;u>=0&&u<=w&&y>=0&&_<=y&&(A({left:_,top:u}),v(!0))},[]),N=e.useCallback(t=>{i||n(t.clientX,t.clientY)},[n]),k=e.useCallback(({touches:t})=>{if(!i)return;const a=t[0];n(a.clientX,a.clientY)},[n]),C=e.useMemo(()=>({isActive:g,ghost:!0}),[g]),b=e.useMemo(()=>({getGhostArea:()=>r.current}),[]),l=e.useCallback(()=>{v(!1)},[]);e.useEffect(()=>{const t=i?"touchend":"mouseup";return document.addEventListener(t,l),()=>{document.removeEventListener(t,l)}},[l]);const E=e.useMemo(()=>I("react-joystick-ghost-area",p),[p]),S=e.useMemo(()=>({height:f,width:h}),[f,h]);return o("div",{ref:r,className:E,onMouseDown:N,onTouchStart:k,style:S,children:o("div",{className:"react-joystick-wrapper",style:{left:s==null?void 0:s.left,top:s==null?void 0:s.top},children:o(R.Provider,{value:b,children:o(D.Provider,{value:C,children:m})})})})};try{d.displayName="GhostArea",d.__docgenInfo={description:"",displayName:"GhostArea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const J=()=>o(d,{className:"ghost-mode-demo",width:400,height:400,children:o(P,{})}),L={title:"Example",component:J,parameters:{layout:"centered"}},c={};var x,G,M;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(M=(G=c.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const O=["GhostMode"];export{c as GhostMode,O as __namedExportsOrder,L as default};
//# sourceMappingURL=index.stories-7ba72671.js.map
