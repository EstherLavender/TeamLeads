import{ce as n,cn as i,cU as d,aH as t,cr as o,aZ as s}from"./index-2cd6b337.js";import{u as m,C as u}from"./useInAppWalletLocale-384262bc.js";import"./oauth-701ed5e5.js";function r(e){const{screen:l}=n(),c=i(),a=m(e.connectLocale.id);return e.size==="wide"||l!==d.main&&e.size==="compact"?t(o,{walletId:e.wallet.id,selectWallet:()=>{c({}),e.select()},client:e.client,connectLocale:e.connectLocale,recommendedWallets:e.recommendedWallets,isActive:l===e.wallet,badge:void 0}):a?t(u,{disabled:e.disabled,locale:a,wallet:e.wallet,done:e.done,select:e.select,goBack:e.goBack,chain:e.chain,client:e.client,size:e.size}):t(s,{height:"195px"})}export{r as default};