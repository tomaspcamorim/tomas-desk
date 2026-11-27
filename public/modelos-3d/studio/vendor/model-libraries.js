(()=>{var m$=Object.create;var{getPrototypeOf:d$,defineProperty:YJ,getOwnPropertyNames:l$}=Object;var u$=Object.prototype.hasOwnProperty;function c$(Q){return this[Q]}var s$,n$,HJ=(Q,Z,J)=>{var X=Q!=null&&typeof Q==="object";if(X){var H=Z?s$??=new WeakMap:n$??=new WeakMap,q=H.get(Q);if(q)return q}J=Q!=null?m$(d$(Q)):{};let G=Z||!Q||!Q.__esModule?YJ(J,"default",{value:Q,enumerable:!0}):J;for(let V of l$(Q))if(!u$.call(G,V))YJ(G,V,{get:c$.bind(Q,V),enumerable:!0});if(X)H.set(Q,G);return G};var KJ=(Q,Z)=>()=>(Z||Q((Z={exports:{}}).exports,Z),Z.exports);var HQ=((Q)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(Q,{get:(Z,J)=>(typeof require<"u"?require:Z)[J]}):Q)(function(Q){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+Q+'" is not supported')});var H$=KJ((o5,Y$)=>{(function(Q,Z){typeof o5=="object"&&typeof Y$<"u"?Z(o5):typeof define=="function"&&define.amd?define(["exports"],Z):Z((Q=Q||self).opentype={})})(o5,function(Q){function Z(W){if(this==null)throw TypeError();var $=String(this),Y=$.length,K=W?Number(W):0;if(K!=K&&(K=0),!(K<0||Y<=K)){var F,N=$.charCodeAt(K);return 55296<=N&&N<=56319&&K+1<Y&&56320<=(F=$.charCodeAt(K+1))&&F<=57343?1024*(N-55296)+F-56320+65536:N}}var J;String.prototype.codePointAt||((J=function(){try{var W={},$=Object.defineProperty,Y=$(W,W,W)&&$}catch(K){}return Y}())?J(String.prototype,"codePointAt",{value:Z,configurable:!0,writable:!0}):String.prototype.codePointAt=Z);var X=0,H=-3;function q(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function G(W,$){this.source=W,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=$,this.destLen=0,this.ltree=new q,this.dtree=new q}var V=new q,R=new q,U=new Uint8Array(30),B=new Uint16Array(30),z=new Uint8Array(30),I=new Uint16Array(30),w=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),j=new q,f=new Uint8Array(320);function k(W,$,Y,K){var F,N;for(F=0;F<Y;++F)W[F]=0;for(F=0;F<30-Y;++F)W[F+Y]=F/Y|0;for(N=K,F=0;F<30;++F)$[F]=N,N+=1<<W[F]}var C=new Uint16Array(16);function v(W,$,Y,K){var F,N;for(F=0;F<16;++F)W.table[F]=0;for(F=0;F<K;++F)W.table[$[Y+F]]++;for(F=N=W.table[0]=0;F<16;++F)C[F]=N,N+=W.table[F];for(F=0;F<K;++F)$[Y+F]&&(W.trans[C[$[Y+F]]++]=F)}function x(W){W.bitcount--||(W.tag=W.source[W.sourceIndex++],W.bitcount=7);var $=1&W.tag;return W.tag>>>=1,$}function l(W,$,Y){if(!$)return Y;for(;W.bitcount<24;)W.tag|=W.source[W.sourceIndex++]<<W.bitcount,W.bitcount+=8;var K=W.tag&65535>>>16-$;return W.tag>>>=$,W.bitcount-=$,K+Y}function Z0(W,$){for(;W.bitcount<24;)W.tag|=W.source[W.sourceIndex++]<<W.bitcount,W.bitcount+=8;for(var Y=0,K=0,F=0,N=W.tag;K=2*K+(1&N),N>>>=1,++F,Y+=$.table[F],0<=(K-=$.table[F]););return W.tag=N,W.bitcount-=F,$.trans[Y+K]}function p(W,$,Y){var K,F,N,E,O,T;for(K=l(W,5,257),F=l(W,5,1),N=l(W,4,4),E=0;E<19;++E)f[E]=0;for(E=0;E<N;++E){var y=l(W,3,0);f[w[E]]=y}for(v(j,f,0,19),O=0;O<K+F;){var d=Z0(W,j);switch(d){case 16:var t=f[O-1];for(T=l(W,2,3);T;--T)f[O++]=t;break;case 17:for(T=l(W,3,3);T;--T)f[O++]=0;break;case 18:for(T=l(W,7,11);T;--T)f[O++]=0;break;default:f[O++]=d}}v($,f,0,K),v(Y,f,K,F)}function $0(W,$,Y){for(;;){var K,F,N,E,O=Z0(W,$);if(O===256)return X;if(O<256)W.dest[W.destLen++]=O;else for(K=l(W,U[O-=257],B[O]),F=Z0(W,Y),E=N=W.destLen-l(W,z[F],I[F]);E<N+K;++E)W.dest[W.destLen++]=W.dest[E]}}function z0(W){for(var $,Y;8<W.bitcount;)W.sourceIndex--,W.bitcount-=8;if(($=256*($=W.source[W.sourceIndex+1])+W.source[W.sourceIndex])!==(65535&~(256*W.source[W.sourceIndex+3]+W.source[W.sourceIndex+2])))return H;for(W.sourceIndex+=4,Y=$;Y;--Y)W.dest[W.destLen++]=W.source[W.sourceIndex++];return W.bitcount=0,X}(function(W,$){var Y;for(Y=0;Y<7;++Y)W.table[Y]=0;for(W.table[7]=24,W.table[8]=152,W.table[9]=112,Y=0;Y<24;++Y)W.trans[Y]=256+Y;for(Y=0;Y<144;++Y)W.trans[24+Y]=Y;for(Y=0;Y<8;++Y)W.trans[168+Y]=280+Y;for(Y=0;Y<112;++Y)W.trans[176+Y]=144+Y;for(Y=0;Y<5;++Y)$.table[Y]=0;for($.table[5]=32,Y=0;Y<32;++Y)$.trans[Y]=Y})(V,R),k(U,B,4,3),k(z,I,2,1),U[28]=0,B[28]=258;var b=function(W,$){var Y,K,F=new G(W,$);do{switch(Y=x(F),l(F,2,0)){case 0:K=z0(F);break;case 1:K=$0(F,V,R);break;case 2:p(F,F.ltree,F.dtree),K=$0(F,F.ltree,F.dtree);break;default:K=H}if(K!==X)throw Error("Data error")}while(!Y);return F.destLen<F.dest.length?typeof F.dest.slice=="function"?F.dest.slice(0,F.destLen):F.dest.subarray(0,F.destLen):F.dest};function m(W,$,Y,K,F){return Math.pow(1-F,3)*W+3*Math.pow(1-F,2)*F*$+3*(1-F)*Math.pow(F,2)*Y+Math.pow(F,3)*K}function q0(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}function L0(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}function S0(W){throw Error(W)}function o(W,$){W||S0($)}q0.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)},q0.prototype.addPoint=function(W,$){typeof W=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=W,this.x2=W),W<this.x1&&(this.x1=W),W>this.x2&&(this.x2=W)),typeof $=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=$,this.y2=$),$<this.y1&&(this.y1=$),$>this.y2&&(this.y2=$))},q0.prototype.addX=function(W){this.addPoint(W,null)},q0.prototype.addY=function(W){this.addPoint(null,W)},q0.prototype.addBezier=function(W,$,Y,K,F,N,E,O){var T=[W,$],y=[Y,K],d=[F,N],t=[E,O];this.addPoint(W,$),this.addPoint(E,O);for(var S=0;S<=1;S++){var G0=6*T[S]-12*y[S]+6*d[S],k0=-3*T[S]+9*y[S]-9*d[S]+3*t[S],O0=3*y[S]-3*T[S];if(k0!=0){var R0=Math.pow(G0,2)-4*O0*k0;if(!(R0<0)){var J0=(-G0+Math.sqrt(R0))/(2*k0);0<J0&&J0<1&&(S===0&&this.addX(m(T[S],y[S],d[S],t[S],J0)),S===1&&this.addY(m(T[S],y[S],d[S],t[S],J0)));var y0=(-G0-Math.sqrt(R0))/(2*k0);0<y0&&y0<1&&(S===0&&this.addX(m(T[S],y[S],d[S],t[S],y0)),S===1&&this.addY(m(T[S],y[S],d[S],t[S],y0)))}}else{if(G0==0)continue;var o0=-O0/G0;0<o0&&o0<1&&(S===0&&this.addX(m(T[S],y[S],d[S],t[S],o0)),S===1&&this.addY(m(T[S],y[S],d[S],t[S],o0)))}}},q0.prototype.addQuad=function(W,$,Y,K,F,N){var E=W+0.6666666666666666*(Y-W),O=$+0.6666666666666666*(K-$),T=E+0.3333333333333333*(F-W),y=O+0.3333333333333333*(N-$);this.addBezier(W,$,E,O,T,y,F,N)},L0.prototype.moveTo=function(W,$){this.commands.push({type:"M",x:W,y:$})},L0.prototype.lineTo=function(W,$){this.commands.push({type:"L",x:W,y:$})},L0.prototype.curveTo=L0.prototype.bezierCurveTo=function(W,$,Y,K,F,N){this.commands.push({type:"C",x1:W,y1:$,x2:Y,y2:K,x:F,y:N})},L0.prototype.quadTo=L0.prototype.quadraticCurveTo=function(W,$,Y,K){this.commands.push({type:"Q",x1:W,y1:$,x:Y,y:K})},L0.prototype.close=L0.prototype.closePath=function(){this.commands.push({type:"Z"})},L0.prototype.extend=function(W){if(W.commands)W=W.commands;else if(W instanceof q0){var $=W;return this.moveTo($.x1,$.y1),this.lineTo($.x2,$.y1),this.lineTo($.x2,$.y2),this.lineTo($.x1,$.y2),void this.close()}Array.prototype.push.apply(this.commands,W)},L0.prototype.getBoundingBox=function(){for(var W=new q0,$=0,Y=0,K=0,F=0,N=0;N<this.commands.length;N++){var E=this.commands[N];switch(E.type){case"M":W.addPoint(E.x,E.y),$=K=E.x,Y=F=E.y;break;case"L":W.addPoint(E.x,E.y),K=E.x,F=E.y;break;case"Q":W.addQuad(K,F,E.x1,E.y1,E.x,E.y),K=E.x,F=E.y;break;case"C":W.addBezier(K,F,E.x1,E.y1,E.x2,E.y2,E.x,E.y),K=E.x,F=E.y;break;case"Z":K=$,F=Y;break;default:throw Error("Unexpected path command "+E.type)}}return W.isEmpty()&&W.addPoint(0,0),W},L0.prototype.draw=function(W){W.beginPath();for(var $=0;$<this.commands.length;$+=1){var Y=this.commands[$];Y.type==="M"?W.moveTo(Y.x,Y.y):Y.type==="L"?W.lineTo(Y.x,Y.y):Y.type==="C"?W.bezierCurveTo(Y.x1,Y.y1,Y.x2,Y.y2,Y.x,Y.y):Y.type==="Q"?W.quadraticCurveTo(Y.x1,Y.y1,Y.x,Y.y):Y.type==="Z"&&W.closePath()}this.fill&&(W.fillStyle=this.fill,W.fill()),this.stroke&&(W.strokeStyle=this.stroke,W.lineWidth=this.strokeWidth,W.stroke())},L0.prototype.toPathData=function(W){function $(){for(var N,E=arguments,O="",T=0;T<arguments.length;T+=1){var y=E[T];0<=y&&0<T&&(O+=" "),O+=(N=y,Math.round(N)===N?""+Math.round(N):N.toFixed(W))}return O}W=W!==void 0?W:2;for(var Y="",K=0;K<this.commands.length;K+=1){var F=this.commands[K];F.type==="M"?Y+="M"+$(F.x,F.y):F.type==="L"?Y+="L"+$(F.x,F.y):F.type==="C"?Y+="C"+$(F.x1,F.y1,F.x2,F.y2,F.x,F.y):F.type==="Q"?Y+="Q"+$(F.x1,F.y1,F.x,F.y):F.type==="Z"&&(Y+="Z")}return Y},L0.prototype.toSVG=function(W){var $='<path d="';return $+=this.toPathData(W),$+='"',this.fill&&this.fill!=="black"&&(this.fill===null?$+=' fill="none"':$+=' fill="'+this.fill+'"'),this.stroke&&($+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),$+="/>"},L0.prototype.toDOMElement=function(W){var $=this.toPathData(W),Y=document.createElementNS("http://www.w3.org/2000/svg","path");return Y.setAttribute("d",$),Y};var e={fail:S0,argument:o,assert:o},D0=2147483648,P0={},a={},W0={};function C0(W){return function(){return W}}a.BYTE=function(W){return e.argument(0<=W&&W<=255,"Byte value should be between 0 and 255."),[W]},W0.BYTE=C0(1),a.CHAR=function(W){return[W.charCodeAt(0)]},W0.CHAR=C0(1),a.CHARARRAY=function(W){W===void 0&&(W="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var $=[],Y=0;Y<W.length;Y+=1)$[Y]=W.charCodeAt(Y);return $},W0.CHARARRAY=function(W){return W===void 0?0:W.length},a.USHORT=function(W){return[W>>8&255,255&W]},W0.USHORT=C0(2),a.SHORT=function(W){return 32768<=W&&(W=-(65536-W)),[W>>8&255,255&W]},W0.SHORT=C0(2),a.UINT24=function(W){return[W>>16&255,W>>8&255,255&W]},W0.UINT24=C0(3),a.ULONG=function(W){return[W>>24&255,W>>16&255,W>>8&255,255&W]},W0.ULONG=C0(4),a.LONG=function(W){return D0<=W&&(W=-(2*D0-W)),[W>>24&255,W>>16&255,W>>8&255,255&W]},W0.LONG=C0(4),a.FIXED=a.ULONG,W0.FIXED=W0.ULONG,a.FWORD=a.SHORT,W0.FWORD=W0.SHORT,a.UFWORD=a.USHORT,W0.UFWORD=W0.USHORT,a.LONGDATETIME=function(W){return[0,0,0,0,W>>24&255,W>>16&255,W>>8&255,255&W]},W0.LONGDATETIME=C0(8),a.TAG=function(W){return e.argument(W.length===4,"Tag should be exactly 4 ASCII characters."),[W.charCodeAt(0),W.charCodeAt(1),W.charCodeAt(2),W.charCodeAt(3)]},W0.TAG=C0(4),a.Card8=a.BYTE,W0.Card8=W0.BYTE,a.Card16=a.USHORT,W0.Card16=W0.USHORT,a.OffSize=a.BYTE,W0.OffSize=W0.BYTE,a.SID=a.USHORT,W0.SID=W0.USHORT,a.NUMBER=function(W){return-107<=W&&W<=107?[W+139]:108<=W&&W<=1131?[247+((W-=108)>>8),255&W]:-1131<=W&&W<=-108?[251+((W=-W-108)>>8),255&W]:-32768<=W&&W<=32767?a.NUMBER16(W):a.NUMBER32(W)},W0.NUMBER=function(W){return a.NUMBER(W).length},a.NUMBER16=function(W){return[28,W>>8&255,255&W]},W0.NUMBER16=C0(3),a.NUMBER32=function(W){return[29,W>>24&255,W>>16&255,W>>8&255,255&W]},W0.NUMBER32=C0(5),a.REAL=function(W){var $=W.toString(),Y=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec($);if(Y){var K=parseFloat("1e"+((Y[2]?+Y[2]:0)+Y[1].length));$=(Math.round(W*K)/K).toString()}for(var F="",N=0,E=$.length;N<E;N+=1){var O=$[N];F+=O==="e"?$[++N]==="-"?"c":"b":O==="."?"a":O==="-"?"e":O}for(var T=[30],y=0,d=(F+=1&F.length?"f":"ff").length;y<d;y+=2)T.push(parseInt(F.substr(y,2),16));return T},W0.REAL=function(W){return a.REAL(W).length},a.NAME=a.CHARARRAY,W0.NAME=W0.CHARARRAY,a.STRING=a.CHARARRAY,W0.STRING=W0.CHARARRAY,P0.UTF8=function(W,$,Y){for(var K=[],F=Y,N=0;N<F;N++,$+=1)K[N]=W.getUint8($);return String.fromCharCode.apply(null,K)},P0.UTF16=function(W,$,Y){for(var K=[],F=Y/2,N=0;N<F;N++,$+=2)K[N]=W.getUint16($);return String.fromCharCode.apply(null,K)},a.UTF16=function(W){for(var $=[],Y=0;Y<W.length;Y+=1){var K=W.charCodeAt(Y);$[$.length]=K>>8&255,$[$.length]=255&K}return $},W0.UTF16=function(W){return 2*W.length};var v0={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};P0.MACSTRING=function(W,$,Y,K){var F=v0[K];if(F!==void 0){for(var N="",E=0;E<Y;E++){var O=W.getUint8($+E);N+=O<=127?String.fromCharCode(O):F[127&O]}return N}};var K0,M0=typeof WeakMap=="function"&&new WeakMap;function s0(W){return-128<=W&&W<=127}function l0(W,$,Y){for(var K=0,F=W.length;$<F&&K<64&&W[$]===0;)++$,++K;return Y.push(128|K-1),$}function e0(W,$,Y){for(var K=0,F=W.length,N=$;N<F&&K<64;){var E=W[N];if(!s0(E))break;if(E===0&&N+1<F&&W[N+1]===0)break;++N,++K}Y.push(K-1);for(var O=$;O<N;++O)Y.push(W[O]+256&255);return N}function J7(W,$,Y){for(var K=0,F=W.length,N=$;N<F&&K<64;){var E=W[N];if(E===0)break;if(s0(E)&&N+1<F&&s0(W[N+1]))break;++N,++K}Y.push(64|K-1);for(var O=$;O<N;++O){var T=W[O];Y.push(T+65536>>8&255,T+256&255)}return N}a.MACSTRING=function(W,$){var Y=function(E){if(!K0)for(var O in K0={},v0)K0[O]=new String(O);var T=K0[E];if(T!==void 0){if(M0){var y=M0.get(T);if(y!==void 0)return y}var d=v0[E];if(d!==void 0){for(var t={},S=0;S<d.length;S++)t[d.charCodeAt(S)]=S+128;return M0&&M0.set(T,t),t}}}($);if(Y!==void 0){for(var K=[],F=0;F<W.length;F++){var N=W.charCodeAt(F);if(128<=N&&(N=Y[N])===void 0)return;K[F]=N}return K}},W0.MACSTRING=function(W,$){var Y=a.MACSTRING(W,$);return Y!==void 0?Y.length:0},a.VARDELTAS=function(W){for(var $=0,Y=[];$<W.length;){var K=W[$];$=(K===0?l0:-128<=K&&K<=127?e0:J7)(W,$,Y)}return Y},a.INDEX=function(W){for(var $=1,Y=[$],K=[],F=0;F<W.length;F+=1){var N=a.OBJECT(W[F]);Array.prototype.push.apply(K,N),$+=N.length,Y.push($)}if(K.length===0)return[0,0];for(var E=[],O=1+Math.floor(Math.log($)/Math.log(2))/8|0,T=[void 0,a.BYTE,a.USHORT,a.UINT24,a.ULONG][O],y=0;y<Y.length;y+=1){var d=T(Y[y]);Array.prototype.push.apply(E,d)}return Array.prototype.concat(a.Card16(W.length),a.OffSize(O),E,K)},W0.INDEX=function(W){return a.INDEX(W).length},a.DICT=function(W){for(var $=[],Y=Object.keys(W),K=Y.length,F=0;F<K;F+=1){var N=parseInt(Y[F],0),E=W[N];$=($=$.concat(a.OPERAND(E.value,E.type))).concat(a.OPERATOR(N))}return $},W0.DICT=function(W){return a.DICT(W).length},a.OPERATOR=function(W){return W<1200?[W]:[12,W-1200]},a.OPERAND=function(W,$){var Y=[];if(Array.isArray($))for(var K=0;K<$.length;K+=1)e.argument(W.length===$.length,"Not enough arguments given for type"+$),Y=Y.concat(a.OPERAND(W[K],$[K]));else if($==="SID")Y=Y.concat(a.NUMBER(W));else if($==="offset")Y=Y.concat(a.NUMBER32(W));else if($==="number")Y=Y.concat(a.NUMBER(W));else{if($!=="real")throw Error("Unknown operand type "+$);Y=Y.concat(a.REAL(W))}return Y},a.OP=a.BYTE,W0.OP=W0.BYTE;var H7=typeof WeakMap=="function"&&new WeakMap;function u0(W,$,Y){if($.length&&($[0].name!=="coverageFormat"||$[0].value===1))for(var K=0;K<$.length;K+=1){var F=$[K];this[F.name]=F.value}if(this.tableName=W,this.fields=$,Y)for(var N=Object.keys(Y),E=0;E<N.length;E+=1){var O=N[E],T=Y[O];this[O]!==void 0&&(this[O]=T)}}function X7(W,$,Y){Y===void 0&&(Y=$.length);var K=Array($.length+1);K[0]={name:W+"Count",type:"USHORT",value:Y};for(var F=0;F<$.length;F++)K[F+1]={name:W+F,type:"USHORT",value:$[F]};return K}function c(W,$,Y){var K=$.length,F=Array(K+1);F[0]={name:W+"Count",type:"USHORT",value:K};for(var N=0;N<K;N++)F[N+1]={name:W+N,type:"TABLE",value:Y($[N],N)};return F}function g0(W,$,Y){var K=$.length,F=[];F[0]={name:W+"Count",type:"USHORT",value:K};for(var N=0;N<K;N++)F=F.concat(Y($[N],N));return F}function A0(W){W.format===1?u0.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(X7("glyph",W.glyphs))):W.format===2?u0.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(g0("rangeRecord",W.ranges,function($){return[{name:"startGlyphID",type:"USHORT",value:$.start},{name:"endGlyphID",type:"USHORT",value:$.end},{name:"startCoverageIndex",type:"USHORT",value:$.index}]}))):e.assert(!1,"Coverage format must be 1 or 2.")}function j0(W){u0.call(this,"scriptListTable",g0("scriptRecord",W,function($,Y){var K=$.script,F=K.defaultLangSys;return e.assert(!!F,"Unable to write GSUB: script "+$.tag+" has no default language system."),[{name:"scriptTag"+Y,type:"TAG",value:$.tag},{name:"script"+Y,type:"TABLE",value:new u0("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new u0("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:F.reqFeatureIndex}].concat(X7("featureIndex",F.featureIndexes)))}].concat(g0("langSys",K.langSysRecords,function(N,E){var O=N.langSys;return[{name:"langSysTag"+E,type:"TAG",value:N.tag},{name:"langSys"+E,type:"TABLE",value:new u0("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:O.reqFeatureIndex}].concat(X7("featureIndex",O.featureIndexes)))}]})))}]}))}function E0(W){u0.call(this,"featureListTable",g0("featureRecord",W,function($,Y){var K=$.feature;return[{name:"featureTag"+Y,type:"TAG",value:$.tag},{name:"feature"+Y,type:"TABLE",value:new u0("featureTable",[{name:"featureParams",type:"USHORT",value:K.featureParams}].concat(X7("lookupListIndex",K.lookupListIndexes)))}]}))}function i0(W,$){u0.call(this,"lookupListTable",c("lookup",W,function(Y){var K=$[Y.lookupType];return e.assert(!!K,"Unable to write GSUB lookup type "+Y.lookupType+" tables."),new u0("lookupTable",[{name:"lookupType",type:"USHORT",value:Y.lookupType},{name:"lookupFlag",type:"USHORT",value:Y.lookupFlag}].concat(c("subtable",Y.subtables,K)))}))}a.CHARSTRING=function(W){if(H7){var $=H7.get(W);if($!==void 0)return $}for(var Y=[],K=W.length,F=0;F<K;F+=1){var N=W[F];Y=Y.concat(a[N.type](N.value))}return H7&&H7.set(W,Y),Y},W0.CHARSTRING=function(W){return a.CHARSTRING(W).length},a.OBJECT=function(W){var $=a[W.type];return e.argument($!==void 0,"No encoding function for type "+W.type),$(W.value)},W0.OBJECT=function(W){var $=W0[W.type];return e.argument($!==void 0,"No sizeOf function for type "+W.type),$(W.value)},a.TABLE=function(W){for(var $=[],Y=W.fields.length,K=[],F=[],N=0;N<Y;N+=1){var E=W.fields[N],O=a[E.type];e.argument(O!==void 0,"No encoding function for field type "+E.type+" ("+E.name+")");var T=W[E.name];T===void 0&&(T=E.value);var y=O(T);E.type==="TABLE"?(F.push($.length),$=$.concat([0,0]),K.push(y)):$=$.concat(y)}for(var d=0;d<K.length;d+=1){var t=F[d],S=$.length;e.argument(S<65536,"Table "+W.tableName+" too big."),$[t]=S>>8,$[t+1]=255&S,$=$.concat(K[d])}return $},W0.TABLE=function(W){for(var $=0,Y=W.fields.length,K=0;K<Y;K+=1){var F=W.fields[K],N=W0[F.type];e.argument(N!==void 0,"No sizeOf function for field type "+F.type+" ("+F.name+")");var E=W[F.name];E===void 0&&(E=F.value),$+=N(E),F.type==="TABLE"&&($+=2)}return $},a.RECORD=a.TABLE,W0.RECORD=W0.TABLE,a.LITERAL=function(W){return W},W0.LITERAL=function(W){return W.length},u0.prototype.encode=function(){return a.TABLE(this)},u0.prototype.sizeOf=function(){return W0.TABLE(this)};var M={Table:u0,Record:u0,Coverage:(A0.prototype=Object.create(u0.prototype)).constructor=A0,ScriptList:(j0.prototype=Object.create(u0.prototype)).constructor=j0,FeatureList:(E0.prototype=Object.create(u0.prototype)).constructor=E0,LookupList:(i0.prototype=Object.create(u0.prototype)).constructor=i0,ushortList:X7,tableList:c,recordList:g0};function L(W,$){return W.getUint8($)}function _(W,$){return W.getUint16($,!1)}function D(W,$){return W.getUint32($,!1)}function P(W,$){return W.getInt16($,!1)+W.getUint16($+2,!1)/65535}var g={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function A(W,$){this.data=W,this.offset=$,this.relativeOffset=0}A.prototype.parseByte=function(){var W=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,W},A.prototype.parseChar=function(){var W=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,W},A.prototype.parseCard8=A.prototype.parseByte,A.prototype.parseCard16=A.prototype.parseUShort=function(){var W=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,W},A.prototype.parseSID=A.prototype.parseUShort,A.prototype.parseOffset16=A.prototype.parseUShort,A.prototype.parseShort=function(){var W=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,W},A.prototype.parseF2Dot14=function(){var W=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,W},A.prototype.parseOffset32=A.prototype.parseULong=function(){var W=D(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,W},A.prototype.parseFixed=function(){var W=P(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,W},A.prototype.parseString=function(W){var $=this.data,Y=this.offset+this.relativeOffset,K="";this.relativeOffset+=W;for(var F=0;F<W;F++)K+=String.fromCharCode($.getUint8(Y+F));return K},A.prototype.parseTag=function(){return this.parseString(4)},A.prototype.parseLongDateTime=function(){var W=D(this.data,this.offset+this.relativeOffset+4);return W-=2082844800,this.relativeOffset+=8,W},A.prototype.parseVersion=function(W){var $=_(this.data,this.offset+this.relativeOffset),Y=_(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,W===void 0&&(W=4096),$+Y/W/10},A.prototype.skip=function(W,$){$===void 0&&($=1),this.relativeOffset+=g[W]*$},A.prototype.parseULongList=function(W){W===void 0&&(W=this.parseULong());for(var $=Array(W),Y=this.data,K=this.offset+this.relativeOffset,F=0;F<W;F++)$[F]=Y.getUint32(K),K+=4;return this.relativeOffset+=4*W,$},A.prototype.parseOffset16List=A.prototype.parseUShortList=function(W){W===void 0&&(W=this.parseUShort());for(var $=Array(W),Y=this.data,K=this.offset+this.relativeOffset,F=0;F<W;F++)$[F]=Y.getUint16(K),K+=2;return this.relativeOffset+=2*W,$},A.prototype.parseShortList=function(W){for(var $=Array(W),Y=this.data,K=this.offset+this.relativeOffset,F=0;F<W;F++)$[F]=Y.getInt16(K),K+=2;return this.relativeOffset+=2*W,$},A.prototype.parseByteList=function(W){for(var $=Array(W),Y=this.data,K=this.offset+this.relativeOffset,F=0;F<W;F++)$[F]=Y.getUint8(K++);return this.relativeOffset+=W,$},A.prototype.parseList=function(W,$){$||($=W,W=this.parseUShort());for(var Y=Array(W),K=0;K<W;K++)Y[K]=$.call(this);return Y},A.prototype.parseList32=function(W,$){$||($=W,W=this.parseULong());for(var Y=Array(W),K=0;K<W;K++)Y[K]=$.call(this);return Y},A.prototype.parseRecordList=function(W,$){$||($=W,W=this.parseUShort());for(var Y=Array(W),K=Object.keys($),F=0;F<W;F++){for(var N={},E=0;E<K.length;E++){var O=K[E],T=$[O];N[O]=T.call(this)}Y[F]=N}return Y},A.prototype.parseRecordList32=function(W,$){$||($=W,W=this.parseULong());for(var Y=Array(W),K=Object.keys($),F=0;F<W;F++){for(var N={},E=0;E<K.length;E++){var O=K[E],T=$[O];N[O]=T.call(this)}Y[F]=N}return Y},A.prototype.parseStruct=function(W){if(typeof W=="function")return W.call(this);for(var $=Object.keys(W),Y={},K=0;K<$.length;K++){var F=$[K],N=W[F];Y[F]=N.call(this)}return Y},A.prototype.parseValueRecord=function(W){if(W===void 0&&(W=this.parseUShort()),W!==0){var $={};return 1&W&&($.xPlacement=this.parseShort()),2&W&&($.yPlacement=this.parseShort()),4&W&&($.xAdvance=this.parseShort()),8&W&&($.yAdvance=this.parseShort()),16&W&&($.xPlaDevice=void 0,this.parseShort()),32&W&&($.yPlaDevice=void 0,this.parseShort()),64&W&&($.xAdvDevice=void 0,this.parseShort()),128&W&&($.yAdvDevice=void 0,this.parseShort()),$}},A.prototype.parseValueRecordList=function(){for(var W=this.parseUShort(),$=this.parseUShort(),Y=Array($),K=0;K<$;K++)Y[K]=this.parseValueRecord(W);return Y},A.prototype.parsePointer=function(W){var $=this.parseOffset16();if(0<$)return new A(this.data,this.offset+$).parseStruct(W)},A.prototype.parsePointer32=function(W){var $=this.parseOffset32();if(0<$)return new A(this.data,this.offset+$).parseStruct(W)},A.prototype.parseListOfLists=function(W){for(var $=this.parseOffset16List(),Y=$.length,K=this.relativeOffset,F=Array(Y),N=0;N<Y;N++){var E=$[N];if(E!==0)if(this.relativeOffset=E,W){for(var O=this.parseOffset16List(),T=Array(O.length),y=0;y<O.length;y++)this.relativeOffset=E+O[y],T[y]=W.call(this);F[N]=T}else F[N]=this.parseUShortList();else F[N]=void 0}return this.relativeOffset=K,F},A.prototype.parseCoverage=function(){var W=this.offset+this.relativeOffset,$=this.parseUShort(),Y=this.parseUShort();if($===1)return{format:1,glyphs:this.parseUShortList(Y)};if($!==2)throw Error("0x"+W.toString(16)+": Coverage format must be 1 or 2.");for(var K=Array(Y),F=0;F<Y;F++)K[F]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:K}},A.prototype.parseClassDef=function(){var W=this.offset+this.relativeOffset,$=this.parseUShort();if($===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if($===2)return{format:2,ranges:this.parseRecordList({start:A.uShort,end:A.uShort,classId:A.uShort})};throw Error("0x"+W.toString(16)+": ClassDef format must be 1 or 2.")},A.list=function(W,$){return function(){return this.parseList(W,$)}},A.list32=function(W,$){return function(){return this.parseList32(W,$)}},A.recordList=function(W,$){return function(){return this.parseRecordList(W,$)}},A.recordList32=function(W,$){return function(){return this.parseRecordList32(W,$)}},A.pointer=function(W){return function(){return this.parsePointer(W)}},A.pointer32=function(W){return function(){return this.parsePointer32(W)}},A.tag=A.prototype.parseTag,A.byte=A.prototype.parseByte,A.uShort=A.offset16=A.prototype.parseUShort,A.uShortList=A.prototype.parseUShortList,A.uLong=A.offset32=A.prototype.parseULong,A.uLongList=A.prototype.parseULongList,A.struct=A.prototype.parseStruct,A.coverage=A.prototype.parseCoverage,A.classDef=A.prototype.parseClassDef;var n={reserved:A.uShort,reqFeatureIndex:A.uShort,featureIndexes:A.uShortList};A.prototype.parseScriptList=function(){return this.parsePointer(A.recordList({tag:A.tag,script:A.pointer({defaultLangSys:A.pointer(n),langSysRecords:A.recordList({tag:A.tag,langSys:A.pointer(n)})})}))||[]},A.prototype.parseFeatureList=function(){return this.parsePointer(A.recordList({tag:A.tag,feature:A.pointer({featureParams:A.offset16,lookupListIndexes:A.uShortList})}))||[]},A.prototype.parseLookupList=function(W){return this.parsePointer(A.list(A.pointer(function(){var $=this.parseUShort();e.argument(1<=$&&$<=9,"GPOS/GSUB lookup type "+$+" unknown.");var Y=this.parseUShort(),K=16&Y;return{lookupType:$,lookupFlag:Y,subtables:this.parseList(A.pointer(W[$])),markFilteringSet:K?this.parseUShort():void 0}})))||[]},A.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var W=this.parseUShort(),$=this.parseUShort();return e.argument(W===1&&$<1,"GPOS/GSUB feature variations table unknown."),this.parseRecordList32({conditionSetOffset:A.offset32,featureTableSubstitutionOffset:A.offset32})})||[]};var i={getByte:L,getCard8:L,getUShort:_,getCard16:_,getShort:function(W,$){return W.getInt16($,!1)},getULong:D,getFixed:P,getTag:function(W,$){for(var Y="",K=$;K<$+4;K+=1)Y+=String.fromCharCode(W.getInt8(K));return Y},getOffset:function(W,$,Y){for(var K=0,F=0;F<Y;F+=1)K<<=8,K+=W.getUint8($+F);return K},getBytes:function(W,$,Y){for(var K=[],F=$;F<Y;F+=1)K.push(W.getUint8(F));return K},bytesToString:function(W){for(var $="",Y=0;Y<W.length;Y+=1)$+=String.fromCharCode(W[Y]);return $},Parser:A},X0={parse:function(W,$){var Y={};Y.version=i.getUShort(W,$),e.argument(Y.version===0,"cmap table version should be 0."),Y.numTables=i.getUShort(W,$+2);for(var K=-1,F=Y.numTables-1;0<=F;--F){var N=i.getUShort(W,$+4+8*F),E=i.getUShort(W,$+4+8*F+2);if(N===3&&(E===0||E===1||E===10)||N===0&&(E===0||E===1||E===2||E===3||E===4)){K=i.getULong(W,$+4+8*F+4);break}}if(K===-1)throw Error("No valid cmap sub-tables found.");var O=new i.Parser(W,$+K);if(Y.format=O.parseUShort(),Y.format===12)(function(T,y){var d;y.parseUShort(),T.length=y.parseULong(),T.language=y.parseULong(),T.groupCount=d=y.parseULong(),T.glyphIndexMap={};for(var t=0;t<d;t+=1)for(var S=y.parseULong(),G0=y.parseULong(),k0=y.parseULong(),O0=S;O0<=G0;O0+=1)T.glyphIndexMap[O0]=k0,k0++})(Y,O);else{if(Y.format!==4)throw Error("Only format 4 and 12 cmap tables are supported (found format "+Y.format+").");(function(T,y,d,t,S){var G0;T.length=y.parseUShort(),T.language=y.parseUShort(),T.segCount=G0=y.parseUShort()>>1,y.skip("uShort",3),T.glyphIndexMap={};for(var k0=new i.Parser(d,t+S+14),O0=new i.Parser(d,t+S+16+2*G0),R0=new i.Parser(d,t+S+16+4*G0),J0=new i.Parser(d,t+S+16+6*G0),y0=t+S+16+8*G0,o0=0;o0<G0-1;o0+=1)for(var U7=void 0,M7=k0.parseUShort(),b7=O0.parseUShort(),q7=R0.parseShort(),Z7=J0.parseUShort(),u7=b7;u7<=M7;u7+=1)Z7!==0?(y0=J0.offset+J0.relativeOffset-2,y0+=Z7,y0+=2*(u7-b7),(U7=i.getUShort(d,y0))!==0&&(U7=U7+q7&65535)):U7=u7+q7&65535,T.glyphIndexMap[u7]=U7})(Y,O,W,$,K)}return Y},make:function(W){var $,Y=!0;for($=W.length-1;0<$;--$)if(65535<W.get($).unicode){console.log("Adding CMAP format 12 (needed!)"),Y=!1;break}var K=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:Y?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:Y?12:20}];Y||(K=K.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),K=K.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var F,N,E,O=new M.Table("cmap",K);for(O.segments=[],$=0;$<W.length;$+=1){for(var T=W.get($),y=0;y<T.unicodes.length;y+=1)F=O,N=T.unicodes[y],E=$,F.segments.push({end:N,start:N,delta:-(N-E),offset:0,glyphIndex:E});O.segments=O.segments.sort(function(U7,M7){return U7.start-M7.start})}O.segments.push({end:65535,start:65535,delta:1,offset:0});var d=O.segments.length,t=0,S=[],G0=[],k0=[],O0=[],R0=[],J0=[];for($=0;$<d;$+=1){var y0=O.segments[$];y0.end<=65535&&y0.start<=65535?(S=S.concat({name:"end_"+$,type:"USHORT",value:y0.end}),G0=G0.concat({name:"start_"+$,type:"USHORT",value:y0.start}),k0=k0.concat({name:"idDelta_"+$,type:"SHORT",value:y0.delta}),O0=O0.concat({name:"idRangeOffset_"+$,type:"USHORT",value:y0.offset}),y0.glyphId!==void 0&&(R0=R0.concat({name:"glyph_"+$,type:"USHORT",value:y0.glyphId}))):t+=1,Y||y0.glyphIndex===void 0||(J0=(J0=(J0=J0.concat({name:"cmap12Start_"+$,type:"ULONG",value:y0.start})).concat({name:"cmap12End_"+$,type:"ULONG",value:y0.end})).concat({name:"cmap12Glyph_"+$,type:"ULONG",value:y0.glyphIndex}))}if(O.segCountX2=2*(d-t),O.searchRange=2*Math.pow(2,Math.floor(Math.log(d-t)/Math.log(2))),O.entrySelector=Math.log(O.searchRange/2)/Math.log(2),O.rangeShift=O.segCountX2-O.searchRange,O.fields=O.fields.concat(S),O.fields.push({name:"reservedPad",type:"USHORT",value:0}),O.fields=O.fields.concat(G0),O.fields=O.fields.concat(k0),O.fields=O.fields.concat(O0),O.fields=O.fields.concat(R0),O.cmap4Length=14+2*S.length+2+2*G0.length+2*k0.length+2*O0.length+2*R0.length,!Y){var o0=16+4*J0.length;O.cmap12Offset=20+O.cmap4Length,O.fields=O.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:o0},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:J0.length/3}]),O.fields=O.fields.concat(J0)}return O}},r=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],U0=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],f0=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],H0=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function u(W){this.font=W}function B0(W){this.cmap=W}function m0(W,$){this.encoding=W,this.charset=$}function T0(W){switch(W.version){case 1:this.names=H0.slice();break;case 2:this.names=Array(W.numberOfGlyphs);for(var $=0;$<W.numberOfGlyphs;$++)W.glyphNameIndex[$]<H0.length?this.names[$]=H0[W.glyphNameIndex[$]]:this.names[$]=W.names[W.glyphNameIndex[$]-H0.length];break;case 2.5:this.names=Array(W.numberOfGlyphs);for(var Y=0;Y<W.numberOfGlyphs;Y++)this.names[Y]=H0[Y+W.glyphNameIndex[Y]];break;case 3:default:this.names=[]}}function p0(W,$){($.lowMemory?function(Y){Y._IndexToUnicodeMap={};for(var K=Y.tables.cmap.glyphIndexMap,F=Object.keys(K),N=0;N<F.length;N+=1){var E=F[N],O=K[E];Y._IndexToUnicodeMap[O]===void 0?Y._IndexToUnicodeMap[O]={unicodes:[parseInt(E)]}:Y._IndexToUnicodeMap[O].unicodes.push(parseInt(E))}}:function(Y){for(var K,F=Y.tables.cmap.glyphIndexMap,N=Object.keys(F),E=0;E<N.length;E+=1){var O=N[E],T=F[O];(K=Y.glyphs.get(T)).addUnicode(parseInt(O))}for(var y=0;y<Y.glyphs.length;y+=1)K=Y.glyphs.get(y),Y.cffEncoding?Y.isCIDFont?K.name="gid"+y:K.name=Y.cffEncoding.charset[y]:Y.glyphNames.names&&(K.name=Y.glyphNames.glyphIndexToName(y))})(W)}u.prototype.charToGlyphIndex=function(W){var $=W.codePointAt(0),Y=this.font.glyphs;if(Y){for(var K=0;K<Y.length;K+=1)for(var F=Y.get(K),N=0;N<F.unicodes.length;N+=1)if(F.unicodes[N]===$)return K}return null},B0.prototype.charToGlyphIndex=function(W){return this.cmap.glyphIndexMap[W.codePointAt(0)]||0},m0.prototype.charToGlyphIndex=function(W){var $=W.codePointAt(0),Y=this.encoding[$];return this.charset.indexOf(Y)},T0.prototype.nameToGlyphIndex=function(W){return this.names.indexOf(W)},T0.prototype.glyphIndexToName=function(W){return this.names[W]};var t0={line:function(W,$,Y,K,F){W.beginPath(),W.moveTo($,Y),W.lineTo(K,F),W.stroke()}};function a0(W){this.bindConstructorValues(W)}function x0(W,$,Y){Object.defineProperty(W,$,{get:function(){return W.path,W[Y]},set:function(K){W[Y]=K},enumerable:!0,configurable:!0})}function c0(W,$){if(this.font=W,this.glyphs={},Array.isArray($))for(var Y=0;Y<$.length;Y++){var K=$[Y];K.path.unitsPerEm=W.unitsPerEm,this.glyphs[Y]=K}this.length=$&&$.length||0}a0.prototype.bindConstructorValues=function(W){var $,Y;this.index=W.index||0,this.name=W.name||null,this.unicode=W.unicode||void 0,this.unicodes=W.unicodes||W.unicode!==void 0?[W.unicode]:[],"xMin"in W&&(this.xMin=W.xMin),"yMin"in W&&(this.yMin=W.yMin),"xMax"in W&&(this.xMax=W.xMax),"yMax"in W&&(this.yMax=W.yMax),"advanceWidth"in W&&(this.advanceWidth=W.advanceWidth),Object.defineProperty(this,"path",($=W.path,Y=$||new L0,{configurable:!0,get:function(){return typeof Y=="function"&&(Y=Y()),Y},set:function(K){Y=K}}))},a0.prototype.addUnicode=function(W){this.unicodes.length===0&&(this.unicode=W),this.unicodes.push(W)},a0.prototype.getBoundingBox=function(){return this.path.getBoundingBox()},a0.prototype.getPath=function(W,$,Y,K,F){var N,E;W=W!==void 0?W:0,$=$!==void 0?$:0,Y=Y!==void 0?Y:72;var O=(K=K||{}).xScale,T=K.yScale;if(K.hinting&&F&&F.hinting&&(E=this.path&&F.hinting.exec(this,Y)),E)N=F.hinting.getCommands(E),W=Math.round(W),$=Math.round($),O=T=1;else{N=this.path.commands;var y=1/(this.path.unitsPerEm||1000)*Y;O===void 0&&(O=y),T===void 0&&(T=y)}for(var d=new L0,t=0;t<N.length;t+=1){var S=N[t];S.type==="M"?d.moveTo(W+S.x*O,$+-S.y*T):S.type==="L"?d.lineTo(W+S.x*O,$+-S.y*T):S.type==="Q"?d.quadraticCurveTo(W+S.x1*O,$+-S.y1*T,W+S.x*O,$+-S.y*T):S.type==="C"?d.curveTo(W+S.x1*O,$+-S.y1*T,W+S.x2*O,$+-S.y2*T,W+S.x*O,$+-S.y*T):S.type==="Z"&&d.closePath()}return d},a0.prototype.getContours=function(){if(this.points===void 0)return[];for(var W=[],$=[],Y=0;Y<this.points.length;Y+=1){var K=this.points[Y];$.push(K),K.lastPointOfContour&&(W.push($),$=[])}return e.argument($.length===0,"There are still points left in the current contour."),W},a0.prototype.getMetrics=function(){for(var W=this.path.commands,$=[],Y=[],K=0;K<W.length;K+=1){var F=W[K];F.type!=="Z"&&($.push(F.x),Y.push(F.y)),F.type!=="Q"&&F.type!=="C"||($.push(F.x1),Y.push(F.y1)),F.type==="C"&&($.push(F.x2),Y.push(F.y2))}var N={xMin:Math.min.apply(null,$),yMin:Math.min.apply(null,Y),xMax:Math.max.apply(null,$),yMax:Math.max.apply(null,Y),leftSideBearing:this.leftSideBearing};return isFinite(N.xMin)||(N.xMin=0),isFinite(N.xMax)||(N.xMax=this.advanceWidth),isFinite(N.yMin)||(N.yMin=0),isFinite(N.yMax)||(N.yMax=0),N.rightSideBearing=this.advanceWidth-N.leftSideBearing-(N.xMax-N.xMin),N},a0.prototype.draw=function(W,$,Y,K,F){this.getPath($,Y,K,F).draw(W)},a0.prototype.drawPoints=function(W,$,Y,K){function F(t,S,G0,k0){W.beginPath();for(var O0=0;O0<t.length;O0+=1)W.moveTo(S+t[O0].x*k0,G0+t[O0].y*k0),W.arc(S+t[O0].x*k0,G0+t[O0].y*k0,2,0,2*Math.PI,!1);W.closePath(),W.fill()}$=$!==void 0?$:0,Y=Y!==void 0?Y:0,K=K!==void 0?K:24;for(var N=1/this.path.unitsPerEm*K,E=[],O=[],T=this.path,y=0;y<T.commands.length;y+=1){var d=T.commands[y];d.x!==void 0&&E.push({x:d.x,y:-d.y}),d.x1!==void 0&&O.push({x:d.x1,y:-d.y1}),d.x2!==void 0&&O.push({x:d.x2,y:-d.y2})}W.fillStyle="blue",F(E,$,Y,N),W.fillStyle="red",F(O,$,Y,N)},a0.prototype.drawMetrics=function(W,$,Y,K){var F;$=$!==void 0?$:0,Y=Y!==void 0?Y:0,K=K!==void 0?K:24,F=1/this.path.unitsPerEm*K,W.lineWidth=1,W.strokeStyle="black",t0.line(W,$,-1e4,$,1e4),t0.line(W,-1e4,Y,1e4,Y);var N=this.xMin||0,E=this.yMin||0,O=this.xMax||0,T=this.yMax||0,y=this.advanceWidth||0;W.strokeStyle="blue",t0.line(W,$+N*F,-1e4,$+N*F,1e4),t0.line(W,$+O*F,-1e4,$+O*F,1e4),t0.line(W,-1e4,Y+-E*F,1e4,Y+-E*F),t0.line(W,-1e4,Y+-T*F,1e4,Y+-T*F),W.strokeStyle="green",t0.line(W,$+y*F,-1e4,$+y*F,1e4)},c0.prototype.get=function(W){if(this.glyphs[W]===void 0){this.font._push(W),typeof this.glyphs[W]=="function"&&(this.glyphs[W]=this.glyphs[W]());var $=this.glyphs[W],Y=this.font._IndexToUnicodeMap[W];if(Y)for(var K=0;K<Y.unicodes.length;K++)$.addUnicode(Y.unicodes[K]);this.font.cffEncoding?this.font.isCIDFont?$.name="gid"+W:$.name=this.font.cffEncoding.charset[W]:this.font.glyphNames.names&&($.name=this.font.glyphNames.glyphIndexToName(W)),this.glyphs[W].advanceWidth=this.font._hmtxTableData[W].advanceWidth,this.glyphs[W].leftSideBearing=this.font._hmtxTableData[W].leftSideBearing}else typeof this.glyphs[W]=="function"&&(this.glyphs[W]=this.glyphs[W]());return this.glyphs[W]},c0.prototype.push=function(W,$){this.glyphs[W]=$,this.length++};var _0={GlyphSet:c0,glyphLoader:function(W,$){return new a0({index:$,font:W})},ttfGlyphLoader:function(W,$,Y,K,F,N){return function(){var E=new a0({index:$,font:W});return E.path=function(){Y(E,K,F);var O=N(W.glyphs,E);return O.unitsPerEm=W.unitsPerEm,O},x0(E,"xMin","_xMin"),x0(E,"xMax","_xMax"),x0(E,"yMin","_yMin"),x0(E,"yMax","_yMax"),E}},cffGlyphLoader:function(W,$,Y,K){return function(){var F=new a0({index:$,font:W});return F.path=function(){var N=Y(W,F,K);return N.unitsPerEm=W.unitsPerEm,N},F}}};function s(W,$){if(W===$)return 1;if(Array.isArray(W)&&Array.isArray($)){if(W.length!==$.length)return;for(var Y=0;Y<W.length;Y+=1)if(!s(W[Y],$[Y]))return;return 1}}function I0(W){return W.length<1240?107:W.length<33900?1131:32768}function w0(W,$,Y){var K,F,N=[],E=[],O=i.getCard16(W,$);if(O!==0){var T=i.getByte(W,$+2);K=$+(O+1)*T+2;for(var y=$+3,d=0;d<O+1;d+=1)N.push(i.getOffset(W,y,T)),y+=T;F=K+N[O]}else F=$+2;for(var t=0;t<N.length-1;t+=1){var S=i.getBytes(W,K+N[t],K+N[t+1]);Y&&(S=Y(S)),E.push(S)}return{objects:E,startOffset:$,endOffset:F}}function b0(W,$){if($===28)return W.parseByte()<<8|W.parseByte();if($===29)return W.parseByte()<<24|W.parseByte()<<16|W.parseByte()<<8|W.parseByte();if($===30)return function(Y){for(var K="",F=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var N=Y.parseByte(),E=N>>4,O=15&N;if(E==15)break;if(K+=F[E],O==15)break;K+=F[O]}return parseFloat(K)}(W);if(32<=$&&$<=246)return $-139;if(247<=$&&$<=250)return 256*($-247)+W.parseByte()+108;if(251<=$&&$<=254)return 256*-($-251)-W.parseByte()-108;throw Error("Invalid b0 "+$)}function d0(W,$,Y){$=$!==void 0?$:0;var K=new i.Parser(W,$),F=[],N=[];for(Y=Y!==void 0?Y:W.length;K.relativeOffset<Y;){var E=K.parseByte();E<=21?(E===12&&(E=1200+K.parseByte()),F.push([E,N]),N=[]):N.push(b0(K,E))}return function(O){for(var T={},y=0;y<O.length;y+=1){var d=O[y][0],t=O[y][1],S=void 0;if(S=t.length===1?t[0]:t,T.hasOwnProperty(d)&&!isNaN(T[d]))throw Error("Object "+T+" already has key "+d);T[d]=S}return T}(F)}function $7(W,$){return $=$<=390?r[$]:W[$-391]}function K7(W,$,Y){for(var K,F={},N=0;N<$.length;N+=1){var E=$[N];if(Array.isArray(E.type)){var O=[];O.length=E.type.length;for(var T=0;T<E.type.length;T++)(K=W[E.op]!==void 0?W[E.op][T]:void 0)===void 0&&(K=E.value!==void 0&&E.value[T]!==void 0?E.value[T]:null),E.type[T]==="SID"&&(K=$7(Y,K)),O[T]=K;F[E.name]=O}else(K=W[E.op])===void 0&&(K=E.value!==void 0?E.value:null),E.type==="SID"&&(K=$7(Y,K)),F[E.name]=K}return F}var I7=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[0.001,0,0,0.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],P7=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function V7(W,$,Y,K){return K7(d0(W,$,Y),P7,K)}function S7(W,$,Y,K){for(var F,N,E=[],O=0;O<Y.length;O+=1){var T=new DataView(new Uint8Array(Y[O]).buffer),y=(N=K,K7(d0(F=T,0,F.byteLength),I7,N));y._subrs=[],y._subrsBias=0,y._defaultWidthX=0,y._nominalWidthX=0;var d=y.private[0],t=y.private[1];if(d!==0&&t!==0){var S=V7(W,t+$,d,K);if(y._defaultWidthX=S.defaultWidthX,y._nominalWidthX=S.nominalWidthX,S.subrs!==0){var G0=w0(W,t+S.subrs+$);y._subrs=G0.objects,y._subrsBias=I0(y._subrs)}y._privateDict=S}E.push(y)}return E}function l7(W,$,Y){var K,F,N,E,O,T,y,d,t=new L0,S=[],G0=0,k0=!1,O0=!1,R0=0,J0=0;if(W.isCIDFont){var y0=W.tables.cff.topDict._fdSelect[$.index],o0=W.tables.cff.topDict._fdArray[y0];O=o0._subrs,T=o0._subrsBias,y=o0._defaultWidthX,d=o0._nominalWidthX}else O=W.tables.cff.topDict._subrs,T=W.tables.cff.topDict._subrsBias,y=W.tables.cff.topDict._defaultWidthX,d=W.tables.cff.topDict._nominalWidthX;var U7=y;function M7(q7,Z7){O0&&t.closePath(),t.moveTo(q7,Z7),O0=!0}function b7(){S.length%2==0||k0||(U7=S.shift()+d),G0+=S.length>>1,S.length=0,k0=!0}return function q7(Z7){for(var u7,x7,y7,v7,T7,G7,D7,_7,k7,O7,A7,s7,w7=0;w7<Z7.length;){var d7=Z7[w7];switch(w7+=1,d7){case 1:case 3:b7();break;case 4:1<S.length&&!k0&&(U7=S.shift()+d,k0=!0),J0+=S.pop(),M7(R0,J0);break;case 5:for(;0<S.length;)R0+=S.shift(),J0+=S.shift(),t.lineTo(R0,J0);break;case 6:for(;0<S.length&&(R0+=S.shift(),t.lineTo(R0,J0),S.length!==0);)J0+=S.shift(),t.lineTo(R0,J0);break;case 7:for(;0<S.length&&(J0+=S.shift(),t.lineTo(R0,J0),S.length!==0);)R0+=S.shift(),t.lineTo(R0,J0);break;case 8:for(;0<S.length;)K=R0+S.shift(),F=J0+S.shift(),N=K+S.shift(),E=F+S.shift(),R0=N+S.shift(),J0=E+S.shift(),t.curveTo(K,F,N,E,R0,J0);break;case 10:T7=S.pop()+T,(G7=O[T7])&&q7(G7);break;case 11:return;case 12:switch(d7=Z7[w7],w7+=1,d7){case 35:K=R0+S.shift(),F=J0+S.shift(),N=K+S.shift(),E=F+S.shift(),D7=N+S.shift(),_7=E+S.shift(),k7=D7+S.shift(),O7=_7+S.shift(),A7=k7+S.shift(),s7=O7+S.shift(),R0=A7+S.shift(),J0=s7+S.shift(),S.shift(),t.curveTo(K,F,N,E,D7,_7),t.curveTo(k7,O7,A7,s7,R0,J0);break;case 34:K=R0+S.shift(),F=J0,N=K+S.shift(),E=F+S.shift(),D7=N+S.shift(),_7=E,k7=D7+S.shift(),O7=E,A7=k7+S.shift(),s7=J0,R0=A7+S.shift(),t.curveTo(K,F,N,E,D7,_7),t.curveTo(k7,O7,A7,s7,R0,J0);break;case 36:K=R0+S.shift(),F=J0+S.shift(),N=K+S.shift(),E=F+S.shift(),D7=N+S.shift(),_7=E,k7=D7+S.shift(),O7=E,A7=k7+S.shift(),s7=O7+S.shift(),R0=A7+S.shift(),t.curveTo(K,F,N,E,D7,_7),t.curveTo(k7,O7,A7,s7,R0,J0);break;case 37:K=R0+S.shift(),F=J0+S.shift(),N=K+S.shift(),E=F+S.shift(),D7=N+S.shift(),_7=E+S.shift(),k7=D7+S.shift(),O7=_7+S.shift(),A7=k7+S.shift(),s7=O7+S.shift(),Math.abs(A7-R0)>Math.abs(s7-J0)?R0=A7+S.shift():J0=s7+S.shift(),t.curveTo(K,F,N,E,D7,_7),t.curveTo(k7,O7,A7,s7,R0,J0);break;default:console.log("Glyph "+$.index+": unknown operator 1200"+d7),S.length=0}break;case 14:0<S.length&&!k0&&(U7=S.shift()+d,k0=!0),O0&&(t.closePath(),O0=!1);break;case 18:b7();break;case 19:case 20:b7(),w7+=G0+7>>3;break;case 21:2<S.length&&!k0&&(U7=S.shift()+d,k0=!0),J0+=S.pop(),M7(R0+=S.pop(),J0);break;case 22:1<S.length&&!k0&&(U7=S.shift()+d,k0=!0),M7(R0+=S.pop(),J0);break;case 23:b7();break;case 24:for(;2<S.length;)K=R0+S.shift(),F=J0+S.shift(),N=K+S.shift(),E=F+S.shift(),R0=N+S.shift(),J0=E+S.shift(),t.curveTo(K,F,N,E,R0,J0);R0+=S.shift(),J0+=S.shift(),t.lineTo(R0,J0);break;case 25:for(;6<S.length;)R0+=S.shift(),J0+=S.shift(),t.lineTo(R0,J0);K=R0+S.shift(),F=J0+S.shift(),N=K+S.shift(),E=F+S.shift(),R0=N+S.shift(),J0=E+S.shift(),t.curveTo(K,F,N,E,R0,J0);break;case 26:for(S.length%2&&(R0+=S.shift());0<S.length;)K=R0,F=J0+S.shift(),N=K+S.shift(),E=F+S.shift(),R0=N,J0=E+S.shift(),t.curveTo(K,F,N,E,R0,J0);break;case 27:for(S.length%2&&(J0+=S.shift());0<S.length;)K=R0+S.shift(),F=J0,N=K+S.shift(),E=F+S.shift(),R0=N+S.shift(),J0=E,t.curveTo(K,F,N,E,R0,J0);break;case 28:u7=Z7[w7],x7=Z7[w7+1],S.push((u7<<24|x7<<16)>>16),w7+=2;break;case 29:T7=S.pop()+W.gsubrsBias,(G7=W.gsubrs[T7])&&q7(G7);break;case 30:for(;0<S.length&&(K=R0,F=J0+S.shift(),N=K+S.shift(),E=F+S.shift(),R0=N+S.shift(),J0=E+(S.length===1?S.shift():0),t.curveTo(K,F,N,E,R0,J0),S.length!==0);)K=R0+S.shift(),F=J0,N=K+S.shift(),E=F+S.shift(),J0=E+S.shift(),R0=N+(S.length===1?S.shift():0),t.curveTo(K,F,N,E,R0,J0);break;case 31:for(;0<S.length&&(K=R0+S.shift(),F=J0,N=K+S.shift(),E=F+S.shift(),J0=E+S.shift(),R0=N+(S.length===1?S.shift():0),t.curveTo(K,F,N,E,R0,J0),S.length!==0);)K=R0,F=J0+S.shift(),N=K+S.shift(),E=F+S.shift(),R0=N+S.shift(),J0=E+(S.length===1?S.shift():0),t.curveTo(K,F,N,E,R0,J0);break;default:d7<32?console.log("Glyph "+$.index+": unknown operator "+d7):d7<247?S.push(d7-139):d7<251?(u7=Z7[w7],w7+=1,S.push(256*(d7-247)+u7+108)):d7<255?(u7=Z7[w7],w7+=1,S.push(256*-(d7-251)-u7-108)):(u7=Z7[w7],x7=Z7[w7+1],y7=Z7[w7+2],v7=Z7[w7+3],w7+=4,S.push((u7<<24|x7<<16|y7<<8|v7)/65536))}}}(Y),$.advanceWidth=U7,t}function V8(W,$){var Y,K=r.indexOf(W);return 0<=K&&(Y=K),0<=(K=$.indexOf(W))?Y=K+r.length:(Y=r.length+$.length,$.push(W)),Y}function Q8(W,$,Y){for(var K={},F=0;F<W.length;F+=1){var N=W[F],E=$[N.name];E===void 0||s(E,N.value)||(N.type==="SID"&&(E=V8(E,Y)),K[N.op]={name:N.name,type:N.type,value:E})}return K}function H8(W,$){var Y=new M.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return Y.dict=Q8(I7,W,$),Y}function K8(W){var $=new M.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return $.topDicts=[{name:"topDict_0",type:"TABLE",value:W}],$}function g8(W){var $=[],Y=W.path;$.push({name:"width",type:"NUMBER",value:W.advanceWidth});for(var K=0,F=0,N=0;N<Y.commands.length;N+=1){var E=void 0,O=void 0,T=Y.commands[N];if(T.type==="Q")T={type:"C",x:T.x,y:T.y,x1:Math.round(0.3333333333333333*K+0.6666666666666666*T.x1),y1:Math.round(0.3333333333333333*F+0.6666666666666666*T.y1),x2:Math.round(0.3333333333333333*T.x+0.6666666666666666*T.x1),y2:Math.round(0.3333333333333333*T.y+0.6666666666666666*T.y1)};if(T.type==="M")E=Math.round(T.x-K),O=Math.round(T.y-F),$.push({name:"dx",type:"NUMBER",value:E}),$.push({name:"dy",type:"NUMBER",value:O}),$.push({name:"rmoveto",type:"OP",value:21}),K=Math.round(T.x),F=Math.round(T.y);else if(T.type==="L")E=Math.round(T.x-K),O=Math.round(T.y-F),$.push({name:"dx",type:"NUMBER",value:E}),$.push({name:"dy",type:"NUMBER",value:O}),$.push({name:"rlineto",type:"OP",value:5}),K=Math.round(T.x),F=Math.round(T.y);else if(T.type==="C"){var y=Math.round(T.x1-K),d=Math.round(T.y1-F),t=Math.round(T.x2-T.x1),S=Math.round(T.y2-T.y1);E=Math.round(T.x-T.x2),O=Math.round(T.y-T.y2),$.push({name:"dx1",type:"NUMBER",value:y}),$.push({name:"dy1",type:"NUMBER",value:d}),$.push({name:"dx2",type:"NUMBER",value:t}),$.push({name:"dy2",type:"NUMBER",value:S}),$.push({name:"dx",type:"NUMBER",value:E}),$.push({name:"dy",type:"NUMBER",value:O}),$.push({name:"rrcurveto",type:"OP",value:8}),K=Math.round(T.x),F=Math.round(T.y)}}return $.push({name:"endchar",type:"OP",value:14}),$}var z9={parse:function(W,$,Y,K){Y.tables.cff={};var F,N,E,O=(F=W,N=$,(E={}).formatMajor=i.getCard8(F,N),E.formatMinor=i.getCard8(F,N+1),E.size=i.getCard8(F,N+2),E.offsetSize=i.getCard8(F,N+3),E.startOffset=N,E.endOffset=N+4,E),T=w0(W,O.endOffset,i.bytesToString),y=w0(W,T.endOffset),d=w0(W,y.endOffset,i.bytesToString),t=w0(W,d.endOffset);Y.gsubrs=t.objects,Y.gsubrsBias=I0(Y.gsubrs);var S=S7(W,$,y.objects,d.objects);if(S.length!==1)throw Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+S.length);var G0=S[0];if((Y.tables.cff.topDict=G0)._privateDict&&(Y.defaultWidthX=G0._privateDict.defaultWidthX,Y.nominalWidthX=G0._privateDict.nominalWidthX),G0.ros[0]!==void 0&&G0.ros[1]!==void 0&&(Y.isCIDFont=!0),Y.isCIDFont){var{fdArray:k0,fdSelect:O0}=G0;if(k0===0||O0===0)throw Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");var R0=w0(W,k0+=$),J0=S7(W,$,R0.objects,d.objects);G0._fdArray=J0,O0+=$,G0._fdSelect=function(x7,y7,v7,T7){var G7,D7=[],_7=new i.Parser(x7,y7),k7=_7.parseCard8();if(k7===0)for(var O7=0;O7<v7;O7++){if(T7<=(G7=_7.parseCard8()))throw Error("CFF table CID Font FDSelect has bad FD index value "+G7+" (FD count "+T7+")");D7.push(G7)}else{if(k7!==3)throw Error("CFF Table CID Font FDSelect table has unsupported format "+k7);var A7,s7=_7.parseCard16(),w7=_7.parseCard16();if(w7!==0)throw Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+w7);for(var d7=0;d7<s7;d7++){if(G7=_7.parseCard8(),A7=_7.parseCard16(),T7<=G7)throw Error("CFF table CID Font FDSelect has bad FD index value "+G7+" (FD count "+T7+")");if(v7<A7)throw Error("CFF Table CID Font FDSelect format 3 range has bad GID "+A7);for(;w7<A7;w7++)D7.push(G7);w7=A7}if(A7!==v7)throw Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+A7)}return D7}(W,O0,Y.numGlyphs,J0.length)}var y0,o0=$+G0.private[1],U7=V7(W,o0,G0.private[0],d.objects);if(Y.defaultWidthX=U7.defaultWidthX,Y.nominalWidthX=U7.nominalWidthX,U7.subrs!==0){var M7=o0+U7.subrs,b7=w0(W,M7);Y.subrs=b7.objects,Y.subrsBias=I0(Y.subrs)}else Y.subrs=[],Y.subrsBias=0;K.lowMemory?(y0=function(x7,y7){var v7,T7,G7=[],D7=i.getCard16(x7,y7);if(D7!==0){var _7=i.getByte(x7,y7+2);v7=y7+(D7+1)*_7+2;for(var k7=y7+3,O7=0;O7<D7+1;O7+=1)G7.push(i.getOffset(x7,k7,_7)),k7+=_7;T7=v7+G7[D7]}else T7=y7+2;return{offsets:G7,startOffset:y7,endOffset:T7}}(W,$+G0.charStrings),Y.nGlyphs=y0.offsets.length):(y0=w0(W,$+G0.charStrings),Y.nGlyphs=y0.objects.length);var q7=function(x7,y7,v7,T7){var G7,D7,_7=new i.Parser(x7,y7);--v7;var k7=[".notdef"],O7=_7.parseCard8();if(O7===0)for(var A7=0;A7<v7;A7+=1)G7=_7.parseSID(),k7.push($7(T7,G7));else if(O7===1)for(;k7.length<=v7;){G7=_7.parseSID(),D7=_7.parseCard8();for(var s7=0;s7<=D7;s7+=1)k7.push($7(T7,G7)),G7+=1}else{if(O7!==2)throw Error("Unknown charset format "+O7);for(;k7.length<=v7;){G7=_7.parseSID(),D7=_7.parseCard16();for(var w7=0;w7<=D7;w7+=1)k7.push($7(T7,G7)),G7+=1}}return k7}(W,$+G0.charset,Y.nGlyphs,d.objects);if(G0.encoding===0?Y.cffEncoding=new m0(U0,q7):G0.encoding===1?Y.cffEncoding=new m0(f0,q7):Y.cffEncoding=function(x7,y7,v7){var T7,G7={},D7=new i.Parser(x7,y7),_7=D7.parseCard8();if(_7===0)for(var k7=D7.parseCard8(),O7=0;O7<k7;O7+=1)G7[T7=D7.parseCard8()]=O7;else{if(_7!==1)throw Error("Unknown encoding format "+_7);var A7=D7.parseCard8();T7=1;for(var s7=0;s7<A7;s7+=1)for(var w7=D7.parseCard8(),d7=D7.parseCard8(),o8=w7;o8<=w7+d7;o8+=1)G7[o8]=T7,T7+=1}return new m0(G7,v7)}(W,$+G0.encoding,q7),Y.encoding=Y.encoding||Y.cffEncoding,Y.glyphs=new _0.GlyphSet(Y),K.lowMemory)Y._push=function(x7){var y7=function(v7,T7,G7,D7,_7){var k7=i.getCard16(G7,D7),O7=0;k7!==0&&(O7=D7+(k7+1)*i.getByte(G7,D7+2)+2);var A7=i.getBytes(G7,O7+T7[v7],O7+T7[v7+1]);return _7&&(A7=_7(A7)),A7}(x7,y0.offsets,W,$+G0.charStrings);Y.glyphs.push(x7,_0.cffGlyphLoader(Y,x7,l7,y7))};else for(var Z7=0;Z7<Y.nGlyphs;Z7+=1){var u7=y0.objects[Z7];Y.glyphs.push(Z7,_0.cffGlyphLoader(Y,Z7,l7,u7))}},make:function(W,$){for(var Y,K=new M.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),F=1/$.unitsPerEm,N={version:$.version,fullName:$.fullName,familyName:$.familyName,weight:$.weightName,fontBBox:$.fontBBox||[0,0,0,0],fontMatrix:[F,0,0,F,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},E=[],O=1;O<W.length;O+=1)Y=W.get(O),E.push(Y.name);var T=[];K.header=new M.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}]),K.nameIndex=function(k0){var O0=new M.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);O0.names=[];for(var R0=0;R0<k0.length;R0+=1)O0.names.push({name:"name_"+R0,type:"NAME",value:k0[R0]});return O0}([$.postScriptName]);var y,d,t,S=H8(N,T);K.topDictIndex=K8(S),K.globalSubrIndex=new M.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}]),K.charsets=function(k0,O0){for(var R0=new M.Record("Charsets",[{name:"format",type:"Card8",value:0}]),J0=0;J0<k0.length;J0+=1){var y0=V8(k0[J0],O0);R0.fields.push({name:"glyph_"+J0,type:"SID",value:y0})}return R0}(E,T),K.charStringsIndex=function(k0){for(var O0=new M.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),R0=0;R0<k0.length;R0+=1){var J0=k0.get(R0),y0=g8(J0);O0.charStrings.push({name:J0.name,type:"CHARSTRING",value:y0})}return O0}(W),K.privateDict=(y={},d=T,(t=new M.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}])).dict=Q8(P7,y,d),t),K.stringIndex=function(k0){var O0=new M.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);O0.strings=[];for(var R0=0;R0<k0.length;R0+=1)O0.strings.push({name:"string_"+R0,type:"STRING",value:k0[R0]});return O0}(T);var G0=K.header.sizeOf()+K.nameIndex.sizeOf()+K.topDictIndex.sizeOf()+K.stringIndex.sizeOf()+K.globalSubrIndex.sizeOf();return N.charset=G0,N.encoding=0,N.charStrings=N.charset+K.charsets.sizeOf(),N.private[1]=N.charStrings+K.charStringsIndex.sizeOf(),S=H8(N,T),K.topDictIndex=K8(S),K}},S9={parse:function(W,$){var Y={},K=new i.Parser(W,$);return Y.version=K.parseVersion(),Y.fontRevision=Math.round(1000*K.parseFixed())/1000,Y.checkSumAdjustment=K.parseULong(),Y.magicNumber=K.parseULong(),e.argument(Y.magicNumber===1594834165,"Font header has wrong magic number."),Y.flags=K.parseUShort(),Y.unitsPerEm=K.parseUShort(),Y.created=K.parseLongDateTime(),Y.modified=K.parseLongDateTime(),Y.xMin=K.parseShort(),Y.yMin=K.parseShort(),Y.xMax=K.parseShort(),Y.yMax=K.parseShort(),Y.macStyle=K.parseUShort(),Y.lowestRecPPEM=K.parseUShort(),Y.fontDirectionHint=K.parseShort(),Y.indexToLocFormat=K.parseShort(),Y.glyphDataFormat=K.parseShort(),Y},make:function(W){var $=Math.round(new Date().getTime()/1000)+2082844800,Y=$;return W.createdTimestamp&&(Y=W.createdTimestamp+2082844800),new M.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1000},{name:"created",type:"LONGDATETIME",value:Y},{name:"modified",type:"LONGDATETIME",value:$},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],W)}},j9={parse:function(W,$){var Y={},K=new i.Parser(W,$);return Y.version=K.parseVersion(),Y.ascender=K.parseShort(),Y.descender=K.parseShort(),Y.lineGap=K.parseShort(),Y.advanceWidthMax=K.parseUShort(),Y.minLeftSideBearing=K.parseShort(),Y.minRightSideBearing=K.parseShort(),Y.xMaxExtent=K.parseShort(),Y.caretSlopeRise=K.parseShort(),Y.caretSlopeRun=K.parseShort(),Y.caretOffset=K.parseShort(),K.relativeOffset+=8,Y.metricDataFormat=K.parseShort(),Y.numberOfHMetrics=K.parseUShort(),Y},make:function(W){return new M.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],W)}},f9={parse:function(W,$,Y,K,F,N,E){E.lowMemory?function(O,T,y,d,t){var S,G0;O._hmtxTableData={};for(var k0=new i.Parser(T,y),O0=0;O0<t;O0+=1)O0<d&&(S=k0.parseUShort(),G0=k0.parseShort()),O._hmtxTableData[O0]={advanceWidth:S,leftSideBearing:G0}}(W,$,Y,K,F):function(O,T,y,d,t){for(var S,G0,k0=new i.Parser(O,T),O0=0;O0<d;O0+=1){O0<y&&(S=k0.parseUShort(),G0=k0.parseShort());var R0=t.get(O0);R0.advanceWidth=S,R0.leftSideBearing=G0}}($,Y,K,F,N)},make:function(W){for(var $=new M.Table("hmtx",[]),Y=0;Y<W.length;Y+=1){var K=W.get(Y),F=K.advanceWidth||0,N=K.leftSideBearing||0;$.fields.push({name:"advanceWidth_"+Y,type:"USHORT",value:F}),$.fields.push({name:"leftSideBearing_"+Y,type:"SHORT",value:N})}return $}},h={make:function(W){for(var $=new M.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:W.length}]),Y="",K=12+4*W.length,F=0;F<W.length;++F){var N=Y.indexOf(W[F]);N<0&&(N=Y.length,Y+=W[F]),$.fields.push({name:"offset "+F,type:"USHORT",value:K+N}),$.fields.push({name:"length "+F,type:"USHORT",value:W[F].length})}return $.fields.push({name:"stringPool",type:"CHARARRAY",value:Y}),$},parse:function(W,$){var Y=new i.Parser(W,$),K=Y.parseULong();e.argument(K===1,"Unsupported ltag table version."),Y.skip("uLong",1);for(var F=Y.parseULong(),N=[],E=0;E<F;E++){for(var O="",T=$+Y.parseUShort(),y=Y.parseUShort(),d=T;d<T+y;++d)O+=String.fromCharCode(W.getInt8(d));N.push(O)}return N}},Y0={parse:function(W,$){var Y={},K=new i.Parser(W,$);return Y.version=K.parseVersion(),Y.numGlyphs=K.parseUShort(),Y.version===1&&(Y.maxPoints=K.parseUShort(),Y.maxContours=K.parseUShort(),Y.maxCompositePoints=K.parseUShort(),Y.maxCompositeContours=K.parseUShort(),Y.maxZones=K.parseUShort(),Y.maxTwilightPoints=K.parseUShort(),Y.maxStorage=K.parseUShort(),Y.maxFunctionDefs=K.parseUShort(),Y.maxInstructionDefs=K.parseUShort(),Y.maxStackElements=K.parseUShort(),Y.maxSizeOfInstructions=K.parseUShort(),Y.maxComponentElements=K.parseUShort(),Y.maxComponentDepth=K.parseUShort()),Y},make:function(W){return new M.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:W}])}},V0=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],N0={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},F0={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},r0={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function W7(W,$,Y){switch(W){case 0:if($===65535)return"und";if(Y)return Y[$];break;case 1:return N0[$];case 3:return r0[$]}}var Y7="utf-16",F7={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},z7={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function N7(W,$,Y){switch(W){case 0:return Y7;case 1:return z7[Y]||F7[$];case 3:if($===1||$===10)return Y7}}function R7(W){var $={};for(var Y in W)$[W[Y]]=parseInt(Y);return $}function c7(W,$,Y,K,F,N){return new M.Record("NameRecord",[{name:"platformID",type:"USHORT",value:W},{name:"encodingID",type:"USHORT",value:$},{name:"languageID",type:"USHORT",value:Y},{name:"nameID",type:"USHORT",value:K},{name:"length",type:"USHORT",value:F},{name:"offset",type:"USHORT",value:N}])}function F8(W,$){var Y=function(N,E){var O=N.length,T=E.length-O+1;Q:for(var y=0;y<T;y++)for(;y<T;y++){for(var d=0;d<O;d++)if(E[y+d]!==N[d])continue Q;return y}return-1}(W,$);if(Y<0){Y=$.length;for(var K=0,F=W.length;K<F;++K)$.push(W[K])}return Y}var a7={parse:function(W,$,Y){for(var K={},F=new i.Parser(W,$),N=F.parseUShort(),E=F.parseUShort(),O=F.offset+F.parseUShort(),T=0;T<E;T++){var y=F.parseUShort(),d=F.parseUShort(),t=F.parseUShort(),S=F.parseUShort(),G0=V0[S]||S,k0=F.parseUShort(),O0=F.parseUShort(),R0=W7(y,t,Y),J0=N7(y,d,t);if(J0!==void 0&&R0!==void 0){var y0=void 0;if(y0=J0===Y7?P0.UTF16(W,O+O0,k0):P0.MACSTRING(W,O+O0,k0,J0)){var o0=K[G0];o0===void 0&&(o0=K[G0]={}),o0[R0]=y0}}}return N===1&&F.parseUShort(),K},make:function(W,$){var Y,K=[],F={},N=R7(V0);for(var E in W){var O=N[E];if(O===void 0&&(O=E),Y=parseInt(O),isNaN(Y))throw Error('Name table entry "'+E+'" does not exist, see nameTableNames for complete list.');F[Y]=W[E],K.push(Y)}for(var T=R7(N0),y=R7(r0),d=[],t=[],S=0;S<K.length;S++){var G0=F[Y=K[S]];for(var k0 in G0){var O0=G0[k0],R0=1,J0=T[k0],y0=F0[J0],o0=N7(R0,y0,J0),U7=a.MACSTRING(O0,o0);U7===void 0&&(R0=0,(J0=$.indexOf(k0))<0&&(J0=$.length,$.push(k0)),y0=4,U7=a.UTF16(O0));var M7=F8(U7,t);d.push(c7(R0,y0,J0,Y,U7.length,M7));var b7=y[k0];if(b7!==void 0){var q7=a.UTF16(O0),Z7=F8(q7,t);d.push(c7(3,1,b7,Y,q7.length,Z7))}}}d.sort(function(y7,v7){return y7.platformID-v7.platformID||y7.encodingID-v7.encodingID||y7.languageID-v7.languageID||y7.nameID-v7.nameID});for(var u7=new M.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:d.length},{name:"stringOffset",type:"USHORT",value:6+12*d.length}]),x7=0;x7<d.length;x7++)u7.fields.push({name:"record_"+x7,type:"RECORD",value:d[x7]});return u7.fields.push({name:"strings",type:"LITERAL",value:t}),u7}},L8=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66000,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}],m7={parse:function(W,$){var Y={},K=new i.Parser(W,$);Y.version=K.parseUShort(),Y.xAvgCharWidth=K.parseShort(),Y.usWeightClass=K.parseUShort(),Y.usWidthClass=K.parseUShort(),Y.fsType=K.parseUShort(),Y.ySubscriptXSize=K.parseShort(),Y.ySubscriptYSize=K.parseShort(),Y.ySubscriptXOffset=K.parseShort(),Y.ySubscriptYOffset=K.parseShort(),Y.ySuperscriptXSize=K.parseShort(),Y.ySuperscriptYSize=K.parseShort(),Y.ySuperscriptXOffset=K.parseShort(),Y.ySuperscriptYOffset=K.parseShort(),Y.yStrikeoutSize=K.parseShort(),Y.yStrikeoutPosition=K.parseShort(),Y.sFamilyClass=K.parseShort(),Y.panose=[];for(var F=0;F<10;F++)Y.panose[F]=K.parseByte();return Y.ulUnicodeRange1=K.parseULong(),Y.ulUnicodeRange2=K.parseULong(),Y.ulUnicodeRange3=K.parseULong(),Y.ulUnicodeRange4=K.parseULong(),Y.achVendID=String.fromCharCode(K.parseByte(),K.parseByte(),K.parseByte(),K.parseByte()),Y.fsSelection=K.parseUShort(),Y.usFirstCharIndex=K.parseUShort(),Y.usLastCharIndex=K.parseUShort(),Y.sTypoAscender=K.parseShort(),Y.sTypoDescender=K.parseShort(),Y.sTypoLineGap=K.parseShort(),Y.usWinAscent=K.parseUShort(),Y.usWinDescent=K.parseUShort(),1<=Y.version&&(Y.ulCodePageRange1=K.parseULong(),Y.ulCodePageRange2=K.parseULong()),2<=Y.version&&(Y.sxHeight=K.parseShort(),Y.sCapHeight=K.parseShort(),Y.usDefaultChar=K.parseUShort(),Y.usBreakChar=K.parseUShort(),Y.usMaxContent=K.parseUShort()),Y},make:function(W){return new M.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],W)},unicodeRanges:L8,getUnicodeRange:function(W){for(var $=0;$<L8.length;$+=1){var Y=L8[$];if(W>=Y.begin&&W<Y.end)return $}return-1}},E7={parse:function(W,$){var Y={},K=new i.Parser(W,$);switch(Y.version=K.parseVersion(),Y.italicAngle=K.parseFixed(),Y.underlinePosition=K.parseShort(),Y.underlineThickness=K.parseShort(),Y.isFixedPitch=K.parseULong(),Y.minMemType42=K.parseULong(),Y.maxMemType42=K.parseULong(),Y.minMemType1=K.parseULong(),Y.maxMemType1=K.parseULong(),Y.version){case 1:Y.names=H0.slice();break;case 2:Y.numberOfGlyphs=K.parseUShort(),Y.glyphNameIndex=Array(Y.numberOfGlyphs);for(var F=0;F<Y.numberOfGlyphs;F++)Y.glyphNameIndex[F]=K.parseUShort();Y.names=[];for(var N=0;N<Y.numberOfGlyphs;N++)if(Y.glyphNameIndex[N]>=H0.length){var E=K.parseChar();Y.names.push(K.parseString(E))}break;case 2.5:Y.numberOfGlyphs=K.parseUShort(),Y.offset=Array(Y.numberOfGlyphs);for(var O=0;O<Y.numberOfGlyphs;O++)Y.offset[O]=K.parseChar()}return Y},make:function(){return new M.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}},R8=[,,,,,,,,,];R8[1]=function(){var W=this.offset+this.relativeOffset,$=this.parseUShort();return $===1?{substFormat:1,coverage:this.parsePointer(A.coverage),deltaGlyphId:this.parseUShort()}:$===2?{substFormat:2,coverage:this.parsePointer(A.coverage),substitute:this.parseOffset16List()}:void e.assert(!1,"0x"+W.toString(16)+": lookup type 1 format must be 1 or 2.")},R8[2]=function(){var W=this.parseUShort();return e.argument(W===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:W,coverage:this.parsePointer(A.coverage),sequences:this.parseListOfLists()}},R8[3]=function(){var W=this.parseUShort();return e.argument(W===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:W,coverage:this.parsePointer(A.coverage),alternateSets:this.parseListOfLists()}},R8[4]=function(){var W=this.parseUShort();return e.argument(W===1,"GSUB ligature table identifier-format must be 1"),{substFormat:W,coverage:this.parsePointer(A.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var j7={sequenceIndex:A.uShort,lookupListIndex:A.uShort};R8[5]=function(){var W=this.offset+this.relativeOffset,$=this.parseUShort();if($===1)return{substFormat:$,coverage:this.parsePointer(A.coverage),ruleSets:this.parseListOfLists(function(){var F=this.parseUShort(),N=this.parseUShort();return{input:this.parseUShortList(F-1),lookupRecords:this.parseRecordList(N,j7)}})};if($===2)return{substFormat:$,coverage:this.parsePointer(A.coverage),classDef:this.parsePointer(A.classDef),classSets:this.parseListOfLists(function(){var F=this.parseUShort(),N=this.parseUShort();return{classes:this.parseUShortList(F-1),lookupRecords:this.parseRecordList(N,j7)}})};if($===3){var Y=this.parseUShort(),K=this.parseUShort();return{substFormat:$,coverages:this.parseList(Y,A.pointer(A.coverage)),lookupRecords:this.parseRecordList(K,j7)}}e.assert(!1,"0x"+W.toString(16)+": lookup type 5 format must be 1, 2 or 3.")},R8[6]=function(){var W=this.offset+this.relativeOffset,$=this.parseUShort();return $===1?{substFormat:1,coverage:this.parsePointer(A.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(j7)}})}:$===2?{substFormat:2,coverage:this.parsePointer(A.coverage),backtrackClassDef:this.parsePointer(A.classDef),inputClassDef:this.parsePointer(A.classDef),lookaheadClassDef:this.parsePointer(A.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(j7)}})}:$===3?{substFormat:3,backtrackCoverage:this.parseList(A.pointer(A.coverage)),inputCoverage:this.parseList(A.pointer(A.coverage)),lookaheadCoverage:this.parseList(A.pointer(A.coverage)),lookupRecords:this.parseRecordList(j7)}:void e.assert(!1,"0x"+W.toString(16)+": lookup type 6 format must be 1, 2 or 3.")},R8[7]=function(){var W=this.parseUShort();e.argument(W===1,"GSUB Extension Substitution subtable identifier-format must be 1");var $=this.parseUShort(),Y=new A(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:$,extension:R8[$].call(Y)}},R8[8]=function(){var W=this.parseUShort();return e.argument(W===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:W,coverage:this.parsePointer(A.coverage),backtrackCoverage:this.parseList(A.pointer(A.coverage)),lookaheadCoverage:this.parseList(A.pointer(A.coverage)),substitutes:this.parseUShortList()}};var E8=[,,,,,,,,,];E8[1]=function(W){return W.substFormat===1?new M.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new M.Coverage(W.coverage)},{name:"deltaGlyphID",type:"USHORT",value:W.deltaGlyphId}]):new M.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new M.Coverage(W.coverage)}].concat(M.ushortList("substitute",W.substitute)))},E8[2]=function(W){return e.assert(W.substFormat===1,"Lookup type 2 substFormat must be 1."),new M.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new M.Coverage(W.coverage)}].concat(M.tableList("seqSet",W.sequences,function($){return new M.Table("sequenceSetTable",M.ushortList("sequence",$))})))},E8[3]=function(W){return e.assert(W.substFormat===1,"Lookup type 3 substFormat must be 1."),new M.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new M.Coverage(W.coverage)}].concat(M.tableList("altSet",W.alternateSets,function($){return new M.Table("alternateSetTable",M.ushortList("alternate",$))})))},E8[4]=function(W){return e.assert(W.substFormat===1,"Lookup type 4 substFormat must be 1."),new M.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new M.Coverage(W.coverage)}].concat(M.tableList("ligSet",W.ligatureSets,function($){return new M.Table("ligatureSetTable",M.tableList("ligature",$,function(Y){return new M.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:Y.ligGlyph}].concat(M.ushortList("component",Y.components,Y.components.length+1)))}))})))},E8[6]=function(W){if(W.substFormat===1)return new M.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:W.substFormat},{name:"coverage",type:"TABLE",value:new M.Coverage(W.coverage)}].concat(M.tableList("chainRuleSet",W.chainRuleSets,function(Y){return new M.Table("chainRuleSetTable",M.tableList("chainRule",Y,function(K){var F=M.ushortList("backtrackGlyph",K.backtrack,K.backtrack.length).concat(M.ushortList("inputGlyph",K.input,K.input.length+1)).concat(M.ushortList("lookaheadGlyph",K.lookahead,K.lookahead.length)).concat(M.ushortList("substitution",[],K.lookupRecords.length));return K.lookupRecords.forEach(function(N,E){F=F.concat({name:"sequenceIndex"+E,type:"USHORT",value:N.sequenceIndex}).concat({name:"lookupListIndex"+E,type:"USHORT",value:N.lookupListIndex})}),new M.Table("chainRuleTable",F)}))})));if(W.substFormat===2)e.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(W.substFormat===3){var $=[{name:"substFormat",type:"USHORT",value:W.substFormat}];return $.push({name:"backtrackGlyphCount",type:"USHORT",value:W.backtrackCoverage.length}),W.backtrackCoverage.forEach(function(Y,K){$.push({name:"backtrackCoverage"+K,type:"TABLE",value:new M.Coverage(Y)})}),$.push({name:"inputGlyphCount",type:"USHORT",value:W.inputCoverage.length}),W.inputCoverage.forEach(function(Y,K){$.push({name:"inputCoverage"+K,type:"TABLE",value:new M.Coverage(Y)})}),$.push({name:"lookaheadGlyphCount",type:"USHORT",value:W.lookaheadCoverage.length}),W.lookaheadCoverage.forEach(function(Y,K){$.push({name:"lookaheadCoverage"+K,type:"TABLE",value:new M.Coverage(Y)})}),$.push({name:"substitutionCount",type:"USHORT",value:W.lookupRecords.length}),W.lookupRecords.forEach(function(Y,K){$=$.concat({name:"sequenceIndex"+K,type:"USHORT",value:Y.sequenceIndex}).concat({name:"lookupListIndex"+K,type:"USHORT",value:Y.lookupListIndex})}),new M.Table("chainContextTable",$)}e.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};var N6={parse:function(W,$){var Y=new A(W,$=$||0),K=Y.parseVersion(1);return e.argument(K===1||K===1.1,"Unsupported GSUB table version."),K===1?{version:K,scripts:Y.parseScriptList(),features:Y.parseFeatureList(),lookups:Y.parseLookupList(R8)}:{version:K,scripts:Y.parseScriptList(),features:Y.parseFeatureList(),lookups:Y.parseLookupList(R8),variations:Y.parseFeatureVariationsList()}},make:function(W){return new M.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new M.ScriptList(W.scripts)},{name:"features",type:"TABLE",value:new M.FeatureList(W.features)},{name:"lookups",type:"TABLE",value:new M.LookupList(W.lookups,E8)}])}},W9={parse:function(W,$){var Y=new i.Parser(W,$),K=Y.parseULong();e.argument(K===1,"Unsupported META table version."),Y.parseULong(),Y.parseULong();for(var F=Y.parseULong(),N={},E=0;E<F;E++){var O=Y.parseTag(),T=Y.parseULong(),y=Y.parseULong(),d=P0.UTF8(W,$+T,y);N[O]=d}return N},make:function(W){var $=Object.keys(W).length,Y="",K=16+12*$,F=new M.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:K},{name:"numTags",type:"ULONG",value:$}]);for(var N in W){var E=Y.length;Y+=W[N],F.fields.push({name:"tag "+N,type:"TAG",value:N}),F.fields.push({name:"offset "+N,type:"ULONG",value:K+E}),F.fields.push({name:"length "+N,type:"ULONG",value:W[N].length})}return F.fields.push({name:"stringPool",type:"CHARARRAY",value:Y}),F}};function x9(W){return Math.log(W)/Math.log(2)|0}function t7(W){for(;W.length%4!=0;)W.push(0);for(var $=0,Y=0;Y<W.length;Y+=4)$+=(W[Y]<<24)+(W[Y+1]<<16)+(W[Y+2]<<8)+W[Y+3];return $%=Math.pow(2,32)}function p8(W,$,Y,K){return new M.Record("Table Record",[{name:"tag",type:"TAG",value:W!==void 0?W:""},{name:"checkSum",type:"ULONG",value:$!==void 0?$:0},{name:"offset",type:"ULONG",value:Y!==void 0?Y:0},{name:"length",type:"ULONG",value:K!==void 0?K:0}])}function y9(W){var $=new M.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);$.tables=W,$.numTables=W.length;var Y=Math.pow(2,x9($.numTables));$.searchRange=16*Y,$.entrySelector=x9(Y),$.rangeShift=16*$.numTables-$.searchRange;for(var K=[],F=[],N=$.sizeOf()+p8().sizeOf()*$.numTables;N%4!=0;)N+=1,F.push({name:"padding",type:"BYTE",value:0});for(var E=0;E<W.length;E+=1){var O=W[E];e.argument(O.tableName.length===4,"Table name"+O.tableName+" is invalid.");var T=O.sizeOf(),y=p8(O.tableName,t7(O.encode()),N,T);for(K.push({name:y.tag+" Table Record",type:"RECORD",value:y}),F.push({name:O.tableName+" table",type:"RECORD",value:O}),N+=T,e.argument(!isNaN(N),"Something went wrong calculating the offset.");N%4!=0;)N+=1,F.push({name:"padding",type:"BYTE",value:0})}return K.sort(function(d,t){return d.value.tag>t.value.tag?1:-1}),$.fields=$.fields.concat(K),$.fields=$.fields.concat(F),$}function U8(W,$,Y){for(var K=0;K<$.length;K+=1){var F=W.charToGlyphIndex($[K]);if(0<F)return W.glyphs.get(F).getMetrics()}return Y}var R6={make:y9,fontToTable:function(W){for(var $,Y=[],K=[],F=[],N=[],E=[],O=[],T=[],y=0,d=0,t=0,S=0,G0=0,k0=0;k0<W.glyphs.length;k0+=1){var O0=W.glyphs.get(k0),R0=0|O0.unicode;if(isNaN(O0.advanceWidth))throw Error("Glyph "+O0.name+" ("+k0+"): advanceWidth is not a number.");(R0<$||$===void 0)&&0<R0&&($=R0),y<R0&&(y=R0);var J0=m7.getUnicodeRange(R0);if(J0<32)d|=1<<J0;else if(J0<64)t|=1<<J0-32;else if(J0<96)S|=1<<J0-64;else{if(!(J0<123))throw Error("Unicode ranges bits > 123 are reserved for internal usage");G0|=1<<J0-96}if(O0.name!==".notdef"){var y0=O0.getMetrics();Y.push(y0.xMin),K.push(y0.yMin),F.push(y0.xMax),N.push(y0.yMax),O.push(y0.leftSideBearing),T.push(y0.rightSideBearing),E.push(O0.advanceWidth)}}var o0={xMin:Math.min.apply(null,Y),yMin:Math.min.apply(null,K),xMax:Math.max.apply(null,F),yMax:Math.max.apply(null,N),advanceWidthMax:Math.max.apply(null,E),advanceWidthAvg:function(M6){for(var C6=0,h9=0;h9<M6.length;h9+=1)C6+=M6[h9];return C6/M6.length}(E),minLeftSideBearing:Math.min.apply(null,O),maxLeftSideBearing:Math.max.apply(null,O),minRightSideBearing:Math.min.apply(null,T)};o0.ascender=W.ascender,o0.descender=W.descender;var U7=S9.make({flags:3,unitsPerEm:W.unitsPerEm,xMin:o0.xMin,yMin:o0.yMin,xMax:o0.xMax,yMax:o0.yMax,lowestRecPPEM:3,createdTimestamp:W.createdTimestamp}),M7=j9.make({ascender:o0.ascender,descender:o0.descender,advanceWidthMax:o0.advanceWidthMax,minLeftSideBearing:o0.minLeftSideBearing,minRightSideBearing:o0.minRightSideBearing,xMaxExtent:o0.maxLeftSideBearing+(o0.xMax-o0.xMin),numberOfHMetrics:W.glyphs.length}),b7=Y0.make(W.glyphs.length),q7=m7.make(Object.assign({xAvgCharWidth:Math.round(o0.advanceWidthAvg),usFirstCharIndex:$,usLastCharIndex:y,ulUnicodeRange1:d,ulUnicodeRange2:t,ulUnicodeRange3:S,ulUnicodeRange4:G0,sTypoAscender:o0.ascender,sTypoDescender:o0.descender,sTypoLineGap:0,usWinAscent:o0.yMax,usWinDescent:Math.abs(o0.yMin),ulCodePageRange1:1,sxHeight:U8(W,"xyvw",{yMax:Math.round(o0.ascender/2)}).yMax,sCapHeight:U8(W,"HIKLEFJMNTZBDPRAGOQSUVWXY",o0).yMax,usDefaultChar:W.hasChar(" ")?32:0,usBreakChar:W.hasChar(" ")?32:0},W.tables.os2)),Z7=f9.make(W.glyphs),u7=X0.make(W.glyphs),x7=W.getEnglishName("fontFamily"),y7=W.getEnglishName("fontSubfamily"),v7=x7+" "+y7,T7=W.getEnglishName("postScriptName");T7=T7||x7.replace(/\s/g,"")+"-"+y7;var G7={};for(var D7 in W.names)G7[D7]=W.names[D7];G7.uniqueID||(G7.uniqueID={en:W.getEnglishName("manufacturer")+":"+v7}),G7.postScriptName||(G7.postScriptName={en:T7}),G7.preferredFamily||(G7.preferredFamily=W.names.fontFamily),G7.preferredSubfamily||(G7.preferredSubfamily=W.names.fontSubfamily);var _7=[],k7=a7.make(G7,_7),O7=0<_7.length?h.make(_7):void 0,A7=E7.make(),s7=z9.make(W.glyphs,{version:W.getEnglishName("version"),fullName:v7,familyName:x7,weightName:y7,postScriptName:T7,unitsPerEm:W.unitsPerEm,fontBBox:[0,o0.yMin,o0.ascender,o0.advanceWidthMax]}),w7=W.metas&&0<Object.keys(W.metas).length?W9.make(W.metas):void 0,d7=[U7,M7,b7,q7,k7,u7,A7,s7,Z7];O7&&d7.push(O7),W.tables.gsub&&d7.push(N6.make(W.tables.gsub)),w7&&d7.push(w7);for(var o8=y9(d7),J5=t7(o8.encode()),a8=o8.fields,L6=!1,b9=0;b9<a8.length;b9+=1)if(a8[b9].name==="head table"){a8[b9].value.checkSumAdjustment=2981146554-J5,L6=!0;break}if(!L6)throw Error("Could not find head table with checkSum to adjust.");return o8},computeCheckSum:t7};function U6(W,$){for(var Y=0,K=W.length-1;Y<=K;){var F=Y+K>>>1,N=W[F].tag;if(N===$)return F;N<$?Y=1+F:K=F-1}return-Y-1}function D6(W,$){for(var Y=0,K=W.length-1;Y<=K;){var F=Y+K>>>1,N=W[F];if(N===$)return F;N<$?Y=1+F:K=F-1}return-Y-1}function MZ(W,$){for(var Y,K=0,F=W.length-1;K<=F;){var N=K+F>>>1,E=(Y=W[N]).start;if(E===$)return Y;E<$?K=1+N:F=N-1}if(0<K)return $>(Y=W[K-1]).end?0:Y}function o6(W,$){this.font=W,this.tableName=$}function a6(W){o6.call(this,W,"gpos")}function O8(W){o6.call(this,W,"gsub")}function F$(W,$){var Y=W.length;if(Y===$.length){for(var K=0;K<Y;K++)if(W[K]!==$[K])return;return 1}}function a5(W,$,Y){for(var K=W.subtables,F=0;F<K.length;F++){var N=K[F];if(N.substFormat===$)return N}if(Y)return K.push(Y),Y}function CZ(W){for(var $=new ArrayBuffer(W.length),Y=new Uint8Array($),K=0;K<W.length;++K)Y[K]=W[K];return $}function _6(W,$){if(!W)throw $}function kZ(W,$,Y,K,F){var N;return N=0<($&K)?(N=W.parseByte(),($&F)==0&&(N=-N),Y+N):0<($&F)?Y:Y+W.parseShort()}function OZ(W,$,Y){var K,F,N=new i.Parser($,Y);if(W.numberOfContours=N.parseShort(),W._xMin=N.parseShort(),W._yMin=N.parseShort(),W._xMax=N.parseShort(),W._yMax=N.parseShort(),0<W.numberOfContours){for(var E=W.endPointIndices=[],O=0;O<W.numberOfContours;O+=1)E.push(N.parseUShort());W.instructionLength=N.parseUShort(),W.instructions=[];for(var T=0;T<W.instructionLength;T+=1)W.instructions.push(N.parseByte());var y=E[E.length-1]+1;K=[];for(var d=0;d<y;d+=1)if(F=N.parseByte(),K.push(F),0<(8&F))for(var t=N.parseByte(),S=0;S<t;S+=1)K.push(F),d+=1;if(e.argument(K.length===y,"Bad flags."),0<E.length){var G0,k0=[];if(0<y){for(var O0=0;O0<y;O0+=1)F=K[O0],(G0={}).onCurve=!!(1&F),G0.lastPointOfContour=0<=E.indexOf(O0),k0.push(G0);for(var R0=0,J0=0;J0<y;J0+=1)F=K[J0],(G0=k0[J0]).x=kZ(N,F,R0,2,16),R0=G0.x;for(var y0=0,o0=0;o0<y;o0+=1)F=K[o0],(G0=k0[o0]).y=kZ(N,F,y0,4,32),y0=G0.y}W.points=k0}else W.points=[]}else if(W.numberOfContours===0)W.points=[];else{W.isComposite=!0,W.points=[],W.components=[];for(var U7=!0;U7;){K=N.parseUShort();var M7={glyphIndex:N.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};0<(1&K)?0<(2&K)?(M7.dx=N.parseShort(),M7.dy=N.parseShort()):M7.matchedPoints=[N.parseUShort(),N.parseUShort()]:0<(2&K)?(M7.dx=N.parseChar(),M7.dy=N.parseChar()):M7.matchedPoints=[N.parseByte(),N.parseByte()],0<(8&K)?M7.xScale=M7.yScale=N.parseF2Dot14():0<(64&K)?(M7.xScale=N.parseF2Dot14(),M7.yScale=N.parseF2Dot14()):0<(128&K)&&(M7.xScale=N.parseF2Dot14(),M7.scale01=N.parseF2Dot14(),M7.scale10=N.parseF2Dot14(),M7.yScale=N.parseF2Dot14()),W.components.push(M7),U7=!!(32&K)}if(256&K){W.instructionLength=N.parseUShort(),W.instructions=[];for(var b7=0;b7<W.instructionLength;b7+=1)W.instructions.push(N.parseByte())}}}function r5(W,$){for(var Y=[],K=0;K<W.length;K+=1){var F=W[K],N={x:$.xScale*F.x+$.scale01*F.y+$.dx,y:$.scale10*F.x+$.yScale*F.y+$.dy,onCurve:F.onCurve,lastPointOfContour:F.lastPointOfContour};Y.push(N)}return Y}function wZ(W){var $=new L0;if(!W)return $;for(var Y=function(t){for(var S=[],G0=[],k0=0;k0<t.length;k0+=1){var O0=t[k0];G0.push(O0),O0.lastPointOfContour&&(S.push(G0),G0=[])}return e.argument(G0.length===0,"There are still points left in the current contour."),S}(W),K=0;K<Y.length;++K){var F=Y[K],N=null,E=F[F.length-1],O=F[0];if(E.onCurve)$.moveTo(E.x,E.y);else if(O.onCurve)$.moveTo(O.x,O.y);else{var T={x:0.5*(E.x+O.x),y:0.5*(E.y+O.y)};$.moveTo(T.x,T.y)}for(var y=0;y<F.length;++y)if(N=E,E=O,O=F[(y+1)%F.length],E.onCurve)$.lineTo(E.x,E.y);else{var d=O;N.onCurve||(E.x,N.x,E.y,N.y),O.onCurve||(d={x:0.5*(E.x+O.x),y:0.5*(E.y+O.y)}),$.quadraticCurveTo(E.x,E.y,d.x,d.y)}$.closePath()}return $}function PZ(W,$){if($.isComposite)for(var Y=0;Y<$.components.length;Y+=1){var K=$.components[Y],F=W.get(K.glyphIndex);if(F.getPath(),F.points){var N=void 0;if(K.matchedPoints===void 0)N=r5(F.points,K);else{if(K.matchedPoints[0]>$.points.length-1||K.matchedPoints[1]>F.points.length-1)throw Error("Matched points out of range in "+$.name);var E=$.points[K.matchedPoints[0]],O=F.points[K.matchedPoints[1]],T={xScale:K.xScale,scale01:K.scale01,scale10:K.scale10,yScale:K.yScale,dx:0,dy:0};O=r5([O],T)[0],T.dx=E.x-O.x,T.dy=E.y-O.y,N=r5(F.points,T)}$.points=$.points.concat(N)}}return wZ($.points)}(a6.prototype=o6.prototype={searchTag:U6,binSearch:D6,getTable:function(W){var $=this.font.tables[this.tableName];return!$&&W&&($=this.font.tables[this.tableName]=this.createDefaultTable()),$},getScriptNames:function(){var W=this.getTable();return W?W.scripts.map(function($){return $.tag}):[]},getDefaultScriptName:function(){var W=this.getTable();if(W){for(var $=!1,Y=0;Y<W.scripts.length;Y++){var K=W.scripts[Y].tag;if(K==="DFLT")return K;K==="latn"&&($=!0)}return $?"latn":void 0}},getScriptTable:function(W,$){var Y=this.getTable($);if(Y){W=W||"DFLT";var K=Y.scripts,F=U6(Y.scripts,W);if(0<=F)return K[F].script;if($){var N={tag:W,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return K.splice(-1-F,0,N),N.script}}},getLangSysTable:function(W,$,Y){var K=this.getScriptTable(W,Y);if(K){if(!$||$==="dflt"||$==="DFLT")return K.defaultLangSys;var F=U6(K.langSysRecords,$);if(0<=F)return K.langSysRecords[F].langSys;if(Y){var N={tag:$,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return K.langSysRecords.splice(-1-F,0,N),N.langSys}}},getFeatureTable:function(W,$,Y,K){var F=this.getLangSysTable(W,$,K);if(F){for(var N,E=F.featureIndexes,O=this.font.tables[this.tableName].features,T=0;T<E.length;T++)if((N=O[E[T]]).tag===Y)return N.feature;if(K){var y=O.length;return e.assert(y===0||Y>=O[y-1].tag,"Features must be added in alphabetical order."),N={tag:Y,feature:{params:0,lookupListIndexes:[]}},O.push(N),E.push(y),N.feature}}},getLookupTables:function(W,$,Y,K,F){var N=this.getFeatureTable(W,$,Y,F),E=[];if(N){for(var O,T=N.lookupListIndexes,y=this.font.tables[this.tableName].lookups,d=0;d<T.length;d++)(O=y[T[d]]).lookupType===K&&E.push(O);if(E.length===0&&F){O={lookupType:K,lookupFlag:0,subtables:[],markFilteringSet:void 0};var t=y.length;return y.push(O),T.push(t),[O]}}return E},getGlyphClass:function(W,$){switch(W.format){case 1:return W.startGlyph<=$&&$<W.startGlyph+W.classes.length?W.classes[$-W.startGlyph]:0;case 2:var Y=MZ(W.ranges,$);return Y?Y.classId:0}},getCoverageIndex:function(W,$){switch(W.format){case 1:var Y=D6(W.glyphs,$);return 0<=Y?Y:-1;case 2:var K=MZ(W.ranges,$);return K?K.index+$-K.start:-1}},expandCoverage:function(W){if(W.format===1)return W.glyphs;for(var $=[],Y=W.ranges,K=0;K<Y.length;K++)for(var F=Y[K],N=F.start,E=F.end,O=N;O<=E;O++)$.push(O);return $}}).init=function(){var W=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(W)},a6.prototype.getKerningValue=function(W,$,Y){for(var K=0;K<W.length;K++)for(var F=W[K].subtables,N=0;N<F.length;N++){var E=F[N],O=this.getCoverageIndex(E.coverage,$);if(!(O<0))switch(E.posFormat){case 1:for(var T=E.pairSets[O],y=0;y<T.length;y++){var d=T[y];if(d.secondGlyph===Y)return d.value1&&d.value1.xAdvance||0}break;case 2:var t=this.getGlyphClass(E.classDef1,$),S=this.getGlyphClass(E.classDef2,Y),G0=E.classRecords[t][S];return G0.value1&&G0.value1.xAdvance||0}}return 0},a6.prototype.getKerningTables=function(W,$){if(this.font.tables.gpos)return this.getLookupTables(W,$,"kern",2)},(O8.prototype=o6.prototype).createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}},O8.prototype.getSingle=function(W,$,Y){for(var K=[],F=this.getLookupTables($,Y,W,1),N=0;N<F.length;N++)for(var E=F[N].subtables,O=0;O<E.length;O++){var T=E[O],y=this.expandCoverage(T.coverage),d=void 0;if(T.substFormat===1){var t=T.deltaGlyphId;for(d=0;d<y.length;d++){var S=y[d];K.push({sub:S,by:S+t})}}else{var G0=T.substitute;for(d=0;d<y.length;d++)K.push({sub:y[d],by:G0[d]})}}return K},O8.prototype.getMultiple=function(W,$,Y){for(var K=[],F=this.getLookupTables($,Y,W,2),N=0;N<F.length;N++)for(var E=F[N].subtables,O=0;O<E.length;O++){var T=E[O],y=this.expandCoverage(T.coverage),d=void 0;for(d=0;d<y.length;d++){var t=y[d],S=T.sequences[d];K.push({sub:t,by:S})}}return K},O8.prototype.getAlternates=function(W,$,Y){for(var K=[],F=this.getLookupTables($,Y,W,3),N=0;N<F.length;N++)for(var E=F[N].subtables,O=0;O<E.length;O++)for(var T=E[O],y=this.expandCoverage(T.coverage),d=T.alternateSets,t=0;t<y.length;t++)K.push({sub:y[t],by:d[t]});return K},O8.prototype.getLigatures=function(W,$,Y){for(var K=[],F=this.getLookupTables($,Y,W,4),N=0;N<F.length;N++)for(var E=F[N].subtables,O=0;O<E.length;O++)for(var T=E[O],y=this.expandCoverage(T.coverage),d=T.ligatureSets,t=0;t<y.length;t++)for(var S=y[t],G0=d[t],k0=0;k0<G0.length;k0++){var O0=G0[k0];K.push({sub:[S].concat(O0.components),by:O0.ligGlyph})}return K},O8.prototype.addSingle=function(W,$,Y,K){var F=a5(this.getLookupTables(Y,K,W,1,!0)[0],2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});e.assert(F.coverage.format===1,"Single: unable to modify coverage table format "+F.coverage.format);var N=$.sub,E=this.binSearch(F.coverage.glyphs,N);E<0&&(E=-1-E,F.coverage.glyphs.splice(E,0,N),F.substitute.splice(E,0,0)),F.substitute[E]=$.by},O8.prototype.addMultiple=function(W,$,Y,K){e.assert($.by instanceof Array&&1<$.by.length,'Multiple: "by" must be an array of two or more ids');var F=a5(this.getLookupTables(Y,K,W,2,!0)[0],1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});e.assert(F.coverage.format===1,"Multiple: unable to modify coverage table format "+F.coverage.format);var N=$.sub,E=this.binSearch(F.coverage.glyphs,N);E<0&&(E=-1-E,F.coverage.glyphs.splice(E,0,N),F.sequences.splice(E,0,0)),F.sequences[E]=$.by},O8.prototype.addAlternate=function(W,$,Y,K){var F=a5(this.getLookupTables(Y,K,W,3,!0)[0],1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});e.assert(F.coverage.format===1,"Alternate: unable to modify coverage table format "+F.coverage.format);var N=$.sub,E=this.binSearch(F.coverage.glyphs,N);E<0&&(E=-1-E,F.coverage.glyphs.splice(E,0,N),F.alternateSets.splice(E,0,0)),F.alternateSets[E]=$.by},O8.prototype.addLigature=function(W,$,Y,K){var F=this.getLookupTables(Y,K,W,4,!0)[0],N=F.subtables[0];N||(N={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},F.subtables[0]=N),e.assert(N.coverage.format===1,"Ligature: unable to modify coverage table format "+N.coverage.format);var E=$.sub[0],O=$.sub.slice(1),T={ligGlyph:$.by,components:O},y=this.binSearch(N.coverage.glyphs,E);if(0<=y){for(var d=N.ligatureSets[y],t=0;t<d.length;t++)if(F$(d[t].components,O))return;d.push(T)}else y=-1-y,N.coverage.glyphs.splice(y,0,E),N.ligatureSets.splice(y,0,[T])},O8.prototype.getFeature=function(W,$,Y){if(/ss\d\d/.test(W))return this.getSingle(W,$,Y);switch(W){case"aalt":case"salt":return this.getSingle(W,$,Y).concat(this.getAlternates(W,$,Y));case"dlig":case"liga":case"rlig":return this.getLigatures(W,$,Y);case"ccmp":return this.getMultiple(W,$,Y).concat(this.getLigatures(W,$,Y));case"stch":return this.getMultiple(W,$,Y)}},O8.prototype.add=function(W,$,Y,K){if(/ss\d\d/.test(W))return this.addSingle(W,$,Y,K);switch(W){case"aalt":case"salt":return typeof $.by=="number"?this.addSingle(W,$,Y,K):this.addAlternate(W,$,Y,K);case"dlig":case"liga":case"rlig":return this.addLigature(W,$,Y,K);case"ccmp":return $.by instanceof Array?this.addMultiple(W,$,Y,K):this.addLigature(W,$,Y,K)}};var AZ,E9,TZ,t5,SZ={getPath:wZ,parse:function(W,$,Y,K,F){return F.lowMemory?(N=W,E=$,O=Y,T=K,y=new _0.GlyphSet(T),T._push=function(d){var t=O[d];t!==O[d+1]?y.push(d,_0.ttfGlyphLoader(T,d,OZ,N,E+t,PZ)):y.push(d,_0.glyphLoader(T,d))},y):function(d,t,S,G0){for(var k0=new _0.GlyphSet(G0),O0=0;O0<S.length-1;O0+=1){var R0=S[O0];R0!==S[O0+1]?k0.push(O0,_0.ttfGlyphLoader(G0,O0,OZ,d,t+R0,PZ)):k0.push(O0,_0.glyphLoader(G0,O0))}return k0}(W,$,Y,K);var N,E,O,T,y}};function jZ(W){this.font=W,this.getCommands=function($){return SZ.getPath($).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function G$(W){return W}function fZ(W){return Math.sign(W)*Math.round(Math.abs(W))}function N$(W){return Math.sign(W)*Math.round(Math.abs(2*W))/2}function R$(W){return Math.sign(W)*(Math.round(Math.abs(W)+0.5)-0.5)}function U$(W){return Math.sign(W)*Math.ceil(Math.abs(W))}function D$(W){return Math.sign(W)*Math.floor(Math.abs(W))}function xZ(W){var $=this.srPeriod,Y=this.srPhase,K=1;return W<0&&(W=-W,K=-1),W+=this.srThreshold-Y,W=Math.trunc(W/$)*$,(W+=Y)<0?Y*K:W*K}var m8={x:1,y:0,axis:"x",distance:function(W,$,Y,K){return(Y?W.xo:W.x)-(K?$.xo:$.x)},interpolate:function(W,$,Y,K){var F,N,E,O,T,y,d;if(!K||K===this)return F=W.xo-$.xo,N=W.xo-Y.xo,T=$.x-$.xo,y=Y.x-Y.xo,(d=(E=Math.abs(F))+(O=Math.abs(N)))===0?void(W.x=W.xo+(T+y)/2):void(W.x=W.xo+(T*O+y*E)/d);F=K.distance(W,$,!0,!0),N=K.distance(W,Y,!0,!0),T=K.distance($,$,!1,!0),y=K.distance(Y,Y,!1,!0),(d=(E=Math.abs(F))+(O=Math.abs(N)))!==0?m8.setRelative(W,W,(T*O+y*E)/d,K,!0):m8.setRelative(W,W,(T+y)/2,K,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(W,$,Y,K,F){if(K&&K!==this){var N=F?$.xo:$.x,E=F?$.yo:$.y,O=N+Y*K.x,T=E+Y*K.y;W.x=O+(W.y-T)/K.normalSlope}else W.x=(F?$.xo:$.x)+Y},slope:0,touch:function(W){W.xTouched=!0},touched:function(W){return W.xTouched},untouch:function(W){W.xTouched=!1}},n8={x:0,y:1,axis:"y",distance:function(W,$,Y,K){return(Y?W.yo:W.y)-(K?$.yo:$.y)},interpolate:function(W,$,Y,K){var F,N,E,O,T,y,d;if(!K||K===this)return F=W.yo-$.yo,N=W.yo-Y.yo,T=$.y-$.yo,y=Y.y-Y.yo,(d=(E=Math.abs(F))+(O=Math.abs(N)))===0?void(W.y=W.yo+(T+y)/2):void(W.y=W.yo+(T*O+y*E)/d);F=K.distance(W,$,!0,!0),N=K.distance(W,Y,!0,!0),T=K.distance($,$,!1,!0),y=K.distance(Y,Y,!1,!0),(d=(E=Math.abs(F))+(O=Math.abs(N)))!==0?n8.setRelative(W,W,(T*O+y*E)/d,K,!0):n8.setRelative(W,W,(T+y)/2,K,!0)},normalSlope:0,setRelative:function(W,$,Y,K,F){if(K&&K!==this){var N=F?$.xo:$.x,E=F?$.yo:$.y,O=N+Y*K.x,T=E+Y*K.y;W.y=T+K.normalSlope*(W.x-O)}else W.y=(F?$.yo:$.y)+Y},slope:Number.POSITIVE_INFINITY,touch:function(W){W.yTouched=!0},touched:function(W){return W.yTouched},untouch:function(W){W.yTouched=!1}};function z6(W,$){this.x=W,this.y=$,this.axis=void 0,this.slope=$/W,this.normalSlope=-W/$,Object.freeze(this)}function E6(W,$){var Y=Math.sqrt(W*W+$*$);return $/=Y,(W/=Y)===1&&$===0?m8:W===0&&$===1?n8:new z6(W,$)}function i8(W,$,Y,K){this.x=this.xo=Math.round(64*W)/64,this.y=this.yo=Math.round(64*$)/64,this.lastPointOfContour=Y,this.onCurve=K,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Object.freeze(m8),Object.freeze(n8),z6.prototype.distance=function(W,$,Y,K){return this.x*m8.distance(W,$,Y,K)+this.y*n8.distance(W,$,Y,K)},z6.prototype.interpolate=function(W,$,Y,K){var F,N,E,O,T,y,d;E=K.distance(W,$,!0,!0),O=K.distance(W,Y,!0,!0),F=K.distance($,$,!1,!0),N=K.distance(Y,Y,!1,!0),(d=(T=Math.abs(E))+(y=Math.abs(O)))!==0?this.setRelative(W,W,(F*y+N*T)/d,K,!0):this.setRelative(W,W,(F+N)/2,K,!0)},z6.prototype.setRelative=function(W,$,Y,K,F){K=K||this;var N=F?$.xo:$.x,E=F?$.yo:$.y,O=N+Y*K.x,T=E+Y*K.y,y=K.normalSlope,d=this.slope,t=W.x,S=W.y;W.x=(d*t-y*O+T-S)/(d-y),W.y=d*(W.x-t)+S},z6.prototype.touch=function(W){W.xTouched=!0,W.yTouched=!0},i8.prototype.nextTouched=function(W){for(var $=this.nextPointOnContour;!W.touched($)&&$!==this;)$=$.nextPointOnContour;return $},i8.prototype.prevTouched=function(W){for(var $=this.prevPointOnContour;!W.touched($)&&$!==this;)$=$.prevPointOnContour;return $};var B6=Object.freeze(new i8(0,0)),_$={cvCutIn:1.0625,deltaBase:9,deltaShift:0.125,loop:1,minDis:1,autoFlip:!0};function $9(W,$){switch(this.env=W,this.stack=[],this.prog=$,W){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=m8,this.round=fZ}}function r6(W){for(var $=W.tZone=Array(W.gZone.length),Y=0;Y<$.length;Y++)$[Y]=new i8(0,0)}function yZ(W,$){var Y,K=W.prog,F=W.ip,N=1;do if((Y=K[++F])===88)N++;else if(Y===89)N--;else if(Y===64)F+=K[F+1]+1;else if(Y===65)F+=2*K[F+1]+1;else if(176<=Y&&Y<=183)F+=Y-176+1;else if(184<=Y&&Y<=191)F+=2*(Y-184+1);else if($&&N===1&&Y===27)break;while(0<N);W.ip=F}function vZ(W,$){Q.DEBUG&&console.log($.step,"SVTCA["+W.axis+"]"),$.fv=$.pv=$.dpv=W}function bZ(W,$){Q.DEBUG&&console.log($.step,"SPVTCA["+W.axis+"]"),$.pv=$.dpv=W}function hZ(W,$){Q.DEBUG&&console.log($.step,"SFVTCA["+W.axis+"]"),$.fv=W}function gZ(W,$){var Y,K,F=$.stack,N=F.pop(),E=F.pop(),O=$.z2[N],T=$.z1[E];Q.DEBUG&&console.log("SPVTL["+W+"]",N,E),K=W?(Y=O.y-T.y,T.x-O.x):(Y=T.x-O.x,T.y-O.y),$.pv=$.dpv=E6(Y,K)}function pZ(W,$){var Y,K,F=$.stack,N=F.pop(),E=F.pop(),O=$.z2[N],T=$.z1[E];Q.DEBUG&&console.log("SFVTL["+W+"]",N,E),K=W?(Y=O.y-T.y,T.x-O.x):(Y=T.x-O.x,T.y-O.y),$.fv=E6(Y,K)}function e5(W){Q.DEBUG&&console.log(W.step,"POP[]"),W.stack.pop()}function mZ(W,$){var Y=$.stack.pop(),K=$.z0[Y],F=$.fv,N=$.pv;Q.DEBUG&&console.log($.step,"MDAP["+W+"]",Y);var E=N.distance(K,B6);W&&(E=$.round(E)),F.setRelative(K,B6,E,N),F.touch(K),$.rp0=$.rp1=Y}function dZ(W,$){var Y,K,F,N=$.z2,E=N.length-2;Q.DEBUG&&console.log($.step,"IUP["+W.axis+"]");for(var O=0;O<E;O++)Y=N[O],W.touched(Y)||(K=Y.prevTouched(W))!==Y&&(K===(F=Y.nextTouched(W))&&W.setRelative(Y,Y,W.distance(K,K,!1,!0),W,!0),W.interpolate(Y,K,F,W))}function lZ(W,$){for(var Y=$.stack,K=W?$.rp1:$.rp2,F=(W?$.z0:$.z1)[K],N=$.fv,E=$.pv,O=$.loop,T=$.z2;O--;){var y=Y.pop(),d=T[y],t=E.distance(F,F,!1,!0);N.setRelative(d,d,t,E),N.touch(d),Q.DEBUG&&console.log($.step,(1<$.loop?"loop "+($.loop-O)+": ":"")+"SHP["+(W?"rp1":"rp2")+"]",y)}$.loop=1}function uZ(W,$){var Y=$.stack,K=W?$.rp1:$.rp2,F=(W?$.z0:$.z1)[K],N=$.fv,E=$.pv,O=Y.pop(),T=$.z2[$.contours[O]],y=T;Q.DEBUG&&console.log($.step,"SHC["+W+"]",O);for(var d=E.distance(F,F,!1,!0);y!==F&&N.setRelative(y,y,d,E),(y=y.nextPointOnContour)!==T;);}function cZ(W,$){var Y,K,F=$.stack,N=W?$.rp1:$.rp2,E=(W?$.z0:$.z1)[N],O=$.fv,T=$.pv,y=F.pop();switch(Q.DEBUG&&console.log($.step,"SHZ["+W+"]",y),y){case 0:Y=$.tZone;break;case 1:Y=$.gZone;break;default:throw Error("Invalid zone")}for(var d=T.distance(E,E,!1,!0),t=Y.length-2,S=0;S<t;S++)K=Y[S],O.setRelative(K,K,d,T)}function sZ(W,$){var Y=$.stack,K=Y.pop()/64,F=Y.pop(),N=$.z1[F],E=$.z0[$.rp0],O=$.fv,T=$.pv;O.setRelative(N,E,K,T),O.touch(N),Q.DEBUG&&console.log($.step,"MSIRP["+W+"]",K,F),$.rp1=$.rp0,$.rp2=F,W&&($.rp0=F)}function nZ(W,$){var Y=$.stack,K=Y.pop(),F=Y.pop(),N=$.z0[F],E=$.fv,O=$.pv,T=$.cvt[K];Q.DEBUG&&console.log($.step,"MIAP["+W+"]",K,"(",T,")",F);var y=O.distance(N,B6);W&&(Math.abs(y-T)<$.cvCutIn&&(y=T),y=$.round(y)),E.setRelative(N,B6,y,O),$.zp0===0&&(N.xo=N.x,N.yo=N.y),E.touch(N),$.rp0=$.rp1=F}function iZ(W,$){var Y=$.stack,K=Y.pop(),F=$.z2[K];Q.DEBUG&&console.log($.step,"GC["+W+"]",K),Y.push(64*$.dpv.distance(F,B6,W,!1))}function oZ(W,$){var Y=$.stack,K=Y.pop(),F=Y.pop(),N=$.z1[K],E=$.z0[F],O=$.dpv.distance(E,N,W,W);Q.DEBUG&&console.log($.step,"MD["+W+"]",K,F,"->",O),$.stack.push(Math.round(64*O))}function QQ(W,$){var Y=$.stack,K=Y.pop(),F=$.fv,N=$.pv,E=$.ppem,O=$.deltaBase+16*(W-1),T=$.deltaShift,y=$.z0;Q.DEBUG&&console.log($.step,"DELTAP["+W+"]",K,Y);for(var d=0;d<K;d++){var t=Y.pop(),S=Y.pop();if(O+((240&S)>>4)===E){var G0=(15&S)-8;0<=G0&&G0++,Q.DEBUG&&console.log($.step,"DELTAPFIX",t,"by",G0*T);var k0=y[t];F.setRelative(k0,k0,G0*T,N)}}}function t6(W,$){var Y=$.stack,K=Y.pop();Q.DEBUG&&console.log($.step,"ROUND[]"),Y.push(64*$.round(K/64))}function ZQ(W,$){var Y=$.stack,K=Y.pop(),F=$.ppem,N=$.deltaBase+16*(W-1),E=$.deltaShift;Q.DEBUG&&console.log($.step,"DELTAC["+W+"]",K,Y);for(var O=0;O<K;O++){var T=Y.pop(),y=Y.pop();if(N+((240&y)>>4)===F){var d=(15&y)-8;0<=d&&d++;var t=d*E;Q.DEBUG&&console.log($.step,"DELTACFIX",T,"by",t),$.cvt[T]+=t}}}function aZ(W,$){var Y,K,F=$.stack,N=F.pop(),E=F.pop(),O=$.z2[N],T=$.z1[E];Q.DEBUG&&console.log($.step,"SDPVTL["+W+"]",N,E),K=W?(Y=O.y-T.y,T.x-O.x):(Y=T.x-O.x,T.y-O.y),$.dpv=E6(Y,K)}function X9(W,$){var{stack:Y,prog:K,ip:F}=$;Q.DEBUG&&console.log($.step,"PUSHB["+W+"]");for(var N=0;N<W;N++)Y.push(K[++F]);$.ip=F}function Y9(W,$){var{ip:Y,prog:K,stack:F}=$;Q.DEBUG&&console.log($.ip,"PUSHW["+W+"]");for(var N=0;N<W;N++){var E=K[++Y]<<8|K[++Y];32768&E&&(E=-(1+(65535^E))),F.push(E)}$.ip=Y}function Q7(W,$,Y,K,F,N){var E,O,T,y,d=N.stack,t=W&&d.pop(),S=d.pop(),G0=N.rp0,k0=N.z0[G0],O0=N.z1[S],R0=N.minDis,J0=N.fv,y0=N.dpv;T=0<=(O=E=y0.distance(O0,k0,!0,!0))?1:-1,O=Math.abs(O),W&&(y=N.cvt[t],K&&Math.abs(O-y)<N.cvCutIn&&(O=y)),Y&&O<R0&&(O=R0),K&&(O=N.round(O)),J0.setRelative(O0,k0,T*O,y0),J0.touch(O0),Q.DEBUG&&console.log(N.step,(W?"MIRP[":"MDRP[")+($?"M":"m")+(Y?">":"_")+(K?"R":"_")+(F===0?"Gr":F===1?"Bl":F===2?"Wh":"")+"]",W?t+"("+N.cvt[t]+","+y+")":"",S,"(d =",E,"->",T*O,")"),N.rp1=N.rp0,N.rp2=S,$&&(N.rp0=S)}function v9(W){this.char=W,this.state={},this.activeState=null}function JQ(W,$,Y){this.contextName=Y,this.startIndex=W,this.endOffset=$}function z$(W,$,Y){this.contextName=W,this.openRange=null,this.ranges=[],this.checkStart=$,this.checkEnd=Y}function S8(W,$){this.context=W,this.index=$,this.length=W.length,this.current=W[$],this.backtrack=W.slice(0,$),this.lookahead=W.slice($+1)}function e6(W){this.eventId=W,this.subscribers=[]}function i7(W){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],function($){var Y=this,K=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];K.forEach(function(F){Object.defineProperty(Y.events,F,{value:new e6(F)})}),$&&K.forEach(function(F){var N=$[F];typeof N=="function"&&Y.events[F].subscribe(N)}),["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"].forEach(function(F){Y.events[F].subscribe(Y.updateContextsRanges)})}.call(this,W)}function H9(W){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(W)}function rZ(W){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(W)}function K9(W){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(W)}function Q5(W){return/[A-z]/.test(W)}function M8(W){this.font=W,this.features={}}function B9(W){this.id=W.id,this.tag=W.tag,this.substitution=W.substitution}function I6(W,$){if(!W)return-1;switch($.format){case 1:return $.glyphs.indexOf(W);case 2:for(var Y=$.ranges,K=0;K<Y.length;K++){var F=Y[K];if(W>=F.start&&W<=F.end){var N=W-F.start;return F.index+N}}break;default:return-1}return-1}function WQ(W,$){for(var Y=[],K=0;K<W.length;K++){var F=W[K],N=$.current,E=I6(N=Array.isArray(N)?N[0]:N,F);E!==-1&&Y.push(E)}return Y.length!==W.length?-1:Y}jZ.prototype.exec=function(W,$){if(typeof $!="number")throw Error("Point size is not a number!");if(!(2<this._errorState)){var Y=this.font,K=this._prepState;if(!K||K.ppem!==$){var F=this._fpgmState;if(!F){$9.prototype=_$,(F=this._fpgmState=new $9("fpgm",Y.tables.fpgm)).funcs=[],F.font=Y,Q.DEBUG&&(console.log("---EXEC FPGM---"),F.step=-1);try{E9(F)}catch(y){return console.log("Hinting error in FPGM:"+y),void(this._errorState=3)}}$9.prototype=F,(K=this._prepState=new $9("prep",Y.tables.prep)).ppem=$;var N=Y.tables.cvt;if(N)for(var E=K.cvt=Array(N.length),O=$/Y.unitsPerEm,T=0;T<N.length;T++)E[T]=N[T]*O;else K.cvt=[];Q.DEBUG&&(console.log("---EXEC PREP---"),K.step=-1);try{E9(K)}catch(y){this._errorState<2&&console.log("Hinting error in PREP:"+y),this._errorState=2}}if(!(1<this._errorState))try{return TZ(W,K)}catch(y){return this._errorState<1&&(console.log("Hinting error:"+y),console.log("Note: further hinting errors are silenced")),void(this._errorState=1)}}},TZ=function(W,$){var Y,K,F,N=$.ppem/$.font.unitsPerEm,E=N,O=W.components;if($9.prototype=$,O){var T=$.font;K=[],Y=[];for(var y=0;y<O.length;y++){var d=O[y],t=T.glyphs.get(d.glyphIndex);F=new $9("glyf",t.instructions),Q.DEBUG&&(console.log("---EXEC COMP "+y+"---"),F.step=-1),t5(t,F,N,E);for(var S=Math.round(d.dx*N),G0=Math.round(d.dy*E),k0=F.gZone,O0=F.contours,R0=0;R0<k0.length;R0++){var J0=k0[R0];J0.xTouched=J0.yTouched=!1,J0.xo=J0.x=J0.x+S,J0.yo=J0.y=J0.y+G0}var y0=K.length;K.push.apply(K,k0);for(var o0=0;o0<O0.length;o0++)Y.push(O0[o0]+y0)}W.instructions&&!F.inhibitGridFit&&((F=new $9("glyf",W.instructions)).gZone=F.z0=F.z1=F.z2=K,F.contours=Y,K.push(new i8(0,0),new i8(Math.round(W.advanceWidth*N),0)),Q.DEBUG&&(console.log("---EXEC COMPOSITE---"),F.step=-1),E9(F),K.length-=2)}else F=new $9("glyf",W.instructions),Q.DEBUG&&(console.log("---EXEC GLYPH---"),F.step=-1),t5(W,F,N,E),K=F.gZone;return K},t5=function(W,$,Y,K){for(var F,N,E,O=W.points||[],T=O.length,y=$.gZone=$.z0=$.z1=$.z2=[],d=$.contours=[],t=0;t<T;t++)F=O[t],y[t]=new i8(F.x*Y,F.y*K,F.lastPointOfContour,F.onCurve);for(var S=0;S<T;S++)F=y[S],N||(N=F,d.push(S)),F.lastPointOfContour?((F.nextPointOnContour=N).prevPointOnContour=F,N=void 0):(E=y[S+1],(F.nextPointOnContour=E).prevPointOnContour=F);if(!$.inhibitGridFit){if(Q.DEBUG){console.log("PROCESSING GLYPH",$.stack);for(var G0=0;G0<T;G0++)console.log(G0,y[G0].x,y[G0].y)}if(y.push(new i8(0,0),new i8(Math.round(W.advanceWidth*Y),0)),E9($),y.length-=2,Q.DEBUG){console.log("FINISHED GLYPH",$.stack);for(var k0=0;k0<T;k0++)console.log(k0,y[k0].x,y[k0].y)}}},E9=function(W){var $=W.prog;if($){var Y,K=$.length;for(W.ip=0;W.ip<K;W.ip++){if(Q.DEBUG&&W.step++,!(Y=AZ[$[W.ip]]))throw Error("unknown instruction: 0x"+Number($[W.ip]).toString(16));Y(W)}}},AZ=[vZ.bind(void 0,n8),vZ.bind(void 0,m8),bZ.bind(void 0,n8),bZ.bind(void 0,m8),hZ.bind(void 0,n8),hZ.bind(void 0,m8),gZ.bind(void 0,0),gZ.bind(void 0,1),pZ.bind(void 0,0),pZ.bind(void 0,1),function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"SPVFS[]",Y,K),W.pv=W.dpv=E6(K,Y)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"SPVFS[]",Y,K),W.fv=E6(K,Y)},function(W){var{stack:$,pv:Y}=W;Q.DEBUG&&console.log(W.step,"GPV[]"),$.push(16384*Y.x),$.push(16384*Y.y)},function(W){var{stack:$,fv:Y}=W;Q.DEBUG&&console.log(W.step,"GFV[]"),$.push(16384*Y.x),$.push(16384*Y.y)},function(W){W.fv=W.pv,Q.DEBUG&&console.log(W.step,"SFVTPV[]")},function(W){var $=W.stack,Y=$.pop(),K=$.pop(),F=$.pop(),N=$.pop(),E=$.pop(),O=W.z0,T=W.z1,y=O[Y],d=O[K],t=T[F],S=T[N],G0=W.z2[E];Q.DEBUG&&console.log("ISECT[], ",Y,K,F,N,E);var{x:k0,y:O0}=y,R0=d.x,J0=d.y,y0=t.x,o0=t.y,U7=S.x,M7=S.y,b7=(k0-R0)*(o0-M7)-(O0-J0)*(y0-U7),q7=k0*J0-O0*R0,Z7=y0*M7-o0*U7;G0.x=(q7*(y0-U7)-Z7*(k0-R0))/b7,G0.y=(q7*(o0-M7)-Z7*(O0-J0))/b7},function(W){W.rp0=W.stack.pop(),Q.DEBUG&&console.log(W.step,"SRP0[]",W.rp0)},function(W){W.rp1=W.stack.pop(),Q.DEBUG&&console.log(W.step,"SRP1[]",W.rp1)},function(W){W.rp2=W.stack.pop(),Q.DEBUG&&console.log(W.step,"SRP2[]",W.rp2)},function(W){var $=W.stack.pop();switch(Q.DEBUG&&console.log(W.step,"SZP0[]",$),W.zp0=$){case 0:W.tZone||r6(W),W.z0=W.tZone;break;case 1:W.z0=W.gZone;break;default:throw Error("Invalid zone pointer")}},function(W){var $=W.stack.pop();switch(Q.DEBUG&&console.log(W.step,"SZP1[]",$),W.zp1=$){case 0:W.tZone||r6(W),W.z1=W.tZone;break;case 1:W.z1=W.gZone;break;default:throw Error("Invalid zone pointer")}},function(W){var $=W.stack.pop();switch(Q.DEBUG&&console.log(W.step,"SZP2[]",$),W.zp2=$){case 0:W.tZone||r6(W),W.z2=W.tZone;break;case 1:W.z2=W.gZone;break;default:throw Error("Invalid zone pointer")}},function(W){var $=W.stack.pop();switch(Q.DEBUG&&console.log(W.step,"SZPS[]",$),W.zp0=W.zp1=W.zp2=$,$){case 0:W.tZone||r6(W),W.z0=W.z1=W.z2=W.tZone;break;case 1:W.z0=W.z1=W.z2=W.gZone;break;default:throw Error("Invalid zone pointer")}},function(W){W.loop=W.stack.pop(),Q.DEBUG&&console.log(W.step,"SLOOP[]",W.loop)},function(W){Q.DEBUG&&console.log(W.step,"RTG[]"),W.round=fZ},function(W){Q.DEBUG&&console.log(W.step,"RTHG[]"),W.round=R$},function(W){var $=W.stack.pop();Q.DEBUG&&console.log(W.step,"SMD[]",$),W.minDis=$/64},function(W){Q.DEBUG&&console.log(W.step,"ELSE[]"),yZ(W,!1)},function(W){var $=W.stack.pop();Q.DEBUG&&console.log(W.step,"JMPR[]",$),W.ip+=$-1},function(W){var $=W.stack.pop();Q.DEBUG&&console.log(W.step,"SCVTCI[]",$),W.cvCutIn=$/64},void 0,void 0,function(W){var $=W.stack;Q.DEBUG&&console.log(W.step,"DUP[]"),$.push($[$.length-1])},e5,function(W){Q.DEBUG&&console.log(W.step,"CLEAR[]"),W.stack.length=0},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"SWAP[]"),$.push(Y),$.push(K)},function(W){var $=W.stack;Q.DEBUG&&console.log(W.step,"DEPTH[]"),$.push($.length)},function(W){var $=W.stack,Y=$.pop();Q.DEBUG&&console.log(W.step,"CINDEX[]",Y),$.push($[$.length-Y])},function(W){var $=W.stack,Y=$.pop();Q.DEBUG&&console.log(W.step,"MINDEX[]",Y),$.push($.splice($.length-Y,1)[0])},void 0,void 0,void 0,function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"LOOPCALL[]",Y,K);var{ip:F,prog:N}=W;W.prog=W.funcs[Y];for(var E=0;E<K;E++)E9(W),Q.DEBUG&&console.log(++W.step,E+1<K?"next loopcall":"done loopcall",E);W.ip=F,W.prog=N},function(W){var $=W.stack.pop();Q.DEBUG&&console.log(W.step,"CALL[]",$);var{ip:Y,prog:K}=W;W.prog=W.funcs[$],E9(W),W.ip=Y,W.prog=K,Q.DEBUG&&console.log(++W.step,"returning from",$)},function(W){if(W.env!=="fpgm")throw Error("FDEF not allowed here");var{stack:$,prog:Y,ip:K}=W,F=$.pop(),N=K;for(Q.DEBUG&&console.log(W.step,"FDEF[]",F);Y[++K]!==45;);W.ip=K,W.funcs[F]=Y.slice(N+1,K)},void 0,mZ.bind(void 0,0),mZ.bind(void 0,1),dZ.bind(void 0,n8),dZ.bind(void 0,m8),lZ.bind(void 0,0),lZ.bind(void 0,1),uZ.bind(void 0,0),uZ.bind(void 0,1),cZ.bind(void 0,0),cZ.bind(void 0,1),function(W){for(var{stack:$,loop:Y,fv:K}=W,F=$.pop()/64,N=W.z2;Y--;){var E=$.pop(),O=N[E];Q.DEBUG&&console.log(W.step,(1<W.loop?"loop "+(W.loop-Y)+": ":"")+"SHPIX[]",E,F),K.setRelative(O,O,F),K.touch(O)}W.loop=1},function(W){for(var{stack:$,rp1:Y,rp2:K,loop:F}=W,N=W.z0[Y],E=W.z1[K],O=W.fv,T=W.dpv,y=W.z2;F--;){var d=$.pop(),t=y[d];Q.DEBUG&&console.log(W.step,(1<W.loop?"loop "+(W.loop-F)+": ":"")+"IP[]",d,Y,"<->",K),O.interpolate(t,N,E,T),O.touch(t)}W.loop=1},sZ.bind(void 0,0),sZ.bind(void 0,1),function(W){for(var{stack:$,rp0:Y}=W,K=W.z0[Y],F=W.loop,N=W.fv,E=W.pv,O=W.z1;F--;){var T=$.pop(),y=O[T];Q.DEBUG&&console.log(W.step,(1<W.loop?"loop "+(W.loop-F)+": ":"")+"ALIGNRP[]",T),N.setRelative(y,K,0,E),N.touch(y)}W.loop=1},function(W){Q.DEBUG&&console.log(W.step,"RTDG[]"),W.round=N$},nZ.bind(void 0,0),nZ.bind(void 0,1),function(W){var{prog:$,ip:Y,stack:K}=W,F=$[++Y];Q.DEBUG&&console.log(W.step,"NPUSHB[]",F);for(var N=0;N<F;N++)K.push($[++Y]);W.ip=Y},function(W){var{ip:$,prog:Y,stack:K}=W,F=Y[++$];Q.DEBUG&&console.log(W.step,"NPUSHW[]",F);for(var N=0;N<F;N++){var E=Y[++$]<<8|Y[++$];32768&E&&(E=-(1+(65535^E))),K.push(E)}W.ip=$},function(W){var{stack:$,store:Y}=W;Y=Y||(W.store=[]);var K=$.pop(),F=$.pop();Q.DEBUG&&console.log(W.step,"WS",K,F),Y[F]=K},function(W){var{stack:$,store:Y}=W,K=$.pop();Q.DEBUG&&console.log(W.step,"RS",K);var F=Y&&Y[K]||0;$.push(F)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"WCVTP",Y,K),W.cvt[K]=Y/64},function(W){var $=W.stack,Y=$.pop();Q.DEBUG&&console.log(W.step,"RCVT",Y),$.push(64*W.cvt[Y])},iZ.bind(void 0,0),iZ.bind(void 0,1),void 0,oZ.bind(void 0,0),oZ.bind(void 0,1),function(W){Q.DEBUG&&console.log(W.step,"MPPEM[]"),W.stack.push(W.ppem)},void 0,function(W){Q.DEBUG&&console.log(W.step,"FLIPON[]"),W.autoFlip=!0},void 0,void 0,function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"LT[]",Y,K),$.push(K<Y?1:0)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"LTEQ[]",Y,K),$.push(K<=Y?1:0)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"GT[]",Y,K),$.push(Y<K?1:0)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"GTEQ[]",Y,K),$.push(Y<=K?1:0)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"EQ[]",Y,K),$.push(Y===K?1:0)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"NEQ[]",Y,K),$.push(Y!==K?1:0)},function(W){var $=W.stack,Y=$.pop();Q.DEBUG&&console.log(W.step,"ODD[]",Y),$.push(Math.trunc(Y)%2?1:0)},function(W){var $=W.stack,Y=$.pop();Q.DEBUG&&console.log(W.step,"EVEN[]",Y),$.push(Math.trunc(Y)%2?0:1)},function(W){var $=W.stack.pop();Q.DEBUG&&console.log(W.step,"IF[]",$),$||(yZ(W,!0),Q.DEBUG&&console.log(W.step,"EIF[]"))},function(W){Q.DEBUG&&console.log(W.step,"EIF[]")},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"AND[]",Y,K),$.push(Y&&K?1:0)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"OR[]",Y,K),$.push(Y||K?1:0)},function(W){var $=W.stack,Y=$.pop();Q.DEBUG&&console.log(W.step,"NOT[]",Y),$.push(Y?0:1)},QQ.bind(void 0,1),function(W){var $=W.stack.pop();Q.DEBUG&&console.log(W.step,"SDB[]",$),W.deltaBase=$},function(W){var $=W.stack.pop();Q.DEBUG&&console.log(W.step,"SDS[]",$),W.deltaShift=Math.pow(0.5,$)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"ADD[]",Y,K),$.push(K+Y)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"SUB[]",Y,K),$.push(K-Y)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"DIV[]",Y,K),$.push(64*K/Y)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"MUL[]",Y,K),$.push(K*Y/64)},function(W){var $=W.stack,Y=$.pop();Q.DEBUG&&console.log(W.step,"ABS[]",Y),$.push(Math.abs(Y))},function(W){var $=W.stack,Y=$.pop();Q.DEBUG&&console.log(W.step,"NEG[]",Y),$.push(-Y)},function(W){var $=W.stack,Y=$.pop();Q.DEBUG&&console.log(W.step,"FLOOR[]",Y),$.push(64*Math.floor(Y/64))},function(W){var $=W.stack,Y=$.pop();Q.DEBUG&&console.log(W.step,"CEILING[]",Y),$.push(64*Math.ceil(Y/64))},t6.bind(void 0,0),t6.bind(void 0,1),t6.bind(void 0,2),t6.bind(void 0,3),void 0,void 0,void 0,void 0,function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"WCVTF[]",Y,K),W.cvt[K]=Y*W.ppem/W.font.unitsPerEm},QQ.bind(void 0,2),QQ.bind(void 0,3),ZQ.bind(void 0,1),ZQ.bind(void 0,2),ZQ.bind(void 0,3),function(W){var $,Y=W.stack.pop();switch(Q.DEBUG&&console.log(W.step,"SROUND[]",Y),W.round=xZ,192&Y){case 0:$=0.5;break;case 64:$=1;break;case 128:$=2;break;default:throw Error("invalid SROUND value")}switch(W.srPeriod=$,48&Y){case 0:W.srPhase=0;break;case 16:W.srPhase=0.25*$;break;case 32:W.srPhase=0.5*$;break;case 48:W.srPhase=0.75*$;break;default:throw Error("invalid SROUND value")}Y&=15,W.srThreshold=Y===0?0:(Y/8-0.5)*$},function(W){var $,Y=W.stack.pop();switch(Q.DEBUG&&console.log(W.step,"S45ROUND[]",Y),W.round=xZ,192&Y){case 0:$=Math.sqrt(2)/2;break;case 64:$=Math.sqrt(2);break;case 128:$=2*Math.sqrt(2);break;default:throw Error("invalid S45ROUND value")}switch(W.srPeriod=$,48&Y){case 0:W.srPhase=0;break;case 16:W.srPhase=0.25*$;break;case 32:W.srPhase=0.5*$;break;case 48:W.srPhase=0.75*$;break;default:throw Error("invalid S45ROUND value")}Y&=15,W.srThreshold=Y===0?0:(Y/8-0.5)*$},void 0,void 0,function(W){Q.DEBUG&&console.log(W.step,"ROFF[]"),W.round=G$},void 0,function(W){Q.DEBUG&&console.log(W.step,"RUTG[]"),W.round=U$},function(W){Q.DEBUG&&console.log(W.step,"RDTG[]"),W.round=D$},e5,e5,void 0,void 0,void 0,void 0,void 0,function(W){var $=W.stack.pop();Q.DEBUG&&console.log(W.step,"SCANCTRL[]",$)},aZ.bind(void 0,0),aZ.bind(void 0,1),function(W){var $=W.stack,Y=$.pop(),K=0;Q.DEBUG&&console.log(W.step,"GETINFO[]",Y),1&Y&&(K=35),32&Y&&(K|=4096),$.push(K)},void 0,function(W){var $=W.stack,Y=$.pop(),K=$.pop(),F=$.pop();Q.DEBUG&&console.log(W.step,"ROLL[]"),$.push(K),$.push(Y),$.push(F)},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"MAX[]",Y,K),$.push(Math.max(K,Y))},function(W){var $=W.stack,Y=$.pop(),K=$.pop();Q.DEBUG&&console.log(W.step,"MIN[]",Y,K),$.push(Math.min(K,Y))},function(W){var $=W.stack.pop();Q.DEBUG&&console.log(W.step,"SCANTYPE[]",$)},function(W){var $=W.stack.pop(),Y=W.stack.pop();switch(Q.DEBUG&&console.log(W.step,"INSTCTRL[]",$,Y),$){case 1:return void(W.inhibitGridFit=!!Y);case 2:return void(W.ignoreCvt=!!Y);default:throw Error("invalid INSTCTRL[] selector")}},void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,X9.bind(void 0,1),X9.bind(void 0,2),X9.bind(void 0,3),X9.bind(void 0,4),X9.bind(void 0,5),X9.bind(void 0,6),X9.bind(void 0,7),X9.bind(void 0,8),Y9.bind(void 0,1),Y9.bind(void 0,2),Y9.bind(void 0,3),Y9.bind(void 0,4),Y9.bind(void 0,5),Y9.bind(void 0,6),Y9.bind(void 0,7),Y9.bind(void 0,8),Q7.bind(void 0,0,0,0,0,0),Q7.bind(void 0,0,0,0,0,1),Q7.bind(void 0,0,0,0,0,2),Q7.bind(void 0,0,0,0,0,3),Q7.bind(void 0,0,0,0,1,0),Q7.bind(void 0,0,0,0,1,1),Q7.bind(void 0,0,0,0,1,2),Q7.bind(void 0,0,0,0,1,3),Q7.bind(void 0,0,0,1,0,0),Q7.bind(void 0,0,0,1,0,1),Q7.bind(void 0,0,0,1,0,2),Q7.bind(void 0,0,0,1,0,3),Q7.bind(void 0,0,0,1,1,0),Q7.bind(void 0,0,0,1,1,1),Q7.bind(void 0,0,0,1,1,2),Q7.bind(void 0,0,0,1,1,3),Q7.bind(void 0,0,1,0,0,0),Q7.bind(void 0,0,1,0,0,1),Q7.bind(void 0,0,1,0,0,2),Q7.bind(void 0,0,1,0,0,3),Q7.bind(void 0,0,1,0,1,0),Q7.bind(void 0,0,1,0,1,1),Q7.bind(void 0,0,1,0,1,2),Q7.bind(void 0,0,1,0,1,3),Q7.bind(void 0,0,1,1,0,0),Q7.bind(void 0,0,1,1,0,1),Q7.bind(void 0,0,1,1,0,2),Q7.bind(void 0,0,1,1,0,3),Q7.bind(void 0,0,1,1,1,0),Q7.bind(void 0,0,1,1,1,1),Q7.bind(void 0,0,1,1,1,2),Q7.bind(void 0,0,1,1,1,3),Q7.bind(void 0,1,0,0,0,0),Q7.bind(void 0,1,0,0,0,1),Q7.bind(void 0,1,0,0,0,2),Q7.bind(void 0,1,0,0,0,3),Q7.bind(void 0,1,0,0,1,0),Q7.bind(void 0,1,0,0,1,1),Q7.bind(void 0,1,0,0,1,2),Q7.bind(void 0,1,0,0,1,3),Q7.bind(void 0,1,0,1,0,0),Q7.bind(void 0,1,0,1,0,1),Q7.bind(void 0,1,0,1,0,2),Q7.bind(void 0,1,0,1,0,3),Q7.bind(void 0,1,0,1,1,0),Q7.bind(void 0,1,0,1,1,1),Q7.bind(void 0,1,0,1,1,2),Q7.bind(void 0,1,0,1,1,3),Q7.bind(void 0,1,1,0,0,0),Q7.bind(void 0,1,1,0,0,1),Q7.bind(void 0,1,1,0,0,2),Q7.bind(void 0,1,1,0,0,3),Q7.bind(void 0,1,1,0,1,0),Q7.bind(void 0,1,1,0,1,1),Q7.bind(void 0,1,1,0,1,2),Q7.bind(void 0,1,1,0,1,3),Q7.bind(void 0,1,1,1,0,0),Q7.bind(void 0,1,1,1,0,1),Q7.bind(void 0,1,1,1,0,2),Q7.bind(void 0,1,1,1,0,3),Q7.bind(void 0,1,1,1,1,0),Q7.bind(void 0,1,1,1,1,1),Q7.bind(void 0,1,1,1,1,2),Q7.bind(void 0,1,1,1,1,3)],v9.prototype.setState=function(W,$){return this.state[W]=$,this.activeState={key:W,value:this.state[W]},this.activeState},v9.prototype.getState=function(W){return this.state[W]||null},i7.prototype.inboundIndex=function(W){return 0<=W&&W<this.tokens.length},i7.prototype.composeRUD=function(W){function $(F){return typeof F=="object"&&F.hasOwnProperty("FAIL")}var Y=this,K=W.map(function(F){return Y[F[0]].apply(Y,F.slice(1).concat(!0))});if(K.every($))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:K.filter($)};this.dispatch("composeRUD",[K.filter(function(F){return!$(F)})])},i7.prototype.replaceRange=function(W,$,Y,K){$=$!==null?$:this.tokens.length;var F=Y.every(function(E){return E instanceof v9});if(!isNaN(W)&&this.inboundIndex(W)&&F){var N=this.tokens.splice.apply(this.tokens,[W,$].concat(Y));return K||this.dispatch("replaceToken",[W,$,Y]),[N,Y]}return{FAIL:"replaceRange: invalid tokens or startIndex."}},i7.prototype.replaceToken=function(W,$,Y){if(!isNaN(W)&&this.inboundIndex(W)&&$ instanceof v9){var K=this.tokens.splice(W,1,$);return Y||this.dispatch("replaceToken",[W,$]),[K[0],$]}return{FAIL:"replaceToken: invalid token or index."}},i7.prototype.removeRange=function(W,$,Y){$=isNaN($)?this.tokens.length:$;var K=this.tokens.splice(W,$);return Y||this.dispatch("removeRange",[K,W,$]),K},i7.prototype.removeToken=function(W,$){if(isNaN(W)||!this.inboundIndex(W))return{FAIL:"removeToken: invalid token index."};var Y=this.tokens.splice(W,1);return $||this.dispatch("removeToken",[Y,W]),Y},i7.prototype.insertToken=function(W,$,Y){return W.every(function(K){return K instanceof v9})?(this.tokens.splice.apply(this.tokens,[$,0].concat(W)),Y||this.dispatch("insertToken",[W,$]),W):{FAIL:"insertToken: invalid token(s)."}},i7.prototype.registerModifier=function(W,$,Y){this.events.newToken.subscribe(function(K,F){var N=[K,F],E=[K,F];if($===null||$.apply(this,N)===!0){var O=Y.apply(this,E);K.setState(W,O)}}),this.registeredModifiers.push(W)},e6.prototype.subscribe=function(W){return typeof W=="function"?this.subscribers.push(W)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}},e6.prototype.unsubscribe=function(W){this.subscribers.splice(W,1)},S8.prototype.setCurrentIndex=function(W){this.index=W,this.current=this.context[W],this.backtrack=this.context.slice(0,W),this.lookahead=this.context.slice(W+1)},S8.prototype.get=function(W){switch(!0){case W===0:return this.current;case(W<0&&Math.abs(W)<=this.backtrack.length):return this.backtrack.slice(W)[0];case(0<W&&W<=this.lookahead.length):return this.lookahead[W-1];default:return null}},i7.prototype.rangeToText=function(W){if(W instanceof JQ)return this.getRangeTokens(W).map(function($){return $.char}).join("")},i7.prototype.getText=function(){return this.tokens.map(function(W){return W.char}).join("")},i7.prototype.getContext=function(W){var $=this.registeredContexts[W];return $||null},i7.prototype.on=function(W,$){var Y=this.events[W];return Y?Y.subscribe($):null},i7.prototype.dispatch=function(W,$){var Y=this,K=this.events[W];K instanceof e6&&K.subscribers.forEach(function(F){F.apply(Y,$||[])})},i7.prototype.registerContextChecker=function(W,$,Y){if(this.getContext(W))return{FAIL:"context name '"+W+"' is already registered."};if(typeof $!="function")return{FAIL:"missing context start check."};if(typeof Y!="function")return{FAIL:"missing context end check."};var K=new z$(W,$,Y);return this.registeredContexts[W]=K,this.contextCheckers.push(K),K},i7.prototype.getRangeTokens=function(W){var $=W.startIndex+W.endOffset;return[].concat(this.tokens.slice(W.startIndex,$))},i7.prototype.getContextRanges=function(W){var $=this.getContext(W);return $?$.ranges:{FAIL:"context checker '"+W+"' is not registered."}},i7.prototype.resetContextsRanges=function(){var W=this.registeredContexts;for(var $ in W)if(W.hasOwnProperty($))W[$].ranges=[]},i7.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var W=this.tokens.map(function(K){return K.char}),$=0;$<W.length;$++){var Y=new S8(W,$);this.runContextCheck(Y)}this.dispatch("updateContextsRanges",[this.registeredContexts])},i7.prototype.setEndOffset=function(W,$){var Y=new JQ(this.getContext($).openRange.startIndex,W,$),K=this.getContext($).ranges;return Y.rangeId=$+"."+K.length,K.push(Y),this.getContext($).openRange=null,Y},i7.prototype.runContextCheck=function(W){var $=this,Y=W.index;this.contextCheckers.forEach(function(K){var F=K.contextName,N=$.getContext(F).openRange;if(!N&&K.checkStart(W)&&(N=new JQ(Y,null,F),$.getContext(F).openRange=N,$.dispatch("contextStart",[F,Y])),N&&K.checkEnd(W)){var E=Y-N.startIndex+1,O=$.setEndOffset(E,F);$.dispatch("contextEnd",[F,O])}})},i7.prototype.tokenize=function(W){this.tokens=[],this.resetContextsRanges();var $=Array.from(W);this.dispatch("start");for(var Y=0;Y<$.length;Y++){var K=$[Y],F=new S8($,Y);this.dispatch("next",[F]),this.runContextCheck(F);var N=new v9(K);this.tokens.push(N),this.dispatch("newToken",[N,F])}return this.dispatch("end",[this.tokens]),this.tokens},M8.prototype.getDefaultScriptFeaturesIndexes=function(){for(var W=this.font.tables.gsub.scripts,$=0;$<W.length;$++){var Y=W[$];if(Y.tag==="DFLT")return Y.script.defaultLangSys.featureIndexes}return[]},M8.prototype.getScriptFeaturesIndexes=function(W){if(!this.font.tables.gsub)return[];if(!W)return this.getDefaultScriptFeaturesIndexes();for(var $=this.font.tables.gsub.scripts,Y=0;Y<$.length;Y++){var K=$[Y];if(K.tag===W&&K.script.defaultLangSys)return K.script.defaultLangSys.featureIndexes;var F=K.langSysRecords;if(F)for(var N=0;N<F.length;N++){var E=F[N];if(E.tag===W)return E.langSys.featureIndexes}}return this.getDefaultScriptFeaturesIndexes()},M8.prototype.mapTagsToFeatures=function(W,$){for(var Y={},K=0;K<W.length;K++){var F=W[K].tag,N=W[K].feature;Y[F]=N}this.features[$].tags=Y},M8.prototype.getScriptFeatures=function(W){var $=this.features[W];if(this.features.hasOwnProperty(W))return $;var Y=this.getScriptFeaturesIndexes(W);if(!Y)return null;var K=this.font.tables.gsub;return $=Y.map(function(F){return K.features[F]}),this.features[W]=$,this.mapTagsToFeatures($,W),$},M8.prototype.getSubstitutionType=function(W,$){return W.lookupType.toString()+$.substFormat.toString()},M8.prototype.getLookupMethod=function(W,$){var Y=this;switch(this.getSubstitutionType(W,$)){case"11":return function(K){return function(F,N){return I6(F,N.coverage)===-1?null:F+N.deltaGlyphId}.apply(Y,[K,$])};case"12":return function(K){return function(F,N){var E=I6(F,N.coverage);return E===-1?null:N.substitute[E]}.apply(Y,[K,$])};case"63":return function(K){return function(F,N){var E=N.inputCoverage.length+N.lookaheadCoverage.length+N.backtrackCoverage.length;if(F.context.length<E)return[];var O=WQ(N.inputCoverage,F);if(O===-1)return[];var T=N.inputCoverage.length-1;if(F.lookahead.length<N.lookaheadCoverage.length)return[];for(var y=F.lookahead.slice(T);y.length&&K9(y[0].char);)y.shift();var d=new S8(y,0),t=WQ(N.lookaheadCoverage,d),S=[].concat(F.backtrack);for(S.reverse();S.length&&K9(S[0].char);)S.shift();if(S.length<N.backtrackCoverage.length)return[];var G0=new S8(S,0),k0=WQ(N.backtrackCoverage,G0),O0=[];if(O.length===N.inputCoverage.length&&t.length===N.lookaheadCoverage.length&&k0.length===N.backtrackCoverage.length)for(var R0=0;R0<N.lookupRecords.length;R0++)for(var J0=N.lookupRecords[R0].lookupListIndex,y0=this.getLookupByIndex(J0),o0=0;o0<y0.subtables.length;o0++){var U7=y0.subtables[o0],M7=this.getLookupMethod(y0,U7);if(this.getSubstitutionType(y0,U7)==="12")for(var b7=0;b7<O.length;b7++){var q7=M7(F.get(b7));q7&&O0.push(q7)}}return O0}.apply(Y,[K,$])};case"41":return function(K){return function(F,N){var E,O=I6(F.current,N.coverage);if(O===-1)return null;for(var T=N.ligatureSets[O],y=0;y<T.length;y++){E=T[y];for(var d=0;d<E.components.length;d++){if(F.lookahead[d]!==E.components[d])break;if(d===E.components.length-1)return E}}return null}.apply(Y,[K,$])};case"21":return function(K){return function(F,N){var E=I6(F,N.coverage);return E===-1?null:N.sequences[E]}.apply(Y,[K,$])};default:throw Error("lookupType: "+W.lookupType+" - substFormat: "+$.substFormat+" is not yet supported")}},M8.prototype.lookupFeature=function(W){var $=W.contextParams,Y=$.index,K=this.getFeature({tag:W.tag,script:W.script});if(!K)return Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+W.tag+"' for script '"+W.script+"'.");for(var F=this.getFeatureLookups(K),N=[].concat($.context),E=0;E<F.length;E++)for(var O=F[E],T=this.getLookupSubtables(O),y=0;y<T.length;y++){var d=T[y],t=this.getSubstitutionType(O,d),S=this.getLookupMethod(O,d),G0=void 0;switch(t){case"11":(G0=S($.current))&&N.splice(Y,1,new B9({id:11,tag:W.tag,substitution:G0}));break;case"12":(G0=S($.current))&&N.splice(Y,1,new B9({id:12,tag:W.tag,substitution:G0}));break;case"63":G0=S($),Array.isArray(G0)&&G0.length&&N.splice(Y,1,new B9({id:63,tag:W.tag,substitution:G0}));break;case"41":(G0=S($))&&N.splice(Y,1,new B9({id:41,tag:W.tag,substitution:G0}));break;case"21":(G0=S($.current))&&N.splice(Y,1,new B9({id:21,tag:W.tag,substitution:G0}))}$=new S8(N,Y),Array.isArray(G0)&&!G0.length||(G0=null)}return N.length?N:null},M8.prototype.supports=function(W){if(!W.script)return!1;this.getScriptFeatures(W.script);var $=this.features.hasOwnProperty(W.script);if(!W.tag)return $;var Y=this.features[W.script].some(function(K){return K.tag===W.tag});return $&&Y},M8.prototype.getLookupSubtables=function(W){return W.subtables||null},M8.prototype.getLookupByIndex=function(W){return this.font.tables.gsub.lookups[W]||null},M8.prototype.getFeatureLookups=function(W){return W.lookupListIndexes.map(this.getLookupByIndex.bind(this))},M8.prototype.getFeature=function(W){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(W.script)||this.getScriptFeatures(W.script);var $=this.features[W.script];return $?$.tags[W.tag]?this.features[W.script].tags[W.tag]:null:{FAIL:"No feature for script "+W.script}};var E$={startCheck:function(W){var $=W.current,Y=W.get(-1);return Y===null&&H9($)||!H9(Y)&&H9($)},endCheck:function(W){var $=W.get(1);return $===null||!H9($)}},B$={startCheck:function(W){var $=W.current,Y=W.get(-1);return(H9($)||K9($))&&!H9(Y)},endCheck:function(W){var $=W.get(1);switch(!0){case $===null:return!0;case(!H9($)&&!K9($)):var Y=/\s/.test($);if(!Y)return!0;if(Y){if(!W.lookahead.some(function(K){return H9(K)||K9(K)}))return!0}break;default:return!1}}},tZ={11:function(W,$,Y){$[Y].setState(W.tag,W.substitution)},12:function(W,$,Y){$[Y].setState(W.tag,W.substitution)},63:function(W,$,Y){W.substitution.forEach(function(K,F){$[Y+F].setState(W.tag,K)})},41:function(W,$,Y){var K=$[Y];K.setState(W.tag,W.substitution.ligGlyph);for(var F=W.substitution.components.length,N=0;N<F;N++)(K=$[Y+N+1]).setState("deleted",!0)}};function $Q(W,$,Y){W instanceof B9&&tZ[W.id]&&tZ[W.id](W,$,Y)}function I$(W){var $=this,Y=this.featuresTags.arab,K=this.tokenizer.getRangeTokens(W);if(K.length!==1){var F=new S8(K.map(function(E){return E.getState("glyphIndex")}),0),N=new S8(K.map(function(E){return E.char}),0);K.forEach(function(E,O){if(!K9(E.char)){F.setCurrentIndex(O),N.setCurrentIndex(O);var T,y=0;switch(!function(t){for(var S=[].concat(t.backtrack),G0=S.length-1;0<=G0;G0--){var k0=S[G0],O0=rZ(k0),R0=K9(k0);if(!O0&&!R0)return 1;if(O0)return}}(N)||(y|=1),function(t){if(!rZ(t.current)){for(var S=0;S<t.lookahead.length;S++)if(!K9(t.lookahead[S]))return 1}}(N)&&(y|=2),y){case 1:T="fina";break;case 2:T="init";break;case 3:T="medi"}if(Y.indexOf(T)!==-1){var d=$.query.lookupFeature({tag:T,script:"arab",contextParams:F});if(d instanceof Error)return console.info(d.message);d.forEach(function(t,S){t instanceof B9&&($Q(t,K,S),F.context[S]=t.substitution)})}}})}}function eZ(W,$){return new S8(W.map(function(Y){return Y.activeState.value}),$||0)}var L$={startCheck:function(W){var $=W.current,Y=W.get(-1);return Y===null&&Q5($)||!Q5(Y)&&Q5($)},endCheck:function(W){var $=W.get(1);return $===null||!Q5($)}};function QJ(W,$){return new S8(W.map(function(Y){return Y.activeState.value}),$||0)}function j8(W){this.baseDir=W||"ltr",this.tokenizer=new i7,this.featuresTags={}}function XQ(W){var $=this.contextChecks[W+"Check"];return this.tokenizer.registerContextChecker(W,$.startCheck,$.endCheck)}function YQ(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw Error("glyphIndex modifier is required to apply arabic presentation features.")}function M$(){var W=this;this.featuresTags.hasOwnProperty("arab")&&this.featuresTags.arab.indexOf("rlig")!==-1&&(YQ.call(this),this.tokenizer.getContextRanges("arabicWord").forEach(function($){(function(Y){var K=this,F=this.tokenizer.getRangeTokens(Y),N=eZ(F);N.context.forEach(function(E,O){N.setCurrentIndex(O);var T=K.query.lookupFeature({tag:"rlig",script:"arab",contextParams:N});T.length&&(T.forEach(function(y){return $Q(y,F,O)}),N=eZ(F))})}).call(W,$)}))}function C$(){var W=this;this.featuresTags.hasOwnProperty("latn")&&this.featuresTags.latn.indexOf("liga")!==-1&&(YQ.call(this),this.tokenizer.getContextRanges("latinWord").forEach(function($){(function(Y){var K=this,F=this.tokenizer.getRangeTokens(Y),N=QJ(F);N.context.forEach(function(E,O){N.setCurrentIndex(O);var T=K.query.lookupFeature({tag:"liga",script:"latn",contextParams:N});T.length&&(T.forEach(function(y){return $Q(y,F,O)}),N=QJ(F))})}).call(W,$)}))}function f7(W){(W=W||{}).tables=W.tables||{},W.empty||(_6(W.familyName,"When creating a new Font object, familyName is required."),_6(W.styleName,"When creating a new Font object, styleName is required."),_6(W.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),_6(W.ascender,"When creating a new Font object, ascender is required."),_6(W.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:W.familyName||" "},fontSubfamily:{en:W.styleName||" "},fullName:{en:W.fullName||W.familyName+" "+W.styleName},postScriptName:{en:W.postScriptName||(W.familyName+W.styleName).replace(/\s/g,"")},designer:{en:W.designer||" "},designerURL:{en:W.designerURL||" "},manufacturer:{en:W.manufacturer||" "},manufacturerURL:{en:W.manufacturerURL||" "},license:{en:W.license||" "},licenseURL:{en:W.licenseURL||" "},version:{en:W.version||"Version 0.1"},description:{en:W.description||" "},copyright:{en:W.copyright||" "},trademark:{en:W.trademark||" "}},this.unitsPerEm=W.unitsPerEm||1000,this.ascender=W.ascender,this.descender=W.descender,this.createdTimestamp=W.createdTimestamp,this.tables=Object.assign(W.tables,{os2:Object.assign({usWeightClass:W.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:W.widthClass||this.usWidthClasses.MEDIUM,fsSelection:W.fsSelection||this.fsSelectionValues.REGULAR},W.tables.os2)})),this.supported=!0,this.glyphs=new _0.GlyphSet(this,W.glyphs||[]),this.encoding=new u(this),this.position=new a6(this),this.substitution=new O8(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){return this._hinting?this._hinting:this.outlinesFormat==="truetype"?this._hinting=new jZ(this):void 0}})}function ZJ(W,$){var Y=JSON.stringify(W),K=256;for(var F in $){var N=parseInt(F);if(N&&!(N<256)){if(JSON.stringify($[F])===Y)return N;K<=N&&(K=N+1)}}return $[K]=W,K}function k$(W,$,Y,K){for(var F=[{name:"nameID_"+W,type:"USHORT",value:ZJ($.name,K)},{name:"flags_"+W,type:"USHORT",value:0}],N=0;N<Y.length;++N){var E=Y[N].tag;F.push({name:"axis_"+W+" "+E,type:"FIXED",value:$.coordinates[E]<<16})}return F}function O$(W,$,Y,K){var F={},N=new i.Parser(W,$);F.name=K[N.parseUShort()]||{},N.skip("uShort",1),F.coordinates={};for(var E=0;E<Y.length;++E)F.coordinates[Y[E].tag]=N.parseFixed();return F}j8.prototype.setText=function(W){this.text=W},j8.prototype.contextChecks={latinWordCheck:L$,arabicWordCheck:E$,arabicSentenceCheck:B$},j8.prototype.registerFeatures=function(W,$){var Y=this,K=$.filter(function(F){return Y.query.supports({script:W,tag:F})});this.featuresTags.hasOwnProperty(W)?this.featuresTags[W]=this.featuresTags[W].concat(K):this.featuresTags[W]=K},j8.prototype.applyFeatures=function(W,$){if(!W)throw Error("No valid font was provided to apply features");this.query||(this.query=new M8(W));for(var Y=0;Y<$.length;Y++){var K=$[Y];this.query.supports({script:K.script})&&this.registerFeatures(K.script,K.tags)}},j8.prototype.registerModifier=function(W,$,Y){this.tokenizer.registerModifier(W,$,Y)},j8.prototype.checkContextReady=function(W){return!!this.tokenizer.getContext(W)},j8.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(function(){var W=this;this.featuresTags.hasOwnProperty("arab")&&(YQ.call(this),this.tokenizer.getContextRanges("arabicWord").forEach(function($){I$.call(W,$)}))}.call(this),M$.call(this)),this.checkContextReady("latinWord")&&C$.call(this),this.checkContextReady("arabicSentence")&&function(){var W=this;this.tokenizer.getContextRanges("arabicSentence").forEach(function($){var Y=W.tokenizer.getRangeTokens($);W.tokenizer.replaceRange($.startIndex,$.endOffset,Y.reverse())})}.call(this)},j8.prototype.processText=function(W){this.text&&this.text===W||(this.setText(W),function(){return XQ.call(this,"latinWord"),XQ.call(this,"arabicWord"),XQ.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}.call(this),this.applyFeaturesToContexts())},j8.prototype.getBidiText=function(W){return this.processText(W),this.tokenizer.getText()},j8.prototype.getTextGlyphs=function(W){this.processText(W);for(var $=[],Y=0;Y<this.tokenizer.tokens.length;Y++){var K=this.tokenizer.tokens[Y];if(!K.state.deleted){var F=K.activeState.value;$.push(Array.isArray(F)?F[0]:F)}}return $},f7.prototype.hasChar=function(W){return this.encoding.charToGlyphIndex(W)!==null},f7.prototype.charToGlyphIndex=function(W){return this.encoding.charToGlyphIndex(W)},f7.prototype.charToGlyph=function(W){var $=this.charToGlyphIndex(W),Y=this.glyphs.get($);return Y=Y||this.glyphs.get(0)},f7.prototype.updateFeatures=function(W){return this.defaultRenderOptions.features.map(function($){return $.script==="latn"?{script:"latn",tags:$.tags.filter(function(Y){return W[Y]})}:$})},f7.prototype.stringToGlyphs=function(W,$){var Y=this,K=new j8;K.registerModifier("glyphIndex",null,function(d){return Y.charToGlyphIndex(d.char)});var F=$?this.updateFeatures($.features):this.defaultRenderOptions.features;K.applyFeatures(this,F);for(var N=K.getTextGlyphs(W),E=N.length,O=Array(E),T=this.glyphs.get(0),y=0;y<E;y+=1)O[y]=this.glyphs.get(N[y])||T;return O},f7.prototype.nameToGlyphIndex=function(W){return this.glyphNames.nameToGlyphIndex(W)},f7.prototype.nameToGlyph=function(W){var $=this.nameToGlyphIndex(W),Y=this.glyphs.get($);return Y=Y||this.glyphs.get(0)},f7.prototype.glyphIndexToName=function(W){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(W):""},f7.prototype.getKerningValue=function(W,$){W=W.index||W,$=$.index||$;var Y=this.position.defaultKerningTables;return Y?this.position.getKerningValue(Y,W,$):this.kerningPairs[W+","+$]||0},f7.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]},f7.prototype.forEachGlyph=function(W,$,Y,K,F,N){$=$!==void 0?$:0,Y=Y!==void 0?Y:0,K=K!==void 0?K:72,F=Object.assign({},this.defaultRenderOptions,F);var E,O=1/this.unitsPerEm*K,T=this.stringToGlyphs(W,F);if(F.kerning){var y=F.script||this.position.getDefaultScriptName();E=this.position.getKerningTables(y,F.language)}for(var d=0;d<T.length;d+=1){var t=T[d];if(N.call(this,t,$,Y,K,F),t.advanceWidth&&($+=t.advanceWidth*O),F.kerning&&d<T.length-1)$+=(E?this.position.getKerningValue(E,t.index,T[d+1].index):this.getKerningValue(t,T[d+1]))*O;F.letterSpacing?$+=F.letterSpacing*K:F.tracking&&($+=F.tracking/1000*K)}return $},f7.prototype.getPath=function(W,$,Y,K,F){var N=new L0;return this.forEachGlyph(W,$,Y,K,F,function(E,O,T,y){var d=E.getPath(O,T,y,F,this);N.extend(d)}),N},f7.prototype.getPaths=function(W,$,Y,K,F){var N=[];return this.forEachGlyph(W,$,Y,K,F,function(E,O,T,y){var d=E.getPath(O,T,y,F,this);N.push(d)}),N},f7.prototype.getAdvanceWidth=function(W,$,Y){return this.forEachGlyph(W,0,0,$,Y,function(){})},f7.prototype.draw=function(W,$,Y,K,F,N){this.getPath($,Y,K,F,N).draw(W)},f7.prototype.drawPoints=function(W,$,Y,K,F,N){this.forEachGlyph($,Y,K,F,N,function(E,O,T,y){E.drawPoints(W,O,T,y)})},f7.prototype.drawMetrics=function(W,$,Y,K,F,N){this.forEachGlyph($,Y,K,F,N,function(E,O,T,y){E.drawMetrics(W,O,T,y)})},f7.prototype.getEnglishName=function(W){var $=this.names[W];if($)return $.en},f7.prototype.validate=function(){var W=this;function $(Y){var K=W.getEnglishName(Y);K&&K.trim().length}$("fontFamily"),$("weightName"),$("manufacturer"),$("copyright"),$("version"),this.unitsPerEm},f7.prototype.toTables=function(){return R6.fontToTable(this)},f7.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()},f7.prototype.toArrayBuffer=function(){for(var W=this.toTables().encode(),$=new ArrayBuffer(W.length),Y=new Uint8Array($),K=0;K<W.length;K++)Y[K]=W[K];return $},f7.prototype.download=function(W){var $=this.getEnglishName("fontFamily"),Y=this.getEnglishName("fontSubfamily");W=W||$.replace(/\s/g,"")+"-"+Y+".otf";var K=this.toArrayBuffer();if(typeof window<"u")if(window.URL=window.URL||window.webkitURL,window.URL){var F=new DataView(K),N=new Blob([F],{type:"font/opentype"}),E=document.createElement("a");E.href=window.URL.createObjectURL(N),E.download=W;var O=document.createEvent("MouseEvents");O.initEvent("click",!0,!1),E.dispatchEvent(O)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var T=(()=>({})),y=function(d){for(var t=new Buffer(d.byteLength),S=new Uint8Array(d),G0=0;G0<t.length;++G0)t[G0]=S[G0];return t}(K);T.writeFileSync(W,y)}},f7.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512},f7.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9},f7.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function w$(){return{coverage:this.parsePointer(A.coverage),attachPoints:this.parseList(A.pointer(A.uShortList))}}function P$(){var W=this.parseUShort();return e.argument(W===1||W===2||W===3,"Unsupported CaretValue table version."),W===1?{coordinate:this.parseShort()}:W===2?{pointindex:this.parseShort()}:W===3?{coordinate:this.parseShort()}:void 0}function A$(){return this.parseList(A.pointer(P$))}function T$(){return{coverage:this.parsePointer(A.coverage),ligGlyphs:this.parseList(A.pointer(A$))}}function S$(){return this.parseUShort(),this.parseList(A.pointer(A.coverage))}var j$={make:function(W,$){var Y,K,F,N,E=new M.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:W.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:W.instances.length},{name:"instanceSize",type:"USHORT",value:4+4*W.axes.length}]);E.offsetToData=E.sizeOf();for(var O=0;O<W.axes.length;O++)E.fields=E.fields.concat((Y=O,K=W.axes[O],F=$,N=ZJ(K.name,F),[{name:"tag_"+Y,type:"TAG",value:K.tag},{name:"minValue_"+Y,type:"FIXED",value:K.minValue<<16},{name:"defaultValue_"+Y,type:"FIXED",value:K.defaultValue<<16},{name:"maxValue_"+Y,type:"FIXED",value:K.maxValue<<16},{name:"flags_"+Y,type:"USHORT",value:0},{name:"nameID_"+Y,type:"USHORT",value:N}]));for(var T=0;T<W.instances.length;T++)E.fields=E.fields.concat(k$(T,W.instances[T],W.axes,$));return E},parse:function(W,$,Y){var K=new i.Parser(W,$),F=K.parseULong();e.argument(F===65536,"Unsupported fvar table version.");var N=K.parseOffset16();K.skip("uShort",1);for(var E,O,T,y,d,t=K.parseUShort(),S=K.parseUShort(),G0=K.parseUShort(),k0=K.parseUShort(),O0=[],R0=0;R0<t;R0++)O0.push((E=W,O=$+N+R0*S,T=Y,d=y=void 0,y={},d=new i.Parser(E,O),y.tag=d.parseTag(),y.minValue=d.parseFixed(),y.defaultValue=d.parseFixed(),y.maxValue=d.parseFixed(),d.skip("uShort",1),y.name=T[d.parseUShort()]||{},y));for(var J0=[],y0=$+N+t*S,o0=0;o0<G0;o0++)J0.push(O$(W,y0+o0*k0,O0,Y));return{axes:O0,instances:J0}}},f$={parse:function(W,$){var Y=new A(W,$=$||0),K=Y.parseVersion(1);e.argument(K===1||K===1.2||K===1.3,"Unsupported GDEF table version.");var F={version:K,classDef:Y.parsePointer(A.classDef),attachList:Y.parsePointer(w$),ligCaretList:Y.parsePointer(T$),markAttachClassDef:Y.parsePointer(A.classDef)};return 1.2<=K&&(F.markGlyphSets=Y.parsePointer(S$)),F}},f8=[,,,,,,,,,,];f8[1]=function(){var W=this.offset+this.relativeOffset,$=this.parseUShort();return $===1?{posFormat:1,coverage:this.parsePointer(A.coverage),value:this.parseValueRecord()}:$===2?{posFormat:2,coverage:this.parsePointer(A.coverage),values:this.parseValueRecordList()}:void e.assert(!1,"0x"+W.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")},f8[2]=function(){var W=this.offset+this.relativeOffset,$=this.parseUShort();e.assert($===1||$===2,"0x"+W.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var Y=this.parsePointer(A.coverage),K=this.parseUShort(),F=this.parseUShort();if($===1)return{posFormat:$,coverage:Y,valueFormat1:K,valueFormat2:F,pairSets:this.parseList(A.pointer(A.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(K),value2:this.parseValueRecord(F)}})))};if($===2){var N=this.parsePointer(A.classDef),E=this.parsePointer(A.classDef),O=this.parseUShort(),T=this.parseUShort();return{posFormat:$,coverage:Y,valueFormat1:K,valueFormat2:F,classDef1:N,classDef2:E,class1Count:O,class2Count:T,classRecords:this.parseList(O,A.list(T,function(){return{value1:this.parseValueRecord(K),value2:this.parseValueRecord(F)}}))}}},f8[3]=function(){return{error:"GPOS Lookup 3 not supported"}},f8[4]=function(){return{error:"GPOS Lookup 4 not supported"}},f8[5]=function(){return{error:"GPOS Lookup 5 not supported"}},f8[6]=function(){return{error:"GPOS Lookup 6 not supported"}},f8[7]=function(){return{error:"GPOS Lookup 7 not supported"}},f8[8]=function(){return{error:"GPOS Lookup 8 not supported"}},f8[9]=function(){return{error:"GPOS Lookup 9 not supported"}};var x$=[,,,,,,,,,,],y$={parse:function(W,$){var Y=new A(W,$=$||0),K=Y.parseVersion(1);return e.argument(K===1||K===1.1,"Unsupported GPOS table version "+K),K===1?{version:K,scripts:Y.parseScriptList(),features:Y.parseFeatureList(),lookups:Y.parseLookupList(f8)}:{version:K,scripts:Y.parseScriptList(),features:Y.parseFeatureList(),lookups:Y.parseLookupList(f8),variations:Y.parseFeatureVariationsList()}},make:function(W){return new M.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new M.ScriptList(W.scripts)},{name:"features",type:"TABLE",value:new M.FeatureList(W.features)},{name:"lookups",type:"TABLE",value:new M.LookupList(W.lookups,x$)}])}},v$={parse:function(W,$){var Y=new i.Parser(W,$),K=Y.parseUShort();if(K===0)return function(F){var N={};F.skip("uShort");var E=F.parseUShort();e.argument(E===0,"Unsupported kern sub-table version."),F.skip("uShort",2);var O=F.parseUShort();F.skip("uShort",3);for(var T=0;T<O;T+=1){var y=F.parseUShort(),d=F.parseUShort(),t=F.parseShort();N[y+","+d]=t}return N}(Y);if(K===1)return function(F){var N={};F.skip("uShort"),1<F.parseULong()&&console.warn("Only the first kern subtable is supported."),F.skip("uLong");var E=255&F.parseUShort();if(F.skip("uShort"),E==0){var O=F.parseUShort();F.skip("uShort",3);for(var T=0;T<O;T+=1){var y=F.parseUShort(),d=F.parseUShort(),t=F.parseShort();N[y+","+d]=t}}return N}(Y);throw Error("Unsupported kern table version ("+K+").")}},b$={parse:function(W,$,Y,K){for(var F=new i.Parser(W,$),N=K?F.parseUShort:F.parseULong,E=[],O=0;O<Y+1;O+=1){var T=N.call(F);K&&(T*=2),E.push(T)}return E}};function h$(W,$){(()=>({})).readFile(W,function(Y,K){if(Y)return $(Y.message);$(null,CZ(K))})}function g$(W,$){var Y=new XMLHttpRequest;Y.open("get",W,!0),Y.responseType="arraybuffer",Y.onload=function(){return Y.response?$(null,Y.response):$("Font could not be loaded: "+Y.statusText)},Y.onerror=function(){$("Font could not be loaded")},Y.send()}function JJ(W,$){for(var Y=[],K=12,F=0;F<$;F+=1){var N=i.getTag(W,K),E=i.getULong(W,K+4),O=i.getULong(W,K+8),T=i.getULong(W,K+12);Y.push({tag:N,checksum:E,offset:O,length:T,compression:!1}),K+=16}return Y}function r7(W,$){if($.compression!=="WOFF")return{data:W,offset:$.offset};var Y=new Uint8Array(W.buffer,$.offset+2,$.compressedLength-2),K=new Uint8Array($.length);if(b(Y,K),K.byteLength!==$.length)throw Error("Decompression error: "+$.tag+" decompressed length doesn't match recorded length");return{data:new DataView(K.buffer,0),offset:0}}function Z5(W,$){var Y,K;$=$==null?{}:$;var F,N,E,O,T,y,d,t,S,G0,k0,O0,R0,J0=new f7({empty:!0}),y0=new DataView(W,0),o0=[],U7=i.getTag(y0,0);if(U7===String.fromCharCode(0,1,0,0)||U7==="true"||U7==="typ1")J0.outlinesFormat="truetype",o0=JJ(y0,F=i.getUShort(y0,4));else if(U7==="OTTO")J0.outlinesFormat="cff",o0=JJ(y0,F=i.getUShort(y0,4));else{if(U7!=="wOFF")throw Error("Unsupported OpenType signature "+U7);var M7=i.getTag(y0,4);if(M7===String.fromCharCode(0,1,0,0))J0.outlinesFormat="truetype";else{if(M7!=="OTTO")throw Error("Unsupported OpenType flavor "+U7);J0.outlinesFormat="cff"}o0=function(d7,o8){for(var J5=[],a8=44,L6=0;L6<o8;L6+=1){var b9=i.getTag(d7,a8),M6=i.getULong(d7,a8+4),C6=i.getULong(d7,a8+8),h9=i.getULong(d7,a8+12),XJ=void 0;XJ=C6<h9&&"WOFF",J5.push({tag:b9,offset:M6,compression:XJ,compressedLength:C6,length:h9}),a8+=20}return J5}(y0,F=i.getUShort(y0,12))}for(var b7=0;b7<F;b7+=1){var q7=o0[b7],Z7=void 0;switch(q7.tag){case"cmap":Z7=r7(y0,q7),J0.tables.cmap=X0.parse(Z7.data,Z7.offset),J0.encoding=new B0(J0.tables.cmap);break;case"cvt ":Z7=r7(y0,q7),R0=new i.Parser(Z7.data,Z7.offset),J0.tables.cvt=R0.parseShortList(q7.length/2);break;case"fvar":E=q7;break;case"fpgm":Z7=r7(y0,q7),R0=new i.Parser(Z7.data,Z7.offset),J0.tables.fpgm=R0.parseByteList(q7.length);break;case"head":Z7=r7(y0,q7),J0.tables.head=S9.parse(Z7.data,Z7.offset),J0.unitsPerEm=J0.tables.head.unitsPerEm,Y=J0.tables.head.indexToLocFormat;break;case"hhea":Z7=r7(y0,q7),J0.tables.hhea=j9.parse(Z7.data,Z7.offset),J0.ascender=J0.tables.hhea.ascender,J0.descender=J0.tables.hhea.descender,J0.numberOfHMetrics=J0.tables.hhea.numberOfHMetrics;break;case"hmtx":t=q7;break;case"ltag":Z7=r7(y0,q7),K=h.parse(Z7.data,Z7.offset);break;case"maxp":Z7=r7(y0,q7),J0.tables.maxp=Y0.parse(Z7.data,Z7.offset),J0.numGlyphs=J0.tables.maxp.numGlyphs;break;case"name":k0=q7;break;case"OS/2":Z7=r7(y0,q7),J0.tables.os2=m7.parse(Z7.data,Z7.offset);break;case"post":Z7=r7(y0,q7),J0.tables.post=E7.parse(Z7.data,Z7.offset),J0.glyphNames=new T0(J0.tables.post);break;case"prep":Z7=r7(y0,q7),R0=new i.Parser(Z7.data,Z7.offset),J0.tables.prep=R0.parseByteList(q7.length);break;case"glyf":O=q7;break;case"loca":G0=q7;break;case"CFF ":N=q7;break;case"kern":S=q7;break;case"GDEF":T=q7;break;case"GPOS":y=q7;break;case"GSUB":d=q7;break;case"meta":O0=q7}}var u7=r7(y0,k0);if(J0.tables.name=a7.parse(u7.data,u7.offset,K),J0.names=J0.tables.name,O&&G0){var x7=Y===0,y7=r7(y0,G0),v7=b$.parse(y7.data,y7.offset,J0.numGlyphs,x7),T7=r7(y0,O);J0.glyphs=SZ.parse(T7.data,T7.offset,v7,J0,$)}else{if(!N)throw Error("Font doesn't contain TrueType or CFF outlines.");var G7=r7(y0,N);z9.parse(G7.data,G7.offset,J0,$)}var D7=r7(y0,t);if(f9.parse(J0,D7.data,D7.offset,J0.numberOfHMetrics,J0.numGlyphs,J0.glyphs,$),p0(J0,$),S){var _7=r7(y0,S);J0.kerningPairs=v$.parse(_7.data,_7.offset)}else J0.kerningPairs={};if(T){var k7=r7(y0,T);J0.tables.gdef=f$.parse(k7.data,k7.offset)}if(y){var O7=r7(y0,y);J0.tables.gpos=y$.parse(O7.data,O7.offset),J0.position.init()}if(d){var A7=r7(y0,d);J0.tables.gsub=N6.parse(A7.data,A7.offset)}if(E){var s7=r7(y0,E);J0.tables.fvar=j$.parse(s7.data,s7.offset,J0.names)}if(O0){var w7=r7(y0,O0);J0.tables.meta=W9.parse(w7.data,w7.offset),J0.metas=J0.tables.meta}return J0}function WJ(W,$,Y){Y=Y==null?{}:Y;var K=typeof window>"u"&&!Y.isUrl?h$:g$;return new Promise(function(F,N){K(W,function(E,O){if(E){if($)return $(E);N(E)}var T;try{T=Z5(O,Y)}catch(y){if($)return $(y,null);N(y)}if($)return $(null,T);F(T)})})}function $J(W,$){return Z5(CZ((()=>({})).readFileSync(W)),$)}var p$=Object.freeze({__proto__:null,Font:f7,Glyph:a0,Path:L0,BoundingBox:q0,_parse:i,parse:Z5,load:WJ,loadSync:$J});Q.BoundingBox=q0,Q.Font=f7,Q.Glyph=a0,Q.Path=L0,Q._parse=i,Q.default=p$,Q.load=WJ,Q.loadSync=$J,Q.parse=Z5,Object.defineProperty(Q,"__esModule",{value:!0})})});var K$=KJ((IZ,LZ)=>{(function(Q,Z){typeof IZ=="object"&&typeof LZ<"u"?LZ.exports=Z():typeof define=="function"&&define.amd?define(Z):(Q=typeof globalThis<"u"?globalThis:Q||self).polygonClipping=Z()})(IZ,function(){/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function Q(M,L){var _,D,P,g,A={label:0,sent:function(){if(1&P[0])throw P[1];return P[1]},trys:[],ops:[]};return g={next:n(0),throw:n(1),return:n(2)},typeof Symbol=="function"&&(g[Symbol.iterator]=function(){return this}),g;function n(i){return function(X0){return function(r){if(_)throw TypeError("Generator is already executing.");for(;A;)try{if(_=1,D&&(P=2&r[0]?D.return:r[0]?D.throw||((P=D.return)&&P.call(D),0):D.next)&&!(P=P.call(D,r[1])).done)return P;switch(D=0,P&&(r=[2&r[0],P.value]),r[0]){case 0:case 1:P=r;break;case 4:return A.label++,{value:r[1],done:!1};case 5:A.label++,D=r[1],r=[0];continue;case 7:r=A.ops.pop(),A.trys.pop();continue;default:if(P=A.trys,!((P=P.length>0&&P[P.length-1])||r[0]!==6&&r[0]!==2)){A=0;continue}if(r[0]===3&&(!P||r[1]>P[0]&&r[1]<P[3])){A.label=r[1];break}if(r[0]===6&&A.label<P[1]){A.label=P[1],P=r;break}if(P&&A.label<P[2]){A.label=P[2],A.ops.push(r);break}P[2]&&A.ops.pop(),A.trys.pop();continue}r=L.call(M,A)}catch(U0){r=[6,U0],D=0}finally{_=P=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([i,X0])}}}var Z=function(M,L){this.next=null,this.key=M,this.data=L,this.left=null,this.right=null};function J(M,L){return M>L?1:M<L?-1:0}function X(M,L,_){for(var D=new Z(null,null),P=D,g=D;;){var A=_(M,L.key);if(A<0){if(L.left===null)break;if(_(M,L.left.key)<0){var n=L.left;if(L.left=n.right,n.right=L,(L=n).left===null)break}g.left=L,g=L,L=L.left}else{if(!(A>0))break;if(L.right===null)break;if(_(M,L.right.key)>0){if(n=L.right,L.right=n.left,n.left=L,(L=n).right===null)break}P.right=L,P=L,L=L.right}}return P.right=L.left,g.left=L.right,L.left=D.right,L.right=D.left,L}function H(M,L,_,D){var P=new Z(M,L);if(_===null)return P.left=P.right=null,P;var g=D(M,(_=X(M,_,D)).key);return g<0?(P.left=_.left,P.right=_,_.left=null):g>=0&&(P.right=_.right,P.left=_,_.right=null),P}function q(M,L,_){var D=null,P=null;if(L){var g=_((L=X(M,L,_)).key,M);g===0?(D=L.left,P=L.right):g<0?(P=L.right,L.right=null,D=L):(D=L.left,L.left=null,P=L)}return{left:D,right:P}}function G(M,L,_,D,P){if(M){D(L+(_?"└── ":"├── ")+P(M)+`
`);var g=L+(_?"    ":"│   ");M.left&&G(M.left,g,!1,D,P),M.right&&G(M.right,g,!0,D,P)}}var V=function(){function M(L){L===void 0&&(L=J),this._root=null,this._size=0,this._comparator=L}return M.prototype.insert=function(L,_){return this._size++,this._root=H(L,_,this._root,this._comparator)},M.prototype.add=function(L,_){var D=new Z(L,_);this._root===null&&(D.left=D.right=null,this._size++,this._root=D);var P=this._comparator,g=X(L,this._root,P),A=P(L,g.key);return A===0?this._root=g:(A<0?(D.left=g.left,D.right=g,g.left=null):A>0&&(D.right=g.right,D.left=g,g.right=null),this._size++,this._root=D),this._root},M.prototype.remove=function(L){this._root=this._remove(L,this._root,this._comparator)},M.prototype._remove=function(L,_,D){var P;return _===null?null:D(L,(_=X(L,_,D)).key)===0?(_.left===null?P=_.right:(P=X(L,_.left,D)).right=_.right,this._size--,P):_},M.prototype.pop=function(){var L=this._root;if(L){for(;L.left;)L=L.left;return this._root=X(L.key,this._root,this._comparator),this._root=this._remove(L.key,this._root,this._comparator),{key:L.key,data:L.data}}return null},M.prototype.findStatic=function(L){for(var _=this._root,D=this._comparator;_;){var P=D(L,_.key);if(P===0)return _;_=P<0?_.left:_.right}return null},M.prototype.find=function(L){return this._root&&(this._root=X(L,this._root,this._comparator),this._comparator(L,this._root.key)!==0)?null:this._root},M.prototype.contains=function(L){for(var _=this._root,D=this._comparator;_;){var P=D(L,_.key);if(P===0)return!0;_=P<0?_.left:_.right}return!1},M.prototype.forEach=function(L,_){for(var D=this._root,P=[],g=!1;!g;)D!==null?(P.push(D),D=D.left):P.length!==0?(D=P.pop(),L.call(_,D),D=D.right):g=!0;return this},M.prototype.range=function(L,_,D,P){for(var g=[],A=this._comparator,n=this._root;g.length!==0||n;)if(n)g.push(n),n=n.left;else{if(A((n=g.pop()).key,_)>0)break;if(A(n.key,L)>=0&&D.call(P,n))return this;n=n.right}return this},M.prototype.keys=function(){var L=[];return this.forEach(function(_){var D=_.key;return L.push(D)}),L},M.prototype.values=function(){var L=[];return this.forEach(function(_){var D=_.data;return L.push(D)}),L},M.prototype.min=function(){return this._root?this.minNode(this._root).key:null},M.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},M.prototype.minNode=function(L){if(L===void 0&&(L=this._root),L)for(;L.left;)L=L.left;return L},M.prototype.maxNode=function(L){if(L===void 0&&(L=this._root),L)for(;L.right;)L=L.right;return L},M.prototype.at=function(L){for(var _=this._root,D=!1,P=0,g=[];!D;)if(_)g.push(_),_=_.left;else if(g.length>0){if(_=g.pop(),P===L)return _;P++,_=_.right}else D=!0;return null},M.prototype.next=function(L){var _=this._root,D=null;if(L.right){for(D=L.right;D.left;)D=D.left;return D}for(var P=this._comparator;_;){var g=P(L.key,_.key);if(g===0)break;g<0?(D=_,_=_.left):_=_.right}return D},M.prototype.prev=function(L){var _=this._root,D=null;if(L.left!==null){for(D=L.left;D.right;)D=D.right;return D}for(var P=this._comparator;_;){var g=P(L.key,_.key);if(g===0)break;g<0?_=_.left:(D=_,_=_.right)}return D},M.prototype.clear=function(){return this._root=null,this._size=0,this},M.prototype.toList=function(){return function(L){var _=L,D=[],P=!1,g=new Z(null,null),A=g;for(;!P;)_?(D.push(_),_=_.left):D.length>0?_=(_=A=A.next=D.pop()).right:P=!0;return A.next=null,g.next}(this._root)},M.prototype.load=function(L,_,D){_===void 0&&(_=[]),D===void 0&&(D=!1);var P=L.length,g=this._comparator;if(D&&B(L,_,0,P-1,g),this._root===null)this._root=R(L,_,0,P),this._size=P;else{var A=function(n,i,X0){var r=new Z(null,null),U0=r,f0=n,H0=i;for(;f0!==null&&H0!==null;)X0(f0.key,H0.key)<0?(U0.next=f0,f0=f0.next):(U0.next=H0,H0=H0.next),U0=U0.next;return f0!==null?U0.next=f0:H0!==null&&(U0.next=H0),r.next}(this.toList(),function(n,i){for(var X0=new Z(null,null),r=X0,U0=0;U0<n.length;U0++)r=r.next=new Z(n[U0],i[U0]);return r.next=null,X0.next}(L,_),g);P=this._size+P,this._root=U({head:A},0,P)}return this},M.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(M.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(M.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),M.prototype.toString=function(L){L===void 0&&(L=function(D){return String(D.key)});var _=[];return G(this._root,"",!0,function(D){return _.push(D)},L),_.join("")},M.prototype.update=function(L,_,D){var P=this._comparator,g=q(L,this._root,P),A=g.left,n=g.right;P(L,_)<0?n=H(_,D,n,P):A=H(_,D,A,P),this._root=function(i,X0,r){return X0===null?i:(i===null||((X0=X(i.key,X0,r)).left=i),X0)}(A,n,P)},M.prototype.split=function(L){return q(L,this._root,this._comparator)},M.prototype[Symbol.iterator]=function(){var L,_,D;return Q(this,function(P){switch(P.label){case 0:L=this._root,_=[],D=!1,P.label=1;case 1:return D?[3,6]:L===null?[3,2]:(_.push(L),L=L.left,[3,5]);case 2:return _.length===0?[3,4]:[4,L=_.pop()];case 3:return P.sent(),L=L.right,[3,5];case 4:D=!0,P.label=5;case 5:return[3,1];case 6:return[2]}})},M}();function R(M,L,_,D){var P=D-_;if(P>0){var g=_+Math.floor(P/2),A=M[g],n=L[g],i=new Z(A,n);return i.left=R(M,L,_,g),i.right=R(M,L,g+1,D),i}return null}function U(M,L,_){var D=_-L;if(D>0){var P=L+Math.floor(D/2),g=U(M,L,P),A=M.head;return A.left=g,M.head=M.head.next,A.right=U(M,P+1,_),A}return null}function B(M,L,_,D,P){if(!(_>=D)){for(var g=M[_+D>>1],A=_-1,n=D+1;;){do A++;while(P(M[A],g)<0);do n--;while(P(M[n],g)>0);if(A>=n)break;var i=M[A];M[A]=M[n],M[n]=i,i=L[A],L[A]=L[n],L[n]=i}B(M,L,_,n,P),B(M,L,n+1,D,P)}}let z=(M,L)=>M.ll.x<=L.x&&L.x<=M.ur.x&&M.ll.y<=L.y&&L.y<=M.ur.y,I=(M,L)=>{if(L.ur.x<M.ll.x||M.ur.x<L.ll.x||L.ur.y<M.ll.y||M.ur.y<L.ll.y)return null;let _=M.ll.x<L.ll.x?L.ll.x:M.ll.x,D=M.ur.x<L.ur.x?M.ur.x:L.ur.x;return{ll:{x:_,y:M.ll.y<L.ll.y?L.ll.y:M.ll.y},ur:{x:D,y:M.ur.y<L.ur.y?M.ur.y:L.ur.y}}},w=Number.EPSILON;w===void 0&&(w=Math.pow(2,-52));let j=w*w,f=(M,L)=>{if(-w<M&&M<w&&-w<L&&L<w)return 0;let _=M-L;return _*_<j*M*L?0:M<L?-1:1};class k{constructor(){this.tree=new V,this.round(0)}round(M){let L=this.tree.add(M),_=this.tree.prev(L);if(_!==null&&f(L.key,_.key)===0)return this.tree.remove(M),_.key;let D=this.tree.next(L);return D!==null&&f(L.key,D.key)===0?(this.tree.remove(M),D.key):M}}let C=new class{constructor(){this.reset()}reset(){this.xRounder=new k,this.yRounder=new k}round(M,L){return{x:this.xRounder.round(M),y:this.yRounder.round(L)}}},v=0.00000000000000011102230246251565,x=134217729,l=(3+8*v)*v;function Z0(M,L,_,D,P){let g,A,n,i,X0=L[0],r=D[0],U0=0,f0=0;r>X0==r>-X0?(g=X0,X0=L[++U0]):(g=r,r=D[++f0]);let H0=0;if(U0<M&&f0<_)for(r>X0==r>-X0?(A=X0+g,n=g-(A-X0),X0=L[++U0]):(A=r+g,n=g-(A-r),r=D[++f0]),g=A,n!==0&&(P[H0++]=n);U0<M&&f0<_;)r>X0==r>-X0?(A=g+X0,i=A-g,n=g-(A-i)+(X0-i),X0=L[++U0]):(A=g+r,i=A-g,n=g-(A-i)+(r-i),r=D[++f0]),g=A,n!==0&&(P[H0++]=n);for(;U0<M;)A=g+X0,i=A-g,n=g-(A-i)+(X0-i),X0=L[++U0],g=A,n!==0&&(P[H0++]=n);for(;f0<_;)A=g+r,i=A-g,n=g-(A-i)+(r-i),r=D[++f0],g=A,n!==0&&(P[H0++]=n);return g===0&&H0!==0||(P[H0++]=g),H0}function p(M){return new Float64Array(M)}let $0=0.00000000000000022204460492503146,z0=0.00000000000000000000000000000011093356479670487,b=p(4),m=p(8),q0=p(12),L0=p(16),S0=p(4);function o(M,L,_,D,P,g){let A=(L-g)*(_-P),n=(M-P)*(D-g),i=A-n,X0=Math.abs(A+n);return Math.abs(i)>=0.00000000000000033306690738754716*X0?i:-function(r,U0,f0,H0,u,B0,m0){let T0,p0,t0,a0,x0,c0,_0,s,I0,w0,b0,d0,$7,K7,I7,P7,V7,S7,l7=r-u,V8=f0-u,Q8=U0-B0,H8=H0-B0;K7=l7*H8,c0=x*l7,_0=c0-(c0-l7),s=l7-_0,c0=x*H8,I0=c0-(c0-H8),w0=H8-I0,I7=s*w0-(K7-_0*I0-s*I0-_0*w0),P7=Q8*V8,c0=x*Q8,_0=c0-(c0-Q8),s=Q8-_0,c0=x*V8,I0=c0-(c0-V8),w0=V8-I0,V7=s*w0-(P7-_0*I0-s*I0-_0*w0),b0=I7-V7,x0=I7-b0,b[0]=I7-(b0+x0)+(x0-V7),d0=K7+b0,x0=d0-K7,$7=K7-(d0-x0)+(b0-x0),b0=$7-P7,x0=$7-b0,b[1]=$7-(b0+x0)+(x0-P7),S7=d0+b0,x0=S7-d0,b[2]=d0-(S7-x0)+(b0-x0),b[3]=S7;let K8=function(f9,h){let Y0=h[0];for(let V0=1;V0<f9;V0++)Y0+=h[V0];return Y0}(4,b),g8=$0*m0;if(K8>=g8||-K8>=g8)return K8;if(x0=r-l7,T0=r-(l7+x0)+(x0-u),x0=f0-V8,t0=f0-(V8+x0)+(x0-u),x0=U0-Q8,p0=U0-(Q8+x0)+(x0-B0),x0=H0-H8,a0=H0-(H8+x0)+(x0-B0),T0===0&&p0===0&&t0===0&&a0===0)return K8;if(g8=z0*m0+l*Math.abs(K8),K8+=l7*a0+H8*T0-(Q8*t0+V8*p0),K8>=g8||-K8>=g8)return K8;K7=T0*H8,c0=x*T0,_0=c0-(c0-T0),s=T0-_0,c0=x*H8,I0=c0-(c0-H8),w0=H8-I0,I7=s*w0-(K7-_0*I0-s*I0-_0*w0),P7=p0*V8,c0=x*p0,_0=c0-(c0-p0),s=p0-_0,c0=x*V8,I0=c0-(c0-V8),w0=V8-I0,V7=s*w0-(P7-_0*I0-s*I0-_0*w0),b0=I7-V7,x0=I7-b0,S0[0]=I7-(b0+x0)+(x0-V7),d0=K7+b0,x0=d0-K7,$7=K7-(d0-x0)+(b0-x0),b0=$7-P7,x0=$7-b0,S0[1]=$7-(b0+x0)+(x0-P7),S7=d0+b0,x0=S7-d0,S0[2]=d0-(S7-x0)+(b0-x0),S0[3]=S7;let z9=Z0(4,b,4,S0,m);K7=l7*a0,c0=x*l7,_0=c0-(c0-l7),s=l7-_0,c0=x*a0,I0=c0-(c0-a0),w0=a0-I0,I7=s*w0-(K7-_0*I0-s*I0-_0*w0),P7=Q8*t0,c0=x*Q8,_0=c0-(c0-Q8),s=Q8-_0,c0=x*t0,I0=c0-(c0-t0),w0=t0-I0,V7=s*w0-(P7-_0*I0-s*I0-_0*w0),b0=I7-V7,x0=I7-b0,S0[0]=I7-(b0+x0)+(x0-V7),d0=K7+b0,x0=d0-K7,$7=K7-(d0-x0)+(b0-x0),b0=$7-P7,x0=$7-b0,S0[1]=$7-(b0+x0)+(x0-P7),S7=d0+b0,x0=S7-d0,S0[2]=d0-(S7-x0)+(b0-x0),S0[3]=S7;let S9=Z0(z9,m,4,S0,q0);K7=T0*a0,c0=x*T0,_0=c0-(c0-T0),s=T0-_0,c0=x*a0,I0=c0-(c0-a0),w0=a0-I0,I7=s*w0-(K7-_0*I0-s*I0-_0*w0),P7=p0*t0,c0=x*p0,_0=c0-(c0-p0),s=p0-_0,c0=x*t0,I0=c0-(c0-t0),w0=t0-I0,V7=s*w0-(P7-_0*I0-s*I0-_0*w0),b0=I7-V7,x0=I7-b0,S0[0]=I7-(b0+x0)+(x0-V7),d0=K7+b0,x0=d0-K7,$7=K7-(d0-x0)+(b0-x0),b0=$7-P7,x0=$7-b0,S0[1]=$7-(b0+x0)+(x0-P7),S7=d0+b0,x0=S7-d0,S0[2]=d0-(S7-x0)+(b0-x0),S0[3]=S7;let j9=Z0(S9,q0,4,S0,L0);return L0[j9-1]}(M,L,_,D,P,g,X0)}let e=(M,L)=>M.x*L.y-M.y*L.x,D0=(M,L)=>M.x*L.x+M.y*L.y,P0=(M,L,_)=>{let D=o(M.x,M.y,L.x,L.y,_.x,_.y);return D>0?-1:D<0?1:0},a=(M)=>Math.sqrt(D0(M,M)),W0=(M,L,_)=>{let D={x:L.x-M.x,y:L.y-M.y},P={x:_.x-M.x,y:_.y-M.y};return e(P,D)/a(P)/a(D)},C0=(M,L,_)=>{let D={x:L.x-M.x,y:L.y-M.y},P={x:_.x-M.x,y:_.y-M.y};return D0(P,D)/a(P)/a(D)},v0=(M,L,_)=>L.y===0?null:{x:M.x+L.x/L.y*(_-M.y),y:_},K0=(M,L,_)=>L.x===0?null:{x:_,y:M.y+L.y/L.x*(_-M.x)};class M0{static compare(M,L){let _=M0.comparePoints(M.point,L.point);return _!==0?_:(M.point!==L.point&&M.link(L),M.isLeft!==L.isLeft?M.isLeft?1:-1:l0.compare(M.segment,L.segment))}static comparePoints(M,L){return M.x<L.x?-1:M.x>L.x?1:M.y<L.y?-1:M.y>L.y?1:0}constructor(M,L){M.events===void 0?M.events=[this]:M.events.push(this),this.point=M,this.isLeft=L}link(M){if(M.point===this.point)throw Error("Tried to link already linked events");let L=M.point.events;for(let _=0,D=L.length;_<D;_++){let P=L[_];this.point.events.push(P),P.point=this.point}this.checkForConsuming()}checkForConsuming(){let M=this.point.events.length;for(let L=0;L<M;L++){let _=this.point.events[L];if(_.segment.consumedBy===void 0)for(let D=L+1;D<M;D++){let P=this.point.events[D];P.consumedBy===void 0&&(_.otherSE.point.events===P.otherSE.point.events&&_.segment.consume(P.segment))}}}getAvailableLinkedEvents(){let M=[];for(let L=0,_=this.point.events.length;L<_;L++){let D=this.point.events[L];D!==this&&!D.segment.ringOut&&D.segment.isInResult()&&M.push(D)}return M}getLeftmostComparator(M){let L=new Map,_=(D)=>{let P=D.otherSE;L.set(D,{sine:W0(this.point,M.point,P.point),cosine:C0(this.point,M.point,P.point)})};return(D,P)=>{L.has(D)||_(D),L.has(P)||_(P);let{sine:g,cosine:A}=L.get(D),{sine:n,cosine:i}=L.get(P);return g>=0&&n>=0?A<i?1:A>i?-1:0:g<0&&n<0?A<i?-1:A>i?1:0:n<g?-1:n>g?1:0}}}let s0=0;class l0{static compare(M,L){let _=M.leftSE.point.x,D=L.leftSE.point.x,P=M.rightSE.point.x,g=L.rightSE.point.x;if(g<_)return 1;if(P<D)return-1;let A=M.leftSE.point.y,n=L.leftSE.point.y,i=M.rightSE.point.y,X0=L.rightSE.point.y;if(_<D){if(n<A&&n<i)return 1;if(n>A&&n>i)return-1;let r=M.comparePoint(L.leftSE.point);if(r<0)return 1;if(r>0)return-1;let U0=L.comparePoint(M.rightSE.point);return U0!==0?U0:-1}if(_>D){if(A<n&&A<X0)return-1;if(A>n&&A>X0)return 1;let r=L.comparePoint(M.leftSE.point);if(r!==0)return r;let U0=M.comparePoint(L.rightSE.point);return U0<0?1:U0>0?-1:1}if(A<n)return-1;if(A>n)return 1;if(P<g){let r=L.comparePoint(M.rightSE.point);if(r!==0)return r}if(P>g){let r=M.comparePoint(L.rightSE.point);if(r<0)return 1;if(r>0)return-1}if(P!==g){let r=i-A,U0=P-_,f0=X0-n,H0=g-D;if(r>U0&&f0<H0)return 1;if(r<U0&&f0>H0)return-1}return P>g?1:P<g||i<X0?-1:i>X0?1:M.id<L.id?-1:M.id>L.id?1:0}constructor(M,L,_,D){this.id=++s0,this.leftSE=M,M.segment=this,M.otherSE=L,this.rightSE=L,L.segment=this,L.otherSE=M,this.rings=_,this.windings=D}static fromRing(M,L,_){let D,P,g,A=M0.comparePoints(M,L);if(A<0)D=M,P=L,g=1;else{if(!(A>0))throw Error(`Tried to create degenerate segment at [${M.x}, ${M.y}]`);D=L,P=M,g=-1}let n=new M0(D,!0),i=new M0(P,!1);return new l0(n,i,[_],[g])}replaceRightSE(M){this.rightSE=M,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let M=this.leftSE.point.y,L=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:M<L?M:L},ur:{x:this.rightSE.point.x,y:M>L?M:L}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(M){return M.x===this.leftSE.point.x&&M.y===this.leftSE.point.y||M.x===this.rightSE.point.x&&M.y===this.rightSE.point.y}comparePoint(M){if(this.isAnEndpoint(M))return 0;let L=this.leftSE.point,_=this.rightSE.point,D=this.vector();if(L.x===_.x)return M.x===L.x?0:M.x<L.x?1:-1;let P=(M.y-L.y)/D.y,g=L.x+P*D.x;if(M.x===g)return 0;let A=(M.x-L.x)/D.x,n=L.y+A*D.y;return M.y===n?0:M.y<n?-1:1}getIntersection(M){let L=this.bbox(),_=M.bbox(),D=I(L,_);if(D===null)return null;let P=this.leftSE.point,g=this.rightSE.point,A=M.leftSE.point,n=M.rightSE.point,i=z(L,A)&&this.comparePoint(A)===0,X0=z(_,P)&&M.comparePoint(P)===0,r=z(L,n)&&this.comparePoint(n)===0,U0=z(_,g)&&M.comparePoint(g)===0;if(X0&&i)return U0&&!r?g:!U0&&r?n:null;if(X0)return r&&P.x===n.x&&P.y===n.y?null:P;if(i)return U0&&g.x===A.x&&g.y===A.y?null:A;if(U0&&r)return null;if(U0)return g;if(r)return n;let f0=((H0,u,B0,m0)=>{if(u.x===0)return K0(B0,m0,H0.x);if(m0.x===0)return K0(H0,u,B0.x);if(u.y===0)return v0(B0,m0,H0.y);if(m0.y===0)return v0(H0,u,B0.y);let T0=e(u,m0);if(T0==0)return null;let p0={x:B0.x-H0.x,y:B0.y-H0.y},t0=e(p0,u)/T0,a0=e(p0,m0)/T0;return{x:(H0.x+a0*u.x+(B0.x+t0*m0.x))/2,y:(H0.y+a0*u.y+(B0.y+t0*m0.y))/2}})(P,this.vector(),A,M.vector());return f0===null?null:z(D,f0)?C.round(f0.x,f0.y):null}split(M){let L=[],_=M.events!==void 0,D=new M0(M,!0),P=new M0(M,!1),g=this.rightSE;this.replaceRightSE(P),L.push(P),L.push(D);let A=new l0(D,g,this.rings.slice(),this.windings.slice());return M0.comparePoints(A.leftSE.point,A.rightSE.point)>0&&A.swapEvents(),M0.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),_&&(D.checkForConsuming(),P.checkForConsuming()),L}swapEvents(){let M=this.rightSE;this.rightSE=this.leftSE,this.leftSE=M,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let L=0,_=this.windings.length;L<_;L++)this.windings[L]*=-1}consume(M){let L=this,_=M;for(;L.consumedBy;)L=L.consumedBy;for(;_.consumedBy;)_=_.consumedBy;let D=l0.compare(L,_);if(D!==0){if(D>0){let P=L;L=_,_=P}if(L.prev===_){let P=L;L=_,_=P}for(let P=0,g=_.rings.length;P<g;P++){let A=_.rings[P],n=_.windings[P],i=L.rings.indexOf(A);i===-1?(L.rings.push(A),L.windings.push(n)):L.windings[i]+=n}_.rings=null,_.windings=null,_.consumedBy=L,_.leftSE.consumedBy=L.leftSE,_.rightSE.consumedBy=L.rightSE}}prevInResult(){return this._prevInResult!==void 0||(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(this.prev){let M=this.prev.consumedBy||this.prev;this._beforeState=M.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let M=this.beforeState();this._afterState={rings:M.rings.slice(0),windings:M.windings.slice(0),multiPolys:[]};let L=this._afterState.rings,_=this._afterState.windings,D=this._afterState.multiPolys;for(let A=0,n=this.rings.length;A<n;A++){let i=this.rings[A],X0=this.windings[A],r=L.indexOf(i);r===-1?(L.push(i),_.push(X0)):_[r]+=X0}let P=[],g=[];for(let A=0,n=L.length;A<n;A++){if(_[A]===0)continue;let i=L[A],X0=i.poly;if(g.indexOf(X0)===-1)if(i.isExterior)P.push(X0);else{g.indexOf(X0)===-1&&g.push(X0);let r=P.indexOf(i.poly);r!==-1&&P.splice(r,1)}}for(let A=0,n=P.length;A<n;A++){let i=P[A].multiPoly;D.indexOf(i)===-1&&D.push(i)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let M=this.beforeState().multiPolys,L=this.afterState().multiPolys;switch(E0.type){case"union":{let _=M.length===0,D=L.length===0;this._isInResult=_!==D;break}case"intersection":{let _,D;M.length<L.length?(_=M.length,D=L.length):(_=L.length,D=M.length),this._isInResult=D===E0.numMultiPolys&&_<D;break}case"xor":{let _=Math.abs(M.length-L.length);this._isInResult=_%2==1;break}case"difference":{let _=(D)=>D.length===1&&D[0].isSubject;this._isInResult=_(M)!==_(L);break}default:throw Error(`Unrecognized operation type found ${E0.type}`)}return this._isInResult}}class e0{constructor(M,L,_){if(!Array.isArray(M)||M.length===0)throw Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=L,this.isExterior=_,this.segments=[],typeof M[0][0]!="number"||typeof M[0][1]!="number")throw Error("Input geometry is not a valid Polygon or MultiPolygon");let D=C.round(M[0][0],M[0][1]);this.bbox={ll:{x:D.x,y:D.y},ur:{x:D.x,y:D.y}};let P=D;for(let g=1,A=M.length;g<A;g++){if(typeof M[g][0]!="number"||typeof M[g][1]!="number")throw Error("Input geometry is not a valid Polygon or MultiPolygon");let n=C.round(M[g][0],M[g][1]);n.x===P.x&&n.y===P.y||(this.segments.push(l0.fromRing(P,n,this)),n.x<this.bbox.ll.x&&(this.bbox.ll.x=n.x),n.y<this.bbox.ll.y&&(this.bbox.ll.y=n.y),n.x>this.bbox.ur.x&&(this.bbox.ur.x=n.x),n.y>this.bbox.ur.y&&(this.bbox.ur.y=n.y),P=n)}D.x===P.x&&D.y===P.y||this.segments.push(l0.fromRing(P,D,this))}getSweepEvents(){let M=[];for(let L=0,_=this.segments.length;L<_;L++){let D=this.segments[L];M.push(D.leftSE),M.push(D.rightSE)}return M}}class J7{constructor(M,L){if(!Array.isArray(M))throw Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new e0(M[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let _=1,D=M.length;_<D;_++){let P=new e0(M[_],this,!1);P.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=P.bbox.ll.x),P.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=P.bbox.ll.y),P.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=P.bbox.ur.x),P.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=P.bbox.ur.y),this.interiorRings.push(P)}this.multiPoly=L}getSweepEvents(){let M=this.exteriorRing.getSweepEvents();for(let L=0,_=this.interiorRings.length;L<_;L++){let D=this.interiorRings[L].getSweepEvents();for(let P=0,g=D.length;P<g;P++)M.push(D[P])}return M}}class H7{constructor(M,L){if(!Array.isArray(M))throw Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof M[0][0][0]=="number"&&(M=[M])}catch(_){}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let _=0,D=M.length;_<D;_++){let P=new J7(M[_],this);P.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=P.bbox.ll.x),P.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=P.bbox.ll.y),P.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=P.bbox.ur.x),P.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=P.bbox.ur.y),this.polys.push(P)}this.isSubject=L}getSweepEvents(){let M=[];for(let L=0,_=this.polys.length;L<_;L++){let D=this.polys[L].getSweepEvents();for(let P=0,g=D.length;P<g;P++)M.push(D[P])}return M}}class u0{static factory(M){let L=[];for(let _=0,D=M.length;_<D;_++){let P=M[_];if(!P.isInResult()||P.ringOut)continue;let g=null,A=P.leftSE,n=P.rightSE,i=[A],X0=A.point,r=[];for(;g=A,A=n,i.push(A),A.point!==X0;)for(;;){let U0=A.getAvailableLinkedEvents();if(U0.length===0){let u=i[0].point,B0=i[i.length-1].point;throw Error(`Unable to complete output ring starting at [${u.x}, ${u.y}]. Last matching segment found ends at [${B0.x}, ${B0.y}].`)}if(U0.length===1){n=U0[0].otherSE;break}let f0=null;for(let u=0,B0=r.length;u<B0;u++)if(r[u].point===A.point){f0=u;break}if(f0!==null){let u=r.splice(f0)[0],B0=i.splice(u.index);B0.unshift(B0[0].otherSE),L.push(new u0(B0.reverse()));continue}r.push({index:i.length,point:A.point});let H0=A.getLeftmostComparator(g);n=U0.sort(H0)[0].otherSE;break}L.push(new u0(i))}return L}constructor(M){this.events=M;for(let L=0,_=M.length;L<_;L++)M[L].segment.ringOut=this;this.poly=null}getGeom(){let M=this.events[0].point,L=[M];for(let i=1,X0=this.events.length-1;i<X0;i++){let r=this.events[i].point,U0=this.events[i+1].point;P0(r,M,U0)!==0&&(L.push(r),M=r)}if(L.length===1)return null;let _=L[0],D=L[1];P0(_,M,D)===0&&L.shift(),L.push(L[0]);let P=this.isExteriorRing()?1:-1,g=this.isExteriorRing()?0:L.length-1,A=this.isExteriorRing()?L.length:-1,n=[];for(let i=g;i!=A;i+=P)n.push([L[i].x,L[i].y]);return n}isExteriorRing(){if(this._isExteriorRing===void 0){let M=this.enclosingRing();this._isExteriorRing=!M||!M.isExteriorRing()}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let M=this.events[0];for(let D=1,P=this.events.length;D<P;D++){let g=this.events[D];M0.compare(M,g)>0&&(M=g)}let L=M.segment.prevInResult(),_=L?L.prevInResult():null;for(;;){if(!L)return null;if(!_)return L.ringOut;if(_.ringOut!==L.ringOut)return _.ringOut.enclosingRing()!==L.ringOut?L.ringOut:L.ringOut.enclosingRing();L=_.prevInResult(),_=L?L.prevInResult():null}}}class X7{constructor(M){this.exteriorRing=M,M.poly=this,this.interiorRings=[]}addInterior(M){this.interiorRings.push(M),M.poly=this}getGeom(){let M=[this.exteriorRing.getGeom()];if(M[0]===null)return null;for(let L=0,_=this.interiorRings.length;L<_;L++){let D=this.interiorRings[L].getGeom();D!==null&&M.push(D)}return M}}class c{constructor(M){this.rings=M,this.polys=this._composePolys(M)}getGeom(){let M=[];for(let L=0,_=this.polys.length;L<_;L++){let D=this.polys[L].getGeom();D!==null&&M.push(D)}return M}_composePolys(M){let L=[];for(let _=0,D=M.length;_<D;_++){let P=M[_];if(!P.poly)if(P.isExteriorRing())L.push(new X7(P));else{let g=P.enclosingRing();g.poly||L.push(new X7(g)),g.poly.addInterior(P)}}return L}}class g0{constructor(M){let L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:l0.compare;this.queue=M,this.tree=new V(L),this.segments=[]}process(M){let L=M.segment,_=[];if(M.consumedBy)return M.isLeft?this.queue.remove(M.otherSE):this.tree.remove(L),_;let D=M.isLeft?this.tree.add(L):this.tree.find(L);if(!D)throw Error(`Unable to find segment #${L.id} [${L.leftSE.point.x}, ${L.leftSE.point.y}] -> [${L.rightSE.point.x}, ${L.rightSE.point.y}] in SweepLine tree.`);let P,g,A=D,n=D;for(;P===void 0;)A=this.tree.prev(A),A===null?P=null:A.key.consumedBy===void 0&&(P=A.key);for(;g===void 0;)n=this.tree.next(n),n===null?g=null:n.key.consumedBy===void 0&&(g=n.key);if(M.isLeft){let i=null;if(P){let r=P.getIntersection(L);if(r!==null&&(L.isAnEndpoint(r)||(i=r),!P.isAnEndpoint(r))){let U0=this._splitSafely(P,r);for(let f0=0,H0=U0.length;f0<H0;f0++)_.push(U0[f0])}}let X0=null;if(g){let r=g.getIntersection(L);if(r!==null&&(L.isAnEndpoint(r)||(X0=r),!g.isAnEndpoint(r))){let U0=this._splitSafely(g,r);for(let f0=0,H0=U0.length;f0<H0;f0++)_.push(U0[f0])}}if(i!==null||X0!==null){let r=null;if(i===null)r=X0;else if(X0===null)r=i;else r=M0.comparePoints(i,X0)<=0?i:X0;this.queue.remove(L.rightSE),_.push(L.rightSE);let U0=L.split(r);for(let f0=0,H0=U0.length;f0<H0;f0++)_.push(U0[f0])}_.length>0?(this.tree.remove(L),_.push(M)):(this.segments.push(L),L.prev=P)}else{if(P&&g){let i=P.getIntersection(g);if(i!==null){if(!P.isAnEndpoint(i)){let X0=this._splitSafely(P,i);for(let r=0,U0=X0.length;r<U0;r++)_.push(X0[r])}if(!g.isAnEndpoint(i)){let X0=this._splitSafely(g,i);for(let r=0,U0=X0.length;r<U0;r++)_.push(X0[r])}}}this.tree.remove(L)}return _}_splitSafely(M,L){this.tree.remove(M);let _=M.rightSE;this.queue.remove(_);let D=M.split(L);return D.push(_),M.consumedBy===void 0&&this.tree.add(M),D}}let A0=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,j0=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6,E0=new class{run(M,L,_){E0.type=M,C.reset();let D=[new H7(L,!0)];for(let X0=0,r=_.length;X0<r;X0++)D.push(new H7(_[X0],!1));if(E0.numMultiPolys=D.length,E0.type==="difference"){let X0=D[0],r=1;for(;r<D.length;)I(D[r].bbox,X0.bbox)!==null?r++:D.splice(r,1)}if(E0.type==="intersection")for(let X0=0,r=D.length;X0<r;X0++){let U0=D[X0];for(let f0=X0+1,H0=D.length;f0<H0;f0++)if(I(U0.bbox,D[f0].bbox)===null)return[]}let P=new V(M0.compare);for(let X0=0,r=D.length;X0<r;X0++){let U0=D[X0].getSweepEvents();for(let f0=0,H0=U0.length;f0<H0;f0++)if(P.insert(U0[f0]),P.size>A0)throw Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let g=new g0(P),A=P.size,n=P.pop();for(;n;){let X0=n.key;if(P.size===A){let U0=X0.segment;throw Error(`Unable to pop() ${X0.isLeft?"left":"right"} SweepEvent [${X0.point.x}, ${X0.point.y}] from segment #${U0.id} [${U0.leftSE.point.x}, ${U0.leftSE.point.y}] -> [${U0.rightSE.point.x}, ${U0.rightSE.point.y}] from queue.`)}if(P.size>A0)throw Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(g.segments.length>j0)throw Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let r=g.process(X0);for(let U0=0,f0=r.length;U0<f0;U0++){let H0=r[U0];H0.consumedBy===void 0&&P.insert(H0)}A=P.size,n=P.pop()}C.reset();let i=u0.factory(g.segments);return new c(i).getGeom()}};var i0={union:function(M){for(var L=arguments.length,_=Array(L>1?L-1:0),D=1;D<L;D++)_[D-1]=arguments[D];return E0.run("union",M,_)},intersection:function(M){for(var L=arguments.length,_=Array(L>1?L-1:0),D=1;D<L;D++)_[D-1]=arguments[D];return E0.run("intersection",M,_)},xor:function(M){for(var L=arguments.length,_=Array(L>1?L-1:0),D=1;D<L;D++)_[D-1]=arguments[D];return E0.run("xor",M,_)},difference:function(M){for(var L=arguments.length,_=Array(L>1?L-1:0),D=1;D<L;D++)_[D-1]=arguments[D];return E0.run("difference",M,_)}};return i0})});var A9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},T9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var HW="srgb";class J9{addEventListener(Q,Z){if(this._listeners===void 0)this._listeners={};let J=this._listeners;if(J[Q]===void 0)J[Q]=[];if(J[Q].indexOf(Z)===-1)J[Q].push(Z)}hasEventListener(Q,Z){if(this._listeners===void 0)return!1;let J=this._listeners;return J[Q]!==void 0&&J[Q].indexOf(Z)!==-1}removeEventListener(Q,Z){if(this._listeners===void 0)return;let X=this._listeners[Q];if(X!==void 0){let H=X.indexOf(Z);if(H!==-1)X.splice(H,1)}}dispatchEvent(Q){if(this._listeners===void 0)return;let J=this._listeners[Q.type];if(J!==void 0){Q.target=this;let X=J.slice(0);for(let H=0,q=X.length;H<q;H++)X[H].call(this,Q);Q.target=null}}}var G8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qJ=1234567,j6=Math.PI/180,g6=180/Math.PI;function u8(){let Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,J=Math.random()*4294967295|0,X=Math.random()*4294967295|0;return(G8[Q&255]+G8[Q>>8&255]+G8[Q>>16&255]+G8[Q>>24&255]+"-"+G8[Z&255]+G8[Z>>8&255]+"-"+G8[Z>>16&15|64]+G8[Z>>24&255]+"-"+G8[J&63|128]+G8[J>>8&255]+"-"+G8[J>>16&255]+G8[J>>24&255]+G8[X&255]+G8[X>>8&255]+G8[X>>16&255]+G8[X>>24&255]).toLowerCase()}function X8(Q,Z,J){return Math.max(Z,Math.min(J,Q))}function lQ(Q,Z){return(Q%Z+Z)%Z}function i$(Q,Z,J,X,H){return X+(Q-Z)*(H-X)/(J-Z)}function o$(Q,Z,J){if(Q!==Z)return(J-Q)/(Z-Q);else return 0}function f6(Q,Z,J){return(1-J)*Q+J*Z}function a$(Q,Z,J,X){return f6(Q,Z,1-Math.exp(-J*X))}function r$(Q,Z=1){return Z-Math.abs(lQ(Q,Z*2)-Z)}function t$(Q,Z,J){if(Q<=Z)return 0;if(Q>=J)return 1;return Q=(Q-Z)/(J-Z),Q*Q*(3-2*Q)}function e$(Q,Z,J){if(Q<=Z)return 0;if(Q>=J)return 1;return Q=(Q-Z)/(J-Z),Q*Q*Q*(Q*(Q*6-15)+10)}function QX(Q,Z){return Q+Math.floor(Math.random()*(Z-Q+1))}function ZX(Q,Z){return Q+Math.random()*(Z-Q)}function JX(Q){return Q*(0.5-Math.random())}function WX(Q){if(Q!==void 0)qJ=Q;let Z=qJ+=1831565813;return Z=Math.imul(Z^Z>>>15,Z|1),Z^=Z+Math.imul(Z^Z>>>7,Z|61),((Z^Z>>>14)>>>0)/4294967296}function $X(Q){return Q*j6}function XX(Q){return Q*g6}function vQ(Q){return(Q&Q-1)===0&&Q!==0}function YX(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function x5(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function HX(Q,Z,J,X,H){let{cos:q,sin:G}=Math,V=q(J/2),R=G(J/2),U=q((Z+X)/2),B=G((Z+X)/2),z=q((Z-X)/2),I=G((Z-X)/2),w=q((X-Z)/2),j=G((X-Z)/2);switch(H){case"XYX":Q.set(V*B,R*z,R*I,V*U);break;case"YZY":Q.set(R*I,V*B,R*z,V*U);break;case"ZXZ":Q.set(R*z,R*I,V*B,V*U);break;case"XZX":Q.set(V*B,R*j,R*w,V*U);break;case"YXY":Q.set(R*w,V*B,R*j,V*U);break;case"ZYZ":Q.set(R*j,R*w,V*B,V*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+H)}}function l8(Q,Z){switch(Z.constructor){case Float32Array:return Q;case Uint32Array:return Q/4294967295;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int32Array:return Math.max(Q/2147483647,-1);case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw Error("Invalid component type.")}}function h7(Q,Z){switch(Z.constructor){case Float32Array:return Q;case Uint32Array:return Math.round(Q*4294967295);case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int32Array:return Math.round(Q*2147483647);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw Error("Invalid component type.")}}var KW={DEG2RAD:j6,RAD2DEG:g6,generateUUID:u8,clamp:X8,euclideanModulo:lQ,mapLinear:i$,inverseLerp:o$,lerp:f6,damp:a$,pingpong:r$,smoothstep:t$,smootherstep:e$,randInt:QX,randFloat:ZX,randFloatSpread:JX,seededRandom:WX,degToRad:$X,radToDeg:XX,isPowerOfTwo:vQ,ceilPowerOfTwo:YX,floorPowerOfTwo:x5,setQuaternionFromProperEuler:HX,normalize:h7,denormalize:l8};class h0{constructor(Q=0,Z=0){h0.prototype.isVector2=!0,this.x=Q,this.y=Z}get width(){return this.x}set width(Q){this.x=Q}get height(){return this.y}set height(Q){this.y=Q}set(Q,Z){return this.x=Q,this.y=Z,this}setScalar(Q){return this.x=Q,this.y=Q,this}setX(Q){return this.x=Q,this}setY(Q){return this.y=Q,this}setComponent(Q,Z){switch(Q){case 0:this.x=Z;break;case 1:this.y=Z;break;default:throw Error("index is out of range: "+Q)}return this}getComponent(Q){switch(Q){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+Q)}}clone(){return new this.constructor(this.x,this.y)}copy(Q){return this.x=Q.x,this.y=Q.y,this}add(Q){return this.x+=Q.x,this.y+=Q.y,this}addScalar(Q){return this.x+=Q,this.y+=Q,this}addVectors(Q,Z){return this.x=Q.x+Z.x,this.y=Q.y+Z.y,this}addScaledVector(Q,Z){return this.x+=Q.x*Z,this.y+=Q.y*Z,this}sub(Q){return this.x-=Q.x,this.y-=Q.y,this}subScalar(Q){return this.x-=Q,this.y-=Q,this}subVectors(Q,Z){return this.x=Q.x-Z.x,this.y=Q.y-Z.y,this}multiply(Q){return this.x*=Q.x,this.y*=Q.y,this}multiplyScalar(Q){return this.x*=Q,this.y*=Q,this}divide(Q){return this.x/=Q.x,this.y/=Q.y,this}divideScalar(Q){return this.multiplyScalar(1/Q)}applyMatrix3(Q){let Z=this.x,J=this.y,X=Q.elements;return this.x=X[0]*Z+X[3]*J+X[6],this.y=X[1]*Z+X[4]*J+X[7],this}min(Q){return this.x=Math.min(this.x,Q.x),this.y=Math.min(this.y,Q.y),this}max(Q){return this.x=Math.max(this.x,Q.x),this.y=Math.max(this.y,Q.y),this}clamp(Q,Z){return this.x=Math.max(Q.x,Math.min(Z.x,this.x)),this.y=Math.max(Q.y,Math.min(Z.y,this.y)),this}clampScalar(Q,Z){return this.x=Math.max(Q,Math.min(Z,this.x)),this.y=Math.max(Q,Math.min(Z,this.y)),this}clampLength(Q,Z){let J=this.length();return this.divideScalar(J||1).multiplyScalar(Math.max(Q,Math.min(Z,J)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(Q){return this.x*Q.x+this.y*Q.y}cross(Q){return this.x*Q.y-this.y*Q.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(Q){let Z=Math.sqrt(this.lengthSq()*Q.lengthSq());if(Z===0)return Math.PI/2;let J=this.dot(Q)/Z;return Math.acos(X8(J,-1,1))}distanceTo(Q){return Math.sqrt(this.distanceToSquared(Q))}distanceToSquared(Q){let Z=this.x-Q.x,J=this.y-Q.y;return Z*Z+J*J}manhattanDistanceTo(Q){return Math.abs(this.x-Q.x)+Math.abs(this.y-Q.y)}setLength(Q){return this.normalize().multiplyScalar(Q)}lerp(Q,Z){return this.x+=(Q.x-this.x)*Z,this.y+=(Q.y-this.y)*Z,this}lerpVectors(Q,Z,J){return this.x=Q.x+(Z.x-Q.x)*J,this.y=Q.y+(Z.y-Q.y)*J,this}equals(Q){return Q.x===this.x&&Q.y===this.y}fromArray(Q,Z=0){return this.x=Q[Z],this.y=Q[Z+1],this}toArray(Q=[],Z=0){return Q[Z]=this.x,Q[Z+1]=this.y,Q}fromBufferAttribute(Q,Z){return this.x=Q.getX(Z),this.y=Q.getY(Z),this}rotateAround(Q,Z){let J=Math.cos(Z),X=Math.sin(Z),H=this.x-Q.x,q=this.y-Q.y;return this.x=H*J-q*X+Q.x,this.y=H*X+q*J+Q.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class C7{constructor(Q,Z,J,X,H,q,G,V,R){if(C7.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],Q!==void 0)this.set(Q,Z,J,X,H,q,G,V,R)}set(Q,Z,J,X,H,q,G,V,R){let U=this.elements;return U[0]=Q,U[1]=X,U[2]=G,U[3]=Z,U[4]=H,U[5]=V,U[6]=J,U[7]=q,U[8]=R,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(Q){let Z=this.elements,J=Q.elements;return Z[0]=J[0],Z[1]=J[1],Z[2]=J[2],Z[3]=J[3],Z[4]=J[4],Z[5]=J[5],Z[6]=J[6],Z[7]=J[7],Z[8]=J[8],this}extractBasis(Q,Z,J){return Q.setFromMatrix3Column(this,0),Z.setFromMatrix3Column(this,1),J.setFromMatrix3Column(this,2),this}setFromMatrix4(Q){let Z=Q.elements;return this.set(Z[0],Z[4],Z[8],Z[1],Z[5],Z[9],Z[2],Z[6],Z[10]),this}multiply(Q){return this.multiplyMatrices(this,Q)}premultiply(Q){return this.multiplyMatrices(Q,this)}multiplyMatrices(Q,Z){let J=Q.elements,X=Z.elements,H=this.elements,q=J[0],G=J[3],V=J[6],R=J[1],U=J[4],B=J[7],z=J[2],I=J[5],w=J[8],j=X[0],f=X[3],k=X[6],C=X[1],v=X[4],x=X[7],l=X[2],Z0=X[5],p=X[8];return H[0]=q*j+G*C+V*l,H[3]=q*f+G*v+V*Z0,H[6]=q*k+G*x+V*p,H[1]=R*j+U*C+B*l,H[4]=R*f+U*v+B*Z0,H[7]=R*k+U*x+B*p,H[2]=z*j+I*C+w*l,H[5]=z*f+I*v+w*Z0,H[8]=z*k+I*x+w*p,this}multiplyScalar(Q){let Z=this.elements;return Z[0]*=Q,Z[3]*=Q,Z[6]*=Q,Z[1]*=Q,Z[4]*=Q,Z[7]*=Q,Z[2]*=Q,Z[5]*=Q,Z[8]*=Q,this}determinant(){let Q=this.elements,Z=Q[0],J=Q[1],X=Q[2],H=Q[3],q=Q[4],G=Q[5],V=Q[6],R=Q[7],U=Q[8];return Z*q*U-Z*G*R-J*H*U+J*G*V+X*H*R-X*q*V}invert(){let Q=this.elements,Z=Q[0],J=Q[1],X=Q[2],H=Q[3],q=Q[4],G=Q[5],V=Q[6],R=Q[7],U=Q[8],B=U*q-G*R,z=G*V-U*H,I=R*H-q*V,w=Z*B+J*z+X*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let j=1/w;return Q[0]=B*j,Q[1]=(X*R-U*J)*j,Q[2]=(G*J-X*q)*j,Q[3]=z*j,Q[4]=(U*Z-X*V)*j,Q[5]=(X*H-G*Z)*j,Q[6]=I*j,Q[7]=(J*V-R*Z)*j,Q[8]=(q*Z-J*H)*j,this}transpose(){let Q,Z=this.elements;return Q=Z[1],Z[1]=Z[3],Z[3]=Q,Q=Z[2],Z[2]=Z[6],Z[6]=Q,Q=Z[5],Z[5]=Z[7],Z[7]=Q,this}getNormalMatrix(Q){return this.setFromMatrix4(Q).invert().transpose()}transposeIntoArray(Q){let Z=this.elements;return Q[0]=Z[0],Q[1]=Z[3],Q[2]=Z[6],Q[3]=Z[1],Q[4]=Z[4],Q[5]=Z[7],Q[6]=Z[2],Q[7]=Z[5],Q[8]=Z[8],this}setUvTransform(Q,Z,J,X,H,q,G){let V=Math.cos(H),R=Math.sin(H);return this.set(J*V,J*R,-J*(V*q+R*G)+q+Q,-X*R,X*V,-X*(-R*q+V*G)+G+Z,0,0,1),this}scale(Q,Z){return this.premultiply(KQ.makeScale(Q,Z)),this}rotate(Q){return this.premultiply(KQ.makeRotation(-Q)),this}translate(Q,Z){return this.premultiply(KQ.makeTranslation(Q,Z)),this}makeTranslation(Q,Z){if(Q.isVector2)this.set(1,0,Q.x,0,1,Q.y,0,0,1);else this.set(1,0,Q,0,1,Z,0,0,1);return this}makeRotation(Q){let Z=Math.cos(Q),J=Math.sin(Q);return this.set(Z,-J,0,J,Z,0,0,0,1),this}makeScale(Q,Z){return this.set(Q,0,0,0,Z,0,0,0,1),this}equals(Q){let Z=this.elements,J=Q.elements;for(let X=0;X<9;X++)if(Z[X]!==J[X])return!1;return!0}fromArray(Q,Z=0){for(let J=0;J<9;J++)this.elements[J]=Q[J+Z];return this}toArray(Q=[],Z=0){let J=this.elements;return Q[Z]=J[0],Q[Z+1]=J[1],Q[Z+2]=J[2],Q[Z+3]=J[3],Q[Z+4]=J[4],Q[Z+5]=J[5],Q[Z+6]=J[6],Q[Z+7]=J[7],Q[Z+8]=J[8],Q}clone(){return new this.constructor().fromArray(this.elements)}}var KQ=new C7;function qW(Q){for(let Z=Q.length-1;Z>=0;--Z)if(Q[Z]>=65535)return!0;return!1}function y5(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}function KX(){let Q=y5("canvas");return Q.style.display="block",Q}var VJ={};function x6(Q){if(Q in VJ)return;VJ[Q]=!0,console.warn(Q)}var FJ=new C7().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),GJ=new C7().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),W5={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(Q)=>Q,fromReference:(Q)=>Q},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(Q)=>Q.convertSRGBToLinear(),fromReference:(Q)=>Q.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(Q)=>Q.applyMatrix3(GJ),fromReference:(Q)=>Q.applyMatrix3(FJ)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(Q)=>Q.convertSRGBToLinear().applyMatrix3(GJ),fromReference:(Q)=>Q.applyMatrix3(FJ).convertLinearToSRGB()}},qX=new Set(["srgb-linear","display-p3-linear"]),p7={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(Q){if(!qX.has(Q))throw Error(`Unsupported working color space, "${Q}".`);this._workingColorSpace=Q},convert:function(Q,Z,J){if(this.enabled===!1||Z===J||!Z||!J)return Q;let X=W5[Z].toReference,H=W5[J].fromReference;return H(X(Q))},fromWorkingColorSpace:function(Q,Z){return this.convert(Q,this._workingColorSpace,Z)},toWorkingColorSpace:function(Q,Z){return this.convert(Q,Z,this._workingColorSpace)},getPrimaries:function(Q){return W5[Q].primaries},getTransfer:function(Q){if(Q==="")return"linear";return W5[Q].transfer}};function H6(Q){return Q<0.04045?Q*0.0773993808:Math.pow(Q*0.9478672986+0.0521327014,2.4)}function qQ(Q){return Q<0.0031308?Q*12.92:1.055*Math.pow(Q,0.41666)-0.055}var g9;class uQ{static getDataURL(Q){if(/^data:/i.test(Q.src))return Q.src;if(typeof HTMLCanvasElement>"u")return Q.src;let Z;if(Q instanceof HTMLCanvasElement)Z=Q;else{if(g9===void 0)g9=y5("canvas");g9.width=Q.width,g9.height=Q.height;let J=g9.getContext("2d");if(Q instanceof ImageData)J.putImageData(Q,0,0);else J.drawImage(Q,0,0,Q.width,Q.height);Z=g9}if(Z.width>2048||Z.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",Q),Z.toDataURL("image/jpeg",0.6);else return Z.toDataURL("image/png")}static sRGBToLinear(Q){if(typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap){let Z=y5("canvas");Z.width=Q.width,Z.height=Q.height;let J=Z.getContext("2d");J.drawImage(Q,0,0,Q.width,Q.height);let X=J.getImageData(0,0,Q.width,Q.height),H=X.data;for(let q=0;q<H.length;q++)H[q]=H6(H[q]/255)*255;return J.putImageData(X,0,0),Z}else if(Q.data){let Z=Q.data.slice(0);for(let J=0;J<Z.length;J++)if(Z instanceof Uint8Array||Z instanceof Uint8ClampedArray)Z[J]=Math.floor(H6(Z[J]/255)*255);else Z[J]=H6(Z[J]);return{data:Z,width:Q.width,height:Q.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),Q}}var VX=0;class cQ{constructor(Q=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VX++}),this.uuid=u8(),this.data=Q,this.version=0}set needsUpdate(Q){if(Q===!0)this.version++}toJSON(Q){let Z=Q===void 0||typeof Q==="string";if(!Z&&Q.images[this.uuid]!==void 0)return Q.images[this.uuid];let J={uuid:this.uuid,url:""},X=this.data;if(X!==null){let H;if(Array.isArray(X)){H=[];for(let q=0,G=X.length;q<G;q++)if(X[q].isDataTexture)H.push(VQ(X[q].image));else H.push(VQ(X[q]))}else H=VQ(X);J.url=H}if(!Z)Q.images[this.uuid]=J;return J}}function VQ(Q){if(typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap)return uQ.getDataURL(Q);else if(Q.data)return{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var FX=0;class I8 extends J9{constructor(Q=I8.DEFAULT_IMAGE,Z=I8.DEFAULT_MAPPING,J=1001,X=1001,H=1006,q=1008,G=1023,V=1009,R=I8.DEFAULT_ANISOTROPY,U=""){super();if(this.isTexture=!0,Object.defineProperty(this,"id",{value:FX++}),this.uuid=u8(),this.name="",this.source=new cQ(Q),this.mipmaps=[],this.mapping=Z,this.channel=0,this.wrapS=J,this.wrapT=X,this.magFilter=H,this.minFilter=q,this.anisotropy=R,this.format=G,this.internalFormat=null,this.type=V,this.offset=new h0(0,0),this.repeat=new h0(1,1),this.center=new h0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new C7,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof U==="string")this.colorSpace=U;else x6("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=U===3001?"srgb":"";this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(Q=null){this.source.data=Q}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(Q){return this.name=Q.name,this.source=Q.source,this.mipmaps=Q.mipmaps.slice(0),this.mapping=Q.mapping,this.channel=Q.channel,this.wrapS=Q.wrapS,this.wrapT=Q.wrapT,this.magFilter=Q.magFilter,this.minFilter=Q.minFilter,this.anisotropy=Q.anisotropy,this.format=Q.format,this.internalFormat=Q.internalFormat,this.type=Q.type,this.offset.copy(Q.offset),this.repeat.copy(Q.repeat),this.center.copy(Q.center),this.rotation=Q.rotation,this.matrixAutoUpdate=Q.matrixAutoUpdate,this.matrix.copy(Q.matrix),this.generateMipmaps=Q.generateMipmaps,this.premultiplyAlpha=Q.premultiplyAlpha,this.flipY=Q.flipY,this.unpackAlignment=Q.unpackAlignment,this.colorSpace=Q.colorSpace,this.userData=JSON.parse(JSON.stringify(Q.userData)),this.needsUpdate=!0,this}toJSON(Q){let Z=Q===void 0||typeof Q==="string";if(!Z&&Q.textures[this.uuid]!==void 0)return Q.textures[this.uuid];let J={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(Q).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)J.userData=this.userData;if(!Z)Q.textures[this.uuid]=J;return J}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(Q){if(this.mapping!==300)return Q;if(Q.applyMatrix3(this.matrix),Q.x<0||Q.x>1)switch(this.wrapS){case 1000:Q.x=Q.x-Math.floor(Q.x);break;case 1001:Q.x=Q.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(Q.x)%2)===1)Q.x=Math.ceil(Q.x)-Q.x;else Q.x=Q.x-Math.floor(Q.x);break}if(Q.y<0||Q.y>1)switch(this.wrapT){case 1000:Q.y=Q.y-Math.floor(Q.y);break;case 1001:Q.y=Q.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(Q.y)%2)===1)Q.y=Math.ceil(Q.y)-Q.y;else Q.y=Q.y-Math.floor(Q.y);break}if(this.flipY)Q.y=1-Q.y;return Q}set needsUpdate(Q){if(Q===!0)this.version++,this.source.needsUpdate=!0}get encoding(){return x6("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace==="srgb"?3001:3000}set encoding(Q){x6("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=Q===3001?"srgb":""}}I8.DEFAULT_IMAGE=null;I8.DEFAULT_MAPPING=300;I8.DEFAULT_ANISOTROPY=1;class Y8{constructor(Q=0,Z=0,J=0,X=1){Y8.prototype.isVector4=!0,this.x=Q,this.y=Z,this.z=J,this.w=X}get width(){return this.z}set width(Q){this.z=Q}get height(){return this.w}set height(Q){this.w=Q}set(Q,Z,J,X){return this.x=Q,this.y=Z,this.z=J,this.w=X,this}setScalar(Q){return this.x=Q,this.y=Q,this.z=Q,this.w=Q,this}setX(Q){return this.x=Q,this}setY(Q){return this.y=Q,this}setZ(Q){return this.z=Q,this}setW(Q){return this.w=Q,this}setComponent(Q,Z){switch(Q){case 0:this.x=Z;break;case 1:this.y=Z;break;case 2:this.z=Z;break;case 3:this.w=Z;break;default:throw Error("index is out of range: "+Q)}return this}getComponent(Q){switch(Q){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+Q)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(Q){return this.x=Q.x,this.y=Q.y,this.z=Q.z,this.w=Q.w!==void 0?Q.w:1,this}add(Q){return this.x+=Q.x,this.y+=Q.y,this.z+=Q.z,this.w+=Q.w,this}addScalar(Q){return this.x+=Q,this.y+=Q,this.z+=Q,this.w+=Q,this}addVectors(Q,Z){return this.x=Q.x+Z.x,this.y=Q.y+Z.y,this.z=Q.z+Z.z,this.w=Q.w+Z.w,this}addScaledVector(Q,Z){return this.x+=Q.x*Z,this.y+=Q.y*Z,this.z+=Q.z*Z,this.w+=Q.w*Z,this}sub(Q){return this.x-=Q.x,this.y-=Q.y,this.z-=Q.z,this.w-=Q.w,this}subScalar(Q){return this.x-=Q,this.y-=Q,this.z-=Q,this.w-=Q,this}subVectors(Q,Z){return this.x=Q.x-Z.x,this.y=Q.y-Z.y,this.z=Q.z-Z.z,this.w=Q.w-Z.w,this}multiply(Q){return this.x*=Q.x,this.y*=Q.y,this.z*=Q.z,this.w*=Q.w,this}multiplyScalar(Q){return this.x*=Q,this.y*=Q,this.z*=Q,this.w*=Q,this}applyMatrix4(Q){let Z=this.x,J=this.y,X=this.z,H=this.w,q=Q.elements;return this.x=q[0]*Z+q[4]*J+q[8]*X+q[12]*H,this.y=q[1]*Z+q[5]*J+q[9]*X+q[13]*H,this.z=q[2]*Z+q[6]*J+q[10]*X+q[14]*H,this.w=q[3]*Z+q[7]*J+q[11]*X+q[15]*H,this}divideScalar(Q){return this.multiplyScalar(1/Q)}setAxisAngleFromQuaternion(Q){this.w=2*Math.acos(Q.w);let Z=Math.sqrt(1-Q.w*Q.w);if(Z<0.0001)this.x=1,this.y=0,this.z=0;else this.x=Q.x/Z,this.y=Q.y/Z,this.z=Q.z/Z;return this}setAxisAngleFromRotationMatrix(Q){let Z,J,X,H,q=0.01,G=0.1,V=Q.elements,R=V[0],U=V[4],B=V[8],z=V[1],I=V[5],w=V[9],j=V[2],f=V[6],k=V[10];if(Math.abs(U-z)<0.01&&Math.abs(B-j)<0.01&&Math.abs(w-f)<0.01){if(Math.abs(U+z)<0.1&&Math.abs(B+j)<0.1&&Math.abs(w+f)<0.1&&Math.abs(R+I+k-3)<0.1)return this.set(1,0,0,0),this;Z=Math.PI;let v=(R+1)/2,x=(I+1)/2,l=(k+1)/2,Z0=(U+z)/4,p=(B+j)/4,$0=(w+f)/4;if(v>x&&v>l)if(v<0.01)J=0,X=0.707106781,H=0.707106781;else J=Math.sqrt(v),X=Z0/J,H=p/J;else if(x>l)if(x<0.01)J=0.707106781,X=0,H=0.707106781;else X=Math.sqrt(x),J=Z0/X,H=$0/X;else if(l<0.01)J=0.707106781,X=0.707106781,H=0;else H=Math.sqrt(l),J=p/H,X=$0/H;return this.set(J,X,H,Z),this}let C=Math.sqrt((f-w)*(f-w)+(B-j)*(B-j)+(z-U)*(z-U));if(Math.abs(C)<0.001)C=1;return this.x=(f-w)/C,this.y=(B-j)/C,this.z=(z-U)/C,this.w=Math.acos((R+I+k-1)/2),this}min(Q){return this.x=Math.min(this.x,Q.x),this.y=Math.min(this.y,Q.y),this.z=Math.min(this.z,Q.z),this.w=Math.min(this.w,Q.w),this}max(Q){return this.x=Math.max(this.x,Q.x),this.y=Math.max(this.y,Q.y),this.z=Math.max(this.z,Q.z),this.w=Math.max(this.w,Q.w),this}clamp(Q,Z){return this.x=Math.max(Q.x,Math.min(Z.x,this.x)),this.y=Math.max(Q.y,Math.min(Z.y,this.y)),this.z=Math.max(Q.z,Math.min(Z.z,this.z)),this.w=Math.max(Q.w,Math.min(Z.w,this.w)),this}clampScalar(Q,Z){return this.x=Math.max(Q,Math.min(Z,this.x)),this.y=Math.max(Q,Math.min(Z,this.y)),this.z=Math.max(Q,Math.min(Z,this.z)),this.w=Math.max(Q,Math.min(Z,this.w)),this}clampLength(Q,Z){let J=this.length();return this.divideScalar(J||1).multiplyScalar(Math.max(Q,Math.min(Z,J)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(Q){return this.x*Q.x+this.y*Q.y+this.z*Q.z+this.w*Q.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(Q){return this.normalize().multiplyScalar(Q)}lerp(Q,Z){return this.x+=(Q.x-this.x)*Z,this.y+=(Q.y-this.y)*Z,this.z+=(Q.z-this.z)*Z,this.w+=(Q.w-this.w)*Z,this}lerpVectors(Q,Z,J){return this.x=Q.x+(Z.x-Q.x)*J,this.y=Q.y+(Z.y-Q.y)*J,this.z=Q.z+(Z.z-Q.z)*J,this.w=Q.w+(Z.w-Q.w)*J,this}equals(Q){return Q.x===this.x&&Q.y===this.y&&Q.z===this.z&&Q.w===this.w}fromArray(Q,Z=0){return this.x=Q[Z],this.y=Q[Z+1],this.z=Q[Z+2],this.w=Q[Z+3],this}toArray(Q=[],Z=0){return Q[Z]=this.x,Q[Z+1]=this.y,Q[Z+2]=this.z,Q[Z+3]=this.w,Q}fromBufferAttribute(Q,Z){return this.x=Q.getX(Z),this.y=Q.getY(Z),this.z=Q.getZ(Z),this.w=Q.getW(Z),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VW extends J9{constructor(Q=1,Z=1,J={}){super();this.isRenderTarget=!0,this.width=Q,this.height=Z,this.depth=1,this.scissor=new Y8(0,0,Q,Z),this.scissorTest=!1,this.viewport=new Y8(0,0,Q,Z);let X={width:Q,height:Z,depth:1};if(J.encoding!==void 0)x6("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),J.colorSpace=J.encoding===3001?"srgb":"";J=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},J),this.texture=new I8(X,J.mapping,J.wrapS,J.wrapT,J.magFilter,J.minFilter,J.format,J.type,J.anisotropy,J.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=J.generateMipmaps,this.texture.internalFormat=J.internalFormat,this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.depthTexture=J.depthTexture,this.samples=J.samples}setSize(Q,Z,J=1){if(this.width!==Q||this.height!==Z||this.depth!==J)this.width=Q,this.height=Z,this.depth=J,this.texture.image.width=Q,this.texture.image.height=Z,this.texture.image.depth=J,this.dispose();this.viewport.set(0,0,Q,Z),this.scissor.set(0,0,Q,Z)}clone(){return new this.constructor().copy(this)}copy(Q){this.width=Q.width,this.height=Q.height,this.depth=Q.depth,this.scissor.copy(Q.scissor),this.scissorTest=Q.scissorTest,this.viewport.copy(Q.viewport),this.texture=Q.texture.clone(),this.texture.isRenderTargetTexture=!0;let Z=Object.assign({},Q.texture.image);if(this.texture.source=new cQ(Z),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,Q.depthTexture!==null)this.depthTexture=Q.depthTexture.clone();return this.samples=Q.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class R9 extends VW{constructor(Q=1,Z=1,J={}){super(Q,Z,J);this.isWebGLRenderTarget=!0}}class sQ extends I8{constructor(Q=null,Z=1,J=1,X=1){super(null);this.isDataArrayTexture=!0,this.image={data:Q,width:Z,height:J,depth:X},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class FW extends I8{constructor(Q=null,Z=1,J=1,X=1){super(null);this.isData3DTexture=!0,this.image={data:Q,width:Z,height:J,depth:X},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c8{constructor(Q=0,Z=0,J=0,X=1){this.isQuaternion=!0,this._x=Q,this._y=Z,this._z=J,this._w=X}static slerpFlat(Q,Z,J,X,H,q,G){let V=J[X+0],R=J[X+1],U=J[X+2],B=J[X+3],z=H[q+0],I=H[q+1],w=H[q+2],j=H[q+3];if(G===0){Q[Z+0]=V,Q[Z+1]=R,Q[Z+2]=U,Q[Z+3]=B;return}if(G===1){Q[Z+0]=z,Q[Z+1]=I,Q[Z+2]=w,Q[Z+3]=j;return}if(B!==j||V!==z||R!==I||U!==w){let f=1-G,k=V*z+R*I+U*w+B*j,C=k>=0?1:-1,v=1-k*k;if(v>Number.EPSILON){let l=Math.sqrt(v),Z0=Math.atan2(l,k*C);f=Math.sin(f*Z0)/l,G=Math.sin(G*Z0)/l}let x=G*C;if(V=V*f+z*x,R=R*f+I*x,U=U*f+w*x,B=B*f+j*x,f===1-G){let l=1/Math.sqrt(V*V+R*R+U*U+B*B);V*=l,R*=l,U*=l,B*=l}}Q[Z]=V,Q[Z+1]=R,Q[Z+2]=U,Q[Z+3]=B}static multiplyQuaternionsFlat(Q,Z,J,X,H,q){let G=J[X],V=J[X+1],R=J[X+2],U=J[X+3],B=H[q],z=H[q+1],I=H[q+2],w=H[q+3];return Q[Z]=G*w+U*B+V*I-R*z,Q[Z+1]=V*w+U*z+R*B-G*I,Q[Z+2]=R*w+U*I+G*z-V*B,Q[Z+3]=U*w-G*B-V*z-R*I,Q}get x(){return this._x}set x(Q){this._x=Q,this._onChangeCallback()}get y(){return this._y}set y(Q){this._y=Q,this._onChangeCallback()}get z(){return this._z}set z(Q){this._z=Q,this._onChangeCallback()}get w(){return this._w}set w(Q){this._w=Q,this._onChangeCallback()}set(Q,Z,J,X){return this._x=Q,this._y=Z,this._z=J,this._w=X,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(Q){return this._x=Q.x,this._y=Q.y,this._z=Q.z,this._w=Q.w,this._onChangeCallback(),this}setFromEuler(Q,Z=!0){let{_x:J,_y:X,_z:H,_order:q}=Q,G=Math.cos,V=Math.sin,R=G(J/2),U=G(X/2),B=G(H/2),z=V(J/2),I=V(X/2),w=V(H/2);switch(q){case"XYZ":this._x=z*U*B+R*I*w,this._y=R*I*B-z*U*w,this._z=R*U*w+z*I*B,this._w=R*U*B-z*I*w;break;case"YXZ":this._x=z*U*B+R*I*w,this._y=R*I*B-z*U*w,this._z=R*U*w-z*I*B,this._w=R*U*B+z*I*w;break;case"ZXY":this._x=z*U*B-R*I*w,this._y=R*I*B+z*U*w,this._z=R*U*w+z*I*B,this._w=R*U*B-z*I*w;break;case"ZYX":this._x=z*U*B-R*I*w,this._y=R*I*B+z*U*w,this._z=R*U*w-z*I*B,this._w=R*U*B+z*I*w;break;case"YZX":this._x=z*U*B+R*I*w,this._y=R*I*B+z*U*w,this._z=R*U*w-z*I*B,this._w=R*U*B-z*I*w;break;case"XZY":this._x=z*U*B-R*I*w,this._y=R*I*B-z*U*w,this._z=R*U*w+z*I*B,this._w=R*U*B+z*I*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+q)}if(Z===!0)this._onChangeCallback();return this}setFromAxisAngle(Q,Z){let J=Z/2,X=Math.sin(J);return this._x=Q.x*X,this._y=Q.y*X,this._z=Q.z*X,this._w=Math.cos(J),this._onChangeCallback(),this}setFromRotationMatrix(Q){let Z=Q.elements,J=Z[0],X=Z[4],H=Z[8],q=Z[1],G=Z[5],V=Z[9],R=Z[2],U=Z[6],B=Z[10],z=J+G+B;if(z>0){let I=0.5/Math.sqrt(z+1);this._w=0.25/I,this._x=(U-V)*I,this._y=(H-R)*I,this._z=(q-X)*I}else if(J>G&&J>B){let I=2*Math.sqrt(1+J-G-B);this._w=(U-V)/I,this._x=0.25*I,this._y=(X+q)/I,this._z=(H+R)/I}else if(G>B){let I=2*Math.sqrt(1+G-J-B);this._w=(H-R)/I,this._x=(X+q)/I,this._y=0.25*I,this._z=(V+U)/I}else{let I=2*Math.sqrt(1+B-J-G);this._w=(q-X)/I,this._x=(H+R)/I,this._y=(V+U)/I,this._z=0.25*I}return this._onChangeCallback(),this}setFromUnitVectors(Q,Z){let J=Q.dot(Z)+1;if(J<Number.EPSILON)if(J=0,Math.abs(Q.x)>Math.abs(Q.z))this._x=-Q.y,this._y=Q.x,this._z=0,this._w=J;else this._x=0,this._y=-Q.z,this._z=Q.y,this._w=J;else this._x=Q.y*Z.z-Q.z*Z.y,this._y=Q.z*Z.x-Q.x*Z.z,this._z=Q.x*Z.y-Q.y*Z.x,this._w=J;return this.normalize()}angleTo(Q){return 2*Math.acos(Math.abs(X8(this.dot(Q),-1,1)))}rotateTowards(Q,Z){let J=this.angleTo(Q);if(J===0)return this;let X=Math.min(1,Z/J);return this.slerp(Q,X),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(Q){return this._x*Q._x+this._y*Q._y+this._z*Q._z+this._w*Q._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let Q=this.length();if(Q===0)this._x=0,this._y=0,this._z=0,this._w=1;else Q=1/Q,this._x=this._x*Q,this._y=this._y*Q,this._z=this._z*Q,this._w=this._w*Q;return this._onChangeCallback(),this}multiply(Q){return this.multiplyQuaternions(this,Q)}premultiply(Q){return this.multiplyQuaternions(Q,this)}multiplyQuaternions(Q,Z){let{_x:J,_y:X,_z:H,_w:q}=Q,G=Z._x,V=Z._y,R=Z._z,U=Z._w;return this._x=J*U+q*G+X*R-H*V,this._y=X*U+q*V+H*G-J*R,this._z=H*U+q*R+J*V-X*G,this._w=q*U-J*G-X*V-H*R,this._onChangeCallback(),this}slerp(Q,Z){if(Z===0)return this;if(Z===1)return this.copy(Q);let J=this._x,X=this._y,H=this._z,q=this._w,G=q*Q._w+J*Q._x+X*Q._y+H*Q._z;if(G<0)this._w=-Q._w,this._x=-Q._x,this._y=-Q._y,this._z=-Q._z,G=-G;else this.copy(Q);if(G>=1)return this._w=q,this._x=J,this._y=X,this._z=H,this;let V=1-G*G;if(V<=Number.EPSILON){let I=1-Z;return this._w=I*q+Z*this._w,this._x=I*J+Z*this._x,this._y=I*X+Z*this._y,this._z=I*H+Z*this._z,this.normalize(),this}let R=Math.sqrt(V),U=Math.atan2(R,G),B=Math.sin((1-Z)*U)/R,z=Math.sin(Z*U)/R;return this._w=q*B+this._w*z,this._x=J*B+this._x*z,this._y=X*B+this._y*z,this._z=H*B+this._z*z,this._onChangeCallback(),this}slerpQuaternions(Q,Z,J){return this.copy(Q).slerp(Z,J)}random(){let Q=Math.random(),Z=Math.sqrt(1-Q),J=Math.sqrt(Q),X=2*Math.PI*Math.random(),H=2*Math.PI*Math.random();return this.set(Z*Math.cos(X),J*Math.sin(H),J*Math.cos(H),Z*Math.sin(X))}equals(Q){return Q._x===this._x&&Q._y===this._y&&Q._z===this._z&&Q._w===this._w}fromArray(Q,Z=0){return this._x=Q[Z],this._y=Q[Z+1],this._z=Q[Z+2],this._w=Q[Z+3],this._onChangeCallback(),this}toArray(Q=[],Z=0){return Q[Z]=this._x,Q[Z+1]=this._y,Q[Z+2]=this._z,Q[Z+3]=this._w,Q}fromBufferAttribute(Q,Z){return this._x=Q.getX(Z),this._y=Q.getY(Z),this._z=Q.getZ(Z),this._w=Q.getW(Z),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(Q){return this._onChangeCallback=Q,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q0{constructor(Q=0,Z=0,J=0){Q0.prototype.isVector3=!0,this.x=Q,this.y=Z,this.z=J}set(Q,Z,J){if(J===void 0)J=this.z;return this.x=Q,this.y=Z,this.z=J,this}setScalar(Q){return this.x=Q,this.y=Q,this.z=Q,this}setX(Q){return this.x=Q,this}setY(Q){return this.y=Q,this}setZ(Q){return this.z=Q,this}setComponent(Q,Z){switch(Q){case 0:this.x=Z;break;case 1:this.y=Z;break;case 2:this.z=Z;break;default:throw Error("index is out of range: "+Q)}return this}getComponent(Q){switch(Q){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+Q)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(Q){return this.x=Q.x,this.y=Q.y,this.z=Q.z,this}add(Q){return this.x+=Q.x,this.y+=Q.y,this.z+=Q.z,this}addScalar(Q){return this.x+=Q,this.y+=Q,this.z+=Q,this}addVectors(Q,Z){return this.x=Q.x+Z.x,this.y=Q.y+Z.y,this.z=Q.z+Z.z,this}addScaledVector(Q,Z){return this.x+=Q.x*Z,this.y+=Q.y*Z,this.z+=Q.z*Z,this}sub(Q){return this.x-=Q.x,this.y-=Q.y,this.z-=Q.z,this}subScalar(Q){return this.x-=Q,this.y-=Q,this.z-=Q,this}subVectors(Q,Z){return this.x=Q.x-Z.x,this.y=Q.y-Z.y,this.z=Q.z-Z.z,this}multiply(Q){return this.x*=Q.x,this.y*=Q.y,this.z*=Q.z,this}multiplyScalar(Q){return this.x*=Q,this.y*=Q,this.z*=Q,this}multiplyVectors(Q,Z){return this.x=Q.x*Z.x,this.y=Q.y*Z.y,this.z=Q.z*Z.z,this}applyEuler(Q){return this.applyQuaternion(NJ.setFromEuler(Q))}applyAxisAngle(Q,Z){return this.applyQuaternion(NJ.setFromAxisAngle(Q,Z))}applyMatrix3(Q){let Z=this.x,J=this.y,X=this.z,H=Q.elements;return this.x=H[0]*Z+H[3]*J+H[6]*X,this.y=H[1]*Z+H[4]*J+H[7]*X,this.z=H[2]*Z+H[5]*J+H[8]*X,this}applyNormalMatrix(Q){return this.applyMatrix3(Q).normalize()}applyMatrix4(Q){let Z=this.x,J=this.y,X=this.z,H=Q.elements,q=1/(H[3]*Z+H[7]*J+H[11]*X+H[15]);return this.x=(H[0]*Z+H[4]*J+H[8]*X+H[12])*q,this.y=(H[1]*Z+H[5]*J+H[9]*X+H[13])*q,this.z=(H[2]*Z+H[6]*J+H[10]*X+H[14])*q,this}applyQuaternion(Q){let Z=this.x,J=this.y,X=this.z,H=Q.x,q=Q.y,G=Q.z,V=Q.w,R=2*(q*X-G*J),U=2*(G*Z-H*X),B=2*(H*J-q*Z);return this.x=Z+V*R+q*B-G*U,this.y=J+V*U+G*R-H*B,this.z=X+V*B+H*U-q*R,this}project(Q){return this.applyMatrix4(Q.matrixWorldInverse).applyMatrix4(Q.projectionMatrix)}unproject(Q){return this.applyMatrix4(Q.projectionMatrixInverse).applyMatrix4(Q.matrixWorld)}transformDirection(Q){let Z=this.x,J=this.y,X=this.z,H=Q.elements;return this.x=H[0]*Z+H[4]*J+H[8]*X,this.y=H[1]*Z+H[5]*J+H[9]*X,this.z=H[2]*Z+H[6]*J+H[10]*X,this.normalize()}divide(Q){return this.x/=Q.x,this.y/=Q.y,this.z/=Q.z,this}divideScalar(Q){return this.multiplyScalar(1/Q)}min(Q){return this.x=Math.min(this.x,Q.x),this.y=Math.min(this.y,Q.y),this.z=Math.min(this.z,Q.z),this}max(Q){return this.x=Math.max(this.x,Q.x),this.y=Math.max(this.y,Q.y),this.z=Math.max(this.z,Q.z),this}clamp(Q,Z){return this.x=Math.max(Q.x,Math.min(Z.x,this.x)),this.y=Math.max(Q.y,Math.min(Z.y,this.y)),this.z=Math.max(Q.z,Math.min(Z.z,this.z)),this}clampScalar(Q,Z){return this.x=Math.max(Q,Math.min(Z,this.x)),this.y=Math.max(Q,Math.min(Z,this.y)),this.z=Math.max(Q,Math.min(Z,this.z)),this}clampLength(Q,Z){let J=this.length();return this.divideScalar(J||1).multiplyScalar(Math.max(Q,Math.min(Z,J)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(Q){return this.x*Q.x+this.y*Q.y+this.z*Q.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(Q){return this.normalize().multiplyScalar(Q)}lerp(Q,Z){return this.x+=(Q.x-this.x)*Z,this.y+=(Q.y-this.y)*Z,this.z+=(Q.z-this.z)*Z,this}lerpVectors(Q,Z,J){return this.x=Q.x+(Z.x-Q.x)*J,this.y=Q.y+(Z.y-Q.y)*J,this.z=Q.z+(Z.z-Q.z)*J,this}cross(Q){return this.crossVectors(this,Q)}crossVectors(Q,Z){let{x:J,y:X,z:H}=Q,q=Z.x,G=Z.y,V=Z.z;return this.x=X*V-H*G,this.y=H*q-J*V,this.z=J*G-X*q,this}projectOnVector(Q){let Z=Q.lengthSq();if(Z===0)return this.set(0,0,0);let J=Q.dot(this)/Z;return this.copy(Q).multiplyScalar(J)}projectOnPlane(Q){return FQ.copy(this).projectOnVector(Q),this.sub(FQ)}reflect(Q){return this.sub(FQ.copy(Q).multiplyScalar(2*this.dot(Q)))}angleTo(Q){let Z=Math.sqrt(this.lengthSq()*Q.lengthSq());if(Z===0)return Math.PI/2;let J=this.dot(Q)/Z;return Math.acos(X8(J,-1,1))}distanceTo(Q){return Math.sqrt(this.distanceToSquared(Q))}distanceToSquared(Q){let Z=this.x-Q.x,J=this.y-Q.y,X=this.z-Q.z;return Z*Z+J*J+X*X}manhattanDistanceTo(Q){return Math.abs(this.x-Q.x)+Math.abs(this.y-Q.y)+Math.abs(this.z-Q.z)}setFromSpherical(Q){return this.setFromSphericalCoords(Q.radius,Q.phi,Q.theta)}setFromSphericalCoords(Q,Z,J){let X=Math.sin(Z)*Q;return this.x=X*Math.sin(J),this.y=Math.cos(Z)*Q,this.z=X*Math.cos(J),this}setFromCylindrical(Q){return this.setFromCylindricalCoords(Q.radius,Q.theta,Q.y)}setFromCylindricalCoords(Q,Z,J){return this.x=Q*Math.sin(Z),this.y=J,this.z=Q*Math.cos(Z),this}setFromMatrixPosition(Q){let Z=Q.elements;return this.x=Z[12],this.y=Z[13],this.z=Z[14],this}setFromMatrixScale(Q){let Z=this.setFromMatrixColumn(Q,0).length(),J=this.setFromMatrixColumn(Q,1).length(),X=this.setFromMatrixColumn(Q,2).length();return this.x=Z,this.y=J,this.z=X,this}setFromMatrixColumn(Q,Z){return this.fromArray(Q.elements,Z*4)}setFromMatrix3Column(Q,Z){return this.fromArray(Q.elements,Z*3)}setFromEuler(Q){return this.x=Q._x,this.y=Q._y,this.z=Q._z,this}setFromColor(Q){return this.x=Q.r,this.y=Q.g,this.z=Q.b,this}equals(Q){return Q.x===this.x&&Q.y===this.y&&Q.z===this.z}fromArray(Q,Z=0){return this.x=Q[Z],this.y=Q[Z+1],this.z=Q[Z+2],this}toArray(Q=[],Z=0){return Q[Z]=this.x,Q[Z+1]=this.y,Q[Z+2]=this.z,Q}fromBufferAttribute(Q,Z){return this.x=Q.getX(Z),this.y=Q.getY(Z),this.z=Q.getZ(Z),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let Q=(Math.random()-0.5)*2,Z=Math.random()*Math.PI*2,J=Math.sqrt(1-Q**2);return this.x=J*Math.cos(Z),this.y=J*Math.sin(Z),this.z=Q,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var FQ=new Q0,NJ=new c8;class D9{constructor(Q=new Q0(1/0,1/0,1/0),Z=new Q0(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=Q,this.max=Z}set(Q,Z){return this.min.copy(Q),this.max.copy(Z),this}setFromArray(Q){this.makeEmpty();for(let Z=0,J=Q.length;Z<J;Z+=3)this.expandByPoint(x8.fromArray(Q,Z));return this}setFromBufferAttribute(Q){this.makeEmpty();for(let Z=0,J=Q.count;Z<J;Z++)this.expandByPoint(x8.fromBufferAttribute(Q,Z));return this}setFromPoints(Q){this.makeEmpty();for(let Z=0,J=Q.length;Z<J;Z++)this.expandByPoint(Q[Z]);return this}setFromCenterAndSize(Q,Z){let J=x8.copy(Z).multiplyScalar(0.5);return this.min.copy(Q).sub(J),this.max.copy(Q).add(J),this}setFromObject(Q,Z=!1){return this.makeEmpty(),this.expandByObject(Q,Z)}clone(){return new this.constructor().copy(this)}copy(Q){return this.min.copy(Q.min),this.max.copy(Q.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(Q){return this.isEmpty()?Q.set(0,0,0):Q.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(Q){return this.isEmpty()?Q.set(0,0,0):Q.subVectors(this.max,this.min)}expandByPoint(Q){return this.min.min(Q),this.max.max(Q),this}expandByVector(Q){return this.min.sub(Q),this.max.add(Q),this}expandByScalar(Q){return this.min.addScalar(-Q),this.max.addScalar(Q),this}expandByObject(Q,Z=!1){Q.updateWorldMatrix(!1,!1);let J=Q.geometry;if(J!==void 0){let H=J.getAttribute("position");if(Z===!0&&H!==void 0&&Q.isInstancedMesh!==!0)for(let q=0,G=H.count;q<G;q++){if(Q.isMesh===!0)Q.getVertexPosition(q,x8);else x8.fromBufferAttribute(H,q);x8.applyMatrix4(Q.matrixWorld),this.expandByPoint(x8)}else{if(Q.boundingBox!==void 0){if(Q.boundingBox===null)Q.computeBoundingBox();$5.copy(Q.boundingBox)}else{if(J.boundingBox===null)J.computeBoundingBox();$5.copy(J.boundingBox)}$5.applyMatrix4(Q.matrixWorld),this.union($5)}}let X=Q.children;for(let H=0,q=X.length;H<q;H++)this.expandByObject(X[H],Z);return this}containsPoint(Q){return Q.x<this.min.x||Q.x>this.max.x||Q.y<this.min.y||Q.y>this.max.y||Q.z<this.min.z||Q.z>this.max.z?!1:!0}containsBox(Q){return this.min.x<=Q.min.x&&Q.max.x<=this.max.x&&this.min.y<=Q.min.y&&Q.max.y<=this.max.y&&this.min.z<=Q.min.z&&Q.max.z<=this.max.z}getParameter(Q,Z){return Z.set((Q.x-this.min.x)/(this.max.x-this.min.x),(Q.y-this.min.y)/(this.max.y-this.min.y),(Q.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(Q){return Q.max.x<this.min.x||Q.min.x>this.max.x||Q.max.y<this.min.y||Q.min.y>this.max.y||Q.max.z<this.min.z||Q.min.z>this.max.z?!1:!0}intersectsSphere(Q){return this.clampPoint(Q.center,x8),x8.distanceToSquared(Q.center)<=Q.radius*Q.radius}intersectsPlane(Q){let Z,J;if(Q.normal.x>0)Z=Q.normal.x*this.min.x,J=Q.normal.x*this.max.x;else Z=Q.normal.x*this.max.x,J=Q.normal.x*this.min.x;if(Q.normal.y>0)Z+=Q.normal.y*this.min.y,J+=Q.normal.y*this.max.y;else Z+=Q.normal.y*this.max.y,J+=Q.normal.y*this.min.y;if(Q.normal.z>0)Z+=Q.normal.z*this.min.z,J+=Q.normal.z*this.max.z;else Z+=Q.normal.z*this.max.z,J+=Q.normal.z*this.min.z;return Z<=-Q.constant&&J>=-Q.constant}intersectsTriangle(Q){if(this.isEmpty())return!1;this.getCenter(k6),X5.subVectors(this.max,k6),p9.subVectors(Q.a,k6),m9.subVectors(Q.b,k6),d9.subVectors(Q.c,k6),q9.subVectors(m9,p9),V9.subVectors(d9,m9),I9.subVectors(p9,d9);let Z=[0,-q9.z,q9.y,0,-V9.z,V9.y,0,-I9.z,I9.y,q9.z,0,-q9.x,V9.z,0,-V9.x,I9.z,0,-I9.x,-q9.y,q9.x,0,-V9.y,V9.x,0,-I9.y,I9.x,0];if(!GQ(Z,p9,m9,d9,X5))return!1;if(Z=[1,0,0,0,1,0,0,0,1],!GQ(Z,p9,m9,d9,X5))return!1;return Y5.crossVectors(q9,V9),Z=[Y5.x,Y5.y,Y5.z],GQ(Z,p9,m9,d9,X5)}clampPoint(Q,Z){return Z.copy(Q).clamp(this.min,this.max)}distanceToPoint(Q){return this.clampPoint(Q,x8).distanceTo(Q)}getBoundingSphere(Q){if(this.isEmpty())Q.makeEmpty();else this.getCenter(Q.center),Q.radius=this.getSize(x8).length()*0.5;return Q}intersect(Q){if(this.min.max(Q.min),this.max.min(Q.max),this.isEmpty())this.makeEmpty();return this}union(Q){return this.min.min(Q.min),this.max.max(Q.max),this}applyMatrix4(Q){if(this.isEmpty())return this;return r8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(Q),r8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(Q),r8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(Q),r8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(Q),r8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(Q),r8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(Q),r8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(Q),r8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(Q),this.setFromPoints(r8),this}translate(Q){return this.min.add(Q),this.max.add(Q),this}equals(Q){return Q.min.equals(this.min)&&Q.max.equals(this.max)}}var r8=[new Q0,new Q0,new Q0,new Q0,new Q0,new Q0,new Q0,new Q0],x8=new Q0,$5=new D9,p9=new Q0,m9=new Q0,d9=new Q0,q9=new Q0,V9=new Q0,I9=new Q0,k6=new Q0,X5=new Q0,Y5=new Q0,L9=new Q0;function GQ(Q,Z,J,X,H){for(let q=0,G=Q.length-3;q<=G;q+=3){L9.fromArray(Q,q);let V=H.x*Math.abs(L9.x)+H.y*Math.abs(L9.y)+H.z*Math.abs(L9.z),R=Z.dot(L9),U=J.dot(L9),B=X.dot(L9);if(Math.max(-Math.max(R,U,B),Math.min(R,U,B))>V)return!1}return!0}var GX=new D9,O6=new Q0,NQ=new Q0;class c6{constructor(Q=new Q0,Z=-1){this.isSphere=!0,this.center=Q,this.radius=Z}set(Q,Z){return this.center.copy(Q),this.radius=Z,this}setFromPoints(Q,Z){let J=this.center;if(Z!==void 0)J.copy(Z);else GX.setFromPoints(Q).getCenter(J);let X=0;for(let H=0,q=Q.length;H<q;H++)X=Math.max(X,J.distanceToSquared(Q[H]));return this.radius=Math.sqrt(X),this}copy(Q){return this.center.copy(Q.center),this.radius=Q.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(Q){return Q.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(Q){return Q.distanceTo(this.center)-this.radius}intersectsSphere(Q){let Z=this.radius+Q.radius;return Q.center.distanceToSquared(this.center)<=Z*Z}intersectsBox(Q){return Q.intersectsSphere(this)}intersectsPlane(Q){return Math.abs(Q.distanceToPoint(this.center))<=this.radius}clampPoint(Q,Z){let J=this.center.distanceToSquared(Q);if(Z.copy(Q),J>this.radius*this.radius)Z.sub(this.center).normalize(),Z.multiplyScalar(this.radius).add(this.center);return Z}getBoundingBox(Q){if(this.isEmpty())return Q.makeEmpty(),Q;return Q.set(this.center,this.center),Q.expandByScalar(this.radius),Q}applyMatrix4(Q){return this.center.applyMatrix4(Q),this.radius=this.radius*Q.getMaxScaleOnAxis(),this}translate(Q){return this.center.add(Q),this}expandByPoint(Q){if(this.isEmpty())return this.center.copy(Q),this.radius=0,this;O6.subVectors(Q,this.center);let Z=O6.lengthSq();if(Z>this.radius*this.radius){let J=Math.sqrt(Z),X=(J-this.radius)*0.5;this.center.addScaledVector(O6,X/J),this.radius+=X}return this}union(Q){if(Q.isEmpty())return this;if(this.isEmpty())return this.copy(Q),this;if(this.center.equals(Q.center)===!0)this.radius=Math.max(this.radius,Q.radius);else NQ.subVectors(Q.center,this.center).setLength(Q.radius),this.expandByPoint(O6.copy(Q.center).add(NQ)),this.expandByPoint(O6.copy(Q.center).sub(NQ));return this}equals(Q){return Q.center.equals(this.center)&&Q.radius===this.radius}clone(){return new this.constructor().copy(this)}}var t8=new Q0,RQ=new Q0,H5=new Q0,F9=new Q0,UQ=new Q0,K5=new Q0,DQ=new Q0;class q6{constructor(Q=new Q0,Z=new Q0(0,0,-1)){this.origin=Q,this.direction=Z}set(Q,Z){return this.origin.copy(Q),this.direction.copy(Z),this}copy(Q){return this.origin.copy(Q.origin),this.direction.copy(Q.direction),this}at(Q,Z){return Z.copy(this.origin).addScaledVector(this.direction,Q)}lookAt(Q){return this.direction.copy(Q).sub(this.origin).normalize(),this}recast(Q){return this.origin.copy(this.at(Q,t8)),this}closestPointToPoint(Q,Z){Z.subVectors(Q,this.origin);let J=Z.dot(this.direction);if(J<0)return Z.copy(this.origin);return Z.copy(this.origin).addScaledVector(this.direction,J)}distanceToPoint(Q){return Math.sqrt(this.distanceSqToPoint(Q))}distanceSqToPoint(Q){let Z=t8.subVectors(Q,this.origin).dot(this.direction);if(Z<0)return this.origin.distanceToSquared(Q);return t8.copy(this.origin).addScaledVector(this.direction,Z),t8.distanceToSquared(Q)}distanceSqToSegment(Q,Z,J,X){RQ.copy(Q).add(Z).multiplyScalar(0.5),H5.copy(Z).sub(Q).normalize(),F9.copy(this.origin).sub(RQ);let H=Q.distanceTo(Z)*0.5,q=-this.direction.dot(H5),G=F9.dot(this.direction),V=-F9.dot(H5),R=F9.lengthSq(),U=Math.abs(1-q*q),B,z,I,w;if(U>0)if(B=q*V-G,z=q*G-V,w=H*U,B>=0)if(z>=-w)if(z<=w){let j=1/U;B*=j,z*=j,I=B*(B+q*z+2*G)+z*(q*B+z+2*V)+R}else z=H,B=Math.max(0,-(q*z+G)),I=-B*B+z*(z+2*V)+R;else z=-H,B=Math.max(0,-(q*z+G)),I=-B*B+z*(z+2*V)+R;else if(z<=-w)B=Math.max(0,-(-q*H+G)),z=B>0?-H:Math.min(Math.max(-H,-V),H),I=-B*B+z*(z+2*V)+R;else if(z<=w)B=0,z=Math.min(Math.max(-H,-V),H),I=z*(z+2*V)+R;else B=Math.max(0,-(q*H+G)),z=B>0?H:Math.min(Math.max(-H,-V),H),I=-B*B+z*(z+2*V)+R;else z=q>0?-H:H,B=Math.max(0,-(q*z+G)),I=-B*B+z*(z+2*V)+R;if(J)J.copy(this.origin).addScaledVector(this.direction,B);if(X)X.copy(RQ).addScaledVector(H5,z);return I}intersectSphere(Q,Z){t8.subVectors(Q.center,this.origin);let J=t8.dot(this.direction),X=t8.dot(t8)-J*J,H=Q.radius*Q.radius;if(X>H)return null;let q=Math.sqrt(H-X),G=J-q,V=J+q;if(V<0)return null;if(G<0)return this.at(V,Z);return this.at(G,Z)}intersectsSphere(Q){return this.distanceSqToPoint(Q.center)<=Q.radius*Q.radius}distanceToPlane(Q){let Z=Q.normal.dot(this.direction);if(Z===0){if(Q.distanceToPoint(this.origin)===0)return 0;return null}let J=-(this.origin.dot(Q.normal)+Q.constant)/Z;return J>=0?J:null}intersectPlane(Q,Z){let J=this.distanceToPlane(Q);if(J===null)return null;return this.at(J,Z)}intersectsPlane(Q){let Z=Q.distanceToPoint(this.origin);if(Z===0)return!0;if(Q.normal.dot(this.direction)*Z<0)return!0;return!1}intersectBox(Q,Z){let J,X,H,q,G,V,R=1/this.direction.x,U=1/this.direction.y,B=1/this.direction.z,z=this.origin;if(R>=0)J=(Q.min.x-z.x)*R,X=(Q.max.x-z.x)*R;else J=(Q.max.x-z.x)*R,X=(Q.min.x-z.x)*R;if(U>=0)H=(Q.min.y-z.y)*U,q=(Q.max.y-z.y)*U;else H=(Q.max.y-z.y)*U,q=(Q.min.y-z.y)*U;if(J>q||H>X)return null;if(H>J||isNaN(J))J=H;if(q<X||isNaN(X))X=q;if(B>=0)G=(Q.min.z-z.z)*B,V=(Q.max.z-z.z)*B;else G=(Q.max.z-z.z)*B,V=(Q.min.z-z.z)*B;if(J>V||G>X)return null;if(G>J||J!==J)J=G;if(V<X||X!==X)X=V;if(X<0)return null;return this.at(J>=0?J:X,Z)}intersectsBox(Q){return this.intersectBox(Q,t8)!==null}intersectTriangle(Q,Z,J,X,H){UQ.subVectors(Z,Q),K5.subVectors(J,Q),DQ.crossVectors(UQ,K5);let q=this.direction.dot(DQ),G;if(q>0){if(X)return null;G=1}else if(q<0)G=-1,q=-q;else return null;F9.subVectors(this.origin,Q);let V=G*this.direction.dot(K5.crossVectors(F9,K5));if(V<0)return null;let R=G*this.direction.dot(UQ.cross(F9));if(R<0)return null;if(V+R>q)return null;let U=-G*F9.dot(DQ);if(U<0)return null;return this.at(U/q,H)}applyMatrix4(Q){return this.origin.applyMatrix4(Q),this.direction.transformDirection(Q),this}equals(Q){return Q.origin.equals(this.origin)&&Q.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class o7{constructor(Q,Z,J,X,H,q,G,V,R,U,B,z,I,w,j,f){if(o7.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Q!==void 0)this.set(Q,Z,J,X,H,q,G,V,R,U,B,z,I,w,j,f)}set(Q,Z,J,X,H,q,G,V,R,U,B,z,I,w,j,f){let k=this.elements;return k[0]=Q,k[4]=Z,k[8]=J,k[12]=X,k[1]=H,k[5]=q,k[9]=G,k[13]=V,k[2]=R,k[6]=U,k[10]=B,k[14]=z,k[3]=I,k[7]=w,k[11]=j,k[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new o7().fromArray(this.elements)}copy(Q){let Z=this.elements,J=Q.elements;return Z[0]=J[0],Z[1]=J[1],Z[2]=J[2],Z[3]=J[3],Z[4]=J[4],Z[5]=J[5],Z[6]=J[6],Z[7]=J[7],Z[8]=J[8],Z[9]=J[9],Z[10]=J[10],Z[11]=J[11],Z[12]=J[12],Z[13]=J[13],Z[14]=J[14],Z[15]=J[15],this}copyPosition(Q){let Z=this.elements,J=Q.elements;return Z[12]=J[12],Z[13]=J[13],Z[14]=J[14],this}setFromMatrix3(Q){let Z=Q.elements;return this.set(Z[0],Z[3],Z[6],0,Z[1],Z[4],Z[7],0,Z[2],Z[5],Z[8],0,0,0,0,1),this}extractBasis(Q,Z,J){return Q.setFromMatrixColumn(this,0),Z.setFromMatrixColumn(this,1),J.setFromMatrixColumn(this,2),this}makeBasis(Q,Z,J){return this.set(Q.x,Z.x,J.x,0,Q.y,Z.y,J.y,0,Q.z,Z.z,J.z,0,0,0,0,1),this}extractRotation(Q){let Z=this.elements,J=Q.elements,X=1/l9.setFromMatrixColumn(Q,0).length(),H=1/l9.setFromMatrixColumn(Q,1).length(),q=1/l9.setFromMatrixColumn(Q,2).length();return Z[0]=J[0]*X,Z[1]=J[1]*X,Z[2]=J[2]*X,Z[3]=0,Z[4]=J[4]*H,Z[5]=J[5]*H,Z[6]=J[6]*H,Z[7]=0,Z[8]=J[8]*q,Z[9]=J[9]*q,Z[10]=J[10]*q,Z[11]=0,Z[12]=0,Z[13]=0,Z[14]=0,Z[15]=1,this}makeRotationFromEuler(Q){let Z=this.elements,J=Q.x,X=Q.y,H=Q.z,q=Math.cos(J),G=Math.sin(J),V=Math.cos(X),R=Math.sin(X),U=Math.cos(H),B=Math.sin(H);if(Q.order==="XYZ"){let z=q*U,I=q*B,w=G*U,j=G*B;Z[0]=V*U,Z[4]=-V*B,Z[8]=R,Z[1]=I+w*R,Z[5]=z-j*R,Z[9]=-G*V,Z[2]=j-z*R,Z[6]=w+I*R,Z[10]=q*V}else if(Q.order==="YXZ"){let z=V*U,I=V*B,w=R*U,j=R*B;Z[0]=z+j*G,Z[4]=w*G-I,Z[8]=q*R,Z[1]=q*B,Z[5]=q*U,Z[9]=-G,Z[2]=I*G-w,Z[6]=j+z*G,Z[10]=q*V}else if(Q.order==="ZXY"){let z=V*U,I=V*B,w=R*U,j=R*B;Z[0]=z-j*G,Z[4]=-q*B,Z[8]=w+I*G,Z[1]=I+w*G,Z[5]=q*U,Z[9]=j-z*G,Z[2]=-q*R,Z[6]=G,Z[10]=q*V}else if(Q.order==="ZYX"){let z=q*U,I=q*B,w=G*U,j=G*B;Z[0]=V*U,Z[4]=w*R-I,Z[8]=z*R+j,Z[1]=V*B,Z[5]=j*R+z,Z[9]=I*R-w,Z[2]=-R,Z[6]=G*V,Z[10]=q*V}else if(Q.order==="YZX"){let z=q*V,I=q*R,w=G*V,j=G*R;Z[0]=V*U,Z[4]=j-z*B,Z[8]=w*B+I,Z[1]=B,Z[5]=q*U,Z[9]=-G*U,Z[2]=-R*U,Z[6]=I*B+w,Z[10]=z-j*B}else if(Q.order==="XZY"){let z=q*V,I=q*R,w=G*V,j=G*R;Z[0]=V*U,Z[4]=-B,Z[8]=R*U,Z[1]=z*B+j,Z[5]=q*U,Z[9]=I*B-w,Z[2]=w*B-I,Z[6]=G*U,Z[10]=j*B+z}return Z[3]=0,Z[7]=0,Z[11]=0,Z[12]=0,Z[13]=0,Z[14]=0,Z[15]=1,this}makeRotationFromQuaternion(Q){return this.compose(NX,Q,RX)}lookAt(Q,Z,J){let X=this.elements;if(C8.subVectors(Q,Z),C8.lengthSq()===0)C8.z=1;if(C8.normalize(),G9.crossVectors(J,C8),G9.lengthSq()===0){if(Math.abs(J.z)===1)C8.x+=0.0001;else C8.z+=0.0001;C8.normalize(),G9.crossVectors(J,C8)}return G9.normalize(),q5.crossVectors(C8,G9),X[0]=G9.x,X[4]=q5.x,X[8]=C8.x,X[1]=G9.y,X[5]=q5.y,X[9]=C8.y,X[2]=G9.z,X[6]=q5.z,X[10]=C8.z,this}multiply(Q){return this.multiplyMatrices(this,Q)}premultiply(Q){return this.multiplyMatrices(Q,this)}multiplyMatrices(Q,Z){let J=Q.elements,X=Z.elements,H=this.elements,q=J[0],G=J[4],V=J[8],R=J[12],U=J[1],B=J[5],z=J[9],I=J[13],w=J[2],j=J[6],f=J[10],k=J[14],C=J[3],v=J[7],x=J[11],l=J[15],Z0=X[0],p=X[4],$0=X[8],z0=X[12],b=X[1],m=X[5],q0=X[9],L0=X[13],S0=X[2],o=X[6],e=X[10],D0=X[14],P0=X[3],a=X[7],W0=X[11],C0=X[15];return H[0]=q*Z0+G*b+V*S0+R*P0,H[4]=q*p+G*m+V*o+R*a,H[8]=q*$0+G*q0+V*e+R*W0,H[12]=q*z0+G*L0+V*D0+R*C0,H[1]=U*Z0+B*b+z*S0+I*P0,H[5]=U*p+B*m+z*o+I*a,H[9]=U*$0+B*q0+z*e+I*W0,H[13]=U*z0+B*L0+z*D0+I*C0,H[2]=w*Z0+j*b+f*S0+k*P0,H[6]=w*p+j*m+f*o+k*a,H[10]=w*$0+j*q0+f*e+k*W0,H[14]=w*z0+j*L0+f*D0+k*C0,H[3]=C*Z0+v*b+x*S0+l*P0,H[7]=C*p+v*m+x*o+l*a,H[11]=C*$0+v*q0+x*e+l*W0,H[15]=C*z0+v*L0+x*D0+l*C0,this}multiplyScalar(Q){let Z=this.elements;return Z[0]*=Q,Z[4]*=Q,Z[8]*=Q,Z[12]*=Q,Z[1]*=Q,Z[5]*=Q,Z[9]*=Q,Z[13]*=Q,Z[2]*=Q,Z[6]*=Q,Z[10]*=Q,Z[14]*=Q,Z[3]*=Q,Z[7]*=Q,Z[11]*=Q,Z[15]*=Q,this}determinant(){let Q=this.elements,Z=Q[0],J=Q[4],X=Q[8],H=Q[12],q=Q[1],G=Q[5],V=Q[9],R=Q[13],U=Q[2],B=Q[6],z=Q[10],I=Q[14],w=Q[3],j=Q[7],f=Q[11],k=Q[15];return w*(+H*V*B-X*R*B-H*G*z+J*R*z+X*G*I-J*V*I)+j*(+Z*V*I-Z*R*z+H*q*z-X*q*I+X*R*U-H*V*U)+f*(+Z*R*B-Z*G*I-H*q*B+J*q*I+H*G*U-J*R*U)+k*(-X*G*U-Z*V*B+Z*G*z+X*q*B-J*q*z+J*V*U)}transpose(){let Q=this.elements,Z;return Z=Q[1],Q[1]=Q[4],Q[4]=Z,Z=Q[2],Q[2]=Q[8],Q[8]=Z,Z=Q[6],Q[6]=Q[9],Q[9]=Z,Z=Q[3],Q[3]=Q[12],Q[12]=Z,Z=Q[7],Q[7]=Q[13],Q[13]=Z,Z=Q[11],Q[11]=Q[14],Q[14]=Z,this}setPosition(Q,Z,J){let X=this.elements;if(Q.isVector3)X[12]=Q.x,X[13]=Q.y,X[14]=Q.z;else X[12]=Q,X[13]=Z,X[14]=J;return this}invert(){let Q=this.elements,Z=Q[0],J=Q[1],X=Q[2],H=Q[3],q=Q[4],G=Q[5],V=Q[6],R=Q[7],U=Q[8],B=Q[9],z=Q[10],I=Q[11],w=Q[12],j=Q[13],f=Q[14],k=Q[15],C=B*f*R-j*z*R+j*V*I-G*f*I-B*V*k+G*z*k,v=w*z*R-U*f*R-w*V*I+q*f*I+U*V*k-q*z*k,x=U*j*R-w*B*R+w*G*I-q*j*I-U*G*k+q*B*k,l=w*B*V-U*j*V-w*G*z+q*j*z+U*G*f-q*B*f,Z0=Z*C+J*v+X*x+H*l;if(Z0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let p=1/Z0;return Q[0]=C*p,Q[1]=(j*z*H-B*f*H-j*X*I+J*f*I+B*X*k-J*z*k)*p,Q[2]=(G*f*H-j*V*H+j*X*R-J*f*R-G*X*k+J*V*k)*p,Q[3]=(B*V*H-G*z*H-B*X*R+J*z*R+G*X*I-J*V*I)*p,Q[4]=v*p,Q[5]=(U*f*H-w*z*H+w*X*I-Z*f*I-U*X*k+Z*z*k)*p,Q[6]=(w*V*H-q*f*H-w*X*R+Z*f*R+q*X*k-Z*V*k)*p,Q[7]=(q*z*H-U*V*H+U*X*R-Z*z*R-q*X*I+Z*V*I)*p,Q[8]=x*p,Q[9]=(w*B*H-U*j*H-w*J*I+Z*j*I+U*J*k-Z*B*k)*p,Q[10]=(q*j*H-w*G*H+w*J*R-Z*j*R-q*J*k+Z*G*k)*p,Q[11]=(U*G*H-q*B*H-U*J*R+Z*B*R+q*J*I-Z*G*I)*p,Q[12]=l*p,Q[13]=(U*j*X-w*B*X+w*J*z-Z*j*z-U*J*f+Z*B*f)*p,Q[14]=(w*G*X-q*j*X-w*J*V+Z*j*V+q*J*f-Z*G*f)*p,Q[15]=(q*B*X-U*G*X+U*J*V-Z*B*V-q*J*z+Z*G*z)*p,this}scale(Q){let Z=this.elements,J=Q.x,X=Q.y,H=Q.z;return Z[0]*=J,Z[4]*=X,Z[8]*=H,Z[1]*=J,Z[5]*=X,Z[9]*=H,Z[2]*=J,Z[6]*=X,Z[10]*=H,Z[3]*=J,Z[7]*=X,Z[11]*=H,this}getMaxScaleOnAxis(){let Q=this.elements,Z=Q[0]*Q[0]+Q[1]*Q[1]+Q[2]*Q[2],J=Q[4]*Q[4]+Q[5]*Q[5]+Q[6]*Q[6],X=Q[8]*Q[8]+Q[9]*Q[9]+Q[10]*Q[10];return Math.sqrt(Math.max(Z,J,X))}makeTranslation(Q,Z,J){if(Q.isVector3)this.set(1,0,0,Q.x,0,1,0,Q.y,0,0,1,Q.z,0,0,0,1);else this.set(1,0,0,Q,0,1,0,Z,0,0,1,J,0,0,0,1);return this}makeRotationX(Q){let Z=Math.cos(Q),J=Math.sin(Q);return this.set(1,0,0,0,0,Z,-J,0,0,J,Z,0,0,0,0,1),this}makeRotationY(Q){let Z=Math.cos(Q),J=Math.sin(Q);return this.set(Z,0,J,0,0,1,0,0,-J,0,Z,0,0,0,0,1),this}makeRotationZ(Q){let Z=Math.cos(Q),J=Math.sin(Q);return this.set(Z,-J,0,0,J,Z,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(Q,Z){let J=Math.cos(Z),X=Math.sin(Z),H=1-J,q=Q.x,G=Q.y,V=Q.z,R=H*q,U=H*G;return this.set(R*q+J,R*G-X*V,R*V+X*G,0,R*G+X*V,U*G+J,U*V-X*q,0,R*V-X*G,U*V+X*q,H*V*V+J,0,0,0,0,1),this}makeScale(Q,Z,J){return this.set(Q,0,0,0,0,Z,0,0,0,0,J,0,0,0,0,1),this}makeShear(Q,Z,J,X,H,q){return this.set(1,J,H,0,Q,1,q,0,Z,X,1,0,0,0,0,1),this}compose(Q,Z,J){let X=this.elements,H=Z._x,q=Z._y,G=Z._z,V=Z._w,R=H+H,U=q+q,B=G+G,z=H*R,I=H*U,w=H*B,j=q*U,f=q*B,k=G*B,C=V*R,v=V*U,x=V*B,l=J.x,Z0=J.y,p=J.z;return X[0]=(1-(j+k))*l,X[1]=(I+x)*l,X[2]=(w-v)*l,X[3]=0,X[4]=(I-x)*Z0,X[5]=(1-(z+k))*Z0,X[6]=(f+C)*Z0,X[7]=0,X[8]=(w+v)*p,X[9]=(f-C)*p,X[10]=(1-(z+j))*p,X[11]=0,X[12]=Q.x,X[13]=Q.y,X[14]=Q.z,X[15]=1,this}decompose(Q,Z,J){let X=this.elements,H=l9.set(X[0],X[1],X[2]).length(),q=l9.set(X[4],X[5],X[6]).length(),G=l9.set(X[8],X[9],X[10]).length();if(this.determinant()<0)H=-H;Q.x=X[12],Q.y=X[13],Q.z=X[14],y8.copy(this);let R=1/H,U=1/q,B=1/G;return y8.elements[0]*=R,y8.elements[1]*=R,y8.elements[2]*=R,y8.elements[4]*=U,y8.elements[5]*=U,y8.elements[6]*=U,y8.elements[8]*=B,y8.elements[9]*=B,y8.elements[10]*=B,Z.setFromRotationMatrix(y8),J.x=H,J.y=q,J.z=G,this}makePerspective(Q,Z,J,X,H,q,G=2000){let V=this.elements,R=2*H/(Z-Q),U=2*H/(J-X),B=(Z+Q)/(Z-Q),z=(J+X)/(J-X),I,w;if(G===2000)I=-(q+H)/(q-H),w=-2*q*H/(q-H);else if(G===2001)I=-q/(q-H),w=-q*H/(q-H);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+G);return V[0]=R,V[4]=0,V[8]=B,V[12]=0,V[1]=0,V[5]=U,V[9]=z,V[13]=0,V[2]=0,V[6]=0,V[10]=I,V[14]=w,V[3]=0,V[7]=0,V[11]=-1,V[15]=0,this}makeOrthographic(Q,Z,J,X,H,q,G=2000){let V=this.elements,R=1/(Z-Q),U=1/(J-X),B=1/(q-H),z=(Z+Q)*R,I=(J+X)*U,w,j;if(G===2000)w=(q+H)*B,j=-2*B;else if(G===2001)w=H*B,j=-1*B;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+G);return V[0]=2*R,V[4]=0,V[8]=0,V[12]=-z,V[1]=0,V[5]=2*U,V[9]=0,V[13]=-I,V[2]=0,V[6]=0,V[10]=j,V[14]=-w,V[3]=0,V[7]=0,V[11]=0,V[15]=1,this}equals(Q){let Z=this.elements,J=Q.elements;for(let X=0;X<16;X++)if(Z[X]!==J[X])return!1;return!0}fromArray(Q,Z=0){for(let J=0;J<16;J++)this.elements[J]=Q[J+Z];return this}toArray(Q=[],Z=0){let J=this.elements;return Q[Z]=J[0],Q[Z+1]=J[1],Q[Z+2]=J[2],Q[Z+3]=J[3],Q[Z+4]=J[4],Q[Z+5]=J[5],Q[Z+6]=J[6],Q[Z+7]=J[7],Q[Z+8]=J[8],Q[Z+9]=J[9],Q[Z+10]=J[10],Q[Z+11]=J[11],Q[Z+12]=J[12],Q[Z+13]=J[13],Q[Z+14]=J[14],Q[Z+15]=J[15],Q}}var l9=new Q0,y8=new o7,NX=new Q0(0,0,0),RX=new Q0(1,1,1),G9=new Q0,q5=new Q0,C8=new Q0,RJ=new o7,UJ=new c8;class v5{constructor(Q=0,Z=0,J=0,X=v5.DEFAULT_ORDER){this.isEuler=!0,this._x=Q,this._y=Z,this._z=J,this._order=X}get x(){return this._x}set x(Q){this._x=Q,this._onChangeCallback()}get y(){return this._y}set y(Q){this._y=Q,this._onChangeCallback()}get z(){return this._z}set z(Q){this._z=Q,this._onChangeCallback()}get order(){return this._order}set order(Q){this._order=Q,this._onChangeCallback()}set(Q,Z,J,X=this._order){return this._x=Q,this._y=Z,this._z=J,this._order=X,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(Q){return this._x=Q._x,this._y=Q._y,this._z=Q._z,this._order=Q._order,this._onChangeCallback(),this}setFromRotationMatrix(Q,Z=this._order,J=!0){let X=Q.elements,H=X[0],q=X[4],G=X[8],V=X[1],R=X[5],U=X[9],B=X[2],z=X[6],I=X[10];switch(Z){case"XYZ":if(this._y=Math.asin(X8(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(-U,I),this._z=Math.atan2(-q,H);else this._x=Math.atan2(z,R),this._z=0;break;case"YXZ":if(this._x=Math.asin(-X8(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(G,I),this._z=Math.atan2(V,R);else this._y=Math.atan2(-B,H),this._z=0;break;case"ZXY":if(this._x=Math.asin(X8(z,-1,1)),Math.abs(z)<0.9999999)this._y=Math.atan2(-B,I),this._z=Math.atan2(-q,R);else this._y=0,this._z=Math.atan2(V,H);break;case"ZYX":if(this._y=Math.asin(-X8(B,-1,1)),Math.abs(B)<0.9999999)this._x=Math.atan2(z,I),this._z=Math.atan2(V,H);else this._x=0,this._z=Math.atan2(-q,R);break;case"YZX":if(this._z=Math.asin(X8(V,-1,1)),Math.abs(V)<0.9999999)this._x=Math.atan2(-U,R),this._y=Math.atan2(-B,H);else this._x=0,this._y=Math.atan2(G,I);break;case"XZY":if(this._z=Math.asin(-X8(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(z,R),this._y=Math.atan2(G,H);else this._x=Math.atan2(-U,I),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Z)}if(this._order=Z,J===!0)this._onChangeCallback();return this}setFromQuaternion(Q,Z,J){return RJ.makeRotationFromQuaternion(Q),this.setFromRotationMatrix(RJ,Z,J)}setFromVector3(Q,Z=this._order){return this.set(Q.x,Q.y,Q.z,Z)}reorder(Q){return UJ.setFromEuler(this),this.setFromQuaternion(UJ,Q)}equals(Q){return Q._x===this._x&&Q._y===this._y&&Q._z===this._z&&Q._order===this._order}fromArray(Q){if(this._x=Q[0],this._y=Q[1],this._z=Q[2],Q[3]!==void 0)this._order=Q[3];return this._onChangeCallback(),this}toArray(Q=[],Z=0){return Q[Z]=this._x,Q[Z+1]=this._y,Q[Z+2]=this._z,Q[Z+3]=this._order,Q}_onChange(Q){return this._onChangeCallback=Q,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}v5.DEFAULT_ORDER="XYZ";class b5{constructor(){this.mask=1}set(Q){this.mask=(1<<Q|0)>>>0}enable(Q){this.mask|=1<<Q|0}enableAll(){this.mask=-1}toggle(Q){this.mask^=1<<Q|0}disable(Q){this.mask&=~(1<<Q|0)}disableAll(){this.mask=0}test(Q){return(this.mask&Q.mask)!==0}isEnabled(Q){return(this.mask&(1<<Q|0))!==0}}var UX=0,DJ=new Q0,u9=new c8,e8=new o7,V5=new Q0,w6=new Q0,DX=new Q0,_X=new c8,_J=new Q0(1,0,0),zJ=new Q0(0,1,0),EJ=new Q0(0,0,1),zX={type:"added"},EX={type:"removed"};class Z8 extends J9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:UX++}),this.uuid=u8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Z8.DEFAULT_UP.clone();let Q=new Q0,Z=new v5,J=new c8,X=new Q0(1,1,1);function H(){J.setFromEuler(Z,!1)}function q(){Z.setFromQuaternion(J,void 0,!1)}Z._onChange(H),J._onChange(q),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:Q},rotation:{configurable:!0,enumerable:!0,value:Z},quaternion:{configurable:!0,enumerable:!0,value:J},scale:{configurable:!0,enumerable:!0,value:X},modelViewMatrix:{value:new o7},normalMatrix:{value:new C7}}),this.matrix=new o7,this.matrixWorld=new o7,this.matrixAutoUpdate=Z8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Z8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b5,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(Q){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(Q),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(Q){return this.quaternion.premultiply(Q),this}setRotationFromAxisAngle(Q,Z){this.quaternion.setFromAxisAngle(Q,Z)}setRotationFromEuler(Q){this.quaternion.setFromEuler(Q,!0)}setRotationFromMatrix(Q){this.quaternion.setFromRotationMatrix(Q)}setRotationFromQuaternion(Q){this.quaternion.copy(Q)}rotateOnAxis(Q,Z){return u9.setFromAxisAngle(Q,Z),this.quaternion.multiply(u9),this}rotateOnWorldAxis(Q,Z){return u9.setFromAxisAngle(Q,Z),this.quaternion.premultiply(u9),this}rotateX(Q){return this.rotateOnAxis(_J,Q)}rotateY(Q){return this.rotateOnAxis(zJ,Q)}rotateZ(Q){return this.rotateOnAxis(EJ,Q)}translateOnAxis(Q,Z){return DJ.copy(Q).applyQuaternion(this.quaternion),this.position.add(DJ.multiplyScalar(Z)),this}translateX(Q){return this.translateOnAxis(_J,Q)}translateY(Q){return this.translateOnAxis(zJ,Q)}translateZ(Q){return this.translateOnAxis(EJ,Q)}localToWorld(Q){return this.updateWorldMatrix(!0,!1),Q.applyMatrix4(this.matrixWorld)}worldToLocal(Q){return this.updateWorldMatrix(!0,!1),Q.applyMatrix4(e8.copy(this.matrixWorld).invert())}lookAt(Q,Z,J){if(Q.isVector3)V5.copy(Q);else V5.set(Q,Z,J);let X=this.parent;if(this.updateWorldMatrix(!0,!1),w6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)e8.lookAt(w6,V5,this.up);else e8.lookAt(V5,w6,this.up);if(this.quaternion.setFromRotationMatrix(e8),X)e8.extractRotation(X.matrixWorld),u9.setFromRotationMatrix(e8),this.quaternion.premultiply(u9.invert())}add(Q){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.add(arguments[Z]);return this}if(Q===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",Q),this;if(Q&&Q.isObject3D){if(Q.parent!==null)Q.parent.remove(Q);Q.parent=this,this.children.push(Q),Q.dispatchEvent(zX)}else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",Q);return this}remove(Q){if(arguments.length>1){for(let J=0;J<arguments.length;J++)this.remove(arguments[J]);return this}let Z=this.children.indexOf(Q);if(Z!==-1)Q.parent=null,this.children.splice(Z,1),Q.dispatchEvent(EX);return this}removeFromParent(){let Q=this.parent;if(Q!==null)Q.remove(this);return this}clear(){return this.remove(...this.children)}attach(Q){if(this.updateWorldMatrix(!0,!1),e8.copy(this.matrixWorld).invert(),Q.parent!==null)Q.parent.updateWorldMatrix(!0,!1),e8.multiply(Q.parent.matrixWorld);return Q.applyMatrix4(e8),this.add(Q),Q.updateWorldMatrix(!1,!0),this}getObjectById(Q){return this.getObjectByProperty("id",Q)}getObjectByName(Q){return this.getObjectByProperty("name",Q)}getObjectByProperty(Q,Z){if(this[Q]===Z)return this;for(let J=0,X=this.children.length;J<X;J++){let q=this.children[J].getObjectByProperty(Q,Z);if(q!==void 0)return q}return}getObjectsByProperty(Q,Z,J=[]){if(this[Q]===Z)J.push(this);let X=this.children;for(let H=0,q=X.length;H<q;H++)X[H].getObjectsByProperty(Q,Z,J);return J}getWorldPosition(Q){return this.updateWorldMatrix(!0,!1),Q.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(Q){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(w6,Q,DX),Q}getWorldScale(Q){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(w6,_X,Q),Q}getWorldDirection(Q){this.updateWorldMatrix(!0,!1);let Z=this.matrixWorld.elements;return Q.set(Z[8],Z[9],Z[10]).normalize()}raycast(){}traverse(Q){Q(this);let Z=this.children;for(let J=0,X=Z.length;J<X;J++)Z[J].traverse(Q)}traverseVisible(Q){if(this.visible===!1)return;Q(this);let Z=this.children;for(let J=0,X=Z.length;J<X;J++)Z[J].traverseVisible(Q)}traverseAncestors(Q){let Z=this.parent;if(Z!==null)Q(Z),Z.traverseAncestors(Q)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(Q){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Q){if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Q=!0}let Z=this.children;for(let J=0,X=Z.length;J<X;J++){let H=Z[J];if(H.matrixWorldAutoUpdate===!0||Q===!0)H.updateMatrixWorld(Q)}}updateWorldMatrix(Q,Z){let J=this.parent;if(Q===!0&&J!==null&&J.matrixWorldAutoUpdate===!0)J.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Z===!0){let X=this.children;for(let H=0,q=X.length;H<q;H++){let G=X[H];if(G.matrixWorldAutoUpdate===!0)G.updateWorldMatrix(!1,!0)}}}toJSON(Q){let Z=Q===void 0||typeof Q==="string",J={};if(Z)Q={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},J.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let X={};if(X.uuid=this.uuid,X.type=this.type,this.name!=="")X.name=this.name;if(this.castShadow===!0)X.castShadow=!0;if(this.receiveShadow===!0)X.receiveShadow=!0;if(this.visible===!1)X.visible=!1;if(this.frustumCulled===!1)X.frustumCulled=!1;if(this.renderOrder!==0)X.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)X.userData=this.userData;if(X.layers=this.layers.mask,X.matrix=this.matrix.toArray(),X.up=this.up.toArray(),this.matrixAutoUpdate===!1)X.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(X.type="InstancedMesh",X.count=this.count,X.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)X.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(X.type="BatchedMesh",X.perObjectFrustumCulled=this.perObjectFrustumCulled,X.sortObjects=this.sortObjects,X.drawRanges=this._drawRanges,X.reservedRanges=this._reservedRanges,X.visibility=this._visibility,X.active=this._active,X.bounds=this._bounds.map((G)=>({boxInitialized:G.boxInitialized,boxMin:G.box.min.toArray(),boxMax:G.box.max.toArray(),sphereInitialized:G.sphereInitialized,sphereRadius:G.sphere.radius,sphereCenter:G.sphere.center.toArray()})),X.maxGeometryCount=this._maxGeometryCount,X.maxVertexCount=this._maxVertexCount,X.maxIndexCount=this._maxIndexCount,X.geometryInitialized=this._geometryInitialized,X.geometryCount=this._geometryCount,X.matricesTexture=this._matricesTexture.toJSON(Q),this.boundingSphere!==null)X.boundingSphere={center:X.boundingSphere.center.toArray(),radius:X.boundingSphere.radius};if(this.boundingBox!==null)X.boundingBox={min:X.boundingBox.min.toArray(),max:X.boundingBox.max.toArray()}}function H(G,V){if(G[V.uuid]===void 0)G[V.uuid]=V.toJSON(Q);return V.uuid}if(this.isScene){if(this.background){if(this.background.isColor)X.background=this.background.toJSON();else if(this.background.isTexture)X.background=this.background.toJSON(Q).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)X.environment=this.environment.toJSON(Q).uuid}else if(this.isMesh||this.isLine||this.isPoints){X.geometry=H(Q.geometries,this.geometry);let G=this.geometry.parameters;if(G!==void 0&&G.shapes!==void 0){let V=G.shapes;if(Array.isArray(V))for(let R=0,U=V.length;R<U;R++){let B=V[R];H(Q.shapes,B)}else H(Q.shapes,V)}}if(this.isSkinnedMesh){if(X.bindMode=this.bindMode,X.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)H(Q.skeletons,this.skeleton),X.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let G=[];for(let V=0,R=this.material.length;V<R;V++)G.push(H(Q.materials,this.material[V]));X.material=G}else X.material=H(Q.materials,this.material);if(this.children.length>0){X.children=[];for(let G=0;G<this.children.length;G++)X.children.push(this.children[G].toJSON(Q).object)}if(this.animations.length>0){X.animations=[];for(let G=0;G<this.animations.length;G++){let V=this.animations[G];X.animations.push(H(Q.animations,V))}}if(Z){let G=q(Q.geometries),V=q(Q.materials),R=q(Q.textures),U=q(Q.images),B=q(Q.shapes),z=q(Q.skeletons),I=q(Q.animations),w=q(Q.nodes);if(G.length>0)J.geometries=G;if(V.length>0)J.materials=V;if(R.length>0)J.textures=R;if(U.length>0)J.images=U;if(B.length>0)J.shapes=B;if(z.length>0)J.skeletons=z;if(I.length>0)J.animations=I;if(w.length>0)J.nodes=w}return J.object=X,J;function q(G){let V=[];for(let R in G){let U=G[R];delete U.metadata,V.push(U)}return V}}clone(Q){return new this.constructor().copy(this,Q)}copy(Q,Z=!0){if(this.name=Q.name,this.up.copy(Q.up),this.position.copy(Q.position),this.rotation.order=Q.rotation.order,this.quaternion.copy(Q.quaternion),this.scale.copy(Q.scale),this.matrix.copy(Q.matrix),this.matrixWorld.copy(Q.matrixWorld),this.matrixAutoUpdate=Q.matrixAutoUpdate,this.matrixWorldAutoUpdate=Q.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=Q.matrixWorldNeedsUpdate,this.layers.mask=Q.layers.mask,this.visible=Q.visible,this.castShadow=Q.castShadow,this.receiveShadow=Q.receiveShadow,this.frustumCulled=Q.frustumCulled,this.renderOrder=Q.renderOrder,this.animations=Q.animations.slice(),this.userData=JSON.parse(JSON.stringify(Q.userData)),Z===!0)for(let J=0;J<Q.children.length;J++){let X=Q.children[J];this.add(X.clone())}return this}}Z8.DEFAULT_UP=new Q0(0,1,0);Z8.DEFAULT_MATRIX_AUTO_UPDATE=!0;Z8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var v8=new Q0,Q9=new Q0,_Q=new Q0,Z9=new Q0,c9=new Q0,s9=new Q0,BJ=new Q0,zQ=new Q0,EQ=new Q0,BQ=new Q0,F5=!1;class P8{constructor(Q=new Q0,Z=new Q0,J=new Q0){this.a=Q,this.b=Z,this.c=J}static getNormal(Q,Z,J,X){X.subVectors(J,Z),v8.subVectors(Q,Z),X.cross(v8);let H=X.lengthSq();if(H>0)return X.multiplyScalar(1/Math.sqrt(H));return X.set(0,0,0)}static getBarycoord(Q,Z,J,X,H){v8.subVectors(X,Z),Q9.subVectors(J,Z),_Q.subVectors(Q,Z);let q=v8.dot(v8),G=v8.dot(Q9),V=v8.dot(_Q),R=Q9.dot(Q9),U=Q9.dot(_Q),B=q*R-G*G;if(B===0)return H.set(0,0,0),null;let z=1/B,I=(R*V-G*U)*z,w=(q*U-G*V)*z;return H.set(1-I-w,w,I)}static containsPoint(Q,Z,J,X){if(this.getBarycoord(Q,Z,J,X,Z9)===null)return!1;return Z9.x>=0&&Z9.y>=0&&Z9.x+Z9.y<=1}static getUV(Q,Z,J,X,H,q,G,V){if(F5===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),F5=!0;return this.getInterpolation(Q,Z,J,X,H,q,G,V)}static getInterpolation(Q,Z,J,X,H,q,G,V){if(this.getBarycoord(Q,Z,J,X,Z9)===null){if(V.x=0,V.y=0,"z"in V)V.z=0;if("w"in V)V.w=0;return null}return V.setScalar(0),V.addScaledVector(H,Z9.x),V.addScaledVector(q,Z9.y),V.addScaledVector(G,Z9.z),V}static isFrontFacing(Q,Z,J,X){return v8.subVectors(J,Z),Q9.subVectors(Q,Z),v8.cross(Q9).dot(X)<0?!0:!1}set(Q,Z,J){return this.a.copy(Q),this.b.copy(Z),this.c.copy(J),this}setFromPointsAndIndices(Q,Z,J,X){return this.a.copy(Q[Z]),this.b.copy(Q[J]),this.c.copy(Q[X]),this}setFromAttributeAndIndices(Q,Z,J,X){return this.a.fromBufferAttribute(Q,Z),this.b.fromBufferAttribute(Q,J),this.c.fromBufferAttribute(Q,X),this}clone(){return new this.constructor().copy(this)}copy(Q){return this.a.copy(Q.a),this.b.copy(Q.b),this.c.copy(Q.c),this}getArea(){return v8.subVectors(this.c,this.b),Q9.subVectors(this.a,this.b),v8.cross(Q9).length()*0.5}getMidpoint(Q){return Q.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(Q){return P8.getNormal(this.a,this.b,this.c,Q)}getPlane(Q){return Q.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(Q,Z){return P8.getBarycoord(Q,this.a,this.b,this.c,Z)}getUV(Q,Z,J,X,H){if(F5===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),F5=!0;return P8.getInterpolation(Q,this.a,this.b,this.c,Z,J,X,H)}getInterpolation(Q,Z,J,X,H){return P8.getInterpolation(Q,this.a,this.b,this.c,Z,J,X,H)}containsPoint(Q){return P8.containsPoint(Q,this.a,this.b,this.c)}isFrontFacing(Q){return P8.isFrontFacing(this.a,this.b,this.c,Q)}intersectsBox(Q){return Q.intersectsTriangle(this)}closestPointToPoint(Q,Z){let J=this.a,X=this.b,H=this.c,q,G;c9.subVectors(X,J),s9.subVectors(H,J),zQ.subVectors(Q,J);let V=c9.dot(zQ),R=s9.dot(zQ);if(V<=0&&R<=0)return Z.copy(J);EQ.subVectors(Q,X);let U=c9.dot(EQ),B=s9.dot(EQ);if(U>=0&&B<=U)return Z.copy(X);let z=V*B-U*R;if(z<=0&&V>=0&&U<=0)return q=V/(V-U),Z.copy(J).addScaledVector(c9,q);BQ.subVectors(Q,H);let I=c9.dot(BQ),w=s9.dot(BQ);if(w>=0&&I<=w)return Z.copy(H);let j=I*R-V*w;if(j<=0&&R>=0&&w<=0)return G=R/(R-w),Z.copy(J).addScaledVector(s9,G);let f=U*w-I*B;if(f<=0&&B-U>=0&&I-w>=0)return BJ.subVectors(H,X),G=(B-U)/(B-U+(I-w)),Z.copy(X).addScaledVector(BJ,G);let k=1/(f+j+z);return q=j*k,G=z*k,Z.copy(J).addScaledVector(c9,q).addScaledVector(s9,G)}equals(Q){return Q.a.equals(this.a)&&Q.b.equals(this.b)&&Q.c.equals(this.c)}}var GW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},N9={h:0,s:0,l:0},G5={h:0,s:0,l:0};function IQ(Q,Z,J){if(J<0)J+=1;if(J>1)J-=1;if(J<0.16666666666666666)return Q+(Z-Q)*6*J;if(J<0.5)return Z;if(J<0.6666666666666666)return Q+(Z-Q)*6*(0.6666666666666666-J);return Q}class L7{constructor(Q,Z,J){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(Q,Z,J)}set(Q,Z,J){if(Z===void 0&&J===void 0){let X=Q;if(X&&X.isColor)this.copy(X);else if(typeof X==="number")this.setHex(X);else if(typeof X==="string")this.setStyle(X)}else this.setRGB(Q,Z,J);return this}setScalar(Q){return this.r=Q,this.g=Q,this.b=Q,this}setHex(Q,Z="srgb"){return Q=Math.floor(Q),this.r=(Q>>16&255)/255,this.g=(Q>>8&255)/255,this.b=(Q&255)/255,p7.toWorkingColorSpace(this,Z),this}setRGB(Q,Z,J,X=p7.workingColorSpace){return this.r=Q,this.g=Z,this.b=J,p7.toWorkingColorSpace(this,X),this}setHSL(Q,Z,J,X=p7.workingColorSpace){if(Q=lQ(Q,1),Z=X8(Z,0,1),J=X8(J,0,1),Z===0)this.r=this.g=this.b=J;else{let H=J<=0.5?J*(1+Z):J+Z-J*Z,q=2*J-H;this.r=IQ(q,H,Q+0.3333333333333333),this.g=IQ(q,H,Q),this.b=IQ(q,H,Q-0.3333333333333333)}return p7.toWorkingColorSpace(this,X),this}setStyle(Q,Z="srgb"){function J(H){if(H===void 0)return;if(parseFloat(H)<1)console.warn("THREE.Color: Alpha component of "+Q+" will be ignored.")}let X;if(X=/^(\w+)\(([^\)]*)\)/.exec(Q)){let H,q=X[1],G=X[2];switch(q){case"rgb":case"rgba":if(H=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(G))return J(H[4]),this.setRGB(Math.min(255,parseInt(H[1],10))/255,Math.min(255,parseInt(H[2],10))/255,Math.min(255,parseInt(H[3],10))/255,Z);if(H=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(G))return J(H[4]),this.setRGB(Math.min(100,parseInt(H[1],10))/100,Math.min(100,parseInt(H[2],10))/100,Math.min(100,parseInt(H[3],10))/100,Z);break;case"hsl":case"hsla":if(H=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(G))return J(H[4]),this.setHSL(parseFloat(H[1])/360,parseFloat(H[2])/100,parseFloat(H[3])/100,Z);break;default:console.warn("THREE.Color: Unknown color model "+Q)}}else if(X=/^\#([A-Fa-f\d]+)$/.exec(Q)){let H=X[1],q=H.length;if(q===3)return this.setRGB(parseInt(H.charAt(0),16)/15,parseInt(H.charAt(1),16)/15,parseInt(H.charAt(2),16)/15,Z);else if(q===6)return this.setHex(parseInt(H,16),Z);else console.warn("THREE.Color: Invalid hex color "+Q)}else if(Q&&Q.length>0)return this.setColorName(Q,Z);return this}setColorName(Q,Z="srgb"){let J=GW[Q.toLowerCase()];if(J!==void 0)this.setHex(J,Z);else console.warn("THREE.Color: Unknown color "+Q);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(Q){return this.r=Q.r,this.g=Q.g,this.b=Q.b,this}copySRGBToLinear(Q){return this.r=H6(Q.r),this.g=H6(Q.g),this.b=H6(Q.b),this}copyLinearToSRGB(Q){return this.r=qQ(Q.r),this.g=qQ(Q.g),this.b=qQ(Q.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(Q="srgb"){return p7.fromWorkingColorSpace(N8.copy(this),Q),Math.round(X8(N8.r*255,0,255))*65536+Math.round(X8(N8.g*255,0,255))*256+Math.round(X8(N8.b*255,0,255))}getHexString(Q="srgb"){return("000000"+this.getHex(Q).toString(16)).slice(-6)}getHSL(Q,Z=p7.workingColorSpace){p7.fromWorkingColorSpace(N8.copy(this),Z);let{r:J,g:X,b:H}=N8,q=Math.max(J,X,H),G=Math.min(J,X,H),V,R,U=(G+q)/2;if(G===q)V=0,R=0;else{let B=q-G;switch(R=U<=0.5?B/(q+G):B/(2-q-G),q){case J:V=(X-H)/B+(X<H?6:0);break;case X:V=(H-J)/B+2;break;case H:V=(J-X)/B+4;break}V/=6}return Q.h=V,Q.s=R,Q.l=U,Q}getRGB(Q,Z=p7.workingColorSpace){return p7.fromWorkingColorSpace(N8.copy(this),Z),Q.r=N8.r,Q.g=N8.g,Q.b=N8.b,Q}getStyle(Q="srgb"){p7.fromWorkingColorSpace(N8.copy(this),Q);let{r:Z,g:J,b:X}=N8;if(Q!=="srgb")return`color(${Q} ${Z.toFixed(3)} ${J.toFixed(3)} ${X.toFixed(3)})`;return`rgb(${Math.round(Z*255)},${Math.round(J*255)},${Math.round(X*255)})`}offsetHSL(Q,Z,J){return this.getHSL(N9),this.setHSL(N9.h+Q,N9.s+Z,N9.l+J)}add(Q){return this.r+=Q.r,this.g+=Q.g,this.b+=Q.b,this}addColors(Q,Z){return this.r=Q.r+Z.r,this.g=Q.g+Z.g,this.b=Q.b+Z.b,this}addScalar(Q){return this.r+=Q,this.g+=Q,this.b+=Q,this}sub(Q){return this.r=Math.max(0,this.r-Q.r),this.g=Math.max(0,this.g-Q.g),this.b=Math.max(0,this.b-Q.b),this}multiply(Q){return this.r*=Q.r,this.g*=Q.g,this.b*=Q.b,this}multiplyScalar(Q){return this.r*=Q,this.g*=Q,this.b*=Q,this}lerp(Q,Z){return this.r+=(Q.r-this.r)*Z,this.g+=(Q.g-this.g)*Z,this.b+=(Q.b-this.b)*Z,this}lerpColors(Q,Z,J){return this.r=Q.r+(Z.r-Q.r)*J,this.g=Q.g+(Z.g-Q.g)*J,this.b=Q.b+(Z.b-Q.b)*J,this}lerpHSL(Q,Z){this.getHSL(N9),Q.getHSL(G5);let J=f6(N9.h,G5.h,Z),X=f6(N9.s,G5.s,Z),H=f6(N9.l,G5.l,Z);return this.setHSL(J,X,H),this}setFromVector3(Q){return this.r=Q.x,this.g=Q.y,this.b=Q.z,this}applyMatrix3(Q){let Z=this.r,J=this.g,X=this.b,H=Q.elements;return this.r=H[0]*Z+H[3]*J+H[6]*X,this.g=H[1]*Z+H[4]*J+H[7]*X,this.b=H[2]*Z+H[5]*J+H[8]*X,this}equals(Q){return Q.r===this.r&&Q.g===this.g&&Q.b===this.b}fromArray(Q,Z=0){return this.r=Q[Z],this.g=Q[Z+1],this.b=Q[Z+2],this}toArray(Q=[],Z=0){return Q[Z]=this.r,Q[Z+1]=this.g,Q[Z+2]=this.b,Q}fromBufferAttribute(Q,Z){return this.r=Q.getX(Z),this.g=Q.getY(Z),this.b=Q.getZ(Z),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var N8=new L7;L7.NAMES=GW;var BX=0;class _9 extends J9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:BX++}),this.uuid=u8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new L7(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(Q){if(this._alphaTest>0!==Q>0)this.version++;this._alphaTest=Q}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(Q){if(Q===void 0)return;for(let Z in Q){let J=Q[Z];if(J===void 0){console.warn(`THREE.Material: parameter '${Z}' has value of undefined.`);continue}let X=this[Z];if(X===void 0){console.warn(`THREE.Material: '${Z}' is not a property of THREE.${this.type}.`);continue}if(X&&X.isColor)X.set(J);else if(X&&X.isVector3&&(J&&J.isVector3))X.copy(J);else this[Z]=J}}toJSON(Q){let Z=Q===void 0||typeof Q==="string";if(Z)Q={textures:{},images:{}};let J={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(this.color&&this.color.isColor)J.color=this.color.getHex();if(this.roughness!==void 0)J.roughness=this.roughness;if(this.metalness!==void 0)J.metalness=this.metalness;if(this.sheen!==void 0)J.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)J.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)J.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)J.emissive=this.emissive.getHex();if(this.emissiveIntensity&&this.emissiveIntensity!==1)J.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)J.specular=this.specular.getHex();if(this.specularIntensity!==void 0)J.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)J.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)J.shininess=this.shininess;if(this.clearcoat!==void 0)J.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)J.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)J.clearcoatMap=this.clearcoatMap.toJSON(Q).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)J.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(Q).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)J.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(Q).uuid,J.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.iridescence!==void 0)J.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)J.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)J.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)J.iridescenceMap=this.iridescenceMap.toJSON(Q).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)J.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(Q).uuid;if(this.anisotropy!==void 0)J.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)J.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)J.anisotropyMap=this.anisotropyMap.toJSON(Q).uuid;if(this.map&&this.map.isTexture)J.map=this.map.toJSON(Q).uuid;if(this.matcap&&this.matcap.isTexture)J.matcap=this.matcap.toJSON(Q).uuid;if(this.alphaMap&&this.alphaMap.isTexture)J.alphaMap=this.alphaMap.toJSON(Q).uuid;if(this.lightMap&&this.lightMap.isTexture)J.lightMap=this.lightMap.toJSON(Q).uuid,J.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)J.aoMap=this.aoMap.toJSON(Q).uuid,J.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)J.bumpMap=this.bumpMap.toJSON(Q).uuid,J.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)J.normalMap=this.normalMap.toJSON(Q).uuid,J.normalMapType=this.normalMapType,J.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)J.displacementMap=this.displacementMap.toJSON(Q).uuid,J.displacementScale=this.displacementScale,J.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)J.roughnessMap=this.roughnessMap.toJSON(Q).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)J.metalnessMap=this.metalnessMap.toJSON(Q).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)J.emissiveMap=this.emissiveMap.toJSON(Q).uuid;if(this.specularMap&&this.specularMap.isTexture)J.specularMap=this.specularMap.toJSON(Q).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)J.specularIntensityMap=this.specularIntensityMap.toJSON(Q).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)J.specularColorMap=this.specularColorMap.toJSON(Q).uuid;if(this.envMap&&this.envMap.isTexture){if(J.envMap=this.envMap.toJSON(Q).uuid,this.combine!==void 0)J.combine=this.combine}if(this.envMapIntensity!==void 0)J.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)J.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)J.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)J.gradientMap=this.gradientMap.toJSON(Q).uuid;if(this.transmission!==void 0)J.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)J.transmissionMap=this.transmissionMap.toJSON(Q).uuid;if(this.thickness!==void 0)J.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)J.thicknessMap=this.thicknessMap.toJSON(Q).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)J.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)J.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)J.size=this.size;if(this.shadowSide!==null)J.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)J.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)J.blending=this.blending;if(this.side!==0)J.side=this.side;if(this.vertexColors===!0)J.vertexColors=!0;if(this.opacity<1)J.opacity=this.opacity;if(this.transparent===!0)J.transparent=!0;if(this.blendSrc!==204)J.blendSrc=this.blendSrc;if(this.blendDst!==205)J.blendDst=this.blendDst;if(this.blendEquation!==100)J.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)J.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)J.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)J.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)J.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)J.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)J.depthFunc=this.depthFunc;if(this.depthTest===!1)J.depthTest=this.depthTest;if(this.depthWrite===!1)J.depthWrite=this.depthWrite;if(this.colorWrite===!1)J.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)J.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)J.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)J.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)J.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)J.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)J.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)J.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)J.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)J.rotation=this.rotation;if(this.polygonOffset===!0)J.polygonOffset=!0;if(this.polygonOffsetFactor!==0)J.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)J.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)J.linewidth=this.linewidth;if(this.dashSize!==void 0)J.dashSize=this.dashSize;if(this.gapSize!==void 0)J.gapSize=this.gapSize;if(this.scale!==void 0)J.scale=this.scale;if(this.dithering===!0)J.dithering=!0;if(this.alphaTest>0)J.alphaTest=this.alphaTest;if(this.alphaHash===!0)J.alphaHash=!0;if(this.alphaToCoverage===!0)J.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)J.premultipliedAlpha=!0;if(this.forceSinglePass===!0)J.forceSinglePass=!0;if(this.wireframe===!0)J.wireframe=!0;if(this.wireframeLinewidth>1)J.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")J.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")J.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)J.flatShading=!0;if(this.visible===!1)J.visible=!1;if(this.toneMapped===!1)J.toneMapped=!1;if(this.fog===!1)J.fog=!1;if(Object.keys(this.userData).length>0)J.userData=this.userData;function X(H){let q=[];for(let G in H){let V=H[G];delete V.metadata,q.push(V)}return q}if(Z){let H=X(Q.textures),q=X(Q.images);if(H.length>0)J.textures=H;if(q.length>0)J.images=q}return J}clone(){return new this.constructor().copy(this)}copy(Q){this.name=Q.name,this.blending=Q.blending,this.side=Q.side,this.vertexColors=Q.vertexColors,this.opacity=Q.opacity,this.transparent=Q.transparent,this.blendSrc=Q.blendSrc,this.blendDst=Q.blendDst,this.blendEquation=Q.blendEquation,this.blendSrcAlpha=Q.blendSrcAlpha,this.blendDstAlpha=Q.blendDstAlpha,this.blendEquationAlpha=Q.blendEquationAlpha,this.blendColor.copy(Q.blendColor),this.blendAlpha=Q.blendAlpha,this.depthFunc=Q.depthFunc,this.depthTest=Q.depthTest,this.depthWrite=Q.depthWrite,this.stencilWriteMask=Q.stencilWriteMask,this.stencilFunc=Q.stencilFunc,this.stencilRef=Q.stencilRef,this.stencilFuncMask=Q.stencilFuncMask,this.stencilFail=Q.stencilFail,this.stencilZFail=Q.stencilZFail,this.stencilZPass=Q.stencilZPass,this.stencilWrite=Q.stencilWrite;let Z=Q.clippingPlanes,J=null;if(Z!==null){let X=Z.length;J=Array(X);for(let H=0;H!==X;++H)J[H]=Z[H].clone()}return this.clippingPlanes=J,this.clipIntersection=Q.clipIntersection,this.clipShadows=Q.clipShadows,this.shadowSide=Q.shadowSide,this.colorWrite=Q.colorWrite,this.precision=Q.precision,this.polygonOffset=Q.polygonOffset,this.polygonOffsetFactor=Q.polygonOffsetFactor,this.polygonOffsetUnits=Q.polygonOffsetUnits,this.dithering=Q.dithering,this.alphaTest=Q.alphaTest,this.alphaHash=Q.alphaHash,this.alphaToCoverage=Q.alphaToCoverage,this.premultipliedAlpha=Q.premultipliedAlpha,this.forceSinglePass=Q.forceSinglePass,this.visible=Q.visible,this.toneMapped=Q.toneMapped,this.userData=JSON.parse(JSON.stringify(Q.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(Q){if(Q===!0)this.version++}}class nQ extends _9{constructor(Q){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new L7(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(Q)}copy(Q){return super.copy(Q),this.color.copy(Q.color),this.map=Q.map,this.lightMap=Q.lightMap,this.lightMapIntensity=Q.lightMapIntensity,this.aoMap=Q.aoMap,this.aoMapIntensity=Q.aoMapIntensity,this.specularMap=Q.specularMap,this.alphaMap=Q.alphaMap,this.envMap=Q.envMap,this.combine=Q.combine,this.reflectivity=Q.reflectivity,this.refractionRatio=Q.refractionRatio,this.wireframe=Q.wireframe,this.wireframeLinewidth=Q.wireframeLinewidth,this.wireframeLinecap=Q.wireframeLinecap,this.wireframeLinejoin=Q.wireframeLinejoin,this.fog=Q.fog,this}}var e7=new Q0,N5=new h0;class q8{constructor(Q,Z,J=!1){if(Array.isArray(Q))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=Q,this.itemSize=Z,this.count=Q!==void 0?Q.length/Z:0,this.normalized=J,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(Q){if(Q===!0)this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(Q){return this.usage=Q,this}addUpdateRange(Q,Z){this.updateRanges.push({start:Q,count:Z})}clearUpdateRanges(){this.updateRanges.length=0}copy(Q){return this.name=Q.name,this.array=new Q.array.constructor(Q.array),this.itemSize=Q.itemSize,this.count=Q.count,this.normalized=Q.normalized,this.usage=Q.usage,this.gpuType=Q.gpuType,this}copyAt(Q,Z,J){Q*=this.itemSize,J*=Z.itemSize;for(let X=0,H=this.itemSize;X<H;X++)this.array[Q+X]=Z.array[J+X];return this}copyArray(Q){return this.array.set(Q),this}applyMatrix3(Q){if(this.itemSize===2)for(let Z=0,J=this.count;Z<J;Z++)N5.fromBufferAttribute(this,Z),N5.applyMatrix3(Q),this.setXY(Z,N5.x,N5.y);else if(this.itemSize===3)for(let Z=0,J=this.count;Z<J;Z++)e7.fromBufferAttribute(this,Z),e7.applyMatrix3(Q),this.setXYZ(Z,e7.x,e7.y,e7.z);return this}applyMatrix4(Q){for(let Z=0,J=this.count;Z<J;Z++)e7.fromBufferAttribute(this,Z),e7.applyMatrix4(Q),this.setXYZ(Z,e7.x,e7.y,e7.z);return this}applyNormalMatrix(Q){for(let Z=0,J=this.count;Z<J;Z++)e7.fromBufferAttribute(this,Z),e7.applyNormalMatrix(Q),this.setXYZ(Z,e7.x,e7.y,e7.z);return this}transformDirection(Q){for(let Z=0,J=this.count;Z<J;Z++)e7.fromBufferAttribute(this,Z),e7.transformDirection(Q),this.setXYZ(Z,e7.x,e7.y,e7.z);return this}set(Q,Z=0){return this.array.set(Q,Z),this}getComponent(Q,Z){let J=this.array[Q*this.itemSize+Z];if(this.normalized)J=l8(J,this.array);return J}setComponent(Q,Z,J){if(this.normalized)J=h7(J,this.array);return this.array[Q*this.itemSize+Z]=J,this}getX(Q){let Z=this.array[Q*this.itemSize];if(this.normalized)Z=l8(Z,this.array);return Z}setX(Q,Z){if(this.normalized)Z=h7(Z,this.array);return this.array[Q*this.itemSize]=Z,this}getY(Q){let Z=this.array[Q*this.itemSize+1];if(this.normalized)Z=l8(Z,this.array);return Z}setY(Q,Z){if(this.normalized)Z=h7(Z,this.array);return this.array[Q*this.itemSize+1]=Z,this}getZ(Q){let Z=this.array[Q*this.itemSize+2];if(this.normalized)Z=l8(Z,this.array);return Z}setZ(Q,Z){if(this.normalized)Z=h7(Z,this.array);return this.array[Q*this.itemSize+2]=Z,this}getW(Q){let Z=this.array[Q*this.itemSize+3];if(this.normalized)Z=l8(Z,this.array);return Z}setW(Q,Z){if(this.normalized)Z=h7(Z,this.array);return this.array[Q*this.itemSize+3]=Z,this}setXY(Q,Z,J){if(Q*=this.itemSize,this.normalized)Z=h7(Z,this.array),J=h7(J,this.array);return this.array[Q+0]=Z,this.array[Q+1]=J,this}setXYZ(Q,Z,J,X){if(Q*=this.itemSize,this.normalized)Z=h7(Z,this.array),J=h7(J,this.array),X=h7(X,this.array);return this.array[Q+0]=Z,this.array[Q+1]=J,this.array[Q+2]=X,this}setXYZW(Q,Z,J,X,H){if(Q*=this.itemSize,this.normalized)Z=h7(Z,this.array),J=h7(J,this.array),X=h7(X,this.array),H=h7(H,this.array);return this.array[Q+0]=Z,this.array[Q+1]=J,this.array[Q+2]=X,this.array[Q+3]=H,this}onUpload(Q){return this.onUploadCallback=Q,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let Q={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")Q.name=this.name;if(this.usage!==35044)Q.usage=this.usage;return Q}}class iQ extends q8{constructor(Q,Z,J){super(new Uint16Array(Q),Z,J)}}class oQ extends q8{constructor(Q,Z,J){super(new Uint32Array(Q),Z,J)}}class z8 extends q8{constructor(Q,Z,J){super(new Float32Array(Q),Z,J)}}var IX=0,w8=new o7,LQ=new Z8,n9=new Q0,k8=new D9,P6=new D9,$8=new Q0;class T8 extends J9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IX++}),this.uuid=u8(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(Q){if(Array.isArray(Q))this.index=new((qW(Q))?oQ:iQ)(Q,1);else this.index=Q;return this}getAttribute(Q){return this.attributes[Q]}setAttribute(Q,Z){return this.attributes[Q]=Z,this}deleteAttribute(Q){return delete this.attributes[Q],this}hasAttribute(Q){return this.attributes[Q]!==void 0}addGroup(Q,Z,J=0){this.groups.push({start:Q,count:Z,materialIndex:J})}clearGroups(){this.groups=[]}setDrawRange(Q,Z){this.drawRange.start=Q,this.drawRange.count=Z}applyMatrix4(Q){let Z=this.attributes.position;if(Z!==void 0)Z.applyMatrix4(Q),Z.needsUpdate=!0;let J=this.attributes.normal;if(J!==void 0){let H=new C7().getNormalMatrix(Q);J.applyNormalMatrix(H),J.needsUpdate=!0}let X=this.attributes.tangent;if(X!==void 0)X.transformDirection(Q),X.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(Q){return w8.makeRotationFromQuaternion(Q),this.applyMatrix4(w8),this}rotateX(Q){return w8.makeRotationX(Q),this.applyMatrix4(w8),this}rotateY(Q){return w8.makeRotationY(Q),this.applyMatrix4(w8),this}rotateZ(Q){return w8.makeRotationZ(Q),this.applyMatrix4(w8),this}translate(Q,Z,J){return w8.makeTranslation(Q,Z,J),this.applyMatrix4(w8),this}scale(Q,Z,J){return w8.makeScale(Q,Z,J),this.applyMatrix4(w8),this}lookAt(Q){return LQ.lookAt(Q),LQ.updateMatrix(),this.applyMatrix4(LQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(n9).negate(),this.translate(n9.x,n9.y,n9.z),this}setFromPoints(Q){let Z=[];for(let J=0,X=Q.length;J<X;J++){let H=Q[J];Z.push(H.x,H.y,H.z||0)}return this.setAttribute("position",new z8(Z,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new D9;let Q=this.attributes.position,Z=this.morphAttributes.position;if(Q&&Q.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q0(-1/0,-1/0,-1/0),new Q0(1/0,1/0,1/0));return}if(Q!==void 0){if(this.boundingBox.setFromBufferAttribute(Q),Z)for(let J=0,X=Z.length;J<X;J++){let H=Z[J];if(k8.setFromBufferAttribute(H),this.morphTargetsRelative)$8.addVectors(this.boundingBox.min,k8.min),this.boundingBox.expandByPoint($8),$8.addVectors(this.boundingBox.max,k8.max),this.boundingBox.expandByPoint($8);else this.boundingBox.expandByPoint(k8.min),this.boundingBox.expandByPoint(k8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new c6;let Q=this.attributes.position,Z=this.morphAttributes.position;if(Q&&Q.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q0,1/0);return}if(Q){let J=this.boundingSphere.center;if(k8.setFromBufferAttribute(Q),Z)for(let H=0,q=Z.length;H<q;H++){let G=Z[H];if(P6.setFromBufferAttribute(G),this.morphTargetsRelative)$8.addVectors(k8.min,P6.min),k8.expandByPoint($8),$8.addVectors(k8.max,P6.max),k8.expandByPoint($8);else k8.expandByPoint(P6.min),k8.expandByPoint(P6.max)}k8.getCenter(J);let X=0;for(let H=0,q=Q.count;H<q;H++)$8.fromBufferAttribute(Q,H),X=Math.max(X,J.distanceToSquared($8));if(Z)for(let H=0,q=Z.length;H<q;H++){let G=Z[H],V=this.morphTargetsRelative;for(let R=0,U=G.count;R<U;R++){if($8.fromBufferAttribute(G,R),V)n9.fromBufferAttribute(Q,R),$8.add(n9);X=Math.max(X,J.distanceToSquared($8))}}if(this.boundingSphere.radius=Math.sqrt(X),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let Q=this.index,Z=this.attributes;if(Q===null||Z.position===void 0||Z.normal===void 0||Z.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let J=Q.array,X=Z.position.array,H=Z.normal.array,q=Z.uv.array,G=X.length/3;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new q8(new Float32Array(4*G),4));let V=this.getAttribute("tangent").array,R=[],U=[];for(let b=0;b<G;b++)R[b]=new Q0,U[b]=new Q0;let B=new Q0,z=new Q0,I=new Q0,w=new h0,j=new h0,f=new h0,k=new Q0,C=new Q0;function v(b,m,q0){B.fromArray(X,b*3),z.fromArray(X,m*3),I.fromArray(X,q0*3),w.fromArray(q,b*2),j.fromArray(q,m*2),f.fromArray(q,q0*2),z.sub(B),I.sub(B),j.sub(w),f.sub(w);let L0=1/(j.x*f.y-f.x*j.y);if(!isFinite(L0))return;k.copy(z).multiplyScalar(f.y).addScaledVector(I,-j.y).multiplyScalar(L0),C.copy(I).multiplyScalar(j.x).addScaledVector(z,-f.x).multiplyScalar(L0),R[b].add(k),R[m].add(k),R[q0].add(k),U[b].add(C),U[m].add(C),U[q0].add(C)}let x=this.groups;if(x.length===0)x=[{start:0,count:J.length}];for(let b=0,m=x.length;b<m;++b){let q0=x[b],L0=q0.start,S0=q0.count;for(let o=L0,e=L0+S0;o<e;o+=3)v(J[o+0],J[o+1],J[o+2])}let l=new Q0,Z0=new Q0,p=new Q0,$0=new Q0;function z0(b){p.fromArray(H,b*3),$0.copy(p);let m=R[b];l.copy(m),l.sub(p.multiplyScalar(p.dot(m))).normalize(),Z0.crossVectors($0,m);let L0=Z0.dot(U[b])<0?-1:1;V[b*4]=l.x,V[b*4+1]=l.y,V[b*4+2]=l.z,V[b*4+3]=L0}for(let b=0,m=x.length;b<m;++b){let q0=x[b],L0=q0.start,S0=q0.count;for(let o=L0,e=L0+S0;o<e;o+=3)z0(J[o+0]),z0(J[o+1]),z0(J[o+2])}}computeVertexNormals(){let Q=this.index,Z=this.getAttribute("position");if(Z!==void 0){let J=this.getAttribute("normal");if(J===void 0)J=new q8(new Float32Array(Z.count*3),3),this.setAttribute("normal",J);else for(let z=0,I=J.count;z<I;z++)J.setXYZ(z,0,0,0);let X=new Q0,H=new Q0,q=new Q0,G=new Q0,V=new Q0,R=new Q0,U=new Q0,B=new Q0;if(Q)for(let z=0,I=Q.count;z<I;z+=3){let w=Q.getX(z+0),j=Q.getX(z+1),f=Q.getX(z+2);X.fromBufferAttribute(Z,w),H.fromBufferAttribute(Z,j),q.fromBufferAttribute(Z,f),U.subVectors(q,H),B.subVectors(X,H),U.cross(B),G.fromBufferAttribute(J,w),V.fromBufferAttribute(J,j),R.fromBufferAttribute(J,f),G.add(U),V.add(U),R.add(U),J.setXYZ(w,G.x,G.y,G.z),J.setXYZ(j,V.x,V.y,V.z),J.setXYZ(f,R.x,R.y,R.z)}else for(let z=0,I=Z.count;z<I;z+=3)X.fromBufferAttribute(Z,z+0),H.fromBufferAttribute(Z,z+1),q.fromBufferAttribute(Z,z+2),U.subVectors(q,H),B.subVectors(X,H),U.cross(B),J.setXYZ(z+0,U.x,U.y,U.z),J.setXYZ(z+1,U.x,U.y,U.z),J.setXYZ(z+2,U.x,U.y,U.z);this.normalizeNormals(),J.needsUpdate=!0}}normalizeNormals(){let Q=this.attributes.normal;for(let Z=0,J=Q.count;Z<J;Z++)$8.fromBufferAttribute(Q,Z),$8.normalize(),Q.setXYZ(Z,$8.x,$8.y,$8.z)}toNonIndexed(){function Q(G,V){let{array:R,itemSize:U,normalized:B}=G,z=new R.constructor(V.length*U),I=0,w=0;for(let j=0,f=V.length;j<f;j++){if(G.isInterleavedBufferAttribute)I=V[j]*G.data.stride+G.offset;else I=V[j]*U;for(let k=0;k<U;k++)z[w++]=R[I++]}return new q8(z,U,B)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Z=new T8,J=this.index.array,X=this.attributes;for(let G in X){let V=X[G],R=Q(V,J);Z.setAttribute(G,R)}let H=this.morphAttributes;for(let G in H){let V=[],R=H[G];for(let U=0,B=R.length;U<B;U++){let z=R[U],I=Q(z,J);V.push(I)}Z.morphAttributes[G]=V}Z.morphTargetsRelative=this.morphTargetsRelative;let q=this.groups;for(let G=0,V=q.length;G<V;G++){let R=q[G];Z.addGroup(R.start,R.count,R.materialIndex)}return Z}toJSON(){let Q={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,this.name!=="")Q.name=this.name;if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(this.parameters!==void 0){let V=this.parameters;for(let R in V)if(V[R]!==void 0)Q[R]=V[R];return Q}Q.data={attributes:{}};let Z=this.index;if(Z!==null)Q.data.index={type:Z.array.constructor.name,array:Array.prototype.slice.call(Z.array)};let J=this.attributes;for(let V in J){let R=J[V];Q.data.attributes[V]=R.toJSON(Q.data)}let X={},H=!1;for(let V in this.morphAttributes){let R=this.morphAttributes[V],U=[];for(let B=0,z=R.length;B<z;B++){let I=R[B];U.push(I.toJSON(Q.data))}if(U.length>0)X[V]=U,H=!0}if(H)Q.data.morphAttributes=X,Q.data.morphTargetsRelative=this.morphTargetsRelative;let q=this.groups;if(q.length>0)Q.data.groups=JSON.parse(JSON.stringify(q));let G=this.boundingSphere;if(G!==null)Q.data.boundingSphere={center:G.center.toArray(),radius:G.radius};return Q}clone(){return new this.constructor().copy(this)}copy(Q){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Z={};this.name=Q.name;let J=Q.index;if(J!==null)this.setIndex(J.clone(Z));let X=Q.attributes;for(let R in X){let U=X[R];this.setAttribute(R,U.clone(Z))}let H=Q.morphAttributes;for(let R in H){let U=[],B=H[R];for(let z=0,I=B.length;z<I;z++)U.push(B[z].clone(Z));this.morphAttributes[R]=U}this.morphTargetsRelative=Q.morphTargetsRelative;let q=Q.groups;for(let R=0,U=q.length;R<U;R++){let B=q[R];this.addGroup(B.start,B.count,B.materialIndex)}let G=Q.boundingBox;if(G!==null)this.boundingBox=G.clone();let V=Q.boundingSphere;if(V!==null)this.boundingSphere=V.clone();return this.drawRange.start=Q.drawRange.start,this.drawRange.count=Q.drawRange.count,this.userData=Q.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var IJ=new o7,M9=new q6,R5=new c6,LJ=new Q0,i9=new Q0,o9=new Q0,a9=new Q0,MQ=new Q0,U5=new Q0,D5=new h0,_5=new h0,z5=new h0,MJ=new Q0,CJ=new Q0,kJ=new Q0,E5=new Q0,B5=new Q0;class b8 extends Z8{constructor(Q=new T8,Z=new nQ){super();this.isMesh=!0,this.type="Mesh",this.geometry=Q,this.material=Z,this.updateMorphTargets()}copy(Q,Z){if(super.copy(Q,Z),Q.morphTargetInfluences!==void 0)this.morphTargetInfluences=Q.morphTargetInfluences.slice();if(Q.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},Q.morphTargetDictionary);return this.material=Array.isArray(Q.material)?Q.material.slice():Q.material,this.geometry=Q.geometry,this}updateMorphTargets(){let Z=this.geometry.morphAttributes,J=Object.keys(Z);if(J.length>0){let X=Z[J[0]];if(X!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let H=0,q=X.length;H<q;H++){let G=X[H].name||String(H);this.morphTargetInfluences.push(0),this.morphTargetDictionary[G]=H}}}}getVertexPosition(Q,Z){let J=this.geometry,X=J.attributes.position,H=J.morphAttributes.position,q=J.morphTargetsRelative;Z.fromBufferAttribute(X,Q);let G=this.morphTargetInfluences;if(H&&G){U5.set(0,0,0);for(let V=0,R=H.length;V<R;V++){let U=G[V],B=H[V];if(U===0)continue;if(MQ.fromBufferAttribute(B,Q),q)U5.addScaledVector(MQ,U);else U5.addScaledVector(MQ.sub(Z),U)}Z.add(U5)}return Z}raycast(Q,Z){let J=this.geometry,X=this.material,H=this.matrixWorld;if(X===void 0)return;if(J.boundingSphere===null)J.computeBoundingSphere();if(R5.copy(J.boundingSphere),R5.applyMatrix4(H),M9.copy(Q.ray).recast(Q.near),R5.containsPoint(M9.origin)===!1){if(M9.intersectSphere(R5,LJ)===null)return;if(M9.origin.distanceToSquared(LJ)>(Q.far-Q.near)**2)return}if(IJ.copy(H).invert(),M9.copy(Q.ray).applyMatrix4(IJ),J.boundingBox!==null){if(M9.intersectsBox(J.boundingBox)===!1)return}this._computeIntersections(Q,Z,M9)}_computeIntersections(Q,Z,J){let X,H=this.geometry,q=this.material,G=H.index,V=H.attributes.position,R=H.attributes.uv,U=H.attributes.uv1,B=H.attributes.normal,z=H.groups,I=H.drawRange;if(G!==null)if(Array.isArray(q))for(let w=0,j=z.length;w<j;w++){let f=z[w],k=q[f.materialIndex],C=Math.max(f.start,I.start),v=Math.min(G.count,Math.min(f.start+f.count,I.start+I.count));for(let x=C,l=v;x<l;x+=3){let Z0=G.getX(x),p=G.getX(x+1),$0=G.getX(x+2);if(X=I5(this,k,Q,J,R,U,B,Z0,p,$0),X)X.faceIndex=Math.floor(x/3),X.face.materialIndex=f.materialIndex,Z.push(X)}}else{let w=Math.max(0,I.start),j=Math.min(G.count,I.start+I.count);for(let f=w,k=j;f<k;f+=3){let C=G.getX(f),v=G.getX(f+1),x=G.getX(f+2);if(X=I5(this,q,Q,J,R,U,B,C,v,x),X)X.faceIndex=Math.floor(f/3),Z.push(X)}}else if(V!==void 0)if(Array.isArray(q))for(let w=0,j=z.length;w<j;w++){let f=z[w],k=q[f.materialIndex],C=Math.max(f.start,I.start),v=Math.min(V.count,Math.min(f.start+f.count,I.start+I.count));for(let x=C,l=v;x<l;x+=3){let Z0=x,p=x+1,$0=x+2;if(X=I5(this,k,Q,J,R,U,B,Z0,p,$0),X)X.faceIndex=Math.floor(x/3),X.face.materialIndex=f.materialIndex,Z.push(X)}}else{let w=Math.max(0,I.start),j=Math.min(V.count,I.start+I.count);for(let f=w,k=j;f<k;f+=3){let C=f,v=f+1,x=f+2;if(X=I5(this,q,Q,J,R,U,B,C,v,x),X)X.faceIndex=Math.floor(f/3),Z.push(X)}}}}function LX(Q,Z,J,X,H,q,G,V){let R;if(Z.side===1)R=X.intersectTriangle(G,q,H,!0,V);else R=X.intersectTriangle(H,q,G,Z.side===0,V);if(R===null)return null;B5.copy(V),B5.applyMatrix4(Q.matrixWorld);let U=J.ray.origin.distanceTo(B5);if(U<J.near||U>J.far)return null;return{distance:U,point:B5.clone(),object:Q}}function I5(Q,Z,J,X,H,q,G,V,R,U){Q.getVertexPosition(V,i9),Q.getVertexPosition(R,o9),Q.getVertexPosition(U,a9);let B=LX(Q,Z,J,X,i9,o9,a9,E5);if(B){if(H)D5.fromBufferAttribute(H,V),_5.fromBufferAttribute(H,R),z5.fromBufferAttribute(H,U),B.uv=P8.getInterpolation(E5,i9,o9,a9,D5,_5,z5,new h0);if(q)D5.fromBufferAttribute(q,V),_5.fromBufferAttribute(q,R),z5.fromBufferAttribute(q,U),B.uv1=P8.getInterpolation(E5,i9,o9,a9,D5,_5,z5,new h0),B.uv2=B.uv1;if(G){if(MJ.fromBufferAttribute(G,V),CJ.fromBufferAttribute(G,R),kJ.fromBufferAttribute(G,U),B.normal=P8.getInterpolation(E5,i9,o9,a9,MJ,CJ,kJ,new Q0),B.normal.dot(X.direction)>0)B.normal.multiplyScalar(-1)}let z={a:V,b:R,c:U,normal:new Q0,materialIndex:0};P8.getNormal(i9,o9,a9,z.normal),B.face=z}return B}class s6 extends T8{constructor(Q=1,Z=1,J=1,X=1,H=1,q=1){super();this.type="BoxGeometry",this.parameters={width:Q,height:Z,depth:J,widthSegments:X,heightSegments:H,depthSegments:q};let G=this;X=Math.floor(X),H=Math.floor(H),q=Math.floor(q);let V=[],R=[],U=[],B=[],z=0,I=0;w("z","y","x",-1,-1,J,Z,Q,q,H,0),w("z","y","x",1,-1,J,Z,-Q,q,H,1),w("x","z","y",1,1,Q,J,Z,X,q,2),w("x","z","y",1,-1,Q,J,-Z,X,q,3),w("x","y","z",1,-1,Q,Z,J,X,H,4),w("x","y","z",-1,-1,Q,Z,-J,X,H,5),this.setIndex(V),this.setAttribute("position",new z8(R,3)),this.setAttribute("normal",new z8(U,3)),this.setAttribute("uv",new z8(B,2));function w(j,f,k,C,v,x,l,Z0,p,$0,z0){let b=x/p,m=l/$0,q0=x/2,L0=l/2,S0=Z0/2,o=p+1,e=$0+1,D0=0,P0=0,a=new Q0;for(let W0=0;W0<e;W0++){let C0=W0*m-L0;for(let v0=0;v0<o;v0++){let K0=v0*b-q0;a[j]=K0*C,a[f]=C0*v,a[k]=S0,R.push(a.x,a.y,a.z),a[j]=0,a[f]=0,a[k]=Z0>0?1:-1,U.push(a.x,a.y,a.z),B.push(v0/p),B.push(1-W0/$0),D0+=1}}for(let W0=0;W0<$0;W0++)for(let C0=0;C0<p;C0++){let v0=z+C0+o*W0,K0=z+C0+o*(W0+1),M0=z+(C0+1)+o*(W0+1),s0=z+(C0+1)+o*W0;V.push(v0,K0,s0),V.push(K0,M0,s0),P0+=6}G.addGroup(I,P0,z0),I+=P0,z+=D0}}copy(Q){return super.copy(Q),this.parameters=Object.assign({},Q.parameters),this}static fromJSON(Q){return new s6(Q.width,Q.height,Q.depth,Q.widthSegments,Q.heightSegments,Q.depthSegments)}}function K6(Q){let Z={};for(let J in Q){Z[J]={};for(let X in Q[J]){let H=Q[J][X];if(H&&(H.isColor||H.isMatrix3||H.isMatrix4||H.isVector2||H.isVector3||H.isVector4||H.isTexture||H.isQuaternion))if(H.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Z[J][X]=null;else Z[J][X]=H.clone();else if(Array.isArray(H))Z[J][X]=H.slice();else Z[J][X]=H}}return Z}function _8(Q){let Z={};for(let J=0;J<Q.length;J++){let X=K6(Q[J]);for(let H in X)Z[H]=X[H]}return Z}function MX(Q){let Z=[];for(let J=0;J<Q.length;J++)Z.push(Q[J].clone());return Z}function NW(Q){if(Q.getRenderTarget()===null)return Q.outputColorSpace;return p7.workingColorSpace}var CX={clone:K6,merge:_8},kX=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OX=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class U9 extends _9{constructor(Q){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kX,this.fragmentShader=OX,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,Q!==void 0)this.setValues(Q)}copy(Q){return super.copy(Q),this.fragmentShader=Q.fragmentShader,this.vertexShader=Q.vertexShader,this.uniforms=K6(Q.uniforms),this.uniformsGroups=MX(Q.uniformsGroups),this.defines=Object.assign({},Q.defines),this.wireframe=Q.wireframe,this.wireframeLinewidth=Q.wireframeLinewidth,this.fog=Q.fog,this.lights=Q.lights,this.clipping=Q.clipping,this.extensions=Object.assign({},Q.extensions),this.glslVersion=Q.glslVersion,this}toJSON(Q){let Z=super.toJSON(Q);Z.glslVersion=this.glslVersion,Z.uniforms={};for(let X in this.uniforms){let q=this.uniforms[X].value;if(q&&q.isTexture)Z.uniforms[X]={type:"t",value:q.toJSON(Q).uuid};else if(q&&q.isColor)Z.uniforms[X]={type:"c",value:q.getHex()};else if(q&&q.isVector2)Z.uniforms[X]={type:"v2",value:q.toArray()};else if(q&&q.isVector3)Z.uniforms[X]={type:"v3",value:q.toArray()};else if(q&&q.isVector4)Z.uniforms[X]={type:"v4",value:q.toArray()};else if(q&&q.isMatrix3)Z.uniforms[X]={type:"m3",value:q.toArray()};else if(q&&q.isMatrix4)Z.uniforms[X]={type:"m4",value:q.toArray()};else Z.uniforms[X]={value:q}}if(Object.keys(this.defines).length>0)Z.defines=this.defines;Z.vertexShader=this.vertexShader,Z.fragmentShader=this.fragmentShader,Z.lights=this.lights,Z.clipping=this.clipping;let J={};for(let X in this.extensions)if(this.extensions[X]===!0)J[X]=!0;if(Object.keys(J).length>0)Z.extensions=J;return Z}}class aQ extends Z8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new o7,this.projectionMatrix=new o7,this.projectionMatrixInverse=new o7,this.coordinateSystem=2000}copy(Q,Z){return super.copy(Q,Z),this.matrixWorldInverse.copy(Q.matrixWorldInverse),this.projectionMatrix.copy(Q.projectionMatrix),this.projectionMatrixInverse.copy(Q.projectionMatrixInverse),this.coordinateSystem=Q.coordinateSystem,this}getWorldDirection(Q){return super.getWorldDirection(Q).negate()}updateMatrixWorld(Q){super.updateMatrixWorld(Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(Q,Z){super.updateWorldMatrix(Q,Z),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class B8 extends aQ{constructor(Q=50,Z=1,J=0.1,X=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=Q,this.zoom=1,this.near=J,this.far=X,this.focus=10,this.aspect=Z,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(Q,Z){return super.copy(Q,Z),this.fov=Q.fov,this.zoom=Q.zoom,this.near=Q.near,this.far=Q.far,this.focus=Q.focus,this.aspect=Q.aspect,this.view=Q.view===null?null:Object.assign({},Q.view),this.filmGauge=Q.filmGauge,this.filmOffset=Q.filmOffset,this}setFocalLength(Q){let Z=0.5*this.getFilmHeight()/Q;this.fov=g6*2*Math.atan(Z),this.updateProjectionMatrix()}getFocalLength(){let Q=Math.tan(j6*0.5*this.fov);return 0.5*this.getFilmHeight()/Q}getEffectiveFOV(){return g6*2*Math.atan(Math.tan(j6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(Q,Z,J,X,H,q){if(this.aspect=Q/Z,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=Q,this.view.fullHeight=Z,this.view.offsetX=J,this.view.offsetY=X,this.view.width=H,this.view.height=q,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let Q=this.near,Z=Q*Math.tan(j6*0.5*this.fov)/this.zoom,J=2*Z,X=this.aspect*J,H=-0.5*X,q=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:V,fullHeight:R}=q;H+=q.offsetX*X/V,Z-=q.offsetY*J/R,X*=q.width/V,J*=q.height/R}let G=this.filmOffset;if(G!==0)H+=Q*G/this.getFilmWidth();this.projectionMatrix.makePerspective(H,H+X,Z,Z-J,Q,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(Q){let Z=super.toJSON(Q);if(Z.object.fov=this.fov,Z.object.zoom=this.zoom,Z.object.near=this.near,Z.object.far=this.far,Z.object.focus=this.focus,Z.object.aspect=this.aspect,this.view!==null)Z.object.view=Object.assign({},this.view);return Z.object.filmGauge=this.filmGauge,Z.object.filmOffset=this.filmOffset,Z}}var r9=-90,t9=1;class RW extends Z8{constructor(Q,Z,J){super();this.type="CubeCamera",this.renderTarget=J,this.coordinateSystem=null,this.activeMipmapLevel=0;let X=new B8(r9,t9,Q,Z);X.layers=this.layers,this.add(X);let H=new B8(r9,t9,Q,Z);H.layers=this.layers,this.add(H);let q=new B8(r9,t9,Q,Z);q.layers=this.layers,this.add(q);let G=new B8(r9,t9,Q,Z);G.layers=this.layers,this.add(G);let V=new B8(r9,t9,Q,Z);V.layers=this.layers,this.add(V);let R=new B8(r9,t9,Q,Z);R.layers=this.layers,this.add(R)}updateCoordinateSystem(){let Q=this.coordinateSystem,Z=this.children.concat(),[J,X,H,q,G,V]=Z;for(let R of Z)this.remove(R);if(Q===2000)J.up.set(0,1,0),J.lookAt(1,0,0),X.up.set(0,1,0),X.lookAt(-1,0,0),H.up.set(0,0,-1),H.lookAt(0,1,0),q.up.set(0,0,1),q.lookAt(0,-1,0),G.up.set(0,1,0),G.lookAt(0,0,1),V.up.set(0,1,0),V.lookAt(0,0,-1);else if(Q===2001)J.up.set(0,-1,0),J.lookAt(-1,0,0),X.up.set(0,-1,0),X.lookAt(1,0,0),H.up.set(0,0,1),H.lookAt(0,1,0),q.up.set(0,0,-1),q.lookAt(0,-1,0),G.up.set(0,-1,0),G.lookAt(0,0,1),V.up.set(0,-1,0),V.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+Q);for(let R of Z)this.add(R),R.updateMatrixWorld()}update(Q,Z){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:J,activeMipmapLevel:X}=this;if(this.coordinateSystem!==Q.coordinateSystem)this.coordinateSystem=Q.coordinateSystem,this.updateCoordinateSystem();let[H,q,G,V,R,U]=this.children,B=Q.getRenderTarget(),z=Q.getActiveCubeFace(),I=Q.getActiveMipmapLevel(),w=Q.xr.enabled;Q.xr.enabled=!1;let j=J.texture.generateMipmaps;J.texture.generateMipmaps=!1,Q.setRenderTarget(J,0,X),Q.render(Z,H),Q.setRenderTarget(J,1,X),Q.render(Z,q),Q.setRenderTarget(J,2,X),Q.render(Z,G),Q.setRenderTarget(J,3,X),Q.render(Z,V),Q.setRenderTarget(J,4,X),Q.render(Z,R),J.texture.generateMipmaps=j,Q.setRenderTarget(J,5,X),Q.render(Z,U),Q.setRenderTarget(B,z,I),Q.xr.enabled=w,J.texture.needsPMREMUpdate=!0}}class rQ extends I8{constructor(Q,Z,J,X,H,q,G,V,R,U){Q=Q!==void 0?Q:[],Z=Z!==void 0?Z:301;super(Q,Z,J,X,H,q,G,V,R,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(Q){this.image=Q}}class UW extends R9{constructor(Q=1,Z={}){super(Q,Q,Z);this.isWebGLCubeRenderTarget=!0;let J={width:Q,height:Q,depth:1},X=[J,J,J,J,J,J];if(Z.encoding!==void 0)x6("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),Z.colorSpace=Z.encoding===3001?"srgb":"";this.texture=new rQ(X,Z.mapping,Z.wrapS,Z.wrapT,Z.magFilter,Z.minFilter,Z.format,Z.type,Z.anisotropy,Z.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=Z.generateMipmaps!==void 0?Z.generateMipmaps:!1,this.texture.minFilter=Z.minFilter!==void 0?Z.minFilter:1006}fromEquirectangularTexture(Q,Z){this.texture.type=Z.type,this.texture.colorSpace=Z.colorSpace,this.texture.generateMipmaps=Z.generateMipmaps,this.texture.minFilter=Z.minFilter,this.texture.magFilter=Z.magFilter;let J={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},X=new s6(5,5,5),H=new U9({name:"CubemapFromEquirect",uniforms:K6(J.uniforms),vertexShader:J.vertexShader,fragmentShader:J.fragmentShader,side:1,blending:0});H.uniforms.tEquirect.value=Z;let q=new b8(X,H),G=Z.minFilter;if(Z.minFilter===1008)Z.minFilter=1006;return new RW(1,10,this).update(Q,q),Z.minFilter=G,q.geometry.dispose(),q.material.dispose(),this}clear(Q,Z,J,X){let H=Q.getRenderTarget();for(let q=0;q<6;q++)Q.setRenderTarget(this,q),Q.clear(Z,J,X);Q.setRenderTarget(H)}}var CQ=new Q0,wX=new Q0,PX=new C7;class A8{constructor(Q=new Q0(1,0,0),Z=0){this.isPlane=!0,this.normal=Q,this.constant=Z}set(Q,Z){return this.normal.copy(Q),this.constant=Z,this}setComponents(Q,Z,J,X){return this.normal.set(Q,Z,J),this.constant=X,this}setFromNormalAndCoplanarPoint(Q,Z){return this.normal.copy(Q),this.constant=-Z.dot(this.normal),this}setFromCoplanarPoints(Q,Z,J){let X=CQ.subVectors(J,Z).cross(wX.subVectors(Q,Z)).normalize();return this.setFromNormalAndCoplanarPoint(X,Q),this}copy(Q){return this.normal.copy(Q.normal),this.constant=Q.constant,this}normalize(){let Q=1/this.normal.length();return this.normal.multiplyScalar(Q),this.constant*=Q,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(Q){return this.normal.dot(Q)+this.constant}distanceToSphere(Q){return this.distanceToPoint(Q.center)-Q.radius}projectPoint(Q,Z){return Z.copy(Q).addScaledVector(this.normal,-this.distanceToPoint(Q))}intersectLine(Q,Z){let J=Q.delta(CQ),X=this.normal.dot(J);if(X===0){if(this.distanceToPoint(Q.start)===0)return Z.copy(Q.start);return null}let H=-(Q.start.dot(this.normal)+this.constant)/X;if(H<0||H>1)return null;return Z.copy(Q.start).addScaledVector(J,H)}intersectsLine(Q){let Z=this.distanceToPoint(Q.start),J=this.distanceToPoint(Q.end);return Z<0&&J>0||J<0&&Z>0}intersectsBox(Q){return Q.intersectsPlane(this)}intersectsSphere(Q){return Q.intersectsPlane(this)}coplanarPoint(Q){return Q.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(Q,Z){let J=Z||PX.getNormalMatrix(Q),X=this.coplanarPoint(CQ).applyMatrix4(Q),H=this.normal.applyMatrix3(J).normalize();return this.constant=-X.dot(H),this}translate(Q){return this.constant-=Q.dot(this.normal),this}equals(Q){return Q.normal.equals(this.normal)&&Q.constant===this.constant}clone(){return new this.constructor().copy(this)}}var C9=new c6,L5=new Q0;class h5{constructor(Q=new A8,Z=new A8,J=new A8,X=new A8,H=new A8,q=new A8){this.planes=[Q,Z,J,X,H,q]}set(Q,Z,J,X,H,q){let G=this.planes;return G[0].copy(Q),G[1].copy(Z),G[2].copy(J),G[3].copy(X),G[4].copy(H),G[5].copy(q),this}copy(Q){let Z=this.planes;for(let J=0;J<6;J++)Z[J].copy(Q.planes[J]);return this}setFromProjectionMatrix(Q,Z=2000){let J=this.planes,X=Q.elements,H=X[0],q=X[1],G=X[2],V=X[3],R=X[4],U=X[5],B=X[6],z=X[7],I=X[8],w=X[9],j=X[10],f=X[11],k=X[12],C=X[13],v=X[14],x=X[15];if(J[0].setComponents(V-H,z-R,f-I,x-k).normalize(),J[1].setComponents(V+H,z+R,f+I,x+k).normalize(),J[2].setComponents(V+q,z+U,f+w,x+C).normalize(),J[3].setComponents(V-q,z-U,f-w,x-C).normalize(),J[4].setComponents(V-G,z-B,f-j,x-v).normalize(),Z===2000)J[5].setComponents(V+G,z+B,f+j,x+v).normalize();else if(Z===2001)J[5].setComponents(G,B,j,v).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Z);return this}intersectsObject(Q){if(Q.boundingSphere!==void 0){if(Q.boundingSphere===null)Q.computeBoundingSphere();C9.copy(Q.boundingSphere).applyMatrix4(Q.matrixWorld)}else{let Z=Q.geometry;if(Z.boundingSphere===null)Z.computeBoundingSphere();C9.copy(Z.boundingSphere).applyMatrix4(Q.matrixWorld)}return this.intersectsSphere(C9)}intersectsSprite(Q){return C9.center.set(0,0,0),C9.radius=0.7071067811865476,C9.applyMatrix4(Q.matrixWorld),this.intersectsSphere(C9)}intersectsSphere(Q){let Z=this.planes,J=Q.center,X=-Q.radius;for(let H=0;H<6;H++)if(Z[H].distanceToPoint(J)<X)return!1;return!0}intersectsBox(Q){let Z=this.planes;for(let J=0;J<6;J++){let X=Z[J];if(L5.x=X.normal.x>0?Q.max.x:Q.min.x,L5.y=X.normal.y>0?Q.max.y:Q.min.y,L5.z=X.normal.z>0?Q.max.z:Q.min.z,X.distanceToPoint(L5)<0)return!1}return!0}containsPoint(Q){let Z=this.planes;for(let J=0;J<6;J++)if(Z[J].distanceToPoint(Q)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function DW(){let Q=null,Z=!1,J=null,X=null;function H(q,G){J(q,G),X=Q.requestAnimationFrame(H)}return{start:function(){if(Z===!0)return;if(J===null)return;X=Q.requestAnimationFrame(H),Z=!0},stop:function(){Q.cancelAnimationFrame(X),Z=!1},setAnimationLoop:function(q){J=q},setContext:function(q){Q=q}}}function AX(Q,Z){let J=Z.isWebGL2,X=new WeakMap;function H(U,B){let{array:z,usage:I}=U,w=z.byteLength,j=Q.createBuffer();Q.bindBuffer(B,j),Q.bufferData(B,z,I),U.onUploadCallback();let f;if(z instanceof Float32Array)f=Q.FLOAT;else if(z instanceof Uint16Array)if(U.isFloat16BufferAttribute)if(J)f=Q.HALF_FLOAT;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else f=Q.UNSIGNED_SHORT;else if(z instanceof Int16Array)f=Q.SHORT;else if(z instanceof Uint32Array)f=Q.UNSIGNED_INT;else if(z instanceof Int32Array)f=Q.INT;else if(z instanceof Int8Array)f=Q.BYTE;else if(z instanceof Uint8Array)f=Q.UNSIGNED_BYTE;else if(z instanceof Uint8ClampedArray)f=Q.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+z);return{buffer:j,type:f,bytesPerElement:z.BYTES_PER_ELEMENT,version:U.version,size:w}}function q(U,B,z){let{array:I,_updateRange:w,updateRanges:j}=B;if(Q.bindBuffer(z,U),w.count===-1&&j.length===0)Q.bufferSubData(z,0,I);if(j.length!==0){for(let f=0,k=j.length;f<k;f++){let C=j[f];if(J)Q.bufferSubData(z,C.start*I.BYTES_PER_ELEMENT,I,C.start,C.count);else Q.bufferSubData(z,C.start*I.BYTES_PER_ELEMENT,I.subarray(C.start,C.start+C.count))}B.clearUpdateRanges()}if(w.count!==-1){if(J)Q.bufferSubData(z,w.offset*I.BYTES_PER_ELEMENT,I,w.offset,w.count);else Q.bufferSubData(z,w.offset*I.BYTES_PER_ELEMENT,I.subarray(w.offset,w.offset+w.count));w.count=-1}B.onUploadCallback()}function G(U){if(U.isInterleavedBufferAttribute)U=U.data;return X.get(U)}function V(U){if(U.isInterleavedBufferAttribute)U=U.data;let B=X.get(U);if(B)Q.deleteBuffer(B.buffer),X.delete(U)}function R(U,B){if(U.isGLBufferAttribute){let I=X.get(U);if(!I||I.version<U.version)X.set(U,{buffer:U.buffer,type:U.type,bytesPerElement:U.elementSize,version:U.version});return}if(U.isInterleavedBufferAttribute)U=U.data;let z=X.get(U);if(z===void 0)X.set(U,H(U,B));else if(z.version<U.version){if(z.size!==U.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");q(z.buffer,U,B),z.version=U.version}}return{get:G,remove:V,update:R}}class n6 extends T8{constructor(Q=1,Z=1,J=1,X=1){super();this.type="PlaneGeometry",this.parameters={width:Q,height:Z,widthSegments:J,heightSegments:X};let H=Q/2,q=Z/2,G=Math.floor(J),V=Math.floor(X),R=G+1,U=V+1,B=Q/G,z=Z/V,I=[],w=[],j=[],f=[];for(let k=0;k<U;k++){let C=k*z-q;for(let v=0;v<R;v++){let x=v*B-H;w.push(x,-C,0),j.push(0,0,1),f.push(v/G),f.push(1-k/V)}}for(let k=0;k<V;k++)for(let C=0;C<G;C++){let v=C+R*k,x=C+R*(k+1),l=C+1+R*(k+1),Z0=C+1+R*k;I.push(v,x,Z0),I.push(x,l,Z0)}this.setIndex(I),this.setAttribute("position",new z8(w,3)),this.setAttribute("normal",new z8(j,3)),this.setAttribute("uv",new z8(f,2))}copy(Q){return super.copy(Q),this.parameters=Object.assign({},Q.parameters),this}static fromJSON(Q){return new n6(Q.width,Q.height,Q.widthSegments,Q.heightSegments)}}var TX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SX=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xX=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vX=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hX=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dX=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lX=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uX=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cX=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oX=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tX=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eX=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QY=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZY=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JY=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WY=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$Y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XY=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YY="gl_FragColor = linearToOutputTexel( gl_FragColor );",HY=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,KY=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qY=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VY=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FY=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GY=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NY=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RY=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UY=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DY=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_Y=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zY=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,EY=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BY=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IY=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LY=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MY=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CY=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kY=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OY=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wY=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PY=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AY=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TY=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SY=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jY=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fY=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xY=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yY=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vY=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pY=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lY=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cY=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iY=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tY=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$H=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,XH=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HH=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qH=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FH=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,GH=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NH=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RH=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UH=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DH=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_H=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zH=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EH=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BH=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IH=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LH=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MH=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CH=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,AH=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TH=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jH=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yH=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vH=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bH=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hH=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mH=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dH=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lH=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uH=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cH=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sH=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nH=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iH=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oH=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aH=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rH=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tH=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eH=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,H4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B7={alphahash_fragment:TX,alphahash_pars_fragment:SX,alphamap_fragment:jX,alphamap_pars_fragment:fX,alphatest_fragment:xX,alphatest_pars_fragment:yX,aomap_fragment:vX,aomap_pars_fragment:bX,batching_pars_vertex:hX,batching_vertex:gX,begin_vertex:pX,beginnormal_vertex:mX,bsdfs:dX,iridescence_fragment:lX,bumpmap_pars_fragment:uX,clipping_planes_fragment:cX,clipping_planes_pars_fragment:sX,clipping_planes_pars_vertex:nX,clipping_planes_vertex:iX,color_fragment:oX,color_pars_fragment:aX,color_pars_vertex:rX,color_vertex:tX,common:eX,cube_uv_reflection_fragment:QY,defaultnormal_vertex:ZY,displacementmap_pars_vertex:JY,displacementmap_vertex:WY,emissivemap_fragment:$Y,emissivemap_pars_fragment:XY,colorspace_fragment:YY,colorspace_pars_fragment:HY,envmap_fragment:KY,envmap_common_pars_fragment:qY,envmap_pars_fragment:VY,envmap_pars_vertex:FY,envmap_physical_pars_fragment:MY,envmap_vertex:GY,fog_vertex:NY,fog_pars_vertex:RY,fog_fragment:UY,fog_pars_fragment:DY,gradientmap_pars_fragment:_Y,lightmap_fragment:zY,lightmap_pars_fragment:EY,lights_lambert_fragment:BY,lights_lambert_pars_fragment:IY,lights_pars_begin:LY,lights_toon_fragment:CY,lights_toon_pars_fragment:kY,lights_phong_fragment:OY,lights_phong_pars_fragment:wY,lights_physical_fragment:PY,lights_physical_pars_fragment:AY,lights_fragment_begin:TY,lights_fragment_maps:SY,lights_fragment_end:jY,logdepthbuf_fragment:fY,logdepthbuf_pars_fragment:xY,logdepthbuf_pars_vertex:yY,logdepthbuf_vertex:vY,map_fragment:bY,map_pars_fragment:hY,map_particle_fragment:gY,map_particle_pars_fragment:pY,metalnessmap_fragment:mY,metalnessmap_pars_fragment:dY,morphcolor_vertex:lY,morphnormal_vertex:uY,morphtarget_pars_vertex:cY,morphtarget_vertex:sY,normal_fragment_begin:nY,normal_fragment_maps:iY,normal_pars_fragment:oY,normal_pars_vertex:aY,normal_vertex:rY,normalmap_pars_fragment:tY,clearcoat_normal_fragment_begin:eY,clearcoat_normal_fragment_maps:QH,clearcoat_pars_fragment:ZH,iridescence_pars_fragment:JH,opaque_fragment:WH,packing:$H,premultiplied_alpha_fragment:XH,project_vertex:YH,dithering_fragment:HH,dithering_pars_fragment:KH,roughnessmap_fragment:qH,roughnessmap_pars_fragment:VH,shadowmap_pars_fragment:FH,shadowmap_pars_vertex:GH,shadowmap_vertex:NH,shadowmask_pars_fragment:RH,skinbase_vertex:UH,skinning_pars_vertex:DH,skinning_vertex:_H,skinnormal_vertex:zH,specularmap_fragment:EH,specularmap_pars_fragment:BH,tonemapping_fragment:IH,tonemapping_pars_fragment:LH,transmission_fragment:MH,transmission_pars_fragment:CH,uv_pars_fragment:kH,uv_pars_vertex:OH,uv_vertex:wH,worldpos_vertex:PH,background_vert:AH,background_frag:TH,backgroundCube_vert:SH,backgroundCube_frag:jH,cube_vert:fH,cube_frag:xH,depth_vert:yH,depth_frag:vH,distanceRGBA_vert:bH,distanceRGBA_frag:hH,equirect_vert:gH,equirect_frag:pH,linedashed_vert:mH,linedashed_frag:dH,meshbasic_vert:lH,meshbasic_frag:uH,meshlambert_vert:cH,meshlambert_frag:sH,meshmatcap_vert:nH,meshmatcap_frag:iH,meshnormal_vert:oH,meshnormal_frag:aH,meshphong_vert:rH,meshphong_frag:tH,meshphysical_vert:eH,meshphysical_frag:Q4,meshtoon_vert:Z4,meshtoon_frag:J4,points_vert:W4,points_frag:$4,shadow_vert:X4,shadow_frag:Y4,sprite_vert:H4,sprite_frag:K4},n0={common:{diffuse:{value:new L7(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new C7},alphaMap:{value:null},alphaMapTransform:{value:new C7},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new C7}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new C7}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new C7}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new C7},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new C7},normalScale:{value:new h0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new C7},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new C7}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new C7}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new C7}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new L7(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new L7(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new C7},alphaTest:{value:0},uvTransform:{value:new C7}},sprite:{diffuse:{value:new L7(16777215)},opacity:{value:1},center:{value:new h0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new C7},alphaMap:{value:null},alphaMapTransform:{value:new C7},alphaTest:{value:0}}},d8={basic:{uniforms:_8([n0.common,n0.specularmap,n0.envmap,n0.aomap,n0.lightmap,n0.fog]),vertexShader:B7.meshbasic_vert,fragmentShader:B7.meshbasic_frag},lambert:{uniforms:_8([n0.common,n0.specularmap,n0.envmap,n0.aomap,n0.lightmap,n0.emissivemap,n0.bumpmap,n0.normalmap,n0.displacementmap,n0.fog,n0.lights,{emissive:{value:new L7(0)}}]),vertexShader:B7.meshlambert_vert,fragmentShader:B7.meshlambert_frag},phong:{uniforms:_8([n0.common,n0.specularmap,n0.envmap,n0.aomap,n0.lightmap,n0.emissivemap,n0.bumpmap,n0.normalmap,n0.displacementmap,n0.fog,n0.lights,{emissive:{value:new L7(0)},specular:{value:new L7(1118481)},shininess:{value:30}}]),vertexShader:B7.meshphong_vert,fragmentShader:B7.meshphong_frag},standard:{uniforms:_8([n0.common,n0.envmap,n0.aomap,n0.lightmap,n0.emissivemap,n0.bumpmap,n0.normalmap,n0.displacementmap,n0.roughnessmap,n0.metalnessmap,n0.fog,n0.lights,{emissive:{value:new L7(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:B7.meshphysical_vert,fragmentShader:B7.meshphysical_frag},toon:{uniforms:_8([n0.common,n0.aomap,n0.lightmap,n0.emissivemap,n0.bumpmap,n0.normalmap,n0.displacementmap,n0.gradientmap,n0.fog,n0.lights,{emissive:{value:new L7(0)}}]),vertexShader:B7.meshtoon_vert,fragmentShader:B7.meshtoon_frag},matcap:{uniforms:_8([n0.common,n0.bumpmap,n0.normalmap,n0.displacementmap,n0.fog,{matcap:{value:null}}]),vertexShader:B7.meshmatcap_vert,fragmentShader:B7.meshmatcap_frag},points:{uniforms:_8([n0.points,n0.fog]),vertexShader:B7.points_vert,fragmentShader:B7.points_frag},dashed:{uniforms:_8([n0.common,n0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:B7.linedashed_vert,fragmentShader:B7.linedashed_frag},depth:{uniforms:_8([n0.common,n0.displacementmap]),vertexShader:B7.depth_vert,fragmentShader:B7.depth_frag},normal:{uniforms:_8([n0.common,n0.bumpmap,n0.normalmap,n0.displacementmap,{opacity:{value:1}}]),vertexShader:B7.meshnormal_vert,fragmentShader:B7.meshnormal_frag},sprite:{uniforms:_8([n0.sprite,n0.fog]),vertexShader:B7.sprite_vert,fragmentShader:B7.sprite_frag},background:{uniforms:{uvTransform:{value:new C7},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:B7.background_vert,fragmentShader:B7.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:B7.backgroundCube_vert,fragmentShader:B7.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:B7.cube_vert,fragmentShader:B7.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:B7.equirect_vert,fragmentShader:B7.equirect_frag},distanceRGBA:{uniforms:_8([n0.common,n0.displacementmap,{referencePosition:{value:new Q0},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:B7.distanceRGBA_vert,fragmentShader:B7.distanceRGBA_frag},shadow:{uniforms:_8([n0.lights,n0.fog,{color:{value:new L7(0)},opacity:{value:1}}]),vertexShader:B7.shadow_vert,fragmentShader:B7.shadow_frag}};d8.physical={uniforms:_8([d8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new C7},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new C7},clearcoatNormalScale:{value:new h0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new C7},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new C7},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new C7},sheen:{value:0},sheenColor:{value:new L7(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new C7},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new C7},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new C7},transmissionSamplerSize:{value:new h0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new C7},attenuationDistance:{value:0},attenuationColor:{value:new L7(0)},specularColor:{value:new L7(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new C7},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new C7},anisotropyVector:{value:new h0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new C7}}]),vertexShader:B7.meshphysical_vert,fragmentShader:B7.meshphysical_frag};var M5={r:0,b:0,g:0};function q4(Q,Z,J,X,H,q,G){let V=new L7(0),R=q===!0?0:1,U,B,z=null,I=0,w=null;function j(k,C){let v=!1,x=C.isScene===!0?C.background:null;if(x&&x.isTexture)x=(C.backgroundBlurriness>0?J:Z).get(x);if(x===null)f(V,R);else if(x&&x.isColor)f(x,1),v=!0;let l=Q.xr.getEnvironmentBlendMode();if(l==="additive")X.buffers.color.setClear(0,0,0,1,G);else if(l==="alpha-blend")X.buffers.color.setClear(0,0,0,0,G);if(Q.autoClear||v)Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil);if(x&&(x.isCubeTexture||x.mapping===306)){if(B===void 0)B=new b8(new s6(1,1,1),new U9({name:"BackgroundCubeMaterial",uniforms:K6(d8.backgroundCube.uniforms),vertexShader:d8.backgroundCube.vertexShader,fragmentShader:d8.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),B.geometry.deleteAttribute("normal"),B.geometry.deleteAttribute("uv"),B.onBeforeRender=function(Z0,p,$0){this.matrixWorld.copyPosition($0.matrixWorld)},Object.defineProperty(B.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),H.update(B);if(B.material.uniforms.envMap.value=x,B.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,B.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,B.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,B.material.toneMapped=p7.getTransfer(x.colorSpace)!=="srgb",z!==x||I!==x.version||w!==Q.toneMapping)B.material.needsUpdate=!0,z=x,I=x.version,w=Q.toneMapping;B.layers.enableAll(),k.unshift(B,B.geometry,B.material,0,0,null)}else if(x&&x.isTexture){if(U===void 0)U=new b8(new n6(2,2),new U9({name:"BackgroundMaterial",uniforms:K6(d8.background.uniforms),vertexShader:d8.background.vertexShader,fragmentShader:d8.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),H.update(U);if(U.material.uniforms.t2D.value=x,U.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,U.material.toneMapped=p7.getTransfer(x.colorSpace)!=="srgb",x.matrixAutoUpdate===!0)x.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(x.matrix),z!==x||I!==x.version||w!==Q.toneMapping)U.material.needsUpdate=!0,z=x,I=x.version,w=Q.toneMapping;U.layers.enableAll(),k.unshift(U,U.geometry,U.material,0,0,null)}}function f(k,C){k.getRGB(M5,NW(Q)),X.buffers.color.setClear(M5.r,M5.g,M5.b,C,G)}return{getClearColor:function(){return V},setClearColor:function(k,C=1){V.set(k),R=C,f(V,R)},getClearAlpha:function(){return R},setClearAlpha:function(k){R=k,f(V,R)},render:j}}function V4(Q,Z,J,X){let H=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),q=X.isWebGL2?null:Z.get("OES_vertex_array_object"),G=X.isWebGL2||q!==null,V={},R=k(null),U=R,B=!1;function z(o,e,D0,P0,a){let W0=!1;if(G){let C0=f(P0,D0,e);if(U!==C0)U=C0,w(U.object);if(W0=C(o,P0,D0,a),W0)v(o,P0,D0,a)}else{let C0=e.wireframe===!0;if(U.geometry!==P0.id||U.program!==D0.id||U.wireframe!==C0)U.geometry=P0.id,U.program=D0.id,U.wireframe=C0,W0=!0}if(a!==null)J.update(a,Q.ELEMENT_ARRAY_BUFFER);if(W0||B){if(B=!1,z0(o,e,D0,P0),a!==null)Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,J.get(a).buffer)}}function I(){if(X.isWebGL2)return Q.createVertexArray();return q.createVertexArrayOES()}function w(o){if(X.isWebGL2)return Q.bindVertexArray(o);return q.bindVertexArrayOES(o)}function j(o){if(X.isWebGL2)return Q.deleteVertexArray(o);return q.deleteVertexArrayOES(o)}function f(o,e,D0){let P0=D0.wireframe===!0,a=V[o.id];if(a===void 0)a={},V[o.id]=a;let W0=a[e.id];if(W0===void 0)W0={},a[e.id]=W0;let C0=W0[P0];if(C0===void 0)C0=k(I()),W0[P0]=C0;return C0}function k(o){let e=[],D0=[],P0=[];for(let a=0;a<H;a++)e[a]=0,D0[a]=0,P0[a]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:D0,attributeDivisors:P0,object:o,attributes:{},index:null}}function C(o,e,D0,P0){let a=U.attributes,W0=e.attributes,C0=0,v0=D0.getAttributes();for(let K0 in v0)if(v0[K0].location>=0){let s0=a[K0],l0=W0[K0];if(l0===void 0){if(K0==="instanceMatrix"&&o.instanceMatrix)l0=o.instanceMatrix;if(K0==="instanceColor"&&o.instanceColor)l0=o.instanceColor}if(s0===void 0)return!0;if(s0.attribute!==l0)return!0;if(l0&&s0.data!==l0.data)return!0;C0++}if(U.attributesNum!==C0)return!0;if(U.index!==P0)return!0;return!1}function v(o,e,D0,P0){let a={},W0=e.attributes,C0=0,v0=D0.getAttributes();for(let K0 in v0)if(v0[K0].location>=0){let s0=W0[K0];if(s0===void 0){if(K0==="instanceMatrix"&&o.instanceMatrix)s0=o.instanceMatrix;if(K0==="instanceColor"&&o.instanceColor)s0=o.instanceColor}let l0={};if(l0.attribute=s0,s0&&s0.data)l0.data=s0.data;a[K0]=l0,C0++}U.attributes=a,U.attributesNum=C0,U.index=P0}function x(){let o=U.newAttributes;for(let e=0,D0=o.length;e<D0;e++)o[e]=0}function l(o){Z0(o,0)}function Z0(o,e){let{newAttributes:D0,enabledAttributes:P0,attributeDivisors:a}=U;if(D0[o]=1,P0[o]===0)Q.enableVertexAttribArray(o),P0[o]=1;if(a[o]!==e)(X.isWebGL2?Q:Z.get("ANGLE_instanced_arrays"))[X.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](o,e),a[o]=e}function p(){let{newAttributes:o,enabledAttributes:e}=U;for(let D0=0,P0=e.length;D0<P0;D0++)if(e[D0]!==o[D0])Q.disableVertexAttribArray(D0),e[D0]=0}function $0(o,e,D0,P0,a,W0,C0){if(C0===!0)Q.vertexAttribIPointer(o,e,D0,a,W0);else Q.vertexAttribPointer(o,e,D0,P0,a,W0)}function z0(o,e,D0,P0){if(X.isWebGL2===!1&&(o.isInstancedMesh||P0.isInstancedBufferGeometry)){if(Z.get("ANGLE_instanced_arrays")===null)return}x();let a=P0.attributes,W0=D0.getAttributes(),C0=e.defaultAttributeValues;for(let v0 in W0){let K0=W0[v0];if(K0.location>=0){let M0=a[v0];if(M0===void 0){if(v0==="instanceMatrix"&&o.instanceMatrix)M0=o.instanceMatrix;if(v0==="instanceColor"&&o.instanceColor)M0=o.instanceColor}if(M0!==void 0){let{normalized:s0,itemSize:l0}=M0,e0=J.get(M0);if(e0===void 0)continue;let{buffer:J7,type:H7,bytesPerElement:u0}=e0,X7=X.isWebGL2===!0&&(H7===Q.INT||H7===Q.UNSIGNED_INT||M0.gpuType===1013);if(M0.isInterleavedBufferAttribute){let c=M0.data,g0=c.stride,A0=M0.offset;if(c.isInstancedInterleavedBuffer){for(let j0=0;j0<K0.locationSize;j0++)Z0(K0.location+j0,c.meshPerAttribute);if(o.isInstancedMesh!==!0&&P0._maxInstanceCount===void 0)P0._maxInstanceCount=c.meshPerAttribute*c.count}else for(let j0=0;j0<K0.locationSize;j0++)l(K0.location+j0);Q.bindBuffer(Q.ARRAY_BUFFER,J7);for(let j0=0;j0<K0.locationSize;j0++)$0(K0.location+j0,l0/K0.locationSize,H7,s0,g0*u0,(A0+l0/K0.locationSize*j0)*u0,X7)}else{if(M0.isInstancedBufferAttribute){for(let c=0;c<K0.locationSize;c++)Z0(K0.location+c,M0.meshPerAttribute);if(o.isInstancedMesh!==!0&&P0._maxInstanceCount===void 0)P0._maxInstanceCount=M0.meshPerAttribute*M0.count}else for(let c=0;c<K0.locationSize;c++)l(K0.location+c);Q.bindBuffer(Q.ARRAY_BUFFER,J7);for(let c=0;c<K0.locationSize;c++)$0(K0.location+c,l0/K0.locationSize,H7,s0,l0*u0,l0/K0.locationSize*c*u0,X7)}}else if(C0!==void 0){let s0=C0[v0];if(s0!==void 0)switch(s0.length){case 2:Q.vertexAttrib2fv(K0.location,s0);break;case 3:Q.vertexAttrib3fv(K0.location,s0);break;case 4:Q.vertexAttrib4fv(K0.location,s0);break;default:Q.vertexAttrib1fv(K0.location,s0)}}}}p()}function b(){L0();for(let o in V){let e=V[o];for(let D0 in e){let P0=e[D0];for(let a in P0)j(P0[a].object),delete P0[a];delete e[D0]}delete V[o]}}function m(o){if(V[o.id]===void 0)return;let e=V[o.id];for(let D0 in e){let P0=e[D0];for(let a in P0)j(P0[a].object),delete P0[a];delete e[D0]}delete V[o.id]}function q0(o){for(let e in V){let D0=V[e];if(D0[o.id]===void 0)continue;let P0=D0[o.id];for(let a in P0)j(P0[a].object),delete P0[a];delete D0[o.id]}}function L0(){if(S0(),B=!0,U===R)return;U=R,w(U.object)}function S0(){R.geometry=null,R.program=null,R.wireframe=!1}return{setup:z,reset:L0,resetDefaultState:S0,dispose:b,releaseStatesOfGeometry:m,releaseStatesOfProgram:q0,initAttributes:x,enableAttribute:l,disableUnusedAttributes:p}}function F4(Q,Z,J,X){let H=X.isWebGL2,q;function G(B){q=B}function V(B,z){Q.drawArrays(q,B,z),J.update(z,q,1)}function R(B,z,I){if(I===0)return;let w,j;if(H)w=Q,j="drawArraysInstanced";else if(w=Z.get("ANGLE_instanced_arrays"),j="drawArraysInstancedANGLE",w===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[j](q,B,z,I),J.update(z,q,I)}function U(B,z,I){if(I===0)return;let w=Z.get("WEBGL_multi_draw");if(w===null)for(let j=0;j<I;j++)this.render(B[j],z[j]);else{w.multiDrawArraysWEBGL(q,B,0,z,0,I);let j=0;for(let f=0;f<I;f++)j+=z[f];J.update(j,q,1)}}this.setMode=G,this.render=V,this.renderInstances=R,this.renderMultiDraw=U}function G4(Q,Z,J){let X;function H(){if(X!==void 0)return X;if(Z.has("EXT_texture_filter_anisotropic")===!0){let $0=Z.get("EXT_texture_filter_anisotropic");X=Q.getParameter($0.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else X=0;return X}function q($0){if($0==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";$0="mediump"}if($0==="mediump"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let G=typeof WebGL2RenderingContext<"u"&&Q.constructor.name==="WebGL2RenderingContext",V=J.precision!==void 0?J.precision:"highp",R=q(V);if(R!==V)console.warn("THREE.WebGLRenderer:",V,"not supported, using",R,"instead."),V=R;let U=G||Z.has("WEBGL_draw_buffers"),B=J.logarithmicDepthBuffer===!0,z=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),I=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=Q.getParameter(Q.MAX_TEXTURE_SIZE),j=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),f=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),k=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),C=Q.getParameter(Q.MAX_VARYING_VECTORS),v=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),x=I>0,l=G||Z.has("OES_texture_float"),Z0=x&&l,p=G?Q.getParameter(Q.MAX_SAMPLES):0;return{isWebGL2:G,drawBuffers:U,getMaxAnisotropy:H,getMaxPrecision:q,precision:V,logarithmicDepthBuffer:B,maxTextures:z,maxVertexTextures:I,maxTextureSize:w,maxCubemapSize:j,maxAttributes:f,maxVertexUniforms:k,maxVaryings:C,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:l,floatVertexTextures:Z0,maxSamples:p}}function N4(Q){let Z=this,J=null,X=0,H=!1,q=!1,G=new A8,V=new C7,R={value:null,needsUpdate:!1};this.uniform=R,this.numPlanes=0,this.numIntersection=0,this.init=function(z,I){let w=z.length!==0||I||X!==0||H;return H=I,X=z.length,w},this.beginShadows=function(){q=!0,B(null)},this.endShadows=function(){q=!1},this.setGlobalState=function(z,I){J=B(z,I,0)},this.setState=function(z,I,w){let{clippingPlanes:j,clipIntersection:f,clipShadows:k}=z,C=Q.get(z);if(!H||j===null||j.length===0||q&&!k)if(q)B(null);else U();else{let v=q?0:X,x=v*4,l=C.clippingState||null;R.value=l,l=B(j,I,x,w);for(let Z0=0;Z0!==x;++Z0)l[Z0]=J[Z0];C.clippingState=l,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function U(){if(R.value!==J)R.value=J,R.needsUpdate=X>0;Z.numPlanes=X,Z.numIntersection=0}function B(z,I,w,j){let f=z!==null?z.length:0,k=null;if(f!==0){if(k=R.value,j!==!0||k===null){let C=w+f*4,v=I.matrixWorldInverse;if(V.getNormalMatrix(v),k===null||k.length<C)k=new Float32Array(C);for(let x=0,l=w;x!==f;++x,l+=4)G.copy(z[x]).applyMatrix4(v,V),G.normal.toArray(k,l),k[l+3]=G.constant}R.value=k,R.needsUpdate=!0}return Z.numPlanes=f,Z.numIntersection=0,k}}function R4(Q){let Z=new WeakMap;function J(G,V){if(V===303)G.mapping=301;else if(V===304)G.mapping=302;return G}function X(G){if(G&&G.isTexture){let V=G.mapping;if(V===303||V===304)if(Z.has(G)){let R=Z.get(G).texture;return J(R,G.mapping)}else{let R=G.image;if(R&&R.height>0){let U=new UW(R.height/2);return U.fromEquirectangularTexture(Q,G),Z.set(G,U),G.addEventListener("dispose",H),J(U.texture,G.mapping)}else return null}}return G}function H(G){let V=G.target;V.removeEventListener("dispose",H);let R=Z.get(V);if(R!==void 0)Z.delete(V),R.dispose()}function q(){Z=new WeakMap}return{get:X,dispose:q}}class tQ extends aQ{constructor(Q=-1,Z=1,J=1,X=-1,H=0.1,q=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=Q,this.right=Z,this.top=J,this.bottom=X,this.near=H,this.far=q,this.updateProjectionMatrix()}copy(Q,Z){return super.copy(Q,Z),this.left=Q.left,this.right=Q.right,this.top=Q.top,this.bottom=Q.bottom,this.near=Q.near,this.far=Q.far,this.zoom=Q.zoom,this.view=Q.view===null?null:Object.assign({},Q.view),this}setViewOffset(Q,Z,J,X,H,q){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=Q,this.view.fullHeight=Z,this.view.offsetX=J,this.view.offsetY=X,this.view.width=H,this.view.height=q,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let Q=(this.right-this.left)/(2*this.zoom),Z=(this.top-this.bottom)/(2*this.zoom),J=(this.right+this.left)/2,X=(this.top+this.bottom)/2,H=J-Q,q=J+Q,G=X+Z,V=X-Z;if(this.view!==null&&this.view.enabled){let R=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;H+=R*this.view.offsetX,q=H+R*this.view.width,G-=U*this.view.offsetY,V=G-U*this.view.height}this.projectionMatrix.makeOrthographic(H,q,G,V,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(Q){let Z=super.toJSON(Q);if(Z.object.zoom=this.zoom,Z.object.left=this.left,Z.object.right=this.right,Z.object.top=this.top,Z.object.bottom=this.bottom,Z.object.near=this.near,Z.object.far=this.far,this.view!==null)Z.object.view=Object.assign({},this.view);return Z}}var $6=4,OJ=[0.125,0.215,0.35,0.446,0.526,0.582],O9=20,kQ=new tQ,wJ=new L7,OQ=null,wQ=0,PQ=0,k9=(1+Math.sqrt(5))/2,e9=1/k9,PJ=[new Q0(1,1,1),new Q0(-1,1,1),new Q0(1,1,-1),new Q0(-1,1,-1),new Q0(0,k9,e9),new Q0(0,k9,-e9),new Q0(e9,0,k9),new Q0(-e9,0,k9),new Q0(k9,e9,0),new Q0(-k9,e9,0)];class bQ{constructor(Q){this._renderer=Q,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(Q,Z=0,J=0.1,X=100){OQ=this._renderer.getRenderTarget(),wQ=this._renderer.getActiveCubeFace(),PQ=this._renderer.getActiveMipmapLevel(),this._setSize(256);let H=this._allocateTargets();if(H.depthBuffer=!0,this._sceneToCubeUV(Q,J,X,H),Z>0)this._blur(H,0,0,Z);return this._applyPMREM(H),this._cleanup(H),H}fromEquirectangular(Q,Z=null){return this._fromTexture(Q,Z)}fromCubemap(Q,Z=null){return this._fromTexture(Q,Z)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=SJ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=TJ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(Q){this._lodMax=Math.floor(Math.log2(Q)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let Q=0;Q<this._lodPlanes.length;Q++)this._lodPlanes[Q].dispose()}_cleanup(Q){this._renderer.setRenderTarget(OQ,wQ,PQ),Q.scissorTest=!1,C5(Q,0,0,Q.width,Q.height)}_fromTexture(Q,Z){if(Q.mapping===301||Q.mapping===302)this._setSize(Q.image.length===0?16:Q.image[0].width||Q.image[0].image.width);else this._setSize(Q.image.width/4);OQ=this._renderer.getRenderTarget(),wQ=this._renderer.getActiveCubeFace(),PQ=this._renderer.getActiveMipmapLevel();let J=Z||this._allocateTargets();return this._textureToCubeUV(Q,J),this._applyPMREM(J),this._cleanup(J),J}_allocateTargets(){let Q=3*Math.max(this._cubeSize,112),Z=4*this._cubeSize,J={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},X=AJ(Q,Z,J);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==Q||this._pingPongRenderTarget.height!==Z){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=AJ(Q,Z,J);let{_lodMax:H}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U4(H)),this._blurMaterial=D4(H,Q,Z)}return X}_compileMaterial(Q){let Z=new b8(this._lodPlanes[0],Q);this._renderer.compile(Z,kQ)}_sceneToCubeUV(Q,Z,J,X){let G=new B8(90,1,Z,J),V=[1,-1,1,1,1,1],R=[1,1,1,-1,-1,-1],U=this._renderer,B=U.autoClear,z=U.toneMapping;U.getClearColor(wJ),U.toneMapping=0,U.autoClear=!1;let I=new nQ({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),w=new b8(new s6,I),j=!1,f=Q.background;if(f){if(f.isColor)I.color.copy(f),Q.background=null,j=!0}else I.color.copy(wJ),j=!0;for(let k=0;k<6;k++){let C=k%3;if(C===0)G.up.set(0,V[k],0),G.lookAt(R[k],0,0);else if(C===1)G.up.set(0,0,V[k]),G.lookAt(0,R[k],0);else G.up.set(0,V[k],0),G.lookAt(0,0,R[k]);let v=this._cubeSize;if(C5(X,C*v,k>2?v:0,v,v),U.setRenderTarget(X),j)U.render(w,G);U.render(Q,G)}w.geometry.dispose(),w.material.dispose(),U.toneMapping=z,U.autoClear=B,Q.background=f}_textureToCubeUV(Q,Z){let J=this._renderer,X=Q.mapping===301||Q.mapping===302;if(X){if(this._cubemapMaterial===null)this._cubemapMaterial=SJ();this._cubemapMaterial.uniforms.flipEnvMap.value=Q.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=TJ();let H=X?this._cubemapMaterial:this._equirectMaterial,q=new b8(this._lodPlanes[0],H),G=H.uniforms;G.envMap.value=Q;let V=this._cubeSize;C5(Z,0,0,3*V,2*V),J.setRenderTarget(Z),J.render(q,kQ)}_applyPMREM(Q){let Z=this._renderer,J=Z.autoClear;Z.autoClear=!1;for(let X=1;X<this._lodPlanes.length;X++){let H=Math.sqrt(this._sigmas[X]*this._sigmas[X]-this._sigmas[X-1]*this._sigmas[X-1]),q=PJ[(X-1)%PJ.length];this._blur(Q,X-1,X,H,q)}Z.autoClear=J}_blur(Q,Z,J,X,H){let q=this._pingPongRenderTarget;this._halfBlur(Q,q,Z,J,X,"latitudinal",H),this._halfBlur(q,Q,J,J,X,"longitudinal",H)}_halfBlur(Q,Z,J,X,H,q,G){let V=this._renderer,R=this._blurMaterial;if(q!=="latitudinal"&&q!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,B=new b8(this._lodPlanes[X],R),z=R.uniforms,I=this._sizeLods[J]-1,w=isFinite(H)?Math.PI/(2*I):2*Math.PI/(2*O9-1),j=H/w,f=isFinite(H)?1+Math.floor(U*j):O9;if(f>O9)console.warn(`sigmaRadians, ${H}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${O9}`);let k=[],C=0;for(let p=0;p<O9;++p){let $0=p/j,z0=Math.exp(-$0*$0/2);if(k.push(z0),p===0)C+=z0;else if(p<f)C+=2*z0}for(let p=0;p<k.length;p++)k[p]=k[p]/C;if(z.envMap.value=Q.texture,z.samples.value=f,z.weights.value=k,z.latitudinal.value=q==="latitudinal",G)z.poleAxis.value=G;let{_lodMax:v}=this;z.dTheta.value=w,z.mipInt.value=v-J;let x=this._sizeLods[X],l=3*x*(X>v-$6?X-v+$6:0),Z0=4*(this._cubeSize-x);C5(Z,l,Z0,3*x,2*x),V.setRenderTarget(Z),V.render(B,kQ)}}function U4(Q){let Z=[],J=[],X=[],H=Q,q=Q-$6+1+OJ.length;for(let G=0;G<q;G++){let V=Math.pow(2,H);J.push(V);let R=1/V;if(G>Q-$6)R=OJ[G-Q+$6-1];else if(G===0)R=0;X.push(R);let U=1/(V-2),B=-U,z=1+U,I=[B,B,z,B,z,z,B,B,z,z,B,z],w=6,j=6,f=3,k=2,C=1,v=new Float32Array(f*j*w),x=new Float32Array(k*j*w),l=new Float32Array(C*j*w);for(let p=0;p<w;p++){let $0=p%3*2/3-1,z0=p>2?0:-1,b=[$0,z0,0,$0+0.6666666666666666,z0,0,$0+0.6666666666666666,z0+1,0,$0,z0,0,$0+0.6666666666666666,z0+1,0,$0,z0+1,0];v.set(b,f*j*p),x.set(I,k*j*p);let m=[p,p,p,p,p,p];l.set(m,C*j*p)}let Z0=new T8;if(Z0.setAttribute("position",new q8(v,f)),Z0.setAttribute("uv",new q8(x,k)),Z0.setAttribute("faceIndex",new q8(l,C)),Z.push(Z0),H>$6)H--}return{lodPlanes:Z,sizeLods:J,sigmas:X}}function AJ(Q,Z,J){let X=new R9(Q,Z,J);return X.texture.mapping=306,X.texture.name="PMREM.cubeUv",X.scissorTest=!0,X}function C5(Q,Z,J,X,H){Q.viewport.set(Z,J,X,H),Q.scissor.set(Z,J,X,H)}function D4(Q,Z,J){let X=new Float32Array(O9),H=new Q0(0,1,0);return new U9({name:"SphericalGaussianBlur",defines:{n:O9,CUBEUV_TEXEL_WIDTH:1/Z,CUBEUV_TEXEL_HEIGHT:1/J,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:X},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:H}},vertexShader:eQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function TJ(){return new U9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function SJ(){return new U9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function eQ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _4(Q){let Z=new WeakMap,J=null;function X(V){if(V&&V.isTexture){let R=V.mapping,U=R===303||R===304,B=R===301||R===302;if(U||B)if(V.isRenderTargetTexture&&V.needsPMREMUpdate===!0){V.needsPMREMUpdate=!1;let z=Z.get(V);if(J===null)J=new bQ(Q);return z=U?J.fromEquirectangular(V,z):J.fromCubemap(V,z),Z.set(V,z),z.texture}else if(Z.has(V))return Z.get(V).texture;else{let z=V.image;if(U&&z&&z.height>0||B&&z&&H(z)){if(J===null)J=new bQ(Q);let I=U?J.fromEquirectangular(V):J.fromCubemap(V);return Z.set(V,I),V.addEventListener("dispose",q),I.texture}else return null}}return V}function H(V){let R=0,U=6;for(let B=0;B<U;B++)if(V[B]!==void 0)R++;return R===U}function q(V){let R=V.target;R.removeEventListener("dispose",q);let U=Z.get(R);if(U!==void 0)Z.delete(R),U.dispose()}function G(){if(Z=new WeakMap,J!==null)J.dispose(),J=null}return{get:X,dispose:G}}function z4(Q){let Z={};function J(X){if(Z[X]!==void 0)return Z[X];let H;switch(X){case"WEBGL_depth_texture":H=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":H=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":H=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":H=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:H=Q.getExtension(X)}return Z[X]=H,H}return{has:function(X){return J(X)!==null},init:function(X){if(X.isWebGL2)J("EXT_color_buffer_float"),J("WEBGL_clip_cull_distance");else J("WEBGL_depth_texture"),J("OES_texture_float"),J("OES_texture_half_float"),J("OES_texture_half_float_linear"),J("OES_standard_derivatives"),J("OES_element_index_uint"),J("OES_vertex_array_object"),J("ANGLE_instanced_arrays");J("OES_texture_float_linear"),J("EXT_color_buffer_half_float"),J("WEBGL_multisampled_render_to_texture")},get:function(X){let H=J(X);if(H===null)console.warn("THREE.WebGLRenderer: "+X+" extension not supported.");return H}}}function E4(Q,Z,J,X){let H={},q=new WeakMap;function G(z){let I=z.target;if(I.index!==null)Z.remove(I.index);for(let j in I.attributes)Z.remove(I.attributes[j]);for(let j in I.morphAttributes){let f=I.morphAttributes[j];for(let k=0,C=f.length;k<C;k++)Z.remove(f[k])}I.removeEventListener("dispose",G),delete H[I.id];let w=q.get(I);if(w)Z.remove(w),q.delete(I);if(X.releaseStatesOfGeometry(I),I.isInstancedBufferGeometry===!0)delete I._maxInstanceCount;J.memory.geometries--}function V(z,I){if(H[I.id]===!0)return I;return I.addEventListener("dispose",G),H[I.id]=!0,J.memory.geometries++,I}function R(z){let I=z.attributes;for(let j in I)Z.update(I[j],Q.ARRAY_BUFFER);let w=z.morphAttributes;for(let j in w){let f=w[j];for(let k=0,C=f.length;k<C;k++)Z.update(f[k],Q.ARRAY_BUFFER)}}function U(z){let I=[],w=z.index,j=z.attributes.position,f=0;if(w!==null){let v=w.array;f=w.version;for(let x=0,l=v.length;x<l;x+=3){let Z0=v[x+0],p=v[x+1],$0=v[x+2];I.push(Z0,p,p,$0,$0,Z0)}}else if(j!==void 0){let v=j.array;f=j.version;for(let x=0,l=v.length/3-1;x<l;x+=3){let Z0=x+0,p=x+1,$0=x+2;I.push(Z0,p,p,$0,$0,Z0)}}else return;let k=new((qW(I))?oQ:iQ)(I,1);k.version=f;let C=q.get(z);if(C)Z.remove(C);q.set(z,k)}function B(z){let I=q.get(z);if(I){let w=z.index;if(w!==null){if(I.version<w.version)U(z)}}else U(z);return q.get(z)}return{get:V,update:R,getWireframeAttribute:B}}function B4(Q,Z,J,X){let H=X.isWebGL2,q;function G(w){q=w}let V,R;function U(w){V=w.type,R=w.bytesPerElement}function B(w,j){Q.drawElements(q,j,V,w*R),J.update(j,q,1)}function z(w,j,f){if(f===0)return;let k,C;if(H)k=Q,C="drawElementsInstanced";else if(k=Z.get("ANGLE_instanced_arrays"),C="drawElementsInstancedANGLE",k===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}k[C](q,j,V,w*R,f),J.update(j,q,f)}function I(w,j,f){if(f===0)return;let k=Z.get("WEBGL_multi_draw");if(k===null)for(let C=0;C<f;C++)this.render(w[C]/R,j[C]);else{k.multiDrawElementsWEBGL(q,j,0,V,w,0,f);let C=0;for(let v=0;v<f;v++)C+=j[v];J.update(C,q,1)}}this.setMode=G,this.setIndex=U,this.render=B,this.renderInstances=z,this.renderMultiDraw=I}function I4(Q){let Z={geometries:0,textures:0},J={frame:0,calls:0,triangles:0,points:0,lines:0};function X(q,G,V){switch(J.calls++,G){case Q.TRIANGLES:J.triangles+=V*(q/3);break;case Q.LINES:J.lines+=V*(q/2);break;case Q.LINE_STRIP:J.lines+=V*(q-1);break;case Q.LINE_LOOP:J.lines+=V*q;break;case Q.POINTS:J.points+=V*q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",G);break}}function H(){J.calls=0,J.triangles=0,J.points=0,J.lines=0}return{memory:Z,render:J,programs:null,autoReset:!0,reset:H,update:X}}function L4(Q,Z){return Q[0]-Z[0]}function M4(Q,Z){return Math.abs(Z[1])-Math.abs(Q[1])}function C4(Q,Z,J){let X={},H=new Float32Array(8),q=new WeakMap,G=new Y8,V=[];for(let U=0;U<8;U++)V[U]=[U,0];function R(U,B,z){let I=U.morphTargetInfluences;if(Z.isWebGL2===!0){let w=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,j=w!==void 0?w.length:0,f=q.get(B);if(f===void 0||f.count!==j){let o=function(){L0.dispose(),q.delete(B),B.removeEventListener("dispose",o)};if(f!==void 0)f.texture.dispose();let v=B.morphAttributes.position!==void 0,x=B.morphAttributes.normal!==void 0,l=B.morphAttributes.color!==void 0,Z0=B.morphAttributes.position||[],p=B.morphAttributes.normal||[],$0=B.morphAttributes.color||[],z0=0;if(v===!0)z0=1;if(x===!0)z0=2;if(l===!0)z0=3;let b=B.attributes.position.count*z0,m=1;if(b>Z.maxTextureSize)m=Math.ceil(b/Z.maxTextureSize),b=Z.maxTextureSize;let q0=new Float32Array(b*m*4*j),L0=new sQ(q0,b,m,j);L0.type=1015,L0.needsUpdate=!0;let S0=z0*4;for(let e=0;e<j;e++){let D0=Z0[e],P0=p[e],a=$0[e],W0=b*m*4*e;for(let C0=0;C0<D0.count;C0++){let v0=C0*S0;if(v===!0)G.fromBufferAttribute(D0,C0),q0[W0+v0+0]=G.x,q0[W0+v0+1]=G.y,q0[W0+v0+2]=G.z,q0[W0+v0+3]=0;if(x===!0)G.fromBufferAttribute(P0,C0),q0[W0+v0+4]=G.x,q0[W0+v0+5]=G.y,q0[W0+v0+6]=G.z,q0[W0+v0+7]=0;if(l===!0)G.fromBufferAttribute(a,C0),q0[W0+v0+8]=G.x,q0[W0+v0+9]=G.y,q0[W0+v0+10]=G.z,q0[W0+v0+11]=a.itemSize===4?G.w:1}}f={count:j,texture:L0,size:new h0(b,m)},q.set(B,f),B.addEventListener("dispose",o)}let k=0;for(let v=0;v<I.length;v++)k+=I[v];let C=B.morphTargetsRelative?1:1-k;z.getUniforms().setValue(Q,"morphTargetBaseInfluence",C),z.getUniforms().setValue(Q,"morphTargetInfluences",I),z.getUniforms().setValue(Q,"morphTargetsTexture",f.texture,J),z.getUniforms().setValue(Q,"morphTargetsTextureSize",f.size)}else{let w=I===void 0?0:I.length,j=X[B.id];if(j===void 0||j.length!==w){j=[];for(let x=0;x<w;x++)j[x]=[x,0];X[B.id]=j}for(let x=0;x<w;x++){let l=j[x];l[0]=x,l[1]=I[x]}j.sort(M4);for(let x=0;x<8;x++)if(x<w&&j[x][1])V[x][0]=j[x][0],V[x][1]=j[x][1];else V[x][0]=Number.MAX_SAFE_INTEGER,V[x][1]=0;V.sort(L4);let f=B.morphAttributes.position,k=B.morphAttributes.normal,C=0;for(let x=0;x<8;x++){let l=V[x],Z0=l[0],p=l[1];if(Z0!==Number.MAX_SAFE_INTEGER&&p){if(f&&B.getAttribute("morphTarget"+x)!==f[Z0])B.setAttribute("morphTarget"+x,f[Z0]);if(k&&B.getAttribute("morphNormal"+x)!==k[Z0])B.setAttribute("morphNormal"+x,k[Z0]);H[x]=p,C+=p}else{if(f&&B.hasAttribute("morphTarget"+x)===!0)B.deleteAttribute("morphTarget"+x);if(k&&B.hasAttribute("morphNormal"+x)===!0)B.deleteAttribute("morphNormal"+x);H[x]=0}}let v=B.morphTargetsRelative?1:1-C;z.getUniforms().setValue(Q,"morphTargetBaseInfluence",v),z.getUniforms().setValue(Q,"morphTargetInfluences",H)}}return{update:R}}function k4(Q,Z,J,X){let H=new WeakMap;function q(R){let U=X.render.frame,B=R.geometry,z=Z.get(R,B);if(H.get(z)!==U)Z.update(z),H.set(z,U);if(R.isInstancedMesh){if(R.hasEventListener("dispose",V)===!1)R.addEventListener("dispose",V);if(H.get(R)!==U){if(J.update(R.instanceMatrix,Q.ARRAY_BUFFER),R.instanceColor!==null)J.update(R.instanceColor,Q.ARRAY_BUFFER);H.set(R,U)}}if(R.isSkinnedMesh){let I=R.skeleton;if(H.get(I)!==U)I.update(),H.set(I,U)}return z}function G(){H=new WeakMap}function V(R){let U=R.target;if(U.removeEventListener("dispose",V),J.remove(U.instanceMatrix),U.instanceColor!==null)J.remove(U.instanceColor)}return{update:q,dispose:G}}class QZ extends I8{constructor(Q,Z,J,X,H,q,G,V,R,U){if(U=U!==void 0?U:1026,U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(J===void 0&&U===1026)J=1014;if(J===void 0&&U===1027)J=1020;super(null,X,H,q,G,V,U,J,R);this.isDepthTexture=!0,this.image={width:Q,height:Z},this.magFilter=G!==void 0?G:1003,this.minFilter=V!==void 0?V:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(Q){return super.copy(Q),this.compareFunction=Q.compareFunction,this}toJSON(Q){let Z=super.toJSON(Q);if(this.compareFunction!==null)Z.compareFunction=this.compareFunction;return Z}}var _W=new I8,zW=new QZ(1,1);zW.compareFunction=515;var EW=new sQ,BW=new FW,IW=new rQ,jJ=[],fJ=[],xJ=new Float32Array(16),yJ=new Float32Array(9),vJ=new Float32Array(4);function V6(Q,Z,J){let X=Q[0];if(X<=0||X>0)return Q;let H=Z*J,q=jJ[H];if(q===void 0)q=new Float32Array(H),jJ[H]=q;if(Z!==0){X.toArray(q,0);for(let G=1,V=0;G!==Z;++G)V+=J,Q[G].toArray(q,V)}return q}function J8(Q,Z){if(Q.length!==Z.length)return!1;for(let J=0,X=Q.length;J<X;J++)if(Q[J]!==Z[J])return!1;return!0}function W8(Q,Z){for(let J=0,X=Z.length;J<X;J++)Q[J]=Z[J]}function g5(Q,Z){let J=fJ[Z];if(J===void 0)J=new Int32Array(Z),fJ[Z]=J;for(let X=0;X!==Z;++X)J[X]=Q.allocateTextureUnit();return J}function O4(Q,Z){let J=this.cache;if(J[0]===Z)return;Q.uniform1f(this.addr,Z),J[0]=Z}function w4(Q,Z){let J=this.cache;if(Z.x!==void 0){if(J[0]!==Z.x||J[1]!==Z.y)Q.uniform2f(this.addr,Z.x,Z.y),J[0]=Z.x,J[1]=Z.y}else{if(J8(J,Z))return;Q.uniform2fv(this.addr,Z),W8(J,Z)}}function P4(Q,Z){let J=this.cache;if(Z.x!==void 0){if(J[0]!==Z.x||J[1]!==Z.y||J[2]!==Z.z)Q.uniform3f(this.addr,Z.x,Z.y,Z.z),J[0]=Z.x,J[1]=Z.y,J[2]=Z.z}else if(Z.r!==void 0){if(J[0]!==Z.r||J[1]!==Z.g||J[2]!==Z.b)Q.uniform3f(this.addr,Z.r,Z.g,Z.b),J[0]=Z.r,J[1]=Z.g,J[2]=Z.b}else{if(J8(J,Z))return;Q.uniform3fv(this.addr,Z),W8(J,Z)}}function A4(Q,Z){let J=this.cache;if(Z.x!==void 0){if(J[0]!==Z.x||J[1]!==Z.y||J[2]!==Z.z||J[3]!==Z.w)Q.uniform4f(this.addr,Z.x,Z.y,Z.z,Z.w),J[0]=Z.x,J[1]=Z.y,J[2]=Z.z,J[3]=Z.w}else{if(J8(J,Z))return;Q.uniform4fv(this.addr,Z),W8(J,Z)}}function T4(Q,Z){let J=this.cache,X=Z.elements;if(X===void 0){if(J8(J,Z))return;Q.uniformMatrix2fv(this.addr,!1,Z),W8(J,Z)}else{if(J8(J,X))return;vJ.set(X),Q.uniformMatrix2fv(this.addr,!1,vJ),W8(J,X)}}function S4(Q,Z){let J=this.cache,X=Z.elements;if(X===void 0){if(J8(J,Z))return;Q.uniformMatrix3fv(this.addr,!1,Z),W8(J,Z)}else{if(J8(J,X))return;yJ.set(X),Q.uniformMatrix3fv(this.addr,!1,yJ),W8(J,X)}}function j4(Q,Z){let J=this.cache,X=Z.elements;if(X===void 0){if(J8(J,Z))return;Q.uniformMatrix4fv(this.addr,!1,Z),W8(J,Z)}else{if(J8(J,X))return;xJ.set(X),Q.uniformMatrix4fv(this.addr,!1,xJ),W8(J,X)}}function f4(Q,Z){let J=this.cache;if(J[0]===Z)return;Q.uniform1i(this.addr,Z),J[0]=Z}function x4(Q,Z){let J=this.cache;if(Z.x!==void 0){if(J[0]!==Z.x||J[1]!==Z.y)Q.uniform2i(this.addr,Z.x,Z.y),J[0]=Z.x,J[1]=Z.y}else{if(J8(J,Z))return;Q.uniform2iv(this.addr,Z),W8(J,Z)}}function y4(Q,Z){let J=this.cache;if(Z.x!==void 0){if(J[0]!==Z.x||J[1]!==Z.y||J[2]!==Z.z)Q.uniform3i(this.addr,Z.x,Z.y,Z.z),J[0]=Z.x,J[1]=Z.y,J[2]=Z.z}else{if(J8(J,Z))return;Q.uniform3iv(this.addr,Z),W8(J,Z)}}function v4(Q,Z){let J=this.cache;if(Z.x!==void 0){if(J[0]!==Z.x||J[1]!==Z.y||J[2]!==Z.z||J[3]!==Z.w)Q.uniform4i(this.addr,Z.x,Z.y,Z.z,Z.w),J[0]=Z.x,J[1]=Z.y,J[2]=Z.z,J[3]=Z.w}else{if(J8(J,Z))return;Q.uniform4iv(this.addr,Z),W8(J,Z)}}function b4(Q,Z){let J=this.cache;if(J[0]===Z)return;Q.uniform1ui(this.addr,Z),J[0]=Z}function h4(Q,Z){let J=this.cache;if(Z.x!==void 0){if(J[0]!==Z.x||J[1]!==Z.y)Q.uniform2ui(this.addr,Z.x,Z.y),J[0]=Z.x,J[1]=Z.y}else{if(J8(J,Z))return;Q.uniform2uiv(this.addr,Z),W8(J,Z)}}function g4(Q,Z){let J=this.cache;if(Z.x!==void 0){if(J[0]!==Z.x||J[1]!==Z.y||J[2]!==Z.z)Q.uniform3ui(this.addr,Z.x,Z.y,Z.z),J[0]=Z.x,J[1]=Z.y,J[2]=Z.z}else{if(J8(J,Z))return;Q.uniform3uiv(this.addr,Z),W8(J,Z)}}function p4(Q,Z){let J=this.cache;if(Z.x!==void 0){if(J[0]!==Z.x||J[1]!==Z.y||J[2]!==Z.z||J[3]!==Z.w)Q.uniform4ui(this.addr,Z.x,Z.y,Z.z,Z.w),J[0]=Z.x,J[1]=Z.y,J[2]=Z.z,J[3]=Z.w}else{if(J8(J,Z))return;Q.uniform4uiv(this.addr,Z),W8(J,Z)}}function m4(Q,Z,J){let X=this.cache,H=J.allocateTextureUnit();if(X[0]!==H)Q.uniform1i(this.addr,H),X[0]=H;let q=this.type===Q.SAMPLER_2D_SHADOW?zW:_W;J.setTexture2D(Z||q,H)}function d4(Q,Z,J){let X=this.cache,H=J.allocateTextureUnit();if(X[0]!==H)Q.uniform1i(this.addr,H),X[0]=H;J.setTexture3D(Z||BW,H)}function l4(Q,Z,J){let X=this.cache,H=J.allocateTextureUnit();if(X[0]!==H)Q.uniform1i(this.addr,H),X[0]=H;J.setTextureCube(Z||IW,H)}function u4(Q,Z,J){let X=this.cache,H=J.allocateTextureUnit();if(X[0]!==H)Q.uniform1i(this.addr,H),X[0]=H;J.setTexture2DArray(Z||EW,H)}function c4(Q){switch(Q){case 5126:return O4;case 35664:return w4;case 35665:return P4;case 35666:return A4;case 35674:return T4;case 35675:return S4;case 35676:return j4;case 5124:case 35670:return f4;case 35667:case 35671:return x4;case 35668:case 35672:return y4;case 35669:case 35673:return v4;case 5125:return b4;case 36294:return h4;case 36295:return g4;case 36296:return p4;case 35678:case 36198:case 36298:case 36306:case 35682:return m4;case 35679:case 36299:case 36307:return d4;case 35680:case 36300:case 36308:case 36293:return l4;case 36289:case 36303:case 36311:case 36292:return u4}}function s4(Q,Z){Q.uniform1fv(this.addr,Z)}function n4(Q,Z){let J=V6(Z,this.size,2);Q.uniform2fv(this.addr,J)}function i4(Q,Z){let J=V6(Z,this.size,3);Q.uniform3fv(this.addr,J)}function o4(Q,Z){let J=V6(Z,this.size,4);Q.uniform4fv(this.addr,J)}function a4(Q,Z){let J=V6(Z,this.size,4);Q.uniformMatrix2fv(this.addr,!1,J)}function r4(Q,Z){let J=V6(Z,this.size,9);Q.uniformMatrix3fv(this.addr,!1,J)}function t4(Q,Z){let J=V6(Z,this.size,16);Q.uniformMatrix4fv(this.addr,!1,J)}function e4(Q,Z){Q.uniform1iv(this.addr,Z)}function QK(Q,Z){Q.uniform2iv(this.addr,Z)}function ZK(Q,Z){Q.uniform3iv(this.addr,Z)}function JK(Q,Z){Q.uniform4iv(this.addr,Z)}function WK(Q,Z){Q.uniform1uiv(this.addr,Z)}function $K(Q,Z){Q.uniform2uiv(this.addr,Z)}function XK(Q,Z){Q.uniform3uiv(this.addr,Z)}function YK(Q,Z){Q.uniform4uiv(this.addr,Z)}function HK(Q,Z,J){let X=this.cache,H=Z.length,q=g5(J,H);if(!J8(X,q))Q.uniform1iv(this.addr,q),W8(X,q);for(let G=0;G!==H;++G)J.setTexture2D(Z[G]||_W,q[G])}function KK(Q,Z,J){let X=this.cache,H=Z.length,q=g5(J,H);if(!J8(X,q))Q.uniform1iv(this.addr,q),W8(X,q);for(let G=0;G!==H;++G)J.setTexture3D(Z[G]||BW,q[G])}function qK(Q,Z,J){let X=this.cache,H=Z.length,q=g5(J,H);if(!J8(X,q))Q.uniform1iv(this.addr,q),W8(X,q);for(let G=0;G!==H;++G)J.setTextureCube(Z[G]||IW,q[G])}function VK(Q,Z,J){let X=this.cache,H=Z.length,q=g5(J,H);if(!J8(X,q))Q.uniform1iv(this.addr,q),W8(X,q);for(let G=0;G!==H;++G)J.setTexture2DArray(Z[G]||EW,q[G])}function FK(Q){switch(Q){case 5126:return s4;case 35664:return n4;case 35665:return i4;case 35666:return o4;case 35674:return a4;case 35675:return r4;case 35676:return t4;case 5124:case 35670:return e4;case 35667:case 35671:return QK;case 35668:case 35672:return ZK;case 35669:case 35673:return JK;case 5125:return WK;case 36294:return $K;case 36295:return XK;case 36296:return YK;case 35678:case 36198:case 36298:case 36306:case 35682:return HK;case 35679:case 36299:case 36307:return KK;case 35680:case 36300:case 36308:case 36293:return qK;case 36289:case 36303:case 36311:case 36292:return VK}}class LW{constructor(Q,Z,J){this.id=Q,this.addr=J,this.cache=[],this.type=Z.type,this.setValue=c4(Z.type)}}class MW{constructor(Q,Z,J){this.id=Q,this.addr=J,this.cache=[],this.type=Z.type,this.size=Z.size,this.setValue=FK(Z.type)}}class CW{constructor(Q){this.id=Q,this.seq=[],this.map={}}setValue(Q,Z,J){let X=this.seq;for(let H=0,q=X.length;H!==q;++H){let G=X[H];G.setValue(Q,Z[G.id],J)}}}var AQ=/(\w+)(\])?(\[|\.)?/g;function bJ(Q,Z){Q.seq.push(Z),Q.map[Z.id]=Z}function GK(Q,Z,J){let X=Q.name,H=X.length;AQ.lastIndex=0;while(!0){let q=AQ.exec(X),G=AQ.lastIndex,V=q[1],R=q[2]==="]",U=q[3];if(R)V=V|0;if(U===void 0||U==="["&&G+2===H){bJ(J,U===void 0?new LW(V,Q,Z):new MW(V,Q,Z));break}else{let z=J.map[V];if(z===void 0)z=new CW(V),bJ(J,z);J=z}}}class y6{constructor(Q,Z){this.seq=[],this.map={};let J=Q.getProgramParameter(Z,Q.ACTIVE_UNIFORMS);for(let X=0;X<J;++X){let H=Q.getActiveUniform(Z,X),q=Q.getUniformLocation(Z,H.name);GK(H,q,this)}}setValue(Q,Z,J,X){let H=this.map[Z];if(H!==void 0)H.setValue(Q,J,X)}setOptional(Q,Z,J){let X=Z[J];if(X!==void 0)this.setValue(Q,J,X)}static upload(Q,Z,J,X){for(let H=0,q=Z.length;H!==q;++H){let G=Z[H],V=J[G.id];if(V.needsUpdate!==!1)G.setValue(Q,V.value,X)}}static seqWithValue(Q,Z){let J=[];for(let X=0,H=Q.length;X!==H;++X){let q=Q[X];if(q.id in Z)J.push(q)}return J}}function hJ(Q,Z,J){let X=Q.createShader(Z);return Q.shaderSource(X,J),Q.compileShader(X),X}var NK=37297,RK=0;function UK(Q,Z){let J=Q.split(`
`),X=[],H=Math.max(Z-6,0),q=Math.min(Z+6,J.length);for(let G=H;G<q;G++){let V=G+1;X.push(`${V===Z?">":" "} ${V}: ${J[G]}`)}return X.join(`
`)}function DK(Q){let Z=p7.getPrimaries(p7.workingColorSpace),J=p7.getPrimaries(Q),X;if(Z===J)X="";else if(Z==="p3"&&J==="rec709")X="LinearDisplayP3ToLinearSRGB";else if(Z==="rec709"&&J==="p3")X="LinearSRGBToLinearDisplayP3";switch(Q){case"srgb-linear":case"display-p3-linear":return[X,"LinearTransferOETF"];case"srgb":case"display-p3":return[X,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",Q),[X,"LinearTransferOETF"]}}function gJ(Q,Z,J){let X=Q.getShaderParameter(Z,Q.COMPILE_STATUS),H=Q.getShaderInfoLog(Z).trim();if(X&&H==="")return"";let q=/ERROR: 0:(\d+)/.exec(H);if(q){let G=parseInt(q[1]);return J.toUpperCase()+`

`+H+`

`+UK(Q.getShaderSource(Z),G)}else return H}function _K(Q,Z){let J=DK(Z);return`vec4 ${Q}( vec4 value ) { return ${J[0]}( ${J[1]}( value ) ); }`}function zK(Q,Z){let J;switch(Z){case 1:J="Linear";break;case 2:J="Reinhard";break;case 3:J="OptimizedCineon";break;case 4:J="ACESFilmic";break;case 6:J="AgX";break;case 5:J="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Z),J="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+J+"ToneMapping( color ); }"}function EK(Q){return[Q.extensionDerivatives||!!Q.envMapCubeUVHeight||Q.bumpMap||Q.normalMapTangentSpace||Q.clearcoatNormalMap||Q.flatShading||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(X6).join(`
`)}function BK(Q){return[Q.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(X6).join(`
`)}function IK(Q){let Z=[];for(let J in Q){let X=Q[J];if(X===!1)continue;Z.push("#define "+J+" "+X)}return Z.join(`
`)}function LK(Q,Z){let J={},X=Q.getProgramParameter(Z,Q.ACTIVE_ATTRIBUTES);for(let H=0;H<X;H++){let q=Q.getActiveAttrib(Z,H),G=q.name,V=1;if(q.type===Q.FLOAT_MAT2)V=2;if(q.type===Q.FLOAT_MAT3)V=3;if(q.type===Q.FLOAT_MAT4)V=4;J[G]={type:q.type,location:Q.getAttribLocation(Z,G),locationSize:V}}return J}function X6(Q){return Q!==""}function pJ(Q,Z){let J=Z.numSpotLightShadows+Z.numSpotLightMaps-Z.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,Z.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Z.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Z.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,J).replace(/NUM_RECT_AREA_LIGHTS/g,Z.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Z.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Z.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Z.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Z.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Z.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Z.numPointLightShadows)}function mJ(Q,Z){return Q.replace(/NUM_CLIPPING_PLANES/g,Z.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Z.numClippingPlanes-Z.numClipIntersection)}var MK=/^[ \t]*#include +<([\w\d./]+)>/gm;function hQ(Q){return Q.replace(MK,kK)}var CK=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kK(Q,Z){let J=B7[Z];if(J===void 0){let X=CK.get(Z);if(X!==void 0)J=B7[X],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Z,X);else throw Error("Can not resolve #include <"+Z+">")}return hQ(J)}var OK=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dJ(Q){return Q.replace(OK,wK)}function wK(Q,Z,J,X){let H="";for(let q=parseInt(Z);q<parseInt(J);q++)H+=X.replace(/\[\s*i\s*\]/g,"[ "+q+" ]").replace(/UNROLLED_LOOP_INDEX/g,q);return H}function lJ(Q){let Z="precision "+Q.precision+` float;
precision `+Q.precision+" int;";if(Q.precision==="highp")Z+=`
#define HIGH_PRECISION`;else if(Q.precision==="mediump")Z+=`
#define MEDIUM_PRECISION`;else if(Q.precision==="lowp")Z+=`
#define LOW_PRECISION`;return Z}function PK(Q){let Z="SHADOWMAP_TYPE_BASIC";if(Q.shadowMapType===1)Z="SHADOWMAP_TYPE_PCF";else if(Q.shadowMapType===2)Z="SHADOWMAP_TYPE_PCF_SOFT";else if(Q.shadowMapType===3)Z="SHADOWMAP_TYPE_VSM";return Z}function AK(Q){let Z="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case 301:case 302:Z="ENVMAP_TYPE_CUBE";break;case 306:Z="ENVMAP_TYPE_CUBE_UV";break}return Z}function TK(Q){let Z="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case 302:Z="ENVMAP_MODE_REFRACTION";break}return Z}function SK(Q){let Z="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case 0:Z="ENVMAP_BLENDING_MULTIPLY";break;case 1:Z="ENVMAP_BLENDING_MIX";break;case 2:Z="ENVMAP_BLENDING_ADD";break}return Z}function jK(Q){let Z=Q.envMapCubeUVHeight;if(Z===null)return null;let J=Math.log2(Z)-2,X=1/Z;return{texelWidth:1/(3*Math.max(Math.pow(2,J),112)),texelHeight:X,maxMip:J}}function fK(Q,Z,J,X){let H=Q.getContext(),q=J.defines,G=J.vertexShader,V=J.fragmentShader,R=PK(J),U=AK(J),B=TK(J),z=SK(J),I=jK(J),w=J.isWebGL2?"":EK(J),j=BK(J),f=IK(q),k=H.createProgram(),C,v,x=J.glslVersion?"#version "+J.glslVersion+`
`:"";if(J.isRawShaderMaterial){if(C=["#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,f].filter(X6).join(`
`),C.length>0)C+=`
`;if(v=[w,"#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,f].filter(X6).join(`
`),v.length>0)v+=`
`}else C=[lJ(J),"#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,f,J.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",J.batching?"#define USE_BATCHING":"",J.instancing?"#define USE_INSTANCING":"",J.instancingColor?"#define USE_INSTANCING_COLOR":"",J.useFog&&J.fog?"#define USE_FOG":"",J.useFog&&J.fogExp2?"#define FOG_EXP2":"",J.map?"#define USE_MAP":"",J.envMap?"#define USE_ENVMAP":"",J.envMap?"#define "+B:"",J.lightMap?"#define USE_LIGHTMAP":"",J.aoMap?"#define USE_AOMAP":"",J.bumpMap?"#define USE_BUMPMAP":"",J.normalMap?"#define USE_NORMALMAP":"",J.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",J.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",J.displacementMap?"#define USE_DISPLACEMENTMAP":"",J.emissiveMap?"#define USE_EMISSIVEMAP":"",J.anisotropy?"#define USE_ANISOTROPY":"",J.anisotropyMap?"#define USE_ANISOTROPYMAP":"",J.clearcoatMap?"#define USE_CLEARCOATMAP":"",J.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",J.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",J.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",J.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",J.specularMap?"#define USE_SPECULARMAP":"",J.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",J.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",J.roughnessMap?"#define USE_ROUGHNESSMAP":"",J.metalnessMap?"#define USE_METALNESSMAP":"",J.alphaMap?"#define USE_ALPHAMAP":"",J.alphaHash?"#define USE_ALPHAHASH":"",J.transmission?"#define USE_TRANSMISSION":"",J.transmissionMap?"#define USE_TRANSMISSIONMAP":"",J.thicknessMap?"#define USE_THICKNESSMAP":"",J.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",J.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",J.mapUv?"#define MAP_UV "+J.mapUv:"",J.alphaMapUv?"#define ALPHAMAP_UV "+J.alphaMapUv:"",J.lightMapUv?"#define LIGHTMAP_UV "+J.lightMapUv:"",J.aoMapUv?"#define AOMAP_UV "+J.aoMapUv:"",J.emissiveMapUv?"#define EMISSIVEMAP_UV "+J.emissiveMapUv:"",J.bumpMapUv?"#define BUMPMAP_UV "+J.bumpMapUv:"",J.normalMapUv?"#define NORMALMAP_UV "+J.normalMapUv:"",J.displacementMapUv?"#define DISPLACEMENTMAP_UV "+J.displacementMapUv:"",J.metalnessMapUv?"#define METALNESSMAP_UV "+J.metalnessMapUv:"",J.roughnessMapUv?"#define ROUGHNESSMAP_UV "+J.roughnessMapUv:"",J.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+J.anisotropyMapUv:"",J.clearcoatMapUv?"#define CLEARCOATMAP_UV "+J.clearcoatMapUv:"",J.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+J.clearcoatNormalMapUv:"",J.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+J.clearcoatRoughnessMapUv:"",J.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+J.iridescenceMapUv:"",J.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+J.iridescenceThicknessMapUv:"",J.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+J.sheenColorMapUv:"",J.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+J.sheenRoughnessMapUv:"",J.specularMapUv?"#define SPECULARMAP_UV "+J.specularMapUv:"",J.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+J.specularColorMapUv:"",J.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+J.specularIntensityMapUv:"",J.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+J.transmissionMapUv:"",J.thicknessMapUv?"#define THICKNESSMAP_UV "+J.thicknessMapUv:"",J.vertexTangents&&J.flatShading===!1?"#define USE_TANGENT":"",J.vertexColors?"#define USE_COLOR":"",J.vertexAlphas?"#define USE_COLOR_ALPHA":"",J.vertexUv1s?"#define USE_UV1":"",J.vertexUv2s?"#define USE_UV2":"",J.vertexUv3s?"#define USE_UV3":"",J.pointsUvs?"#define USE_POINTS_UV":"",J.flatShading?"#define FLAT_SHADED":"",J.skinning?"#define USE_SKINNING":"",J.morphTargets?"#define USE_MORPHTARGETS":"",J.morphNormals&&J.flatShading===!1?"#define USE_MORPHNORMALS":"",J.morphColors&&J.isWebGL2?"#define USE_MORPHCOLORS":"",J.morphTargetsCount>0&&J.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",J.morphTargetsCount>0&&J.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+J.morphTextureStride:"",J.morphTargetsCount>0&&J.isWebGL2?"#define MORPHTARGETS_COUNT "+J.morphTargetsCount:"",J.doubleSided?"#define DOUBLE_SIDED":"",J.flipSided?"#define FLIP_SIDED":"",J.shadowMapEnabled?"#define USE_SHADOWMAP":"",J.shadowMapEnabled?"#define "+R:"",J.sizeAttenuation?"#define USE_SIZEATTENUATION":"",J.numLightProbes>0?"#define USE_LIGHT_PROBES":"",J.useLegacyLights?"#define LEGACY_LIGHTS":"",J.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",J.logarithmicDepthBuffer&&J.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(X6).join(`
`),v=[w,lJ(J),"#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,f,J.useFog&&J.fog?"#define USE_FOG":"",J.useFog&&J.fogExp2?"#define FOG_EXP2":"",J.map?"#define USE_MAP":"",J.matcap?"#define USE_MATCAP":"",J.envMap?"#define USE_ENVMAP":"",J.envMap?"#define "+U:"",J.envMap?"#define "+B:"",J.envMap?"#define "+z:"",I?"#define CUBEUV_TEXEL_WIDTH "+I.texelWidth:"",I?"#define CUBEUV_TEXEL_HEIGHT "+I.texelHeight:"",I?"#define CUBEUV_MAX_MIP "+I.maxMip+".0":"",J.lightMap?"#define USE_LIGHTMAP":"",J.aoMap?"#define USE_AOMAP":"",J.bumpMap?"#define USE_BUMPMAP":"",J.normalMap?"#define USE_NORMALMAP":"",J.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",J.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",J.emissiveMap?"#define USE_EMISSIVEMAP":"",J.anisotropy?"#define USE_ANISOTROPY":"",J.anisotropyMap?"#define USE_ANISOTROPYMAP":"",J.clearcoat?"#define USE_CLEARCOAT":"",J.clearcoatMap?"#define USE_CLEARCOATMAP":"",J.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",J.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",J.iridescence?"#define USE_IRIDESCENCE":"",J.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",J.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",J.specularMap?"#define USE_SPECULARMAP":"",J.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",J.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",J.roughnessMap?"#define USE_ROUGHNESSMAP":"",J.metalnessMap?"#define USE_METALNESSMAP":"",J.alphaMap?"#define USE_ALPHAMAP":"",J.alphaTest?"#define USE_ALPHATEST":"",J.alphaHash?"#define USE_ALPHAHASH":"",J.sheen?"#define USE_SHEEN":"",J.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",J.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",J.transmission?"#define USE_TRANSMISSION":"",J.transmissionMap?"#define USE_TRANSMISSIONMAP":"",J.thicknessMap?"#define USE_THICKNESSMAP":"",J.vertexTangents&&J.flatShading===!1?"#define USE_TANGENT":"",J.vertexColors||J.instancingColor?"#define USE_COLOR":"",J.vertexAlphas?"#define USE_COLOR_ALPHA":"",J.vertexUv1s?"#define USE_UV1":"",J.vertexUv2s?"#define USE_UV2":"",J.vertexUv3s?"#define USE_UV3":"",J.pointsUvs?"#define USE_POINTS_UV":"",J.gradientMap?"#define USE_GRADIENTMAP":"",J.flatShading?"#define FLAT_SHADED":"",J.doubleSided?"#define DOUBLE_SIDED":"",J.flipSided?"#define FLIP_SIDED":"",J.shadowMapEnabled?"#define USE_SHADOWMAP":"",J.shadowMapEnabled?"#define "+R:"",J.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",J.numLightProbes>0?"#define USE_LIGHT_PROBES":"",J.useLegacyLights?"#define LEGACY_LIGHTS":"",J.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",J.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",J.logarithmicDepthBuffer&&J.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",J.toneMapping!==0?"#define TONE_MAPPING":"",J.toneMapping!==0?B7.tonemapping_pars_fragment:"",J.toneMapping!==0?zK("toneMapping",J.toneMapping):"",J.dithering?"#define DITHERING":"",J.opaque?"#define OPAQUE":"",B7.colorspace_pars_fragment,_K("linearToOutputTexel",J.outputColorSpace),J.useDepthPacking?"#define DEPTH_PACKING "+J.depthPacking:"",`
`].filter(X6).join(`
`);if(G=hQ(G),G=pJ(G,J),G=mJ(G,J),V=hQ(V),V=pJ(V,J),V=mJ(V,J),G=dJ(G),V=dJ(V),J.isWebGL2&&J.isRawShaderMaterial!==!0)x=`#version 300 es
`,C=[j,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,v=["precision mediump sampler2DArray;","#define varying in",J.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",J.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v;let l=x+C+G,Z0=x+v+V,p=hJ(H,H.VERTEX_SHADER,l),$0=hJ(H,H.FRAGMENT_SHADER,Z0);if(H.attachShader(k,p),H.attachShader(k,$0),J.index0AttributeName!==void 0)H.bindAttribLocation(k,0,J.index0AttributeName);else if(J.morphTargets===!0)H.bindAttribLocation(k,0,"position");H.linkProgram(k);function z0(L0){if(Q.debug.checkShaderErrors){let S0=H.getProgramInfoLog(k).trim(),o=H.getShaderInfoLog(p).trim(),e=H.getShaderInfoLog($0).trim(),D0=!0,P0=!0;if(H.getProgramParameter(k,H.LINK_STATUS)===!1)if(D0=!1,typeof Q.debug.onShaderError==="function")Q.debug.onShaderError(H,k,p,$0);else{let a=gJ(H,p,"vertex"),W0=gJ(H,$0,"fragment");console.error("THREE.WebGLProgram: Shader Error "+H.getError()+" - VALIDATE_STATUS "+H.getProgramParameter(k,H.VALIDATE_STATUS)+`

Program Info Log: `+S0+`
`+a+`
`+W0)}else if(S0!=="")console.warn("THREE.WebGLProgram: Program Info Log:",S0);else if(o===""||e==="")P0=!1;if(P0)L0.diagnostics={runnable:D0,programLog:S0,vertexShader:{log:o,prefix:C},fragmentShader:{log:e,prefix:v}}}H.deleteShader(p),H.deleteShader($0),b=new y6(H,k),m=LK(H,k)}let b;this.getUniforms=function(){if(b===void 0)z0(this);return b};let m;this.getAttributes=function(){if(m===void 0)z0(this);return m};let q0=J.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(q0===!1)q0=H.getProgramParameter(k,NK);return q0},this.destroy=function(){X.releaseStatesOfProgram(this),H.deleteProgram(k),this.program=void 0},this.type=J.shaderType,this.name=J.shaderName,this.id=RK++,this.cacheKey=Z,this.usedTimes=1,this.program=k,this.vertexShader=p,this.fragmentShader=$0,this}var xK=0;class kW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(Q){let{vertexShader:Z,fragmentShader:J}=Q,X=this._getShaderStage(Z),H=this._getShaderStage(J),q=this._getShaderCacheForMaterial(Q);if(q.has(X)===!1)q.add(X),X.usedTimes++;if(q.has(H)===!1)q.add(H),H.usedTimes++;return this}remove(Q){let Z=this.materialCache.get(Q);for(let J of Z)if(J.usedTimes--,J.usedTimes===0)this.shaderCache.delete(J.code);return this.materialCache.delete(Q),this}getVertexShaderID(Q){return this._getShaderStage(Q.vertexShader).id}getFragmentShaderID(Q){return this._getShaderStage(Q.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(Q){let Z=this.materialCache,J=Z.get(Q);if(J===void 0)J=new Set,Z.set(Q,J);return J}_getShaderStage(Q){let Z=this.shaderCache,J=Z.get(Q);if(J===void 0)J=new OW(Q),Z.set(Q,J);return J}}class OW{constructor(Q){this.id=xK++,this.code=Q,this.usedTimes=0}}function yK(Q,Z,J,X,H,q,G){let V=new b5,R=new kW,U=[],B=H.isWebGL2,z=H.logarithmicDepthBuffer,I=H.vertexTextures,w=H.precision,j={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){if(b===0)return"uv";return`uv${b}`}function k(b,m,q0,L0,S0){let o=L0.fog,e=S0.geometry,D0=b.isMeshStandardMaterial?L0.environment:null,P0=(b.isMeshStandardMaterial?J:Z).get(b.envMap||D0),a=!!P0&&P0.mapping===306?P0.image.height:null,W0=j[b.type];if(b.precision!==null){if(w=H.getMaxPrecision(b.precision),w!==b.precision)console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",w,"instead.")}let C0=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,v0=C0!==void 0?C0.length:0,K0=0;if(e.morphAttributes.position!==void 0)K0=1;if(e.morphAttributes.normal!==void 0)K0=2;if(e.morphAttributes.color!==void 0)K0=3;let M0,s0,l0,e0;if(W0){let P7=d8[W0];M0=P7.vertexShader,s0=P7.fragmentShader}else M0=b.vertexShader,s0=b.fragmentShader,R.update(b),l0=R.getVertexShaderID(b),e0=R.getFragmentShaderID(b);let J7=Q.getRenderTarget(),H7=S0.isInstancedMesh===!0,u0=S0.isBatchedMesh===!0,X7=!!b.map,c=!!b.matcap,g0=!!P0,A0=!!b.aoMap,j0=!!b.lightMap,E0=!!b.bumpMap,i0=!!b.normalMap,M=!!b.displacementMap,L=!!b.emissiveMap,_=!!b.metalnessMap,D=!!b.roughnessMap,P=b.anisotropy>0,g=b.clearcoat>0,A=b.iridescence>0,n=b.sheen>0,i=b.transmission>0,X0=P&&!!b.anisotropyMap,r=g&&!!b.clearcoatMap,U0=g&&!!b.clearcoatNormalMap,f0=g&&!!b.clearcoatRoughnessMap,H0=A&&!!b.iridescenceMap,u=A&&!!b.iridescenceThicknessMap,B0=n&&!!b.sheenColorMap,m0=n&&!!b.sheenRoughnessMap,T0=!!b.specularMap,p0=!!b.specularColorMap,t0=!!b.specularIntensityMap,a0=i&&!!b.transmissionMap,x0=i&&!!b.thicknessMap,c0=!!b.gradientMap,_0=!!b.alphaMap,s=b.alphaTest>0,I0=!!b.alphaHash,w0=!!b.extensions,b0=!!e.attributes.uv1,d0=!!e.attributes.uv2,$7=!!e.attributes.uv3,K7=0;if(b.toneMapped){if(J7===null||J7.isXRRenderTarget===!0)K7=Q.toneMapping}return{isWebGL2:B,shaderID:W0,shaderType:b.type,shaderName:b.name,vertexShader:M0,fragmentShader:s0,defines:b.defines,customVertexShaderID:l0,customFragmentShaderID:e0,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:w,batching:u0,instancing:H7,instancingColor:H7&&S0.instanceColor!==null,supportsVertexTextures:I,outputColorSpace:J7===null?Q.outputColorSpace:J7.isXRRenderTarget===!0?J7.texture.colorSpace:"srgb-linear",map:X7,matcap:c,envMap:g0,envMapMode:g0&&P0.mapping,envMapCubeUVHeight:a,aoMap:A0,lightMap:j0,bumpMap:E0,normalMap:i0,displacementMap:I&&M,emissiveMap:L,normalMapObjectSpace:i0&&b.normalMapType===1,normalMapTangentSpace:i0&&b.normalMapType===0,metalnessMap:_,roughnessMap:D,anisotropy:P,anisotropyMap:X0,clearcoat:g,clearcoatMap:r,clearcoatNormalMap:U0,clearcoatRoughnessMap:f0,iridescence:A,iridescenceMap:H0,iridescenceThicknessMap:u,sheen:n,sheenColorMap:B0,sheenRoughnessMap:m0,specularMap:T0,specularColorMap:p0,specularIntensityMap:t0,transmission:i,transmissionMap:a0,thicknessMap:x0,gradientMap:c0,opaque:b.transparent===!1&&b.blending===1,alphaMap:_0,alphaTest:s,alphaHash:I0,combine:b.combine,mapUv:X7&&f(b.map.channel),aoMapUv:A0&&f(b.aoMap.channel),lightMapUv:j0&&f(b.lightMap.channel),bumpMapUv:E0&&f(b.bumpMap.channel),normalMapUv:i0&&f(b.normalMap.channel),displacementMapUv:M&&f(b.displacementMap.channel),emissiveMapUv:L&&f(b.emissiveMap.channel),metalnessMapUv:_&&f(b.metalnessMap.channel),roughnessMapUv:D&&f(b.roughnessMap.channel),anisotropyMapUv:X0&&f(b.anisotropyMap.channel),clearcoatMapUv:r&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:U0&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:f0&&f(b.clearcoatRoughnessMap.channel),iridescenceMapUv:H0&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:u&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:B0&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:m0&&f(b.sheenRoughnessMap.channel),specularMapUv:T0&&f(b.specularMap.channel),specularColorMapUv:p0&&f(b.specularColorMap.channel),specularIntensityMapUv:t0&&f(b.specularIntensityMap.channel),transmissionMapUv:a0&&f(b.transmissionMap.channel),thicknessMapUv:x0&&f(b.thicknessMap.channel),alphaMapUv:_0&&f(b.alphaMap.channel),vertexTangents:!!e.attributes.tangent&&(i0||P),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!e.attributes.color&&e.attributes.color.itemSize===4,vertexUv1s:b0,vertexUv2s:d0,vertexUv3s:$7,pointsUvs:S0.isPoints===!0&&!!e.attributes.uv&&(X7||_0),fog:!!o,useFog:b.fog===!0,fogExp2:o&&o.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:z,skinning:S0.isSkinnedMesh===!0,morphTargets:e.morphAttributes.position!==void 0,morphNormals:e.morphAttributes.normal!==void 0,morphColors:e.morphAttributes.color!==void 0,morphTargetsCount:v0,morphTextureStride:K0,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:G.numPlanes,numClipIntersection:G.numIntersection,dithering:b.dithering,shadowMapEnabled:Q.shadowMap.enabled&&q0.length>0,shadowMapType:Q.shadowMap.type,toneMapping:K7,useLegacyLights:Q._useLegacyLights,decodeVideoTexture:X7&&b.map.isVideoTexture===!0&&p7.getTransfer(b.map.colorSpace)==="srgb",premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===2,flipSided:b.side===1,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:w0&&b.extensions.derivatives===!0,extensionFragDepth:w0&&b.extensions.fragDepth===!0,extensionDrawBuffers:w0&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:w0&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:w0&&b.extensions.clipCullDistance&&X.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:B||X.has("EXT_frag_depth"),rendererExtensionDrawBuffers:B||X.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:B||X.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:X.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function C(b){let m=[];if(b.shaderID)m.push(b.shaderID);else m.push(b.customVertexShaderID),m.push(b.customFragmentShaderID);if(b.defines!==void 0)for(let q0 in b.defines)m.push(q0),m.push(b.defines[q0]);if(b.isRawShaderMaterial===!1)v(m,b),x(m,b),m.push(Q.outputColorSpace);return m.push(b.customProgramCacheKey),m.join()}function v(b,m){b.push(m.precision),b.push(m.outputColorSpace),b.push(m.envMapMode),b.push(m.envMapCubeUVHeight),b.push(m.mapUv),b.push(m.alphaMapUv),b.push(m.lightMapUv),b.push(m.aoMapUv),b.push(m.bumpMapUv),b.push(m.normalMapUv),b.push(m.displacementMapUv),b.push(m.emissiveMapUv),b.push(m.metalnessMapUv),b.push(m.roughnessMapUv),b.push(m.anisotropyMapUv),b.push(m.clearcoatMapUv),b.push(m.clearcoatNormalMapUv),b.push(m.clearcoatRoughnessMapUv),b.push(m.iridescenceMapUv),b.push(m.iridescenceThicknessMapUv),b.push(m.sheenColorMapUv),b.push(m.sheenRoughnessMapUv),b.push(m.specularMapUv),b.push(m.specularColorMapUv),b.push(m.specularIntensityMapUv),b.push(m.transmissionMapUv),b.push(m.thicknessMapUv),b.push(m.combine),b.push(m.fogExp2),b.push(m.sizeAttenuation),b.push(m.morphTargetsCount),b.push(m.morphAttributeCount),b.push(m.numDirLights),b.push(m.numPointLights),b.push(m.numSpotLights),b.push(m.numSpotLightMaps),b.push(m.numHemiLights),b.push(m.numRectAreaLights),b.push(m.numDirLightShadows),b.push(m.numPointLightShadows),b.push(m.numSpotLightShadows),b.push(m.numSpotLightShadowsWithMaps),b.push(m.numLightProbes),b.push(m.shadowMapType),b.push(m.toneMapping),b.push(m.numClippingPlanes),b.push(m.numClipIntersection),b.push(m.depthPacking)}function x(b,m){if(V.disableAll(),m.isWebGL2)V.enable(0);if(m.supportsVertexTextures)V.enable(1);if(m.instancing)V.enable(2);if(m.instancingColor)V.enable(3);if(m.matcap)V.enable(4);if(m.envMap)V.enable(5);if(m.normalMapObjectSpace)V.enable(6);if(m.normalMapTangentSpace)V.enable(7);if(m.clearcoat)V.enable(8);if(m.iridescence)V.enable(9);if(m.alphaTest)V.enable(10);if(m.vertexColors)V.enable(11);if(m.vertexAlphas)V.enable(12);if(m.vertexUv1s)V.enable(13);if(m.vertexUv2s)V.enable(14);if(m.vertexUv3s)V.enable(15);if(m.vertexTangents)V.enable(16);if(m.anisotropy)V.enable(17);if(m.alphaHash)V.enable(18);if(m.batching)V.enable(19);if(b.push(V.mask),V.disableAll(),m.fog)V.enable(0);if(m.useFog)V.enable(1);if(m.flatShading)V.enable(2);if(m.logarithmicDepthBuffer)V.enable(3);if(m.skinning)V.enable(4);if(m.morphTargets)V.enable(5);if(m.morphNormals)V.enable(6);if(m.morphColors)V.enable(7);if(m.premultipliedAlpha)V.enable(8);if(m.shadowMapEnabled)V.enable(9);if(m.useLegacyLights)V.enable(10);if(m.doubleSided)V.enable(11);if(m.flipSided)V.enable(12);if(m.useDepthPacking)V.enable(13);if(m.dithering)V.enable(14);if(m.transmission)V.enable(15);if(m.sheen)V.enable(16);if(m.opaque)V.enable(17);if(m.pointsUvs)V.enable(18);if(m.decodeVideoTexture)V.enable(19);b.push(V.mask)}function l(b){let m=j[b.type],q0;if(m){let L0=d8[m];q0=CX.clone(L0.uniforms)}else q0=b.uniforms;return q0}function Z0(b,m){let q0;for(let L0=0,S0=U.length;L0<S0;L0++){let o=U[L0];if(o.cacheKey===m){q0=o,++q0.usedTimes;break}}if(q0===void 0)q0=new fK(Q,m,b,q),U.push(q0);return q0}function p(b){if(--b.usedTimes===0){let m=U.indexOf(b);U[m]=U[U.length-1],U.pop(),b.destroy()}}function $0(b){R.remove(b)}function z0(){R.dispose()}return{getParameters:k,getProgramCacheKey:C,getUniforms:l,acquireProgram:Z0,releaseProgram:p,releaseShaderCache:$0,programs:U,dispose:z0}}function vK(){let Q=new WeakMap;function Z(q){let G=Q.get(q);if(G===void 0)G={},Q.set(q,G);return G}function J(q){Q.delete(q)}function X(q,G,V){Q.get(q)[G]=V}function H(){Q=new WeakMap}return{get:Z,remove:J,update:X,dispose:H}}function bK(Q,Z){if(Q.groupOrder!==Z.groupOrder)return Q.groupOrder-Z.groupOrder;else if(Q.renderOrder!==Z.renderOrder)return Q.renderOrder-Z.renderOrder;else if(Q.material.id!==Z.material.id)return Q.material.id-Z.material.id;else if(Q.z!==Z.z)return Q.z-Z.z;else return Q.id-Z.id}function uJ(Q,Z){if(Q.groupOrder!==Z.groupOrder)return Q.groupOrder-Z.groupOrder;else if(Q.renderOrder!==Z.renderOrder)return Q.renderOrder-Z.renderOrder;else if(Q.z!==Z.z)return Z.z-Q.z;else return Q.id-Z.id}function cJ(){let Q=[],Z=0,J=[],X=[],H=[];function q(){Z=0,J.length=0,X.length=0,H.length=0}function G(z,I,w,j,f,k){let C=Q[Z];if(C===void 0)C={id:z.id,object:z,geometry:I,material:w,groupOrder:j,renderOrder:z.renderOrder,z:f,group:k},Q[Z]=C;else C.id=z.id,C.object=z,C.geometry=I,C.material=w,C.groupOrder=j,C.renderOrder=z.renderOrder,C.z=f,C.group=k;return Z++,C}function V(z,I,w,j,f,k){let C=G(z,I,w,j,f,k);if(w.transmission>0)X.push(C);else if(w.transparent===!0)H.push(C);else J.push(C)}function R(z,I,w,j,f,k){let C=G(z,I,w,j,f,k);if(w.transmission>0)X.unshift(C);else if(w.transparent===!0)H.unshift(C);else J.unshift(C)}function U(z,I){if(J.length>1)J.sort(z||bK);if(X.length>1)X.sort(I||uJ);if(H.length>1)H.sort(I||uJ)}function B(){for(let z=Z,I=Q.length;z<I;z++){let w=Q[z];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:J,transmissive:X,transparent:H,init:q,push:V,unshift:R,finish:B,sort:U}}function hK(){let Q=new WeakMap;function Z(X,H){let q=Q.get(X),G;if(q===void 0)G=new cJ,Q.set(X,[G]);else if(H>=q.length)G=new cJ,q.push(G);else G=q[H];return G}function J(){Q=new WeakMap}return{get:Z,dispose:J}}function gK(){let Q={};return{get:function(Z){if(Q[Z.id]!==void 0)return Q[Z.id];let J;switch(Z.type){case"DirectionalLight":J={direction:new Q0,color:new L7};break;case"SpotLight":J={position:new Q0,direction:new Q0,color:new L7,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":J={position:new Q0,color:new L7,distance:0,decay:0};break;case"HemisphereLight":J={direction:new Q0,skyColor:new L7,groundColor:new L7};break;case"RectAreaLight":J={color:new L7,position:new Q0,halfWidth:new Q0,halfHeight:new Q0};break}return Q[Z.id]=J,J}}}function pK(){let Q={};return{get:function(Z){if(Q[Z.id]!==void 0)return Q[Z.id];let J;switch(Z.type){case"DirectionalLight":J={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0};break;case"SpotLight":J={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0};break;case"PointLight":J={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new h0,shadowCameraNear:1,shadowCameraFar:1000};break}return Q[Z.id]=J,J}}}var mK=0;function dK(Q,Z){return(Z.castShadow?2:0)-(Q.castShadow?2:0)+(Z.map?1:0)-(Q.map?1:0)}function lK(Q,Z){let J=new gK,X=pK(),H={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let B=0;B<9;B++)H.probe.push(new Q0);let q=new Q0,G=new o7,V=new o7;function R(B,z){let I=0,w=0,j=0;for(let L0=0;L0<9;L0++)H.probe[L0].set(0,0,0);let f=0,k=0,C=0,v=0,x=0,l=0,Z0=0,p=0,$0=0,z0=0,b=0;B.sort(dK);let m=z===!0?Math.PI:1;for(let L0=0,S0=B.length;L0<S0;L0++){let o=B[L0],e=o.color,D0=o.intensity,P0=o.distance,a=o.shadow&&o.shadow.map?o.shadow.map.texture:null;if(o.isAmbientLight)I+=e.r*D0*m,w+=e.g*D0*m,j+=e.b*D0*m;else if(o.isLightProbe){for(let W0=0;W0<9;W0++)H.probe[W0].addScaledVector(o.sh.coefficients[W0],D0);b++}else if(o.isDirectionalLight){let W0=J.get(o);if(W0.color.copy(o.color).multiplyScalar(o.intensity*m),o.castShadow){let C0=o.shadow,v0=X.get(o);v0.shadowBias=C0.bias,v0.shadowNormalBias=C0.normalBias,v0.shadowRadius=C0.radius,v0.shadowMapSize=C0.mapSize,H.directionalShadow[f]=v0,H.directionalShadowMap[f]=a,H.directionalShadowMatrix[f]=o.shadow.matrix,l++}H.directional[f]=W0,f++}else if(o.isSpotLight){let W0=J.get(o);W0.position.setFromMatrixPosition(o.matrixWorld),W0.color.copy(e).multiplyScalar(D0*m),W0.distance=P0,W0.coneCos=Math.cos(o.angle),W0.penumbraCos=Math.cos(o.angle*(1-o.penumbra)),W0.decay=o.decay,H.spot[C]=W0;let C0=o.shadow;if(o.map){if(H.spotLightMap[$0]=o.map,$0++,C0.updateMatrices(o),o.castShadow)z0++}if(H.spotLightMatrix[C]=C0.matrix,o.castShadow){let v0=X.get(o);v0.shadowBias=C0.bias,v0.shadowNormalBias=C0.normalBias,v0.shadowRadius=C0.radius,v0.shadowMapSize=C0.mapSize,H.spotShadow[C]=v0,H.spotShadowMap[C]=a,p++}C++}else if(o.isRectAreaLight){let W0=J.get(o);W0.color.copy(e).multiplyScalar(D0),W0.halfWidth.set(o.width*0.5,0,0),W0.halfHeight.set(0,o.height*0.5,0),H.rectArea[v]=W0,v++}else if(o.isPointLight){let W0=J.get(o);if(W0.color.copy(o.color).multiplyScalar(o.intensity*m),W0.distance=o.distance,W0.decay=o.decay,o.castShadow){let C0=o.shadow,v0=X.get(o);v0.shadowBias=C0.bias,v0.shadowNormalBias=C0.normalBias,v0.shadowRadius=C0.radius,v0.shadowMapSize=C0.mapSize,v0.shadowCameraNear=C0.camera.near,v0.shadowCameraFar=C0.camera.far,H.pointShadow[k]=v0,H.pointShadowMap[k]=a,H.pointShadowMatrix[k]=o.shadow.matrix,Z0++}H.point[k]=W0,k++}else if(o.isHemisphereLight){let W0=J.get(o);W0.skyColor.copy(o.color).multiplyScalar(D0*m),W0.groundColor.copy(o.groundColor).multiplyScalar(D0*m),H.hemi[x]=W0,x++}}if(v>0)if(Z.isWebGL2)if(Q.has("OES_texture_float_linear")===!0)H.rectAreaLTC1=n0.LTC_FLOAT_1,H.rectAreaLTC2=n0.LTC_FLOAT_2;else H.rectAreaLTC1=n0.LTC_HALF_1,H.rectAreaLTC2=n0.LTC_HALF_2;else if(Q.has("OES_texture_float_linear")===!0)H.rectAreaLTC1=n0.LTC_FLOAT_1,H.rectAreaLTC2=n0.LTC_FLOAT_2;else if(Q.has("OES_texture_half_float_linear")===!0)H.rectAreaLTC1=n0.LTC_HALF_1,H.rectAreaLTC2=n0.LTC_HALF_2;else console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");H.ambient[0]=I,H.ambient[1]=w,H.ambient[2]=j;let q0=H.hash;if(q0.directionalLength!==f||q0.pointLength!==k||q0.spotLength!==C||q0.rectAreaLength!==v||q0.hemiLength!==x||q0.numDirectionalShadows!==l||q0.numPointShadows!==Z0||q0.numSpotShadows!==p||q0.numSpotMaps!==$0||q0.numLightProbes!==b)H.directional.length=f,H.spot.length=C,H.rectArea.length=v,H.point.length=k,H.hemi.length=x,H.directionalShadow.length=l,H.directionalShadowMap.length=l,H.pointShadow.length=Z0,H.pointShadowMap.length=Z0,H.spotShadow.length=p,H.spotShadowMap.length=p,H.directionalShadowMatrix.length=l,H.pointShadowMatrix.length=Z0,H.spotLightMatrix.length=p+$0-z0,H.spotLightMap.length=$0,H.numSpotLightShadowsWithMaps=z0,H.numLightProbes=b,q0.directionalLength=f,q0.pointLength=k,q0.spotLength=C,q0.rectAreaLength=v,q0.hemiLength=x,q0.numDirectionalShadows=l,q0.numPointShadows=Z0,q0.numSpotShadows=p,q0.numSpotMaps=$0,q0.numLightProbes=b,H.version=mK++}function U(B,z){let I=0,w=0,j=0,f=0,k=0,C=z.matrixWorldInverse;for(let v=0,x=B.length;v<x;v++){let l=B[v];if(l.isDirectionalLight){let Z0=H.directional[I];Z0.direction.setFromMatrixPosition(l.matrixWorld),q.setFromMatrixPosition(l.target.matrixWorld),Z0.direction.sub(q),Z0.direction.transformDirection(C),I++}else if(l.isSpotLight){let Z0=H.spot[j];Z0.position.setFromMatrixPosition(l.matrixWorld),Z0.position.applyMatrix4(C),Z0.direction.setFromMatrixPosition(l.matrixWorld),q.setFromMatrixPosition(l.target.matrixWorld),Z0.direction.sub(q),Z0.direction.transformDirection(C),j++}else if(l.isRectAreaLight){let Z0=H.rectArea[f];Z0.position.setFromMatrixPosition(l.matrixWorld),Z0.position.applyMatrix4(C),V.identity(),G.copy(l.matrixWorld),G.premultiply(C),V.extractRotation(G),Z0.halfWidth.set(l.width*0.5,0,0),Z0.halfHeight.set(0,l.height*0.5,0),Z0.halfWidth.applyMatrix4(V),Z0.halfHeight.applyMatrix4(V),f++}else if(l.isPointLight){let Z0=H.point[w];Z0.position.setFromMatrixPosition(l.matrixWorld),Z0.position.applyMatrix4(C),w++}else if(l.isHemisphereLight){let Z0=H.hemi[k];Z0.direction.setFromMatrixPosition(l.matrixWorld),Z0.direction.transformDirection(C),k++}}}return{setup:R,setupView:U,state:H}}function sJ(Q,Z){let J=new lK(Q,Z),X=[],H=[];function q(){X.length=0,H.length=0}function G(z){X.push(z)}function V(z){H.push(z)}function R(z){J.setup(X,z)}function U(z){J.setupView(X,z)}return{init:q,state:{lightsArray:X,shadowsArray:H,lights:J},setupLights:R,setupLightsView:U,pushLight:G,pushShadow:V}}function uK(Q,Z){let J=new WeakMap;function X(q,G=0){let V=J.get(q),R;if(V===void 0)R=new sJ(Q,Z),J.set(q,[R]);else if(G>=V.length)R=new sJ(Q,Z),V.push(R);else R=V[G];return R}function H(){J=new WeakMap}return{get:X,dispose:H}}class wW extends _9{constructor(Q){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(Q)}copy(Q){return super.copy(Q),this.depthPacking=Q.depthPacking,this.map=Q.map,this.alphaMap=Q.alphaMap,this.displacementMap=Q.displacementMap,this.displacementScale=Q.displacementScale,this.displacementBias=Q.displacementBias,this.wireframe=Q.wireframe,this.wireframeLinewidth=Q.wireframeLinewidth,this}}class PW extends _9{constructor(Q){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(Q)}copy(Q){return super.copy(Q),this.map=Q.map,this.alphaMap=Q.alphaMap,this.displacementMap=Q.displacementMap,this.displacementScale=Q.displacementScale,this.displacementBias=Q.displacementBias,this}}var cK=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sK=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nK(Q,Z,J){let X=new h5,H=new h0,q=new h0,G=new Y8,V=new wW({depthPacking:3201}),R=new PW,U={},B=J.maxTextureSize,z={[0]:1,[1]:0,[2]:2},I=new U9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new h0},radius:{value:4}},vertexShader:cK,fragmentShader:sK}),w=I.clone();w.defines.HORIZONTAL_PASS=1;let j=new T8;j.setAttribute("position",new q8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let f=new b8(j,I),k=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let C=this.type;this.render=function(p,$0,z0){if(k.enabled===!1)return;if(k.autoUpdate===!1&&k.needsUpdate===!1)return;if(p.length===0)return;let b=Q.getRenderTarget(),m=Q.getActiveCubeFace(),q0=Q.getActiveMipmapLevel(),L0=Q.state;L0.setBlending(0),L0.buffers.color.setClear(1,1,1,1),L0.buffers.depth.setTest(!0),L0.setScissorTest(!1);let S0=C!==3&&this.type===3,o=C===3&&this.type!==3;for(let e=0,D0=p.length;e<D0;e++){let P0=p[e],a=P0.shadow;if(a===void 0){console.warn("THREE.WebGLShadowMap:",P0,"has no shadow.");continue}if(a.autoUpdate===!1&&a.needsUpdate===!1)continue;H.copy(a.mapSize);let W0=a.getFrameExtents();if(H.multiply(W0),q.copy(a.mapSize),H.x>B||H.y>B){if(H.x>B)q.x=Math.floor(B/W0.x),H.x=q.x*W0.x,a.mapSize.x=q.x;if(H.y>B)q.y=Math.floor(B/W0.y),H.y=q.y*W0.y,a.mapSize.y=q.y}if(a.map===null||S0===!0||o===!0){let v0=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(a.map!==null)a.map.dispose();a.map=new R9(H.x,H.y,v0),a.map.texture.name=P0.name+".shadowMap",a.camera.updateProjectionMatrix()}Q.setRenderTarget(a.map),Q.clear();let C0=a.getViewportCount();for(let v0=0;v0<C0;v0++){let K0=a.getViewport(v0);G.set(q.x*K0.x,q.y*K0.y,q.x*K0.z,q.y*K0.w),L0.viewport(G),a.updateMatrices(P0,v0),X=a.getFrustum(),l($0,z0,a.camera,P0,this.type)}if(a.isPointLightShadow!==!0&&this.type===3)v(a,z0);a.needsUpdate=!1}C=this.type,k.needsUpdate=!1,Q.setRenderTarget(b,m,q0)};function v(p,$0){let z0=Z.update(f);if(I.defines.VSM_SAMPLES!==p.blurSamples)I.defines.VSM_SAMPLES=p.blurSamples,w.defines.VSM_SAMPLES=p.blurSamples,I.needsUpdate=!0,w.needsUpdate=!0;if(p.mapPass===null)p.mapPass=new R9(H.x,H.y);I.uniforms.shadow_pass.value=p.map.texture,I.uniforms.resolution.value=p.mapSize,I.uniforms.radius.value=p.radius,Q.setRenderTarget(p.mapPass),Q.clear(),Q.renderBufferDirect($0,null,z0,I,f,null),w.uniforms.shadow_pass.value=p.mapPass.texture,w.uniforms.resolution.value=p.mapSize,w.uniforms.radius.value=p.radius,Q.setRenderTarget(p.map),Q.clear(),Q.renderBufferDirect($0,null,z0,w,f,null)}function x(p,$0,z0,b){let m=null,q0=z0.isPointLight===!0?p.customDistanceMaterial:p.customDepthMaterial;if(q0!==void 0)m=q0;else if(m=z0.isPointLight===!0?R:V,Q.localClippingEnabled&&$0.clipShadows===!0&&Array.isArray($0.clippingPlanes)&&$0.clippingPlanes.length!==0||$0.displacementMap&&$0.displacementScale!==0||$0.alphaMap&&$0.alphaTest>0||$0.map&&$0.alphaTest>0){let L0=m.uuid,S0=$0.uuid,o=U[L0];if(o===void 0)o={},U[L0]=o;let e=o[S0];if(e===void 0)e=m.clone(),o[S0]=e,$0.addEventListener("dispose",Z0);m=e}if(m.visible=$0.visible,m.wireframe=$0.wireframe,b===3)m.side=$0.shadowSide!==null?$0.shadowSide:$0.side;else m.side=$0.shadowSide!==null?$0.shadowSide:z[$0.side];if(m.alphaMap=$0.alphaMap,m.alphaTest=$0.alphaTest,m.map=$0.map,m.clipShadows=$0.clipShadows,m.clippingPlanes=$0.clippingPlanes,m.clipIntersection=$0.clipIntersection,m.displacementMap=$0.displacementMap,m.displacementScale=$0.displacementScale,m.displacementBias=$0.displacementBias,m.wireframeLinewidth=$0.wireframeLinewidth,m.linewidth=$0.linewidth,z0.isPointLight===!0&&m.isMeshDistanceMaterial===!0){let L0=Q.properties.get(m);L0.light=z0}return m}function l(p,$0,z0,b,m){if(p.visible===!1)return;if(p.layers.test($0.layers)&&(p.isMesh||p.isLine||p.isPoints)){if((p.castShadow||p.receiveShadow&&m===3)&&(!p.frustumCulled||X.intersectsObject(p))){p.modelViewMatrix.multiplyMatrices(z0.matrixWorldInverse,p.matrixWorld);let S0=Z.update(p),o=p.material;if(Array.isArray(o)){let e=S0.groups;for(let D0=0,P0=e.length;D0<P0;D0++){let a=e[D0],W0=o[a.materialIndex];if(W0&&W0.visible){let C0=x(p,W0,b,m);p.onBeforeShadow(Q,p,$0,z0,S0,C0,a),Q.renderBufferDirect(z0,null,S0,C0,p,a),p.onAfterShadow(Q,p,$0,z0,S0,C0,a)}}}else if(o.visible){let e=x(p,o,b,m);p.onBeforeShadow(Q,p,$0,z0,S0,e,null),Q.renderBufferDirect(z0,null,S0,e,p,null),p.onAfterShadow(Q,p,$0,z0,S0,e,null)}}}let L0=p.children;for(let S0=0,o=L0.length;S0<o;S0++)l(L0[S0],$0,z0,b,m)}function Z0(p){p.target.removeEventListener("dispose",Z0);for(let z0 in U){let b=U[z0],m=p.target.uuid;if(m in b)b[m].dispose(),delete b[m]}}}function iK(Q,Z,J){let X=J.isWebGL2;function H(){let s=!1,I0=new Y8,w0=null,b0=new Y8(0,0,0,0);return{setMask:function(d0){if(w0!==d0&&!s)Q.colorMask(d0,d0,d0,d0),w0=d0},setLocked:function(d0){s=d0},setClear:function(d0,$7,K7,I7,P7){if(P7===!0)d0*=I7,$7*=I7,K7*=I7;if(I0.set(d0,$7,K7,I7),b0.equals(I0)===!1)Q.clearColor(d0,$7,K7,I7),b0.copy(I0)},reset:function(){s=!1,w0=null,b0.set(-1,0,0,0)}}}function q(){let s=!1,I0=null,w0=null,b0=null;return{setTest:function(d0){if(d0)u0(Q.DEPTH_TEST);else X7(Q.DEPTH_TEST)},setMask:function(d0){if(I0!==d0&&!s)Q.depthMask(d0),I0=d0},setFunc:function(d0){if(w0!==d0){switch(d0){case 0:Q.depthFunc(Q.NEVER);break;case 1:Q.depthFunc(Q.ALWAYS);break;case 2:Q.depthFunc(Q.LESS);break;case 3:Q.depthFunc(Q.LEQUAL);break;case 4:Q.depthFunc(Q.EQUAL);break;case 5:Q.depthFunc(Q.GEQUAL);break;case 6:Q.depthFunc(Q.GREATER);break;case 7:Q.depthFunc(Q.NOTEQUAL);break;default:Q.depthFunc(Q.LEQUAL)}w0=d0}},setLocked:function(d0){s=d0},setClear:function(d0){if(b0!==d0)Q.clearDepth(d0),b0=d0},reset:function(){s=!1,I0=null,w0=null,b0=null}}}function G(){let s=!1,I0=null,w0=null,b0=null,d0=null,$7=null,K7=null,I7=null,P7=null;return{setTest:function(V7){if(!s)if(V7)u0(Q.STENCIL_TEST);else X7(Q.STENCIL_TEST)},setMask:function(V7){if(I0!==V7&&!s)Q.stencilMask(V7),I0=V7},setFunc:function(V7,S7,l7){if(w0!==V7||b0!==S7||d0!==l7)Q.stencilFunc(V7,S7,l7),w0=V7,b0=S7,d0=l7},setOp:function(V7,S7,l7){if($7!==V7||K7!==S7||I7!==l7)Q.stencilOp(V7,S7,l7),$7=V7,K7=S7,I7=l7},setLocked:function(V7){s=V7},setClear:function(V7){if(P7!==V7)Q.clearStencil(V7),P7=V7},reset:function(){s=!1,I0=null,w0=null,b0=null,d0=null,$7=null,K7=null,I7=null,P7=null}}}let V=new H,R=new q,U=new G,B=new WeakMap,z=new WeakMap,I={},w={},j=new WeakMap,f=[],k=null,C=!1,v=null,x=null,l=null,Z0=null,p=null,$0=null,z0=null,b=new L7(0,0,0),m=0,q0=!1,L0=null,S0=null,o=null,e=null,D0=null,P0=Q.getParameter(Q.MAX_COMBINED_TEXTURE_IMAGE_UNITS),a=!1,W0=0,C0=Q.getParameter(Q.VERSION);if(C0.indexOf("WebGL")!==-1)W0=parseFloat(/^WebGL (\d)/.exec(C0)[1]),a=W0>=1;else if(C0.indexOf("OpenGL ES")!==-1)W0=parseFloat(/^OpenGL ES (\d)/.exec(C0)[1]),a=W0>=2;let v0=null,K0={},M0=Q.getParameter(Q.SCISSOR_BOX),s0=Q.getParameter(Q.VIEWPORT),l0=new Y8().fromArray(M0),e0=new Y8().fromArray(s0);function J7(s,I0,w0,b0){let d0=new Uint8Array(4),$7=Q.createTexture();Q.bindTexture(s,$7),Q.texParameteri(s,Q.TEXTURE_MIN_FILTER,Q.NEAREST),Q.texParameteri(s,Q.TEXTURE_MAG_FILTER,Q.NEAREST);for(let K7=0;K7<w0;K7++)if(X&&(s===Q.TEXTURE_3D||s===Q.TEXTURE_2D_ARRAY))Q.texImage3D(I0,0,Q.RGBA,1,1,b0,0,Q.RGBA,Q.UNSIGNED_BYTE,d0);else Q.texImage2D(I0+K7,0,Q.RGBA,1,1,0,Q.RGBA,Q.UNSIGNED_BYTE,d0);return $7}let H7={};if(H7[Q.TEXTURE_2D]=J7(Q.TEXTURE_2D,Q.TEXTURE_2D,1),H7[Q.TEXTURE_CUBE_MAP]=J7(Q.TEXTURE_CUBE_MAP,Q.TEXTURE_CUBE_MAP_POSITIVE_X,6),X)H7[Q.TEXTURE_2D_ARRAY]=J7(Q.TEXTURE_2D_ARRAY,Q.TEXTURE_2D_ARRAY,1,1),H7[Q.TEXTURE_3D]=J7(Q.TEXTURE_3D,Q.TEXTURE_3D,1,1);V.setClear(0,0,0,1),R.setClear(1),U.setClear(0),u0(Q.DEPTH_TEST),R.setFunc(3),L(!1),_(1),u0(Q.CULL_FACE),i0(0);function u0(s){if(I[s]!==!0)Q.enable(s),I[s]=!0}function X7(s){if(I[s]!==!1)Q.disable(s),I[s]=!1}function c(s,I0){if(w[s]!==I0){if(Q.bindFramebuffer(s,I0),w[s]=I0,X){if(s===Q.DRAW_FRAMEBUFFER)w[Q.FRAMEBUFFER]=I0;if(s===Q.FRAMEBUFFER)w[Q.DRAW_FRAMEBUFFER]=I0}return!0}return!1}function g0(s,I0){let w0=f,b0=!1;if(s){if(w0=j.get(I0),w0===void 0)w0=[],j.set(I0,w0);if(s.isWebGLMultipleRenderTargets){let d0=s.texture;if(w0.length!==d0.length||w0[0]!==Q.COLOR_ATTACHMENT0){for(let $7=0,K7=d0.length;$7<K7;$7++)w0[$7]=Q.COLOR_ATTACHMENT0+$7;w0.length=d0.length,b0=!0}}else if(w0[0]!==Q.COLOR_ATTACHMENT0)w0[0]=Q.COLOR_ATTACHMENT0,b0=!0}else if(w0[0]!==Q.BACK)w0[0]=Q.BACK,b0=!0;if(b0)if(J.isWebGL2)Q.drawBuffers(w0);else Z.get("WEBGL_draw_buffers").drawBuffersWEBGL(w0)}function A0(s){if(k!==s)return Q.useProgram(s),k=s,!0;return!1}let j0={[100]:Q.FUNC_ADD,[101]:Q.FUNC_SUBTRACT,[102]:Q.FUNC_REVERSE_SUBTRACT};if(X)j0[103]=Q.MIN,j0[104]=Q.MAX;else{let s=Z.get("EXT_blend_minmax");if(s!==null)j0[103]=s.MIN_EXT,j0[104]=s.MAX_EXT}let E0={[200]:Q.ZERO,[201]:Q.ONE,[202]:Q.SRC_COLOR,[204]:Q.SRC_ALPHA,[210]:Q.SRC_ALPHA_SATURATE,[208]:Q.DST_COLOR,[206]:Q.DST_ALPHA,[203]:Q.ONE_MINUS_SRC_COLOR,[205]:Q.ONE_MINUS_SRC_ALPHA,[209]:Q.ONE_MINUS_DST_COLOR,[207]:Q.ONE_MINUS_DST_ALPHA,[211]:Q.CONSTANT_COLOR,[212]:Q.ONE_MINUS_CONSTANT_COLOR,[213]:Q.CONSTANT_ALPHA,[214]:Q.ONE_MINUS_CONSTANT_ALPHA};function i0(s,I0,w0,b0,d0,$7,K7,I7,P7,V7){if(s===0){if(C===!0)X7(Q.BLEND),C=!1;return}if(C===!1)u0(Q.BLEND),C=!0;if(s!==5){if(s!==v||V7!==q0){if(x!==100||p!==100)Q.blendEquation(Q.FUNC_ADD),x=100,p=100;if(V7)switch(s){case 1:Q.blendFuncSeparate(Q.ONE,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case 2:Q.blendFunc(Q.ONE,Q.ONE);break;case 3:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case 4:Q.blendFuncSeparate(Q.ZERO,Q.SRC_COLOR,Q.ZERO,Q.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",s);break}else switch(s){case 1:Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case 2:Q.blendFunc(Q.SRC_ALPHA,Q.ONE);break;case 3:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case 4:Q.blendFunc(Q.ZERO,Q.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",s);break}l=null,Z0=null,$0=null,z0=null,b.set(0,0,0),m=0,v=s,q0=V7}return}if(d0=d0||I0,$7=$7||w0,K7=K7||b0,I0!==x||d0!==p)Q.blendEquationSeparate(j0[I0],j0[d0]),x=I0,p=d0;if(w0!==l||b0!==Z0||$7!==$0||K7!==z0)Q.blendFuncSeparate(E0[w0],E0[b0],E0[$7],E0[K7]),l=w0,Z0=b0,$0=$7,z0=K7;if(I7.equals(b)===!1||P7!==m)Q.blendColor(I7.r,I7.g,I7.b,P7),b.copy(I7),m=P7;v=s,q0=!1}function M(s,I0){s.side===2?X7(Q.CULL_FACE):u0(Q.CULL_FACE);let w0=s.side===1;if(I0)w0=!w0;L(w0),s.blending===1&&s.transparent===!1?i0(0):i0(s.blending,s.blendEquation,s.blendSrc,s.blendDst,s.blendEquationAlpha,s.blendSrcAlpha,s.blendDstAlpha,s.blendColor,s.blendAlpha,s.premultipliedAlpha),R.setFunc(s.depthFunc),R.setTest(s.depthTest),R.setMask(s.depthWrite),V.setMask(s.colorWrite);let b0=s.stencilWrite;if(U.setTest(b0),b0)U.setMask(s.stencilWriteMask),U.setFunc(s.stencilFunc,s.stencilRef,s.stencilFuncMask),U.setOp(s.stencilFail,s.stencilZFail,s.stencilZPass);P(s.polygonOffset,s.polygonOffsetFactor,s.polygonOffsetUnits),s.alphaToCoverage===!0?u0(Q.SAMPLE_ALPHA_TO_COVERAGE):X7(Q.SAMPLE_ALPHA_TO_COVERAGE)}function L(s){if(L0!==s){if(s)Q.frontFace(Q.CW);else Q.frontFace(Q.CCW);L0=s}}function _(s){if(s!==0){if(u0(Q.CULL_FACE),s!==S0)if(s===1)Q.cullFace(Q.BACK);else if(s===2)Q.cullFace(Q.FRONT);else Q.cullFace(Q.FRONT_AND_BACK)}else X7(Q.CULL_FACE);S0=s}function D(s){if(s!==o){if(a)Q.lineWidth(s);o=s}}function P(s,I0,w0){if(s){if(u0(Q.POLYGON_OFFSET_FILL),e!==I0||D0!==w0)Q.polygonOffset(I0,w0),e=I0,D0=w0}else X7(Q.POLYGON_OFFSET_FILL)}function g(s){if(s)u0(Q.SCISSOR_TEST);else X7(Q.SCISSOR_TEST)}function A(s){if(s===void 0)s=Q.TEXTURE0+P0-1;if(v0!==s)Q.activeTexture(s),v0=s}function n(s,I0,w0){if(w0===void 0)if(v0===null)w0=Q.TEXTURE0+P0-1;else w0=v0;let b0=K0[w0];if(b0===void 0)b0={type:void 0,texture:void 0},K0[w0]=b0;if(b0.type!==s||b0.texture!==I0){if(v0!==w0)Q.activeTexture(w0),v0=w0;Q.bindTexture(s,I0||H7[s]),b0.type=s,b0.texture=I0}}function i(){let s=K0[v0];if(s!==void 0&&s.type!==void 0)Q.bindTexture(s.type,null),s.type=void 0,s.texture=void 0}function X0(){try{Q.compressedTexImage2D.apply(Q,arguments)}catch(s){console.error("THREE.WebGLState:",s)}}function r(){try{Q.compressedTexImage3D.apply(Q,arguments)}catch(s){console.error("THREE.WebGLState:",s)}}function U0(){try{Q.texSubImage2D.apply(Q,arguments)}catch(s){console.error("THREE.WebGLState:",s)}}function f0(){try{Q.texSubImage3D.apply(Q,arguments)}catch(s){console.error("THREE.WebGLState:",s)}}function H0(){try{Q.compressedTexSubImage2D.apply(Q,arguments)}catch(s){console.error("THREE.WebGLState:",s)}}function u(){try{Q.compressedTexSubImage3D.apply(Q,arguments)}catch(s){console.error("THREE.WebGLState:",s)}}function B0(){try{Q.texStorage2D.apply(Q,arguments)}catch(s){console.error("THREE.WebGLState:",s)}}function m0(){try{Q.texStorage3D.apply(Q,arguments)}catch(s){console.error("THREE.WebGLState:",s)}}function T0(){try{Q.texImage2D.apply(Q,arguments)}catch(s){console.error("THREE.WebGLState:",s)}}function p0(){try{Q.texImage3D.apply(Q,arguments)}catch(s){console.error("THREE.WebGLState:",s)}}function t0(s){if(l0.equals(s)===!1)Q.scissor(s.x,s.y,s.z,s.w),l0.copy(s)}function a0(s){if(e0.equals(s)===!1)Q.viewport(s.x,s.y,s.z,s.w),e0.copy(s)}function x0(s,I0){let w0=z.get(I0);if(w0===void 0)w0=new WeakMap,z.set(I0,w0);let b0=w0.get(s);if(b0===void 0)b0=Q.getUniformBlockIndex(I0,s.name),w0.set(s,b0)}function c0(s,I0){let b0=z.get(I0).get(s);if(B.get(I0)!==b0)Q.uniformBlockBinding(I0,b0,s.__bindingPointIndex),B.set(I0,b0)}function _0(){if(Q.disable(Q.BLEND),Q.disable(Q.CULL_FACE),Q.disable(Q.DEPTH_TEST),Q.disable(Q.POLYGON_OFFSET_FILL),Q.disable(Q.SCISSOR_TEST),Q.disable(Q.STENCIL_TEST),Q.disable(Q.SAMPLE_ALPHA_TO_COVERAGE),Q.blendEquation(Q.FUNC_ADD),Q.blendFunc(Q.ONE,Q.ZERO),Q.blendFuncSeparate(Q.ONE,Q.ZERO,Q.ONE,Q.ZERO),Q.blendColor(0,0,0,0),Q.colorMask(!0,!0,!0,!0),Q.clearColor(0,0,0,0),Q.depthMask(!0),Q.depthFunc(Q.LESS),Q.clearDepth(1),Q.stencilMask(4294967295),Q.stencilFunc(Q.ALWAYS,0,4294967295),Q.stencilOp(Q.KEEP,Q.KEEP,Q.KEEP),Q.clearStencil(0),Q.cullFace(Q.BACK),Q.frontFace(Q.CCW),Q.polygonOffset(0,0),Q.activeTexture(Q.TEXTURE0),Q.bindFramebuffer(Q.FRAMEBUFFER,null),X===!0)Q.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),Q.bindFramebuffer(Q.READ_FRAMEBUFFER,null);Q.useProgram(null),Q.lineWidth(1),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.viewport(0,0,Q.canvas.width,Q.canvas.height),I={},v0=null,K0={},w={},j=new WeakMap,f=[],k=null,C=!1,v=null,x=null,l=null,Z0=null,p=null,$0=null,z0=null,b=new L7(0,0,0),m=0,q0=!1,L0=null,S0=null,o=null,e=null,D0=null,l0.set(0,0,Q.canvas.width,Q.canvas.height),e0.set(0,0,Q.canvas.width,Q.canvas.height),V.reset(),R.reset(),U.reset()}return{buffers:{color:V,depth:R,stencil:U},enable:u0,disable:X7,bindFramebuffer:c,drawBuffers:g0,useProgram:A0,setBlending:i0,setMaterial:M,setFlipSided:L,setCullFace:_,setLineWidth:D,setPolygonOffset:P,setScissorTest:g,activeTexture:A,bindTexture:n,unbindTexture:i,compressedTexImage2D:X0,compressedTexImage3D:r,texImage2D:T0,texImage3D:p0,updateUBOMapping:x0,uniformBlockBinding:c0,texStorage2D:B0,texStorage3D:m0,texSubImage2D:U0,texSubImage3D:f0,compressedTexSubImage2D:H0,compressedTexSubImage3D:u,scissor:t0,viewport:a0,reset:_0}}function oK(Q,Z,J,X,H,q,G){let V=H.isWebGL2,R=Z.has("WEBGL_multisampled_render_to_texture")?Z.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),B=new WeakMap,z,I=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(_){}function j(_,D){return w?new OffscreenCanvas(_,D):y5("canvas")}function f(_,D,P,g){let A=1;if(_.width>g||_.height>g)A=g/Math.max(_.width,_.height);if(A<1||D===!0)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap){let n=D?x5:Math.floor,i=n(A*_.width),X0=n(A*_.height);if(z===void 0)z=j(i,X0);let r=P?j(i,X0):z;return r.width=i,r.height=X0,r.getContext("2d").drawImage(_,0,0,i,X0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+i+"x"+X0+")."),r}else{if("data"in _)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+").");return _}return _}function k(_){return vQ(_.width)&&vQ(_.height)}function C(_){if(V)return!1;return _.wrapS!==1001||_.wrapT!==1001||_.minFilter!==1003&&_.minFilter!==1006}function v(_,D){return _.generateMipmaps&&D&&_.minFilter!==1003&&_.minFilter!==1006}function x(_){Q.generateMipmap(_)}function l(_,D,P,g,A=!1){if(V===!1)return D;if(_!==null){if(Q[_]!==void 0)return Q[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let n=D;if(D===Q.RED){if(P===Q.FLOAT)n=Q.R32F;if(P===Q.HALF_FLOAT)n=Q.R16F;if(P===Q.UNSIGNED_BYTE)n=Q.R8}if(D===Q.RED_INTEGER){if(P===Q.UNSIGNED_BYTE)n=Q.R8UI;if(P===Q.UNSIGNED_SHORT)n=Q.R16UI;if(P===Q.UNSIGNED_INT)n=Q.R32UI;if(P===Q.BYTE)n=Q.R8I;if(P===Q.SHORT)n=Q.R16I;if(P===Q.INT)n=Q.R32I}if(D===Q.RG){if(P===Q.FLOAT)n=Q.RG32F;if(P===Q.HALF_FLOAT)n=Q.RG16F;if(P===Q.UNSIGNED_BYTE)n=Q.RG8}if(D===Q.RGBA){let i=A?"linear":p7.getTransfer(g);if(P===Q.FLOAT)n=Q.RGBA32F;if(P===Q.HALF_FLOAT)n=Q.RGBA16F;if(P===Q.UNSIGNED_BYTE)n=i==="srgb"?Q.SRGB8_ALPHA8:Q.RGBA8;if(P===Q.UNSIGNED_SHORT_4_4_4_4)n=Q.RGBA4;if(P===Q.UNSIGNED_SHORT_5_5_5_1)n=Q.RGB5_A1}if(n===Q.R16F||n===Q.R32F||n===Q.RG16F||n===Q.RG32F||n===Q.RGBA16F||n===Q.RGBA32F)Z.get("EXT_color_buffer_float");return n}function Z0(_,D,P){if(v(_,P)===!0||_.isFramebufferTexture&&_.minFilter!==1003&&_.minFilter!==1006)return Math.log2(Math.max(D.width,D.height))+1;else if(_.mipmaps!==void 0&&_.mipmaps.length>0)return _.mipmaps.length;else if(_.isCompressedTexture&&Array.isArray(_.image))return D.mipmaps.length;else return 1}function p(_){if(_===1003||_===1004||_===1005)return Q.NEAREST;return Q.LINEAR}function $0(_){let D=_.target;if(D.removeEventListener("dispose",$0),b(D),D.isVideoTexture)B.delete(D)}function z0(_){let D=_.target;D.removeEventListener("dispose",z0),q0(D)}function b(_){let D=X.get(_);if(D.__webglInit===void 0)return;let P=_.source,g=I.get(P);if(g){let A=g[D.__cacheKey];if(A.usedTimes--,A.usedTimes===0)m(_);if(Object.keys(g).length===0)I.delete(P)}X.remove(_)}function m(_){let D=X.get(_);Q.deleteTexture(D.__webglTexture);let P=_.source,g=I.get(P);delete g[D.__cacheKey],G.memory.textures--}function q0(_){let D=_.texture,P=X.get(_),g=X.get(D);if(g.__webglTexture!==void 0)Q.deleteTexture(g.__webglTexture),G.memory.textures--;if(_.depthTexture)_.depthTexture.dispose();if(_.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(P.__webglFramebuffer[A]))for(let n=0;n<P.__webglFramebuffer[A].length;n++)Q.deleteFramebuffer(P.__webglFramebuffer[A][n]);else Q.deleteFramebuffer(P.__webglFramebuffer[A]);if(P.__webglDepthbuffer)Q.deleteRenderbuffer(P.__webglDepthbuffer[A])}else{if(Array.isArray(P.__webglFramebuffer))for(let A=0;A<P.__webglFramebuffer.length;A++)Q.deleteFramebuffer(P.__webglFramebuffer[A]);else Q.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer)Q.deleteRenderbuffer(P.__webglDepthbuffer);if(P.__webglMultisampledFramebuffer)Q.deleteFramebuffer(P.__webglMultisampledFramebuffer);if(P.__webglColorRenderbuffer){for(let A=0;A<P.__webglColorRenderbuffer.length;A++)if(P.__webglColorRenderbuffer[A])Q.deleteRenderbuffer(P.__webglColorRenderbuffer[A])}if(P.__webglDepthRenderbuffer)Q.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(_.isWebGLMultipleRenderTargets)for(let A=0,n=D.length;A<n;A++){let i=X.get(D[A]);if(i.__webglTexture)Q.deleteTexture(i.__webglTexture),G.memory.textures--;X.remove(D[A])}X.remove(D),X.remove(_)}let L0=0;function S0(){L0=0}function o(){let _=L0;if(_>=H.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+H.maxTextures);return L0+=1,_}function e(_){let D=[];return D.push(_.wrapS),D.push(_.wrapT),D.push(_.wrapR||0),D.push(_.magFilter),D.push(_.minFilter),D.push(_.anisotropy),D.push(_.internalFormat),D.push(_.format),D.push(_.type),D.push(_.generateMipmaps),D.push(_.premultiplyAlpha),D.push(_.flipY),D.push(_.unpackAlignment),D.push(_.colorSpace),D.join()}function D0(_,D){let P=X.get(_);if(_.isVideoTexture)M(_);if(_.isRenderTargetTexture===!1&&_.version>0&&P.__version!==_.version){let g=_.image;if(g===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(g.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{l0(P,_,D);return}}J.bindTexture(Q.TEXTURE_2D,P.__webglTexture,Q.TEXTURE0+D)}function P0(_,D){let P=X.get(_);if(_.version>0&&P.__version!==_.version){l0(P,_,D);return}J.bindTexture(Q.TEXTURE_2D_ARRAY,P.__webglTexture,Q.TEXTURE0+D)}function a(_,D){let P=X.get(_);if(_.version>0&&P.__version!==_.version){l0(P,_,D);return}J.bindTexture(Q.TEXTURE_3D,P.__webglTexture,Q.TEXTURE0+D)}function W0(_,D){let P=X.get(_);if(_.version>0&&P.__version!==_.version){e0(P,_,D);return}J.bindTexture(Q.TEXTURE_CUBE_MAP,P.__webglTexture,Q.TEXTURE0+D)}let C0={[1000]:Q.REPEAT,[1001]:Q.CLAMP_TO_EDGE,[1002]:Q.MIRRORED_REPEAT},v0={[1003]:Q.NEAREST,[1004]:Q.NEAREST_MIPMAP_NEAREST,[1005]:Q.NEAREST_MIPMAP_LINEAR,[1006]:Q.LINEAR,[1007]:Q.LINEAR_MIPMAP_NEAREST,[1008]:Q.LINEAR_MIPMAP_LINEAR},K0={[512]:Q.NEVER,[519]:Q.ALWAYS,[513]:Q.LESS,[515]:Q.LEQUAL,[514]:Q.EQUAL,[518]:Q.GEQUAL,[516]:Q.GREATER,[517]:Q.NOTEQUAL};function M0(_,D,P){if(P){if(Q.texParameteri(_,Q.TEXTURE_WRAP_S,C0[D.wrapS]),Q.texParameteri(_,Q.TEXTURE_WRAP_T,C0[D.wrapT]),_===Q.TEXTURE_3D||_===Q.TEXTURE_2D_ARRAY)Q.texParameteri(_,Q.TEXTURE_WRAP_R,C0[D.wrapR]);Q.texParameteri(_,Q.TEXTURE_MAG_FILTER,v0[D.magFilter]),Q.texParameteri(_,Q.TEXTURE_MIN_FILTER,v0[D.minFilter])}else{if(Q.texParameteri(_,Q.TEXTURE_WRAP_S,Q.CLAMP_TO_EDGE),Q.texParameteri(_,Q.TEXTURE_WRAP_T,Q.CLAMP_TO_EDGE),_===Q.TEXTURE_3D||_===Q.TEXTURE_2D_ARRAY)Q.texParameteri(_,Q.TEXTURE_WRAP_R,Q.CLAMP_TO_EDGE);if(D.wrapS!==1001||D.wrapT!==1001)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");if(Q.texParameteri(_,Q.TEXTURE_MAG_FILTER,p(D.magFilter)),Q.texParameteri(_,Q.TEXTURE_MIN_FILTER,p(D.minFilter)),D.minFilter!==1003&&D.minFilter!==1006)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")}if(D.compareFunction)Q.texParameteri(_,Q.TEXTURE_COMPARE_MODE,Q.COMPARE_REF_TO_TEXTURE),Q.texParameteri(_,Q.TEXTURE_COMPARE_FUNC,K0[D.compareFunction]);if(Z.has("EXT_texture_filter_anisotropic")===!0){let g=Z.get("EXT_texture_filter_anisotropic");if(D.magFilter===1003)return;if(D.minFilter!==1005&&D.minFilter!==1008)return;if(D.type===1015&&Z.has("OES_texture_float_linear")===!1)return;if(V===!1&&(D.type===1016&&Z.has("OES_texture_half_float_linear")===!1))return;if(D.anisotropy>1||X.get(D).__currentAnisotropy)Q.texParameterf(_,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,H.getMaxAnisotropy())),X.get(D).__currentAnisotropy=D.anisotropy}}function s0(_,D){let P=!1;if(_.__webglInit===void 0)_.__webglInit=!0,D.addEventListener("dispose",$0);let g=D.source,A=I.get(g);if(A===void 0)A={},I.set(g,A);let n=e(D);if(n!==_.__cacheKey){if(A[n]===void 0)A[n]={texture:Q.createTexture(),usedTimes:0},G.memory.textures++,P=!0;A[n].usedTimes++;let i=A[_.__cacheKey];if(i!==void 0){if(A[_.__cacheKey].usedTimes--,i.usedTimes===0)m(D)}_.__cacheKey=n,_.__webglTexture=A[n].texture}return P}function l0(_,D,P){let g=Q.TEXTURE_2D;if(D.isDataArrayTexture||D.isCompressedArrayTexture)g=Q.TEXTURE_2D_ARRAY;if(D.isData3DTexture)g=Q.TEXTURE_3D;let A=s0(_,D),n=D.source;J.bindTexture(g,_.__webglTexture,Q.TEXTURE0+P);let i=X.get(n);if(n.version!==i.__version||A===!0){J.activeTexture(Q.TEXTURE0+P);let X0=p7.getPrimaries(p7.workingColorSpace),r=D.colorSpace===""?null:p7.getPrimaries(D.colorSpace),U0=D.colorSpace===""||X0===r?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,D.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,D.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,U0);let f0=C(D)&&k(D.image)===!1,H0=f(D.image,f0,!1,H.maxTextureSize);H0=L(D,H0);let u=k(H0)||V,B0=q.convert(D.format,D.colorSpace),m0=q.convert(D.type),T0=l(D.internalFormat,B0,m0,D.colorSpace,D.isVideoTexture);M0(g,D,u);let p0,t0=D.mipmaps,a0=V&&D.isVideoTexture!==!0&&T0!==36196,x0=i.__version===void 0||A===!0,c0=Z0(D,H0,u);if(D.isDepthTexture){if(T0=Q.DEPTH_COMPONENT,V)if(D.type===1015)T0=Q.DEPTH_COMPONENT32F;else if(D.type===1014)T0=Q.DEPTH_COMPONENT24;else if(D.type===1020)T0=Q.DEPTH24_STENCIL8;else T0=Q.DEPTH_COMPONENT16;else if(D.type===1015)console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");if(D.format===1026&&T0===Q.DEPTH_COMPONENT){if(D.type!==1012&&D.type!==1014)console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=1014,m0=q.convert(D.type)}if(D.format===1027&&T0===Q.DEPTH_COMPONENT){if(T0=Q.DEPTH_STENCIL,D.type!==1020)console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=1020,m0=q.convert(D.type)}if(x0)if(a0)J.texStorage2D(Q.TEXTURE_2D,1,T0,H0.width,H0.height);else J.texImage2D(Q.TEXTURE_2D,0,T0,H0.width,H0.height,0,B0,m0,null)}else if(D.isDataTexture)if(t0.length>0&&u){if(a0&&x0)J.texStorage2D(Q.TEXTURE_2D,c0,T0,t0[0].width,t0[0].height);for(let _0=0,s=t0.length;_0<s;_0++)if(p0=t0[_0],a0)J.texSubImage2D(Q.TEXTURE_2D,_0,0,0,p0.width,p0.height,B0,m0,p0.data);else J.texImage2D(Q.TEXTURE_2D,_0,T0,p0.width,p0.height,0,B0,m0,p0.data);D.generateMipmaps=!1}else if(a0){if(x0)J.texStorage2D(Q.TEXTURE_2D,c0,T0,H0.width,H0.height);J.texSubImage2D(Q.TEXTURE_2D,0,0,0,H0.width,H0.height,B0,m0,H0.data)}else J.texImage2D(Q.TEXTURE_2D,0,T0,H0.width,H0.height,0,B0,m0,H0.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){if(a0&&x0)J.texStorage3D(Q.TEXTURE_2D_ARRAY,c0,T0,t0[0].width,t0[0].height,H0.depth);for(let _0=0,s=t0.length;_0<s;_0++)if(p0=t0[_0],D.format!==1023)if(B0!==null)if(a0)J.compressedTexSubImage3D(Q.TEXTURE_2D_ARRAY,_0,0,0,0,p0.width,p0.height,H0.depth,B0,p0.data,0,0);else J.compressedTexImage3D(Q.TEXTURE_2D_ARRAY,_0,T0,p0.width,p0.height,H0.depth,0,p0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(a0)J.texSubImage3D(Q.TEXTURE_2D_ARRAY,_0,0,0,0,p0.width,p0.height,H0.depth,B0,m0,p0.data);else J.texImage3D(Q.TEXTURE_2D_ARRAY,_0,T0,p0.width,p0.height,H0.depth,0,B0,m0,p0.data)}else{if(a0&&x0)J.texStorage2D(Q.TEXTURE_2D,c0,T0,t0[0].width,t0[0].height);for(let _0=0,s=t0.length;_0<s;_0++)if(p0=t0[_0],D.format!==1023)if(B0!==null)if(a0)J.compressedTexSubImage2D(Q.TEXTURE_2D,_0,0,0,p0.width,p0.height,B0,p0.data);else J.compressedTexImage2D(Q.TEXTURE_2D,_0,T0,p0.width,p0.height,0,p0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(a0)J.texSubImage2D(Q.TEXTURE_2D,_0,0,0,p0.width,p0.height,B0,m0,p0.data);else J.texImage2D(Q.TEXTURE_2D,_0,T0,p0.width,p0.height,0,B0,m0,p0.data)}else if(D.isDataArrayTexture)if(a0){if(x0)J.texStorage3D(Q.TEXTURE_2D_ARRAY,c0,T0,H0.width,H0.height,H0.depth);J.texSubImage3D(Q.TEXTURE_2D_ARRAY,0,0,0,0,H0.width,H0.height,H0.depth,B0,m0,H0.data)}else J.texImage3D(Q.TEXTURE_2D_ARRAY,0,T0,H0.width,H0.height,H0.depth,0,B0,m0,H0.data);else if(D.isData3DTexture)if(a0){if(x0)J.texStorage3D(Q.TEXTURE_3D,c0,T0,H0.width,H0.height,H0.depth);J.texSubImage3D(Q.TEXTURE_3D,0,0,0,0,H0.width,H0.height,H0.depth,B0,m0,H0.data)}else J.texImage3D(Q.TEXTURE_3D,0,T0,H0.width,H0.height,H0.depth,0,B0,m0,H0.data);else if(D.isFramebufferTexture){if(x0)if(a0)J.texStorage2D(Q.TEXTURE_2D,c0,T0,H0.width,H0.height);else{let{width:_0,height:s}=H0;for(let I0=0;I0<c0;I0++)J.texImage2D(Q.TEXTURE_2D,I0,T0,_0,s,0,B0,m0,null),_0>>=1,s>>=1}}else if(t0.length>0&&u){if(a0&&x0)J.texStorage2D(Q.TEXTURE_2D,c0,T0,t0[0].width,t0[0].height);for(let _0=0,s=t0.length;_0<s;_0++)if(p0=t0[_0],a0)J.texSubImage2D(Q.TEXTURE_2D,_0,0,0,B0,m0,p0);else J.texImage2D(Q.TEXTURE_2D,_0,T0,B0,m0,p0);D.generateMipmaps=!1}else if(a0){if(x0)J.texStorage2D(Q.TEXTURE_2D,c0,T0,H0.width,H0.height);J.texSubImage2D(Q.TEXTURE_2D,0,0,0,B0,m0,H0)}else J.texImage2D(Q.TEXTURE_2D,0,T0,B0,m0,H0);if(v(D,u))x(g);if(i.__version=n.version,D.onUpdate)D.onUpdate(D)}_.__version=D.version}function e0(_,D,P){if(D.image.length!==6)return;let g=s0(_,D),A=D.source;J.bindTexture(Q.TEXTURE_CUBE_MAP,_.__webglTexture,Q.TEXTURE0+P);let n=X.get(A);if(A.version!==n.__version||g===!0){J.activeTexture(Q.TEXTURE0+P);let i=p7.getPrimaries(p7.workingColorSpace),X0=D.colorSpace===""?null:p7.getPrimaries(D.colorSpace),r=D.colorSpace===""||i===X0?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,D.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,D.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,r);let U0=D.isCompressedTexture||D.image[0].isCompressedTexture,f0=D.image[0]&&D.image[0].isDataTexture,H0=[];for(let _0=0;_0<6;_0++){if(!U0&&!f0)H0[_0]=f(D.image[_0],!1,!0,H.maxCubemapSize);else H0[_0]=f0?D.image[_0].image:D.image[_0];H0[_0]=L(D,H0[_0])}let u=H0[0],B0=k(u)||V,m0=q.convert(D.format,D.colorSpace),T0=q.convert(D.type),p0=l(D.internalFormat,m0,T0,D.colorSpace),t0=V&&D.isVideoTexture!==!0,a0=n.__version===void 0||g===!0,x0=Z0(D,u,B0);M0(Q.TEXTURE_CUBE_MAP,D,B0);let c0;if(U0){if(t0&&a0)J.texStorage2D(Q.TEXTURE_CUBE_MAP,x0,p0,u.width,u.height);for(let _0=0;_0<6;_0++){c0=H0[_0].mipmaps;for(let s=0;s<c0.length;s++){let I0=c0[s];if(D.format!==1023)if(m0!==null)if(t0)J.compressedTexSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,s,0,0,I0.width,I0.height,m0,I0.data);else J.compressedTexImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,s,p0,I0.width,I0.height,0,I0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(t0)J.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,s,0,0,I0.width,I0.height,m0,T0,I0.data);else J.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,s,p0,I0.width,I0.height,0,m0,T0,I0.data)}}}else{if(c0=D.mipmaps,t0&&a0){if(c0.length>0)x0++;J.texStorage2D(Q.TEXTURE_CUBE_MAP,x0,p0,H0[0].width,H0[0].height)}for(let _0=0;_0<6;_0++)if(f0){if(t0)J.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,0,0,0,H0[_0].width,H0[_0].height,m0,T0,H0[_0].data);else J.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,0,p0,H0[_0].width,H0[_0].height,0,m0,T0,H0[_0].data);for(let s=0;s<c0.length;s++){let w0=c0[s].image[_0].image;if(t0)J.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,s+1,0,0,w0.width,w0.height,m0,T0,w0.data);else J.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,s+1,p0,w0.width,w0.height,0,m0,T0,w0.data)}}else{if(t0)J.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,0,0,0,m0,T0,H0[_0]);else J.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,0,p0,m0,T0,H0[_0]);for(let s=0;s<c0.length;s++){let I0=c0[s];if(t0)J.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,s+1,0,0,m0,T0,I0.image[_0]);else J.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+_0,s+1,p0,m0,T0,I0.image[_0])}}}if(v(D,B0))x(Q.TEXTURE_CUBE_MAP);if(n.__version=A.version,D.onUpdate)D.onUpdate(D)}_.__version=D.version}function J7(_,D,P,g,A,n){let i=q.convert(P.format,P.colorSpace),X0=q.convert(P.type),r=l(P.internalFormat,i,X0,P.colorSpace);if(!X.get(D).__hasExternalTextures){let f0=Math.max(1,D.width>>n),H0=Math.max(1,D.height>>n);if(A===Q.TEXTURE_3D||A===Q.TEXTURE_2D_ARRAY)J.texImage3D(A,n,r,f0,H0,D.depth,0,i,X0,null);else J.texImage2D(A,n,r,f0,H0,0,i,X0,null)}if(J.bindFramebuffer(Q.FRAMEBUFFER,_),i0(D))R.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,g,A,X.get(P).__webglTexture,0,E0(D));else if(A===Q.TEXTURE_2D||A>=Q.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=Q.TEXTURE_CUBE_MAP_NEGATIVE_Z)Q.framebufferTexture2D(Q.FRAMEBUFFER,g,A,X.get(P).__webglTexture,n);J.bindFramebuffer(Q.FRAMEBUFFER,null)}function H7(_,D,P){if(Q.bindRenderbuffer(Q.RENDERBUFFER,_),D.depthBuffer&&!D.stencilBuffer){let g=V===!0?Q.DEPTH_COMPONENT24:Q.DEPTH_COMPONENT16;if(P||i0(D)){let A=D.depthTexture;if(A&&A.isDepthTexture){if(A.type===1015)g=Q.DEPTH_COMPONENT32F;else if(A.type===1014)g=Q.DEPTH_COMPONENT24}let n=E0(D);if(i0(D))R.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,n,g,D.width,D.height);else Q.renderbufferStorageMultisample(Q.RENDERBUFFER,n,g,D.width,D.height)}else Q.renderbufferStorage(Q.RENDERBUFFER,g,D.width,D.height);Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.RENDERBUFFER,_)}else if(D.depthBuffer&&D.stencilBuffer){let g=E0(D);if(P&&i0(D)===!1)Q.renderbufferStorageMultisample(Q.RENDERBUFFER,g,Q.DEPTH24_STENCIL8,D.width,D.height);else if(i0(D))R.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,g,Q.DEPTH24_STENCIL8,D.width,D.height);else Q.renderbufferStorage(Q.RENDERBUFFER,Q.DEPTH_STENCIL,D.width,D.height);Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.RENDERBUFFER,_)}else{let g=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let A=0;A<g.length;A++){let n=g[A],i=q.convert(n.format,n.colorSpace),X0=q.convert(n.type),r=l(n.internalFormat,i,X0,n.colorSpace),U0=E0(D);if(P&&i0(D)===!1)Q.renderbufferStorageMultisample(Q.RENDERBUFFER,U0,r,D.width,D.height);else if(i0(D))R.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,U0,r,D.width,D.height);else Q.renderbufferStorage(Q.RENDERBUFFER,r,D.width,D.height)}}Q.bindRenderbuffer(Q.RENDERBUFFER,null)}function u0(_,D){if(D&&D.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(J.bindFramebuffer(Q.FRAMEBUFFER,_),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!X.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0;D0(D.depthTexture,0);let g=X.get(D.depthTexture).__webglTexture,A=E0(D);if(D.depthTexture.format===1026)if(i0(D))R.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,g,0,A);else Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,g,0);else if(D.depthTexture.format===1027)if(i0(D))R.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,g,0,A);else Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,g,0);else throw Error("Unknown depthTexture format")}function X7(_){let D=X.get(_),P=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!D.__autoAllocateDepthBuffer){if(P)throw Error("target.depthTexture not supported in Cube render targets");u0(D.__webglFramebuffer,_)}else if(P){D.__webglDepthbuffer=[];for(let g=0;g<6;g++)J.bindFramebuffer(Q.FRAMEBUFFER,D.__webglFramebuffer[g]),D.__webglDepthbuffer[g]=Q.createRenderbuffer(),H7(D.__webglDepthbuffer[g],_,!1)}else J.bindFramebuffer(Q.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=Q.createRenderbuffer(),H7(D.__webglDepthbuffer,_,!1);J.bindFramebuffer(Q.FRAMEBUFFER,null)}function c(_,D,P){let g=X.get(_);if(D!==void 0)J7(g.__webglFramebuffer,_,_.texture,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,0);if(P!==void 0)X7(_)}function g0(_){let D=_.texture,P=X.get(_),g=X.get(D);if(_.addEventListener("dispose",z0),_.isWebGLMultipleRenderTargets!==!0){if(g.__webglTexture===void 0)g.__webglTexture=Q.createTexture();g.__version=D.version,G.memory.textures++}let A=_.isWebGLCubeRenderTarget===!0,n=_.isWebGLMultipleRenderTargets===!0,i=k(_)||V;if(A){P.__webglFramebuffer=[];for(let X0=0;X0<6;X0++)if(V&&D.mipmaps&&D.mipmaps.length>0){P.__webglFramebuffer[X0]=[];for(let r=0;r<D.mipmaps.length;r++)P.__webglFramebuffer[X0][r]=Q.createFramebuffer()}else P.__webglFramebuffer[X0]=Q.createFramebuffer()}else{if(V&&D.mipmaps&&D.mipmaps.length>0){P.__webglFramebuffer=[];for(let X0=0;X0<D.mipmaps.length;X0++)P.__webglFramebuffer[X0]=Q.createFramebuffer()}else P.__webglFramebuffer=Q.createFramebuffer();if(n)if(H.drawBuffers){let X0=_.texture;for(let r=0,U0=X0.length;r<U0;r++){let f0=X.get(X0[r]);if(f0.__webglTexture===void 0)f0.__webglTexture=Q.createTexture(),G.memory.textures++}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(V&&_.samples>0&&i0(_)===!1){let X0=n?D:[D];P.__webglMultisampledFramebuffer=Q.createFramebuffer(),P.__webglColorRenderbuffer=[],J.bindFramebuffer(Q.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let r=0;r<X0.length;r++){let U0=X0[r];P.__webglColorRenderbuffer[r]=Q.createRenderbuffer(),Q.bindRenderbuffer(Q.RENDERBUFFER,P.__webglColorRenderbuffer[r]);let f0=q.convert(U0.format,U0.colorSpace),H0=q.convert(U0.type),u=l(U0.internalFormat,f0,H0,U0.colorSpace,_.isXRRenderTarget===!0),B0=E0(_);Q.renderbufferStorageMultisample(Q.RENDERBUFFER,B0,u,_.width,_.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+r,Q.RENDERBUFFER,P.__webglColorRenderbuffer[r])}if(Q.bindRenderbuffer(Q.RENDERBUFFER,null),_.depthBuffer)P.__webglDepthRenderbuffer=Q.createRenderbuffer(),H7(P.__webglDepthRenderbuffer,_,!0);J.bindFramebuffer(Q.FRAMEBUFFER,null)}}if(A){J.bindTexture(Q.TEXTURE_CUBE_MAP,g.__webglTexture),M0(Q.TEXTURE_CUBE_MAP,D,i);for(let X0=0;X0<6;X0++)if(V&&D.mipmaps&&D.mipmaps.length>0)for(let r=0;r<D.mipmaps.length;r++)J7(P.__webglFramebuffer[X0][r],_,D,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+X0,r);else J7(P.__webglFramebuffer[X0],_,D,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0);if(v(D,i))x(Q.TEXTURE_CUBE_MAP);J.unbindTexture()}else if(n){let X0=_.texture;for(let r=0,U0=X0.length;r<U0;r++){let f0=X0[r],H0=X.get(f0);if(J.bindTexture(Q.TEXTURE_2D,H0.__webglTexture),M0(Q.TEXTURE_2D,f0,i),J7(P.__webglFramebuffer,_,f0,Q.COLOR_ATTACHMENT0+r,Q.TEXTURE_2D,0),v(f0,i))x(Q.TEXTURE_2D)}J.unbindTexture()}else{let X0=Q.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)if(V)X0=_.isWebGL3DRenderTarget?Q.TEXTURE_3D:Q.TEXTURE_2D_ARRAY;else console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.");if(J.bindTexture(X0,g.__webglTexture),M0(X0,D,i),V&&D.mipmaps&&D.mipmaps.length>0)for(let r=0;r<D.mipmaps.length;r++)J7(P.__webglFramebuffer[r],_,D,Q.COLOR_ATTACHMENT0,X0,r);else J7(P.__webglFramebuffer,_,D,Q.COLOR_ATTACHMENT0,X0,0);if(v(D,i))x(X0);J.unbindTexture()}if(_.depthBuffer)X7(_)}function A0(_){let D=k(_)||V,P=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let g=0,A=P.length;g<A;g++){let n=P[g];if(v(n,D)){let i=_.isWebGLCubeRenderTarget?Q.TEXTURE_CUBE_MAP:Q.TEXTURE_2D,X0=X.get(n).__webglTexture;J.bindTexture(i,X0),x(i),J.unbindTexture()}}}function j0(_){if(V&&_.samples>0&&i0(_)===!1){let D=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],P=_.width,g=_.height,A=Q.COLOR_BUFFER_BIT,n=[],i=_.stencilBuffer?Q.DEPTH_STENCIL_ATTACHMENT:Q.DEPTH_ATTACHMENT,X0=X.get(_),r=_.isWebGLMultipleRenderTargets===!0;if(r)for(let U0=0;U0<D.length;U0++)J.bindFramebuffer(Q.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+U0,Q.RENDERBUFFER,null),J.bindFramebuffer(Q.FRAMEBUFFER,X0.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+U0,Q.TEXTURE_2D,null,0);J.bindFramebuffer(Q.READ_FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.bindFramebuffer(Q.DRAW_FRAMEBUFFER,X0.__webglFramebuffer);for(let U0=0;U0<D.length;U0++){if(n.push(Q.COLOR_ATTACHMENT0+U0),_.depthBuffer)n.push(i);let f0=X0.__ignoreDepthValues!==void 0?X0.__ignoreDepthValues:!1;if(f0===!1){if(_.depthBuffer)A|=Q.DEPTH_BUFFER_BIT;if(_.stencilBuffer)A|=Q.STENCIL_BUFFER_BIT}if(r)Q.framebufferRenderbuffer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.RENDERBUFFER,X0.__webglColorRenderbuffer[U0]);if(f0===!0)Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,[i]),Q.invalidateFramebuffer(Q.DRAW_FRAMEBUFFER,[i]);if(r){let H0=X.get(D[U0]).__webglTexture;Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,H0,0)}if(Q.blitFramebuffer(0,0,P,g,0,0,P,g,A,Q.NEAREST),U)Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,n)}if(J.bindFramebuffer(Q.READ_FRAMEBUFFER,null),J.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),r)for(let U0=0;U0<D.length;U0++){J.bindFramebuffer(Q.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+U0,Q.RENDERBUFFER,X0.__webglColorRenderbuffer[U0]);let f0=X.get(D[U0]).__webglTexture;J.bindFramebuffer(Q.FRAMEBUFFER,X0.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+U0,Q.TEXTURE_2D,f0,0)}J.bindFramebuffer(Q.DRAW_FRAMEBUFFER,X0.__webglMultisampledFramebuffer)}}function E0(_){return Math.min(H.maxSamples,_.samples)}function i0(_){let D=X.get(_);return V&&_.samples>0&&Z.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function M(_){let D=G.render.frame;if(B.get(_)!==D)B.set(_,D),_.update()}function L(_,D){let{colorSpace:P,format:g,type:A}=_;if(_.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===1035)return D;if(P!=="srgb-linear"&&P!=="")if(p7.getTransfer(P)==="srgb"){if(V===!1)if(Z.has("EXT_sRGB")===!0&&g===1023)_.format=1035,_.minFilter=1006,_.generateMipmaps=!1;else D=uQ.sRGBToLinear(D);else if(g!==1023||A!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",P);return D}this.allocateTextureUnit=o,this.resetTextureUnits=S0,this.setTexture2D=D0,this.setTexture2DArray=P0,this.setTexture3D=a,this.setTextureCube=W0,this.rebindTextures=c,this.setupRenderTarget=g0,this.updateRenderTargetMipmap=A0,this.updateMultisampleRenderTarget=j0,this.setupDepthRenderbuffer=X7,this.setupFrameBufferTexture=J7,this.useMultisampledRTT=i0}function aK(Q,Z,J){let X=J.isWebGL2;function H(q,G=""){let V,R=p7.getTransfer(G);if(q===1009)return Q.UNSIGNED_BYTE;if(q===1017)return Q.UNSIGNED_SHORT_4_4_4_4;if(q===1018)return Q.UNSIGNED_SHORT_5_5_5_1;if(q===1010)return Q.BYTE;if(q===1011)return Q.SHORT;if(q===1012)return Q.UNSIGNED_SHORT;if(q===1013)return Q.INT;if(q===1014)return Q.UNSIGNED_INT;if(q===1015)return Q.FLOAT;if(q===1016){if(X)return Q.HALF_FLOAT;if(V=Z.get("OES_texture_half_float"),V!==null)return V.HALF_FLOAT_OES;else return null}if(q===1021)return Q.ALPHA;if(q===1023)return Q.RGBA;if(q===1024)return Q.LUMINANCE;if(q===1025)return Q.LUMINANCE_ALPHA;if(q===1026)return Q.DEPTH_COMPONENT;if(q===1027)return Q.DEPTH_STENCIL;if(q===1035)if(V=Z.get("EXT_sRGB"),V!==null)return V.SRGB_ALPHA_EXT;else return null;if(q===1028)return Q.RED;if(q===1029)return Q.RED_INTEGER;if(q===1030)return Q.RG;if(q===1031)return Q.RG_INTEGER;if(q===1033)return Q.RGBA_INTEGER;if(q===33776||q===33777||q===33778||q===33779)if(R==="srgb")if(V=Z.get("WEBGL_compressed_texture_s3tc_srgb"),V!==null){if(q===33776)return V.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(q===33777)return V.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(q===33778)return V.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(q===33779)return V.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(V=Z.get("WEBGL_compressed_texture_s3tc"),V!==null){if(q===33776)return V.COMPRESSED_RGB_S3TC_DXT1_EXT;if(q===33777)return V.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(q===33778)return V.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(q===33779)return V.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(q===35840||q===35841||q===35842||q===35843)if(V=Z.get("WEBGL_compressed_texture_pvrtc"),V!==null){if(q===35840)return V.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(q===35841)return V.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(q===35842)return V.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(q===35843)return V.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(q===36196)if(V=Z.get("WEBGL_compressed_texture_etc1"),V!==null)return V.COMPRESSED_RGB_ETC1_WEBGL;else return null;if(q===37492||q===37496)if(V=Z.get("WEBGL_compressed_texture_etc"),V!==null){if(q===37492)return R==="srgb"?V.COMPRESSED_SRGB8_ETC2:V.COMPRESSED_RGB8_ETC2;if(q===37496)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:V.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(q===37808||q===37809||q===37810||q===37811||q===37812||q===37813||q===37814||q===37815||q===37816||q===37817||q===37818||q===37819||q===37820||q===37821)if(V=Z.get("WEBGL_compressed_texture_astc"),V!==null){if(q===37808)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:V.COMPRESSED_RGBA_ASTC_4x4_KHR;if(q===37809)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:V.COMPRESSED_RGBA_ASTC_5x4_KHR;if(q===37810)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:V.COMPRESSED_RGBA_ASTC_5x5_KHR;if(q===37811)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:V.COMPRESSED_RGBA_ASTC_6x5_KHR;if(q===37812)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:V.COMPRESSED_RGBA_ASTC_6x6_KHR;if(q===37813)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:V.COMPRESSED_RGBA_ASTC_8x5_KHR;if(q===37814)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:V.COMPRESSED_RGBA_ASTC_8x6_KHR;if(q===37815)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:V.COMPRESSED_RGBA_ASTC_8x8_KHR;if(q===37816)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:V.COMPRESSED_RGBA_ASTC_10x5_KHR;if(q===37817)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:V.COMPRESSED_RGBA_ASTC_10x6_KHR;if(q===37818)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:V.COMPRESSED_RGBA_ASTC_10x8_KHR;if(q===37819)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:V.COMPRESSED_RGBA_ASTC_10x10_KHR;if(q===37820)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:V.COMPRESSED_RGBA_ASTC_12x10_KHR;if(q===37821)return R==="srgb"?V.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:V.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(q===36492||q===36494||q===36495)if(V=Z.get("EXT_texture_compression_bptc"),V!==null){if(q===36492)return R==="srgb"?V.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:V.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(q===36494)return V.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(q===36495)return V.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(q===36283||q===36284||q===36285||q===36286)if(V=Z.get("EXT_texture_compression_rgtc"),V!==null){if(q===36492)return V.COMPRESSED_RED_RGTC1_EXT;if(q===36284)return V.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(q===36285)return V.COMPRESSED_RED_GREEN_RGTC2_EXT;if(q===36286)return V.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(q===1020){if(X)return Q.UNSIGNED_INT_24_8;if(V=Z.get("WEBGL_depth_texture"),V!==null)return V.UNSIGNED_INT_24_8_WEBGL;else return null}return Q[q]!==void 0?Q[q]:null}return{convert:H}}class AW extends B8{constructor(Q=[]){super();this.isArrayCamera=!0,this.cameras=Q}}class w9 extends Z8{constructor(){super();this.isGroup=!0,this.type="Group"}}var rK={type:"move"};class f5{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new w9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new w9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q0,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q0;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new w9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q0,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q0;return this._grip}dispatchEvent(Q){if(this._targetRay!==null)this._targetRay.dispatchEvent(Q);if(this._grip!==null)this._grip.dispatchEvent(Q);if(this._hand!==null)this._hand.dispatchEvent(Q);return this}connect(Q){if(Q&&Q.hand){let Z=this._hand;if(Z)for(let J of Q.hand.values())this._getHandJoint(Z,J)}return this.dispatchEvent({type:"connected",data:Q}),this}disconnect(Q){if(this.dispatchEvent({type:"disconnected",data:Q}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(Q,Z,J){let X=null,H=null,q=null,G=this._targetRay,V=this._grip,R=this._hand;if(Q&&Z.session.visibilityState!=="visible-blurred"){if(R&&Q.hand){q=!0;for(let j of Q.hand.values()){let f=Z.getJointPose(j,J),k=this._getHandJoint(R,j);if(f!==null)k.matrix.fromArray(f.transform.matrix),k.matrix.decompose(k.position,k.rotation,k.scale),k.matrixWorldNeedsUpdate=!0,k.jointRadius=f.radius;k.visible=f!==null}let U=R.joints["index-finger-tip"],B=R.joints["thumb-tip"],z=U.position.distanceTo(B.position),I=0.02,w=0.005;if(R.inputState.pinching&&z>I+w)R.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:Q.handedness,target:this});else if(!R.inputState.pinching&&z<=I-w)R.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:Q.handedness,target:this})}else if(V!==null&&Q.gripSpace){if(H=Z.getPose(Q.gripSpace,J),H!==null){if(V.matrix.fromArray(H.transform.matrix),V.matrix.decompose(V.position,V.rotation,V.scale),V.matrixWorldNeedsUpdate=!0,H.linearVelocity)V.hasLinearVelocity=!0,V.linearVelocity.copy(H.linearVelocity);else V.hasLinearVelocity=!1;if(H.angularVelocity)V.hasAngularVelocity=!0,V.angularVelocity.copy(H.angularVelocity);else V.hasAngularVelocity=!1}}if(G!==null){if(X=Z.getPose(Q.targetRaySpace,J),X===null&&H!==null)X=H;if(X!==null){if(G.matrix.fromArray(X.transform.matrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.matrixWorldNeedsUpdate=!0,X.linearVelocity)G.hasLinearVelocity=!0,G.linearVelocity.copy(X.linearVelocity);else G.hasLinearVelocity=!1;if(X.angularVelocity)G.hasAngularVelocity=!0,G.angularVelocity.copy(X.angularVelocity);else G.hasAngularVelocity=!1;this.dispatchEvent(rK)}}}if(G!==null)G.visible=X!==null;if(V!==null)V.visible=H!==null;if(R!==null)R.visible=q!==null;return this}_getHandJoint(Q,Z){if(Q.joints[Z.jointName]===void 0){let J=new w9;J.matrixAutoUpdate=!1,J.visible=!1,Q.joints[Z.jointName]=J,Q.add(J)}return Q.joints[Z.jointName]}}class TW extends J9{constructor(Q,Z){super();let J=this,X=null,H=1,q=null,G="local-floor",V=1,R=null,U=null,B=null,z=null,I=null,w=null,j=Z.getContextAttributes(),f=null,k=null,C=[],v=[],x=new h0,l=null,Z0=new B8;Z0.layers.enable(1),Z0.viewport=new Y8;let p=new B8;p.layers.enable(2),p.viewport=new Y8;let $0=[Z0,p],z0=new AW;z0.layers.enable(1),z0.layers.enable(2);let b=null,m=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K0){let M0=C[K0];if(M0===void 0)M0=new f5,C[K0]=M0;return M0.getTargetRaySpace()},this.getControllerGrip=function(K0){let M0=C[K0];if(M0===void 0)M0=new f5,C[K0]=M0;return M0.getGripSpace()},this.getHand=function(K0){let M0=C[K0];if(M0===void 0)M0=new f5,C[K0]=M0;return M0.getHandSpace()};function q0(K0){let M0=v.indexOf(K0.inputSource);if(M0===-1)return;let s0=C[M0];if(s0!==void 0)s0.update(K0.inputSource,K0.frame,R||q),s0.dispatchEvent({type:K0.type,data:K0.inputSource})}function L0(){X.removeEventListener("select",q0),X.removeEventListener("selectstart",q0),X.removeEventListener("selectend",q0),X.removeEventListener("squeeze",q0),X.removeEventListener("squeezestart",q0),X.removeEventListener("squeezeend",q0),X.removeEventListener("end",L0),X.removeEventListener("inputsourceschange",S0);for(let K0=0;K0<C.length;K0++){let M0=v[K0];if(M0===null)continue;v[K0]=null,C[K0].disconnect(M0)}b=null,m=null,Q.setRenderTarget(f),I=null,z=null,B=null,X=null,k=null,v0.stop(),J.isPresenting=!1,Q.setPixelRatio(l),Q.setSize(x.width,x.height,!1),J.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K0){if(H=K0,J.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K0){if(G=K0,J.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return R||q},this.setReferenceSpace=function(K0){R=K0},this.getBaseLayer=function(){return z!==null?z:I},this.getBinding=function(){return B},this.getFrame=function(){return w},this.getSession=function(){return X},this.setSession=async function(K0){if(X=K0,X!==null){if(f=Q.getRenderTarget(),X.addEventListener("select",q0),X.addEventListener("selectstart",q0),X.addEventListener("selectend",q0),X.addEventListener("squeeze",q0),X.addEventListener("squeezestart",q0),X.addEventListener("squeezeend",q0),X.addEventListener("end",L0),X.addEventListener("inputsourceschange",S0),j.xrCompatible!==!0)await Z.makeXRCompatible();if(l=Q.getPixelRatio(),Q.getSize(x),X.renderState.layers===void 0||Q.capabilities.isWebGL2===!1){let M0={antialias:X.renderState.layers===void 0?j.antialias:!0,alpha:!0,depth:j.depth,stencil:j.stencil,framebufferScaleFactor:H};I=new XRWebGLLayer(X,Z,M0),X.updateRenderState({baseLayer:I}),Q.setPixelRatio(1),Q.setSize(I.framebufferWidth,I.framebufferHeight,!1),k=new R9(I.framebufferWidth,I.framebufferHeight,{format:1023,type:1009,colorSpace:Q.outputColorSpace,stencilBuffer:j.stencil})}else{let M0=null,s0=null,l0=null;if(j.depth)l0=j.stencil?Z.DEPTH24_STENCIL8:Z.DEPTH_COMPONENT24,M0=j.stencil?1027:1026,s0=j.stencil?1020:1014;let e0={colorFormat:Z.RGBA8,depthFormat:l0,scaleFactor:H};B=new XRWebGLBinding(X,Z),z=B.createProjectionLayer(e0),X.updateRenderState({layers:[z]}),Q.setPixelRatio(1),Q.setSize(z.textureWidth,z.textureHeight,!1),k=new R9(z.textureWidth,z.textureHeight,{format:1023,type:1009,depthTexture:new QZ(z.textureWidth,z.textureHeight,s0,void 0,void 0,void 0,void 0,void 0,void 0,M0),stencilBuffer:j.stencil,colorSpace:Q.outputColorSpace,samples:j.antialias?4:0});let J7=Q.properties.get(k);J7.__ignoreDepthValues=z.ignoreDepthValues}k.isXRRenderTarget=!0,this.setFoveation(V),R=null,q=await X.requestReferenceSpace(G),v0.setContext(X),v0.start(),J.isPresenting=!0,J.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(X!==null)return X.environmentBlendMode};function S0(K0){for(let M0=0;M0<K0.removed.length;M0++){let s0=K0.removed[M0],l0=v.indexOf(s0);if(l0>=0)v[l0]=null,C[l0].disconnect(s0)}for(let M0=0;M0<K0.added.length;M0++){let s0=K0.added[M0],l0=v.indexOf(s0);if(l0===-1){for(let J7=0;J7<C.length;J7++)if(J7>=v.length){v.push(s0),l0=J7;break}else if(v[J7]===null){v[J7]=s0,l0=J7;break}if(l0===-1)break}let e0=C[l0];if(e0)e0.connect(s0)}}let o=new Q0,e=new Q0;function D0(K0,M0,s0){o.setFromMatrixPosition(M0.matrixWorld),e.setFromMatrixPosition(s0.matrixWorld);let l0=o.distanceTo(e),e0=M0.projectionMatrix.elements,J7=s0.projectionMatrix.elements,H7=e0[14]/(e0[10]-1),u0=e0[14]/(e0[10]+1),X7=(e0[9]+1)/e0[5],c=(e0[9]-1)/e0[5],g0=(e0[8]-1)/e0[0],A0=(J7[8]+1)/J7[0],j0=H7*g0,E0=H7*A0,i0=l0/(-g0+A0),M=i0*-g0;M0.matrixWorld.decompose(K0.position,K0.quaternion,K0.scale),K0.translateX(M),K0.translateZ(i0),K0.matrixWorld.compose(K0.position,K0.quaternion,K0.scale),K0.matrixWorldInverse.copy(K0.matrixWorld).invert();let L=H7+i0,_=u0+i0,D=j0-M,P=E0+(l0-M),g=X7*u0/_*L,A=c*u0/_*L;K0.projectionMatrix.makePerspective(D,P,g,A,L,_),K0.projectionMatrixInverse.copy(K0.projectionMatrix).invert()}function P0(K0,M0){if(M0===null)K0.matrixWorld.copy(K0.matrix);else K0.matrixWorld.multiplyMatrices(M0.matrixWorld,K0.matrix);K0.matrixWorldInverse.copy(K0.matrixWorld).invert()}this.updateCamera=function(K0){if(X===null)return;if(z0.near=p.near=Z0.near=K0.near,z0.far=p.far=Z0.far=K0.far,b!==z0.near||m!==z0.far)X.updateRenderState({depthNear:z0.near,depthFar:z0.far}),b=z0.near,m=z0.far;let M0=K0.parent,s0=z0.cameras;P0(z0,M0);for(let l0=0;l0<s0.length;l0++)P0(s0[l0],M0);if(s0.length===2)D0(z0,Z0,p);else z0.projectionMatrix.copy(Z0.projectionMatrix);a(K0,z0,M0)};function a(K0,M0,s0){if(s0===null)K0.matrix.copy(M0.matrixWorld);else K0.matrix.copy(s0.matrixWorld),K0.matrix.invert(),K0.matrix.multiply(M0.matrixWorld);if(K0.matrix.decompose(K0.position,K0.quaternion,K0.scale),K0.updateMatrixWorld(!0),K0.projectionMatrix.copy(M0.projectionMatrix),K0.projectionMatrixInverse.copy(M0.projectionMatrixInverse),K0.isPerspectiveCamera)K0.fov=g6*2*Math.atan(1/K0.projectionMatrix.elements[5]),K0.zoom=1}this.getCamera=function(){return z0},this.getFoveation=function(){if(z===null&&I===null)return;return V},this.setFoveation=function(K0){if(V=K0,z!==null)z.fixedFoveation=K0;if(I!==null&&I.fixedFoveation!==void 0)I.fixedFoveation=K0};let W0=null;function C0(K0,M0){if(U=M0.getViewerPose(R||q),w=M0,U!==null){let s0=U.views;if(I!==null)Q.setRenderTargetFramebuffer(k,I.framebuffer),Q.setRenderTarget(k);let l0=!1;if(s0.length!==z0.cameras.length)z0.cameras.length=0,l0=!0;for(let e0=0;e0<s0.length;e0++){let J7=s0[e0],H7=null;if(I!==null)H7=I.getViewport(J7);else{let X7=B.getViewSubImage(z,J7);if(H7=X7.viewport,e0===0)Q.setRenderTargetTextures(k,X7.colorTexture,z.ignoreDepthValues?void 0:X7.depthStencilTexture),Q.setRenderTarget(k)}let u0=$0[e0];if(u0===void 0)u0=new B8,u0.layers.enable(e0),u0.viewport=new Y8,$0[e0]=u0;if(u0.matrix.fromArray(J7.transform.matrix),u0.matrix.decompose(u0.position,u0.quaternion,u0.scale),u0.projectionMatrix.fromArray(J7.projectionMatrix),u0.projectionMatrixInverse.copy(u0.projectionMatrix).invert(),u0.viewport.set(H7.x,H7.y,H7.width,H7.height),e0===0)z0.matrix.copy(u0.matrix),z0.matrix.decompose(z0.position,z0.quaternion,z0.scale);if(l0===!0)z0.cameras.push(u0)}}for(let s0=0;s0<C.length;s0++){let l0=v[s0],e0=C[s0];if(l0!==null&&e0!==void 0)e0.update(l0,M0,R||q)}if(W0)W0(K0,M0);if(M0.detectedPlanes)J.dispatchEvent({type:"planesdetected",data:M0});w=null}let v0=new DW;v0.setAnimationLoop(C0),this.setAnimationLoop=function(K0){W0=K0},this.dispose=function(){}}}function tK(Q,Z){function J(k,C){if(k.matrixAutoUpdate===!0)k.updateMatrix();C.value.copy(k.matrix)}function X(k,C){if(C.color.getRGB(k.fogColor.value,NW(Q)),C.isFog)k.fogNear.value=C.near,k.fogFar.value=C.far;else if(C.isFogExp2)k.fogDensity.value=C.density}function H(k,C,v,x,l){if(C.isMeshBasicMaterial)q(k,C);else if(C.isMeshLambertMaterial)q(k,C);else if(C.isMeshToonMaterial)q(k,C),z(k,C);else if(C.isMeshPhongMaterial)q(k,C),B(k,C);else if(C.isMeshStandardMaterial){if(q(k,C),I(k,C),C.isMeshPhysicalMaterial)w(k,C,l)}else if(C.isMeshMatcapMaterial)q(k,C),j(k,C);else if(C.isMeshDepthMaterial)q(k,C);else if(C.isMeshDistanceMaterial)q(k,C),f(k,C);else if(C.isMeshNormalMaterial)q(k,C);else if(C.isLineBasicMaterial){if(G(k,C),C.isLineDashedMaterial)V(k,C)}else if(C.isPointsMaterial)R(k,C,v,x);else if(C.isSpriteMaterial)U(k,C);else if(C.isShadowMaterial)k.color.value.copy(C.color),k.opacity.value=C.opacity;else if(C.isShaderMaterial)C.uniformsNeedUpdate=!1}function q(k,C){if(k.opacity.value=C.opacity,C.color)k.diffuse.value.copy(C.color);if(C.emissive)k.emissive.value.copy(C.emissive).multiplyScalar(C.emissiveIntensity);if(C.map)k.map.value=C.map,J(C.map,k.mapTransform);if(C.alphaMap)k.alphaMap.value=C.alphaMap,J(C.alphaMap,k.alphaMapTransform);if(C.bumpMap){if(k.bumpMap.value=C.bumpMap,J(C.bumpMap,k.bumpMapTransform),k.bumpScale.value=C.bumpScale,C.side===1)k.bumpScale.value*=-1}if(C.normalMap){if(k.normalMap.value=C.normalMap,J(C.normalMap,k.normalMapTransform),k.normalScale.value.copy(C.normalScale),C.side===1)k.normalScale.value.negate()}if(C.displacementMap)k.displacementMap.value=C.displacementMap,J(C.displacementMap,k.displacementMapTransform),k.displacementScale.value=C.displacementScale,k.displacementBias.value=C.displacementBias;if(C.emissiveMap)k.emissiveMap.value=C.emissiveMap,J(C.emissiveMap,k.emissiveMapTransform);if(C.specularMap)k.specularMap.value=C.specularMap,J(C.specularMap,k.specularMapTransform);if(C.alphaTest>0)k.alphaTest.value=C.alphaTest;let v=Z.get(C).envMap;if(v)k.envMap.value=v,k.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,k.reflectivity.value=C.reflectivity,k.ior.value=C.ior,k.refractionRatio.value=C.refractionRatio;if(C.lightMap){k.lightMap.value=C.lightMap;let x=Q._useLegacyLights===!0?Math.PI:1;k.lightMapIntensity.value=C.lightMapIntensity*x,J(C.lightMap,k.lightMapTransform)}if(C.aoMap)k.aoMap.value=C.aoMap,k.aoMapIntensity.value=C.aoMapIntensity,J(C.aoMap,k.aoMapTransform)}function G(k,C){if(k.diffuse.value.copy(C.color),k.opacity.value=C.opacity,C.map)k.map.value=C.map,J(C.map,k.mapTransform)}function V(k,C){k.dashSize.value=C.dashSize,k.totalSize.value=C.dashSize+C.gapSize,k.scale.value=C.scale}function R(k,C,v,x){if(k.diffuse.value.copy(C.color),k.opacity.value=C.opacity,k.size.value=C.size*v,k.scale.value=x*0.5,C.map)k.map.value=C.map,J(C.map,k.uvTransform);if(C.alphaMap)k.alphaMap.value=C.alphaMap,J(C.alphaMap,k.alphaMapTransform);if(C.alphaTest>0)k.alphaTest.value=C.alphaTest}function U(k,C){if(k.diffuse.value.copy(C.color),k.opacity.value=C.opacity,k.rotation.value=C.rotation,C.map)k.map.value=C.map,J(C.map,k.mapTransform);if(C.alphaMap)k.alphaMap.value=C.alphaMap,J(C.alphaMap,k.alphaMapTransform);if(C.alphaTest>0)k.alphaTest.value=C.alphaTest}function B(k,C){k.specular.value.copy(C.specular),k.shininess.value=Math.max(C.shininess,0.0001)}function z(k,C){if(C.gradientMap)k.gradientMap.value=C.gradientMap}function I(k,C){if(k.metalness.value=C.metalness,C.metalnessMap)k.metalnessMap.value=C.metalnessMap,J(C.metalnessMap,k.metalnessMapTransform);if(k.roughness.value=C.roughness,C.roughnessMap)k.roughnessMap.value=C.roughnessMap,J(C.roughnessMap,k.roughnessMapTransform);if(Z.get(C).envMap)k.envMapIntensity.value=C.envMapIntensity}function w(k,C,v){if(k.ior.value=C.ior,C.sheen>0){if(k.sheenColor.value.copy(C.sheenColor).multiplyScalar(C.sheen),k.sheenRoughness.value=C.sheenRoughness,C.sheenColorMap)k.sheenColorMap.value=C.sheenColorMap,J(C.sheenColorMap,k.sheenColorMapTransform);if(C.sheenRoughnessMap)k.sheenRoughnessMap.value=C.sheenRoughnessMap,J(C.sheenRoughnessMap,k.sheenRoughnessMapTransform)}if(C.clearcoat>0){if(k.clearcoat.value=C.clearcoat,k.clearcoatRoughness.value=C.clearcoatRoughness,C.clearcoatMap)k.clearcoatMap.value=C.clearcoatMap,J(C.clearcoatMap,k.clearcoatMapTransform);if(C.clearcoatRoughnessMap)k.clearcoatRoughnessMap.value=C.clearcoatRoughnessMap,J(C.clearcoatRoughnessMap,k.clearcoatRoughnessMapTransform);if(C.clearcoatNormalMap){if(k.clearcoatNormalMap.value=C.clearcoatNormalMap,J(C.clearcoatNormalMap,k.clearcoatNormalMapTransform),k.clearcoatNormalScale.value.copy(C.clearcoatNormalScale),C.side===1)k.clearcoatNormalScale.value.negate()}}if(C.iridescence>0){if(k.iridescence.value=C.iridescence,k.iridescenceIOR.value=C.iridescenceIOR,k.iridescenceThicknessMinimum.value=C.iridescenceThicknessRange[0],k.iridescenceThicknessMaximum.value=C.iridescenceThicknessRange[1],C.iridescenceMap)k.iridescenceMap.value=C.iridescenceMap,J(C.iridescenceMap,k.iridescenceMapTransform);if(C.iridescenceThicknessMap)k.iridescenceThicknessMap.value=C.iridescenceThicknessMap,J(C.iridescenceThicknessMap,k.iridescenceThicknessMapTransform)}if(C.transmission>0){if(k.transmission.value=C.transmission,k.transmissionSamplerMap.value=v.texture,k.transmissionSamplerSize.value.set(v.width,v.height),C.transmissionMap)k.transmissionMap.value=C.transmissionMap,J(C.transmissionMap,k.transmissionMapTransform);if(k.thickness.value=C.thickness,C.thicknessMap)k.thicknessMap.value=C.thicknessMap,J(C.thicknessMap,k.thicknessMapTransform);k.attenuationDistance.value=C.attenuationDistance,k.attenuationColor.value.copy(C.attenuationColor)}if(C.anisotropy>0){if(k.anisotropyVector.value.set(C.anisotropy*Math.cos(C.anisotropyRotation),C.anisotropy*Math.sin(C.anisotropyRotation)),C.anisotropyMap)k.anisotropyMap.value=C.anisotropyMap,J(C.anisotropyMap,k.anisotropyMapTransform)}if(k.specularIntensity.value=C.specularIntensity,k.specularColor.value.copy(C.specularColor),C.specularColorMap)k.specularColorMap.value=C.specularColorMap,J(C.specularColorMap,k.specularColorMapTransform);if(C.specularIntensityMap)k.specularIntensityMap.value=C.specularIntensityMap,J(C.specularIntensityMap,k.specularIntensityMapTransform)}function j(k,C){if(C.matcap)k.matcap.value=C.matcap}function f(k,C){let v=Z.get(C).light;k.referencePosition.value.setFromMatrixPosition(v.matrixWorld),k.nearDistance.value=v.shadow.camera.near,k.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:X,refreshMaterialUniforms:H}}function eK(Q,Z,J,X){let H={},q={},G=[],V=J.isWebGL2?Q.getParameter(Q.MAX_UNIFORM_BUFFER_BINDINGS):0;function R(v,x){let l=x.program;X.uniformBlockBinding(v,l)}function U(v,x){let l=H[v.id];if(l===void 0)j(v),l=B(v),H[v.id]=l,v.addEventListener("dispose",k);let Z0=x.program;X.updateUBOMapping(v,Z0);let p=Z.render.frame;if(q[v.id]!==p)I(v),q[v.id]=p}function B(v){let x=z();v.__bindingPointIndex=x;let l=Q.createBuffer(),Z0=v.__size,p=v.usage;return Q.bindBuffer(Q.UNIFORM_BUFFER,l),Q.bufferData(Q.UNIFORM_BUFFER,Z0,p),Q.bindBuffer(Q.UNIFORM_BUFFER,null),Q.bindBufferBase(Q.UNIFORM_BUFFER,x,l),l}function z(){for(let v=0;v<V;v++)if(G.indexOf(v)===-1)return G.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function I(v){let x=H[v.id],l=v.uniforms,Z0=v.__cache;Q.bindBuffer(Q.UNIFORM_BUFFER,x);for(let p=0,$0=l.length;p<$0;p++){let z0=Array.isArray(l[p])?l[p]:[l[p]];for(let b=0,m=z0.length;b<m;b++){let q0=z0[b];if(w(q0,p,b,Z0)===!0){let L0=q0.__offset,S0=Array.isArray(q0.value)?q0.value:[q0.value],o=0;for(let e=0;e<S0.length;e++){let D0=S0[e],P0=f(D0);if(typeof D0==="number"||typeof D0==="boolean")q0.__data[0]=D0,Q.bufferSubData(Q.UNIFORM_BUFFER,L0+o,q0.__data);else if(D0.isMatrix3)q0.__data[0]=D0.elements[0],q0.__data[1]=D0.elements[1],q0.__data[2]=D0.elements[2],q0.__data[3]=0,q0.__data[4]=D0.elements[3],q0.__data[5]=D0.elements[4],q0.__data[6]=D0.elements[5],q0.__data[7]=0,q0.__data[8]=D0.elements[6],q0.__data[9]=D0.elements[7],q0.__data[10]=D0.elements[8],q0.__data[11]=0;else D0.toArray(q0.__data,o),o+=P0.storage/Float32Array.BYTES_PER_ELEMENT}Q.bufferSubData(Q.UNIFORM_BUFFER,L0,q0.__data)}}}Q.bindBuffer(Q.UNIFORM_BUFFER,null)}function w(v,x,l,Z0){let p=v.value,$0=x+"_"+l;if(Z0[$0]===void 0){if(typeof p==="number"||typeof p==="boolean")Z0[$0]=p;else Z0[$0]=p.clone();return!0}else{let z0=Z0[$0];if(typeof p==="number"||typeof p==="boolean"){if(z0!==p)return Z0[$0]=p,!0}else if(z0.equals(p)===!1)return z0.copy(p),!0}return!1}function j(v){let x=v.uniforms,l=0,Z0=16;for(let $0=0,z0=x.length;$0<z0;$0++){let b=Array.isArray(x[$0])?x[$0]:[x[$0]];for(let m=0,q0=b.length;m<q0;m++){let L0=b[m],S0=Array.isArray(L0.value)?L0.value:[L0.value];for(let o=0,e=S0.length;o<e;o++){let D0=S0[o],P0=f(D0),a=l%Z0;if(a!==0&&Z0-a<P0.boundary)l+=Z0-a;L0.__data=new Float32Array(P0.storage/Float32Array.BYTES_PER_ELEMENT),L0.__offset=l,l+=P0.storage}}}let p=l%Z0;if(p>0)l+=Z0-p;return v.__size=l,v.__cache={},this}function f(v){let x={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean")x.boundary=4,x.storage=4;else if(v.isVector2)x.boundary=8,x.storage=8;else if(v.isVector3||v.isColor)x.boundary=16,x.storage=12;else if(v.isVector4)x.boundary=16,x.storage=16;else if(v.isMatrix3)x.boundary=48,x.storage=48;else if(v.isMatrix4)x.boundary=64,x.storage=64;else if(v.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v);return x}function k(v){let x=v.target;x.removeEventListener("dispose",k);let l=G.indexOf(x.__bindingPointIndex);G.splice(l,1),Q.deleteBuffer(H[x.id]),delete H[x.id],delete q[x.id]}function C(){for(let v in H)Q.deleteBuffer(H[v]);G=[],H={},q={}}return{bind:R,update:U,dispose:C}}class p5{constructor(Q={}){let{canvas:Z=KX(),context:J=null,depth:X=!0,stencil:H=!0,alpha:q=!1,antialias:G=!1,premultipliedAlpha:V=!0,preserveDrawingBuffer:R=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:B=!1}=Q;this.isWebGLRenderer=!0;let z;if(J!==null)z=J.getContextAttributes().alpha;else z=q;let I=new Uint32Array(4),w=new Int32Array(4),j=null,f=null,k=[],C=[];this.domElement=Z,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let v=this,x=!1,l=0,Z0=0,p=null,$0=-1,z0=null,b=new Y8,m=new Y8,q0=null,L0=new L7(0),S0=0,o=Z.width,e=Z.height,D0=1,P0=null,a=null,W0=new Y8(0,0,o,e),C0=new Y8(0,0,o,e),v0=!1,K0=new h5,M0=!1,s0=!1,l0=null,e0=new o7,J7=new h0,H7=new Q0,u0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function X7(){return p===null?D0:1}let c=J;function g0(h,Y0){for(let V0=0;V0<h.length;V0++){let N0=h[V0],F0=Z.getContext(N0,Y0);if(F0!==null)return F0}return null}try{let h={alpha:!0,depth:X,stencil:H,antialias:G,premultipliedAlpha:V,preserveDrawingBuffer:R,powerPreference:U,failIfMajorPerformanceCaveat:B};if("setAttribute"in Z)Z.setAttribute("data-engine","three.js r160");if(Z.addEventListener("webglcontextlost",c0,!1),Z.addEventListener("webglcontextrestored",_0,!1),Z.addEventListener("webglcontextcreationerror",s,!1),c===null){let Y0=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0)Y0.shift();if(c=g0(Y0,h),c===null)if(g0(Y0))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}if(typeof WebGLRenderingContext<"u"&&c instanceof WebGLRenderingContext)console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.");if(c.getShaderPrecisionFormat===void 0)c.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let A0,j0,E0,i0,M,L,_,D,P,g,A,n,i,X0,r,U0,f0,H0,u,B0,m0,T0,p0,t0;function a0(){A0=new z4(c),j0=new G4(c,A0,Q),A0.init(j0),T0=new aK(c,A0,j0),E0=new iK(c,A0,j0),i0=new I4(c),M=new vK,L=new oK(c,A0,E0,M,j0,T0,i0),_=new R4(v),D=new _4(v),P=new AX(c,j0),p0=new V4(c,A0,P,j0),g=new E4(c,P,i0,p0),A=new k4(c,g,P,i0),u=new C4(c,j0,L),U0=new N4(M),n=new yK(v,_,D,A0,j0,p0,U0),i=new tK(v,M),X0=new hK,r=new uK(A0,j0),H0=new q4(v,_,D,E0,A,z,V),f0=new nK(v,A,j0),t0=new eK(c,i0,j0,E0),B0=new F4(c,A0,i0,j0),m0=new B4(c,A0,i0,j0),i0.programs=n.programs,v.capabilities=j0,v.extensions=A0,v.properties=M,v.renderLists=X0,v.shadowMap=f0,v.state=E0,v.info=i0}a0();let x0=new TW(v,c);this.xr=x0,this.getContext=function(){return c},this.getContextAttributes=function(){return c.getContextAttributes()},this.forceContextLoss=function(){let h=A0.get("WEBGL_lose_context");if(h)h.loseContext()},this.forceContextRestore=function(){let h=A0.get("WEBGL_lose_context");if(h)h.restoreContext()},this.getPixelRatio=function(){return D0},this.setPixelRatio=function(h){if(h===void 0)return;D0=h,this.setSize(o,e,!1)},this.getSize=function(h){return h.set(o,e)},this.setSize=function(h,Y0,V0=!0){if(x0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=h,e=Y0,Z.width=Math.floor(h*D0),Z.height=Math.floor(Y0*D0),V0===!0)Z.style.width=h+"px",Z.style.height=Y0+"px";this.setViewport(0,0,h,Y0)},this.getDrawingBufferSize=function(h){return h.set(o*D0,e*D0).floor()},this.setDrawingBufferSize=function(h,Y0,V0){o=h,e=Y0,D0=V0,Z.width=Math.floor(h*V0),Z.height=Math.floor(Y0*V0),this.setViewport(0,0,h,Y0)},this.getCurrentViewport=function(h){return h.copy(b)},this.getViewport=function(h){return h.copy(W0)},this.setViewport=function(h,Y0,V0,N0){if(h.isVector4)W0.set(h.x,h.y,h.z,h.w);else W0.set(h,Y0,V0,N0);E0.viewport(b.copy(W0).multiplyScalar(D0).floor())},this.getScissor=function(h){return h.copy(C0)},this.setScissor=function(h,Y0,V0,N0){if(h.isVector4)C0.set(h.x,h.y,h.z,h.w);else C0.set(h,Y0,V0,N0);E0.scissor(m.copy(C0).multiplyScalar(D0).floor())},this.getScissorTest=function(){return v0},this.setScissorTest=function(h){E0.setScissorTest(v0=h)},this.setOpaqueSort=function(h){P0=h},this.setTransparentSort=function(h){a=h},this.getClearColor=function(h){return h.copy(H0.getClearColor())},this.setClearColor=function(){H0.setClearColor.apply(H0,arguments)},this.getClearAlpha=function(){return H0.getClearAlpha()},this.setClearAlpha=function(){H0.setClearAlpha.apply(H0,arguments)},this.clear=function(h=!0,Y0=!0,V0=!0){let N0=0;if(h){let F0=!1;if(p!==null){let r0=p.texture.format;F0=r0===1033||r0===1031||r0===1029}if(F0){let r0=p.texture.type,W7=r0===1009||r0===1014||r0===1012||r0===1020||r0===1017||r0===1018,Y7=H0.getClearColor(),F7=H0.getClearAlpha(),z7=Y7.r,N7=Y7.g,R7=Y7.b;if(W7)I[0]=z7,I[1]=N7,I[2]=R7,I[3]=F7,c.clearBufferuiv(c.COLOR,0,I);else w[0]=z7,w[1]=N7,w[2]=R7,w[3]=F7,c.clearBufferiv(c.COLOR,0,w)}else N0|=c.COLOR_BUFFER_BIT}if(Y0)N0|=c.DEPTH_BUFFER_BIT;if(V0)N0|=c.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);c.clear(N0)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){if(Z.removeEventListener("webglcontextlost",c0,!1),Z.removeEventListener("webglcontextrestored",_0,!1),Z.removeEventListener("webglcontextcreationerror",s,!1),X0.dispose(),r.dispose(),M.dispose(),_.dispose(),D.dispose(),A.dispose(),p0.dispose(),t0.dispose(),n.dispose(),x0.dispose(),x0.removeEventListener("sessionstart",I7),x0.removeEventListener("sessionend",P7),l0)l0.dispose(),l0=null;V7.stop()};function c0(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function _0(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let h=i0.autoReset,Y0=f0.enabled,V0=f0.autoUpdate,N0=f0.needsUpdate,F0=f0.type;a0(),i0.autoReset=h,f0.enabled=Y0,f0.autoUpdate=V0,f0.needsUpdate=N0,f0.type=F0}function s(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function I0(h){let Y0=h.target;Y0.removeEventListener("dispose",I0),w0(Y0)}function w0(h){b0(h),M.remove(h)}function b0(h){let Y0=M.get(h).programs;if(Y0!==void 0){if(Y0.forEach(function(V0){n.releaseProgram(V0)}),h.isShaderMaterial)n.releaseShaderCache(h)}}this.renderBufferDirect=function(h,Y0,V0,N0,F0,r0){if(Y0===null)Y0=u0;let W7=F0.isMesh&&F0.matrixWorld.determinant()<0,Y7=S9(h,Y0,V0,N0,F0);E0.setMaterial(N0,W7);let F7=V0.index,z7=1;if(N0.wireframe===!0){if(F7=g.getWireframeAttribute(V0),F7===void 0)return;z7=2}let N7=V0.drawRange,R7=V0.attributes.position,c7=N7.start*z7,F8=(N7.start+N7.count)*z7;if(r0!==null)c7=Math.max(c7,r0.start*z7),F8=Math.min(F8,(r0.start+r0.count)*z7);if(F7!==null)c7=Math.max(c7,0),F8=Math.min(F8,F7.count);else if(R7!==void 0&&R7!==null)c7=Math.max(c7,0),F8=Math.min(F8,R7.count);let a7=F8-c7;if(a7<0||a7===1/0)return;p0.setup(F0,N0,Y7,V0,F7);let L8,m7=B0;if(F7!==null)L8=P.get(F7),m7=m0,m7.setIndex(L8);if(F0.isMesh)if(N0.wireframe===!0)E0.setLineWidth(N0.wireframeLinewidth*X7()),m7.setMode(c.LINES);else m7.setMode(c.TRIANGLES);else if(F0.isLine){let E7=N0.linewidth;if(E7===void 0)E7=1;if(E0.setLineWidth(E7*X7()),F0.isLineSegments)m7.setMode(c.LINES);else if(F0.isLineLoop)m7.setMode(c.LINE_LOOP);else m7.setMode(c.LINE_STRIP)}else if(F0.isPoints)m7.setMode(c.POINTS);else if(F0.isSprite)m7.setMode(c.TRIANGLES);if(F0.isBatchedMesh)m7.renderMultiDraw(F0._multiDrawStarts,F0._multiDrawCounts,F0._multiDrawCount);else if(F0.isInstancedMesh)m7.renderInstances(c7,a7,F0.count);else if(V0.isInstancedBufferGeometry){let E7=V0._maxInstanceCount!==void 0?V0._maxInstanceCount:1/0,R8=Math.min(V0.instanceCount,E7);m7.renderInstances(c7,a7,R8)}else m7.render(c7,a7)};function d0(h,Y0,V0){if(h.transparent===!0&&h.side===2&&h.forceSinglePass===!1)h.side=1,h.needsUpdate=!0,K8(h,Y0,V0),h.side=0,h.needsUpdate=!0,K8(h,Y0,V0),h.side=2;else K8(h,Y0,V0)}this.compile=function(h,Y0,V0=null){if(V0===null)V0=h;if(f=r.get(V0),f.init(),C.push(f),V0.traverseVisible(function(F0){if(F0.isLight&&F0.layers.test(Y0.layers)){if(f.pushLight(F0),F0.castShadow)f.pushShadow(F0)}}),h!==V0)h.traverseVisible(function(F0){if(F0.isLight&&F0.layers.test(Y0.layers)){if(f.pushLight(F0),F0.castShadow)f.pushShadow(F0)}});f.setupLights(v._useLegacyLights);let N0=new Set;return h.traverse(function(F0){let r0=F0.material;if(r0)if(Array.isArray(r0))for(let W7=0;W7<r0.length;W7++){let Y7=r0[W7];d0(Y7,V0,F0),N0.add(Y7)}else d0(r0,V0,F0),N0.add(r0)}),C.pop(),f=null,N0},this.compileAsync=function(h,Y0,V0=null){let N0=this.compile(h,Y0,V0);return new Promise((F0)=>{function r0(){if(N0.forEach(function(W7){if(M.get(W7).currentProgram.isReady())N0.delete(W7)}),N0.size===0){F0(h);return}setTimeout(r0,10)}if(A0.get("KHR_parallel_shader_compile")!==null)r0();else setTimeout(r0,10)})};let $7=null;function K7(h){if($7)$7(h)}function I7(){V7.stop()}function P7(){V7.start()}let V7=new DW;if(V7.setAnimationLoop(K7),typeof self<"u")V7.setContext(self);this.setAnimationLoop=function(h){$7=h,x0.setAnimationLoop(h),h===null?V7.stop():V7.start()},x0.addEventListener("sessionstart",I7),x0.addEventListener("sessionend",P7),this.render=function(h,Y0){if(Y0!==void 0&&Y0.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(h.matrixWorldAutoUpdate===!0)h.updateMatrixWorld();if(Y0.parent===null&&Y0.matrixWorldAutoUpdate===!0)Y0.updateMatrixWorld();if(x0.enabled===!0&&x0.isPresenting===!0){if(x0.cameraAutoUpdate===!0)x0.updateCamera(Y0);Y0=x0.getCamera()}if(h.isScene===!0)h.onBeforeRender(v,h,Y0,p);if(f=r.get(h,C.length),f.init(),C.push(f),e0.multiplyMatrices(Y0.projectionMatrix,Y0.matrixWorldInverse),K0.setFromProjectionMatrix(e0),s0=this.localClippingEnabled,M0=U0.init(this.clippingPlanes,s0),j=X0.get(h,k.length),j.init(),k.push(j),S7(h,Y0,0,v.sortObjects),j.finish(),v.sortObjects===!0)j.sort(P0,a);if(this.info.render.frame++,M0===!0)U0.beginShadows();let V0=f.state.shadowsArray;if(f0.render(V0,h,Y0),M0===!0)U0.endShadows();if(this.info.autoReset===!0)this.info.reset();if(H0.render(j,h),f.setupLights(v._useLegacyLights),Y0.isArrayCamera){let N0=Y0.cameras;for(let F0=0,r0=N0.length;F0<r0;F0++){let W7=N0[F0];l7(j,h,W7,W7.viewport)}}else l7(j,h,Y0);if(p!==null)L.updateMultisampleRenderTarget(p),L.updateRenderTargetMipmap(p);if(h.isScene===!0)h.onAfterRender(v,h,Y0);if(p0.resetDefaultState(),$0=-1,z0=null,C.pop(),C.length>0)f=C[C.length-1];else f=null;if(k.pop(),k.length>0)j=k[k.length-1];else j=null};function S7(h,Y0,V0,N0){if(h.visible===!1)return;if(h.layers.test(Y0.layers)){if(h.isGroup)V0=h.renderOrder;else if(h.isLOD){if(h.autoUpdate===!0)h.update(Y0)}else if(h.isLight){if(f.pushLight(h),h.castShadow)f.pushShadow(h)}else if(h.isSprite){if(!h.frustumCulled||K0.intersectsSprite(h)){if(N0)H7.setFromMatrixPosition(h.matrixWorld).applyMatrix4(e0);let W7=A.update(h),Y7=h.material;if(Y7.visible)j.push(h,W7,Y7,V0,H7.z,null)}}else if(h.isMesh||h.isLine||h.isPoints){if(!h.frustumCulled||K0.intersectsObject(h)){let W7=A.update(h),Y7=h.material;if(N0){if(h.boundingSphere!==void 0){if(h.boundingSphere===null)h.computeBoundingSphere();H7.copy(h.boundingSphere.center)}else{if(W7.boundingSphere===null)W7.computeBoundingSphere();H7.copy(W7.boundingSphere.center)}H7.applyMatrix4(h.matrixWorld).applyMatrix4(e0)}if(Array.isArray(Y7)){let F7=W7.groups;for(let z7=0,N7=F7.length;z7<N7;z7++){let R7=F7[z7],c7=Y7[R7.materialIndex];if(c7&&c7.visible)j.push(h,W7,c7,V0,H7.z,R7)}}else if(Y7.visible)j.push(h,W7,Y7,V0,H7.z,null)}}}let r0=h.children;for(let W7=0,Y7=r0.length;W7<Y7;W7++)S7(r0[W7],Y0,V0,N0)}function l7(h,Y0,V0,N0){let{opaque:F0,transmissive:r0,transparent:W7}=h;if(f.setupLightsView(V0),M0===!0)U0.setGlobalState(v.clippingPlanes,V0);if(r0.length>0)V8(F0,r0,Y0,V0);if(N0)E0.viewport(b.copy(N0));if(F0.length>0)Q8(F0,Y0,V0);if(r0.length>0)Q8(r0,Y0,V0);if(W7.length>0)Q8(W7,Y0,V0);E0.buffers.depth.setTest(!0),E0.buffers.depth.setMask(!0),E0.buffers.color.setMask(!0),E0.setPolygonOffset(!1)}function V8(h,Y0,V0,N0){if((V0.isScene===!0?V0.overrideMaterial:null)!==null)return;let r0=j0.isWebGL2;if(l0===null)l0=new R9(1,1,{generateMipmaps:!0,type:A0.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:r0?4:0});if(v.getDrawingBufferSize(J7),r0)l0.setSize(J7.x,J7.y);else l0.setSize(x5(J7.x),x5(J7.y));let W7=v.getRenderTarget();if(v.setRenderTarget(l0),v.getClearColor(L0),S0=v.getClearAlpha(),S0<1)v.setClearColor(16777215,0.5);v.clear();let Y7=v.toneMapping;v.toneMapping=0,Q8(h,V0,N0),L.updateMultisampleRenderTarget(l0),L.updateRenderTargetMipmap(l0);let F7=!1;for(let z7=0,N7=Y0.length;z7<N7;z7++){let R7=Y0[z7],c7=R7.object,F8=R7.geometry,a7=R7.material,L8=R7.group;if(a7.side===2&&c7.layers.test(N0.layers)){let m7=a7.side;a7.side=1,a7.needsUpdate=!0,H8(c7,V0,N0,F8,a7,L8),a7.side=m7,a7.needsUpdate=!0,F7=!0}}if(F7===!0)L.updateMultisampleRenderTarget(l0),L.updateRenderTargetMipmap(l0);v.setRenderTarget(W7),v.setClearColor(L0,S0),v.toneMapping=Y7}function Q8(h,Y0,V0){let N0=Y0.isScene===!0?Y0.overrideMaterial:null;for(let F0=0,r0=h.length;F0<r0;F0++){let W7=h[F0],Y7=W7.object,F7=W7.geometry,z7=N0===null?W7.material:N0,N7=W7.group;if(Y7.layers.test(V0.layers))H8(Y7,Y0,V0,F7,z7,N7)}}function H8(h,Y0,V0,N0,F0,r0){if(h.onBeforeRender(v,Y0,V0,N0,F0,r0),h.modelViewMatrix.multiplyMatrices(V0.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),F0.onBeforeRender(v,Y0,V0,N0,h,r0),F0.transparent===!0&&F0.side===2&&F0.forceSinglePass===!1)F0.side=1,F0.needsUpdate=!0,v.renderBufferDirect(V0,Y0,N0,F0,h,r0),F0.side=0,F0.needsUpdate=!0,v.renderBufferDirect(V0,Y0,N0,F0,h,r0),F0.side=2;else v.renderBufferDirect(V0,Y0,N0,F0,h,r0);h.onAfterRender(v,Y0,V0,N0,F0,r0)}function K8(h,Y0,V0){if(Y0.isScene!==!0)Y0=u0;let N0=M.get(h),F0=f.state.lights,r0=f.state.shadowsArray,W7=F0.state.version,Y7=n.getParameters(h,F0.state,r0,Y0,V0),F7=n.getProgramCacheKey(Y7),z7=N0.programs;if(N0.environment=h.isMeshStandardMaterial?Y0.environment:null,N0.fog=Y0.fog,N0.envMap=(h.isMeshStandardMaterial?D:_).get(h.envMap||N0.environment),z7===void 0)h.addEventListener("dispose",I0),z7=new Map,N0.programs=z7;let N7=z7.get(F7);if(N7!==void 0){if(N0.currentProgram===N7&&N0.lightsStateVersion===W7)return z9(h,Y7),N7}else Y7.uniforms=n.getUniforms(h),h.onBuild(V0,Y7,v),h.onBeforeCompile(Y7,v),N7=n.acquireProgram(Y7,F7),z7.set(F7,N7),N0.uniforms=Y7.uniforms;let R7=N0.uniforms;if(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)R7.clippingPlanes=U0.uniform;if(z9(h,Y7),N0.needsLights=f9(h),N0.lightsStateVersion=W7,N0.needsLights)R7.ambientLightColor.value=F0.state.ambient,R7.lightProbe.value=F0.state.probe,R7.directionalLights.value=F0.state.directional,R7.directionalLightShadows.value=F0.state.directionalShadow,R7.spotLights.value=F0.state.spot,R7.spotLightShadows.value=F0.state.spotShadow,R7.rectAreaLights.value=F0.state.rectArea,R7.ltc_1.value=F0.state.rectAreaLTC1,R7.ltc_2.value=F0.state.rectAreaLTC2,R7.pointLights.value=F0.state.point,R7.pointLightShadows.value=F0.state.pointShadow,R7.hemisphereLights.value=F0.state.hemi,R7.directionalShadowMap.value=F0.state.directionalShadowMap,R7.directionalShadowMatrix.value=F0.state.directionalShadowMatrix,R7.spotShadowMap.value=F0.state.spotShadowMap,R7.spotLightMatrix.value=F0.state.spotLightMatrix,R7.spotLightMap.value=F0.state.spotLightMap,R7.pointShadowMap.value=F0.state.pointShadowMap,R7.pointShadowMatrix.value=F0.state.pointShadowMatrix;return N0.currentProgram=N7,N0.uniformsList=null,N7}function g8(h){if(h.uniformsList===null){let Y0=h.currentProgram.getUniforms();h.uniformsList=y6.seqWithValue(Y0.seq,h.uniforms)}return h.uniformsList}function z9(h,Y0){let V0=M.get(h);V0.outputColorSpace=Y0.outputColorSpace,V0.batching=Y0.batching,V0.instancing=Y0.instancing,V0.instancingColor=Y0.instancingColor,V0.skinning=Y0.skinning,V0.morphTargets=Y0.morphTargets,V0.morphNormals=Y0.morphNormals,V0.morphColors=Y0.morphColors,V0.morphTargetsCount=Y0.morphTargetsCount,V0.numClippingPlanes=Y0.numClippingPlanes,V0.numIntersection=Y0.numClipIntersection,V0.vertexAlphas=Y0.vertexAlphas,V0.vertexTangents=Y0.vertexTangents,V0.toneMapping=Y0.toneMapping}function S9(h,Y0,V0,N0,F0){if(Y0.isScene!==!0)Y0=u0;L.resetTextureUnits();let r0=Y0.fog,W7=N0.isMeshStandardMaterial?Y0.environment:null,Y7=p===null?v.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:"srgb-linear",F7=(N0.isMeshStandardMaterial?D:_).get(N0.envMap||W7),z7=N0.vertexColors===!0&&!!V0.attributes.color&&V0.attributes.color.itemSize===4,N7=!!V0.attributes.tangent&&(!!N0.normalMap||N0.anisotropy>0),R7=!!V0.morphAttributes.position,c7=!!V0.morphAttributes.normal,F8=!!V0.morphAttributes.color,a7=0;if(N0.toneMapped){if(p===null||p.isXRRenderTarget===!0)a7=v.toneMapping}let L8=V0.morphAttributes.position||V0.morphAttributes.normal||V0.morphAttributes.color,m7=L8!==void 0?L8.length:0,E7=M.get(N0),R8=f.state.lights;if(M0===!0){if(s0===!0||h!==z0){let U8=h===z0&&N0.id===$0;U0.setState(N0,h,U8)}}let j7=!1;if(N0.version===E7.__version){if(E7.needsLights&&E7.lightsStateVersion!==R8.state.version)j7=!0;else if(E7.outputColorSpace!==Y7)j7=!0;else if(F0.isBatchedMesh&&E7.batching===!1)j7=!0;else if(!F0.isBatchedMesh&&E7.batching===!0)j7=!0;else if(F0.isInstancedMesh&&E7.instancing===!1)j7=!0;else if(!F0.isInstancedMesh&&E7.instancing===!0)j7=!0;else if(F0.isSkinnedMesh&&E7.skinning===!1)j7=!0;else if(!F0.isSkinnedMesh&&E7.skinning===!0)j7=!0;else if(F0.isInstancedMesh&&E7.instancingColor===!0&&F0.instanceColor===null)j7=!0;else if(F0.isInstancedMesh&&E7.instancingColor===!1&&F0.instanceColor!==null)j7=!0;else if(E7.envMap!==F7)j7=!0;else if(N0.fog===!0&&E7.fog!==r0)j7=!0;else if(E7.numClippingPlanes!==void 0&&(E7.numClippingPlanes!==U0.numPlanes||E7.numIntersection!==U0.numIntersection))j7=!0;else if(E7.vertexAlphas!==z7)j7=!0;else if(E7.vertexTangents!==N7)j7=!0;else if(E7.morphTargets!==R7)j7=!0;else if(E7.morphNormals!==c7)j7=!0;else if(E7.morphColors!==F8)j7=!0;else if(E7.toneMapping!==a7)j7=!0;else if(j0.isWebGL2===!0&&E7.morphTargetsCount!==m7)j7=!0}else j7=!0,E7.__version=N0.version;let E8=E7.currentProgram;if(j7===!0)E8=K8(N0,Y0,F0);let N6=!1,W9=!1,x9=!1,t7=E8.getUniforms(),p8=E7.uniforms;if(E0.useProgram(E8.program))N6=!0,W9=!0,x9=!0;if(N0.id!==$0)$0=N0.id,W9=!0;if(N6||z0!==h){t7.setValue(c,"projectionMatrix",h.projectionMatrix),t7.setValue(c,"viewMatrix",h.matrixWorldInverse);let U8=t7.map.cameraPosition;if(U8!==void 0)U8.setValue(c,H7.setFromMatrixPosition(h.matrixWorld));if(j0.logarithmicDepthBuffer)t7.setValue(c,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2));if(N0.isMeshPhongMaterial||N0.isMeshToonMaterial||N0.isMeshLambertMaterial||N0.isMeshBasicMaterial||N0.isMeshStandardMaterial||N0.isShaderMaterial)t7.setValue(c,"isOrthographic",h.isOrthographicCamera===!0);if(z0!==h)z0=h,W9=!0,x9=!0}if(F0.isSkinnedMesh){t7.setOptional(c,F0,"bindMatrix"),t7.setOptional(c,F0,"bindMatrixInverse");let U8=F0.skeleton;if(U8)if(j0.floatVertexTextures){if(U8.boneTexture===null)U8.computeBoneTexture();t7.setValue(c,"boneTexture",U8.boneTexture,L)}else console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")}if(F0.isBatchedMesh)t7.setOptional(c,F0,"batchingTexture"),t7.setValue(c,"batchingTexture",F0._matricesTexture,L);let y9=V0.morphAttributes;if(y9.position!==void 0||y9.normal!==void 0||y9.color!==void 0&&j0.isWebGL2===!0)u.update(F0,V0,E8);if(W9||E7.receiveShadow!==F0.receiveShadow)E7.receiveShadow=F0.receiveShadow,t7.setValue(c,"receiveShadow",F0.receiveShadow);if(N0.isMeshGouraudMaterial&&N0.envMap!==null)p8.envMap.value=F7,p8.flipEnvMap.value=F7.isCubeTexture&&F7.isRenderTargetTexture===!1?-1:1;if(W9){if(t7.setValue(c,"toneMappingExposure",v.toneMappingExposure),E7.needsLights)j9(p8,x9);if(r0&&N0.fog===!0)i.refreshFogUniforms(p8,r0);i.refreshMaterialUniforms(p8,N0,D0,e,l0),y6.upload(c,g8(E7),p8,L)}if(N0.isShaderMaterial&&N0.uniformsNeedUpdate===!0)y6.upload(c,g8(E7),p8,L),N0.uniformsNeedUpdate=!1;if(N0.isSpriteMaterial)t7.setValue(c,"center",F0.center);if(t7.setValue(c,"modelViewMatrix",F0.modelViewMatrix),t7.setValue(c,"normalMatrix",F0.normalMatrix),t7.setValue(c,"modelMatrix",F0.matrixWorld),N0.isShaderMaterial||N0.isRawShaderMaterial){let U8=N0.uniformsGroups;for(let R6=0,U6=U8.length;R6<U6;R6++)if(j0.isWebGL2){let D6=U8[R6];t0.update(D6,E8),t0.bind(D6,E8)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return E8}function j9(h,Y0){h.ambientLightColor.needsUpdate=Y0,h.lightProbe.needsUpdate=Y0,h.directionalLights.needsUpdate=Y0,h.directionalLightShadows.needsUpdate=Y0,h.pointLights.needsUpdate=Y0,h.pointLightShadows.needsUpdate=Y0,h.spotLights.needsUpdate=Y0,h.spotLightShadows.needsUpdate=Y0,h.rectAreaLights.needsUpdate=Y0,h.hemisphereLights.needsUpdate=Y0}function f9(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}if(this.getActiveCubeFace=function(){return l},this.getActiveMipmapLevel=function(){return Z0},this.getRenderTarget=function(){return p},this.setRenderTargetTextures=function(h,Y0,V0){M.get(h.texture).__webglTexture=Y0,M.get(h.depthTexture).__webglTexture=V0;let N0=M.get(h);if(N0.__hasExternalTextures=!0,N0.__hasExternalTextures){if(N0.__autoAllocateDepthBuffer=V0===void 0,!N0.__autoAllocateDepthBuffer){if(A0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N0.__useRenderToTexture=!1}}},this.setRenderTargetFramebuffer=function(h,Y0){let V0=M.get(h);V0.__webglFramebuffer=Y0,V0.__useDefaultFramebuffer=Y0===void 0},this.setRenderTarget=function(h,Y0=0,V0=0){p=h,l=Y0,Z0=V0;let N0=!0,F0=null,r0=!1,W7=!1;if(h){let F7=M.get(h);if(F7.__useDefaultFramebuffer!==void 0)E0.bindFramebuffer(c.FRAMEBUFFER,null),N0=!1;else if(F7.__webglFramebuffer===void 0)L.setupRenderTarget(h);else if(F7.__hasExternalTextures)L.rebindTextures(h,M.get(h.texture).__webglTexture,M.get(h.depthTexture).__webglTexture);let z7=h.texture;if(z7.isData3DTexture||z7.isDataArrayTexture||z7.isCompressedArrayTexture)W7=!0;let N7=M.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget){if(Array.isArray(N7[Y0]))F0=N7[Y0][V0];else F0=N7[Y0];r0=!0}else if(j0.isWebGL2&&h.samples>0&&L.useMultisampledRTT(h)===!1)F0=M.get(h).__webglMultisampledFramebuffer;else if(Array.isArray(N7))F0=N7[V0];else F0=N7;b.copy(h.viewport),m.copy(h.scissor),q0=h.scissorTest}else b.copy(W0).multiplyScalar(D0).floor(),m.copy(C0).multiplyScalar(D0).floor(),q0=v0;if(E0.bindFramebuffer(c.FRAMEBUFFER,F0)&&j0.drawBuffers&&N0)E0.drawBuffers(h,F0);if(E0.viewport(b),E0.scissor(m),E0.setScissorTest(q0),r0){let F7=M.get(h.texture);c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,F7.__webglTexture,V0)}else if(W7){let F7=M.get(h.texture),z7=Y0||0;c.framebufferTextureLayer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,F7.__webglTexture,V0||0,z7)}$0=-1},this.readRenderTargetPixels=function(h,Y0,V0,N0,F0,r0,W7){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y7=M.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&W7!==void 0)Y7=Y7[W7];if(Y7){E0.bindFramebuffer(c.FRAMEBUFFER,Y7);try{let F7=h.texture,z7=F7.format,N7=F7.type;if(z7!==1023&&T0.convert(z7)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let R7=N7===1016&&(A0.has("EXT_color_buffer_half_float")||j0.isWebGL2&&A0.has("EXT_color_buffer_float"));if(N7!==1009&&T0.convert(N7)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_TYPE)&&!(N7===1015&&(j0.isWebGL2||A0.has("OES_texture_float")||A0.has("WEBGL_color_buffer_float")))&&!R7){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(Y0>=0&&Y0<=h.width-N0&&(V0>=0&&V0<=h.height-F0))c.readPixels(Y0,V0,N0,F0,T0.convert(z7),T0.convert(N7),r0)}finally{let F7=p!==null?M.get(p).__webglFramebuffer:null;E0.bindFramebuffer(c.FRAMEBUFFER,F7)}}},this.copyFramebufferToTexture=function(h,Y0,V0=0){let N0=Math.pow(2,-V0),F0=Math.floor(Y0.image.width*N0),r0=Math.floor(Y0.image.height*N0);L.setTexture2D(Y0,0),c.copyTexSubImage2D(c.TEXTURE_2D,V0,0,0,h.x,h.y,F0,r0),E0.unbindTexture()},this.copyTextureToTexture=function(h,Y0,V0,N0=0){let F0=Y0.image.width,r0=Y0.image.height,W7=T0.convert(V0.format),Y7=T0.convert(V0.type);if(L.setTexture2D(V0,0),c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,V0.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V0.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,V0.unpackAlignment),Y0.isDataTexture)c.texSubImage2D(c.TEXTURE_2D,N0,h.x,h.y,F0,r0,W7,Y7,Y0.image.data);else if(Y0.isCompressedTexture)c.compressedTexSubImage2D(c.TEXTURE_2D,N0,h.x,h.y,Y0.mipmaps[0].width,Y0.mipmaps[0].height,W7,Y0.mipmaps[0].data);else c.texSubImage2D(c.TEXTURE_2D,N0,h.x,h.y,W7,Y7,Y0.image);if(N0===0&&V0.generateMipmaps)c.generateMipmap(c.TEXTURE_2D);E0.unbindTexture()},this.copyTextureToTexture3D=function(h,Y0,V0,N0,F0=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let r0=h.max.x-h.min.x+1,W7=h.max.y-h.min.y+1,Y7=h.max.z-h.min.z+1,F7=T0.convert(N0.format),z7=T0.convert(N0.type),N7;if(N0.isData3DTexture)L.setTexture3D(N0,0),N7=c.TEXTURE_3D;else if(N0.isDataArrayTexture||N0.isCompressedArrayTexture)L.setTexture2DArray(N0,0),N7=c.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,N0.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N0.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,N0.unpackAlignment);let R7=c.getParameter(c.UNPACK_ROW_LENGTH),c7=c.getParameter(c.UNPACK_IMAGE_HEIGHT),F8=c.getParameter(c.UNPACK_SKIP_PIXELS),a7=c.getParameter(c.UNPACK_SKIP_ROWS),L8=c.getParameter(c.UNPACK_SKIP_IMAGES),m7=V0.isCompressedTexture?V0.mipmaps[F0]:V0.image;if(c.pixelStorei(c.UNPACK_ROW_LENGTH,m7.width),c.pixelStorei(c.UNPACK_IMAGE_HEIGHT,m7.height),c.pixelStorei(c.UNPACK_SKIP_PIXELS,h.min.x),c.pixelStorei(c.UNPACK_SKIP_ROWS,h.min.y),c.pixelStorei(c.UNPACK_SKIP_IMAGES,h.min.z),V0.isDataTexture||V0.isData3DTexture)c.texSubImage3D(N7,F0,Y0.x,Y0.y,Y0.z,r0,W7,Y7,F7,z7,m7.data);else if(V0.isCompressedArrayTexture)console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),c.compressedTexSubImage3D(N7,F0,Y0.x,Y0.y,Y0.z,r0,W7,Y7,F7,m7.data);else c.texSubImage3D(N7,F0,Y0.x,Y0.y,Y0.z,r0,W7,Y7,F7,z7,m7);if(c.pixelStorei(c.UNPACK_ROW_LENGTH,R7),c.pixelStorei(c.UNPACK_IMAGE_HEIGHT,c7),c.pixelStorei(c.UNPACK_SKIP_PIXELS,F8),c.pixelStorei(c.UNPACK_SKIP_ROWS,a7),c.pixelStorei(c.UNPACK_SKIP_IMAGES,L8),F0===0&&N0.generateMipmaps)c.generateMipmap(N7);E0.unbindTexture()},this.initTexture=function(h){if(h.isCubeTexture)L.setTextureCube(h,0);else if(h.isData3DTexture)L.setTexture3D(h,0);else if(h.isDataArrayTexture||h.isCompressedArrayTexture)L.setTexture2DArray(h,0);else L.setTexture2D(h,0);E0.unbindTexture()},this.resetState=function(){l=0,Z0=0,p=null,E0.reset(),p0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(Q){this._outputColorSpace=Q;let Z=this.getContext();Z.drawingBufferColorSpace=Q==="display-p3"?"display-p3":"srgb",Z.unpackColorSpace=p7.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace==="srgb"?3001:3000}set outputEncoding(Q){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=Q===3001?"srgb":"srgb-linear"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(Q){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=Q}}class SW extends p5{}SW.prototype.isWebGL1Renderer=!0;class ZZ extends Z8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(Q,Z){if(super.copy(Q,Z),Q.background!==null)this.background=Q.background.clone();if(Q.environment!==null)this.environment=Q.environment.clone();if(Q.fog!==null)this.fog=Q.fog.clone();if(this.backgroundBlurriness=Q.backgroundBlurriness,this.backgroundIntensity=Q.backgroundIntensity,Q.overrideMaterial!==null)this.overrideMaterial=Q.overrideMaterial.clone();return this.matrixAutoUpdate=Q.matrixAutoUpdate,this}toJSON(Q){let Z=super.toJSON(Q);if(this.fog!==null)Z.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Z.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Z.object.backgroundIntensity=this.backgroundIntensity;return Z}}class JZ{constructor(Q,Z){this.isInterleavedBuffer=!0,this.array=Q,this.stride=Z,this.count=Q!==void 0?Q.length/Z:0,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=u8()}onUploadCallback(){}set needsUpdate(Q){if(Q===!0)this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(Q){return this.usage=Q,this}addUpdateRange(Q,Z){this.updateRanges.push({start:Q,count:Z})}clearUpdateRanges(){this.updateRanges.length=0}copy(Q){return this.array=new Q.array.constructor(Q.array),this.count=Q.count,this.stride=Q.stride,this.usage=Q.usage,this}copyAt(Q,Z,J){Q*=this.stride,J*=Z.stride;for(let X=0,H=this.stride;X<H;X++)this.array[Q+X]=Z.array[J+X];return this}set(Q,Z=0){return this.array.set(Q,Z),this}clone(Q){if(Q.arrayBuffers===void 0)Q.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=u8();if(Q.arrayBuffers[this.array.buffer._uuid]===void 0)Q.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Z=new this.array.constructor(Q.arrayBuffers[this.array.buffer._uuid]),J=new this.constructor(Z,this.stride);return J.setUsage(this.usage),J}onUpload(Q){return this.onUploadCallback=Q,this}toJSON(Q){if(Q.arrayBuffers===void 0)Q.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=u8();if(Q.arrayBuffers[this.array.buffer._uuid]===void 0)Q.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var D8=new Q0;class p6{constructor(Q,Z,J,X=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=Q,this.itemSize=Z,this.offset=J,this.normalized=X}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(Q){this.data.needsUpdate=Q}applyMatrix4(Q){for(let Z=0,J=this.data.count;Z<J;Z++)D8.fromBufferAttribute(this,Z),D8.applyMatrix4(Q),this.setXYZ(Z,D8.x,D8.y,D8.z);return this}applyNormalMatrix(Q){for(let Z=0,J=this.count;Z<J;Z++)D8.fromBufferAttribute(this,Z),D8.applyNormalMatrix(Q),this.setXYZ(Z,D8.x,D8.y,D8.z);return this}transformDirection(Q){for(let Z=0,J=this.count;Z<J;Z++)D8.fromBufferAttribute(this,Z),D8.transformDirection(Q),this.setXYZ(Z,D8.x,D8.y,D8.z);return this}setX(Q,Z){if(this.normalized)Z=h7(Z,this.array);return this.data.array[Q*this.data.stride+this.offset]=Z,this}setY(Q,Z){if(this.normalized)Z=h7(Z,this.array);return this.data.array[Q*this.data.stride+this.offset+1]=Z,this}setZ(Q,Z){if(this.normalized)Z=h7(Z,this.array);return this.data.array[Q*this.data.stride+this.offset+2]=Z,this}setW(Q,Z){if(this.normalized)Z=h7(Z,this.array);return this.data.array[Q*this.data.stride+this.offset+3]=Z,this}getX(Q){let Z=this.data.array[Q*this.data.stride+this.offset];if(this.normalized)Z=l8(Z,this.array);return Z}getY(Q){let Z=this.data.array[Q*this.data.stride+this.offset+1];if(this.normalized)Z=l8(Z,this.array);return Z}getZ(Q){let Z=this.data.array[Q*this.data.stride+this.offset+2];if(this.normalized)Z=l8(Z,this.array);return Z}getW(Q){let Z=this.data.array[Q*this.data.stride+this.offset+3];if(this.normalized)Z=l8(Z,this.array);return Z}setXY(Q,Z,J){if(Q=Q*this.data.stride+this.offset,this.normalized)Z=h7(Z,this.array),J=h7(J,this.array);return this.data.array[Q+0]=Z,this.data.array[Q+1]=J,this}setXYZ(Q,Z,J,X){if(Q=Q*this.data.stride+this.offset,this.normalized)Z=h7(Z,this.array),J=h7(J,this.array),X=h7(X,this.array);return this.data.array[Q+0]=Z,this.data.array[Q+1]=J,this.data.array[Q+2]=X,this}setXYZW(Q,Z,J,X,H){if(Q=Q*this.data.stride+this.offset,this.normalized)Z=h7(Z,this.array),J=h7(J,this.array),X=h7(X,this.array),H=h7(H,this.array);return this.data.array[Q+0]=Z,this.data.array[Q+1]=J,this.data.array[Q+2]=X,this.data.array[Q+3]=H,this}clone(Q){if(Q===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Z=[];for(let J=0;J<this.count;J++){let X=J*this.data.stride+this.offset;for(let H=0;H<this.itemSize;H++)Z.push(this.data.array[X+H])}return new q8(new this.array.constructor(Z),this.itemSize,this.normalized)}else{if(Q.interleavedBuffers===void 0)Q.interleavedBuffers={};if(Q.interleavedBuffers[this.data.uuid]===void 0)Q.interleavedBuffers[this.data.uuid]=this.data.clone(Q);return new p6(Q.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(Q){if(Q===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Z=[];for(let J=0;J<this.count;J++){let X=J*this.data.stride+this.offset;for(let H=0;H<this.itemSize;H++)Z.push(this.data.array[X+H])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Z,normalized:this.normalized}}else{if(Q.interleavedBuffers===void 0)Q.interleavedBuffers={};if(Q.interleavedBuffers[this.data.uuid]===void 0)Q.interleavedBuffers[this.data.uuid]=this.data.toJSON(Q);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}class m5 extends _9{constructor(Q){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new L7(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(Q)}copy(Q){return super.copy(Q),this.color.copy(Q.color),this.map=Q.map,this.alphaMap=Q.alphaMap,this.rotation=Q.rotation,this.sizeAttenuation=Q.sizeAttenuation,this.fog=Q.fog,this}}var Q6,A6=new Q0,Z6=new Q0,J6=new Q0,W6=new h0,T6=new h0,jW=new o7,k5=new Q0,S6=new Q0,O5=new Q0,nJ=new h0,TQ=new h0,iJ=new h0;class WZ extends Z8{constructor(Q=new m5){super();if(this.isSprite=!0,this.type="Sprite",Q6===void 0){Q6=new T8;let Z=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),J=new JZ(Z,5);Q6.setIndex([0,1,2,0,2,3]),Q6.setAttribute("position",new p6(J,3,0,!1)),Q6.setAttribute("uv",new p6(J,2,3,!1))}this.geometry=Q6,this.material=Q,this.center=new h0(0.5,0.5)}raycast(Q,Z){if(Q.camera===null)console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Z6.setFromMatrixScale(this.matrixWorld),jW.copy(Q.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(Q.camera.matrixWorldInverse,this.matrixWorld),J6.setFromMatrixPosition(this.modelViewMatrix),Q.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Z6.multiplyScalar(-J6.z);let J=this.material.rotation,X,H;if(J!==0)H=Math.cos(J),X=Math.sin(J);let q=this.center;w5(k5.set(-0.5,-0.5,0),J6,q,Z6,X,H),w5(S6.set(0.5,-0.5,0),J6,q,Z6,X,H),w5(O5.set(0.5,0.5,0),J6,q,Z6,X,H),nJ.set(0,0),TQ.set(1,0),iJ.set(1,1);let G=Q.ray.intersectTriangle(k5,S6,O5,!1,A6);if(G===null){if(w5(S6.set(-0.5,0.5,0),J6,q,Z6,X,H),TQ.set(0,1),G=Q.ray.intersectTriangle(k5,O5,S6,!1,A6),G===null)return}let V=Q.ray.origin.distanceTo(A6);if(V<Q.near||V>Q.far)return;Z.push({distance:V,point:A6.clone(),uv:P8.getInterpolation(A6,k5,S6,O5,nJ,TQ,iJ,new h0),face:null,object:this})}copy(Q,Z){if(super.copy(Q,Z),Q.center!==void 0)this.center.copy(Q.center);return this.material=Q.material,this}}function w5(Q,Z,J,X,H,q){if(W6.subVectors(Q,J).addScalar(0.5).multiply(X),H!==void 0)T6.x=q*W6.x-H*W6.y,T6.y=H*W6.x+q*W6.y;else T6.copy(W6);Q.copy(Z),Q.x+=T6.x,Q.y+=T6.y,Q.applyMatrix4(jW)}class $Z extends _9{constructor(Q){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new L7(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(Q)}copy(Q){return super.copy(Q),this.color.copy(Q.color),this.map=Q.map,this.linewidth=Q.linewidth,this.linecap=Q.linecap,this.linejoin=Q.linejoin,this.fog=Q.fog,this}}var oJ=new Q0,aJ=new Q0,rJ=new o7,SQ=new q6,P5=new c6;class fW extends Z8{constructor(Q=new T8,Z=new $Z){super();this.isLine=!0,this.type="Line",this.geometry=Q,this.material=Z,this.updateMorphTargets()}copy(Q,Z){return super.copy(Q,Z),this.material=Array.isArray(Q.material)?Q.material.slice():Q.material,this.geometry=Q.geometry,this}computeLineDistances(){let Q=this.geometry;if(Q.index===null){let Z=Q.attributes.position,J=[0];for(let X=1,H=Z.count;X<H;X++)oJ.fromBufferAttribute(Z,X-1),aJ.fromBufferAttribute(Z,X),J[X]=J[X-1],J[X]+=oJ.distanceTo(aJ);Q.setAttribute("lineDistance",new z8(J,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(Q,Z){let J=this.geometry,X=this.matrixWorld,H=Q.params.Line.threshold,q=J.drawRange;if(J.boundingSphere===null)J.computeBoundingSphere();if(P5.copy(J.boundingSphere),P5.applyMatrix4(X),P5.radius+=H,Q.ray.intersectsSphere(P5)===!1)return;rJ.copy(X).invert(),SQ.copy(Q.ray).applyMatrix4(rJ);let G=H/((this.scale.x+this.scale.y+this.scale.z)/3),V=G*G,R=new Q0,U=new Q0,B=new Q0,z=new Q0,I=this.isLineSegments?2:1,w=J.index,f=J.attributes.position;if(w!==null){let k=Math.max(0,q.start),C=Math.min(w.count,q.start+q.count);for(let v=k,x=C-1;v<x;v+=I){let l=w.getX(v),Z0=w.getX(v+1);if(R.fromBufferAttribute(f,l),U.fromBufferAttribute(f,Z0),SQ.distanceSqToSegment(R,U,z,B)>V)continue;z.applyMatrix4(this.matrixWorld);let $0=Q.ray.origin.distanceTo(z);if($0<Q.near||$0>Q.far)continue;Z.push({distance:$0,point:B.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let k=Math.max(0,q.start),C=Math.min(f.count,q.start+q.count);for(let v=k,x=C-1;v<x;v+=I){if(R.fromBufferAttribute(f,v),U.fromBufferAttribute(f,v+1),SQ.distanceSqToSegment(R,U,z,B)>V)continue;z.applyMatrix4(this.matrixWorld);let Z0=Q.ray.origin.distanceTo(z);if(Z0<Q.near||Z0>Q.far)continue;Z.push({distance:Z0,point:B.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let Z=this.geometry.morphAttributes,J=Object.keys(Z);if(J.length>0){let X=Z[J[0]];if(X!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let H=0,q=X.length;H<q;H++){let G=X[H].name||String(H);this.morphTargetInfluences.push(0),this.morphTargetDictionary[G]=H}}}}}var tJ=new Q0,eJ=new Q0;class xW extends fW{constructor(Q,Z){super(Q,Z);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let Q=this.geometry;if(Q.index===null){let Z=Q.attributes.position,J=[];for(let X=0,H=Z.count;X<H;X+=2)tJ.fromBufferAttribute(Z,X),eJ.fromBufferAttribute(Z,X+1),J[X]=X===0?0:J[X-1],J[X+1]=J[X]+tJ.distanceTo(eJ);Q.setAttribute("lineDistance",new z8(J,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class XZ extends I8{constructor(Q,Z,J,X,H,q,G,V,R){super(Q,Z,J,X,H,q,G,V,R);this.isCanvasTexture=!0,this.needsUpdate=!0}}class h8{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(Q,Z){let J=this.getUtoTmapping(Q);return this.getPoint(J,Z)}getPoints(Q=5){let Z=[];for(let J=0;J<=Q;J++)Z.push(this.getPoint(J/Q));return Z}getSpacedPoints(Q=5){let Z=[];for(let J=0;J<=Q;J++)Z.push(this.getPointAt(J/Q));return Z}getLength(){let Q=this.getLengths();return Q[Q.length-1]}getLengths(Q=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===Q+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Z=[],J,X=this.getPoint(0),H=0;Z.push(0);for(let q=1;q<=Q;q++)J=this.getPoint(q/Q),H+=J.distanceTo(X),Z.push(H),X=J;return this.cacheArcLengths=Z,Z}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(Q,Z){let J=this.getLengths(),X=0,H=J.length,q;if(Z)q=Z;else q=Q*J[H-1];let G=0,V=H-1,R;while(G<=V)if(X=Math.floor(G+(V-G)/2),R=J[X]-q,R<0)G=X+1;else if(R>0)V=X-1;else{V=X;break}if(X=V,J[X]===q)return X/(H-1);let U=J[X],z=J[X+1]-U,I=(q-U)/z;return(X+I)/(H-1)}getTangent(Q,Z){let X=Q-0.0001,H=Q+0.0001;if(X<0)X=0;if(H>1)H=1;let q=this.getPoint(X),G=this.getPoint(H),V=Z||(q.isVector2?new h0:new Q0);return V.copy(G).sub(q).normalize(),V}getTangentAt(Q,Z){let J=this.getUtoTmapping(Q);return this.getTangent(J,Z)}computeFrenetFrames(Q,Z){let J=new Q0,X=[],H=[],q=[],G=new Q0,V=new o7;for(let I=0;I<=Q;I++){let w=I/Q;X[I]=this.getTangentAt(w,new Q0)}H[0]=new Q0,q[0]=new Q0;let R=Number.MAX_VALUE,U=Math.abs(X[0].x),B=Math.abs(X[0].y),z=Math.abs(X[0].z);if(U<=R)R=U,J.set(1,0,0);if(B<=R)R=B,J.set(0,1,0);if(z<=R)J.set(0,0,1);G.crossVectors(X[0],J).normalize(),H[0].crossVectors(X[0],G),q[0].crossVectors(X[0],H[0]);for(let I=1;I<=Q;I++){if(H[I]=H[I-1].clone(),q[I]=q[I-1].clone(),G.crossVectors(X[I-1],X[I]),G.length()>Number.EPSILON){G.normalize();let w=Math.acos(X8(X[I-1].dot(X[I]),-1,1));H[I].applyMatrix4(V.makeRotationAxis(G,w))}q[I].crossVectors(X[I],H[I])}if(Z===!0){let I=Math.acos(X8(H[0].dot(H[Q]),-1,1));if(I/=Q,X[0].dot(G.crossVectors(H[0],H[Q]))>0)I=-I;for(let w=1;w<=Q;w++)H[w].applyMatrix4(V.makeRotationAxis(X[w],I*w)),q[w].crossVectors(X[w],H[w])}return{tangents:X,normals:H,binormals:q}}clone(){return new this.constructor().copy(this)}copy(Q){return this.arcLengthDivisions=Q.arcLengthDivisions,this}toJSON(){let Q={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return Q.arcLengthDivisions=this.arcLengthDivisions,Q.type=this.type,Q}fromJSON(Q){return this.arcLengthDivisions=Q.arcLengthDivisions,this}}class d5 extends h8{constructor(Q=0,Z=0,J=1,X=1,H=0,q=Math.PI*2,G=!1,V=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=Q,this.aY=Z,this.xRadius=J,this.yRadius=X,this.aStartAngle=H,this.aEndAngle=q,this.aClockwise=G,this.aRotation=V}getPoint(Q,Z){let J=Z||new h0,X=Math.PI*2,H=this.aEndAngle-this.aStartAngle,q=Math.abs(H)<Number.EPSILON;while(H<0)H+=X;while(H>X)H-=X;if(H<Number.EPSILON)if(q)H=0;else H=X;if(this.aClockwise===!0&&!q)if(H===X)H=-X;else H=H-X;let G=this.aStartAngle+Q*H,V=this.aX+this.xRadius*Math.cos(G),R=this.aY+this.yRadius*Math.sin(G);if(this.aRotation!==0){let U=Math.cos(this.aRotation),B=Math.sin(this.aRotation),z=V-this.aX,I=R-this.aY;V=z*U-I*B+this.aX,R=z*B+I*U+this.aY}return J.set(V,R)}copy(Q){return super.copy(Q),this.aX=Q.aX,this.aY=Q.aY,this.xRadius=Q.xRadius,this.yRadius=Q.yRadius,this.aStartAngle=Q.aStartAngle,this.aEndAngle=Q.aEndAngle,this.aClockwise=Q.aClockwise,this.aRotation=Q.aRotation,this}toJSON(){let Q=super.toJSON();return Q.aX=this.aX,Q.aY=this.aY,Q.xRadius=this.xRadius,Q.yRadius=this.yRadius,Q.aStartAngle=this.aStartAngle,Q.aEndAngle=this.aEndAngle,Q.aClockwise=this.aClockwise,Q.aRotation=this.aRotation,Q}fromJSON(Q){return super.fromJSON(Q),this.aX=Q.aX,this.aY=Q.aY,this.xRadius=Q.xRadius,this.yRadius=Q.yRadius,this.aStartAngle=Q.aStartAngle,this.aEndAngle=Q.aEndAngle,this.aClockwise=Q.aClockwise,this.aRotation=Q.aRotation,this}}class yW extends d5{constructor(Q,Z,J,X,H,q){super(Q,Z,J,J,X,H,q);this.isArcCurve=!0,this.type="ArcCurve"}}function YZ(){let Q=0,Z=0,J=0,X=0;function H(q,G,V,R){Q=q,Z=V,J=-3*q+3*G-2*V-R,X=2*q-2*G+V+R}return{initCatmullRom:function(q,G,V,R,U){H(G,V,U*(V-q),U*(R-G))},initNonuniformCatmullRom:function(q,G,V,R,U,B,z){let I=(G-q)/U-(V-q)/(U+B)+(V-G)/B,w=(V-G)/B-(R-G)/(B+z)+(R-V)/z;I*=B,w*=B,H(G,V,I,w)},calc:function(q){let G=q*q,V=G*q;return Q+Z*q+J*G+X*V}}}var A5=new Q0,jQ=new YZ,fQ=new YZ,xQ=new YZ;class vW extends h8{constructor(Q=[],Z=!1,J="centripetal",X=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=Q,this.closed=Z,this.curveType=J,this.tension=X}getPoint(Q,Z=new Q0){let J=Z,X=this.points,H=X.length,q=(H-(this.closed?0:1))*Q,G=Math.floor(q),V=q-G;if(this.closed)G+=G>0?0:(Math.floor(Math.abs(G)/H)+1)*H;else if(V===0&&G===H-1)G=H-2,V=1;let R,U;if(this.closed||G>0)R=X[(G-1)%H];else A5.subVectors(X[0],X[1]).add(X[0]),R=A5;let B=X[G%H],z=X[(G+1)%H];if(this.closed||G+2<H)U=X[(G+2)%H];else A5.subVectors(X[H-1],X[H-2]).add(X[H-1]),U=A5;if(this.curveType==="centripetal"||this.curveType==="chordal"){let I=this.curveType==="chordal"?0.5:0.25,w=Math.pow(R.distanceToSquared(B),I),j=Math.pow(B.distanceToSquared(z),I),f=Math.pow(z.distanceToSquared(U),I);if(j<0.0001)j=1;if(w<0.0001)w=j;if(f<0.0001)f=j;jQ.initNonuniformCatmullRom(R.x,B.x,z.x,U.x,w,j,f),fQ.initNonuniformCatmullRom(R.y,B.y,z.y,U.y,w,j,f),xQ.initNonuniformCatmullRom(R.z,B.z,z.z,U.z,w,j,f)}else if(this.curveType==="catmullrom")jQ.initCatmullRom(R.x,B.x,z.x,U.x,this.tension),fQ.initCatmullRom(R.y,B.y,z.y,U.y,this.tension),xQ.initCatmullRom(R.z,B.z,z.z,U.z,this.tension);return J.set(jQ.calc(V),fQ.calc(V),xQ.calc(V)),J}copy(Q){super.copy(Q),this.points=[];for(let Z=0,J=Q.points.length;Z<J;Z++){let X=Q.points[Z];this.points.push(X.clone())}return this.closed=Q.closed,this.curveType=Q.curveType,this.tension=Q.tension,this}toJSON(){let Q=super.toJSON();Q.points=[];for(let Z=0,J=this.points.length;Z<J;Z++){let X=this.points[Z];Q.points.push(X.toArray())}return Q.closed=this.closed,Q.curveType=this.curveType,Q.tension=this.tension,Q}fromJSON(Q){super.fromJSON(Q),this.points=[];for(let Z=0,J=Q.points.length;Z<J;Z++){let X=Q.points[Z];this.points.push(new Q0().fromArray(X))}return this.closed=Q.closed,this.curveType=Q.curveType,this.tension=Q.tension,this}}function QW(Q,Z,J,X,H){let q=(X-Z)*0.5,G=(H-J)*0.5,V=Q*Q,R=Q*V;return(2*J-2*X+q+G)*R+(-3*J+3*X-2*q-G)*V+q*Q+J}function Q1(Q,Z){let J=1-Q;return J*J*Z}function Z1(Q,Z){return 2*(1-Q)*Q*Z}function J1(Q,Z){return Q*Q*Z}function v6(Q,Z,J,X){return Q1(Q,Z)+Z1(Q,J)+J1(Q,X)}function W1(Q,Z){let J=1-Q;return J*J*J*Z}function $1(Q,Z){let J=1-Q;return 3*J*J*Q*Z}function X1(Q,Z){return 3*(1-Q)*Q*Q*Z}function Y1(Q,Z){return Q*Q*Q*Z}function b6(Q,Z,J,X,H){return W1(Q,Z)+$1(Q,J)+X1(Q,X)+Y1(Q,H)}class HZ extends h8{constructor(Q=new h0,Z=new h0,J=new h0,X=new h0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=Q,this.v1=Z,this.v2=J,this.v3=X}getPoint(Q,Z=new h0){let J=Z,X=this.v0,H=this.v1,q=this.v2,G=this.v3;return J.set(b6(Q,X.x,H.x,q.x,G.x),b6(Q,X.y,H.y,q.y,G.y)),J}copy(Q){return super.copy(Q),this.v0.copy(Q.v0),this.v1.copy(Q.v1),this.v2.copy(Q.v2),this.v3.copy(Q.v3),this}toJSON(){let Q=super.toJSON();return Q.v0=this.v0.toArray(),Q.v1=this.v1.toArray(),Q.v2=this.v2.toArray(),Q.v3=this.v3.toArray(),Q}fromJSON(Q){return super.fromJSON(Q),this.v0.fromArray(Q.v0),this.v1.fromArray(Q.v1),this.v2.fromArray(Q.v2),this.v3.fromArray(Q.v3),this}}class bW extends h8{constructor(Q=new Q0,Z=new Q0,J=new Q0,X=new Q0){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=Q,this.v1=Z,this.v2=J,this.v3=X}getPoint(Q,Z=new Q0){let J=Z,X=this.v0,H=this.v1,q=this.v2,G=this.v3;return J.set(b6(Q,X.x,H.x,q.x,G.x),b6(Q,X.y,H.y,q.y,G.y),b6(Q,X.z,H.z,q.z,G.z)),J}copy(Q){return super.copy(Q),this.v0.copy(Q.v0),this.v1.copy(Q.v1),this.v2.copy(Q.v2),this.v3.copy(Q.v3),this}toJSON(){let Q=super.toJSON();return Q.v0=this.v0.toArray(),Q.v1=this.v1.toArray(),Q.v2=this.v2.toArray(),Q.v3=this.v3.toArray(),Q}fromJSON(Q){return super.fromJSON(Q),this.v0.fromArray(Q.v0),this.v1.fromArray(Q.v1),this.v2.fromArray(Q.v2),this.v3.fromArray(Q.v3),this}}class KZ extends h8{constructor(Q=new h0,Z=new h0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=Q,this.v2=Z}getPoint(Q,Z=new h0){let J=Z;if(Q===1)J.copy(this.v2);else J.copy(this.v2).sub(this.v1),J.multiplyScalar(Q).add(this.v1);return J}getPointAt(Q,Z){return this.getPoint(Q,Z)}getTangent(Q,Z=new h0){return Z.subVectors(this.v2,this.v1).normalize()}getTangentAt(Q,Z){return this.getTangent(Q,Z)}copy(Q){return super.copy(Q),this.v1.copy(Q.v1),this.v2.copy(Q.v2),this}toJSON(){let Q=super.toJSON();return Q.v1=this.v1.toArray(),Q.v2=this.v2.toArray(),Q}fromJSON(Q){return super.fromJSON(Q),this.v1.fromArray(Q.v1),this.v2.fromArray(Q.v2),this}}class hW extends h8{constructor(Q=new Q0,Z=new Q0){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=Q,this.v2=Z}getPoint(Q,Z=new Q0){let J=Z;if(Q===1)J.copy(this.v2);else J.copy(this.v2).sub(this.v1),J.multiplyScalar(Q).add(this.v1);return J}getPointAt(Q,Z){return this.getPoint(Q,Z)}getTangent(Q,Z=new Q0){return Z.subVectors(this.v2,this.v1).normalize()}getTangentAt(Q,Z){return this.getTangent(Q,Z)}copy(Q){return super.copy(Q),this.v1.copy(Q.v1),this.v2.copy(Q.v2),this}toJSON(){let Q=super.toJSON();return Q.v1=this.v1.toArray(),Q.v2=this.v2.toArray(),Q}fromJSON(Q){return super.fromJSON(Q),this.v1.fromArray(Q.v1),this.v2.fromArray(Q.v2),this}}class qZ extends h8{constructor(Q=new h0,Z=new h0,J=new h0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=Q,this.v1=Z,this.v2=J}getPoint(Q,Z=new h0){let J=Z,X=this.v0,H=this.v1,q=this.v2;return J.set(v6(Q,X.x,H.x,q.x),v6(Q,X.y,H.y,q.y)),J}copy(Q){return super.copy(Q),this.v0.copy(Q.v0),this.v1.copy(Q.v1),this.v2.copy(Q.v2),this}toJSON(){let Q=super.toJSON();return Q.v0=this.v0.toArray(),Q.v1=this.v1.toArray(),Q.v2=this.v2.toArray(),Q}fromJSON(Q){return super.fromJSON(Q),this.v0.fromArray(Q.v0),this.v1.fromArray(Q.v1),this.v2.fromArray(Q.v2),this}}class gW extends h8{constructor(Q=new Q0,Z=new Q0,J=new Q0){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=Q,this.v1=Z,this.v2=J}getPoint(Q,Z=new Q0){let J=Z,X=this.v0,H=this.v1,q=this.v2;return J.set(v6(Q,X.x,H.x,q.x),v6(Q,X.y,H.y,q.y),v6(Q,X.z,H.z,q.z)),J}copy(Q){return super.copy(Q),this.v0.copy(Q.v0),this.v1.copy(Q.v1),this.v2.copy(Q.v2),this}toJSON(){let Q=super.toJSON();return Q.v0=this.v0.toArray(),Q.v1=this.v1.toArray(),Q.v2=this.v2.toArray(),Q}fromJSON(Q){return super.fromJSON(Q),this.v0.fromArray(Q.v0),this.v1.fromArray(Q.v1),this.v2.fromArray(Q.v2),this}}class VZ extends h8{constructor(Q=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=Q}getPoint(Q,Z=new h0){let J=Z,X=this.points,H=(X.length-1)*Q,q=Math.floor(H),G=H-q,V=X[q===0?q:q-1],R=X[q],U=X[q>X.length-2?X.length-1:q+1],B=X[q>X.length-3?X.length-1:q+2];return J.set(QW(G,V.x,R.x,U.x,B.x),QW(G,V.y,R.y,U.y,B.y)),J}copy(Q){super.copy(Q),this.points=[];for(let Z=0,J=Q.points.length;Z<J;Z++){let X=Q.points[Z];this.points.push(X.clone())}return this}toJSON(){let Q=super.toJSON();Q.points=[];for(let Z=0,J=this.points.length;Z<J;Z++){let X=this.points[Z];Q.points.push(X.toArray())}return Q}fromJSON(Q){super.fromJSON(Q),this.points=[];for(let Z=0,J=Q.points.length;Z<J;Z++){let X=Q.points[Z];this.points.push(new h0().fromArray(X))}return this}}var gQ=Object.freeze({__proto__:null,ArcCurve:yW,CatmullRomCurve3:vW,CubicBezierCurve:HZ,CubicBezierCurve3:bW,EllipseCurve:d5,LineCurve:KZ,LineCurve3:hW,QuadraticBezierCurve:qZ,QuadraticBezierCurve3:gW,SplineCurve:VZ});class pW extends h8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(Q){this.curves.push(Q)}closePath(){let Q=this.curves[0].getPoint(0),Z=this.curves[this.curves.length-1].getPoint(1);if(!Q.equals(Z)){let J=Q.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gQ[J](Z,Q))}return this}getPoint(Q,Z){let J=Q*this.getLength(),X=this.getCurveLengths(),H=0;while(H<X.length){if(X[H]>=J){let q=X[H]-J,G=this.curves[H],V=G.getLength(),R=V===0?0:1-q/V;return G.getPointAt(R,Z)}H++}return null}getLength(){let Q=this.getCurveLengths();return Q[Q.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let Q=[],Z=0;for(let J=0,X=this.curves.length;J<X;J++)Z+=this.curves[J].getLength(),Q.push(Z);return this.cacheLengths=Q,Q}getSpacedPoints(Q=40){let Z=[];for(let J=0;J<=Q;J++)Z.push(this.getPoint(J/Q));if(this.autoClose)Z.push(Z[0]);return Z}getPoints(Q=12){let Z=[],J;for(let X=0,H=this.curves;X<H.length;X++){let q=H[X],G=q.isEllipseCurve?Q*2:q.isLineCurve||q.isLineCurve3?1:q.isSplineCurve?Q*q.points.length:Q,V=q.getPoints(G);for(let R=0;R<V.length;R++){let U=V[R];if(J&&J.equals(U))continue;Z.push(U),J=U}}if(this.autoClose&&Z.length>1&&!Z[Z.length-1].equals(Z[0]))Z.push(Z[0]);return Z}copy(Q){super.copy(Q),this.curves=[];for(let Z=0,J=Q.curves.length;Z<J;Z++){let X=Q.curves[Z];this.curves.push(X.clone())}return this.autoClose=Q.autoClose,this}toJSON(){let Q=super.toJSON();Q.autoClose=this.autoClose,Q.curves=[];for(let Z=0,J=this.curves.length;Z<J;Z++){let X=this.curves[Z];Q.curves.push(X.toJSON())}return Q}fromJSON(Q){super.fromJSON(Q),this.autoClose=Q.autoClose,this.curves=[];for(let Z=0,J=Q.curves.length;Z<J;Z++){let X=Q.curves[Z];this.curves.push(new gQ[X.type]().fromJSON(X))}return this}}class m6 extends pW{constructor(Q){super();if(this.type="Path",this.currentPoint=new h0,Q)this.setFromPoints(Q)}setFromPoints(Q){this.moveTo(Q[0].x,Q[0].y);for(let Z=1,J=Q.length;Z<J;Z++)this.lineTo(Q[Z].x,Q[Z].y);return this}moveTo(Q,Z){return this.currentPoint.set(Q,Z),this}lineTo(Q,Z){let J=new KZ(this.currentPoint.clone(),new h0(Q,Z));return this.curves.push(J),this.currentPoint.set(Q,Z),this}quadraticCurveTo(Q,Z,J,X){let H=new qZ(this.currentPoint.clone(),new h0(Q,Z),new h0(J,X));return this.curves.push(H),this.currentPoint.set(J,X),this}bezierCurveTo(Q,Z,J,X,H,q){let G=new HZ(this.currentPoint.clone(),new h0(Q,Z),new h0(J,X),new h0(H,q));return this.curves.push(G),this.currentPoint.set(H,q),this}splineThru(Q){let Z=[this.currentPoint.clone()].concat(Q),J=new VZ(Z);return this.curves.push(J),this.currentPoint.copy(Q[Q.length-1]),this}arc(Q,Z,J,X,H,q){let G=this.currentPoint.x,V=this.currentPoint.y;return this.absarc(Q+G,Z+V,J,X,H,q),this}absarc(Q,Z,J,X,H,q){return this.absellipse(Q,Z,J,J,X,H,q),this}ellipse(Q,Z,J,X,H,q,G,V){let R=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(Q+R,Z+U,J,X,H,q,G,V),this}absellipse(Q,Z,J,X,H,q,G,V){let R=new d5(Q,Z,J,X,H,q,G,V);if(this.curves.length>0){let B=R.getPoint(0);if(!B.equals(this.currentPoint))this.lineTo(B.x,B.y)}this.curves.push(R);let U=R.getPoint(1);return this.currentPoint.copy(U),this}copy(Q){return super.copy(Q),this.currentPoint.copy(Q.currentPoint),this}toJSON(){let Q=super.toJSON();return Q.currentPoint=this.currentPoint.toArray(),Q}fromJSON(Q){return super.fromJSON(Q),this.currentPoint.fromArray(Q.currentPoint),this}}class l5 extends m6{constructor(Q){super(Q);this.uuid=u8(),this.type="Shape",this.holes=[]}getPointsHoles(Q){let Z=[];for(let J=0,X=this.holes.length;J<X;J++)Z[J]=this.holes[J].getPoints(Q);return Z}extractPoints(Q){return{shape:this.getPoints(Q),holes:this.getPointsHoles(Q)}}copy(Q){super.copy(Q),this.holes=[];for(let Z=0,J=Q.holes.length;Z<J;Z++){let X=Q.holes[Z];this.holes.push(X.clone())}return this}toJSON(){let Q=super.toJSON();Q.uuid=this.uuid,Q.holes=[];for(let Z=0,J=this.holes.length;Z<J;Z++){let X=this.holes[Z];Q.holes.push(X.toJSON())}return Q}fromJSON(Q){super.fromJSON(Q),this.uuid=Q.uuid,this.holes=[];for(let Z=0,J=Q.holes.length;Z<J;Z++){let X=Q.holes[Z];this.holes.push(new m6().fromJSON(X))}return this}}var H1={triangulate:function(Q,Z,J=2){let X=Z&&Z.length,H=X?Z[0]*J:Q.length,q=mW(Q,0,H,J,!0),G=[];if(!q||q.next===q.prev)return G;let V,R,U,B,z,I,w;if(X)q=G1(Q,Z,q,J);if(Q.length>80*J){V=U=Q[0],R=B=Q[1];for(let j=J;j<H;j+=J){if(z=Q[j],I=Q[j+1],z<V)V=z;if(I<R)R=I;if(z>U)U=z;if(I>B)B=I}w=Math.max(U-V,B-R),w=w!==0?32767/w:0}return d6(q,G,J,V,R,w,0),G}};function mW(Q,Z,J,X,H){let q,G;if(H===M1(Q,Z,J,X)>0)for(q=Z;q<J;q+=X)G=ZW(q,Q[q],Q[q+1],G);else for(q=J-X;q>=Z;q-=X)G=ZW(q,Q[q],Q[q+1],G);if(G&&u5(G,G.next))u6(G),G=G.next;return G}function P9(Q,Z){if(!Q)return Q;if(!Z)Z=Q;let J=Q,X;do if(X=!1,!J.steiner&&(u5(J,J.next)||n7(J.prev,J,J.next)===0)){if(u6(J),J=Z=J.prev,J===J.next)break;X=!0}else J=J.next;while(X||J!==Z);return Z}function d6(Q,Z,J,X,H,q,G){if(!Q)return;if(!G&&q)_1(Q,X,H,q);let V=Q,R,U;while(Q.prev!==Q.next){if(R=Q.prev,U=Q.next,q?q1(Q,X,H,q):K1(Q)){Z.push(R.i/J|0),Z.push(Q.i/J|0),Z.push(U.i/J|0),u6(Q),Q=U.next,V=U.next;continue}if(Q=U,Q===V){if(!G)d6(P9(Q),Z,J,X,H,q,1);else if(G===1)Q=V1(P9(Q),Z,J),d6(Q,Z,J,X,H,q,2);else if(G===2)F1(Q,Z,J,X,H,q);break}}}function K1(Q){let Z=Q.prev,J=Q,X=Q.next;if(n7(Z,J,X)>=0)return!1;let H=Z.x,q=J.x,G=X.x,V=Z.y,R=J.y,U=X.y,B=H<q?H<G?H:G:q<G?q:G,z=V<R?V<U?V:U:R<U?R:U,I=H>q?H>G?H:G:q>G?q:G,w=V>R?V>U?V:U:R>U?R:U,j=X.next;while(j!==Z){if(j.x>=B&&j.x<=I&&j.y>=z&&j.y<=w&&Y6(H,V,q,R,G,U,j.x,j.y)&&n7(j.prev,j,j.next)>=0)return!1;j=j.next}return!0}function q1(Q,Z,J,X){let H=Q.prev,q=Q,G=Q.next;if(n7(H,q,G)>=0)return!1;let V=H.x,R=q.x,U=G.x,B=H.y,z=q.y,I=G.y,w=V<R?V<U?V:U:R<U?R:U,j=B<z?B<I?B:I:z<I?z:I,f=V>R?V>U?V:U:R>U?R:U,k=B>z?B>I?B:I:z>I?z:I,C=pQ(w,j,Z,J,X),v=pQ(f,k,Z,J,X),x=Q.prevZ,l=Q.nextZ;while(x&&x.z>=C&&l&&l.z<=v){if(x.x>=w&&x.x<=f&&x.y>=j&&x.y<=k&&x!==H&&x!==G&&Y6(V,B,R,z,U,I,x.x,x.y)&&n7(x.prev,x,x.next)>=0)return!1;if(x=x.prevZ,l.x>=w&&l.x<=f&&l.y>=j&&l.y<=k&&l!==H&&l!==G&&Y6(V,B,R,z,U,I,l.x,l.y)&&n7(l.prev,l,l.next)>=0)return!1;l=l.nextZ}while(x&&x.z>=C){if(x.x>=w&&x.x<=f&&x.y>=j&&x.y<=k&&x!==H&&x!==G&&Y6(V,B,R,z,U,I,x.x,x.y)&&n7(x.prev,x,x.next)>=0)return!1;x=x.prevZ}while(l&&l.z<=v){if(l.x>=w&&l.x<=f&&l.y>=j&&l.y<=k&&l!==H&&l!==G&&Y6(V,B,R,z,U,I,l.x,l.y)&&n7(l.prev,l,l.next)>=0)return!1;l=l.nextZ}return!0}function V1(Q,Z,J){let X=Q;do{let H=X.prev,q=X.next.next;if(!u5(H,q)&&dW(H,X,X.next,q)&&l6(H,q)&&l6(q,H))Z.push(H.i/J|0),Z.push(X.i/J|0),Z.push(q.i/J|0),u6(X),u6(X.next),X=Q=q;X=X.next}while(X!==Q);return P9(X)}function F1(Q,Z,J,X,H,q){let G=Q;do{let V=G.next.next;while(V!==G.prev){if(G.i!==V.i&&B1(G,V)){let R=lW(G,V);G=P9(G,G.next),R=P9(R,R.next),d6(G,Z,J,X,H,q,0),d6(R,Z,J,X,H,q,0);return}V=V.next}G=G.next}while(G!==Q)}function G1(Q,Z,J,X){let H=[],q,G,V,R,U;for(q=0,G=Z.length;q<G;q++){if(V=Z[q]*X,R=q<G-1?Z[q+1]*X:Q.length,U=mW(Q,V,R,X,!1),U===U.next)U.steiner=!0;H.push(E1(U))}H.sort(N1);for(q=0;q<H.length;q++)J=R1(H[q],J);return J}function N1(Q,Z){return Q.x-Z.x}function R1(Q,Z){let J=U1(Q,Z);if(!J)return Z;let X=lW(J,Q);return P9(X,X.next),P9(J,J.next)}function U1(Q,Z){let J=Z,X=-1/0,H,q=Q.x,G=Q.y;do{if(G<=J.y&&G>=J.next.y&&J.next.y!==J.y){let I=J.x+(G-J.y)*(J.next.x-J.x)/(J.next.y-J.y);if(I<=q&&I>X){if(X=I,H=J.x<J.next.x?J:J.next,I===q)return H}}J=J.next}while(J!==Z);if(!H)return null;let V=H,R=H.x,U=H.y,B=1/0,z;J=H;do{if(q>=J.x&&J.x>=R&&q!==J.x&&Y6(G<U?q:X,G,R,U,G<U?X:q,G,J.x,J.y)){if(z=Math.abs(G-J.y)/(q-J.x),l6(J,Q)&&(z<B||z===B&&(J.x>H.x||J.x===H.x&&D1(H,J))))H=J,B=z}J=J.next}while(J!==V);return H}function D1(Q,Z){return n7(Q.prev,Q,Z.prev)<0&&n7(Z.next,Q,Q.next)<0}function _1(Q,Z,J,X){let H=Q;do{if(H.z===0)H.z=pQ(H.x,H.y,Z,J,X);H.prevZ=H.prev,H.nextZ=H.next,H=H.next}while(H!==Q);H.prevZ.nextZ=null,H.prevZ=null,z1(H)}function z1(Q){let Z,J,X,H,q,G,V,R,U=1;do{J=Q,Q=null,q=null,G=0;while(J){G++,X=J,V=0;for(Z=0;Z<U;Z++)if(V++,X=X.nextZ,!X)break;R=U;while(V>0||R>0&&X){if(V!==0&&(R===0||!X||J.z<=X.z))H=J,J=J.nextZ,V--;else H=X,X=X.nextZ,R--;if(q)q.nextZ=H;else Q=H;H.prevZ=q,q=H}J=X}q.nextZ=null,U*=2}while(G>1);return Q}function pQ(Q,Z,J,X,H){return Q=(Q-J)*H|0,Z=(Z-X)*H|0,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,Z=(Z|Z<<8)&16711935,Z=(Z|Z<<4)&252645135,Z=(Z|Z<<2)&858993459,Z=(Z|Z<<1)&1431655765,Q|Z<<1}function E1(Q){let Z=Q,J=Q;do{if(Z.x<J.x||Z.x===J.x&&Z.y<J.y)J=Z;Z=Z.next}while(Z!==Q);return J}function Y6(Q,Z,J,X,H,q,G,V){return(H-G)*(Z-V)>=(Q-G)*(q-V)&&(Q-G)*(X-V)>=(J-G)*(Z-V)&&(J-G)*(q-V)>=(H-G)*(X-V)}function B1(Q,Z){return Q.next.i!==Z.i&&Q.prev.i!==Z.i&&!I1(Q,Z)&&(l6(Q,Z)&&l6(Z,Q)&&L1(Q,Z)&&(n7(Q.prev,Q,Z.prev)||n7(Q,Z.prev,Z))||u5(Q,Z)&&n7(Q.prev,Q,Q.next)>0&&n7(Z.prev,Z,Z.next)>0)}function n7(Q,Z,J){return(Z.y-Q.y)*(J.x-Z.x)-(Z.x-Q.x)*(J.y-Z.y)}function u5(Q,Z){return Q.x===Z.x&&Q.y===Z.y}function dW(Q,Z,J,X){let H=S5(n7(Q,Z,J)),q=S5(n7(Q,Z,X)),G=S5(n7(J,X,Q)),V=S5(n7(J,X,Z));if(H!==q&&G!==V)return!0;if(H===0&&T5(Q,J,Z))return!0;if(q===0&&T5(Q,X,Z))return!0;if(G===0&&T5(J,Q,X))return!0;if(V===0&&T5(J,Z,X))return!0;return!1}function T5(Q,Z,J){return Z.x<=Math.max(Q.x,J.x)&&Z.x>=Math.min(Q.x,J.x)&&Z.y<=Math.max(Q.y,J.y)&&Z.y>=Math.min(Q.y,J.y)}function S5(Q){return Q>0?1:Q<0?-1:0}function I1(Q,Z){let J=Q;do{if(J.i!==Q.i&&J.next.i!==Q.i&&J.i!==Z.i&&J.next.i!==Z.i&&dW(J,J.next,Q,Z))return!0;J=J.next}while(J!==Q);return!1}function l6(Q,Z){return n7(Q.prev,Q,Q.next)<0?n7(Q,Z,Q.next)>=0&&n7(Q,Q.prev,Z)>=0:n7(Q,Z,Q.prev)<0||n7(Q,Q.next,Z)<0}function L1(Q,Z){let J=Q,X=!1,H=(Q.x+Z.x)/2,q=(Q.y+Z.y)/2;do{if(J.y>q!==J.next.y>q&&J.next.y!==J.y&&H<(J.next.x-J.x)*(q-J.y)/(J.next.y-J.y)+J.x)X=!X;J=J.next}while(J!==Q);return X}function lW(Q,Z){let J=new mQ(Q.i,Q.x,Q.y),X=new mQ(Z.i,Z.x,Z.y),H=Q.next,q=Z.prev;return Q.next=Z,Z.prev=Q,J.next=H,H.prev=J,X.next=J,J.prev=X,q.next=X,X.prev=q,X}function ZW(Q,Z,J,X){let H=new mQ(Q,Z,J);if(!X)H.prev=H,H.next=H;else H.next=X.next,H.prev=X,X.next.prev=H,X.next=H;return H}function u6(Q){if(Q.next.prev=Q.prev,Q.prev.next=Q.next,Q.prevZ)Q.prevZ.nextZ=Q.nextZ;if(Q.nextZ)Q.nextZ.prevZ=Q.prevZ}function mQ(Q,Z,J){this.i=Q,this.x=Z,this.y=J,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M1(Q,Z,J,X){let H=0;for(let q=Z,G=J-X;q<J;q+=X)H+=(Q[G]-Q[q])*(Q[q+1]+Q[G+1]),G=q;return H}class h6{static area(Q){let Z=Q.length,J=0;for(let X=Z-1,H=0;H<Z;X=H++)J+=Q[X].x*Q[H].y-Q[H].x*Q[X].y;return J*0.5}static isClockWise(Q){return h6.area(Q)<0}static triangulateShape(Q,Z){let J=[],X=[],H=[];JW(Q),WW(J,Q);let q=Q.length;Z.forEach(JW);for(let V=0;V<Z.length;V++)X.push(q),q+=Z[V].length,WW(J,Z[V]);let G=H1.triangulate(J,X);for(let V=0;V<G.length;V+=3)H.push(G.slice(V,V+3));return H}}function JW(Q){let Z=Q.length;if(Z>2&&Q[Z-1].equals(Q[0]))Q.pop()}function WW(Q,Z){for(let J=0;J<Z.length;J++)Q.push(Z[J].x),Q.push(Z[J].y)}class c5 extends T8{constructor(Q=new l5([new h0(0.5,0.5),new h0(-0.5,0.5),new h0(-0.5,-0.5),new h0(0.5,-0.5)]),Z={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:Q,options:Z},Q=Array.isArray(Q)?Q:[Q];let J=this,X=[],H=[];for(let G=0,V=Q.length;G<V;G++){let R=Q[G];q(R)}this.setAttribute("position",new z8(X,3)),this.setAttribute("uv",new z8(H,2)),this.computeVertexNormals();function q(G){let V=[],R=Z.curveSegments!==void 0?Z.curveSegments:12,U=Z.steps!==void 0?Z.steps:1,B=Z.depth!==void 0?Z.depth:1,z=Z.bevelEnabled!==void 0?Z.bevelEnabled:!0,I=Z.bevelThickness!==void 0?Z.bevelThickness:0.2,w=Z.bevelSize!==void 0?Z.bevelSize:I-0.1,j=Z.bevelOffset!==void 0?Z.bevelOffset:0,f=Z.bevelSegments!==void 0?Z.bevelSegments:3,k=Z.extrudePath,C=Z.UVGenerator!==void 0?Z.UVGenerator:C1,v,x=!1,l,Z0,p,$0;if(k)v=k.getSpacedPoints(U),x=!0,z=!1,l=k.computeFrenetFrames(U,!1),Z0=new Q0,p=new Q0,$0=new Q0;if(!z)f=0,I=0,w=0,j=0;let z0=G.extractPoints(R),b=z0.shape,m=z0.holes;if(!h6.isClockWise(b)){b=b.reverse();for(let c=0,g0=m.length;c<g0;c++){let A0=m[c];if(h6.isClockWise(A0))m[c]=A0.reverse()}}let L0=h6.triangulateShape(b,m),S0=b;for(let c=0,g0=m.length;c<g0;c++){let A0=m[c];b=b.concat(A0)}function o(c,g0,A0){if(!g0)console.error("THREE.ExtrudeGeometry: vec does not exist");return c.clone().addScaledVector(g0,A0)}let e=b.length,D0=L0.length;function P0(c,g0,A0){let j0,E0,i0,M=c.x-g0.x,L=c.y-g0.y,_=A0.x-c.x,D=A0.y-c.y,P=M*M+L*L,g=M*D-L*_;if(Math.abs(g)>Number.EPSILON){let A=Math.sqrt(P),n=Math.sqrt(_*_+D*D),i=g0.x-L/A,X0=g0.y+M/A,r=A0.x-D/n,U0=A0.y+_/n,f0=((r-i)*D-(U0-X0)*_)/(M*D-L*_);j0=i+M*f0-c.x,E0=X0+L*f0-c.y;let H0=j0*j0+E0*E0;if(H0<=2)return new h0(j0,E0);else i0=Math.sqrt(H0/2)}else{let A=!1;if(M>Number.EPSILON){if(_>Number.EPSILON)A=!0}else if(M<-Number.EPSILON){if(_<-Number.EPSILON)A=!0}else if(Math.sign(L)===Math.sign(D))A=!0;if(A)j0=-L,E0=M,i0=Math.sqrt(P);else j0=M,E0=L,i0=Math.sqrt(P/2)}return new h0(j0/i0,E0/i0)}let a=[];for(let c=0,g0=S0.length,A0=g0-1,j0=c+1;c<g0;c++,A0++,j0++){if(A0===g0)A0=0;if(j0===g0)j0=0;a[c]=P0(S0[c],S0[A0],S0[j0])}let W0=[],C0,v0=a.concat();for(let c=0,g0=m.length;c<g0;c++){let A0=m[c];C0=[];for(let j0=0,E0=A0.length,i0=E0-1,M=j0+1;j0<E0;j0++,i0++,M++){if(i0===E0)i0=0;if(M===E0)M=0;C0[j0]=P0(A0[j0],A0[i0],A0[M])}W0.push(C0),v0=v0.concat(C0)}for(let c=0;c<f;c++){let g0=c/f,A0=I*Math.cos(g0*Math.PI/2),j0=w*Math.sin(g0*Math.PI/2)+j;for(let E0=0,i0=S0.length;E0<i0;E0++){let M=o(S0[E0],a[E0],j0);e0(M.x,M.y,-A0)}for(let E0=0,i0=m.length;E0<i0;E0++){let M=m[E0];C0=W0[E0];for(let L=0,_=M.length;L<_;L++){let D=o(M[L],C0[L],j0);e0(D.x,D.y,-A0)}}}let K0=w+j;for(let c=0;c<e;c++){let g0=z?o(b[c],v0[c],K0):b[c];if(!x)e0(g0.x,g0.y,0);else p.copy(l.normals[0]).multiplyScalar(g0.x),Z0.copy(l.binormals[0]).multiplyScalar(g0.y),$0.copy(v[0]).add(p).add(Z0),e0($0.x,$0.y,$0.z)}for(let c=1;c<=U;c++)for(let g0=0;g0<e;g0++){let A0=z?o(b[g0],v0[g0],K0):b[g0];if(!x)e0(A0.x,A0.y,B/U*c);else p.copy(l.normals[c]).multiplyScalar(A0.x),Z0.copy(l.binormals[c]).multiplyScalar(A0.y),$0.copy(v[c]).add(p).add(Z0),e0($0.x,$0.y,$0.z)}for(let c=f-1;c>=0;c--){let g0=c/f,A0=I*Math.cos(g0*Math.PI/2),j0=w*Math.sin(g0*Math.PI/2)+j;for(let E0=0,i0=S0.length;E0<i0;E0++){let M=o(S0[E0],a[E0],j0);e0(M.x,M.y,B+A0)}for(let E0=0,i0=m.length;E0<i0;E0++){let M=m[E0];C0=W0[E0];for(let L=0,_=M.length;L<_;L++){let D=o(M[L],C0[L],j0);if(!x)e0(D.x,D.y,B+A0);else e0(D.x,D.y+v[U-1].y,v[U-1].x+A0)}}}M0(),s0();function M0(){let c=X.length/3;if(z){let g0=0,A0=e*g0;for(let j0=0;j0<D0;j0++){let E0=L0[j0];J7(E0[2]+A0,E0[1]+A0,E0[0]+A0)}g0=U+f*2,A0=e*g0;for(let j0=0;j0<D0;j0++){let E0=L0[j0];J7(E0[0]+A0,E0[1]+A0,E0[2]+A0)}}else{for(let g0=0;g0<D0;g0++){let A0=L0[g0];J7(A0[2],A0[1],A0[0])}for(let g0=0;g0<D0;g0++){let A0=L0[g0];J7(A0[0]+e*U,A0[1]+e*U,A0[2]+e*U)}}J.addGroup(c,X.length/3-c,0)}function s0(){let c=X.length/3,g0=0;l0(S0,g0),g0+=S0.length;for(let A0=0,j0=m.length;A0<j0;A0++){let E0=m[A0];l0(E0,g0),g0+=E0.length}J.addGroup(c,X.length/3-c,1)}function l0(c,g0){let A0=c.length;while(--A0>=0){let j0=A0,E0=A0-1;if(E0<0)E0=c.length-1;for(let i0=0,M=U+f*2;i0<M;i0++){let L=e*i0,_=e*(i0+1),D=g0+j0+L,P=g0+E0+L,g=g0+E0+_,A=g0+j0+_;H7(D,P,g,A)}}}function e0(c,g0,A0){V.push(c),V.push(g0),V.push(A0)}function J7(c,g0,A0){u0(c),u0(g0),u0(A0);let j0=X.length/3,E0=C.generateTopUV(J,X,j0-3,j0-2,j0-1);X7(E0[0]),X7(E0[1]),X7(E0[2])}function H7(c,g0,A0,j0){u0(c),u0(g0),u0(j0),u0(g0),u0(A0),u0(j0);let E0=X.length/3,i0=C.generateSideWallUV(J,X,E0-6,E0-3,E0-2,E0-1);X7(i0[0]),X7(i0[1]),X7(i0[3]),X7(i0[1]),X7(i0[2]),X7(i0[3])}function u0(c){X.push(V[c*3+0]),X.push(V[c*3+1]),X.push(V[c*3+2])}function X7(c){H.push(c.x),H.push(c.y)}}}copy(Q){return super.copy(Q),this.parameters=Object.assign({},Q.parameters),this}toJSON(){let Q=super.toJSON(),Z=this.parameters.shapes,J=this.parameters.options;return k1(Z,J,Q)}static fromJSON(Q,Z){let J=[];for(let H=0,q=Q.shapes.length;H<q;H++){let G=Z[Q.shapes[H]];J.push(G)}let X=Q.options.extrudePath;if(X!==void 0)Q.options.extrudePath=new gQ[X.type]().fromJSON(X);return new c5(J,Q.options)}}var C1={generateTopUV:function(Q,Z,J,X,H){let q=Z[J*3],G=Z[J*3+1],V=Z[X*3],R=Z[X*3+1],U=Z[H*3],B=Z[H*3+1];return[new h0(q,G),new h0(V,R),new h0(U,B)]},generateSideWallUV:function(Q,Z,J,X,H,q){let G=Z[J*3],V=Z[J*3+1],R=Z[J*3+2],U=Z[X*3],B=Z[X*3+1],z=Z[X*3+2],I=Z[H*3],w=Z[H*3+1],j=Z[H*3+2],f=Z[q*3],k=Z[q*3+1],C=Z[q*3+2];if(Math.abs(V-B)<Math.abs(G-U))return[new h0(G,1-R),new h0(U,1-z),new h0(I,1-j),new h0(f,1-C)];else return[new h0(V,1-R),new h0(B,1-z),new h0(w,1-j),new h0(k,1-C)]}};function k1(Q,Z,J){if(J.shapes=[],Array.isArray(Q))for(let X=0,H=Q.length;X<H;X++){let q=Q[X];J.shapes.push(q.uuid)}else J.shapes.push(Q.uuid);if(J.options=Object.assign({},Z),Z.extrudePath!==void 0)J.options.extrudePath=Z.extrudePath.toJSON();return J}class FZ extends _9{constructor(Q){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new L7(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new L7(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new h0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(Q)}copy(Q){return super.copy(Q),this.defines={STANDARD:""},this.color.copy(Q.color),this.roughness=Q.roughness,this.metalness=Q.metalness,this.map=Q.map,this.lightMap=Q.lightMap,this.lightMapIntensity=Q.lightMapIntensity,this.aoMap=Q.aoMap,this.aoMapIntensity=Q.aoMapIntensity,this.emissive.copy(Q.emissive),this.emissiveMap=Q.emissiveMap,this.emissiveIntensity=Q.emissiveIntensity,this.bumpMap=Q.bumpMap,this.bumpScale=Q.bumpScale,this.normalMap=Q.normalMap,this.normalMapType=Q.normalMapType,this.normalScale.copy(Q.normalScale),this.displacementMap=Q.displacementMap,this.displacementScale=Q.displacementScale,this.displacementBias=Q.displacementBias,this.roughnessMap=Q.roughnessMap,this.metalnessMap=Q.metalnessMap,this.alphaMap=Q.alphaMap,this.envMap=Q.envMap,this.envMapIntensity=Q.envMapIntensity,this.wireframe=Q.wireframe,this.wireframeLinewidth=Q.wireframeLinewidth,this.wireframeLinecap=Q.wireframeLinecap,this.wireframeLinejoin=Q.wireframeLinejoin,this.flatShading=Q.flatShading,this.fog=Q.fog,this}}function j5(Q,Z,J){if(!Q||!J&&Q.constructor===Z)return Q;if(typeof Z.BYTES_PER_ELEMENT==="number")return new Z(Q);return Array.prototype.slice.call(Q)}function O1(Q){return ArrayBuffer.isView(Q)&&!(Q instanceof DataView)}class i6{constructor(Q,Z,J,X){this.parameterPositions=Q,this._cachedIndex=0,this.resultBuffer=X!==void 0?X:new Z.constructor(J),this.sampleValues=Z,this.valueSize=J,this.settings=null,this.DefaultSettings_={}}evaluate(Q){let Z=this.parameterPositions,J=this._cachedIndex,X=Z[J],H=Z[J-1];Q:{Z:{let q;J:{W:if(!(Q<X)){for(let G=J+2;;){if(X===void 0){if(Q<H)break W;return J=Z.length,this._cachedIndex=J,this.copySampleValue_(J-1)}if(J===G)break;if(H=X,X=Z[++J],Q<X)break Z}q=Z.length;break J}if(!(Q>=H)){let G=Z[1];if(Q<G)J=2,H=G;for(let V=J-2;;){if(H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(J===V)break;if(X=H,H=Z[--J-1],Q>=H)break Z}q=J,J=0;break J}break Q}while(J<q){let G=J+q>>>1;if(Q<Z[G])q=G;else J=G+1}if(X=Z[J],H=Z[J-1],H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(X===void 0)return J=Z.length,this._cachedIndex=J,this.copySampleValue_(J-1)}this._cachedIndex=J,this.intervalChanged_(J,H,X)}return this.interpolate_(J,H,Q,X)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(Q){let Z=this.resultBuffer,J=this.sampleValues,X=this.valueSize,H=Q*X;for(let q=0;q!==X;++q)Z[q]=J[H+q];return Z}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class uW extends i6{constructor(Q,Z,J,X){super(Q,Z,J,X);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(Q,Z,J){let X=this.parameterPositions,H=Q-2,q=Q+1,G=X[H],V=X[q];if(G===void 0)switch(this.getSettings_().endingStart){case 2401:H=Q,G=2*Z-J;break;case 2402:H=X.length-2,G=Z+X[H]-X[H+1];break;default:H=Q,G=J}if(V===void 0)switch(this.getSettings_().endingEnd){case 2401:q=Q,V=2*J-Z;break;case 2402:q=1,V=J+X[1]-X[0];break;default:q=Q-1,V=Z}let R=(J-Z)*0.5,U=this.valueSize;this._weightPrev=R/(Z-G),this._weightNext=R/(V-J),this._offsetPrev=H*U,this._offsetNext=q*U}interpolate_(Q,Z,J,X){let H=this.resultBuffer,q=this.sampleValues,G=this.valueSize,V=Q*G,R=V-G,U=this._offsetPrev,B=this._offsetNext,z=this._weightPrev,I=this._weightNext,w=(J-Z)/(X-Z),j=w*w,f=j*w,k=-z*f+2*z*j-z*w,C=(1+z)*f+(-1.5-2*z)*j+(-0.5+z)*w+1,v=(-1-I)*f+(1.5+I)*j+0.5*w,x=I*f-I*j;for(let l=0;l!==G;++l)H[l]=k*q[U+l]+C*q[R+l]+v*q[V+l]+x*q[B+l];return H}}class cW extends i6{constructor(Q,Z,J,X){super(Q,Z,J,X)}interpolate_(Q,Z,J,X){let H=this.resultBuffer,q=this.sampleValues,G=this.valueSize,V=Q*G,R=V-G,U=(J-Z)/(X-Z),B=1-U;for(let z=0;z!==G;++z)H[z]=q[R+z]*B+q[V+z]*U;return H}}class sW extends i6{constructor(Q,Z,J,X){super(Q,Z,J,X)}interpolate_(Q){return this.copySampleValue_(Q-1)}}class s8{constructor(Q,Z,J,X){if(Q===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Z===void 0||Z.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+Q);this.name=Q,this.times=j5(Z,this.TimeBufferType),this.values=j5(J,this.ValueBufferType),this.setInterpolation(X||this.DefaultInterpolation)}static toJSON(Q){let Z=Q.constructor,J;if(Z.toJSON!==this.toJSON)J=Z.toJSON(Q);else{J={name:Q.name,times:j5(Q.times,Array),values:j5(Q.values,Array)};let X=Q.getInterpolation();if(X!==Q.DefaultInterpolation)J.interpolation=X}return J.type=Q.ValueTypeName,J}InterpolantFactoryMethodDiscrete(Q){return new sW(this.times,this.values,this.getValueSize(),Q)}InterpolantFactoryMethodLinear(Q){return new cW(this.times,this.values,this.getValueSize(),Q)}InterpolantFactoryMethodSmooth(Q){return new uW(this.times,this.values,this.getValueSize(),Q)}setInterpolation(Q){let Z;switch(Q){case 2300:Z=this.InterpolantFactoryMethodDiscrete;break;case 2301:Z=this.InterpolantFactoryMethodLinear;break;case 2302:Z=this.InterpolantFactoryMethodSmooth;break}if(Z===void 0){let J="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(Q!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(J);return console.warn("THREE.KeyframeTrack:",J),this}return this.createInterpolant=Z,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(Q){if(Q!==0){let Z=this.times;for(let J=0,X=Z.length;J!==X;++J)Z[J]+=Q}return this}scale(Q){if(Q!==1){let Z=this.times;for(let J=0,X=Z.length;J!==X;++J)Z[J]*=Q}return this}trim(Q,Z){let J=this.times,X=J.length,H=0,q=X-1;while(H!==X&&J[H]<Q)++H;while(q!==-1&&J[q]>Z)--q;if(++q,H!==0||q!==X){if(H>=q)q=Math.max(q,1),H=q-1;let G=this.getValueSize();this.times=J.slice(H,q),this.values=this.values.slice(H*G,q*G)}return this}validate(){let Q=!0,Z=this.getValueSize();if(Z-Math.floor(Z)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),Q=!1;let J=this.times,X=this.values,H=J.length;if(H===0)console.error("THREE.KeyframeTrack: Track is empty.",this),Q=!1;let q=null;for(let G=0;G!==H;G++){let V=J[G];if(typeof V==="number"&&isNaN(V)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,G,V),Q=!1;break}if(q!==null&&q>V){console.error("THREE.KeyframeTrack: Out of order keys.",this,G,V,q),Q=!1;break}q=V}if(X!==void 0){if(O1(X))for(let G=0,V=X.length;G!==V;++G){let R=X[G];if(isNaN(R)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,G,R),Q=!1;break}}}return Q}optimize(){let Q=this.times.slice(),Z=this.values.slice(),J=this.getValueSize(),X=this.getInterpolation()===2302,H=Q.length-1,q=1;for(let G=1;G<H;++G){let V=!1,R=Q[G],U=Q[G+1];if(R!==U&&(G!==1||R!==Q[0]))if(!X){let B=G*J,z=B-J,I=B+J;for(let w=0;w!==J;++w){let j=Z[B+w];if(j!==Z[z+w]||j!==Z[I+w]){V=!0;break}}}else V=!0;if(V){if(G!==q){Q[q]=Q[G];let B=G*J,z=q*J;for(let I=0;I!==J;++I)Z[z+I]=Z[B+I]}++q}}if(H>0){Q[q]=Q[H];for(let G=H*J,V=q*J,R=0;R!==J;++R)Z[V+R]=Z[G+R];++q}if(q!==Q.length)this.times=Q.slice(0,q),this.values=Z.slice(0,q*J);else this.times=Q,this.values=Z;return this}clone(){let Q=this.times.slice(),Z=this.values.slice(),X=new this.constructor(this.name,Q,Z);return X.createInterpolant=this.createInterpolant,X}}s8.prototype.TimeBufferType=Float32Array;s8.prototype.ValueBufferType=Float32Array;s8.prototype.DefaultInterpolation=2301;class F6 extends s8{}F6.prototype.ValueTypeName="bool";F6.prototype.ValueBufferType=Array;F6.prototype.DefaultInterpolation=2300;F6.prototype.InterpolantFactoryMethodLinear=void 0;F6.prototype.InterpolantFactoryMethodSmooth=void 0;class nW extends s8{}nW.prototype.ValueTypeName="color";class iW extends s8{}iW.prototype.ValueTypeName="number";class oW extends i6{constructor(Q,Z,J,X){super(Q,Z,J,X)}interpolate_(Q,Z,J,X){let H=this.resultBuffer,q=this.sampleValues,G=this.valueSize,V=(J-Z)/(X-Z),R=Q*G;for(let U=R+G;R!==U;R+=4)c8.slerpFlat(H,0,q,R-G,q,R,V);return H}}class s5 extends s8{InterpolantFactoryMethodLinear(Q){return new oW(this.times,this.values,this.getValueSize(),Q)}}s5.prototype.ValueTypeName="quaternion";s5.prototype.DefaultInterpolation=2301;s5.prototype.InterpolantFactoryMethodSmooth=void 0;class G6 extends s8{}G6.prototype.ValueTypeName="string";G6.prototype.ValueBufferType=Array;G6.prototype.DefaultInterpolation=2300;G6.prototype.InterpolantFactoryMethodLinear=void 0;G6.prototype.InterpolantFactoryMethodSmooth=void 0;class aW extends s8{}aW.prototype.ValueTypeName="vector";class rW{constructor(Q,Z,J){let X=this,H=!1,q=0,G=0,V=void 0,R=[];this.onStart=void 0,this.onLoad=Q,this.onProgress=Z,this.onError=J,this.itemStart=function(U){if(G++,H===!1){if(X.onStart!==void 0)X.onStart(U,q,G)}H=!0},this.itemEnd=function(U){if(q++,X.onProgress!==void 0)X.onProgress(U,q,G);if(q===G){if(H=!1,X.onLoad!==void 0)X.onLoad()}},this.itemError=function(U){if(X.onError!==void 0)X.onError(U)},this.resolveURL=function(U){if(V)return V(U);return U},this.setURLModifier=function(U){return V=U,this},this.addHandler=function(U,B){return R.push(U,B),this},this.removeHandler=function(U){let B=R.indexOf(U);if(B!==-1)R.splice(B,2);return this},this.getHandler=function(U){for(let B=0,z=R.length;B<z;B+=2){let I=R[B],w=R[B+1];if(I.global)I.lastIndex=0;if(I.test(U))return w}return null}}}var w1=new rW;class tW{constructor(Q){this.manager=Q!==void 0?Q:w1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(Q,Z){let J=this;return new Promise(function(X,H){J.load(Q,X,Z,H)})}parse(){}setCrossOrigin(Q){return this.crossOrigin=Q,this}setWithCredentials(Q){return this.withCredentials=Q,this}setPath(Q){return this.path=Q,this}setResourcePath(Q){return this.resourcePath=Q,this}setRequestHeader(Q){return this.requestHeader=Q,this}}tW.DEFAULT_MATERIAL_NAME="__DEFAULT";class GZ extends Z8{constructor(Q,Z=1){super();this.isLight=!0,this.type="Light",this.color=new L7(Q),this.intensity=Z}dispose(){}copy(Q,Z){return super.copy(Q,Z),this.color.copy(Q.color),this.intensity=Q.intensity,this}toJSON(Q){let Z=super.toJSON(Q);if(Z.object.color=this.color.getHex(),Z.object.intensity=this.intensity,this.groundColor!==void 0)Z.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Z.object.distance=this.distance;if(this.angle!==void 0)Z.object.angle=this.angle;if(this.decay!==void 0)Z.object.decay=this.decay;if(this.penumbra!==void 0)Z.object.penumbra=this.penumbra;if(this.shadow!==void 0)Z.object.shadow=this.shadow.toJSON();return Z}}class NZ extends GZ{constructor(Q,Z,J){super(Q,J);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Z8.DEFAULT_UP),this.updateMatrix(),this.groundColor=new L7(Z)}copy(Q,Z){return super.copy(Q,Z),this.groundColor.copy(Q.groundColor),this}}var yQ=new o7,$W=new Q0,XW=new Q0;class eW{constructor(Q){this.camera=Q,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new h0(512,512),this.map=null,this.mapPass=null,this.matrix=new o7,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new h5,this._frameExtents=new h0(1,1),this._viewportCount=1,this._viewports=[new Y8(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(Q){let Z=this.camera,J=this.matrix;$W.setFromMatrixPosition(Q.matrixWorld),Z.position.copy($W),XW.setFromMatrixPosition(Q.target.matrixWorld),Z.lookAt(XW),Z.updateMatrixWorld(),yQ.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yQ),J.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),J.multiply(yQ)}getViewport(Q){return this._viewports[Q]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(Q){return this.camera=Q.camera.clone(),this.bias=Q.bias,this.radius=Q.radius,this.mapSize.copy(Q.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let Q={};if(this.bias!==0)Q.bias=this.bias;if(this.normalBias!==0)Q.normalBias=this.normalBias;if(this.radius!==1)Q.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)Q.mapSize=this.mapSize.toArray();return Q.camera=this.camera.toJSON(!1).object,delete Q.camera.matrix,Q}}class Q$ extends eW{constructor(){super(new tQ(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class RZ extends GZ{constructor(Q,Z){super(Q,Z);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Z8.DEFAULT_UP),this.updateMatrix(),this.target=new Z8,this.shadow=new Q$}dispose(){this.shadow.dispose()}copy(Q){return super.copy(Q),this.target=Q.target.clone(),this.shadow=Q.shadow.clone(),this}}var UZ="\\[\\]\\.:\\/",P1=new RegExp("["+UZ+"]","g"),DZ="[^"+UZ+"]",A1="[^"+UZ.replace("\\.","")+"]",T1=/((?:WC+[\/:])*)/.source.replace("WC",DZ),S1=/(WCOD+)?/.source.replace("WCOD",A1),j1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",DZ),f1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",DZ),x1=new RegExp("^"+T1+S1+j1+f1+"$"),y1=["material","materials","bones","map"];class Z${constructor(Q,Z,J){let X=J||g7.parseTrackName(Z);this._targetGroup=Q,this._bindings=Q.subscribe_(Z,X)}getValue(Q,Z){this.bind();let J=this._targetGroup.nCachedObjects_,X=this._bindings[J];if(X!==void 0)X.getValue(Q,Z)}setValue(Q,Z){let J=this._bindings;for(let X=this._targetGroup.nCachedObjects_,H=J.length;X!==H;++X)J[X].setValue(Q,Z)}bind(){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,J=Q.length;Z!==J;++Z)Q[Z].bind()}unbind(){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,J=Q.length;Z!==J;++Z)Q[Z].unbind()}}class g7{constructor(Q,Z,J){this.path=Z,this.parsedPath=J||g7.parseTrackName(Z),this.node=g7.findNode(Q,this.parsedPath.nodeName),this.rootNode=Q,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(Q,Z,J){if(!(Q&&Q.isAnimationObjectGroup))return new g7(Q,Z,J);else return new g7.Composite(Q,Z,J)}static sanitizeNodeName(Q){return Q.replace(/\s/g,"_").replace(P1,"")}static parseTrackName(Q){let Z=x1.exec(Q);if(Z===null)throw Error("PropertyBinding: Cannot parse trackName: "+Q);let J={nodeName:Z[2],objectName:Z[3],objectIndex:Z[4],propertyName:Z[5],propertyIndex:Z[6]},X=J.nodeName&&J.nodeName.lastIndexOf(".");if(X!==void 0&&X!==-1){let H=J.nodeName.substring(X+1);if(y1.indexOf(H)!==-1)J.nodeName=J.nodeName.substring(0,X),J.objectName=H}if(J.propertyName===null||J.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+Q);return J}static findNode(Q,Z){if(Z===void 0||Z===""||Z==="."||Z===-1||Z===Q.name||Z===Q.uuid)return Q;if(Q.skeleton){let J=Q.skeleton.getBoneByName(Z);if(J!==void 0)return J}if(Q.children){let J=function(H){for(let q=0;q<H.length;q++){let G=H[q];if(G.name===Z||G.uuid===Z)return G;let V=J(G.children);if(V)return V}return null},X=J(Q.children);if(X)return X}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(Q,Z){Q[Z]=this.targetObject[this.propertyName]}_getValue_array(Q,Z){let J=this.resolvedProperty;for(let X=0,H=J.length;X!==H;++X)Q[Z++]=J[X]}_getValue_arrayElement(Q,Z){Q[Z]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(Q,Z){this.resolvedProperty.toArray(Q,Z)}_setValue_direct(Q,Z){this.targetObject[this.propertyName]=Q[Z]}_setValue_direct_setNeedsUpdate(Q,Z){this.targetObject[this.propertyName]=Q[Z],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(Q,Z){this.targetObject[this.propertyName]=Q[Z],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(Q,Z){let J=this.resolvedProperty;for(let X=0,H=J.length;X!==H;++X)J[X]=Q[Z++]}_setValue_array_setNeedsUpdate(Q,Z){let J=this.resolvedProperty;for(let X=0,H=J.length;X!==H;++X)J[X]=Q[Z++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(Q,Z){let J=this.resolvedProperty;for(let X=0,H=J.length;X!==H;++X)J[X]=Q[Z++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(Q,Z){this.resolvedProperty[this.propertyIndex]=Q[Z]}_setValue_arrayElement_setNeedsUpdate(Q,Z){this.resolvedProperty[this.propertyIndex]=Q[Z],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(Q,Z){this.resolvedProperty[this.propertyIndex]=Q[Z],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(Q,Z){this.resolvedProperty.fromArray(Q,Z)}_setValue_fromArray_setNeedsUpdate(Q,Z){this.resolvedProperty.fromArray(Q,Z),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(Q,Z){this.resolvedProperty.fromArray(Q,Z),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(Q,Z){this.bind(),this.getValue(Q,Z)}_setValue_unbound(Q,Z){this.bind(),this.setValue(Q,Z)}bind(){let Q=this.node,Z=this.parsedPath,J=Z.objectName,X=Z.propertyName,H=Z.propertyIndex;if(!Q)Q=g7.findNode(this.rootNode,Z.nodeName),this.node=Q;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!Q){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(J){let R=Z.objectIndex;switch(J){case"materials":if(!Q.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!Q.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}Q=Q.material.materials;break;case"bones":if(!Q.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}Q=Q.skeleton.bones;for(let U=0;U<Q.length;U++)if(Q[U].name===R){R=U;break}break;case"map":if("map"in Q){Q=Q.map;break}if(!Q.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!Q.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}Q=Q.material.map;break;default:if(Q[J]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}Q=Q[J]}if(R!==void 0){if(Q[R]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,Q);return}Q=Q[R]}}let q=Q[X];if(q===void 0){let R=Z.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+R+"."+X+" but it wasn't found.",Q);return}let G=this.Versioning.None;if(this.targetObject=Q,Q.needsUpdate!==void 0)G=this.Versioning.NeedsUpdate;else if(Q.matrixWorldNeedsUpdate!==void 0)G=this.Versioning.MatrixWorldNeedsUpdate;let V=this.BindingType.Direct;if(H!==void 0){if(X==="morphTargetInfluences"){if(!Q.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!Q.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(Q.morphTargetDictionary[H]!==void 0)H=Q.morphTargetDictionary[H]}V=this.BindingType.ArrayElement,this.resolvedProperty=q,this.propertyIndex=H}else if(q.fromArray!==void 0&&q.toArray!==void 0)V=this.BindingType.HasFromToArray,this.resolvedProperty=q;else if(Array.isArray(q))V=this.BindingType.EntireArray,this.resolvedProperty=q;else this.propertyName=X;this.getValue=this.GetterByBindingType[V],this.setValue=this.SetterByBindingTypeAndVersioning[V][G]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}g7.Composite=Z$;g7.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};g7.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};g7.prototype.GetterByBindingType=[g7.prototype._getValue_direct,g7.prototype._getValue_array,g7.prototype._getValue_arrayElement,g7.prototype._getValue_toArray];g7.prototype.SetterByBindingTypeAndVersioning=[[g7.prototype._setValue_direct,g7.prototype._setValue_direct_setNeedsUpdate,g7.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[g7.prototype._setValue_array,g7.prototype._setValue_array_setNeedsUpdate,g7.prototype._setValue_array_setMatrixWorldNeedsUpdate],[g7.prototype._setValue_arrayElement,g7.prototype._setValue_arrayElement_setNeedsUpdate,g7.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[g7.prototype._setValue_fromArray,g7.prototype._setValue_fromArray_setNeedsUpdate,g7.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var h1=new Float32Array(1);class _Z{constructor(Q,Z,J=0,X=1/0){this.ray=new q6(Q,Z),this.near=J,this.far=X,this.camera=null,this.layers=new b5,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(Q,Z){this.ray.set(Q,Z)}setFromCamera(Q,Z){if(Z.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Z.matrixWorld),this.ray.direction.set(Q.x,Q.y,0.5).unproject(Z).sub(this.ray.origin).normalize(),this.camera=Z;else if(Z.isOrthographicCamera)this.ray.origin.set(Q.x,Q.y,(Z.near+Z.far)/(Z.near-Z.far)).unproject(Z),this.ray.direction.set(0,0,-1).transformDirection(Z.matrixWorld),this.camera=Z;else console.error("THREE.Raycaster: Unsupported camera type: "+Z.type)}intersectObject(Q,Z=!0,J=[]){return dQ(Q,this,J,Z),J.sort(YW),J}intersectObjects(Q,Z=!0,J=[]){for(let X=0,H=Q.length;X<H;X++)dQ(Q[X],this,J,Z);return J.sort(YW),J}}function YW(Q,Z){return Q.distance-Z.distance}function dQ(Q,Z,J,X){if(Q.layers.test(Z.layers))Q.raycast(Z,J);if(X===!0){let H=Q.children;for(let q=0,G=H.length;q<G;q++)dQ(H[q],Z,J,!0)}}class n5{constructor(Q=1,Z=0,J=0){return this.radius=Q,this.phi=Z,this.theta=J,this}set(Q,Z,J){return this.radius=Q,this.phi=Z,this.theta=J,this}copy(Q){return this.radius=Q.radius,this.phi=Q.phi,this.theta=Q.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(Q){return this.setFromCartesianCoords(Q.x,Q.y,Q.z)}setFromCartesianCoords(Q,Z,J){if(this.radius=Math.sqrt(Q*Q+Z*Z+J*J),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(Q,J),this.phi=Math.acos(X8(Z/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class zZ extends xW{constructor(Q=10,Z=10,J=4473924,X=8947848){J=new L7(J),X=new L7(X);let H=Z/2,q=Q/Z,G=Q/2,V=[],R=[];for(let z=0,I=0,w=-G;z<=Z;z++,w+=q){V.push(-G,0,w,G,0,w),V.push(w,0,-G,w,0,G);let j=z===H?J:X;j.toArray(R,I),I+=3,j.toArray(R,I),I+=3,j.toArray(R,I),I+=3,j.toArray(R,I),I+=3}let U=new T8;U.setAttribute("position",new z8(V,3)),U.setAttribute("color",new z8(R,3));let B=new $Z({vertexColors:!0,toneMapped:!1});super(U,B);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="160";var J$={type:"change"},EZ={type:"start"},W$={type:"end"},i5=new q6,$$=new A8,v1=Math.cos(70*KW.DEG2RAD);class BZ extends J9{constructor(Q,Z){super();this.object=Q,this.domElement=Z,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q0,this.cursor=new Q0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:A9.ROTATE,MIDDLE:A9.DOLLY,RIGHT:A9.PAN},this.touches={ONE:T9.ROTATE,TWO:T9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return G.phi},this.getAzimuthalAngle=function(){return G.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(u){u.addEventListener("keydown",A),this._domElementKeyEvents=u},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){J.target0.copy(J.target),J.position0.copy(J.object.position),J.zoom0=J.object.zoom},this.reset=function(){J.target.copy(J.target0),J.object.position.copy(J.position0),J.object.zoom=J.zoom0,J.object.updateProjectionMatrix(),J.dispatchEvent(J$),J.update(),H=X.NONE},this.update=function(){let u=new Q0,B0=new c8().setFromUnitVectors(Q.up,new Q0(0,1,0)),m0=B0.clone().invert(),T0=new Q0,p0=new c8,t0=new Q0,a0=2*Math.PI;return function(c0=null){let _0=J.object.position;if(u.copy(_0).sub(J.target),u.applyQuaternion(B0),G.setFromVector3(u),J.autoRotate&&H===X.NONE)m(z0(c0));if(J.enableDamping)G.theta+=V.theta*J.dampingFactor,G.phi+=V.phi*J.dampingFactor;else G.theta+=V.theta,G.phi+=V.phi;let{minAzimuthAngle:s,maxAzimuthAngle:I0}=J;if(isFinite(s)&&isFinite(I0)){if(s<-Math.PI)s+=a0;else if(s>Math.PI)s-=a0;if(I0<-Math.PI)I0+=a0;else if(I0>Math.PI)I0-=a0;if(s<=I0)G.theta=Math.max(s,Math.min(I0,G.theta));else G.theta=G.theta>(s+I0)/2?Math.max(s,G.theta):Math.min(I0,G.theta)}if(G.phi=Math.max(J.minPolarAngle,Math.min(J.maxPolarAngle,G.phi)),G.makeSafe(),J.enableDamping===!0)J.target.addScaledVector(U,J.dampingFactor);else J.target.add(U);if(J.target.sub(J.cursor),J.target.clampLength(J.minTargetRadius,J.maxTargetRadius),J.target.add(J.cursor),J.zoomToCursor&&Z0||J.object.isOrthographicCamera)G.radius=a(G.radius);else G.radius=a(G.radius*R);if(u.setFromSpherical(G),u.applyQuaternion(m0),_0.copy(J.target).add(u),J.object.lookAt(J.target),J.enableDamping===!0)V.theta*=1-J.dampingFactor,V.phi*=1-J.dampingFactor,U.multiplyScalar(1-J.dampingFactor);else V.set(0,0,0),U.set(0,0,0);let w0=!1;if(J.zoomToCursor&&Z0){let b0=null;if(J.object.isPerspectiveCamera){let d0=u.length();b0=a(d0*R);let $7=d0-b0;J.object.position.addScaledVector(x,$7),J.object.updateMatrixWorld()}else if(J.object.isOrthographicCamera){let d0=new Q0(l.x,l.y,0);d0.unproject(J.object),J.object.zoom=Math.max(J.minZoom,Math.min(J.maxZoom,J.object.zoom/R)),J.object.updateProjectionMatrix(),w0=!0;let $7=new Q0(l.x,l.y,0);$7.unproject(J.object),J.object.position.sub($7).add(d0),J.object.updateMatrixWorld(),b0=u.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),J.zoomToCursor=!1;if(b0!==null)if(this.screenSpacePanning)J.target.set(0,0,-1).transformDirection(J.object.matrix).multiplyScalar(b0).add(J.object.position);else if(i5.origin.copy(J.object.position),i5.direction.set(0,0,-1).transformDirection(J.object.matrix),Math.abs(J.object.up.dot(i5.direction))<v1)Q.lookAt(J.target);else $$.setFromNormalAndCoplanarPoint(J.object.up,J.target),i5.intersectPlane($$,J.target)}else if(J.object.isOrthographicCamera)J.object.zoom=Math.max(J.minZoom,Math.min(J.maxZoom,J.object.zoom/R)),J.object.updateProjectionMatrix(),w0=!0;if(R=1,Z0=!1,w0||T0.distanceToSquared(J.object.position)>q||8*(1-p0.dot(J.object.quaternion))>q||t0.distanceToSquared(J.target)>0)return J.dispatchEvent(J$),T0.copy(J.object.position),p0.copy(J.object.quaternion),t0.copy(J.target),!0;return!1}}(),this.dispose=function(){if(J.domElement.removeEventListener("contextmenu",X0),J.domElement.removeEventListener("pointerdown",M),J.domElement.removeEventListener("pointercancel",_),J.domElement.removeEventListener("wheel",g),J.domElement.removeEventListener("pointermove",L),J.domElement.removeEventListener("pointerup",_),J._domElementKeyEvents!==null)J._domElementKeyEvents.removeEventListener("keydown",A),J._domElementKeyEvents=null};let J=this,X={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},H=X.NONE,q=0.000001,G=new n5,V=new n5,R=1,U=new Q0,B=new h0,z=new h0,I=new h0,w=new h0,j=new h0,f=new h0,k=new h0,C=new h0,v=new h0,x=new Q0,l=new h0,Z0=!1,p=[],$0={};function z0(u){if(u!==null)return 2*Math.PI/60*J.autoRotateSpeed*u;else return 2*Math.PI/60/60*J.autoRotateSpeed}function b(u){let B0=Math.abs(u)/(100*(window.devicePixelRatio|0));return Math.pow(0.95,J.zoomSpeed*B0)}function m(u){V.theta-=u}function q0(u){V.phi-=u}let L0=function(){let u=new Q0;return function(m0,T0){u.setFromMatrixColumn(T0,0),u.multiplyScalar(-m0),U.add(u)}}(),S0=function(){let u=new Q0;return function(m0,T0){if(J.screenSpacePanning===!0)u.setFromMatrixColumn(T0,1);else u.setFromMatrixColumn(T0,0),u.crossVectors(J.object.up,u);u.multiplyScalar(m0),U.add(u)}}(),o=function(){let u=new Q0;return function(m0,T0){let p0=J.domElement;if(J.object.isPerspectiveCamera){let t0=J.object.position;u.copy(t0).sub(J.target);let a0=u.length();a0*=Math.tan(J.object.fov/2*Math.PI/180),L0(2*m0*a0/p0.clientHeight,J.object.matrix),S0(2*T0*a0/p0.clientHeight,J.object.matrix)}else if(J.object.isOrthographicCamera)L0(m0*(J.object.right-J.object.left)/J.object.zoom/p0.clientWidth,J.object.matrix),S0(T0*(J.object.top-J.object.bottom)/J.object.zoom/p0.clientHeight,J.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),J.enablePan=!1}}();function e(u){if(J.object.isPerspectiveCamera||J.object.isOrthographicCamera)R/=u;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),J.enableZoom=!1}function D0(u){if(J.object.isPerspectiveCamera||J.object.isOrthographicCamera)R*=u;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),J.enableZoom=!1}function P0(u,B0){if(!J.zoomToCursor)return;Z0=!0;let m0=J.domElement.getBoundingClientRect(),T0=u-m0.left,p0=B0-m0.top,t0=m0.width,a0=m0.height;l.x=T0/t0*2-1,l.y=-(p0/a0)*2+1,x.set(l.x,l.y,1).unproject(J.object).sub(J.object.position).normalize()}function a(u){return Math.max(J.minDistance,Math.min(J.maxDistance,u))}function W0(u){B.set(u.clientX,u.clientY)}function C0(u){P0(u.clientX,u.clientX),k.set(u.clientX,u.clientY)}function v0(u){w.set(u.clientX,u.clientY)}function K0(u){z.set(u.clientX,u.clientY),I.subVectors(z,B).multiplyScalar(J.rotateSpeed);let B0=J.domElement;m(2*Math.PI*I.x/B0.clientHeight),q0(2*Math.PI*I.y/B0.clientHeight),B.copy(z),J.update()}function M0(u){if(C.set(u.clientX,u.clientY),v.subVectors(C,k),v.y>0)e(b(v.y));else if(v.y<0)D0(b(v.y));k.copy(C),J.update()}function s0(u){j.set(u.clientX,u.clientY),f.subVectors(j,w).multiplyScalar(J.panSpeed),o(f.x,f.y),w.copy(j),J.update()}function l0(u){if(P0(u.clientX,u.clientY),u.deltaY<0)D0(b(u.deltaY));else if(u.deltaY>0)e(b(u.deltaY));J.update()}function e0(u){let B0=!1;switch(u.code){case J.keys.UP:if(u.ctrlKey||u.metaKey||u.shiftKey)q0(2*Math.PI*J.rotateSpeed/J.domElement.clientHeight);else o(0,J.keyPanSpeed);B0=!0;break;case J.keys.BOTTOM:if(u.ctrlKey||u.metaKey||u.shiftKey)q0(-2*Math.PI*J.rotateSpeed/J.domElement.clientHeight);else o(0,-J.keyPanSpeed);B0=!0;break;case J.keys.LEFT:if(u.ctrlKey||u.metaKey||u.shiftKey)m(2*Math.PI*J.rotateSpeed/J.domElement.clientHeight);else o(J.keyPanSpeed,0);B0=!0;break;case J.keys.RIGHT:if(u.ctrlKey||u.metaKey||u.shiftKey)m(-2*Math.PI*J.rotateSpeed/J.domElement.clientHeight);else o(-J.keyPanSpeed,0);B0=!0;break}if(B0)u.preventDefault(),J.update()}function J7(u){if(p.length===1)B.set(u.pageX,u.pageY);else{let B0=H0(u),m0=0.5*(u.pageX+B0.x),T0=0.5*(u.pageY+B0.y);B.set(m0,T0)}}function H7(u){if(p.length===1)w.set(u.pageX,u.pageY);else{let B0=H0(u),m0=0.5*(u.pageX+B0.x),T0=0.5*(u.pageY+B0.y);w.set(m0,T0)}}function u0(u){let B0=H0(u),m0=u.pageX-B0.x,T0=u.pageY-B0.y,p0=Math.sqrt(m0*m0+T0*T0);k.set(0,p0)}function X7(u){if(J.enableZoom)u0(u);if(J.enablePan)H7(u)}function c(u){if(J.enableZoom)u0(u);if(J.enableRotate)J7(u)}function g0(u){if(p.length==1)z.set(u.pageX,u.pageY);else{let m0=H0(u),T0=0.5*(u.pageX+m0.x),p0=0.5*(u.pageY+m0.y);z.set(T0,p0)}I.subVectors(z,B).multiplyScalar(J.rotateSpeed);let B0=J.domElement;m(2*Math.PI*I.x/B0.clientHeight),q0(2*Math.PI*I.y/B0.clientHeight),B.copy(z)}function A0(u){if(p.length===1)j.set(u.pageX,u.pageY);else{let B0=H0(u),m0=0.5*(u.pageX+B0.x),T0=0.5*(u.pageY+B0.y);j.set(m0,T0)}f.subVectors(j,w).multiplyScalar(J.panSpeed),o(f.x,f.y),w.copy(j)}function j0(u){let B0=H0(u),m0=u.pageX-B0.x,T0=u.pageY-B0.y,p0=Math.sqrt(m0*m0+T0*T0);C.set(0,p0),v.set(0,Math.pow(C.y/k.y,J.zoomSpeed)),e(v.y),k.copy(C);let t0=(u.pageX+B0.x)*0.5,a0=(u.pageY+B0.y)*0.5;P0(t0,a0)}function E0(u){if(J.enableZoom)j0(u);if(J.enablePan)A0(u)}function i0(u){if(J.enableZoom)j0(u);if(J.enableRotate)g0(u)}function M(u){if(J.enabled===!1)return;if(p.length===0)J.domElement.setPointerCapture(u.pointerId),J.domElement.addEventListener("pointermove",L),J.domElement.addEventListener("pointerup",_);if(r(u),u.pointerType==="touch")n(u);else D(u)}function L(u){if(J.enabled===!1)return;if(u.pointerType==="touch")i(u);else P(u)}function _(u){if(U0(u),p.length===0)J.domElement.releasePointerCapture(u.pointerId),J.domElement.removeEventListener("pointermove",L),J.domElement.removeEventListener("pointerup",_);J.dispatchEvent(W$),H=X.NONE}function D(u){let B0;switch(u.button){case 0:B0=J.mouseButtons.LEFT;break;case 1:B0=J.mouseButtons.MIDDLE;break;case 2:B0=J.mouseButtons.RIGHT;break;default:B0=-1}switch(B0){case A9.DOLLY:if(J.enableZoom===!1)return;C0(u),H=X.DOLLY;break;case A9.ROTATE:if(u.ctrlKey||u.metaKey||u.shiftKey){if(J.enablePan===!1)return;v0(u),H=X.PAN}else{if(J.enableRotate===!1)return;W0(u),H=X.ROTATE}break;case A9.PAN:if(u.ctrlKey||u.metaKey||u.shiftKey){if(J.enableRotate===!1)return;W0(u),H=X.ROTATE}else{if(J.enablePan===!1)return;v0(u),H=X.PAN}break;default:H=X.NONE}if(H!==X.NONE)J.dispatchEvent(EZ)}function P(u){switch(H){case X.ROTATE:if(J.enableRotate===!1)return;K0(u);break;case X.DOLLY:if(J.enableZoom===!1)return;M0(u);break;case X.PAN:if(J.enablePan===!1)return;s0(u);break}}function g(u){if(J.enabled===!1||J.enableZoom===!1||H!==X.NONE)return;u.preventDefault(),J.dispatchEvent(EZ),l0(u),J.dispatchEvent(W$)}function A(u){if(J.enabled===!1||J.enablePan===!1)return;e0(u)}function n(u){switch(f0(u),p.length){case 1:switch(J.touches.ONE){case T9.ROTATE:if(J.enableRotate===!1)return;J7(u),H=X.TOUCH_ROTATE;break;case T9.PAN:if(J.enablePan===!1)return;H7(u),H=X.TOUCH_PAN;break;default:H=X.NONE}break;case 2:switch(J.touches.TWO){case T9.DOLLY_PAN:if(J.enableZoom===!1&&J.enablePan===!1)return;X7(u),H=X.TOUCH_DOLLY_PAN;break;case T9.DOLLY_ROTATE:if(J.enableZoom===!1&&J.enableRotate===!1)return;c(u),H=X.TOUCH_DOLLY_ROTATE;break;default:H=X.NONE}break;default:H=X.NONE}if(H!==X.NONE)J.dispatchEvent(EZ)}function i(u){switch(f0(u),H){case X.TOUCH_ROTATE:if(J.enableRotate===!1)return;g0(u),J.update();break;case X.TOUCH_PAN:if(J.enablePan===!1)return;A0(u),J.update();break;case X.TOUCH_DOLLY_PAN:if(J.enableZoom===!1&&J.enablePan===!1)return;E0(u),J.update();break;case X.TOUCH_DOLLY_ROTATE:if(J.enableZoom===!1&&J.enableRotate===!1)return;i0(u),J.update();break;default:H=X.NONE}}function X0(u){if(J.enabled===!1)return;u.preventDefault()}function r(u){p.push(u.pointerId)}function U0(u){delete $0[u.pointerId];for(let B0=0;B0<p.length;B0++)if(p[B0]==u.pointerId){p.splice(B0,1);return}}function f0(u){let B0=$0[u.pointerId];if(B0===void 0)B0=new h0,$0[u.pointerId]=B0;B0.set(u.pageX,u.pageY)}function H0(u){let B0=u.pointerId===p[0]?p[1]:p[0];return $0[B0]}J.domElement.addEventListener("contextmenu",X0),J.domElement.addEventListener("pointerdown",M),J.domElement.addEventListener("pointercancel",_),J.domElement.addEventListener("wheel",g,{passive:!1}),this.update()}}function X$(Q,Z=0.0001){Z=Math.max(Z,Number.EPSILON);let J={},X=Q.getIndex(),H=Q.getAttribute("position"),q=X?X.count:H.count,G=0,V=Object.keys(Q.attributes),R={},U={},B=[],z=["getX","getY","getZ","getW"],I=["setX","setY","setZ","setW"];for(let v=0,x=V.length;v<x;v++){let l=V[v],Z0=Q.attributes[l];R[l]=new q8(new Z0.array.constructor(Z0.count*Z0.itemSize),Z0.itemSize,Z0.normalized);let p=Q.morphAttributes[l];if(p)U[l]=new q8(new p.array.constructor(p.count*p.itemSize),p.itemSize,p.normalized)}let w=Z*0.5,j=Math.log10(1/Z),f=Math.pow(10,j),k=w*f;for(let v=0;v<q;v++){let x=X?X.getX(v):v,l="";for(let Z0=0,p=V.length;Z0<p;Z0++){let $0=V[Z0],z0=Q.getAttribute($0),b=z0.itemSize;for(let m=0;m<b;m++)l+=`${~~(z0[z[m]](x)*f+k)},`}if(l in J)B.push(J[l]);else{for(let Z0=0,p=V.length;Z0<p;Z0++){let $0=V[Z0],z0=Q.getAttribute($0),b=Q.morphAttributes[$0],m=z0.itemSize,q0=R[$0],L0=U[$0];for(let S0=0;S0<m;S0++){let o=z[S0],e=I[S0];if(q0[e](G,z0[o](x)),b)for(let D0=0,P0=b.length;D0<P0;D0++)L0[D0][e](G,b[D0][o](x))}}J[l]=G,B.push(G),G++}}let C=Q.clone();for(let v in Q.attributes){let x=R[v];if(C.setAttribute(v,new q8(x.array.slice(0,G*x.itemSize),x.itemSize,x.normalized)),!(v in U))continue;for(let l=0;l<U[v].length;l++){let Z0=U[v][l];C.morphAttributes[v][l]=new q8(Z0.array.slice(0,G*Z0.itemSize),Z0.itemSize,Z0.normalized)}}return C.setIndex(B),C}var q$=HJ(H$(),1),V$=HJ(K$(),1);window.modelLibraries={THREE:{Box3:D9,CanvasTexture:XZ,Plane:A8,Raycaster:_Z,Sprite:WZ,SpriteMaterial:m5,SRGBColorSpace:HW,Color:L7,DirectionalLight:RZ,ExtrudeGeometry:c5,GridHelper:zZ,Group:w9,HemisphereLight:NZ,Mesh:b8,MeshStandardMaterial:FZ,Path:m6,PerspectiveCamera:B8,PlaneGeometry:n6,Scene:ZZ,Shape:l5,Vector2:h0,Vector3:Q0,WebGLRenderer:p5},OrbitControls:BZ,mergeVertices:X$,opentype:q$.default,polygonClipping:V$.default};})();
