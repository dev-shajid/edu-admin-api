import{r as o,R as i}from"./index-3208b7ae.js";const f=typeof document<"u"?o.useLayoutEffect:o.useEffect;function a(){return`mantine-${Math.random().toString(36).slice(2,11)}`}const l=i["useId".toString()]||(()=>{});function m(){const t=l();return t?`mantine-${t.replace(/:/g,"")}`:""}function I(t){const e=m(),[r,n]=o.useState(e);return f(()=>{n(a())},[]),typeof t=="string"?t:typeof window>"u"?e:r}function y({value:t,defaultValue:e,finalValue:r,onChange:n=()=>{}}){const[s,c]=o.useState(e!==void 0?e:r),d=u=>{c(u),n==null||n(u)};return t!==void 0?[t,n,!0]:[s,d,!1]}export{f as a,I as b,a as r,y as u};
