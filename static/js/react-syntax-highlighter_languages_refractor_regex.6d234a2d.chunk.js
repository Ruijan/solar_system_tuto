"use strict";(self.webpackChunksolar_system=self.webpackChunksolar_system||[]).push([[4165],{6748:a=>{function e(a){!function(a){var e={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},s=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,n="(?:[^\\\\-]|"+s.source+")",t=RegExp(n+"-"+n),r={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};a.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:t,inside:{escape:s,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":e,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:s}},"special-escape":e,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":r}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:s,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":r}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(a)}a.exports=e,e.displayName="regex",e.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_regex.6d234a2d.chunk.js.map