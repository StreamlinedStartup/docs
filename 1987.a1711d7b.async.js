(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[1987],{81987:function(d,M,m){(function(s,_){d.exports=_(m(27484))})(this,function(s){"use strict";function _(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var l=_(s);function i(t){return t%10<5&&t%10>1&&~~(t/10)%10!=1}function e(t,a,z){var n=t+" ";switch(z){case"m":return a?"minuta":"minut\u0119";case"mm":return n+(i(t)?"minuty":"minut");case"h":return a?"godzina":"godzin\u0119";case"hh":return n+(i(t)?"godziny":"godzin");case"MM":return n+(i(t)?"miesi\u0105ce":"miesi\u0119cy");case"yy":return n+(i(t)?"lata":"lat")}}var o="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_"),u="stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_"),p=/D MMMM/,r=function(t,a){return p.test(a)?o[t.month()]:u[t.month()]};r.s=u,r.f=o;var c={name:"pl",weekdays:"niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),months:r,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),ordinal:function(t){return t+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:e,mm:e,h:e,hh:e,d:"1 dzie\u0144",dd:"%d dni",M:"miesi\u0105c",MM:e,y:"rok",yy:e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return l.default.locale(c,null,!0),c})}}]);
