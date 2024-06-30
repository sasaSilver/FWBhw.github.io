!function(){"use strict";function t(t,e,n,a){return new(n||(n=Promise))((function(r,o){function i(t){try{u(a.next(t))}catch(t){o(t)}}function s(t){try{u(a.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,s)}u((a=a.apply(t,e||[])).next())}))}function e(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}"function"==typeof SuppressedError&&SuppressedError;const n=43200,a=1440;let r={};function o(){return r}function i(t){const n=e(t),a=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return a.setUTCFullYear(n.getFullYear()),+t-+a}function s(t,n){const a=e(t),r=e(n),o=a.getTime()-r.getTime();return o<0?-1:o>0?1:o}function u(t){return function(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}(t,Date.now())}function d(t){const n=e(t);return+function(t){const n=e(t);return n.setHours(23,59,59,999),n}(n)==+function(t){const n=e(t),a=n.getMonth();return n.setFullYear(n.getFullYear(),a+1,0),n.setHours(23,59,59,999),n}(n)}function c(t,n){const a=e(t),r=e(n),o=s(a,r),i=Math.abs(function(t,n){const a=e(t),r=e(n);return 12*(a.getFullYear()-r.getFullYear())+(a.getMonth()-r.getMonth())}(a,r));let u;if(i<1)u=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-o*i);let n=s(a,r)===-o;d(e(t))&&1===i&&1===s(t,r)&&(n=!1),u=o*(i-Number(n))}return 0===u?0:u}function h(t,n,a){const r=function(t,n){return+e(t)-+e(n)}(t,n)/1e3;return(o=a?.roundingMethod,t=>{const e=(o?Math[o]:Math.trunc)(t);return 0===e?0:e})(r);var o}const l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function m(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const f={date:m({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:m({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:m({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},g={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function y(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function b(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(s,(t=>t.test(i))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(s,(t=>t.test(i)));let d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;return{value:d,rest:e.slice(i.length)}}}var p;const w={code:"en-US",formatDistance:(t,e,n)=>{let a;const r=l[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:f,formatRelative:(t,e,n,a)=>g[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(p={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(p.matchPattern);if(!n)return null;const a=n[0],r=t.match(p.parsePattern);if(!r)return null;let o=p.valueCallback?p.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:b({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:b({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:b({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:b({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function v(t,r){return function(t,r,u){const d=o(),l=u?.locale??d.locale??w,m=s(t,r);if(isNaN(m))throw new RangeError("Invalid time value");const f=Object.assign({},u,{addSuffix:u?.addSuffix,comparison:m});let g,y;m>0?(g=e(r),y=e(t)):(g=e(t),y=e(r));const b=h(y,g),p=(i(y)-i(g))/1e3,v=Math.round((b-p)/60);let M;if(v<2)return u?.includeSeconds?b<5?l.formatDistance("lessThanXSeconds",5,f):b<10?l.formatDistance("lessThanXSeconds",10,f):b<20?l.formatDistance("lessThanXSeconds",20,f):b<40?l.formatDistance("halfAMinute",0,f):b<60?l.formatDistance("lessThanXMinutes",1,f):l.formatDistance("xMinutes",1,f):0===v?l.formatDistance("lessThanXMinutes",1,f):l.formatDistance("xMinutes",v,f);if(v<45)return l.formatDistance("xMinutes",v,f);if(v<90)return l.formatDistance("aboutXHours",1,f);if(v<a){const t=Math.round(v/60);return l.formatDistance("aboutXHours",t,f)}if(v<2520)return l.formatDistance("xDays",1,f);if(v<n){const t=Math.round(v/a);return l.formatDistance("xDays",t,f)}if(v<2*n)return M=Math.round(v/n),l.formatDistance("aboutXMonths",M,f);if(M=c(y,g),M<12){const t=Math.round(v/n);return l.formatDistance("xMonths",t,f)}{const t=M%12,e=Math.trunc(M/12);return t<3?l.formatDistance("aboutXYears",e,f):t<9?l.formatDistance("overXYears",e,f):l.formatDistance("almostXYears",e+1,f)}}(t,u(t),r)}function M(e){return t(this,void 0,void 0,(function*(){const n=yield function(e){return t(this,void 0,void 0,(function*(){const t=new URLSearchParams({email:e}),n=yield fetch("https://fwd.innopolis.university/api/hw2?"+t);return yield n.json()}))}(e),a=new URLSearchParams({id:n});return(yield fetch("https://fwd.innopolis.university/api/comic?"+a)).json()}))}!function(e){t(this,void 0,void 0,(function*(){const t=yield M(e),n=document.createElement("img");n.src=t.img,n.alt=t.alt;const a=document.createElement("h1");a.textContent=t.safe_title;const r=new Date(t.year,t.month-1,t.day),o=document.createElement("p");o.textContent=r.toLocaleDateString();const i=v(new Date(t.year,t.month-1,t.day)),s=document.createElement("p");s.textContent=i+" ago";const u=document.createElement("div");u.appendChild(n),u.appendChild(a),u.appendChild(o),u.appendChild(s),document.body.appendChild(u)}))}("al.mikhailov@innopolis.university")}();
