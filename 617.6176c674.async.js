(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[617],{50617:function(_,c,s){(function(o,n){_.exports=n(s(27484))})(this,function(o){"use strict";function n(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var u=n(o),a={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function(e,t){return e%10>=1&&e%10<=4&&(e%100<10||e%100>=20)?e%10==1?t[0]:t[1]:t[2]},relativeTimeFormatter:function(e,t,r,l){var d=a.words[r];if(r.length===1)return r==="y"&&t?"jedna godina":l||t?d[0]:d[1];var m=a.correctGrammarCase(e,d);return r==="yy"&&t&&m==="%d godinu"?e+" godina":m.replace("%d",e)}},i={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_\u010Cetvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._\u010Cet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010De_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:a.relativeTimeFormatter,mm:a.relativeTimeFormatter,h:a.relativeTimeFormatter,hh:a.relativeTimeFormatter,d:a.relativeTimeFormatter,dd:a.relativeTimeFormatter,M:a.relativeTimeFormatter,MM:a.relativeTimeFormatter,y:a.relativeTimeFormatter,yy:a.relativeTimeFormatter},ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};return u.default.locale(i,null,!0),i})}}]);
