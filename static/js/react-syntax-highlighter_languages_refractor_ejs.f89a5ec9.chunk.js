"use strict";(self.webpackChunksolar_system=self.webpackChunksolar_system||[]).push([[7508,6403],{4411:(e,a,n)=>{var t=n(9701);function s(e){e.register(t),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=s,s.displayName="ejs",s.aliases=["eta"]},9701:e=>{function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,s,o){if(n.language===t){var r=n.tokenStack=[];n.code=n.code.replace(s,(function(e){if("function"===typeof o&&!o(e))return e;for(var s,i=r.length;-1!==n.code.indexOf(s=a(t,i));)++i;return r[i]=e,s})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var s=0,o=Object.keys(n.tokenStack);!function r(i){for(var l=0;l<i.length&&!(s>=o.length);l++){var u=i[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var g=o[s],c=n.tokenStack[g],p="string"===typeof u?u:u.content,f=a(t,g),k=p.indexOf(f);if(k>-1){++s;var m=p.substring(0,k),d=new e.Token(t,e.tokenize(c,n.grammar),"language-"+t,c),h=p.substring(k+f.length),y=[];m&&y.push.apply(y,r([m])),y.push(d),h&&y.push.apply(y,r([h])),"string"===typeof u?i.splice.apply(i,[l,1].concat(y)):u.content=y}}else u.content&&r(u.content)}return i}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ejs.f89a5ec9.chunk.js.map