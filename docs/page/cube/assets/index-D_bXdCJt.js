(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="178",Jn={ROTATE:0,DOLLY:1,PAN:2},td=0,Lc=1,ed=2,au=1,nd=2,qn=3,gi=0,ze=1,Ln=2,di=0,Ss=1,Ic=2,Uc=3,Nc=4,id=5,Ni=100,sd=101,rd=102,ad=103,od=104,ld=200,cd=201,hd=202,ud=203,Oo=204,Fo=205,fd=206,dd=207,pd=208,md=209,_d=210,gd=211,vd=212,xd=213,Sd=214,Bo=0,zo=1,ko=2,As=3,Ho=4,Vo=5,Go=6,Wo=7,ou=0,yd=1,Md=2,pi=0,Ed=1,bd=2,Td=3,wd=4,Ad=5,Cd=6,Rd=7,lu=300,Cs=301,Rs=302,Xo=303,Yo=304,Pa=306,qo=1e3,Bi=1001,Zo=1002,Mn=1003,Pd=1004,Pr=1005,Un=1006,Va=1007,zi=1008,Fn=1009,cu=1010,hu=1011,lr=1012,Vl=1013,Xi=1014,$n=1015,br=1016,Gl=1017,Wl=1018,cr=1020,uu=35902,fu=1021,du=1022,yn=1023,hr=1026,ur=1027,pu=1028,Xl=1029,mu=1030,Yl=1031,ql=1033,ca=33776,ha=33777,ua=33778,fa=33779,Ko=35840,$o=35841,jo=35842,Jo=35843,Qo=36196,tl=37492,el=37496,nl=37808,il=37809,sl=37810,rl=37811,al=37812,ol=37813,ll=37814,cl=37815,hl=37816,ul=37817,fl=37818,dl=37819,pl=37820,ml=37821,da=36492,_l=36494,gl=36495,_u=36283,vl=36284,xl=36285,Sl=36286,Dd=3200,Ld=3201,Id=0,Ud=1,ci="",hn="srgb",Ps="srgb-linear",va="linear",jt="srgb",ts=7680,Oc=519,Nd=512,Od=513,Fd=514,gu=515,Bd=516,zd=517,kd=518,Hd=519,Fc=35044,Bc="300 es",jn=2e3,xa=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const tr=Math.PI/180,fr=180/Math.PI;function $i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[s&255]+Ae[s>>8&255]+Ae[s>>16&255]+Ae[s>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Ft(s,t,e){return Math.max(t,Math.min(e,s))}function Zl(s,t){return(s%t+t)%t}function Vd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Gd(s,t,e){return s!==t?(e-s)/(t-s):0}function er(s,t,e){return(1-e)*s+e*t}function Wd(s,t,e,n){return er(s,t,1-Math.exp(-e*n))}function Xd(s,t=1){return t-Math.abs(Zl(s,t*2)-t)}function Yd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function qd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Zd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Kd(s,t){return s+Math.random()*(t-s)}function $d(s){return s*(.5-Math.random())}function jd(s){s!==void 0&&(zc=s);let t=zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jd(s){return s*tr}function Qd(s){return s*fr}function tp(s){return(s&s-1)===0&&s!==0}function ep(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function np(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ip(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _s(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kc={DEG2RAD:tr,RAD2DEG:fr,generateUUID:$i,clamp:Ft,euclideanModulo:Zl,mapLinear:Vd,inverseLerp:Gd,lerp:er,damp:Wd,pingpong:Xd,smoothstep:Yd,smootherstep:qd,randInt:Zd,randFloat:Kd,randFloatSpread:$d,seededRandom:jd,degToRad:Jd,radToDeg:Qd,isPowerOfTwo:tp,ceilPowerOfTwo:ep,floorPowerOfTwo:np,setQuaternionFromProperEuler:ip,normalize:Ie,denormalize:_s};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*_,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const w=Math.sqrt(M),A=Math.atan2(w,p*b);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const v=a*b;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new L,Hc=new zs;class Ut{constructor(t,e,n,i,r,o,a,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],M=i[4],v=i[7],w=i[2],A=i[5],T=i[8];return r[0]=o*_+a*b+l*w,r[3]=o*m+a*M+l*A,r[6]=o*p+a*v+l*T,r[1]=c*_+h*b+u*w,r[4]=c*m+h*M+u*A,r[7]=c*p+h*v+u*T,r[2]=f*_+d*b+g*w,r[5]=f*m+d*M+g*A,r[8]=f*p+d*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new Ut;function vu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sp(){const s=Sa("canvas");return s.style.display="block",s}const Vc={};function ys(s){s in Vc||(Vc[s]=!0,console.warn(s))}function rp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ap(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function op(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Gc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){const s={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===jt&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===jt&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?va:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ps]:{primaries:t,whitePoint:n,transfer:va,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),s}const Vt=lp();function Qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let es;class cp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=Sa("canvas")),es.width=t.width,es.height=t.height;const i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hp=0;class Kl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xa(i[o].image)):r.push(Xa(i[o]))}else r=Xa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let up=0;const Ya=new L;class ke extends Ki{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Bi,i=Bi,r=Un,o=zi,a=yn,l=Fn,c=ke.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=$i(),this.name="",this.source=new Kl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=lu;ke.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(d+1)/2,w=(p+1)/2,A=(h+f)/4,T=(u+_)/4,R=(g+m)/4;return M>v&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=T/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=R/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fp extends Ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new ke(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Kl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends fp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xu extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dp extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Lr.subVectors(this.max,Gs),ns.subVectors(t.a,Gs),is.subVectors(t.b,Gs),ss.subVectors(t.c,Gs),ni.subVectors(is,ns),ii.subVectors(ss,is),bi.subVectors(ns,ss);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!qa(e,ns,is,ss,Lr)||(e=[1,0,0,0,1,0,0,0,1],!qa(e,ns,is,ss,Lr))?!1:(Ir.crossVectors(ni,ii),e=[Ir.x,Ir.y,Ir.z],qa(e,ns,is,ss,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new L,new L,new L,new L,new L,new L,new L,new L],gn=new L,Dr=new Tr,ns=new L,is=new L,ss=new L,ni=new L,ii=new L,bi=new L,Gs=new L,Lr=new L,Ir=new L,Ti=new L;function qa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ti.fromArray(s,r);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const pp=new Tr,Ws=new L,Za=new L;class Da{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Za)),this.expandByPoint(Ws.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Gn=new L,Ka=new L,Ur=new L,si=new L,$a=new L,Nr=new L,ja=new L;class Su{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ka.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Ka);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ur),a=si.dot(this.direction),l=-si.dot(Ur),c=si.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ka).addScaledVector(Ur,f),d}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,r){$a.subVectors(e,t),Nr.subVectors(n,t),ja.crossVectors($a,Nr);let o=this.direction.dot(ja),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);const l=a*this.direction.dot(Nr.crossVectors(si,Nr));if(l<0)return null;const c=a*this.direction.dot($a.cross(si));if(c<0||l+c>o)return null;const h=-a*si.dot(ja);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mp,t,_p)}lookAt(t,e,n){const i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ri.crossVectors(n,Ze),ri.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ri.crossVectors(n,Ze)),ri.normalize(),Or.crossVectors(Ze,ri),i[0]=ri.x,i[4]=Or.x,i[8]=Ze.x,i[1]=ri.y,i[5]=Or.y,i[9]=Ze.y,i[2]=ri.z,i[6]=Or.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],M=n[7],v=n[11],w=n[15],A=i[0],T=i[4],R=i[8],x=i[12],y=i[1],P=i[5],F=i[9],O=i[13],G=i[2],W=i[6],V=i[10],q=i[14],H=i[3],nt=i[7],lt=i[11],_t=i[15];return r[0]=o*A+a*y+l*G+c*H,r[4]=o*T+a*P+l*W+c*nt,r[8]=o*R+a*F+l*V+c*lt,r[12]=o*x+a*O+l*q+c*_t,r[1]=h*A+u*y+f*G+d*H,r[5]=h*T+u*P+f*W+d*nt,r[9]=h*R+u*F+f*V+d*lt,r[13]=h*x+u*O+f*q+d*_t,r[2]=g*A+_*y+m*G+p*H,r[6]=g*T+_*P+m*W+p*nt,r[10]=g*R+_*F+m*V+p*lt,r[14]=g*x+_*O+m*q+p*_t,r[3]=b*A+M*y+v*G+w*H,r[7]=b*T+M*P+v*W+w*nt,r[11]=b*R+M*F+v*V+w*lt,r[15]=b*x+M*O+v*q+w*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,M=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,w=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,A=e*b+n*M+i*v+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=b*T,t[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*T,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*T,t[4]=M*T,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*T,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*T,t[8]=v*T,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*T,t[12]=w*T,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=l*c,M=l*h,v=l*u,w=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*w,i[1]=(d+v)*w,i[2]=(g-M)*w,i[3]=0,i[4]=(d-v)*A,i[5]=(1-(f+p))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+M)*T,i[9]=(m-b)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=rs.set(i[0],i[1],i[2]).length();const o=rs.set(i[4],i[5],i[6]).length(),a=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const c=1/r,h=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=jn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===jn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=jn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h;let g,_;if(a===jn)g=(o+r)*u,_=-2*u;else if(a===xa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rs=new L,vn=new ae,mp=new L(0,0,0),_p=new L(1,1,1),ri=new L,Or=new L,Ze=new L,Xc=new ae,Yc=new zs;class Ne{constructor(t=0,e=0,n=0,i=Ne.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ne.DEFAULT_ORDER="XYZ";class yu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gp=0;const qc=new L,as=new zs,Wn=new ae,Fr=new L,Xs=new L,vp=new L,xp=new zs,Zc=new L(1,0,0),Kc=new L(0,1,0),$c=new L(0,0,1),jc={type:"added"},Sp={type:"removed"},os={type:"childadded",child:null},Ja={type:"childremoved",child:null};class Se extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new L,e=new Ne,n=new zs,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ut}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Xs,Fr,this.up):Wn.lookAt(Fr,Xs,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),as.setFromRotationMatrix(Wn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),Ja.child=t,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new L(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new L,Xn=new L,Qa=new L,Yn=new L,ls=new L,cs=new L,Jc=new L,to=new L,eo=new L,no=new L,io=new pe,so=new pe,ro=new pe;class Sn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){xn.subVectors(i,e),Xn.subVectors(n,e),Qa.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(Xn),l=xn.dot(Qa),c=Xn.dot(Xn),h=Xn.dot(Qa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return io.setScalar(0),so.setScalar(0),ro.setScalar(0),io.fromBufferAttribute(t,e),so.fromBufferAttribute(t,n),ro.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(io,r.x),o.addScaledVector(so,r.y),o.addScaledVector(ro,r.z),o}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),Xn.subVectors(t,e),xn.cross(Xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),xn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ls.subVectors(i,n),cs.subVectors(r,n),to.subVectors(t,n);const l=ls.dot(to),c=cs.dot(to);if(l<=0&&c<=0)return e.copy(n);eo.subVectors(t,i);const h=ls.dot(eo),u=cs.dot(eo);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ls,o);no.subVectors(t,r);const d=ls.dot(no),g=cs.dot(no);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(cs,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Jc.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Jc,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Br={h:0,s:0,l:0};function ao(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}let Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Vt.workingColorSpace){if(t=Zl(t,1),e=Ft(e,0,1),n=Ft(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ao(o,r,t+1/3),this.g=ao(o,r,t),this.b=ao(o,r,t-1/3)}return Vt.colorSpaceToWorking(this,i),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=Mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Vt.workingToColorSpace(Ce.copy(this),t),Math.round(Ft(Ce.r*255,0,255))*65536+Math.round(Ft(Ce.g*255,0,255))*256+Math.round(Ft(Ce.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.workingToColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,r=Ce.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Vt.workingColorSpace){return Vt.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=hn){Vt.workingToColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Br);const n=er(ai.h,Br.h,e),i=er(ai.s,Br.s,e),r=er(ai.l,Br.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ce=new Zt;Zt.NAMES=Mu;let yp=0;class wr extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Ss,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Fo,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dr extends wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new L,zr=new ht;let Mp=0;class On{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}}class Eu extends On{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bu extends On{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends On{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ep=0;const on=new ae,oo=new Se,hs=new L,Ke=new Tr,Ys=new Tr,be=new L;class En extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vu(t)?bu:Eu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Ke.min,Ys.min),Ke.expandByPoint(be),be.addVectors(Ke.max,Ys.max),Ke.expandByPoint(be)):(Ke.expandByPoint(Ys.min),Ke.expandByPoint(Ys.max))}Ke.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),be.add(hs)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;const c=new L,h=new L,u=new L,f=new ht,d=new ht,g=new ht,_=new L,m=new L;function p(R,x,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(_),a[x].add(_),a[y].add(_),l[R].add(m),l[x].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,x=b.length;R<x;++R){const y=b[R],P=y.start,F=y.count;for(let O=P,G=P+F;O<G;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new L,v=new L,w=new L,A=new L;function T(R){w.fromBufferAttribute(i,R),A.copy(w);const x=a[R];M.copy(x),M.sub(w.multiplyScalar(w.dot(x))).normalize(),v.crossVectors(A,x);const P=v.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,x=b.length;R<x;++R){const y=b[R],P=y.start,F=y.count;for(let O=P,G=P+F;O<G;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new On(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new En,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qc=new ae,wi=new Su,kr=new Da,th=new L,Hr=new L,Vr=new L,Gr=new L,lo=new L,Wr=new L,eh=new L,Xr=new L;class Qe extends Se{constructor(t=new En,e=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(lo.fromBufferAttribute(u,t),o?Wr.addScaledVector(lo,h):Wr.addScaledVector(lo.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(kr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(kr,th)===null||wi.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,w=M;v<w;v+=3){const A=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);i=Yr(this,p,t,n,c,h,u,A,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=Yr(this,o,t,n,c,h,u,b,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,w=M;v<w;v+=3){const A=v,T=v+1,R=v+2;i=Yr(this,p,t,n,c,h,u,A,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,M=m+1,v=m+2;i=Yr(this,o,t,n,c,h,u,b,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function bp(s,t,e,n,i,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===gi,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Xr);return c<e.near||c>e.far?null:{distance:c,point:Xr.clone(),object:s}}function Yr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Hr),s.getVertexPosition(l,Vr),s.getVertexPosition(c,Gr);const h=bp(s,t,e,n,Hr,Vr,Gr,eh);if(h){const u=new L;Sn.getBarycoord(eh,Hr,Vr,Gr,u),i&&(h.uv=Sn.getInterpolatedAttribute(i,a,l,c,u,new ht)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};Sn.getNormal(Hr,Vr,Gr,f.normal),h.face=f,h.barycoord=u}return h}class ks extends En{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2));function g(_,m,p,b,M,v,w,A,T,R,x){const y=v/T,P=w/R,F=v/2,O=w/2,G=A/2,W=T+1,V=R+1;let q=0,H=0;const nt=new L;for(let lt=0;lt<V;lt++){const _t=lt*P-O;for(let Pt=0;Pt<W;Pt++){const qt=Pt*y-F;nt[_]=qt*b,nt[m]=_t*M,nt[p]=G,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Pt/T),u.push(1-lt/R),q+=1}}for(let lt=0;lt<R;lt++)for(let _t=0;_t<T;_t++){const Pt=f+_t+W*lt,qt=f+_t+W*(lt+1),X=f+(_t+1)+W*(lt+1),et=f+(_t+1)+W*lt;l.push(Pt,qt,et),l.push(qt,X,et),H+=6}a.addGroup(d,H,x),d+=H,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){const t={};for(let e=0;e<s.length;e++){const n=Ds(s[e]);for(const i in n)t[i]=n[i]}return t}function Tp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Tu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const wp={clone:Ds,merge:Ue};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wu extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new L,nh=new ht,ih=new ht;class un extends wu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,nh,ih),e.subVectors(ih,nh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,fs=1;class Rp extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(us,fs,t,e);i.layers=this.layers,this.add(i);const r=new un(us,fs,t,e);r.layers=this.layers,this.add(r);const o=new un(us,fs,t,e);o.layers=this.layers,this.add(o);const a=new un(us,fs,t,e);a.layers=this.layers,this.add(a);const l=new un(us,fs,t,e);l.layers=this.layers,this.add(l);const c=new un(us,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Au extends ke{constructor(t=[],e=Cs,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pp extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Au(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ks(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:di});r.uniforms.tEquirect.value=e;const o=new Qe(i,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=Un),new Rp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}let qr=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Dp={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Lp extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ne,this.environmentIntensity=1,this.environmentRotation=new Ne,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ho=new L,Ip=new L,Up=new Ut;class Li{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ho.subVectors(n,e).cross(Ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Up.getNormalMatrix(t),i=this.coplanarPoint(ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Da,Np=new ht(.5,.5),Zr=new L;class $l{constructor(t=new Li,e=new Li,n=new Li,i=new Li,r=new Li,o=new Li){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+h,m+g,v+b).normalize(),n[3].setComponents(l-o,f-h,m-g,v-b).normalize(),n[4].setComponents(l-a,f-u,m-_,v-M).normalize(),e===jn)n[5].setComponents(l+a,f+u,m+_,v+M).normalize();else if(e===xa)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){Ai.center.set(0,0,0);const e=Np.distanceTo(t.center);return Ai.radius=.7071067811865476+e,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Zr.x=i.normal.x>0?t.max.x:t.min.x,Zr.y=i.normal.y>0?t.max.y:t.min.y,Zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cu extends wr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ya=new L,Ma=new L,sh=new ae,qs=new Su,Kr=new Da,uo=new L,rh=new L;class Op extends Se{constructor(t=new En,e=new Cu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ya.fromBufferAttribute(e,i-1),Ma.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ya.distanceTo(Ma);t.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;sh.copy(i).invert(),qs.copy(t.ray).applyMatrix4(sh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=h.getX(_),b=h.getX(_+1),M=$r(this,t,qs,l,p,b,_);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=$r(this,t,qs,l,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=$r(this,t,qs,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=$r(this,t,qs,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $r(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(ya.fromBufferAttribute(a,i),Ma.fromBufferAttribute(a,r),e.distanceSqToSegment(ya,Ma,uo,rh)>n)return;uo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(uo);if(!(c<t.near||c>t.far))return{distance:c,point:rh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class Ru extends ke{constructor(t,e,n=Xi,i,r,o,a=Mn,l=Mn,c,h=hr,u=1){if(h!==hr&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class jl extends En{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(d,2));function b(){const v=new L,w=new L;let A=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const x=[],y=R/r,P=y*(e-t)+t;for(let F=0;F<=i;F++){const O=F/i,G=O*l+a,W=Math.sin(G),V=Math.cos(G);w.x=P*W,w.y=-y*n+m,w.z=P*V,u.push(w.x,w.y,w.z),v.set(W,T,V).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-y),x.push(g++)}_.push(x)}for(let R=0;R<i;R++)for(let x=0;x<r;x++){const y=_[x][R],P=_[x+1][R],F=_[x+1][R+1],O=_[x][R+1];(t>0||x!==0)&&(h.push(y,P,O),A+=3),(e>0||x!==r-1)&&(h.push(P,F,O),A+=3)}c.addGroup(p,A,0),p+=A}function M(v){const w=g,A=new ht,T=new L;let R=0;const x=v===!0?t:e,y=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const G=F/i*l+a,W=Math.cos(G),V=Math.sin(G);T.x=x*V,T.y=m*y,T.z=x*W,u.push(T.x,T.y,T.z),f.push(0,y,0),A.x=W*.5+.5,A.y=V*.5*y+.5,d.push(A.x,A.y),g++}for(let F=0;F<i;F++){const O=w+F,G=P+F;v===!0?h.push(G,G+1,O):h.push(G+1,G,O),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jl extends jl{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Jl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new ht:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,i=[],r=[],o=[],a=new L,l=new ae;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ft(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ft(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ql extends kn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fp extends Ql{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const jr=new L,fo=new tc,po=new tc,mo=new tc;class Bp extends kn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(jr.subVectors(i[0],i[1]).add(i[0]),c=jr);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(jr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),fo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),po.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),mo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),po.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),mo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(fo.calc(l),po.calc(l),mo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ah(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function zp(s,t){const e=1-s;return e*e*t}function kp(s,t){return 2*(1-s)*s*t}function Hp(s,t){return s*s*t}function nr(s,t,e,n){return zp(s,t)+kp(s,e)+Hp(s,n)}function Vp(s,t){const e=1-s;return e*e*e*t}function Gp(s,t){const e=1-s;return 3*e*e*s*t}function Wp(s,t){return 3*(1-s)*s*s*t}function Xp(s,t){return s*s*s*t}function ir(s,t,e,n,i){return Vp(s,t)+Gp(s,e)+Wp(s,n)+Xp(s,i)}class Pu extends kn{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,i.x,r.x,o.x,a.x),ir(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yp extends kn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,i.x,r.x,o.x,a.x),ir(t,i.y,r.y,o.y,a.y),ir(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Du extends kn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qp extends kn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends kn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,i.x,r.x,o.x),nr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zp extends kn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,i.x,r.x,o.x),nr(t,i.y,r.y,o.y),nr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ah(a,l.x,c.x,h.x,u.x),ah(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var oh=Object.freeze({__proto__:null,ArcCurve:Fp,CatmullRomCurve3:Bp,CubicBezierCurve:Pu,CubicBezierCurve3:Yp,EllipseCurve:Ql,LineCurve:Du,LineCurve3:qp,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:Zp,SplineCurve:Iu});class Kp extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new oh[i.type]().fromJSON(i))}return this}}class lh extends Kp{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Du(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Lu(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Pu(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Iu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Ql(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uu extends lh{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new lh().fromJSON(i))}return this}}function $p(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Nu(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=em(s,t,r,e)),s.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<i;f+=e){const d=s[f],g=s[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return pr(r,o,e,a,l,c,0),o}function Nu(s,t,e,n,i){let r;if(i===fm(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=ch(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ch(o/n|0,s[o],s[o+1],r);return r&&Ls(r,r.next)&&(_r(r),r=r.next),r}function qi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ls(e,e.next)||ue(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&am(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Jp(s,n,i,r):jp(s)){t.push(l.i,s.i,c.i),_r(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Qp(qi(s),t),pr(s,t,e,n,i,r,2)):o===2&&tm(s,t,e,n,i,r):pr(qi(s),t,e,n,i,r,1);break}}}function jp(s){const t=s.prev,e=s,n=s.next;if(ue(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ks(i,a,r,l,o,c,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jp(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ue(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),p=yl(d,g,t,e,n),b=yl(_,m,t,e,n);let M=s.prevZ,v=s.nextZ;for(;M&&M.z>=p&&v&&v.z<=b;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Ks(a,h,l,u,c,f,M.x,M.y)&&ue(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ks(a,h,l,u,c,f,v.x,v.y)&&ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Ks(a,h,l,u,c,f,M.x,M.y)&&ue(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ks(a,h,l,u,c,f,v.x,v.y)&&ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qp(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Ls(n,i)&&Fu(n,e,e.next,i)&&mr(n,i)&&mr(i,n)&&(t.push(n.i,e.i,i.i),_r(e),_r(e.next),e=s=i),e=e.next}while(e!==s);return qi(e)}function tm(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cm(o,a)){let l=Bu(o,a);o=qi(o,o.next),l=qi(l,l.next),pr(o,t,e,n,i,r,0),pr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function em(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Nu(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(lm(c))}i.sort(nm);for(let r=0;r<i.length;r++)e=im(i[r],e);return e}function nm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function im(s,t){const e=sm(s,t);if(!e)return t;const n=Bu(e,s);return qi(n,n.next),qi(e,e.next)}function sm(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(Ls(s,e))return e;do{if(Ls(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ou(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);mr(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&rm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function rm(s,t){return ue(s.prev,s,t.prev)<0&&ue(t.next,s,s.next)<0}function am(s,t,e,n){let i=s;do i.z===0&&(i.z=yl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,om(i)}function om(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function yl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function lm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ou(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Ks(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Ou(s,t,e,n,i,r,o,a)}function cm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!hm(s,t)&&(mr(s,t)&&mr(t,s)&&um(s,t)&&(ue(s.prev,s,t.prev)||ue(s,t.prev,t))||Ls(s,t)&&ue(s.prev,s,s.next)>0&&ue(t.prev,t,t.next)>0)}function ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ls(s,t){return s.x===t.x&&s.y===t.y}function Fu(s,t,e,n){const i=Qr(ue(s,t,e)),r=Qr(ue(s,t,n)),o=Qr(ue(e,n,s)),a=Qr(ue(e,n,t));return!!(i!==r&&o!==a||i===0&&Jr(s,e,t)||r===0&&Jr(s,n,t)||o===0&&Jr(e,s,n)||a===0&&Jr(e,t,n))}function Jr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Qr(s){return s>0?1:s<0?-1:0}function hm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Fu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function mr(s,t){return ue(s.prev,s,s.next)<0?ue(s,t,s.next)>=0&&ue(s,s.prev,t)>=0:ue(s,t,s.prev)<0||ue(s,s.next,t)<0}function um(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Bu(s,t){const e=Ml(s.i,s.x,s.y),n=Ml(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ch(s,t,e,n){const i=Ml(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _r(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ml(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fm(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class dm{static triangulate(t,e,n=2){return $p(t,e,n)}}class sr{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return sr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];hh(t),uh(n,t);let o=t.length;e.forEach(hh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,uh(n,e[l]);const a=dm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function hh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function uh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class La extends En{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*f-o;for(let M=0;M<c;M++){const v=M*u-r;g.push(v,-b,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,v=b+c*(p+1),w=b+1+c*(p+1),A=b+1+c*p;d.push(M,v,A),d.push(v,w,A)}this.setIndex(d),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.width,t.height,t.widthSegments,t.heightSegments)}}class ec extends En{constructor(t=new Uu([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Fe(i,3)),this.setAttribute("normal",new Fe(r,3)),this.setAttribute("uv",new Fe(o,2));function c(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;sr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const b=g[m];sr.isClockWise(b)===!0&&(g[m]=b.reverse())}const _=sr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const b=g[m];d=d.concat(b)}for(let m=0,p=d.length;m<p;m++){const b=d[m];i.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=_.length;m<p;m++){const b=_[m],M=b[0]+u,v=b[1]+u,w=b[2]+u;n.push(M,v,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return pm(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new ec(n,t.curveSegments)}}function pm(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class mm extends wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _m extends wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zu extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const _o=new ae,fh=new L,dh=new L;class gm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $l,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(fh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),_o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class nc extends wu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vm extends gm{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xm extends zu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new vm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sm extends zu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ym extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ph{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ft(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const mh=new L;let ta,go;class vo extends Se{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",ta===void 0&&(ta=new En,ta.setAttribute("position",new Fe([0,0,0,0,1,0],3)),go=new Jl(.5,1,5,1),go.translate(0,-.5,0)),this.position.copy(e),this.line=new Op(ta,new Cu({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qe(go,new dr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{mh.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(mh,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Mm extends Ki{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function _h(s,t,e,n){const i=Em(n);switch(e){case fu:return s*t;case pu:return s*t/i.components*i.byteLength;case Xl:return s*t/i.components*i.byteLength;case mu:return s*t*2/i.components*i.byteLength;case Yl:return s*t*2/i.components*i.byteLength;case du:return s*t*3/i.components*i.byteLength;case yn:return s*t*4/i.components*i.byteLength;case ql:return s*t*4/i.components*i.byteLength;case ca:case ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ua:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $o:case Jo:return Math.max(s,16)*Math.max(t,8)/4;case Ko:case jo:return Math.max(s,8)*Math.max(t,8)/2;case Qo:case tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case el:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case al:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ll:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case cl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case pl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ml:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case da:case _l:case gl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case _u:case vl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case xl:case Sl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Em(s){switch(s){case Fn:case cu:return{byteLength:1,components:1};case lr:case hu:case br:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case Xi:case Vl:case $n:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ku(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function bm(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
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
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
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
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Im=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zm=`#define PI 3.141592653589793
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
} // validated`,Km=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$m=`vec3 transformedNormal = objectNormal;
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
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
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
}`,d_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,g_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,v_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M_=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,E_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,b_=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,T_=`#if defined( RE_IndirectDiffuse )
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
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U_=`#if defined( USE_POINTS_UV )
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
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lg=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Ig=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,zg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kg=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Hg=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Vg=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Gg=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Wg=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Xg=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yg=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,qg=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Zg=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Kg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$g=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,jg=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jg=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Qg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,e0=`uniform vec3 color;
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
}`,n0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,i0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ot={alphahash_fragment:Tm,alphahash_pars_fragment:wm,alphamap_fragment:Am,alphamap_pars_fragment:Cm,alphatest_fragment:Rm,alphatest_pars_fragment:Pm,aomap_fragment:Dm,aomap_pars_fragment:Lm,batching_pars_vertex:Im,batching_vertex:Um,begin_vertex:Nm,beginnormal_vertex:Om,bsdfs:Fm,iridescence_fragment:Bm,bumpmap_pars_fragment:zm,clipping_planes_fragment:km,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Gm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:Ym,color_vertex:qm,common:Zm,cube_uv_reflection_fragment:Km,defaultnormal_vertex:$m,displacementmap_pars_vertex:jm,displacementmap_vertex:Jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:t_,colorspace_fragment:e_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:s_,envmap_pars_fragment:r_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:g_,envmap_vertex:o_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:h_,fog_pars_fragment:u_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:d_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:__,lights_toon_fragment:v_,lights_toon_pars_fragment:x_,lights_phong_fragment:S_,lights_phong_pars_fragment:y_,lights_physical_fragment:M_,lights_physical_pars_fragment:E_,lights_fragment_begin:b_,lights_fragment_maps:T_,lights_fragment_end:w_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:R_,logdepthbuf_vertex:P_,map_fragment:D_,map_pars_fragment:L_,map_particle_fragment:I_,map_particle_pars_fragment:U_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:O_,morphinstance_vertex:F_,morphcolor_vertex:B_,morphnormal_vertex:z_,morphtarget_pars_vertex:k_,morphtarget_vertex:H_,normal_fragment_begin:V_,normal_fragment_maps:G_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:Y_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:K_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:j_,opaque_fragment:J_,packing:Q_,premultiplied_alpha_fragment:tg,project_vertex:eg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:og,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:hg,skinning_pars_vertex:ug,skinning_vertex:fg,skinnormal_vertex:dg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:_g,tonemapping_pars_fragment:gg,transmission_fragment:vg,transmission_pars_fragment:xg,uv_pars_fragment:Sg,uv_pars_vertex:yg,uv_vertex:Mg,worldpos_vertex:Eg,background_vert:bg,background_frag:Tg,backgroundCube_vert:wg,backgroundCube_frag:Ag,cube_vert:Cg,cube_frag:Rg,depth_vert:Pg,depth_frag:Dg,distanceRGBA_vert:Lg,distanceRGBA_frag:Ig,equirect_vert:Ug,equirect_frag:Ng,linedashed_vert:Og,linedashed_frag:Fg,meshbasic_vert:Bg,meshbasic_frag:zg,meshlambert_vert:kg,meshlambert_frag:Hg,meshmatcap_vert:Vg,meshmatcap_frag:Gg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:Yg,meshphong_frag:qg,meshphysical_vert:Zg,meshphysical_frag:Kg,meshtoon_vert:$g,meshtoon_frag:jg,points_vert:Jg,points_frag:Qg,shadow_vert:t0,shadow_frag:e0,sprite_vert:n0,sprite_frag:i0},st={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Dn={basic:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ue([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ue([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ue([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ue([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ue([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ue([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ue([st.common,st.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ue([st.lights,st.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Dn.physical={uniforms:Ue([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ea={r:0,b:0,g:0},Ci=new Ne,s0=new ae;function r0(s,t,e,n,i,r,o){const a=new Zt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const w=g(M);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Pa)?(h===void 0&&(h=new Qe(new ks(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Ds(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(Ci)),h.material.toneMapped=Vt.getTransfer(w.colorSpace)!==jt,(u!==w||f!==w.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Qe(new La(2,2),new vi({name:"BackgroundMaterial",uniforms:Ds(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(w.colorSpace)!==jt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(ea,Tu(s)),n.buffers.color.setClear(ea.r,ea.g,ea.b,v,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:b}}function a0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,P,F,O,G){let W=!1;const V=u(O,F,P);r!==V&&(r=V,c(r.object)),W=d(y,O,F,G),W&&g(y,O,F,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(y,P,F,O),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,F){const O=F.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let W=G[P.id];W===void 0&&(W={},G[P.id]=W);let V=W[O];return V===void 0&&(V=f(l()),W[O]=V),V}function f(y){const P=[],F=[],O=[];for(let G=0;G<e;G++)P[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:y,attributes:{},index:null}}function d(y,P,F,O){const G=r.attributes,W=P.attributes;let V=0;const q=F.getAttributes();for(const H in q)if(q[H].location>=0){const lt=G[H];let _t=W[H];if(_t===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),lt===void 0||lt.attribute!==_t||_t&&lt.data!==_t.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(y,P,F,O){const G={},W=P.attributes;let V=0;const q=F.getAttributes();for(const H in q)if(q[H].location>=0){let lt=W[H];lt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor));const _t={};_t.attribute=lt,lt&&lt.data&&(_t.data=lt.data),G[H]=_t,V++}r.attributes=G,r.attributesNum=V,r.index=O}function _(){const y=r.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const F=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;F[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),G[y]!==P&&(s.vertexAttribDivisor(y,P),G[y]=P)}function b(){const y=r.newAttributes,P=r.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==y[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function M(y,P,F,O,G,W,V){V===!0?s.vertexAttribIPointer(y,P,F,G,W):s.vertexAttribPointer(y,P,F,O,G,W)}function v(y,P,F,O){_();const G=O.attributes,W=F.getAttributes(),V=P.defaultAttributeValues;for(const q in W){const H=W[q];if(H.location>=0){let nt=G[q];if(nt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const lt=nt.normalized,_t=nt.itemSize,Pt=t.get(nt);if(Pt===void 0)continue;const qt=Pt.buffer,X=Pt.type,et=Pt.bytesPerElement,yt=X===s.INT||X===s.UNSIGNED_INT||nt.gpuType===Vl;if(nt.isInterleavedBufferAttribute){const ct=nt.data,Mt=ct.stride,Gt=nt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ct=0;Ct<H.locationSize;Ct++)p(H.location+Ct,ct.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)m(H.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let Ct=0;Ct<H.locationSize;Ct++)M(H.location+Ct,_t/H.locationSize,X,lt,Mt*et,(Gt+_t/H.locationSize*Ct)*et,yt)}else{if(nt.isInstancedBufferAttribute){for(let ct=0;ct<H.locationSize;ct++)p(H.location+ct,nt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ct=0;ct<H.locationSize;ct++)m(H.location+ct);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let ct=0;ct<H.locationSize;ct++)M(H.location+ct,_t/H.locationSize,X,lt,_t*et,_t/H.locationSize*ct*et,yt)}}else if(V!==void 0){const lt=V[q];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(H.location,lt);break;case 3:s.vertexAttrib3fv(H.location,lt);break;case 4:s.vertexAttrib4fv(H.location,lt);break;default:s.vertexAttrib1fv(H.location,lt)}}}}b()}function w(){R();for(const y in n){const P=n[y];for(const F in P){const O=P[F];for(const G in O)h(O[G].object),delete O[G];delete P[F]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const F in P){const O=P[F];for(const G in O)h(O[G].object),delete O[G];delete P[F]}delete n[y.id]}function T(y){for(const P in n){const F=n[P];if(F[y.id]===void 0)continue;const O=F[y.id];for(const G in O)h(O[G].object),delete O[G];delete F[y.id]}}function R(){x(),o=!0,r!==i&&(r=i,c(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function o0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function l0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==yn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Fn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$n&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:w,maxSamples:A}}function c0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Li,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,M=b*4;let v=p.clippingState||null;l.value=v,v=h(g,f,M,d);for(let w=0;w!==M;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function h0(s){let t=new WeakMap;function e(o,a){return a===Xo?o.mapping=Cs:a===Yo&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xo||a===Yo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pp(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const gs=4,gh=[.125,.215,.35,.446,.526,.582],Oi=20,xo=new nc,vh=new Zt;let So=null,yo=0,Mo=0,Eo=!1;const Ii=(1+Math.sqrt(5))/2,ds=1/Ii,xh=[new L(-Ii,ds,0),new L(Ii,ds,0),new L(-ds,0,Ii),new L(ds,0,Ii),new L(0,Ii,-ds),new L(0,Ii,ds),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],u0=new L;class Sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=u0}=r;So=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(So,yo,Mo),this._renderer.xr.enabled=Eo,t.scissorTest=!1,na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),So=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:br,format:yn,colorSpace:Ps,depthBuffer:!1},i=yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(r)),this._blurMaterial=d0(r,t,e)}return i}_compileMaterial(t){const e=new Qe(this._lodPlanes[0],t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,i,r){const l=new un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vh),u.toneMapping=pi,u.autoClear=!1;const g=new dr({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),_=new Qe(new ks,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(vh),m=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const v=this._cubeSize;na(i,M*v,b>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Cs||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;na(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xh[(i-r-1)%xh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qe(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let b=0;for(let T=0;T<Oi;++T){const R=T/_,x=Math.exp(-R*R/2);p.push(x),T===0?b+=x:T<m&&(b+=2*x)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const v=this._sizeLods[i],w=3*v*(i>M-gs?i-M+gs:0),A=4*(this._cubeSize-v);na(e,w,A,3*v,2*v),l.setRenderTarget(e),l.render(u,xo)}}function f0(s){const t=[],e=[],n=[];let i=s;const r=s-gs+1+gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-gs?l=gh[o-s+gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),M=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,R=A>2?0:-1,x=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];b.set(x,_*g*A),M.set(f,m*g*A);const y=[A,A,A,A,A,A];v.set(y,p*g*A)}const w=new En;w.setAttribute("position",new On(b,_)),w.setAttribute("uv",new On(M,m)),w.setAttribute("faceIndex",new On(v,p)),t.push(w),i>gs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yh(s,t,e){const n=new Yi(s,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function d0(s,t,e){const n=new Float32Array(Oi),i=new L(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ic(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Mh(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Eh(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function p0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xo||l===Yo,h=l===Cs||l===Rs;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Sh(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Sh(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function m0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _0(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let M=0,v=b.length;M<v;M+=3){const w=b[M+0],A=b[M+1],T=b[M+2];f.push(w,A,A,T,T,w)}}else if(g!==void 0){const b=g.array;_=g.version;for(let M=0,v=b.length/3-1;M<v;M+=3){const w=M+0,A=M+1,T=M+2;f.push(w,A,A,T,T,w)}}else return;const m=new(vu(f)?bu:Eu)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function g0(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function v0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function x0(s,t,e){const n=new WeakMap,i=new pe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*A*4*u),R=new xu(T,w,A,u);R.type=$n,R.needsUpdate=!0;const x=v*4;for(let P=0;P<u;P++){const F=p[P],O=b[P],G=M[P],W=w*A*4*P;for(let V=0;V<F.count;V++){const q=V*x;g===!0&&(i.fromBufferAttribute(F,V),T[W+q+0]=i.x,T[W+q+1]=i.y,T[W+q+2]=i.z,T[W+q+3]=0),_===!0&&(i.fromBufferAttribute(O,V),T[W+q+4]=i.x,T[W+q+5]=i.y,T[W+q+6]=i.z,T[W+q+7]=0),m===!0&&(i.fromBufferAttribute(G,V),T[W+q+8]=i.x,T[W+q+9]=i.y,T[W+q+10]=i.z,T[W+q+11]=G.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new ht(w,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function S0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Hu=new ke,bh=new Ru(1,1),Vu=new xu,Gu=new dp,Wu=new Au,Th=[],wh=[],Ah=new Float32Array(16),Ch=new Float32Array(9),Rh=new Float32Array(4);function Hs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Th[i];if(r===void 0&&(r=new Float32Array(i),Th[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ia(s,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function y0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function M0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function E0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function b0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function T0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;Rh.set(n),s.uniformMatrix2fv(this.addr,!1,Rh),Ee(e,n)}}function w0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;Ch.set(n),s.uniformMatrix3fv(this.addr,!1,Ch),Ee(e,n)}}function A0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;Ah.set(n),s.uniformMatrix4fv(this.addr,!1,Ah),Ee(e,n)}}function C0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function R0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function P0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function D0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function L0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function I0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function U0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function N0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function O0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(bh.compareFunction=gu,r=bh):r=Hu,e.setTexture2D(t||r,i)}function F0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Gu,i)}function B0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wu,i)}function z0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vu,i)}function k0(s){switch(s){case 5126:return y0;case 35664:return M0;case 35665:return E0;case 35666:return b0;case 35674:return T0;case 35675:return w0;case 35676:return A0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return P0;case 35669:case 35673:return D0;case 5125:return L0;case 36294:return I0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function H0(s,t){s.uniform1fv(this.addr,t)}function V0(s,t){const e=Hs(t,this.size,2);s.uniform2fv(this.addr,e)}function G0(s,t){const e=Hs(t,this.size,3);s.uniform3fv(this.addr,e)}function W0(s,t){const e=Hs(t,this.size,4);s.uniform4fv(this.addr,e)}function X0(s,t){const e=Hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Y0(s,t){const e=Hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function q0(s,t){const e=Hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Z0(s,t){s.uniform1iv(this.addr,t)}function K0(s,t){s.uniform2iv(this.addr,t)}function $0(s,t){s.uniform3iv(this.addr,t)}function j0(s,t){s.uniform4iv(this.addr,t)}function J0(s,t){s.uniform1uiv(this.addr,t)}function Q0(s,t){s.uniform2uiv(this.addr,t)}function tv(s,t){s.uniform3uiv(this.addr,t)}function ev(s,t){s.uniform4uiv(this.addr,t)}function nv(s,t,e){const n=this.cache,i=t.length,r=Ia(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Hu,r[o])}function iv(s,t,e){const n=this.cache,i=t.length,r=Ia(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Gu,r[o])}function sv(s,t,e){const n=this.cache,i=t.length,r=Ia(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Wu,r[o])}function rv(s,t,e){const n=this.cache,i=t.length,r=Ia(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Vu,r[o])}function av(s){switch(s){case 5126:return H0;case 35664:return V0;case 35665:return G0;case 35666:return W0;case 35674:return X0;case 35675:return Y0;case 35676:return q0;case 5124:case 35670:return Z0;case 35667:case 35671:return K0;case 35668:case 35672:return $0;case 35669:case 35673:return j0;case 5125:return J0;case 36294:return Q0;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}class ov{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}}class lv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=av(e.type)}}class cv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function Ph(s,t){s.seq.push(t),s.map[t.id]=t}function hv(s,t,e){const n=s.name,i=n.length;for(bo.lastIndex=0;;){const r=bo.exec(n),o=bo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ph(e,c===void 0?new ov(a,s,t):new lv(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new cv(a),Ph(e,u)),e=u}}}class pa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);hv(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Dh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const uv=37297;let fv=0;function dv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Lh=new Ut;function pv(s){Vt._getMatrix(Lh,Vt.workingColorSpace,s);const t=`mat3( ${Lh.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(s)){case va:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ih(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+dv(s.getShaderSource(t),o)}else return i}function mv(s,t){const e=pv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _v(s,t){let e;switch(t){case Ed:e="Linear";break;case bd:e="Reinhard";break;case Td:e="Cineon";break;case wd:e="ACESFilmic";break;case Cd:e="AgX";break;case Rd:e="Neutral";break;case Ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ia=new L;function gv(){Vt.getLuminanceCoefficients(ia);const s=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function xv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function $s(s){return s!==""}function Uh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(s){return s.replace(yv,Ev)}const Mv=new Map;function Ev(s,t){let e=Ot[t];if(e===void 0){const n=Mv.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return El(e)}const bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(s){return s.replace(bv,Tv)}function Tv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===au?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===nd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Av(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case Rs:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function Rv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case yd:t="ENVMAP_BLENDING_MIX";break;case Md:t="ENVMAP_BLENDING_ADD";break}return t}function Pv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dv(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=wv(e),c=Av(e),h=Cv(e),u=Rv(e),f=Pv(e),d=vv(e),g=xv(r),_=i.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==pi?_v("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,mv("linearToOutputTexel",e.outputColorSpace),gv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),o=El(o),o=Uh(o,e),o=Nh(o,e),a=El(a),a=Uh(a,e),a=Nh(a,e),o=Oh(o),a=Oh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,v=b+p+a,w=Dh(i,i.VERTEX_SHADER,M),A=Dh(i,i.FRAGMENT_SHADER,v);i.attachShader(_,w),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(A).trim();let W=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,A);else{const q=Ih(i,w,"vertex"),H=Ih(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+q+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||G==="")&&(V=!1);V&&(P.diagnostics={runnable:W,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(w),i.deleteShader(A),R=new pa(i,_),x=Sv(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,uv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let Lv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uv(t),e.set(t,n)),n}}class Uv{constructor(t){this.id=Lv++,this.code=t,this.usedTimes=0}}function Nv(s,t,e,n,i,r,o){const a=new yu,l=new Iv,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,P,F,O){const G=F.fog,W=O.geometry,V=x.isMeshStandardMaterial?F.environment:null,q=(x.isMeshStandardMaterial?e:t).get(x.envMap||V),H=q&&q.mapping===Pa?q.image.height:null,nt=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_t=lt!==void 0?lt.length:0;let Pt=0;W.morphAttributes.position!==void 0&&(Pt=1),W.morphAttributes.normal!==void 0&&(Pt=2),W.morphAttributes.color!==void 0&&(Pt=3);let qt,X,et,yt;if(nt){const Kt=Dn[nt];qt=Kt.vertexShader,X=Kt.fragmentShader}else qt=x.vertexShader,X=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),yt=l.getFragmentShaderID(x);const ct=s.getRenderTarget(),Mt=s.state.buffers.depth.getReversed(),Gt=O.isInstancedMesh===!0,Ct=O.isBatchedMesh===!0,oe=!!x.map,le=!!x.matcap,Wt=!!q,D=!!x.aoMap,De=!!x.lightMap,Xt=!!x.bumpMap,ee=!!x.normalMap,vt=!!x.displacementMap,kt=!!x.emissiveMap,bt=!!x.metalnessMap,Nt=!!x.roughnessMap,ye=x.anisotropy>0,C=x.clearcoat>0,S=x.dispersion>0,B=x.iridescence>0,Z=x.sheen>0,$=x.transmission>0,Y=ye&&!!x.anisotropyMap,xt=C&&!!x.clearcoatMap,rt=C&&!!x.clearcoatNormalMap,gt=C&&!!x.clearcoatRoughnessMap,St=B&&!!x.iridescenceMap,j=B&&!!x.iridescenceThicknessMap,ut=Z&&!!x.sheenColorMap,At=Z&&!!x.sheenRoughnessMap,wt=!!x.specularMap,it=!!x.specularColorMap,Lt=!!x.specularIntensityMap,I=$&&!!x.transmissionMap,at=$&&!!x.thicknessMap,J=!!x.gradientMap,dt=!!x.alphaMap,Q=x.alphaTest>0,K=!!x.alphaHash,pt=!!x.extensions;let It=pi;x.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(It=s.toneMapping);const ne={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:X,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ct,batchingColor:Ct&&O._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&O.instanceColor!==null,instancingMorph:Gt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ps,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:le,envMap:Wt,envMapMode:Wt&&q.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:De,bumpMap:Xt,normalMap:ee,displacementMap:f&&vt,emissiveMap:kt,normalMapObjectSpace:ee&&x.normalMapType===Ud,normalMapTangentSpace:ee&&x.normalMapType===Id,metalnessMap:bt,roughnessMap:Nt,anisotropy:ye,anisotropyMap:Y,clearcoat:C,clearcoatMap:xt,clearcoatNormalMap:rt,clearcoatRoughnessMap:gt,dispersion:S,iridescence:B,iridescenceMap:St,iridescenceThicknessMap:j,sheen:Z,sheenColorMap:ut,sheenRoughnessMap:At,specularMap:wt,specularColorMap:it,specularIntensityMap:Lt,transmission:$,transmissionMap:I,thicknessMap:at,gradientMap:J,opaque:x.transparent===!1&&x.blending===Ss&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:Q,alphaHash:K,combine:x.combine,mapUv:oe&&_(x.map.channel),aoMapUv:D&&_(x.aoMap.channel),lightMapUv:De&&_(x.lightMap.channel),bumpMapUv:Xt&&_(x.bumpMap.channel),normalMapUv:ee&&_(x.normalMap.channel),displacementMapUv:vt&&_(x.displacementMap.channel),emissiveMapUv:kt&&_(x.emissiveMap.channel),metalnessMapUv:bt&&_(x.metalnessMap.channel),roughnessMapUv:Nt&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:xt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(x.sheenRoughnessMap.channel),specularMapUv:wt&&_(x.specularMap.channel),specularColorMapUv:it&&_(x.specularColorMap.channel),specularIntensityMapUv:Lt&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:at&&_(x.thicknessMap.channel),alphaMapUv:dt&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ee||ye),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(oe||dt),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Mt,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&Vt.getTransfer(x.map.colorSpace)===jt,decodeVideoTextureEmissive:kt&&x.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(x.emissiveMap.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ln,flipSided:x.side===ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&x.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)y.push(P),y.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(b(y,x),M(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const y=g[x.type];let P;if(y){const F=Dn[y];P=wp.clone(F.uniforms)}else P=x.uniforms;return P}function w(x,y){let P;for(let F=0,O=h.length;F<O;F++){const G=h[F];if(G.cacheKey===y){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Dv(s,y,x,r),h.push(P)),P}function A(x){if(--x.usedTimes===0){const y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function T(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:R}}function Ov(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Fv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Bh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function zh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Fv),n.length>1&&n.sort(f||Bh),i.length>1&&i.sort(f||Bh)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Bv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new zh,s.set(n,[o])):i>=r.length?(o=new zh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function zv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Zt};break;case"SpotLight":e={position:new L,direction:new L,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function kv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Hv=0;function Vv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Gv(s){const t=new zv,e=kv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new ae,o=new ae;function a(c){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,M=0,v=0,w=0,A=0,T=0;c.sort(Vv);for(let x=0,y=c.length;x<y;x++){const P=c[x],F=P.color,O=P.intensity,G=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*O,u+=F.g*O,f+=F.b*O;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],O);T++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,H=e.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=P.shadow.matrix,b++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(F).multiplyScalar(O),V.distance=G,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const q=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,q.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=W,v++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(F).multiplyScalar(O),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const q=P.shadow,H=e.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(O),V.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==w||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=w,R.numLightProbes=T,n.version=Hv++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function kh(s){const t=new Gv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wv(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new kh(s),t.set(i,[a])):r>=o.length?(a=new kh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
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
}`;function qv(s,t,e){let n=new $l;const i=new ht,r=new ht,o=new pe,a=new mm({depthPacking:Ld}),l=new _m,c={},h=e.maxTextureSize,u={[gi]:ze,[ze]:gi,[Ln]:Ln},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Xv,fragmentShader:Yv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new En;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let p=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(di),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==qn&&this.type===qn,G=p===qn&&this.type!==qn;for(let W=0,V=A.length;W<V;W++){const q=A[W],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const nt=H.getFrameExtents();if(i.multiply(nt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,H.mapSize.y=r.y)),H.map===null||O===!0||G===!0){const _t=this.type!==qn?{minFilter:Mn,magFilter:Mn}:{};H.map!==null&&H.map.dispose(),H.map=new Yi(i.x,i.y,_t),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const lt=H.getViewportCount();for(let _t=0;_t<lt;_t++){const Pt=H.getViewport(_t);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),F.viewport(o),H.updateMatrices(q,_t),n=H.getFrustum(),v(T,R,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===qn&&b(H,R),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,y,P)};function b(A,T){const R=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yi(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,R,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,R,d,_,null)}function M(A,T,R,x){let y=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=y.uuid,O=T.uuid;let G=c[F];G===void 0&&(G={},c[F]=G);let W=G[O];W===void 0&&(W=y.clone(),G[O]=W,T.addEventListener("dispose",w)),y=W}if(y.visible=T.visible,y.wireframe=T.wireframe,x===qn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=R}return y}function v(A,T,R,x,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===qn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const O=t.update(A),G=A.material;if(Array.isArray(G)){const W=O.groups;for(let V=0,q=W.length;V<q;V++){const H=W[V],nt=G[H.materialIndex];if(nt&&nt.visible){const lt=M(A,nt,x,y);A.onBeforeShadow(s,A,T,R,O,lt,H),s.renderBufferDirect(R,null,O,lt,A,H),A.onAfterShadow(s,A,T,R,O,lt,H)}}}else if(G.visible){const W=M(A,G,x,y);A.onBeforeShadow(s,A,T,R,O,W,null),s.renderBufferDirect(R,null,O,W,A,null),A.onAfterShadow(s,A,T,R,O,W,null)}}const F=A.children;for(let O=0,G=F.length;O<G;O++)v(F[O],T,R,x,y)}function w(A){A.target.removeEventListener("dispose",w);for(const R in c){const x=c[R],y=A.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const Zv={[Bo]:zo,[ko]:Go,[Ho]:Wo,[As]:Vo,[zo]:Bo,[Go]:ko,[Wo]:Ho,[Vo]:As};function Kv(s,t){function e(){let I=!1;const at=new pe;let J=null;const dt=new pe(0,0,0,0);return{setMask:function(Q){J!==Q&&!I&&(s.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){I=Q},setClear:function(Q,K,pt,It,ne){ne===!0&&(Q*=It,K*=It,pt*=It),at.set(Q,K,pt,It),dt.equals(at)===!1&&(s.clearColor(Q,K,pt,It),dt.copy(at))},reset:function(){I=!1,J=null,dt.set(-1,0,0,0)}}}function n(){let I=!1,at=!1,J=null,dt=null,Q=null;return{setReversed:function(K){if(at!==K){const pt=t.get("EXT_clip_control");K?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),at=K;const It=Q;Q=null,this.setClear(It)}},getReversed:function(){return at},setTest:function(K){K?ct(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(K){J!==K&&!I&&(s.depthMask(K),J=K)},setFunc:function(K){if(at&&(K=Zv[K]),dt!==K){switch(K){case Bo:s.depthFunc(s.NEVER);break;case zo:s.depthFunc(s.ALWAYS);break;case ko:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case Ho:s.depthFunc(s.EQUAL);break;case Vo:s.depthFunc(s.GEQUAL);break;case Go:s.depthFunc(s.GREATER);break;case Wo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=K}},setLocked:function(K){I=K},setClear:function(K){Q!==K&&(at&&(K=1-K),s.clearDepth(K),Q=K)},reset:function(){I=!1,J=null,dt=null,Q=null,at=!1}}}function i(){let I=!1,at=null,J=null,dt=null,Q=null,K=null,pt=null,It=null,ne=null;return{setTest:function(Kt){I||(Kt?ct(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(Kt){at!==Kt&&!I&&(s.stencilMask(Kt),at=Kt)},setFunc:function(Kt,_n,Hn){(J!==Kt||dt!==_n||Q!==Hn)&&(s.stencilFunc(Kt,_n,Hn),J=Kt,dt=_n,Q=Hn)},setOp:function(Kt,_n,Hn){(K!==Kt||pt!==_n||It!==Hn)&&(s.stencilOp(Kt,_n,Hn),K=Kt,pt=_n,It=Hn)},setLocked:function(Kt){I=Kt},setClear:function(Kt){ne!==Kt&&(s.clearStencil(Kt),ne=Kt)},reset:function(){I=!1,at=null,J=null,dt=null,Q=null,K=null,pt=null,It=null,ne=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,M=null,v=null,w=null,A=null,T=new Zt(0,0,0),R=0,x=!1,y=null,P=null,F=null,O=null,G=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=q>=2);let nt=null,lt={};const _t=s.getParameter(s.SCISSOR_BOX),Pt=s.getParameter(s.VIEWPORT),qt=new pe().fromArray(_t),X=new pe().fromArray(Pt);function et(I,at,J,dt){const Q=new Uint8Array(4),K=s.createTexture();s.bindTexture(I,K),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<J;pt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(at+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return K}const yt={};yt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(s.DEPTH_TEST),o.setFunc(As),Xt(!1),ee(Lc),ct(s.CULL_FACE),D(di);function ct(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Mt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Gt(I,at){return u[I]!==at?(s.bindFramebuffer(I,at),u[I]=at,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=at),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Ct(I,at){let J=d,dt=!1;if(I){J=f.get(at),J===void 0&&(J=[],f.set(at,J));const Q=I.textures;if(J.length!==Q.length||J[0]!==s.COLOR_ATTACHMENT0){for(let K=0,pt=Q.length;K<pt;K++)J[K]=s.COLOR_ATTACHMENT0+K;J.length=Q.length,dt=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,dt=!0);dt&&s.drawBuffers(J)}function oe(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const le={[Ni]:s.FUNC_ADD,[sd]:s.FUNC_SUBTRACT,[rd]:s.FUNC_REVERSE_SUBTRACT};le[ad]=s.MIN,le[od]=s.MAX;const Wt={[ld]:s.ZERO,[cd]:s.ONE,[hd]:s.SRC_COLOR,[Oo]:s.SRC_ALPHA,[_d]:s.SRC_ALPHA_SATURATE,[pd]:s.DST_COLOR,[fd]:s.DST_ALPHA,[ud]:s.ONE_MINUS_SRC_COLOR,[Fo]:s.ONE_MINUS_SRC_ALPHA,[md]:s.ONE_MINUS_DST_COLOR,[dd]:s.ONE_MINUS_DST_ALPHA,[gd]:s.CONSTANT_COLOR,[vd]:s.ONE_MINUS_CONSTANT_COLOR,[xd]:s.CONSTANT_ALPHA,[Sd]:s.ONE_MINUS_CONSTANT_ALPHA};function D(I,at,J,dt,Q,K,pt,It,ne,Kt){if(I===di){_===!0&&(Mt(s.BLEND),_=!1);return}if(_===!1&&(ct(s.BLEND),_=!0),I!==id){if(I!==m||Kt!==x){if((p!==Ni||v!==Ni)&&(s.blendEquation(s.FUNC_ADD),p=Ni,v=Ni),Kt)switch(I){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ic:s.blendFunc(s.ONE,s.ONE);break;case Uc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ic:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Uc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,M=null,w=null,A=null,T.set(0,0,0),R=0,m=I,x=Kt}return}Q=Q||at,K=K||J,pt=pt||dt,(at!==p||Q!==v)&&(s.blendEquationSeparate(le[at],le[Q]),p=at,v=Q),(J!==b||dt!==M||K!==w||pt!==A)&&(s.blendFuncSeparate(Wt[J],Wt[dt],Wt[K],Wt[pt]),b=J,M=dt,w=K,A=pt),(It.equals(T)===!1||ne!==R)&&(s.blendColor(It.r,It.g,It.b,ne),T.copy(It),R=ne),m=I,x=!1}function De(I,at){I.side===Ln?Mt(s.CULL_FACE):ct(s.CULL_FACE);let J=I.side===ze;at&&(J=!J),Xt(J),I.blending===Ss&&I.transparent===!1?D(di):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const dt=I.stencilWrite;a.setTest(dt),dt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),kt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function ee(I){I!==td?(ct(s.CULL_FACE),I!==P&&(I===Lc?s.cullFace(s.BACK):I===ed?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),P=I}function vt(I){I!==F&&(V&&s.lineWidth(I),F=I)}function kt(I,at,J){I?(ct(s.POLYGON_OFFSET_FILL),(O!==at||G!==J)&&(s.polygonOffset(at,J),O=at,G=J)):Mt(s.POLYGON_OFFSET_FILL)}function bt(I){I?ct(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function Nt(I){I===void 0&&(I=s.TEXTURE0+W-1),nt!==I&&(s.activeTexture(I),nt=I)}function ye(I,at,J){J===void 0&&(nt===null?J=s.TEXTURE0+W-1:J=nt);let dt=lt[J];dt===void 0&&(dt={type:void 0,texture:void 0},lt[J]=dt),(dt.type!==I||dt.texture!==at)&&(nt!==J&&(s.activeTexture(J),nt=J),s.bindTexture(I,at||yt[I]),dt.type=I,dt.texture=at)}function C(){const I=lt[nt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(I){qt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),qt.copy(I))}function At(I){X.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function wt(I,at){let J=c.get(at);J===void 0&&(J=new WeakMap,c.set(at,J));let dt=J.get(I);dt===void 0&&(dt=s.getUniformBlockIndex(at,I.name),J.set(I,dt))}function it(I,at){const dt=c.get(at).get(I);l.get(at)!==dt&&(s.uniformBlockBinding(at,dt,I.__bindingPointIndex),l.set(at,dt))}function Lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,lt={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,M=null,v=null,w=null,A=null,T=new Zt(0,0,0),R=0,x=!1,y=null,P=null,F=null,O=null,G=null,qt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Mt,bindFramebuffer:Gt,drawBuffers:Ct,useProgram:oe,setBlending:D,setMaterial:De,setFlipSided:Xt,setCullFace:ee,setLineWidth:vt,setPolygonOffset:kt,setScissorTest:bt,activeTexture:Nt,bindTexture:ye,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:St,texImage3D:j,updateUBOMapping:wt,uniformBlockBinding:it,texStorage2D:rt,texStorage3D:gt,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:xt,scissor:ut,viewport:At,reset:Lt}}function $v(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):Sa("canvas")}function _(C,S,B){let Z=1;const $=ye(C);if(($.width>B||$.height>B)&&(Z=B/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(Z*$.width),xt=Math.floor(Z*$.height);u===void 0&&(u=g(Y,xt));const rt=S?g(Y,xt):u;return rt.width=Y,rt.height=xt,rt.getContext("2d").drawImage(C,0,0,Y,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+xt+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,S,B,Z,$=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),S===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),S===s.RGBA){const xt=$?va:Vt.getTransfer(Z);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=xt===jt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(C,S){let B;return C?S===null||S===Xi||S===cr?B=s.DEPTH24_STENCIL8:S===$n?B=s.DEPTH32F_STENCIL8:S===lr&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Xi||S===cr?B=s.DEPTH_COMPONENT24:S===$n?B=s.DEPTH_COMPONENT32F:S===lr&&(B=s.DEPTH_COMPONENT16),B}function w(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mn&&C.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&h.delete(S)}function T(C){const S=C.target;S.removeEventListener("dispose",T),y(S)}function R(C){const S=n.get(C);if(S.__webglInit===void 0)return;const B=C.source,Z=f.get(B);if(Z){const $=Z[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(C),Object.keys(Z).length===0&&f.delete(B)}n.remove(C)}function x(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const B=C.source,Z=f.get(B);delete Z[S.__cacheKey],o.memory.textures--}function y(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let $=0;$<S.__webglFramebuffer[Z].length;$++)s.deleteFramebuffer(S.__webglFramebuffer[Z][$]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=C.textures;for(let Z=0,$=B.length;Z<$;Z++){const Y=n.get(B[Z]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(C)}let P=0;function F(){P=0}function O(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function G(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){const B=n.get(C);if(C.isVideoTexture&&bt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(B,C,S);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function V(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){yt(B,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function q(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){yt(B,C,S);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function H(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){ct(B,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const nt={[qo]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[Zo]:s.MIRRORED_REPEAT},lt={[Mn]:s.NEAREST,[Pd]:s.NEAREST_MIPMAP_NEAREST,[Pr]:s.NEAREST_MIPMAP_LINEAR,[Un]:s.LINEAR,[Va]:s.LINEAR_MIPMAP_NEAREST,[zi]:s.LINEAR_MIPMAP_LINEAR},_t={[Nd]:s.NEVER,[Hd]:s.ALWAYS,[Od]:s.LESS,[gu]:s.LEQUAL,[Fd]:s.EQUAL,[kd]:s.GEQUAL,[Bd]:s.GREATER,[zd]:s.NOTEQUAL};function Pt(C,S){if(S.type===$n&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===Va||S.magFilter===Pr||S.magFilter===zi||S.minFilter===Un||S.minFilter===Va||S.minFilter===Pr||S.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,nt[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,nt[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,nt[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,lt[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,lt[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Mn||S.minFilter!==Pr&&S.minFilter!==zi||S.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function qt(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let $=f.get(Z);$===void 0&&($={},f.set(Z,$));const Y=G(S);if(Y!==C.__cacheKey){$[Y]===void 0&&($[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[Y].usedTimes++;const xt=$[C.__cacheKey];xt!==void 0&&($[C.__cacheKey].usedTimes--,xt.usedTimes===0&&x(S)),C.__cacheKey=Y,C.__webglTexture=$[Y].texture}return B}function X(C,S,B){return Math.floor(Math.floor(C/B)/S)}function et(C,S,B,Z){const Y=C.updateRanges;if(Y.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,B,Z,S.data);else{Y.sort((j,ut)=>j.start-ut.start);let xt=0;for(let j=1;j<Y.length;j++){const ut=Y[xt],At=Y[j],wt=ut.start+ut.count,it=X(At.start,S.width,4),Lt=X(ut.start,S.width,4);At.start<=wt+1&&it===Lt&&X(At.start+At.count-1,S.width,4)===it?ut.count=Math.max(ut.count,At.start+At.count-ut.start):(++xt,Y[xt]=At)}Y.length=xt+1;const rt=s.getParameter(s.UNPACK_ROW_LENGTH),gt=s.getParameter(s.UNPACK_SKIP_PIXELS),St=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let j=0,ut=Y.length;j<ut;j++){const At=Y[j],wt=Math.floor(At.start/4),it=Math.ceil(At.count/4),Lt=wt%S.width,I=Math.floor(wt/S.width),at=it,J=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Lt,I,at,J,B,Z,S.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function yt(C,S,B){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);const $=qt(C,S),Y=S.source;e.bindTexture(Z,C.__webglTexture,s.TEXTURE0+B);const xt=n.get(Y);if(Y.version!==xt.__version||$===!0){e.activeTexture(s.TEXTURE0+B);const rt=Vt.getPrimaries(Vt.workingColorSpace),gt=S.colorSpace===ci?null:Vt.getPrimaries(S.colorSpace),St=S.colorSpace===ci||rt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let j=_(S.image,!1,i.maxTextureSize);j=Nt(S,j);const ut=r.convert(S.format,S.colorSpace),At=r.convert(S.type);let wt=M(S.internalFormat,ut,At,S.colorSpace,S.isVideoTexture);Pt(Z,S);let it;const Lt=S.mipmaps,I=S.isVideoTexture!==!0,at=xt.__version===void 0||$===!0,J=Y.dataReady,dt=w(S,j);if(S.isDepthTexture)wt=v(S.format===ur,S.type),at&&(I?e.texStorage2D(s.TEXTURE_2D,1,wt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,wt,j.width,j.height,0,ut,At,null));else if(S.isDataTexture)if(Lt.length>0){I&&at&&e.texStorage2D(s.TEXTURE_2D,dt,wt,Lt[0].width,Lt[0].height);for(let Q=0,K=Lt.length;Q<K;Q++)it=Lt[Q],I?J&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,it.width,it.height,ut,At,it.data):e.texImage2D(s.TEXTURE_2D,Q,wt,it.width,it.height,0,ut,At,it.data);S.generateMipmaps=!1}else I?(at&&e.texStorage2D(s.TEXTURE_2D,dt,wt,j.width,j.height),J&&et(S,j,ut,At)):e.texImage2D(s.TEXTURE_2D,0,wt,j.width,j.height,0,ut,At,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,wt,Lt[0].width,Lt[0].height,j.depth);for(let Q=0,K=Lt.length;Q<K;Q++)if(it=Lt[Q],S.format!==yn)if(ut!==null)if(I){if(J)if(S.layerUpdates.size>0){const pt=_h(it.width,it.height,S.format,S.type);for(const It of S.layerUpdates){const ne=it.data.subarray(It*pt/it.data.BYTES_PER_ELEMENT,(It+1)*pt/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,It,it.width,it.height,1,ut,ne)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,it.width,it.height,j.depth,ut,it.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,wt,it.width,it.height,j.depth,0,it.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?J&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,it.width,it.height,j.depth,ut,At,it.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,wt,it.width,it.height,j.depth,0,ut,At,it.data)}else{I&&at&&e.texStorage2D(s.TEXTURE_2D,dt,wt,Lt[0].width,Lt[0].height);for(let Q=0,K=Lt.length;Q<K;Q++)it=Lt[Q],S.format!==yn?ut!==null?I?J&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,it.width,it.height,ut,it.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,wt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?J&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,it.width,it.height,ut,At,it.data):e.texImage2D(s.TEXTURE_2D,Q,wt,it.width,it.height,0,ut,At,it.data)}else if(S.isDataArrayTexture)if(I){if(at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,wt,j.width,j.height,j.depth),J)if(S.layerUpdates.size>0){const Q=_h(j.width,j.height,S.format,S.type);for(const K of S.layerUpdates){const pt=j.data.subarray(K*Q/j.data.BYTES_PER_ELEMENT,(K+1)*Q/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,j.width,j.height,1,ut,At,pt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ut,At,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,j.width,j.height,j.depth,0,ut,At,j.data);else if(S.isData3DTexture)I?(at&&e.texStorage3D(s.TEXTURE_3D,dt,wt,j.width,j.height,j.depth),J&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ut,At,j.data)):e.texImage3D(s.TEXTURE_3D,0,wt,j.width,j.height,j.depth,0,ut,At,j.data);else if(S.isFramebufferTexture){if(at)if(I)e.texStorage2D(s.TEXTURE_2D,dt,wt,j.width,j.height);else{let Q=j.width,K=j.height;for(let pt=0;pt<dt;pt++)e.texImage2D(s.TEXTURE_2D,pt,wt,Q,K,0,ut,At,null),Q>>=1,K>>=1}}else if(Lt.length>0){if(I&&at){const Q=ye(Lt[0]);e.texStorage2D(s.TEXTURE_2D,dt,wt,Q.width,Q.height)}for(let Q=0,K=Lt.length;Q<K;Q++)it=Lt[Q],I?J&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ut,At,it):e.texImage2D(s.TEXTURE_2D,Q,wt,ut,At,it);S.generateMipmaps=!1}else if(I){if(at){const Q=ye(j);e.texStorage2D(s.TEXTURE_2D,dt,wt,Q.width,Q.height)}J&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,At,j)}else e.texImage2D(s.TEXTURE_2D,0,wt,ut,At,j);m(S)&&p(Z),xt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ct(C,S,B){if(S.image.length!==6)return;const Z=qt(C,S),$=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);const Y=n.get($);if($.version!==Y.__version||Z===!0){e.activeTexture(s.TEXTURE0+B);const xt=Vt.getPrimaries(Vt.workingColorSpace),rt=S.colorSpace===ci?null:Vt.getPrimaries(S.colorSpace),gt=S.colorSpace===ci||xt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const St=S.isCompressedTexture||S.image[0].isCompressedTexture,j=S.image[0]&&S.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!St&&!j?ut[K]=_(S.image[K],!0,i.maxCubemapSize):ut[K]=j?S.image[K].image:S.image[K],ut[K]=Nt(S,ut[K]);const At=ut[0],wt=r.convert(S.format,S.colorSpace),it=r.convert(S.type),Lt=M(S.internalFormat,wt,it,S.colorSpace),I=S.isVideoTexture!==!0,at=Y.__version===void 0||Z===!0,J=$.dataReady;let dt=w(S,At);Pt(s.TEXTURE_CUBE_MAP,S);let Q;if(St){I&&at&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Lt,At.width,At.height);for(let K=0;K<6;K++){Q=ut[K].mipmaps;for(let pt=0;pt<Q.length;pt++){const It=Q[pt];S.format!==yn?wt!==null?I?J&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,It.width,It.height,wt,It.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Lt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,It.width,It.height,wt,it,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Lt,It.width,It.height,0,wt,it,It.data)}}}else{if(Q=S.mipmaps,I&&at){Q.length>0&&dt++;const K=ye(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Lt,K.width,K.height)}for(let K=0;K<6;K++)if(j){I?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,wt,it,ut[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Lt,ut[K].width,ut[K].height,0,wt,it,ut[K].data);for(let pt=0;pt<Q.length;pt++){const ne=Q[pt].image[K].image;I?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,ne.width,ne.height,wt,it,ne.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Lt,ne.width,ne.height,0,wt,it,ne.data)}}else{I?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,wt,it,ut[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Lt,wt,it,ut[K]);for(let pt=0;pt<Q.length;pt++){const It=Q[pt];I?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,wt,it,It.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Lt,wt,it,It.image[K])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),Y.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Mt(C,S,B,Z,$,Y){const xt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),gt=M(B.internalFormat,xt,rt,B.colorSpace),St=n.get(S),j=n.get(B);if(j.__renderTarget=S,!St.__hasExternalTextures){const ut=Math.max(1,S.width>>Y),At=Math.max(1,S.height>>Y);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,Y,gt,ut,At,S.depth,0,xt,rt,null):e.texImage2D($,Y,gt,ut,At,0,xt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),kt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,j.__webglTexture,0,vt(S)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,j.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(C,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const Z=S.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,Y=v(S.stencilBuffer,$),xt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=vt(S);kt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,Y,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,C)}else{const Z=S.textures;for(let $=0;$<Z.length;$++){const Y=Z[$],xt=r.convert(Y.format,Y.colorSpace),rt=r.convert(Y.type),gt=M(Y.internalFormat,xt,rt,Y.colorSpace),St=vt(S);B&&kt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,gt,S.width,S.height):kt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,gt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,gt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const $=Z.__webglTexture,Y=vt(S);if(S.depthTexture.format===hr)kt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(S.depthTexture.format===ur)kt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function oe(C){const S=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Z=C.texture.mipmaps;Z&&Z.length>0?Ct(S.__webglFramebuffer[0],C):Ct(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),Gt(S.__webglDepthbuffer[Z],C,!1);else{const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Y)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Gt(S.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Y)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function le(C,S,B){const Z=n.get(C);S!==void 0&&Mt(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&oe(C)}function Wt(C){const S=C.texture,B=n.get(C),Z=n.get(S);C.addEventListener("dispose",T);const $=C.textures,Y=C.isWebGLCubeRenderTarget===!0,xt=$.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let gt=0;gt<S.mipmaps.length;gt++)B.__webglFramebuffer[rt][gt]=s.createFramebuffer()}else B.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)B.__webglFramebuffer[rt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(xt)for(let rt=0,gt=$.length;rt<gt;rt++){const St=n.get($[rt]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&kt(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<$.length;rt++){const gt=$[rt];B.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const St=r.convert(gt.format,gt.colorSpace),j=r.convert(gt.type),ut=M(gt.internalFormat,St,j,gt.colorSpace,C.isXRRenderTarget===!0),At=vt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,At,ut,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Gt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Pt(s.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)Mt(B.__webglFramebuffer[rt][gt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt);else Mt(B.__webglFramebuffer[rt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let rt=0,gt=$.length;rt<gt;rt++){const St=$[rt],j=n.get(St);e.bindTexture(s.TEXTURE_2D,j.__webglTexture),Pt(s.TEXTURE_2D,St),Mt(B.__webglFramebuffer,C,St,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(St)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,Z.__webglTexture),Pt(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)Mt(B.__webglFramebuffer[gt],C,S,s.COLOR_ATTACHMENT0,rt,gt);else Mt(B.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,rt,0);m(S)&&p(rt),e.unbindTexture()}C.depthBuffer&&oe(C)}function D(C){const S=C.textures;for(let B=0,Z=S.length;B<Z;B++){const $=S[B];if(m($)){const Y=b(C),xt=n.get($).__webglTexture;e.bindTexture(Y,xt),p(Y),e.unbindTexture()}}}const De=[],Xt=[];function ee(C){if(C.samples>0){if(kt(C)===!1){const S=C.textures,B=C.width,Z=C.height;let $=s.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(C),rt=S.length>1;if(rt)for(let St=0;St<S.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const gt=C.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[St]);const j=n.get(S[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,j,0)}s.blitFramebuffer(0,0,B,Z,0,0,B,Z,$,s.NEAREST),l===!0&&(De.length=0,Xt.length=0,De.push(s.COLOR_ATTACHMENT0+St),C.depthBuffer&&C.resolveDepthBuffer===!1&&(De.push(Y),Xt.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,De))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let St=0;St<S.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,xt.__webglColorRenderbuffer[St]);const j=n.get(S[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,j,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function vt(C){return Math.min(i.maxSamples,C.samples)}function kt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function bt(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Nt(C,S){const B=C.colorSpace,Z=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Ps&&B!==ci&&(Vt.getTransfer(B)===jt?(Z!==yn||$!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=le,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=kt}function jv(s,t){function e(n,i=ci){let r;const o=Vt.getTransfer(i);if(n===Fn)return s.UNSIGNED_BYTE;if(n===Gl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return s.BYTE;if(n===hu)return s.SHORT;if(n===lr)return s.UNSIGNED_SHORT;if(n===Vl)return s.INT;if(n===Xi)return s.UNSIGNED_INT;if(n===$n)return s.FLOAT;if(n===br)return s.HALF_FLOAT;if(n===fu)return s.ALPHA;if(n===du)return s.RGB;if(n===yn)return s.RGBA;if(n===hr)return s.DEPTH_COMPONENT;if(n===ur)return s.DEPTH_STENCIL;if(n===pu)return s.RED;if(n===Xl)return s.RED_INTEGER;if(n===mu)return s.RG;if(n===Yl)return s.RG_INTEGER;if(n===ql)return s.RGBA_INTEGER;if(n===ca||n===ha||n===ua||n===fa)if(o===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===$o||n===jo||n===Jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qo||n===tl)return o===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nl)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===_l||n===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return o===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===vl||n===xl||n===Sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new ke,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vi({vertexShader:Jv,fragmentShader:Qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qe(new La(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ex extends Ki{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new tx,m=e.getContextAttributes();let p=null,b=null;const M=[],v=[],w=new ht;let A=null;const T=new un;T.viewport=new pe;const R=new un;R.viewport=new pe;const x=[T,R],y=new ym;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=M[X];return et===void 0&&(et=new co,M[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=M[X];return et===void 0&&(et=new co,M[X]=et),et.getGripSpace()},this.getHand=function(X){let et=M[X];return et===void 0&&(et=new co,M[X]=et),et.getHandSpace()};function O(X){const et=v.indexOf(X.inputSource);if(et===-1)return;const yt=M[et];yt!==void 0&&(yt.update(X.inputSource,X.frame,c||o),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",W);for(let X=0;X<M.length;X++){const et=v[X];et!==null&&(v[X]=null,M[X].disconnect(et))}P=null,F=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,b=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",G),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,ct=null,Mt=null;m.depth&&(Mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=m.stencil?ur:hr,ct=m.stencil?cr:Xi);const Gt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Gt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Yi(f.textureWidth,f.textureHeight,{format:yn,type:Fn,depthTexture:new Ru(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Yi(d.framebufferWidth,d.framebufferHeight,{format:yn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(X){for(let et=0;et<X.removed.length;et++){const yt=X.removed[et],ct=v.indexOf(yt);ct>=0&&(v[ct]=null,M[ct].disconnect(yt))}for(let et=0;et<X.added.length;et++){const yt=X.added[et];let ct=v.indexOf(yt);if(ct===-1){for(let Gt=0;Gt<M.length;Gt++)if(Gt>=v.length){v.push(yt),ct=Gt;break}else if(v[Gt]===null){v[Gt]=yt,ct=Gt;break}if(ct===-1)break}const Mt=M[ct];Mt&&Mt.connect(yt)}}const V=new L,q=new L;function H(X,et,yt){V.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(yt.matrixWorld);const ct=V.distanceTo(q),Mt=et.projectionMatrix.elements,Gt=yt.projectionMatrix.elements,Ct=Mt[14]/(Mt[10]-1),oe=Mt[14]/(Mt[10]+1),le=(Mt[9]+1)/Mt[5],Wt=(Mt[9]-1)/Mt[5],D=(Mt[8]-1)/Mt[0],De=(Gt[8]+1)/Gt[0],Xt=Ct*D,ee=Ct*De,vt=ct/(-D+De),kt=vt*-D;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(kt),X.translateZ(vt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Mt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const bt=Ct+vt,Nt=oe+vt,ye=Xt-kt,C=ee+(ct-kt),S=le*oe/Nt*bt,B=Wt*oe/Nt*bt;X.projectionMatrix.makePerspective(ye,C,S,B,bt,Nt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function nt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,yt=X.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),y.near=R.near=T.near=et,y.far=R.far=T.far=yt,(P!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,F=y.far),T.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;const ct=X.parent,Mt=y.cameras;nt(y,ct);for(let Gt=0;Gt<Mt.length;Gt++)nt(Mt[Gt],ct);Mt.length===2?H(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),lt(X,y,ct)};function lt(X,et,yt){yt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let _t=null;function Pt(X,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let ct=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let Ct=0;Ct<yt.length;Ct++){const oe=yt[Ct];let le=null;if(d!==null)le=d.getViewport(oe);else{const D=u.getViewSubImage(f,oe);le=D.viewport,Ct===0&&(t.setRenderTargetTextures(b,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(b))}let Wt=x[Ct];Wt===void 0&&(Wt=new un,Wt.layers.enable(Ct),Wt.viewport=new pe,x[Ct]=Wt),Wt.matrix.fromArray(oe.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(oe.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(le.x,le.y,le.width,le.height),Ct===0&&(y.matrix.copy(Wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(Wt)}const Mt=i.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Ct=u.getDepthInformation(yt[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,i.renderState)}}for(let yt=0;yt<M.length;yt++){const ct=v[yt],Mt=M[yt];ct!==null&&Mt!==void 0&&Mt.update(ct,et,c||o)}_t&&_t(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const qt=new ku;qt.setAnimationLoop(Pt),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}}const Ri=new Ne,nx=new ae;function ix(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,v=b.envMapRotation;M&&(m.envMap.value=M,Ri.copy(v),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(Ri)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sx(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const v=M.program;n.uniformBlockBinding(b,v)}function c(b,M){let v=i[b.id];v===void 0&&(g(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(b,w);const A=t.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){const M=u();b.__bindingPointIndex=M;const v=s.createBuffer(),w=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=i[b.id],v=b.uniforms,w=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,T=v.length;A<T;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,y=R.length;x<y;x++){const P=R[x];if(d(P,A,x,w)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let W=0;W<O.length;W++){const V=O[W],q=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+G,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,M,v,w){const A=b.value,T=M+"_"+v;if(w[T]===void 0)return typeof A=="number"||typeof A=="boolean"?w[T]=A:w[T]=A.clone(),!0;{const R=w[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return w[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(b){const M=b.uniforms;let v=0;const w=16;for(let T=0,R=M.length;T<R;T++){const x=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,P=x.length;y<P;y++){const F=x[y],O=Array.isArray(F.value)?F.value:[F.value];for(let G=0,W=O.length;G<W;G++){const V=O[G],q=_(V),H=v%w,nt=H%q.boundary,lt=H+nt;v+=nt,lt!==0&&w-lt<q.storage&&(v+=w-lt),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=q.storage}}}const A=v%w;return A>0&&(v+=w-A),b.__size=v,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class rx{constructor(t={}){const{canvas:e=sp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=hn;let A=0,T=0,R=null,x=-1,y=null;const P=new pe,F=new pe;let O=null;const G=new Zt(0);let W=0,V=e.width,q=e.height,H=1,nt=null,lt=null;const _t=new pe(0,0,V,q),Pt=new pe(0,0,V,q);let qt=!1;const X=new $l;let et=!1,yt=!1;const ct=new ae,Mt=new ae,Gt=new L,Ct=new pe,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Wt(){return R===null?H:1}let D=n;function De(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hl}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",K,!1),D===null){const U="webgl2";if(D=De(U,E),D===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Xt,ee,vt,kt,bt,Nt,ye,C,S,B,Z,$,Y,xt,rt,gt,St,j,ut,At,wt,it,Lt,I;function at(){Xt=new m0(D),Xt.init(),it=new jv(D,Xt),ee=new l0(D,Xt,t,it),vt=new Kv(D,Xt),ee.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),kt=new v0(D),bt=new Ov,Nt=new $v(D,Xt,vt,bt,ee,it,kt),ye=new h0(v),C=new p0(v),S=new bm(D),Lt=new a0(D,S),B=new _0(D,S,kt,Lt),Z=new S0(D,B,S,kt),ut=new x0(D,ee,Nt),gt=new c0(bt),$=new Nv(v,ye,C,Xt,ee,Lt,gt),Y=new ix(v,bt),xt=new Bv,rt=new Wv(Xt),j=new r0(v,ye,C,vt,Z,d,l),St=new qv(v,Z,ee),I=new sx(D,kt,ee,vt),At=new o0(D,Xt,kt),wt=new g0(D,Xt,kt),kt.programs=$.programs,v.capabilities=ee,v.extensions=Xt,v.properties=bt,v.renderLists=xt,v.shadowMap=St,v.state=vt,v.info=kt}at();const J=new ex(v,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(V,q,!1))},this.getSize=function(E){return E.set(V,q)},this.setSize=function(E,U,z=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,q=U,e.width=Math.floor(E*H),e.height=Math.floor(U*H),z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(V*H,q*H).floor()},this.setDrawingBufferSize=function(E,U,z){V=E,q=U,H=z,e.width=Math.floor(E*z),e.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,U,z,k){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,U,z,k),vt.viewport(P.copy(_t).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Pt)},this.setScissor=function(E,U,z,k){E.isVector4?Pt.set(E.x,E.y,E.z,E.w):Pt.set(E,U,z,k),vt.scissor(F.copy(Pt).multiplyScalar(H).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(E){vt.setScissorTest(qt=E)},this.setOpaqueSort=function(E){nt=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,z=!0){let k=0;if(E){let N=!1;if(R!==null){const tt=R.texture.format;N=tt===ql||tt===Yl||tt===Xl}if(N){const tt=R.texture.type,ot=tt===Fn||tt===Xi||tt===lr||tt===cr||tt===Gl||tt===Wl,mt=j.getClearColor(),ft=j.getClearAlpha(),Rt=mt.r,Dt=mt.g,Et=mt.b;ot?(g[0]=Rt,g[1]=Dt,g[2]=Et,g[3]=ft,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Rt,_[1]=Dt,_[2]=Et,_[3]=ft,D.clearBufferiv(D.COLOR,0,_))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),z&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",K,!1),j.dispose(),xt.dispose(),rt.dispose(),bt.dispose(),ye.dispose(),C.dispose(),Z.dispose(),Lt.dispose(),I.dispose(),$.dispose(),J.dispose(),J.removeEventListener("sessionstart",Tc),J.removeEventListener("sessionend",wc),Mi.stop()};function dt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=kt.autoReset,U=St.enabled,z=St.autoUpdate,k=St.needsUpdate,N=St.type;at(),kt.autoReset=E,St.enabled=U,St.autoUpdate=z,St.needsUpdate=k,St.type=N}function K(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){const U=E.target;U.removeEventListener("dispose",pt),It(U)}function It(E){ne(E),bt.remove(E)}function ne(E){const U=bt.get(E).programs;U!==void 0&&(U.forEach(function(z){$.releaseProgram(z)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,k,N,tt){U===null&&(U=oe);const ot=N.isMesh&&N.matrixWorld.determinant()<0,mt=Zf(E,U,z,k,N);vt.setMaterial(k,ot);let ft=z.index,Rt=1;if(k.wireframe===!0){if(ft=B.getWireframeAttribute(z),ft===void 0)return;Rt=2}const Dt=z.drawRange,Et=z.attributes.position;let Bt=Dt.start*Rt,$t=(Dt.start+Dt.count)*Rt;tt!==null&&(Bt=Math.max(Bt,tt.start*Rt),$t=Math.min($t,(tt.start+tt.count)*Rt)),ft!==null?(Bt=Math.max(Bt,0),$t=Math.min($t,ft.count)):Et!=null&&(Bt=Math.max(Bt,0),$t=Math.min($t,Et.count));const de=$t-Bt;if(de<0||de===1/0)return;Lt.setup(N,k,mt,z,ft);let ie,Jt=At;if(ft!==null&&(ie=S.get(ft),Jt=wt,Jt.setIndex(ie)),N.isMesh)k.wireframe===!0?(vt.setLineWidth(k.wireframeLinewidth*Wt()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(N.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),vt.setLineWidth(Tt*Wt()),N.isLineSegments?Jt.setMode(D.LINES):N.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else N.isPoints?Jt.setMode(D.POINTS):N.isSprite&&Jt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Tt=N._multiDrawStarts,ce=N._multiDrawCounts,Ht=N._multiDrawCount,Ye=ft?S.get(ft).bytesPerElement:1,Qi=bt.get(k).currentProgram.getUniforms();for(let qe=0;qe<Ht;qe++)Qi.setValue(D,"_gl_DrawID",qe),Jt.render(Tt[qe]/Ye,ce[qe])}else if(N.isInstancedMesh)Jt.renderInstances(Bt,de,N.count);else if(z.isInstancedBufferGeometry){const Tt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ce=Math.min(z.instanceCount,Tt);Jt.renderInstances(Bt,de,ce)}else Jt.render(Bt,de)};function Kt(E,U,z){E.transparent===!0&&E.side===Ln&&E.forceSinglePass===!1?(E.side=ze,E.needsUpdate=!0,Rr(E,U,z),E.side=gi,E.needsUpdate=!0,Rr(E,U,z),E.side=Ln):Rr(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),p=rt.get(z),p.init(U),M.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let ot=0;ot<tt.length;ot++){const mt=tt[ot];Kt(mt,z,N),k.add(mt)}else Kt(tt,z,N),k.add(tt)}),p=M.pop(),k},this.compileAsync=function(E,U,z=null){const k=this.compile(E,U,z);return new Promise(N=>{function tt(){if(k.forEach(function(ot){bt.get(ot).currentProgram.isReady()&&k.delete(ot)}),k.size===0){N(E);return}setTimeout(tt,10)}Xt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let _n=null;function Hn(E){_n&&_n(E)}function Tc(){Mi.stop()}function wc(){Mi.start()}const Mi=new ku;Mi.setAnimationLoop(Hn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(E){_n=E,J.setAnimationLoop(E),E===null?Mi.stop():Mi.start()},J.addEventListener("sessionstart",Tc),J.addEventListener("sessionend",wc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(U),U=J.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,R),p=rt.get(E,M.length),p.init(U),M.push(p),Mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Mt),yt=this.localClippingEnabled,et=gt.init(this.clippingPlanes,yt),m=xt.get(E,b.length),m.init(),b.push(m),J.enabled===!0&&J.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&ka(tt,U,-1/0,v.sortObjects)}ka(E,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,lt),le=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,le&&j.addToRenderList(m,E),this.info.render.frame++,et===!0&&gt.beginShadows();const z=p.state.shadowsArray;St.render(z,E,U),et===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const tt=U.cameras;if(N.length>0)for(let ot=0,mt=tt.length;ot<mt;ot++){const ft=tt[ot];Cc(k,N,E,ft)}le&&j.render(E);for(let ot=0,mt=tt.length;ot<mt;ot++){const ft=tt[ot];Ac(m,E,ft,ft.viewport)}}else N.length>0&&Cc(k,N,E,U),le&&j.render(E),Ac(m,E,U);R!==null&&T===0&&(Nt.updateMultisampleRenderTarget(R),Nt.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,U),Lt.resetDefaultState(),x=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],et===!0&&gt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ka(E,U,z,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){k&&Ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Mt);const ot=Z.update(E),mt=E.material;mt.visible&&m.push(E,ot,mt,z,Ct.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const ot=Z.update(E),mt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ct.copy(E.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Ct.copy(ot.boundingSphere.center)),Ct.applyMatrix4(E.matrixWorld).applyMatrix4(Mt)),Array.isArray(mt)){const ft=ot.groups;for(let Rt=0,Dt=ft.length;Rt<Dt;Rt++){const Et=ft[Rt],Bt=mt[Et.materialIndex];Bt&&Bt.visible&&m.push(E,ot,Bt,z,Ct.z,Et)}}else mt.visible&&m.push(E,ot,mt,z,Ct.z,null)}}const tt=E.children;for(let ot=0,mt=tt.length;ot<mt;ot++)ka(tt[ot],U,z,k)}function Ac(E,U,z,k){const N=E.opaque,tt=E.transmissive,ot=E.transparent;p.setupLightsView(z),et===!0&&gt.setGlobalState(v.clippingPlanes,z),k&&vt.viewport(P.copy(k)),N.length>0&&Cr(N,U,z),tt.length>0&&Cr(tt,U,z),ot.length>0&&Cr(ot,U,z),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Cc(E,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Yi(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?br:Fn,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[k.id],ot=k.viewport||P;tt.setSize(ot.z*v.transmissionResolutionScale,ot.w*v.transmissionResolutionScale);const mt=v.getRenderTarget(),ft=v.getActiveCubeFace(),Rt=v.getActiveMipmapLevel();v.setRenderTarget(tt),v.getClearColor(G),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),le&&j.render(z);const Dt=v.toneMapping;v.toneMapping=pi;const Et=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),et===!0&&gt.setGlobalState(v.clippingPlanes,k),Cr(E,z,k),Nt.updateMultisampleRenderTarget(tt),Nt.updateRenderTargetMipmap(tt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let $t=0,de=U.length;$t<de;$t++){const ie=U[$t],Jt=ie.object,Tt=ie.geometry,ce=ie.material,Ht=ie.group;if(ce.side===Ln&&Jt.layers.test(k.layers)){const Ye=ce.side;ce.side=ze,ce.needsUpdate=!0,Rc(Jt,z,k,Tt,ce,Ht),ce.side=Ye,ce.needsUpdate=!0,Bt=!0}}Bt===!0&&(Nt.updateMultisampleRenderTarget(tt),Nt.updateRenderTargetMipmap(tt))}v.setRenderTarget(mt,ft,Rt),v.setClearColor(G,W),Et!==void 0&&(k.viewport=Et),v.toneMapping=Dt}function Cr(E,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=E.length;N<tt;N++){const ot=E[N],mt=ot.object,ft=ot.geometry,Rt=ot.group;let Dt=ot.material;Dt.allowOverride===!0&&k!==null&&(Dt=k),mt.layers.test(z.layers)&&Rc(mt,U,z,ft,Dt,Rt)}}function Rc(E,U,z,k,N,tt){E.onBeforeRender(v,U,z,k,N,tt),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,U,z,k,E,tt),N.transparent===!0&&N.side===Ln&&N.forceSinglePass===!1?(N.side=ze,N.needsUpdate=!0,v.renderBufferDirect(z,U,k,N,E,tt),N.side=gi,N.needsUpdate=!0,v.renderBufferDirect(z,U,k,N,E,tt),N.side=Ln):v.renderBufferDirect(z,U,k,N,E,tt),E.onAfterRender(v,U,z,k,N,tt)}function Rr(E,U,z){U.isScene!==!0&&(U=oe);const k=bt.get(E),N=p.state.lights,tt=p.state.shadowsArray,ot=N.state.version,mt=$.getParameters(E,N.state,tt,U,z),ft=$.getProgramCacheKey(mt);let Rt=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?C:ye).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",pt),Rt=new Map,k.programs=Rt);let Dt=Rt.get(ft);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===ot)return Dc(E,mt),Dt}else mt.uniforms=$.getUniforms(E),E.onBeforeCompile(mt,v),Dt=$.acquireProgram(mt,ft),Rt.set(ft,Dt),k.uniforms=mt.uniforms;const Et=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=gt.uniform),Dc(E,mt),k.needsLights=$f(E),k.lightsStateVersion=ot,k.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function Pc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=pa.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Dc(E,U){const z=bt.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Zf(E,U,z,k,N){U.isScene!==!0&&(U=oe),Nt.resetTextureUnits();const tt=U.fog,ot=k.isMeshStandardMaterial?U.environment:null,mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ps,ft=(k.isMeshStandardMaterial?C:ye).get(k.envMap||ot),Rt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Et=!!z.morphAttributes.position,Bt=!!z.morphAttributes.normal,$t=!!z.morphAttributes.color;let de=pi;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(de=v.toneMapping);const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Jt=ie!==void 0?ie.length:0,Tt=bt.get(k),ce=p.state.lights;if(et===!0&&(yt===!0||E!==y)){const Le=E===y&&k.id===x;gt.setState(k,E,Le)}let Ht=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ce.state.version||Tt.outputColorSpace!==mt||N.isBatchedMesh&&Tt.batching===!1||!N.isBatchedMesh&&Tt.batching===!0||N.isBatchedMesh&&Tt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Tt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Tt.instancing===!1||!N.isInstancedMesh&&Tt.instancing===!0||N.isSkinnedMesh&&Tt.skinning===!1||!N.isSkinnedMesh&&Tt.skinning===!0||N.isInstancedMesh&&Tt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Tt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Tt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Tt.instancingMorph===!1&&N.morphTexture!==null||Tt.envMap!==ft||k.fog===!0&&Tt.fog!==tt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==gt.numPlanes||Tt.numIntersection!==gt.numIntersection)||Tt.vertexAlphas!==Rt||Tt.vertexTangents!==Dt||Tt.morphTargets!==Et||Tt.morphNormals!==Bt||Tt.morphColors!==$t||Tt.toneMapping!==de||Tt.morphTargetsCount!==Jt)&&(Ht=!0):(Ht=!0,Tt.__version=k.version);let Ye=Tt.currentProgram;Ht===!0&&(Ye=Rr(k,U,N));let Qi=!1,qe=!1,Vs=!1;const se=Ye.getUniforms(),rn=Tt.uniforms;if(vt.useProgram(Ye.program)&&(Qi=!0,qe=!0,Vs=!0),k.id!==x&&(x=k.id,qe=!0),Qi||y!==E){vt.buffers.depth.getReversed()?(ct.copy(E.projectionMatrix),ap(ct),op(ct),se.setValue(D,"projectionMatrix",ct)):se.setValue(D,"projectionMatrix",E.projectionMatrix),se.setValue(D,"viewMatrix",E.matrixWorldInverse);const Be=se.map.cameraPosition;Be!==void 0&&Be.setValue(D,Gt.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&se.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&se.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,qe=!0,Vs=!0)}if(N.isSkinnedMesh){se.setOptional(D,N,"bindMatrix"),se.setOptional(D,N,"bindMatrixInverse");const Le=N.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),se.setValue(D,"boneTexture",Le.boneTexture,Nt))}N.isBatchedMesh&&(se.setOptional(D,N,"batchingTexture"),se.setValue(D,"batchingTexture",N._matricesTexture,Nt),se.setOptional(D,N,"batchingIdTexture"),se.setValue(D,"batchingIdTexture",N._indirectTexture,Nt),se.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&se.setValue(D,"batchingColorTexture",N._colorsTexture,Nt));const an=z.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ut.update(N,z,Ye),(qe||Tt.receiveShadow!==N.receiveShadow)&&(Tt.receiveShadow=N.receiveShadow,se.setValue(D,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(rn.envMap.value=ft,rn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),qe&&(se.setValue(D,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&Kf(rn,Vs),tt&&k.fog===!0&&Y.refreshFogUniforms(rn,tt),Y.refreshMaterialUniforms(rn,k,H,q,p.state.transmissionRenderTarget[E.id]),pa.upload(D,Pc(Tt),rn,Nt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(pa.upload(D,Pc(Tt),rn,Nt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&se.setValue(D,"center",N.center),se.setValue(D,"modelViewMatrix",N.modelViewMatrix),se.setValue(D,"normalMatrix",N.normalMatrix),se.setValue(D,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Le=k.uniformsGroups;for(let Be=0,Ha=Le.length;Be<Ha;Be++){const Ei=Le[Be];I.update(Ei,Ye),I.bind(Ei,Ye)}}return Ye}function Kf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function $f(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,z){const k=bt.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),bt.get(E.texture).__webglTexture=U,bt.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const z=bt.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const jf=D.createFramebuffer();this.setRenderTarget=function(E,U=0,z=0){R=E,A=U,T=z;let k=!0,N=null,tt=!1,ot=!1;if(E){const ft=bt.get(E);if(ft.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(ft.__webglFramebuffer===void 0)Nt.setupRenderTarget(E);else if(ft.__hasExternalTextures)Nt.rebindTextures(E,bt.get(E.texture).__webglTexture,bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(ft.__boundDepthTexture!==Et){if(Et!==null&&bt.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(E)}}const Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ot=!0);const Dt=bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?N=Dt[U][z]:N=Dt[U],tt=!0):E.samples>0&&Nt.useMultisampledRTT(E)===!1?N=bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?N=Dt[z]:N=Dt,P.copy(E.viewport),F.copy(E.scissor),O=E.scissorTest}else P.copy(_t).multiplyScalar(H).floor(),F.copy(Pt).multiplyScalar(H).floor(),O=qt;if(z!==0&&(N=jf),vt.bindFramebuffer(D.FRAMEBUFFER,N)&&k&&vt.drawBuffers(E,N),vt.viewport(P),vt.scissor(F),vt.setScissorTest(O),tt){const ft=bt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,z)}else if(ot){const ft=bt.get(E.texture),Rt=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ft.__webglTexture,z,Rt)}else if(E!==null&&z!==0){const ft=bt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ft.__webglTexture,z)}x=-1},this.readRenderTargetPixels=function(E,U,z,k,N,tt,ot,mt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){vt.bindFramebuffer(D.FRAMEBUFFER,ft);try{const Rt=E.textures[mt],Dt=Rt.format,Et=Rt.type;if(!ee.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&z>=0&&z<=E.height-N&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),D.readPixels(U,z,k,N,it.convert(Dt),it.convert(Et),tt))}finally{const Rt=R!==null?bt.get(R).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,k,N,tt,ot,mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft)if(U>=0&&U<=E.width-k&&z>=0&&z<=E.height-N){vt.bindFramebuffer(D.FRAMEBUFFER,ft);const Rt=E.textures[mt],Dt=Rt.format,Et=Rt.type;if(!ee.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.bufferData(D.PIXEL_PACK_BUFFER,tt.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),D.readPixels(U,z,k,N,it.convert(Dt),it.convert(Et),0);const $t=R!==null?bt.get(R).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,$t);const de=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await rp(D,de,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,tt),D.deleteBuffer(Bt),D.deleteSync(de),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,z=0){const k=Math.pow(2,-z),N=Math.floor(E.image.width*k),tt=Math.floor(E.image.height*k),ot=U!==null?U.x:0,mt=U!==null?U.y:0;Nt.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ot,mt,N,tt),vt.unbindTexture()};const Jf=D.createFramebuffer(),Qf=D.createFramebuffer();this.copyTextureToTexture=function(E,U,z=null,k=null,N=0,tt=null){tt===null&&(N!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let ot,mt,ft,Rt,Dt,Et,Bt,$t,de;const ie=E.isCompressedTexture?E.mipmaps[tt]:E.image;if(z!==null)ot=z.max.x-z.min.x,mt=z.max.y-z.min.y,ft=z.isBox3?z.max.z-z.min.z:1,Rt=z.min.x,Dt=z.min.y,Et=z.isBox3?z.min.z:0;else{const an=Math.pow(2,-N);ot=Math.floor(ie.width*an),mt=Math.floor(ie.height*an),E.isDataArrayTexture?ft=ie.depth:E.isData3DTexture?ft=Math.floor(ie.depth*an):ft=1,Rt=0,Dt=0,Et=0}k!==null?(Bt=k.x,$t=k.y,de=k.z):(Bt=0,$t=0,de=0);const Jt=it.convert(U.format),Tt=it.convert(U.type);let ce;U.isData3DTexture?(Nt.setTexture3D(U,0),ce=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Nt.setTexture2DArray(U,0),ce=D.TEXTURE_2D_ARRAY):(Nt.setTexture2D(U,0),ce=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Ht=D.getParameter(D.UNPACK_ROW_LENGTH),Ye=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qi=D.getParameter(D.UNPACK_SKIP_PIXELS),qe=D.getParameter(D.UNPACK_SKIP_ROWS),Vs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ie.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ie.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Et);const se=E.isDataArrayTexture||E.isData3DTexture,rn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const an=bt.get(E),Le=bt.get(U),Be=bt.get(an.__renderTarget),Ha=bt.get(Le.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,Be.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ha.__webglFramebuffer);for(let Ei=0;Ei<ft;Ei++)se&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(E).__webglTexture,N,Et+Ei),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,tt,de+Ei)),D.blitFramebuffer(Rt,Dt,ot,mt,Bt,$t,ot,mt,D.DEPTH_BUFFER_BIT,D.NEAREST);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||bt.has(E)){const an=bt.get(E),Le=bt.get(U);vt.bindFramebuffer(D.READ_FRAMEBUFFER,Jf),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qf);for(let Be=0;Be<ft;Be++)se?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,N,Et+Be):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,N),rn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.__webglTexture,tt,de+Be):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Le.__webglTexture,tt),N!==0?D.blitFramebuffer(Rt,Dt,ot,mt,Bt,$t,ot,mt,D.COLOR_BUFFER_BIT,D.NEAREST):rn?D.copyTexSubImage3D(ce,tt,Bt,$t,de+Be,Rt,Dt,ot,mt):D.copyTexSubImage2D(ce,tt,Bt,$t,Rt,Dt,ot,mt);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else rn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(ce,tt,Bt,$t,de,ot,mt,ft,Jt,Tt,ie.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(ce,tt,Bt,$t,de,ot,mt,ft,Jt,ie.data):D.texSubImage3D(ce,tt,Bt,$t,de,ot,mt,ft,Jt,Tt,ie):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,tt,Bt,$t,ot,mt,Jt,Tt,ie.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,tt,Bt,$t,ie.width,ie.height,Jt,ie.data):D.texSubImage2D(D.TEXTURE_2D,tt,Bt,$t,ot,mt,Jt,Tt,ie);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qi),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vs),tt===0&&U.generateMipmaps&&D.generateMipmap(ce),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,k=null,N=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,k,N)},this.initRenderTarget=function(E){bt.get(E).__webglFramebuffer===void 0&&Nt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Nt.setTextureCube(E,0):E.isData3DTexture?Nt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Nt.setTexture2DArray(E,0):Nt.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,vt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}var je=Object.freeze({Linear:Object.freeze({None:function(s){return s},In:function(s){return this.None(s)},Out:function(s){return this.None(s)},InOut:function(s){return this.None(s)}}),Quadratic:Object.freeze({In:function(s){return s*s},Out:function(s){return s*(2-s)},InOut:function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)}}),Cubic:Object.freeze({In:function(s){return s*s*s},Out:function(s){return--s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)}}),Quartic:Object.freeze({In:function(s){return s*s*s*s},Out:function(s){return 1- --s*s*s*s},InOut:function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)}}),Quintic:Object.freeze({In:function(s){return s*s*s*s*s},Out:function(s){return--s*s*s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)}}),Sinusoidal:Object.freeze({In:function(s){return 1-Math.sin((1-s)*Math.PI/2)},Out:function(s){return Math.sin(s*Math.PI/2)},InOut:function(s){return .5*(1-Math.sin(Math.PI*(.5-s)))}}),Exponential:Object.freeze({In:function(s){return s===0?0:Math.pow(1024,s-1)},Out:function(s){return s===1?1:1-Math.pow(2,-10*s)},InOut:function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)}}),Circular:Object.freeze({In:function(s){return 1-Math.sqrt(1-s*s)},Out:function(s){return Math.sqrt(1- --s*s)},InOut:function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)}}),Elastic:Object.freeze({In:function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},Out:function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},InOut:function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(s){var t=1.70158;return s===1?1:s*s*((t+1)*s-t)},Out:function(s){var t=1.70158;return s===0?0:--s*s*((t+1)*s+t)+1},InOut:function(s){var t=2.5949095;return(s*=2)<1?.5*(s*s*((t+1)*s-t)):.5*((s-=2)*s*((t+1)*s+t)+2)}}),Bounce:Object.freeze({In:function(s){return 1-je.Bounce.Out(1-s)},Out:function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},InOut:function(s){return s<.5?je.Bounce.In(s*2)*.5:je.Bounce.Out(s*2-1)*.5+.5}}),generatePow:function(s){return s===void 0&&(s=4),s=s<Number.EPSILON?Number.EPSILON:s,s=s>1e4?1e4:s,{In:function(t){return Math.pow(t,s)},Out:function(t){return 1-Math.pow(1-t,s)},InOut:function(t){return t<.5?Math.pow(t*2,s)/2:(1-Math.pow(2-t*2,s))/2+.5}}}}),js=function(){return performance.now()},ax=function(){function s(){this._tweens={},this._tweensAddedDuringUpdate={}}return s.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},s.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},s.prototype.update=function(t,e){t===void 0&&(t=js()),e===void 0&&(e=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]],o=!e;r&&r.update(t,o)===!1&&!e&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},s}(),bl={Linear:function(s,t){var e=s.length-1,n=e*t,i=Math.floor(n),r=bl.Utils.Linear;return t<0?r(s[0],s[1],n):t>1?r(s[e],s[e-1],e-n):r(s[i],s[i+1>e?e:i+1],n-i)},Utils:{Linear:function(s,t,e){return(t-s)*e+s}}},Xu=function(){function s(){}return s.nextId=function(){return s._nextId++},s._nextId=0,s}(),Tl=new ax,Es=function(){function s(t,e){e===void 0&&(e=Tl),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=je.Linear.None,this._interpolationFunction=bl.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Xu.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.getDuration=function(){return this._duration},s.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},s.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},s.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},s.prototype.start=function(t,e){if(t===void 0&&(t=js()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var r in this._valuesEnd)i[r]=this._valuesEnd[r];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},s.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},s.prototype._setupProperties=function(t,e,n,i,r){for(var o in n){var a=t[o],l=Array.isArray(a),c=l?"array":typeof a,h=!l&&Array.isArray(n[o]);if(!(c==="undefined"||c==="function")){if(h){var u=n[o];if(u.length===0)continue;for(var f=[a],d=0,g=u.length;d<g;d+=1){var _=this._handleRelativeValue(a,u[d]);if(isNaN(_)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(_)}h&&(n[o]=f)}if((c==="object"||l)&&a&&!h){e[o]=l?[]:{};var m=a;for(var p in m)e[o][p]=m[p];i[o]=l?[]:{};var u=n[o];if(!this._isDynamic){var b={};for(var p in u)b[p]=u[p];n[o]=u=b}this._setupProperties(m,e[o],u,i[o],r)}else(typeof e[o]>"u"||r)&&(e[o]=a),l||(e[o]*=1),h?i[o]=n[o].slice().reverse():i[o]=e[o]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},s.prototype.pause=function(t){return t===void 0&&(t=js()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},s.prototype.resume=function(t){return t===void 0&&(t=js()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},s.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},s.prototype.group=function(t){return t===void 0&&(t=Tl),this._group=t,this},s.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},s.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},s.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},s.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},s.prototype.easing=function(t){return t===void 0&&(t=je.Linear.None),this._easingFunction=t,this},s.prototype.interpolation=function(t){return t===void 0&&(t=bl.Linear),this._interpolationFunction=t,this},s.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},s.prototype.onStart=function(t){return this._onStartCallback=t,this},s.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},s.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},s.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},s.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},s.prototype.onStop=function(t){return this._onStopCallback=t,this},s.prototype.update=function(t,e){var n=this,i;if(t===void 0&&(t=js()),e===void 0&&(e=!0),this._isPaused)return!0;var r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>o)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=t-this._startTime,l=this._duration+((i=this._repeatDelayTime)!==null&&i!==void 0?i:this._delayTime),c=this._duration+this._repeat*l,h=function(){if(n._duration===0||a>c)return 1;var m=Math.trunc(a/l),p=a-m*l,b=Math.min(p/n._duration,1);return b===0&&a===n._duration?1:b},u=h(),f=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||a>=this._duration)if(this._repeat>0){var d=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=d);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*d,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,_=this._chainedTweens.length;g<_;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(t,e,n,i){for(var r in n)if(e[r]!==void 0){var o=e[r]||0,a=n[r],l=Array.isArray(t[r]),c=Array.isArray(a),h=!l&&c;h?t[r]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(t[r],o,a,i):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(t[r]=o+(a-o)*i))}},s.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},s.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},s}();Xu.nextId;var Bn=Tl;Bn.getAll.bind(Bn);Bn.removeAll.bind(Bn);Bn.add.bind(Bn);Bn.remove.bind(Bn);var ox=Bn.update.bind(Bn);class lx{constructor(t){this.scene=new Lp,this.camera=null,this.cameraRadius=430,this.cameraHeight=this.cameraRadius/Math.sqrt(3),this.cameraPanelRadius=this.cameraHeight*Math.sqrt(2);const e=document.getElementById("cube");if(!e){console.error("Canvas element with ID 'cube' not found!");return}if(this.canvas=e,t==="Perspective")this.camera=new un(25,e.clientWidth/e.clientHeight,.1,1e3),console.log("Using PerspectiveCamera");else{const i=e.clientWidth/e.clientHeight;this.camera=new nc(-50*i,50*i,50,-50,.1,500),console.log("Using OrthographicCamera")}this.renderer=new rx({canvas:e,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.axesHelper=this.createAxes(),console.log("Renderer created and initialized.")}init(){this.repositionCamera(!1),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.setClearColor(2631720,1),this.addLighting(),window.addEventListener("resize",()=>this.onWindowResize(),!1)}addLighting(){const t=new Sm(16777215,.5);this.scene.add(t);const e=new xm(16777215,.8);e.position.set(100,150,100),this.scene.add(e)}createAxes(){let t=[];const e=new L(-40,-40,-40),n=new L(1,0,0),i=new L(0,1,0),r=new L(0,0,1),o=20,a=[16711680,65280,255];return t.push(new vo(n,e,o,a[0])),t.push(new vo(i,e,o,a[1])),t.push(new vo(r,e,o,a[2])),t.forEach(l=>{this.scene.add(l)}),t}onWindowResize(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;if(this.camera.isPerspectiveCamera)this.camera.aspect=t/e;else if(this.camera.isOrthographicCamera){const i=t/e;this.camera.left=-50*i,this.camera.right=50*i,this.camera.top=50,this.camera.bottom=-50}this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(window.devicePixelRatio),this.render()}repositionCamera(t=!1,e){let n=new L(this.cameraHeight,-this.cameraHeight,-this.cameraHeight);if(t===!1)this.camera.position.copy(n),this.camera.up.set(0,-1,0),this.camera.lookAt(0,0,0);else{e.enabled=!1;let i=new ph().setFromVector3(this.camera.position),r=new ph().setFromVector3(n);Math.abs(i.phi-r.phi)>Math.PI&&(i.phi>r.phi?r.phi+=2*Math.PI:r.phi-=2*Math.PI),console.log(this.camera.position,this.camera.up),new Es(i).to(r,1e3).onUpdate(()=>{this.camera.position.setFromSpherical(i),console.log(this.camera.position,this.camera.up),this.camera.lookAt(0,0,0)}).easing(je.Quadratic.InOut).start().onComplete(()=>{e.enabled=!0}),new Es(this.camera.up).to({x:-.5,y:-.5,z:.5},1e3).easing(je.Quadratic.Out).start()}}getDeg(t){let e=Math.acos(t.x/Math.sqrt(t.x*t.x+t.y*t.y));t.y<0&&(e=-e);let n=Math.acos(t.z/this.cameraRadius);return{x:e,y:n}}addMesh(t){this.scene.add(t)}render(){this.renderer.render(this.scene,this.camera)}setLoop(t){this.renderer.setAnimationLoop(t)}moveCamera(t){this.camera.position.set(t.x,t.y,t.z),this.camera.updateProjectionMatrix(),this.render()}moveCameraZ(t){this.camera.position.z=t,this.camera.updateProjectionMatrix(),this.render()}moveCameraX(t){this.camera.position.x=t,this.camera.updateProjectionMatrix(),this.render()}moveCameraY(t){this.camera.position.y=t,this.camera.updateProjectionMatrix(),this.render()}addMouseCtl(t){this.mouseCtl=t}rotateCamera(t,e){this.mouseCtl.enabled=!1;let n=Math.acos(this.camera.position.x/this.cameraPanelRadius);this.camera.position.z<0&&(n=-n);let i={deg:n};const r={deg:n+t};new Es(i).to(r,e).onUpdate(()=>{this.camera.position.set(this.cameraPanelRadius*Math.cos(i.deg),this.camera.position.y,this.cameraPanelRadius*Math.sin(i.deg)),this.camera.up.set(0,-1,0),this.camera.lookAt(0,0,0)}).easing(je.Quadratic.Out).onComplete(()=>{this.mouseCtl.enabled=!0}).start()}}class ji{constructor(t,e,n,i){this.name=t,this.hexStr=e,this.hex=n,this.r=n>>16&255,this.g=n>>8&255,this.b=n&255,this.symbol=i}}const bn=new ji("white","#EEEEEE",15658734,"W"),Tn=new ji("orange","#EE6600",15623680,"O"),wn=new ji("blue","#2255DD",2250205,"B"),An=new ji("green","#009922",39202,"G"),Cn=new ji("yellow","#FFCC00",16763904,"Y"),Rn=new ji("red","#CC0000",13369344,"R"),Fi=new ji("NA","#DDDDDD",986895,"*"),cx={W:bn,O:Tn,B:wn,G:An,Y:Cn,R:Rn,"*":Fi};function hx(s,t,e){const n=new Uu,i=-s/2,r=-t/2;return n.moveTo(i,r+e),n.lineTo(i,r+t-e),n.quadraticCurveTo(i,r+t,i+e,r+t),n.lineTo(i+s-e,r+t),n.quadraticCurveTo(i+s,r+t,i+s,r+t-e),n.lineTo(i+s,r+e),n.quadraticCurveTo(i+s,r,i+s-e,r),n.lineTo(i+e,r),n.quadraticCurveTo(i,r,i,r+e),new ec(n)}class ux{constructor(t,e,n,i){this.cube=t,this.id=e,this.setAddress(e),this.size=t.cubeletSize||6,this.radius=this.size,this.X=(this.addX-1)*this.size,this.Y=(this.addY-1)*this.size,this.Z=(this.addZ-1)*this.size,this.anchor=new Se,this.cube?this.cube.threeObject.add(this.anchor):this.renderer.addMesh(this.anchor);const r=new ks(this.size,this.size,this.size),o=new dr({color:526344});this.mesh=new Qe(r,o),this.mesh.position.set(this.X,this.Y,this.Z),this.anchor.add(this.mesh);const a=this.size*.9,l=this.size*.9,c=this.size*.15,h=.3,u=[{id:4,pos:new L(0,0,this.size/2),rot:new Ne(0,0,0)},{id:2,pos:new L(0,this.size/2,0),rot:new Ne(-Math.PI/2,0,0)},{id:0,pos:new L(this.size/2,0,0),rot:new Ne(0,Math.PI/2,0)},{id:3,pos:new L(0,-this.size/2,0),rot:new Ne(Math.PI/2,0,0)},{id:1,pos:new L(-this.size/2,0,0),rot:new Ne(0,-Math.PI/2,0)},{id:5,pos:new L(0,0,-this.size/2),rot:new Ne(0,Math.PI,0)}];this.faces=[];for(let f=0;f<6;f++){const d=n[f]||Fi;if(this.faces[f]={mesh:null,color:d},d===Fi)continue;const g=u.find(M=>M.id===f);if(!g)continue;const _=hx(a,l,c),m=new dr({color:d.hex,side:Ln}),p=new Qe(_,m),b=g.pos.clone().normalize().multiplyScalar(this.size/2+h);p.position.copy(b),p.rotation.copy(g.rot),this.faces[f].mesh=p,this.mesh.add(p)}this.map(),this.mesh.rotation.set(0,0,0),this.x=0,this.y=0,this.z=0,this.previousX=0,this.previousY=0,this.previousZ=0,this.isTwisting=!1,console.log("created cubelet",this.id,this.X,this.Y,this.Z)}map(){this.front=this.faces[5],this.up=this.faces[3],this.right=this.faces[0],this.down=this.faces[2],this.left=this.faces[1],this.back=this.faces[4]}setAddress(t){this.addX=t%3,this.addY=t%9/3|0,this.addZ=t/9|0}setRadius(t,e,n){console.log("setRadius",t),this.X=(this.addX-1)*t,this.Y=(this.addY-1)*t,this.Z=(this.addZ-1)*t,this.radius=t;let i=null;n==="In"?i=je.Quadratic.In:n==="Out"?i=je.Quadratic.Out:i=je.Quadratic.InOut,new Es(this.mesh.position).to({x:this.X,y:this.Y,z:this.Z},e).easing(i).start().onComplete(()=>{console.log("radius done")})}clearColor(){const e=Fi.r/255;this.mesh.traverse(n=>{n instanceof Qe&&n!==this.mesh&&new Es(n.material.color).to({r:e,g:e,b:e},200).easing(je.Quadratic.Out).start().onComplete(()=>{console.log("finish")})});for(let n=0;n<6;n++)this.faces[n].color=Fi;this.map()}fillColor(t){for(let e=0;e<6;e++)if(t[e]!==Fi){if(this.faces[e].color=t[e],this.faces[e].mesh===null){console.log("error colorless");continue}this.faces[e].mesh.material.color.set(t[e].hex)}this.map()}rotate(t,e,n,i){let r=0,o=0,a=0;const l=.01;this.cube.isTwisting=!0,t=="X"?(r=e,this.cube.isEngagedX=!0):t=="x"?(r=-e,this.cube.isEngagedX=!0):t=="Y"?(o=e,this.cube.isEngagedY=!0):t=="y"?(o=-e,this.cube.isEngagedY=!0):t=="Z"?(a=e,this.cube.isEngagedZ=!0):t=="z"&&(a=-e,this.cube.isEngagedZ=!0);const c=Math.max(Math.abs(e)/90*n,50);this.previousX=this.x,this.previousY=this.y,this.previousZ=this.z,this.x+=r,this.y+=o,this.z+=a,new Es(this.anchor.rotation).to({x:-r*(Math.PI/180),y:-o*(Math.PI/180),z:-a*(Math.PI/180)},c).easing(je.Quadratic.Out).start().onComplete(()=>{this.cube.renderer.render(),this.mesh.applyMatrix4(this.anchor.matrix),this.anchor.rotation.set(0,0,0);let h=Math.abs(Math.floor(this.x/90)-Math.floor(this.previousX/90)),u=Math.abs(Math.floor(this.y/90)-Math.floor(this.previousY/90)),f=Math.abs(Math.floor(this.z/90)-Math.floor(this.previousZ/90));if(h){for(;h--;)r<0?this.faces=[this.right,this.left,this.front,this.back,this.down,this.up]:this.faces=[this.right,this.left,this.back,this.front,this.up,this.down],this.map();i&&(i(this.cube.cubelets.slice()),this.cube.map())}if(Math.abs(this.x%90)<l&&(this.x=Math.round(this.x/90)*90,this.previousX=this.x,this.cube.isEngagedX=!1),u){for(;u--;)o>0?this.faces=[this.front,this.back,this.down,this.up,this.right,this.left]:this.faces=[this.back,this.front,this.down,this.up,this.left,this.right],this.map();i&&(i(this.cube.cubelets.slice()),this.cube.map())}if(Math.abs(this.y%90)<l&&(this.y=Math.round(this.y/90)*90,this.previousY=this.y,this.cube.isEngagedY=!1),f){for(;f--;)a>0?this.faces=[this.down,this.up,this.left,this.right,this.back,this.front]:this.faces=[this.up,this.down,this.right,this.left,this.back,this.front],this.map();i&&(i(this.cube.cubelets.slice()),this.cube.map())}Math.abs(this.z%90)<l&&(this.z=Math.round(this.z/90)*90,this.previousZ=this.z,this.cube.isEngagedZ=!1)})}}const fx={front:{x:!1,y:!0,z:!1,ids:[0,1,2,3,4,5,6,7,8]},standing:{x:!1,y:!0,z:!1,ids:[9,10,11,12,13,14,15,16,17]},back:{x:!1,y:!0,z:!1,ids:[24,25,26,21,22,23,18,19,20]},left:{x:!1,y:!1,z:!0,ids:[18,9,0,21,12,3,24,15,6]},middle:{x:!1,y:!1,z:!0,ids:[1,4,7,10,13,16,19,22,25]},right:{x:!1,y:!1,z:!0,ids:[2,11,20,5,14,23,8,17,26]},up:{x:!0,y:!1,z:!1,ids:[18,19,20,9,10,11,0,1,2]},equator:{x:!0,y:!1,z:!1,ids:[3,4,5,12,13,14,21,22,23]},down:{x:!0,y:!1,z:!1,ids:[6,7,8,15,16,17,24,25,26]},corner:{ids:[0,2,6,8,18,20,26,24]},edge:{ids:[1,3,5,7,9,11,15,17,19,23,25,21]},center:{ids:[4,10,12,14,16,22]}};class ln{constructor(t,e){this.name=t,this.info=fx[t],this.cubelets=[],this.info.ids.forEach(n=>{this.cubelets.push(e[n])})}getIds(){return this.info.ids}}class dx{constructor(t){this.history=[],this.future=[],this.taskHandler=t}push(t){this.future.push(t)}doTask(){if(this.future.length==0)return;let t=this.future.shift();this.taskHandler(t,!1),this.history.push(t)}unDoTask(){if(this.future=[],this.history.length===0)return;let t=this.history[this.history.length-1];this.history.pop(),this.taskHandler(t,!0)}pop(){return this.future.length==0?null:this.future.shift()}getTaskNum(){return this.future.length}front(){return this.future.length==0?null:this.que[0]}empty(){return this.history.length===0}clear(){this.future=[]}clearHis(){this.history=[]}printTask(){this.future.forEach(t=>{console.log(t.command)})}futureSize(){return this.future.length}historySize(){return this.history.length}}class px{constructor(t){console.log("start cube constructor"),this.cubeletSize=20,this.size=this.cubeletSize*3,this.renderer=t,this.threeObject=new Se,t.addMesh(this.threeObject),this.cubelets=[];let e=[[,wn,,Rn,,bn],[,,,Rn,,bn],[An,,,Rn,,bn],[,wn,,,,bn],[,,,,,bn],[An,,,,,bn],[,wn,Tn,,,bn],[,,Tn,,,bn],[An,,Tn,,,bn],[,wn,,Rn,,],[,,,Rn,,],[An,,,Rn,,],[,wn,,,,],[,,,,,],[An,,,,,],[,wn,Tn,,,],[,,Tn,,,],[An,,Tn,,,],[,wn,,Rn,Cn],[,,,Rn,Cn],[An,,,Rn,Cn],[,wn,,,Cn],[,,,,Cn],[An,,,,Cn],[,wn,Tn,,Cn],[,,Tn,,Cn],[An,,Tn,,Cn]];e.forEach((n,i)=>{this.cubelets.push(new ux(this,i,n,this.renderer))}),this.printMapStr(e),this.map(),this.center=new ln("center",this.cubelets),this.edge=new ln("edge",this.cubelets),this.corner=new ln("corner",this.cubelets),this.faces=[this.front,this.back,this.right,this.left,this.up,this.down],this.isTwisting=!1,this.isEngagedX=!1,this.isEngagedY=!1,this.isEngagedZ=!1,this.twistQue=new dx(this.twist.bind(this)),this.reverseCb=null,this.isReversing=!1,this.statusMap=["idle","ctrlBot","BotSolving"],this.status="idle",this.getingColor=!1,this.setTwistDuration=this.setTwistDuration.bind(this),this.stopTwist=this.stopTwist.bind(this),this.reverse=this.reverse.bind(this),this.pushTwist=this.pushTwist.bind(this),this.printMap=this.printMap.bind(this),this.isCmdcb=!0,this.twistDuration=200,console.log("created cubelets")}map(){this.front=new ln("front",this.cubelets),this.standing=new ln("standing",this.cubelets),this.back=new ln("back",this.cubelets),this.left=new ln("left",this.cubelets),this.middle=new ln("middle",this.cubelets),this.right=new ln("right",this.cubelets),this.up=new ln("up",this.cubelets),this.equator=new ln("equator",this.cubelets),this.down=new ln("down",this.cubelets)}update(){!this.isTwisting&&!this.isReversing&&this.twistQue.getTaskNum()&&this.twistQue.doTask(),this.isReversing&&(this.twistQue.empty()?(this.isReversing=!1,this.reverseCb()):this.isTwisting||this.twistQue.unDoTask()),ox()}pushTwist(t){console.log(t),this.isReversing||this.twistQue.push({command:t,degree:90})}popAllTwist(t){console.log(t),this.twistQue.clear()}clearHis(t){this.twistQue.clearHis()}reverse(){this.popAllTwist("q"),this.isReversing=!0}stopTwist(){this.popAllTwist("q")}clearColor(){this.cubelets.forEach(t=>{t.clearColor()}),this.renderer.render()}fillColor(t){for(let e=0;e<27;e++){let n=[];[...t[e]].forEach(i=>{n.push(cx[i])}),this.cubelets[e].fillColor(n)}this.renderer.render()}printMapStr(t){let e="";for(let n=0;n<27;n++){e+='"';let i=t[n];for(let r=0;r<6;r++)i[r]===null||i[r]===void 0?e+=Fi.symbol:e+=i[r].symbol;e+='",',(n+1)%3===0&&(e+=`
`)}console.log(e)}printMap(t){let e=this.up.cubelets,n=this.left.cubelets,i=this.front.cubelets,r=this.down.cubelets,o=this.right.cubelets,a=this.back.cubelets,l="";if(t===1){for(let u=0;u<27;u++){u!=0&&(l+="+"),l+='"';for(let f=0;f<6;f++)l+=this.cubelets[u].faces[f].color.symbol;l+='"',(1+u)%3===0&&(l+=`
`)}console.log(l);return}l+=" ".repeat(11)+"_".repeat(9)+`
`;for(let u=0;u<9;u+=3)l+=" ".repeat(10),l+="| ",l+=e[u].up.color.symbol+"  "+e[u+1].up.color.symbol+"  "+e[u+2].up.color.symbol,l+=` |
`,u!=6&&(l+=" ".repeat(10),l+="|"+" ".repeat(9)+`|
`);const c="|"+"=".repeat(9),h="|"+" ".repeat(9);l+=c.repeat(3)+`|
`;for(let u=0;u<9;u+=3)l+="| "+n[u].left.color.symbol+"  "+n[u+1].left.color.symbol+"  "+n[u+2].left.color.symbol+" ",l+="| "+i[u].front.color.symbol+"  "+i[u+1].front.color.symbol+"  "+i[u+2].front.color.symbol+" ",l+="| "+o[u].right.color.symbol+"  "+o[u+1].right.color.symbol+"  "+o[u+2].right.color.symbol+` |
`,u!=6&&(l+=h.repeat(3)+`|
`);l+=c.repeat(3)+`|
`;for(let u=0;u<9;u+=3)l+=" ".repeat(10),l+="| ",l+=r[u].down.color.symbol+"  "+r[u+1].down.color.symbol+"  "+r[u+2].down.color.symbol,l+=` |
`,u!=6&&(l+=" ".repeat(10),l+=h+`|
`);l+=" ".repeat(10),l+=c+`|
`;for(let u=0;u<9;u+=3)l+=" ".repeat(10),l+="| ",l+=a[u].back.color.symbol+"  "+a[u+1].back.color.symbol+"  "+a[u+2].back.color.symbol,l+=` |
`,u!=6&&(l+=" ".repeat(10),l+=h+`|
`);l+=" ".repeat(10),l+=c+`|
`,console.log(l)}setTwistDuration(t){this.twistDuration=t}twist(t,e){console.log(t);let n=t.command,i=t.degree;if(this.isTwisting)return;this.isTwisting=!0,e===!0&&(n===n.toUpperCase()?n=n.toLowerCase():n=n.toUpperCase());const r=this.twistDuration;if(n=="X"&&!this.isEngagedY&&!this.isEngagedZ){const o=a=>{console.log("X callback"),this.cubelets=[a[6],a[7],a[8],a[15],a[16],a[17],a[24],a[25],a[26],a[3],a[4],a[5],a[12],a[13],a[14],a[21],a[22],a[23],a[0],a[1],a[2],a[9],a[10],a[11],a[18],a[19],a[20]],this.isTwisting=!1};this.cubelets.forEach((a,l)=>{l===this.cubelets.length-1?a.rotate("X",i,r,o):a.rotate("X",i,r,null)})}else if(n=="x"&&!this.isEngagedY&&!this.isEngagedZ){const o=a=>{console.log("x callback"),this.cubelets=[a[18],a[19],a[20],a[9],a[10],a[11],a[0],a[1],a[2],a[21],a[22],a[23],a[12],a[13],a[14],a[3],a[4],a[5],a[24],a[25],a[26],a[15],a[16],a[17],a[6],a[7],a[8]],this.isTwisting=!1};this.cubelets.forEach((a,l)=>{l===this.cubelets.length-1?a.rotate("x",i,r,o):a.rotate("x",i,r,null)})}else if(n=="Y"&&!this.isEngagedX&&!this.isEngagedZ){const o=a=>{this.cubelets=[a[2],a[11],a[20],a[5],a[14],a[23],a[8],a[17],a[26],a[1],a[10],a[19],a[4],a[13],a[22],a[7],a[16],a[25],a[0],a[9],a[18],a[3],a[12],a[21],a[6],a[15],a[24]],this.isTwisting=!1};this.cubelets.forEach((a,l)=>{l===this.cubelets.length-1?a.rotate("y",i,r,o):a.rotate("y",i,r,null)})}else if(n=="y"&&!this.isEngagedX&&!this.isEngagedZ){const o=a=>{this.cubelets=[a[18],a[9],a[0],a[21],a[12],a[3],a[24],a[15],a[6],a[19],a[10],a[1],a[22],a[13],a[4],a[25],a[16],a[7],a[20],a[11],a[2],a[23],a[14],a[5],a[26],a[17],a[8]],this.isTwisting=!1};this.cubelets.forEach((a,l)=>{l===this.cubelets.length-1?a.rotate("Y",i,r,o):a.rotate("Y",i,r,null)})}else if(n=="Z"&&!this.isEngagedX&&!this.isEngagedZ){const o=a=>{this.cubelets=[a[6],a[3],a[0],a[7],a[4],a[1],a[8],a[5],a[2],a[15],a[12],a[9],a[16],a[13],a[10],a[17],a[14],a[11],a[24],a[21],a[18],a[25],a[22],a[19],a[26],a[23],a[20]],this.isTwisting=!1};this.cubelets.forEach((a,l)=>{l===this.cubelets.length-1?a.rotate("z",i,r,o):a.rotate("z",i,r,null)})}else if(n=="z"&&!this.isEngagedY&&!this.isEngagedX){const o=a=>{this.cubelets=[a[2],a[5],a[8],a[1],a[4],a[7],a[0],a[3],a[6],a[11],a[14],a[17],a[10],a[13],a[16],a[9],a[12],a[15],a[20],a[23],a[26],a[19],a[22],a[25],a[18],a[21],a[24]],this.isTwisting=!1};this.cubelets.forEach((a,l)=>{l===this.cubelets.length-1?a.rotate("Z",i,r,o):a.rotate("Z",i,r,null)})}else if(n=="F"&&!this.isEngagedY&&!this.isEngagedX){const o=a=>{this.cubelets[0]=a[6],this.cubelets[1]=a[3],this.cubelets[2]=a[0],this.cubelets[3]=a[7],this.cubelets[5]=a[1],this.cubelets[6]=a[8],this.cubelets[7]=a[5],this.cubelets[8]=a[2],this.isTwisting=!1,console.log("done")};this.front.cubelets.forEach((a,l)=>{l===this.front.cubelets.length-1?a.rotate("z",i,r,o):a.rotate("z",i,r,null)})}else if(n=="f"&&!this.isEngagedX&&!this.isEngagedY){const o=a=>{this.cubelets[0]=a[2],this.cubelets[1]=a[5],this.cubelets[2]=a[8],this.cubelets[3]=a[1],this.cubelets[5]=a[7],this.cubelets[6]=a[0],this.cubelets[7]=a[3],this.cubelets[8]=a[6],this.isTwisting=!1,console.log("done")};this.front.cubelets.forEach((a,l)=>{l===this.front.cubelets.length-1?a.rotate("Z",i,r,o):a.rotate("Z",i,r,null)})}else if(n=="B"&&!this.isEngagedY&&!this.isEngagedX){const o=a=>{this.cubelets[18]=a[20],this.cubelets[19]=a[23],this.cubelets[20]=a[26],this.cubelets[21]=a[19],this.cubelets[23]=a[25],this.cubelets[24]=a[18],this.cubelets[25]=a[21],this.cubelets[26]=a[24],this.isTwisting=!1,console.log("done")};this.back.cubelets.forEach((a,l)=>{l===this.back.cubelets.length-1?a.rotate("Z",i,r,o):a.rotate("Z",i,r,null)})}else if(n=="b"&&!this.isEngagedY&&!this.isEngagedX){const o=a=>{this.cubelets[18]=a[24],this.cubelets[19]=a[21],this.cubelets[20]=a[18],this.cubelets[21]=a[25],this.cubelets[23]=a[19],this.cubelets[24]=a[26],this.cubelets[25]=a[23],this.cubelets[26]=a[20],this.isTwisting=!1,console.log("done")};this.back.cubelets.forEach((a,l)=>{l===this.back.cubelets.length-1?a.rotate("z",i,r,o):a.rotate("z",i,r,null)})}else if(n=="R"&&!this.isEngagedY&&!this.isEngagedZ){const o=a=>{this.cubelets[2]=a[8],this.cubelets[11]=a[5],this.cubelets[20]=a[2],this.cubelets[5]=a[17],this.cubelets[23]=a[11],this.cubelets[8]=a[26],this.cubelets[17]=a[23],this.cubelets[26]=a[20],this.isTwisting=!1,console.log("done")};this.right.cubelets.forEach((a,l)=>{l===this.right.cubelets.length-1?a.rotate("X",i,r,o):a.rotate("X",i,r,null)})}else if(n=="r"&&!this.isEngagedY&&!this.isEngagedZ){const o=a=>{this.cubelets[2]=a[20],this.cubelets[11]=a[23],this.cubelets[20]=a[26],this.cubelets[5]=a[11],this.cubelets[23]=a[17],this.cubelets[8]=a[2],this.cubelets[17]=a[5],this.cubelets[26]=a[8],this.isTwisting=!1,console.log("done")};this.right.cubelets.forEach((a,l)=>{l===this.right.cubelets.length-1?a.rotate("x",i,r,o):a.rotate("x",i,r,null)})}else if(n=="L"&&!this.isEngagedY&&!this.isEngagedZ){const o=a=>{this.cubelets[0]=a[18],this.cubelets[9]=a[21],this.cubelets[18]=a[24],this.cubelets[3]=a[9],this.cubelets[21]=a[15],this.cubelets[6]=a[0],this.cubelets[15]=a[3],this.cubelets[24]=a[6],this.isTwisting=!1,console.log("done")};this.left.cubelets.forEach((a,l)=>{l===this.left.cubelets.length-1?a.rotate("x",i,r,o):a.rotate("x",i,r,null)})}else if(n=="l"&&!this.isEngagedY&&!this.isEngagedZ){const o=a=>{this.cubelets[0]=a[6],this.cubelets[9]=a[3],this.cubelets[18]=a[0],this.cubelets[3]=a[15],this.cubelets[21]=a[9],this.cubelets[6]=a[24],this.cubelets[15]=a[21],this.cubelets[24]=a[18],this.isTwisting=!1,console.log("done")};this.left.cubelets.forEach((a,l)=>{l===this.left.cubelets.length-1?a.rotate("X",i,r,o):a.rotate("X",i,r,null)})}else if(n=="U"&&!this.isEngagedX&&!this.isEngagedZ){const o=a=>{this.cubelets[18]=a[0],this.cubelets[19]=a[9],this.cubelets[20]=a[18],this.cubelets[9]=a[1],this.cubelets[11]=a[19],this.cubelets[0]=a[2],this.cubelets[1]=a[11],this.cubelets[2]=a[20],this.isTwisting=!1,console.log("done")};this.up.cubelets.forEach((a,l)=>{l===this.up.cubelets.length-1?a.rotate("y",i,r,o):a.rotate("y",i,r,null)})}else if(n=="u"&&!this.isEngagedX&&!this.isEngagedZ){const o=a=>{this.cubelets[18]=a[20],this.cubelets[19]=a[11],this.cubelets[20]=a[2],this.cubelets[9]=a[19],this.cubelets[11]=a[1],this.cubelets[0]=a[18],this.cubelets[1]=a[9],this.cubelets[2]=a[0],this.isTwisting=!1,console.log("done")};this.up.cubelets.forEach((a,l)=>{l===this.up.cubelets.length-1?a.rotate("Y",i,r,o):a.rotate("Y",i,r,null)})}else if(n=="D"&&!this.isEngagedX&&!this.isEngagedZ){const o=a=>{this.cubelets[6]=a[24],this.cubelets[7]=a[15],this.cubelets[8]=a[6],this.cubelets[15]=a[25],this.cubelets[17]=a[7],this.cubelets[24]=a[26],this.cubelets[25]=a[17],this.cubelets[26]=a[8],this.isTwisting=!1,console.log("done")};this.down.cubelets.forEach((a,l)=>{l===this.down.cubelets.length-1?a.rotate("Y",i,r,o):a.rotate("Y",i,r,null)})}else if(n=="d"&&!this.isEngagedX&&!this.isEngagedZ){const o=a=>{this.cubelets[6]=a[8],this.cubelets[7]=a[17],this.cubelets[8]=a[26],this.cubelets[15]=a[7],this.cubelets[17]=a[25],this.cubelets[24]=a[6],this.cubelets[25]=a[15],this.cubelets[26]=a[24],this.isTwisting=!1,console.log("done")};this.down.cubelets.forEach((a,l)=>{l===this.down.cubelets.length-1?a.rotate("y",i,r,o):a.rotate("y",i,r,null)})}else if(n=="E"&&!this.isEngagedX&&!this.isEngagedZ){const o=a=>{this.cubelets[3]=a[21],this.cubelets[4]=a[12],this.cubelets[5]=a[3],this.cubelets[12]=a[22],this.cubelets[14]=a[4],this.cubelets[21]=a[23],this.cubelets[22]=a[14],this.cubelets[23]=a[5],this.isTwisting=!1,console.log("done")};this.equator.cubelets.forEach((a,l)=>{l===this.equator.cubelets.length-1?a.rotate("Y",i,r,o):a.rotate("Y",i,r,null)})}else if(n=="e"&&!this.isEngagedX&&!this.isEngagedZ){const o=a=>{this.cubelets[3]=a[5],this.cubelets[4]=a[14],this.cubelets[5]=a[23],this.cubelets[12]=a[4],this.cubelets[14]=a[22],this.cubelets[21]=a[3],this.cubelets[22]=a[12],this.cubelets[23]=a[21],this.isTwisting=!1,console.log("done")};this.equator.cubelets.forEach((a,l)=>{l===this.equator.cubelets.length-1?a.rotate("y",i,r,o):a.rotate("y",i,r,null)})}else if(n=="M"&&!this.isEngagedY&&!this.isEngagedZ){const o=a=>{this.cubelets[1]=a[19],this.cubelets[10]=a[22],this.cubelets[19]=a[25],this.cubelets[4]=a[10],this.cubelets[22]=a[16],this.cubelets[7]=a[1],this.cubelets[16]=a[4],this.cubelets[25]=a[7],this.isTwisting=!1,console.log("done")};this.middle.cubelets.forEach((a,l)=>{l===this.middle.cubelets.length-1?a.rotate("x",i,r,o):a.rotate("x",i,r,null)})}else if(n=="m"&&!this.isEngagedY&&!this.isEngagedZ){const o=a=>{this.cubelets[1]=a[7],this.cubelets[10]=a[4],this.cubelets[19]=a[1],this.cubelets[4]=a[16],this.cubelets[22]=a[10],this.cubelets[7]=a[25],this.cubelets[16]=a[22],this.cubelets[25]=a[19],this.isTwisting=!1,console.log("done")};this.middle.cubelets.forEach((a,l)=>{l===this.middle.cubelets.length-1?a.rotate("X",i,r,o):a.rotate("X",i,r,null)})}else if(n=="S"&&!this.isEngagedX&&!this.isEngagedY){const o=a=>{this.cubelets[9]=a[15],this.cubelets[10]=a[12],this.cubelets[11]=a[9],this.cubelets[12]=a[16],this.cubelets[14]=a[10],this.cubelets[15]=a[17],this.cubelets[16]=a[14],this.cubelets[17]=a[11],this.isTwisting=!1,console.log("done")};this.standing.cubelets.forEach((a,l)=>{l===this.standing.cubelets.length-1?a.rotate("z",i,r,o):a.rotate("z",i,r,null)})}else if(n=="s"&&!this.isEngagedX&&!this.isEngagedY){const o=a=>{this.cubelets[9]=a[11],this.cubelets[10]=a[14],this.cubelets[11]=a[17],this.cubelets[12]=a[10],this.cubelets[14]=a[16],this.cubelets[15]=a[9],this.cubelets[16]=a[12],this.cubelets[17]=a[15],this.isTwisting=!1,console.log("done")};this.standing.cubelets.forEach((a,l)=>{l===this.standing.cubelets.length-1?a.rotate("Z",i,r,o):a.rotate("Z",i,r,null)})}}}const To={type:"change"},sc={type:"start"},rc={type:"end"},Hh=1e-6,Yt={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},sa=new ht,li=new ht,mx=new L,ra=new L,wo=new L,ps=new zs,Vh=new L,aa=new L,Ao=new L,oa=new L;class _x extends Mm{constructor(t,e=null){super(t,e),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Jn.ROTATE,MIDDLE:Jn.DOLLY,RIGHT:Jn.PAN},this.target=new L,this.state=Yt.NONE,this.keyState=Yt.NONE,this._lastPosition=new L,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new L,this._movePrev=new ht,this._moveCurr=new ht,this._lastAxis=new L,this._zoomStart=new ht,this._zoomEnd=new ht,this._panStart=new ht,this._panEnd=new ht,this._pointers=[],this._pointerPositions={},this._onPointerMove=vx.bind(this),this._onPointerDown=gx.bind(this),this._onPointerUp=xx.bind(this),this._onPointerCancel=Sx.bind(this),this._onContextMenu=Ax.bind(this),this._onMouseWheel=wx.bind(this),this._onKeyDown=Mx.bind(this),this._onKeyUp=yx.bind(this),this._onTouchStart=Cx.bind(this),this._onTouchMove=Rx.bind(this),this._onTouchEnd=Px.bind(this),this._onMouseDown=Ex.bind(this),this._onMouseMove=bx.bind(this),this._onMouseUp=Tx.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,e!==null&&(this.connect(e),this.handleResize()),this.update()}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const t=this.domElement.getBoundingClientRect(),e=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-e.clientLeft,this.screen.top=t.top+window.pageYOffset-e.clientTop,this.screen.width=t.width,this.screen.height=t.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>Hh&&(this.dispatchEvent(To),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>Hh||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(To),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=Yt.NONE,this.keyState=Yt.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(To),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(li.copy(this._panEnd).sub(this._panStart),li.lengthSq()){if(this.object.isOrthographicCamera){const t=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,e=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;li.x*=t,li.y*=e}li.multiplyScalar(this._eye.length()*this.panSpeed),ra.copy(this._eye).cross(this.object.up).setLength(li.x),ra.add(mx.copy(this.object.up).setLength(li.y)),this.object.position.add(ra),this.target.add(ra),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(li.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){oa.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let t=oa.length();t?(this._eye.copy(this.object.position).sub(this.target),Vh.copy(this._eye).normalize(),aa.copy(this.object.up).normalize(),Ao.crossVectors(aa,Vh).normalize(),aa.setLength(this._moveCurr.y-this._movePrev.y),Ao.setLength(this._moveCurr.x-this._movePrev.x),oa.copy(aa.add(Ao)),wo.crossVectors(oa,this._eye).normalize(),t*=this.rotateSpeed,ps.setFromAxisAngle(wo,t),this._eye.applyQuaternion(ps),this.object.up.applyQuaternion(ps),this._lastAxis.copy(wo),this._lastAngle=t):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),ps.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(ps),this.object.up.applyQuaternion(ps)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===Yt.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=kc.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=kc.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(t,e){return sa.set((t-this.screen.left)/this.screen.width,(e-this.screen.top)/this.screen.height),sa}_getMouseOnCircle(t,e){return sa.set((t-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-e))/this.screen.width),sa}_addPointer(t){this._pointers.push(t)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId==t.pointerId){this._pointers.splice(e,1);return}}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[e.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function gx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s))}function vx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function xx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchEnd(s):this._onMouseUp(),this._removePointer(s),this._pointers.length===0&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function Sx(s){this._removePointer(s)}function yx(){this.enabled!==!1&&(this.keyState=Yt.NONE,window.addEventListener("keydown",this._onKeyDown))}function Mx(s){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===Yt.NONE&&(s.code===this.keys[Yt.ROTATE]&&!this.noRotate?this.keyState=Yt.ROTATE:s.code===this.keys[Yt.ZOOM]&&!this.noZoom?this.keyState=Yt.ZOOM:s.code===this.keys[Yt.PAN]&&!this.noPan&&(this.keyState=Yt.PAN)))}function Ex(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Jn.DOLLY:this.state=Yt.ZOOM;break;case Jn.ROTATE:this.state=Yt.ROTATE;break;case Jn.PAN:this.state=Yt.PAN;break;default:this.state=Yt.NONE}const e=this.keyState!==Yt.NONE?this.keyState:this.state;e===Yt.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(s.pageX,s.pageY)),this._movePrev.copy(this._moveCurr)):e===Yt.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(s.pageX,s.pageY)),this._zoomEnd.copy(this._zoomStart)):e===Yt.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(s.pageX,s.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(sc)}function bx(s){const t=this.keyState!==Yt.NONE?this.keyState:this.state;t===Yt.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(s.pageX,s.pageY))):t===Yt.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(s.pageX,s.pageY)):t===Yt.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(s.pageX,s.pageY))}function Tx(){this.state=Yt.NONE,this.dispatchEvent(rc)}function wx(s){if(this.enabled!==!1&&this.noZoom!==!0){switch(s.preventDefault(),s.deltaMode){case 2:this._zoomStart.y-=s.deltaY*.025;break;case 1:this._zoomStart.y-=s.deltaY*.01;break;default:this._zoomStart.y-=s.deltaY*25e-5;break}this.dispatchEvent(sc),this.dispatchEvent(rc)}}function Ax(s){this.enabled!==!1&&s.preventDefault()}function Cx(s){switch(this._trackPointer(s),this._pointers.length){case 1:this.state=Yt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=Yt.TOUCH_ZOOM_PAN;const t=this._pointers[0].pageX-this._pointers[1].pageX,e=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(t*t+e*e);const n=(this._pointers[0].pageX+this._pointers[1].pageX)/2,i=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(n,i)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(sc)}function Rx(s){switch(this._trackPointer(s),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(s.pageX,s.pageY));break;default:const t=this._getSecondPointerPosition(s),e=s.pageX-t.x,n=s.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(e*e+n*n);const i=(s.pageX+t.x)/2,r=(s.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(i,r));break}}function Px(s){switch(this._pointers.length){case 0:this.state=Yt.NONE;break;case 1:this.state=Yt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(s.pageX,s.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=Yt.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==s.pointerId){const e=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(e.x,e.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(rc)}function Zn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Yu(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var en={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Is={duration:.5,overwrite:!1,delay:0},ac,we,re,fn=1e8,te=1/fn,wl=Math.PI*2,Dx=wl/4,Lx=0,qu=Math.sqrt,Ix=Math.cos,Ux=Math.sin,Te=function(t){return typeof t=="string"},me=function(t){return typeof t=="function"},ti=function(t){return typeof t=="number"},oc=function(t){return typeof t>"u"},zn=function(t){return typeof t=="object"},He=function(t){return t!==!1},lc=function(){return typeof window<"u"},la=function(t){return me(t)||Te(t)},Zu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pe=Array.isArray,Al=/(?:-?\.?\d|\.)+/gi,Ku=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Co=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$u=/[+-]=-?[.\d]+/,ju=/[^,'"\[\]\s]+/gi,Nx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,he,Pn,Cl,cc,nn={},Ea={},Ju,Qu=function(t){return(Ea=Us(t,nn))&&Xe},hc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},gr=function(t,e){return!e&&console.warn(t)},tf=function(t,e){return t&&(nn[t]=e)&&Ea&&(Ea[t]=e)||nn},vr=function(){return 0},Ox={suppressEvents:!0,isStart:!0,kill:!1},ma={suppressEvents:!0,kill:!1},Fx={suppressEvents:!0},uc={},mi=[],Rl={},ef,$e={},Ro={},Gh=30,_a=[],fc="",dc=function(t){var e=t[0],n,i;if(zn(e)||me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=_a.length;i--&&!_a[i].targetTest(e););n=_a[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new wf(t[i],n)))||t.splice(i,1);return t},Hi=function(t){return t._gsap||dc(dn(t))[0]._gsap},nf=function(t,e,n){return(n=t[e])&&me(n)?t[e]():oc(n)&&t.getAttribute&&t.getAttribute(e)||n},Ve=function(t,e){return(t=t.split(",")).forEach(e)||t},_e=function(t){return Math.round(t*1e5)/1e5||0},xe=function(t){return Math.round(t*1e7)/1e7||0},bs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Bx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ba=function(){var t=mi.length,e=mi.slice(0),n,i;for(Rl={},mi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},pc=function(t){return!!(t._initted||t._startAt||t.add)},sf=function(t,e,n,i){mi.length&&!we&&ba(),t.render(e,n,!!(we&&e<0&&pc(t))),mi.length&&!we&&ba()},rf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ju).length<2?e:Te(t)?t.trim():t},af=function(t){return t},sn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},zx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Us=function(t,e){for(var n in e)t[n]=e[n];return t},Wh=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=zn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ta=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},rr=function(t){var e=t.parent||he,n=t.keyframes?zx(Pe(t.keyframes)):sn;if(He(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},kx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},of=function(t,e,n,i,r){var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ua=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},xi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Vi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Hx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Pl=function(t,e,n,i){return t._startAt&&(we?t._startAt.revert(ma):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Vx=function s(t){return!t||t._ts&&s(t.parent)},Xh=function(t){return t._repeat?Ns(t._tTime,t=t.duration()+t._rDelay)*t:0},Ns=function(t,e){var n=Math.floor(t=xe(t/e));return t&&n===t?n-1:n},wa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Na=function(t){return t._end=xe(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},Oa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=xe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Na(t),n._dirty||Vi(n,t)),t},lf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=wa(t.rawTime(),e),(!e._dur||Ar(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),Vi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},In=function(t,e,n,i){return e.parent&&xi(e),e._start=xe((ti(n)?n:n||t!==he?cn(t,n,e):t._time)+e._delay),e._end=xe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),of(t,e,"_first","_last",t._sort?"_start":0),Dl(e)||(t._recent=e),i||lf(t,e),t._ts<0&&Oa(t,t._tTime),t},cf=function(t,e){return(nn.ScrollTrigger||hc("scrollTrigger",e))&&nn.ScrollTrigger.create(e,t)},hf=function(t,e,n,i,r){if(_c(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!we&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ef!==Je.frame)return mi.push(t),t._lazy=[r,i],1},Gx=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Dl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Wx=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Gx(t)&&!(!t._initted&&Dl(t))||(t._ts<0||t._dp._ts<0)&&!Dl(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Ar(0,t._tDur,e),h=Ns(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ns(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||we||i||t._zTime===te||!e&&t._zTime){if(!t._initted&&hf(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Pl(t,e,n,!0),t._onUpdate&&!n&&tn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&tn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&xi(t,1),!n&&!we&&(tn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Xx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Os=function(t,e,n,i){var r=t._repeat,o=xe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:xe(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Oa(t,t._tTime=t._tDur*a),t.parent&&Na(t),n||Vi(t.parent,t),t},Yh=function(t){return t instanceof Oe?Vi(t):Os(t,t._dur)},Yx={_start:0,endTime:vr,totalDuration:vr},cn=function s(t,e,n){var i=t.labels,r=t._recent||Yx,o=t.duration()>=fn?r.endTime(!1):t._dur,a,l,c;return Te(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Pe(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ar=function(t,e,n){var i=ti(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=He(l.vars.inherit)&&l.parent;o.immediateRender=He(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new ve(e[0],o,e[r+1])},yi=function(t,e){return t||t===0?e(t):e},Ar=function(t,e,n){return n<t?t:n>e?e:n},Re=function(t,e){return!Te(t)||!(e=Nx.exec(t))?"":e[1]},qx=function(t,e,n){return yi(n,function(i){return Ar(t,e,i)})},Ll=[].slice,uf=function(t,e){return t&&zn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&zn(t[0]))&&!t.nodeType&&t!==Pn},Zx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Te(i)&&!e||uf(i,1)?(r=n).push.apply(r,dn(i)):n.push(i)})||n},dn=function(t,e,n){return re&&!e&&re.selector?re.selector(t):Te(t)&&!n&&(Cl||!Fs())?Ll.call((e||cc).querySelectorAll(t),0):Pe(t)?Zx(t,n):uf(t)?Ll.call(t,0):t?[t]:[]},Il=function(t){return t=dn(t)[0]||gr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return dn(e,n.querySelectorAll?n:n===t?gr("Invalid scope")||cc.createElement("div"):t)}},ff=function(t){return t.sort(function(){return .5-Math.random()})},df=function(t){if(me(t))return t;var e=zn(t)?t:{each:t},n=Gi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Te(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||e).length,m=o[_],p,b,M,v,w,A,T,R,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,fn])[1],!x){for(T=-fn;T<(T=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*h-.5:i%x,b=x===fn?0:l?_*u/x-.5:i/x|0,T=0,R=fn,A=0;A<_;A++)M=A%x-p,v=b-(A/x|0),m[A]=w=c?Math.abs(c==="y"?v:M):qu(M*M+v*v),w>T&&(T=w),w<R&&(R=w);i==="random"&&ff(m),m.max=T-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Re(e.amount||e.each)||0,n=n&&_<0?Ef(n):n}return _=(m[f]-m.min)/m.max||0,xe(m.b+(n?n(_):_)*m.v)+m.u}},Ul=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=xe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ti(n)?0:Re(n))}},pf=function(t,e){var n=Pe(t),i,r;return!n&&zn(t)&&(i=n=t.radius||fn,t.values?(t=dn(t.values),(r=!ti(t[0]))&&(i*=i)):t=Ul(t.increment)),yi(e,n?me(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=fn,h=0,u=t.length,f,d;u--;)r?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,r||h===o||ti(o)?h:h+Re(o)}:Ul(t))},mf=function(t,e,n,i){return yi(Pe(t)?!e:n===!0?!!(n=0):!i,function(){return Pe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Kx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},$x=function(t,e){return function(n){return t(parseFloat(n))+(e||Re(n))}},jx=function(t,e,n){return gf(t,e,0,1,n)},_f=function(t,e,n){return yi(n,function(i){return t[~~e(i)]})},Jx=function s(t,e,n){var i=e-t;return Pe(t)?_f(t,s(0,t.length),e):yi(n,function(r){return(i+(r-t)%i)%i+t})},Qx=function s(t,e,n){var i=e-t,r=i*2;return Pe(t)?_f(t,s(0,t.length-1),e):yi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},xr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?ju:Al),n+=t.substr(e,i-e)+mf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},gf=function(t,e,n,i,r){var o=e-t,a=i-n;return yi(r,function(l){return n+((l-t)/o*a||0)})},tS=function s(t,e,n,i){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var o=Te(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Pe(t)&&!Pe(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=Us(Pe(t)?[]:{},t));if(!h){for(l in e)mc.call(a,t,l,"get",e[l]);r=function(g){return xc(g,a)||(o?t.p:t)}}}return yi(n,r)},qh=function(t,e,n){var i=t.labels,r=fn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},tn=function(t,e,n){var i=t.vars,r=i[e],o=re,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&mi.length&&ba(),a&&(re=a),h=l?r.apply(c,l):r.call(c),re=o,h},Js=function(t){return xi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!we),t.progress()<1&&tn(t,"onInterrupt"),t},xs,vf=[],xf=function(t){if(t)if(t=!t.name&&t.default||t,lc()||t.headless){var e=t.name,n=me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:vr,render:xc,add:mc,kill:_S,modifier:mS,rawVars:0},o={targetTest:0,get:0,getSetter:vc,aliases:{},register:0};if(Fs(),t!==i){if($e[e])return;sn(i,sn(Ta(t,r),o)),Us(i.prototype,Us(r,Ta(t,o))),$e[i.prop=e]=i,t.targetTest&&(_a.push(i),uc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}tf(e,i),t.register&&t.register(Xe,i,Ge)}else vf.push(t)},Qt=255,Qs={aqua:[0,Qt,Qt],lime:[0,Qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qt],navy:[0,0,128],white:[Qt,Qt,Qt],olive:[128,128,0],yellow:[Qt,Qt,0],orange:[Qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qt,0,0],pink:[Qt,192,203],cyan:[0,Qt,Qt],transparent:[Qt,Qt,Qt,0]},Po=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Qt+.5|0},Sf=function(t,e,n){var i=t?ti(t)?[t>>16,t>>8&Qt,t&Qt]:0:Qs.black,r,o,a,l,c,h,u,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qs[t])i=Qs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Qt,i&Qt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Qt,t&Qt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Al),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Po(l+1/3,r,o),i[1]=Po(l,r,o),i[2]=Po(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Ku),n&&i.length<4&&(i[3]=1),i}else i=t.match(Al)||Qs.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Qt,o=i[1]/Qt,a=i[2]/Qt,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},yf=function(t){var e=[],n=[],i=-1;return t.split(_i).forEach(function(r){var o=r.match(vs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Zh=function(t,e,n){var i="",r=(t+i).match(_i),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(f){return(f=Sf(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=yf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(_i,"1").split(vs),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(_i),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},_i=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qs)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),eS=/hsl[a]?\(/,Mf=function(t){var e=t.join(" "),n;if(_i.lastIndex=0,_i.test(e))return n=eS.test(e),t[1]=Zh(t[1],n),t[0]=Zh(t[0],n,yf(t[1])),!0},Sr,Je=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,f,d,g=function _(m){var p=s()-i,b=m===!0,M,v,w,A;if((p>t||p<0)&&(n+=p-e),i+=p,w=i-n,M=w-o,(M>0||b)&&(A=++u.frame,f=w-u.time*1e3,u.time=w=w/1e3,o+=M+(M>=r?4:r-M),v=1),b||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](w,f,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Ju&&(!Cl&&lc()&&(Pn=Cl=window,cc=Pn.document||{},nn.gsap=Xe,(Pn.gsapVersions||(Pn.gsapVersions=[])).push(Xe.version),Qu(Ea||Pn.GreenSockGlobals||!Pn.gsap&&Pn||{}),vf.forEach(xf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Sr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Sr=0,c=vr},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,b){var M=p?function(v,w,A,T){m(v,w,A,T),u.remove(M)}:m;return u.remove(m),a[b?"unshift":"push"](M),Fs(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u}(),Fs=function(){return!Sr&&Je.wake()},zt={},nS=/^[\d.\-M][\d.\-,\s]/,iS=/["']/g,sS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(iS,"").trim():+c,i=l.substr(a+1).trim();return e},rS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},aS=function(t){var e=(t+"").split("("),n=zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[sS(e[1])]:rS(t).split(",").map(rf)):zt._CE&&nS.test(t)?zt._CE("",t):n},Ef=function(t){return function(e){return 1-t(1-e)}},bf=function s(t,e){for(var n=t._first,i;n;)n instanceof Oe?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Gi=function(t,e){return t&&(me(t)?t:zt[t]||aS(t))||e},Ji=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Ve(t,function(a){zt[a]=nn[a]=r,zt[o=a.toLowerCase()]=n;for(var l in r)zt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=zt[a+"."+l]=r[l]}),r},Tf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Do=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/wl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Ux((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Tf(a);return r=wl/r,l.config=function(c,h){return s(t,c,h)},l},Lo=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Tf(n);return i.config=function(r){return s(t,r)},i};Ve("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ji(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});zt.Linear.easeNone=zt.none=zt.Linear.easeIn;Ji("Elastic",Do("in"),Do("out"),Do());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Ji("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ji("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ji("Circ",function(s){return-(qu(1-s*s)-1)});Ji("Sine",function(s){return s===1?1:-Ix(s*Dx)+1});Ji("Back",Lo("in"),Lo("out"),Lo());zt.SteppedEase=zt.steps=nn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-te;return function(a){return((i*Ar(0,o,a)|0)+r)*n}}};Is.ease=zt["quad.out"];Ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return fc+=s+","+s+"Params,"});var wf=function(t,e){this.id=Lx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:nf,this.set=e?e.getSetter:vc},yr=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Os(this,+e.duration,1,1),this.data=e.data,re&&(this._ctx=re,re.data.push(this)),Sr||Je.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Fs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Oa(this,n),!r._dp||r.parent||lf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&In(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===te||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),sf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Xh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Xh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ns(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(Ar(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Na(this),Hx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&In(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(He(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Fx);var i=we;return we=n,pc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),we=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Yh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(cn(this,n),He(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,He(i)),this._dur||(this._zTime=-te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-te)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=me(n)?n:af,a=function(){var c=i.then;i.then=null,me(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Js(this)},s}();sn(yr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var Oe=function(s){Yu(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=He(n.sortChildren),he&&In(n.parent||he,Zn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&cf(Zn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return ar(0,arguments,this),this},e.from=function(i,r,o){return ar(1,arguments,this),this},e.fromTo=function(i,r,o,a){return ar(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,rr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ve(i,r,cn(this,o),1),this},e.call=function(i,r,o){return In(this,ve.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ve(i,o,cn(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,rr(o).immediateRender=He(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,rr(a).immediateRender=He(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:xe(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,b,M,v,w,A,T;if(this!==he&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,M=this._ts,p=!M,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=xe(h%m),h===l?(_=this._repeat,f=c):(w=xe(h/m),_=~~w,_&&_===w&&(f=c,_--),f>c&&(f=c)),w=Ns(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),A&&_&1&&(f=c-f,T=1),_!==w&&!this._lock){var R=A&&w&1,x=R===(A&&_&1);if(_<w&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(T?0:xe(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&tn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;bf(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Xx(this,xe(a),xe(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!w&&(tn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){b=0,g&&(h+=this._zTime=-te);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,o||we&&pc(d)),f!==this._time||!this._ts&&!p){b=0,g&&(h+=this._zTime=y?-te:te);break}}d=g}}if(b&&!r&&(this.pause(),b.render(f>=a?0:-te)._zTime=f>=a?1:-1,this._ts))return this._start=v,Na(this),this.render(i,r,o);this._onUpdate&&!r&&tn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&xi(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(tn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ti(r)||(r=cn(this,r,i)),!(i instanceof yr)){if(Pe(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Te(i))return this.addLabel(i,r);if(me(i))i=ve.delayedCall(0,i);else return this}return this!==i?In(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ve?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Te(i)?this.removeLabel(i):me(i)?this.killTweensOf(i):(i.parent===this&&Ua(this,i),i===this._recent&&(this._recent=this._last),Vi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xe(Je.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=cn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=ve.delayedCall(0,r||vr,o);return a.data="isPause",this._hasPause=1,In(this,a,cn(this,i))},e.removePause=function(i){var r=this._first;for(i=cn(this,i);r;)r._start===i&&r.data==="isPause"&&xi(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)hi!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=dn(i),l=this._first,c=ti(r),h;l;)l instanceof ve?Bx(l._targets,a)&&(c?(!hi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=cn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=ve.to(o,sn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||te,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Os(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,sn({startAt:{time:cn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),qh(this,cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),qh(this,cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Vi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vi(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=fn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,In(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Os(o,o===he&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(he._ts&&(sf(he,wa(i,he)),ef=Je.frame),Je.frame>=Gh){Gh+=en.autoSleep||120;var r=he._first;if((!r||!r._ts)&&en.autoSleep&&Je._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Je.sleep()}}},t}(yr);sn(Oe.prototype,{_lock:0,_hasPause:0,_forcing:0});var oS=function(t,e,n,i,r,o,a){var l=new Ge(this._pt,t,e,0,1,Lf,null,r),c=0,h=0,u,f,d,g,_,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=xr(i)),o&&(b=[n,i],o(b,t,e),n=b[0],i=b[1]),f=n.match(Co)||[];u=Co.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?bs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Co.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,($u.test(i)||p)&&(l.e=0),this._pt=l,l},mc=function(t,e,n,i,r,o,a,l,c,h){me(i)&&(i=i(r||0,t,o));var u=t[e],f=n!=="get"?n:me(u)?c?t[e.indexOf("set")||!me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=me(u)?c?fS:Pf:gc,g;if(Te(i)&&(~i.indexOf("random(")&&(i=xr(i)),i.charAt(1)==="="&&(g=bs(f,i)+(Re(f)||0),(g||g===0)&&(i=g))),!h||f!==i||Nl)return!isNaN(f*i)&&i!==""?(g=new Ge(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?pS:Df,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&hc(e,i),oS.call(this,t,e,f,i,d,l||en.stringFilter,c))},lS=function(t,e,n,i,r){if(me(t)&&(t=or(t,r,e,n,i)),!zn(t)||t.style&&t.nodeType||Pe(t)||Zu(t))return Te(t)?or(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=or(t[a],r,e,n,i);return o},Af=function(t,e,n,i,r,o){var a,l,c,h;if($e[t]&&(a=new $e[t]).init(r,a.rawVars?e[t]:lS(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Ge(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==xs))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},hi,Nl,_c=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,b=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!ac,v=t.timeline,w,A,T,R,x,y,P,F,O,G,W,V,q;if(v&&(!f||!r)&&(r="none"),t._ease=Gi(r,Is.ease),t._yEase=u?Ef(Gi(u===!0?r:u,Is.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(F=m[0]?Hi(m[0]).harness:0,V=F&&i[F.prop],w=Ta(i,uc),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?ma:Ox),_._lazy=0),o){if(xi(t._startAt=ve.set(m,sn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&He(l),startAt:null,delay:0,onUpdate:c&&function(){return tn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we||!a&&!d)&&t._startAt.revert(ma),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),T=sn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&He(l),immediateRender:a,stagger:0,parent:p},w),V&&(T[F.prop]=V),xi(t._startAt=ve.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we?t._startAt.revert(ma):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&He(l)||l&&!g,A=0;A<m.length;A++){if(x=m[A],P=x._gsap||dc(m)[A]._gsap,t._ptLookup[A]=G={},Rl[P.id]&&mi.length&&ba(),W=b===m?A:b.indexOf(x),F&&(O=new F).init(x,V||w,t,W,b)!==!1&&(t._pt=R=new Ge(t._pt,x,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(H){G[H]=R}),O.priority&&(y=1)),!F||V)for(T in w)$e[T]&&(O=Af(T,w,t,W,x,b))?O.priority&&(y=1):G[T]=R=mc.call(t,x,T,"get",w[T],W,b,0,i.stringFilter);t._op&&t._op[A]&&t.kill(x,t._op[A]),M&&t._pt&&(hi=t,he.killTweensOf(x,G,t.globalTime(e)),q=!t.parent,hi=0),t._pt&&l&&(Rl[P.id]=1)}y&&If(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,f&&e<=0&&v.render(fn,!0,!0)},cS=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Nl=1,t.vars[e]="+=0",_c(t,a),Nl=0,l?gr(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=_e(n)+Re(u.e)),u.b&&(u.b=h.s+Re(u.b))},hS=function(t,e){var n=t[0]?Hi(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Us({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},uS=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Pe(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},or=function(t,e,n,i,r){return me(t)?t.call(e,n,i,r):Te(t)&&~t.indexOf("random(")?xr(t):t},Cf=fc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rf={};Ve(Cf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Rf[s]=1});var ve=function(s){Yu(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:rr(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,b=i.parent||he,M=(Pe(n)||Zu(n)?ti(n[0]):"length"in i)?[n]:dn(n),v,w,A,T,R,x,y,P;if(a._targets=M.length?dc(M):gr("GSAP target "+n+" not found. https://gsap.com",!en.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||la(c)||la(h)){if(i=a.vars,v=a.timeline=new Oe({data:"nested",defaults:_||{},targets:b&&b.data==="nested"?b.vars.targets:M}),v.kill(),v.parent=v._dp=Zn(a),v._start=0,f||la(c)||la(h)){if(T=M.length,y=f&&df(f),zn(f))for(R in f)~Cf.indexOf(R)&&(P||(P={}),P[R]=f[R]);for(w=0;w<T;w++)A=Ta(i,Rf),A.stagger=0,p&&(A.yoyoEase=p),P&&Us(A,P),x=M[w],A.duration=+or(c,Zn(a),w,x,M),A.delay=(+or(h,Zn(a),w,x,M)||0)-a._delay,!f&&T===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),v.to(x,A,y?y(w,x,M):0),v._ease=zt.none;v.duration()?c=h=0:a.timeline=0}else if(g){rr(sn(v.vars.defaults,{ease:"none"})),v._ease=Gi(g.ease||i.ease||"none");var F=0,O,G,W;if(Pe(g))g.forEach(function(V){return v.to(M,V,">")}),v.duration();else{A={};for(R in g)R==="ease"||R==="easeEach"||uS(R,g[R],A,g.easeEach);for(R in A)for(O=A[R].sort(function(V,q){return V.t-q.t}),F=0,w=0;w<O.length;w++)G=O[w],W={ease:G.e,duration:(G.t-(w?O[w-1].t:0))/100*c},W[R]=G.v,v.to(M,W,F),F+=W.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!ac&&(hi=Zn(a),he.killTweensOf(M),hi=0),In(b,Zn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===xe(b._time)&&He(u)&&Vx(Zn(a))&&b.data!=="nested")&&(a._tTime=-te,a.render(Math.max(0,-h)||0)),m&&cf(Zn(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-te&&!h?l:i<te?0:i,f,d,g,_,m,p,b,M,v;if(!c)Wx(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=xe(u%_),u===l?(g=this._repeat,f=c):(m=xe(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=c-f),m=Ns(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(M&&this._yEase&&bf(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(xe(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(hf(this,h?i:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(f/c),this._from&&(this.ratio=b=1-b),!a&&u&&!r&&!m&&(tn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Pl(this,i,r,o),tn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&tn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Pl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&xi(this,1),!r&&!(h&&!a)&&(u||a||p)&&(tn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Sr||Je.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||_c(this,c),h=this._ease(c/this._dur),cS(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Oa(this,0),this.parent||of(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Js(this):this.scrollTrigger&&this.scrollTrigger.kill(!!we),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,hi&&hi.vars.overwrite!==!0)._first||Js(this),this.parent&&o!==this.timeline.totalDuration()&&Os(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?dn(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!r||r==="all")&&kx(a,l))return r==="all"&&(this._pt=0),Js(this);for(u=this._op=this._op||[],r!=="all"&&(Te(r)&&(_={},Ve(r,function(b){return _[b]=1}),r=_),r=hS(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(u[p]=r,g=f,d={}):(d=u[p]=u[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ua(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Js(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return ar(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return ar(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return he.killTweensOf(i,r,o)},t}(yr);sn(ve.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ve("staggerTo,staggerFrom,staggerFromTo",function(s){ve[s]=function(){var t=new Oe,e=Ll.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var gc=function(t,e,n){return t[e]=n},Pf=function(t,e,n){return t[e](n)},fS=function(t,e,n,i){return t[e](i.fp,n)},dS=function(t,e,n){return t.setAttribute(e,n)},vc=function(t,e){return me(t[e])?Pf:oc(t[e])&&t.setAttribute?dS:gc},Df=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},pS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Lf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},xc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},mS=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},_S=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ua(this,e,"_pt"):e.dep||(n=1),e=i;return!n},gS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},If=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Ge=function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Df,this.d=l||this,this.set=c||gc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=gS,this.m=n,this.mt=r,this.tween=i},s}();Ve(fc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return uc[s]=1});nn.TweenMax=nn.TweenLite=ve;nn.TimelineLite=nn.TimelineMax=Oe;he=new Oe({sortChildren:!1,defaults:Is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});en.stringFilter=Mf;var Wi=[],ga={},vS=[],Kh=0,xS=0,Io=function(t){return(ga[t]||vS).map(function(e){return e()})},Ol=function(){var t=Date.now(),e=[];t-Kh>2&&(Io("matchMediaInit"),Wi.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Pn.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Io("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Kh=t,Io("matchMedia"))},Uf=function(){function s(e,n){this.selector=n&&Il(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xS++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){me(n)&&(r=i,i=n,n=me);var o=this,a=function(){var c=re,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Il(r)),re=o,u=i.apply(o,arguments),me(u)&&o._r.push(u),re=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===me?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=re;re=null,n(this),re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof ve&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Oe?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ve)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Wi.length;o--;)Wi[o].id===this.id&&Wi.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),SS=function(){function s(e){this.contexts=[],this.scope=e,re&&re.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){zn(n)||(n={matches:n});var o=new Uf(0,r||this.scope),a=o.conditions={},l,c,h;re&&!o.selector&&(o.selector=re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Pn.matchMedia(n[c]),l&&(Wi.indexOf(o)<0&&Wi.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ol):l.addEventListener("change",Ol)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Aa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return xf(i)})},timeline:function(t){return new Oe(t)},getTweensOf:function(t,e){return he.getTweensOf(t,e)},getProperty:function(t,e,n,i){Te(t)&&(t=dn(t)[0]);var r=Hi(t||{}).get,o=n?af:rf;return n==="native"&&(n=""),t&&(e?o(($e[e]&&$e[e].get||r)(t,e,n,i)):function(a,l,c){return o(($e[a]&&$e[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=dn(t),t.length>1){var i=t.map(function(h){return Xe.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=$e[e],a=Hi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;xs._pt=0,u.init(t,n?h+n:h,xs,0,[t]),u.render(1,u),xs._pt&&xc(1,xs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Xe.to(t,sn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return he.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gi(t.ease,Is.ease)),Wh(Is,t||{})},config:function(t){return Wh(en,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!$e[a]&&!nn[a]&&gr(e+" effect requires "+a+" plugin.")}),Ro[e]=function(a,l,c){return n(dn(a),sn(l||{},r),c)},o&&(Oe.prototype[e]=function(a,l,c){return this.add(Ro[e](a,zn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){zt[t]=Gi(e)},parseEase:function(t,e){return arguments.length?Gi(t,e):zt},getById:function(t){return he.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Oe(t),i,r;for(n.smoothChildTiming=He(t.smoothChildTiming),he.remove(n),n._dp=0,n._time=n._tTime=he._time,i=he._first;i;)r=i._next,(e||!(!i._dur&&i instanceof ve&&i.vars.onComplete===i._targets[0]))&&In(n,i,i._start-i._delay),i=r;return In(he,n,0),n},context:function(t,e){return t?new Uf(t,e):re},matchMedia:function(t){return new SS(t)},matchMediaRefresh:function(){return Wi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ol()},addEventListener:function(t,e){var n=ga[t]||(ga[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ga[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Jx,wrapYoyo:Qx,distribute:df,random:mf,snap:pf,normalize:jx,getUnit:Re,clamp:qx,splitColor:Sf,toArray:dn,selector:Il,mapRange:gf,pipe:Kx,unitize:$x,interpolate:tS,shuffle:ff},install:Qu,effects:Ro,ticker:Je,updateRoot:Oe.updateRoot,plugins:$e,globalTimeline:he,core:{PropTween:Ge,globals:tf,Tween:ve,Timeline:Oe,Animation:yr,getCache:Hi,_removeLinkedListItem:Ua,reverting:function(){return we},context:function(t){return t&&re&&(re.data.push(t),t._ctx=re),re},suppressOverwrites:function(t){return ac=t}}};Ve("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Aa[s]=ve[s]});Je.add(Oe.updateRoot);xs=Aa.to({},{duration:0});var yS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},MS=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=yS(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Uo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Te(r)&&(l={},Ve(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}MS(a,r)}}}},Xe=Aa.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)we?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Uo("roundProps",Ul),Uo("modifiers"),Uo("snap",pf))||Aa;ve.version=Oe.version=Xe.version="3.13.0";Ju=1;lc()&&Fs();zt.Power0;zt.Power1;zt.Power2;zt.Power3;zt.Power4;zt.Linear;zt.Quad;zt.Cubic;zt.Quart;zt.Quint;zt.Strong;zt.Elastic;zt.Back;zt.SteppedEase;zt.Bounce;zt.Sine;zt.Expo;zt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $h,ui,Ts,Sc,ki,jh,yc,ES=function(){return typeof window<"u"},ei={},Ui=180/Math.PI,ws=Math.PI/180,ms=Math.atan2,Jh=1e8,Mc=/([A-Z])/g,bS=/(left|right|width|margin|padding|x)/i,TS=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},AS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},CS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Nf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Of=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},RS=function(t,e,n){return t.style[e]=n},PS=function(t,e,n){return t.style.setProperty(e,n)},DS=function(t,e,n){return t._gsap[e]=n},LS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},IS=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},US=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},fe="transform",We=fe+"Origin",NS=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in ei&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Nn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Kn(i,a)}):this.tfm[t]=o.x?o[t]:Kn(i,t),t===We&&(this.tfm.zOrigin=o.zOrigin);else return Nn.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(fe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(We,e,"")),t=fe}(r||e)&&this.props.push(t,e,r[t])},Ff=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},OS=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Mc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=yc(),(!r||!r.isStart)&&!n[fe]&&(Ff(n),i.zOrigin&&n[We]&&(n[We]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bf=function(t,e){var n={target:t,props:[],revert:OS,save:NS};return t._gsap||Xe.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},zf,Bl=function(t,e){var n=ui.createElementNS?ui.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ui.createElement(t);return n&&n.style?n:ui.createElement(t)},pn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Mc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Bs(e)||e,1)||""},Qh="O,Moz,ms,Ms,Webkit".split(","),Bs=function(t,e,n){var i=e||ki,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Qh[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Qh[o]:"")+t},zl=function(){ES()&&window.document&&($h=window,ui=$h.document,Ts=ui.documentElement,ki=Bl("div")||{style:{}},Bl("div"),fe=Bs(fe),We=fe+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zf=!!Bs("perspective"),yc=Xe.core.reverting,Sc=1)},tu=function(t){var e=t.ownerSVGElement,n=Bl("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ts.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ts.removeChild(n),r},eu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},kf=function(t){var e,n;try{e=t.getBBox()}catch{e=tu(t),n=1}return e&&(e.width||e.height)||n||(e=tu(t)),e&&!e.width&&!e.x&&!e.y?{x:+eu(t,["x","cx","x1"])||0,y:+eu(t,["y","cy","y1"])||0,width:0,height:0}:e},Hf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&kf(t))},Zi=function(t,e){if(e){var n=t.style,i;e in ei&&e!==We&&(e=fe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Mc,"-$1").toLowerCase())):n.removeAttribute(e)}},fi=function(t,e,n,i,r,o){var a=new Ge(t._pt,e,n,0,1,o?Of:Nf);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},nu={deg:1,rad:1,turn:1},FS={grid:1,flex:1},Si=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ki.style,l=bS.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!r||nu[i]||nu[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),p=t.getCTM&&Hf(t),(d||o==="%")&&(ei[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],_e(d?r/g*u:r/100*g);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ui||!_.appendChild)&&(_=ui.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Je.time&&!m.uncache)return _e(r/m.width*u);if(d&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=u+i,g=t[h],b?t.style[e]=b:Zi(t,e)}else(d||o==="%")&&!FS[pn(_,"display")]&&(a.position=pn(t,"position")),_===t&&(a.position="static"),_.appendChild(ki),g=ki[h],_.removeChild(ki),a.position="absolute";return l&&d&&(m=Hi(_),m.time=Je.time,m.width=_[h]),_e(f?g*r/u:g&&r?u/g*r:0)},Kn=function(t,e,n,i){var r;return Sc||zl(),e in Nn&&e!=="transform"&&(e=Nn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ei[e]&&e!=="transform"?(r=Er(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ra(pn(t,We))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ca[e]&&Ca[e](t,e,n)||pn(t,e)||nf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Si(t,e,r,n)+n:r},BS=function(t,e,n,i){if(!n||n==="none"){var r=Bs(e,t,1),o=r&&pn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=pn(t,"borderTopColor"))}var a=new Ge(this._pt,t.style,e,0,1,Lf),l=0,c=0,h,u,f,d,g,_,m,p,b,M,v,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=pn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=pn(t,e)||i,_?t.style[e]=_:Zi(t,e)),h=[n,i],Mf(h),n=h[0],i=h[1],f=n.match(vs)||[],w=i.match(vs)||[],w.length){for(;u=vs.exec(i);)m=u[0],b=i.substring(l,u.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=bs(d,m)+v),p=parseFloat(m),M=m.substr((p+"").length),l=vs.lastIndex-M.length,M||(M=M||en.units[e]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(d=Si(t,e,_,M)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Of:Nf;return $u.test(i)&&(a.e=0),this._pt=a,a},iu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zS=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=iu[n]||n,e[1]=iu[i]||i,e.join(" ")},kS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ei[a]&&(l=1,a=a==="transformOrigin"?We:fe),Zi(n,a);l&&(Zi(n,fe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Er(n,1),o.uncache=1,Ff(i)))}},Ca={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Ge(t._pt,e,n,0,0,kS);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Mr=[1,0,0,1,0,0],Vf={},Gf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},su=function(t){var e=pn(t,fe);return Gf(e)?Mr:e.substr(7).match(Ku).map(_e)},Ec=function(t,e){var n=t._gsap||Hi(t),i=t.style,r=su(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Mr:r):(r===Mr&&!t.offsetParent&&t!==Ts&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ts.appendChild(t)),r=su(t),l?i.display=l:Zi(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ts.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},kl=function(t,e,n,i,r,o){var a=t._gsap,l=r||Ec(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],b=l[5],M=e.split(" "),v=parseFloat(M[0])||0,w=parseFloat(M[1])||0,A,T,R,x;n?l!==Mr&&(T=d*m-g*_)&&(R=v*(m/T)+w*(-_/T)+(_*b-m*p)/T,x=v*(-g/T)+w*(d/T)-(d*b-g*p)/T,v=R,w=x):(A=kf(t),v=A.x+(~M[0].indexOf("%")?v/100*A.width:v),w=A.y+(~(M[1]||M[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&a.smooth?(p=v-c,b=w-h,a.xOffset=u+(p*d+b*_)-p,a.yOffset=f+(p*g+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[We]="0px 0px",o&&(fi(o,a,"xOrigin",c,v),fi(o,a,"yOrigin",h,w),fi(o,a,"xOffset",u,a.xOffset),fi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+w)},Er=function(t,e){var n=t._gsap||new wf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=pn(t,We)||"0",h,u,f,d,g,_,m,p,b,M,v,w,A,T,R,x,y,P,F,O,G,W,V,q,H,nt,lt,_t,Pt,qt,X,et;return h=u=f=_=m=p=b=M=v=0,d=g=1,n.svg=!!(t.getCTM&&Hf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[fe]!=="none"?l[fe]:"")),i.scale=i.rotate=i.translate="none"),T=Ec(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),kl(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,A=n.yOrigin||0,T!==Mr&&(P=T[0],F=T[1],O=T[2],G=T[3],h=W=T[4],u=V=T[5],T.length===6?(d=Math.sqrt(P*P+F*F),g=Math.sqrt(G*G+O*O),_=P||F?ms(F,P)*Ui:0,b=O||G?ms(O,G)*Ui+_:0,b&&(g*=Math.abs(Math.cos(b*ws))),n.svg&&(h-=w-(w*P+A*O),u-=A-(w*F+A*G))):(et=T[6],qt=T[7],lt=T[8],_t=T[9],Pt=T[10],X=T[11],h=T[12],u=T[13],f=T[14],R=ms(et,Pt),m=R*Ui,R&&(x=Math.cos(-R),y=Math.sin(-R),q=W*x+lt*y,H=V*x+_t*y,nt=et*x+Pt*y,lt=W*-y+lt*x,_t=V*-y+_t*x,Pt=et*-y+Pt*x,X=qt*-y+X*x,W=q,V=H,et=nt),R=ms(-O,Pt),p=R*Ui,R&&(x=Math.cos(-R),y=Math.sin(-R),q=P*x-lt*y,H=F*x-_t*y,nt=O*x-Pt*y,X=G*y+X*x,P=q,F=H,O=nt),R=ms(F,P),_=R*Ui,R&&(x=Math.cos(R),y=Math.sin(R),q=P*x+F*y,H=W*x+V*y,F=F*x-P*y,V=V*x-W*y,P=q,W=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=_e(Math.sqrt(P*P+F*F+O*O)),g=_e(Math.sqrt(V*V+et*et)),R=ms(W,V),b=Math.abs(R)>2e-4?R*Ui:0,v=X?1/(X<0?-X:X):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Gf(pn(t,fe)),q&&t.setAttribute("transform",q))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(d*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=_e(d),n.scaleY=_e(g),n.rotation=_e(_)+a,n.rotationX=_e(m)+a,n.rotationY=_e(p)+a,n.skewX=b+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[We]=Ra(c)),n.xOffset=n.yOffset=0,n.force3D=en.force3D,n.renderTransform=n.svg?VS:zf?Wf:HS,n.uncache=0,n},Ra=function(t){return(t=t.split(" "))[0]+" "+t[1]},No=function(t,e,n){var i=Re(e);return _e(parseFloat(e)+parseFloat(Si(t,"x",n+"px",i)))+i},HS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Wf(t,e)},Pi="0deg",Zs="0px",Di=") ",Wf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,M=n.zOrigin,v="",w=p==="auto"&&t&&t!==1||p===!0;if(M&&(u!==Pi||h!==Pi)){var A=parseFloat(h)*ws,T=Math.sin(A),R=Math.cos(A),x;A=parseFloat(u)*ws,x=Math.cos(A),o=No(b,o,T*x*-M),a=No(b,a,-Math.sin(A)*-M),l=No(b,l,R*x*-M+M)}m!==Zs&&(v+="perspective("+m+Di),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(w||o!==Zs||a!==Zs||l!==Zs)&&(v+=l!==Zs||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Di),c!==Pi&&(v+="rotate("+c+Di),h!==Pi&&(v+="rotateY("+h+Di),u!==Pi&&(v+="rotateX("+u+Di),(f!==Pi||d!==Pi)&&(v+="skew("+f+", "+d+Di),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Di),b.style[fe]=v||"translate(0, 0)"},VS=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,M=parseFloat(o),v=parseFloat(a),w,A,T,R,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ws,c*=ws,w=Math.cos(l)*u,A=Math.sin(l)*u,T=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=ws,x=Math.tan(c-h),x=Math.sqrt(1+x*x),T*=x,R*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),w*=x,A*=x)),w=_e(w),A=_e(A),T=_e(T),R=_e(R)):(w=u,R=f,A=T=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=Si(d,"x",o,"px"),v=Si(d,"y",a,"px")),(g||_||m||p)&&(M=_e(M+g-(g*w+_*T)+m),v=_e(v+_-(g*A+_*R)+p)),(i||r)&&(x=d.getBBox(),M=_e(M+i/100*x.width),v=_e(v+r/100*x.height)),x="matrix("+w+","+A+","+T+","+R+","+M+","+v+")",d.setAttribute("transform",x),b&&(d.style[fe]=x)},GS=function(t,e,n,i,r){var o=360,a=Te(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ui:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Jh)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Jh)%o-~~(c/o)*o)),t._pt=f=new Ge(t._pt,e,n,i,c,wS),f.e=h,f.u="deg",t._props.push(n),f},ru=function(t,e){for(var n in e)t[n]=e[n];return t},WS=function(t,e,n){var i=ru({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[fe]=e,a=Er(n,1),Zi(n,fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[fe],o[fe]=e,a=Er(n,1),o[fe]=c);for(l in ei)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=Re(c),g=Re(h),u=d!==g?Si(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Ge(t._pt,a,l,u,f-u,Fl),t._pt.u=g||0,t._props.push(l));ru(a,i)};Ve("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ca[t>1?"border"+s:s]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(g){return Kn(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var Xf={name:"css",register:zl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,b,M,v,w,A,T,R;Sc||zl(),this.styles=this.styles||Bf(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!($e[_]&&Af(_,e,n,i,t,r)))){if(d=typeof h,g=Ca[_],d==="function"&&(h=h.call(n,i,t,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=xr(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",_i.lastIndex=0,_i.test(c)||(m=Re(c),p=Re(h)),p?m!==p&&(c=Si(t,_,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],Te(c)&&~c.indexOf("random(")&&(c=xr(c)),Re(c+"")||c==="auto"||(c+=en.units[_]||Re(Kn(t,_))||""),(c+"").charAt(1)==="="&&(c=Kn(t,_))):c=Kn(t,_),f=parseFloat(c),b=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),_ in Nn&&(_==="autoAlpha"&&(f===1&&Kn(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),fi(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Nn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ei,M){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=pn(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),v||(w=t._gsap,w.renderTransform&&!e.parseTransform||Er(t,e.parseTransform),A=e.smoothOrigin!==!1&&w.smooth,v=this._pt=new Ge(this._pt,a,fe,0,1,w.renderTransform,w,0,-1),v.dep=1),_==="scale")this._pt=new Ge(this._pt,w,"scaleY",w.scaleY,(b?bs(w.scaleY,b+u):u)-w.scaleY||0,Fl),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(We,0,a[We]),h=zS(h),w.svg?kl(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&fi(this,w,"zOrigin",w.zOrigin,p),fi(this,a,_,Ra(c),Ra(h)));continue}else if(_==="svgOrigin"){kl(t,h,1,A,0,this);continue}else if(_ in Vf){GS(this,w,_,f,b?bs(f,b+h):h);continue}else if(_==="smoothOrigin"){fi(this,w,"smooth",w.smooth,h);continue}else if(_==="force3D"){w[_]=h;continue}else if(_==="transform"){WS(this,h,t);continue}}else _ in a||(_=Bs(_)||_);if(M||(u||u===0)&&(f||f===0)&&!TS.test(h)&&_ in a)m=(c+"").substr((f+"").length),u||(u=0),p=Re(h)||(_ in en.units?en.units[_]:m),m!==p&&(f=Si(t,_,c,p)),this._pt=new Ge(this._pt,M?w:a,_,f,(b?bs(f,b+u):u)-f,!M&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?CS:Fl),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=AS);else if(_ in a)BS.call(this,t,_,c,b?b+h:h);else if(_ in t)this.add(t,_,c||t[_],b?b+h:h,i,r);else if(_!=="parseTransform"){hc(_,h);continue}M||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),o.push(_)}}T&&If(this)},render:function(t,e){if(e.tween._time||!yc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Kn,aliases:Nn,getSetter:function(t,e,n){var i=Nn[e];return i&&i.indexOf(",")<0&&(e=i),e in ei&&e!==We&&(t._gsap.x||Kn(t,"x"))?n&&jh===n?e==="scale"?LS:DS:(jh=n||{})&&(e==="scale"?IS:US):t.style&&!oc(t.style[e])?RS:~e.indexOf("-")?PS:vc(t,e)},core:{_removeProperty:Zi,_getMatrix:Ec}};Xe.utils.checkPrefix=Bs;Xe.core.getStyleSaver=Bf;(function(s,t,e,n){var i=Ve(s+","+t+","+e,function(r){ei[r]=1});Ve(t,function(r){en.units[r]="deg",Vf[r]=1}),Nn[i[13]]=s+","+t,Ve(n,function(r){var o=r.split(":");Nn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){en.units[s]="px"});Xe.registerPlugin(Xf);var Yf=Xe.registerPlugin(Xf)||Xe;Yf.core.Tween;function XS(s,t){const e=new _x(s,t);return e.target.set(0,0,0),e.rotateSpeed=3,e.zoomSpeed=0,e.panSpeed=.8,e.mouseButtons={LEFT:Jn.ROTATE,MIDDLE:Jn.DOLLY,RIGHT:Jn.PAN},console.log("controls created"),e}const YS=["S","s","M","m","E","e","D","d","U","u","L","l","R","r","B","b","F","f","Z","z","X","x","Y","y"],qS=["q","p"];class ZS{constructor(t,e,n){this.renderer=t,this.Mcontrols=n,this.twistKeyMap=YS,this.commander=e,this.controlKeys=qS,this.isTesting=!1}setup(){document.addEventListener("keydown",t=>{this.twistKeyMap.includes(t.key)?(console.log("twist"+t.key),this.commander.sendCommand(t.key+`
`,"key")):this.controlKeys.includes(t.key)?this.commander.sendCommand(t.key+`
`,"key"):t.key===" "?this.renderer.repositionCamera(!0,this.Mcontrols):t.key==="w"&&this.botSolveSimulate()})}botSolveSimulate(){if(this.isTesting)return;this.isTesting=!0;const t=`*G*W*R***W*RB**W*R*R***B*****WO****G*GW**O**W**OO*G**Y*B*W*****R**G**Y***B**********G******OB*****O***G*W****Y*BR****BY*R**YG**Y**R*****Y*R***G**OB*W***Y*O*B*Y*O*
`,e=["F","L","B","R","U","D"].join(`
`)+`
`,n=this.commander.sendCommand.bind(this.commander),i=r=>new Promise(o=>setTimeout(o,r));(async()=>(n(`SERIAL_CONNECTED
`,"serial"),await i(1e3),n(`CONNECT
`,"button"),await i(1e3),n(`SOLVE_START
`,"serial"),await i(700),n(t,"serial"),await i(300),n(e,"serial"),await i(2e3),n(`SOLVE_END
`,"serial"),this.isTesting=!1))()}}class KS{constructor(){this.switch=document.getElementById("switch"),this.panel=document.getElementById("serial-container"),this.arrow=document.getElementById("panelArrow"),console.log(this.switch),console.log(this.panel),this.isHidden=!0,this.shift=this.shift.bind(this),this.init()}init(){this.switch===null||this.switch===void 0||this.panel===null||this.panel===void 0||this.switch.addEventListener("click",this.shift)}shift(){console.log("shift"),this.arrow.classList.toggle("rotated"),Yf.to(this.panel,{x:this.isHidden?0:"-100%",duration:.5,ease:"power2.inOut",onComplete:()=>{this.isHidden=!this.isHidden}})}}class $S{constructor(t){this.reverseButton=document.getElementById("reverseBtn"),this.resetButton=document.getElementById("resetBtn"),this.startButton=document.getElementById("startBtn"),this.connectButton=document.getElementById("connectBtn"),this.commander=t,this.init()}init(){this.resetButton.addEventListener("click",()=>{this.commander.sendCommand(`reset
`,"button")}),this.startButton.addEventListener("click",()=>{this.commander.sendCommand(`startSOLVE
`,"button")}),this.connectButton.addEventListener("click",()=>{this.commander.sendCommand(`CONNECT
`,"button")}),this.reverseButton.addEventListener("click",()=>{this.commander.sendCommand(`reverse
`,"button")})}}class jS{constructor(t){this.enable=!1,this.port=null,this.reader=null,this.writer=null,this.decoder=new TextDecoder,this.encoder=new TextEncoder,this.frameBuffer=new Uint8Array,this.frameTimeoutControls=null,this.frameDelay=10,this.commander=t,this.isReading=!1,this.connectButton=document.getElementById("connectButton"),this.disconnectButton=document.getElementById("disconnectButton"),this.sendButton=document.getElementById("sendButton"),this.messageInput=document.getElementById("messageInput"),this.receivedDataEl=document.getElementById("receivedData"),this.statusEl=document.getElementById("status").querySelector("span"),this.serialLine=document.getElementById("serial-line"),this.connect=this.connect.bind(this),this.closePort=this.closePort.bind(this),this.sendMessage=this.sendMessage.bind(this),this.readSerial=this.readSerial.bind(this),this.appendReceivedData=this.appendReceivedData.bind(this),this.processFrame=this.processFrame.bind(this),this.start=this.start.bind(this),this.sendTxtMessage=this.sendTxtMessage.bind(this),this.createTimeoutControls=(e,n)=>{let i=null;return{start:()=>{clearTimeout(i),i=setTimeout(e,n)},stop:()=>{clearTimeout(i),i=null}}},this.checkSupport()}init(){this.enable!==!1&&(this.connectButton.addEventListener("click",this.connect),this.sendButton.addEventListener("click",this.sendTxtMessage),this.messageInput.addEventListener("keypress",t=>{t.key=="Enter"&&this.sendTxtMessage()}),this.disconnectButton.addEventListener("click",async()=>{await this.closePort()}))}checkSupport(){return"serial"in navigator?(this.statusEl.textContent="浏览器支持 Web Serial API",this.statusEl.classList.add("connected"),this.connectButton.disabled=!1,this.enable=!0):(this.statusEl.textContent="您的浏览器不支持 Web Serial API。请使用基于 Chromium 的浏览器 (如 Chrome, Edge)",this.statusEl.classList.add("error"),this.connectButton.disabled=!0,this.enable=!1),this.enable}async connect(){try{this.port=await navigator.serial.requestPort({filters:[]}),await this.port.open({baudRate:9600}),this.statusEl.textContent="已连接",this.statusEl.classList.remove("disconnected","error"),this.statusEl.classList.add("connected"),this.serialLine.classList.add("connected"),this.serialLine.textContent="serial connected",this.connectButton.disabled=!0,this.disconnectButton.disabled=!1,this.sendButton.disabled=!1,console.log("串口已连接并打开:",this.port),this.reader=this.port.readable.getReader(),this.writer=this.port.writable.getWriter(),this.isReading=!0,this.readSerial(),this.commander.sendCommand(`SERIAL_CONNECED
`,"serial"),this.port.addEventListener("disconnect",()=>{console.log("串口已断开（物理断开事件）"),this.port&&this.closePort()})}catch(t){console.error("连接串口失败:",t),t.name==="NotFoundError"&&t.message.includes("No port selected")?this.statusEl.textContent="连接取消：用户未选择串口":this.statusEl.textContent=`连接失败: ${t.message}`,this.statusEl.classList.remove("connected"),this.statusEl.classList.add("error"),this.connectButton.disabled=!1,this.disconnectButton.disabled=!0,this.sendButton.disabled=!0,this.isReading=!1}}processFrame(){if(this.frameBuffer.length>0){const t=this.decoder.decode(this.frameBuffer);this.commander.sendCommand(t,"serial"),this.appendReceivedData(t),console.log("收到完整帧:",t)}this.frameBuffer=new Uint8Array}async readSerial(){if(!this.port||!this.port.readable){console.warn("readSerial: Port or readable stream not available."),this.isReading=!1;return}for(console.log("readSerial started with frame delimiting."),this.frameTimeoutControls=this.createTimeoutControls(this.processFrame,this.frameDelay);this.isReading&&this.port&&this.port.readable;)try{for(this.reader||(this.reader=this.port.readable.getReader());this.isReading&&this.port&&this.reader;){const{value:t,done:e}=await this.reader.read();if(t&&(this.frameTimeoutControls.stop(),this.frameBuffer=new Uint8Array([...this.frameBuffer,...t]),this.frameTimeoutControls.start()),e){console.log("串口读取器已完成 (done=true)");break}}}catch(t){console.error("读取串口失败:",t),this.appendReceivedData(`错误: 读取失败 (${t.message})`,"error-message"),this.isReading=!1}finally{if(this.reader){try{this.reader.releaseLock()}catch(t){console.warn("释放 reader 锁失败:",t)}this.reader=null}}console.log("readSerial stopped."),this.frameTimeoutControls.stop(),this.processFrame()}sendTxtMessage(){const t=this.messageInput.value.trim();t&&this.sendMessage(t)}async sendMessage(t){if(t&&this.writer)try{const e=this.encoder.encode(t+`
`);await this.writer.write(e),console.log("发送数据:",t),this.appendReceivedData(`Sent: ${t}`,"sent-message"),this.messageInput.value=""}catch(e){console.error("写入串口失败:",e),this.appendReceivedData(`错误: 发送失败 (${e.message})`,"error-message")}else alert(t?"串口未连接，无法发送数据":"请输入要发送的消息。")}async closePort(){if(this.statusEl.textContent="正在断开连接...",this.statusEl.classList.remove("connected","error"),this.statusEl.classList.add("disconnected"),this.connectButton.disabled=!0,this.disconnectButton.disabled=!0,this.sendButton.disabled=!0,this.serialLine.classList.remove("connected"),this.serialLine.textContent="serial disconnected",this.isReading=!1,this.frameTimeoutControls&&(this.frameTimeoutControls.stop(),this.processFrame()),this.reader)try{await this.reader.cancel(),console.log("Reader cancellation requested.")}catch(t){console.warn("取消 reader 失败:",t)}if(this.writer)try{await this.writer.releaseLock()}catch(t){console.warn("释放 writer 锁失败:",t)}finally{this.writer=null}if(this.port){try{await this.port.close(),console.log("串口已关闭。")}catch(t){console.error("关闭串口失败:",t)}this.port=null}this.reader=null,this.statusEl.textContent="已断开连接",this.connectButton.disabled=!1}appendReceivedData(t,e=""){const r=`[${new Date().toLocaleTimeString()}] ${t}
`,o=this.receivedDataEl.textContent.split(`
`);o.length>500&&(this.receivedDataEl.textContent=o.slice(o.length-500).join(`
`)),this.receivedDataEl.textContent+=r,this.receivedDataEl.scrollTop=this.receivedDataEl.scrollHeight}async start(){this.startButton.classList.contains("active")?(this.sendMessage(`
STOP`),this.startButton.classList.remove("active"),this.commander.sendCommand(`STOP
`,"button")):this.writer?(this.sendMessage(`
CONNECT`),this.startButton.classList.add("active"),this.commander.sendCommand(`CONNECT
`,"button")):alert("串口未连接，无法发送连接命令。")}}class JS{constructor(){this.client="key",this.cmdBuffList={key:"",button:"",serial:""}}addReciever(t){this.reciever=t}sendCommand(t,e){const n=this.splitCommand(t,e);n.length!==0&&(console.log(n),n.forEach(i=>{this.reciever.parseCommand(i,e),console.log(i)}))}splitCommand(t,e){let n=this.cmdBuffList[e];n+=t;const i=n.split(`
`);return n.length===0||n.slice(-1)===`
`?this.cmdBuffList[e]="":this.cmdBuffList[e]=i.pop(),i.filter(r=>r.length>0)}}class QS{constructor(t){this.cube=t.cube,this.timer=t.timer,this.btns=t.btns,this.renderer=t.renderer,this.keys=null,this.statusMap=["init_anim","idle","ctrlBot","BotSolving"],this.status="init_anim",this.gettingColor=!1,this.parseCommand=this.parseCommand.bind(this),this.keyCommand=this.keyCommand.bind(this),this.btnCommand=this.btnCommand.bind(this),this.serialCommand=this.serialCommand.bind(this),this.reverseCb=this.reverseCb.bind(this),this.cube.setTwistDuration(this.getDuration()),this.isReversing=!1,this.serial=null,this.cube.reverseCb=this.reverseCb,console.log("cubeController created")}addSerial(t){this.serial=t}cmdFilter(t){return!!["X","x","R","r","L","l","B","b"].includes(t)}getDuration(){let t=0;return this.status==="idle"?this.isReversing?t=50:t=200:(this.status,t=200),t}reverseCb(){this.isReversing=!1,this.cube.setTwistDuration(this.getDuration()),console.log("reverseCb")}reverse(){this.isReversing=!0,this.cube.setTwistDuration(this.getDuration()),this.cube.reverse()}initAnim(){console.log("initAnim"),this.cube.corner.cubelets.forEach(t=>{t.setRadius(120,700,"Out")}),this.cube.edge.cubelets.forEach(t=>{t.setRadius(80,700,"Out")}),this.cube.center.cubelets.forEach(t=>{t.setRadius(30,700,"Out")}),this.renderer.rotateCamera(Math.PI*2,2700),setTimeout(()=>{let t=0;const e=[300,0,-200,-200,100,-50,50,0,0,100,150,0,0,0,0,0];this.cube.corner.cubelets.forEach(n=>{console.log("ptr",t),n.setRadius(20,1500+e[t],""),t+=1}),t=0,this.cube.edge.cubelets.forEach(n=>{n.setRadius(20,1e3+e[t],""),t+=1}),t=0,this.cube.center.cubelets.forEach(n=>{n.setRadius(20,500+e[t],""),t+=1})},700),setTimeout(()=>{this.keys.setup(),this.setStatus("idle")},2800)}addKeys(t){this.keys=t}getColor(t){console.log("getting color");let e=[];for(let n=0;n<27;n++)e.push(t.slice(n*6,(n+1)*6));this.cube.fillColor(e)}cntError(){this.status="idle",console.log("command error")}isRecall(t){return t=="recived"}parseCommand(t,e){if(this.isRecall(t)){this.isCmdcb=!0;return}switch(e){case"key":this.keyCommand(t);break;case"button":this.btnCommand(t);break;case"serial":this.serialCommand(t);break}this.isCmdcb==!1&&this.cntError()}keyCommand(t){if(this.status!=="BotSolving"){if(t==="q"&&this.status==="idle"){this.reverse();return}if(t==="p"){this.cube.printMap(1),this.cube.printMap();return}if(t==="k"){this.getColor();return}this.status==="ctrlBot"&&this.cmdFilter(t)===!1||this.isReversing||this.cube.pushTwist(t)}}btnCommand(t){this.status!=="BotSolving"&&(this.status==="idle"?t==="CONNECT"?this.setStatus("ctrlBot"):t==="reverse"&&this.reverse():this.status==="ctrlBot"&&(t==="reset"&&this.setStatus("idle"),t==="startSOLVE"&&this.serial.sendMessage(`
SOLVE_START`)),console.log(this.status))}serialCommand(t){if(this.status==="idle")t==="SERIAL_CONNECTED"&&(this.btns.connectButton.disabled=!1);else if(this.status==="ctrlBot")t==="SOLVE_START"&&this.startSolveing();else if(this.status==="BotSolving"){if(t==="SOLVE_END"){this.solveEnd();return}if(this.gettingColor){if(console.log(t),console.log([...t].length),t.length!==27*6){this.errorHandler("color map error");return}this.getColor(t),this.gettingColor=!1}else this.cube.pushTwist(t)}}setStatus(t){switch(this.status=t,t){case"idle":this.btns.resetButton.disabled=!1,this.btns.startButton.disabled=!0,this.btns.reverseButton.disabled=!1,this.btns.connectButton.diabled=this.serial===null?!0:!this.serial.isReading,this.btns.connectButton.textContent="connect",this.btns.connectButton.classList.remove("connected"),this.timer.reset();break;case"ctrlBot":this.serial!==null&&this.serial.isReading?this.serial.sendMessage(`
CONNECT`):console.log("loss serial"),this.btns.reverseButton.disabled=!0,this.btns.startButton.disabled=!1,this.btns.connectButton.disabled=!0,this.btns.connectButton.textContent="connected",this.btns.connectButton.classList.add("connected"),this.timer.reset();break;case"BotSolving":this.btns.reverseButton.disabled=!0,this.btns.startButton.disabled=!0,this.btns.connectButton.disabled=!0,this.startSolveing();break}}startSolveing(){this.status="BotSolving",this.gettingColor=!0,this.timer.reset(),this.timer.start(),this.cube.stopTwist(),this.cube.clearHis(),this.cube.clearColor(),this.cube.setTwistDuration(this.getDuration())}solveEnd(){this.timer.pause(),this.cube.clearHis(),this.status="ctrlBot"}}class ty{constructor(t){if(this.displayElement=document.getElementById(t),!this.displayElement){console.error("未找到指定的计时器元素:",t);return}this.startTime=0,this.elapsedTime=0,this.timerId=null,this.isRunning=!1,this.updateDisplay()}updateDisplay(){const t=this.elapsedTime,e=String(Math.floor(t/(1e3*60)%60)).padStart(2,"0"),n=String(Math.floor(t/1e3%60)).padStart(2,"0"),i=String(Math.floor(t%1e3/10)).padStart(2,"0");this.displayElement.textContent=`${e}:${n}:${i}`}start(){this.isRunning||(this.isRunning=!0,this.startTime=Date.now()-this.elapsedTime,this.displayElement.classList.add("start"),this.timerId=setInterval(()=>{this.elapsedTime=Date.now()-this.startTime,this.updateDisplay()},10))}pause(){this.isRunning&&(this.isRunning=!1,clearInterval(this.timerId),this.timerId=null,this.displayElement.classList.remove("start"),this.displayElement.classList.add("end"))}reset(){this.pause(),this.displayElement.classList.remove("end","start"),this.elapsedTime=0,this.updateDisplay()}}let mn=new lx("Perspective"),Fa;mn.init();mn.setLoop(ay);const bc=new px(mn),Ba=new JS,ey=new ty("timePanel"),ny=new $S(Ba),za=new QS({cube:bc,timer:ey,btns:ny,renderer:mn});Ba.addReciever(za);const iy=document.getElementById("camera-coordinates"),sy=document.getElementById("camera-up");Fa=XS(mn.camera,mn.renderer.domElement);mn.addMouseCtl(Fa);const ry=new ZS(mn,Ba,Fa);mn.render();const qf=new jS(Ba);qf.init();new KS;za.addSerial(qf);za.addKeys(ry);bc.printMap();za.initAnim();function ay(){Fa.update(),bc.update();const s=mn.camera.position;iy.textContent=`Camera Position: X: ${s.x.toFixed(2)}, Y: ${s.y.toFixed(2)}, Z: ${s.z.toFixed(2)}`;const t=mn.camera.up;sy.textContent=`Camera Up: X: ${t.x.toFixed(2)}, Y: ${t.y.toFixed(2)}, Z: ${t.z.toFixed(2)}`,mn.render()}
