(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var c=e.g.document;if(!t&&c&&(c.currentScript&&(t=c.currentScript.src),!t)){var n=c.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!t;)t=n[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"27c71e5aefbb2bd308c8.svg",c=e.p+"f9a9192004df41157281.svg",n=e.p+"08e7ffb5431f928f03ce.svg",a=e.p+"d5160273ce138852496d.svg",s=e.p+"f274d0f26f19ee158527.svg",r=e.p+"2d0e63cc3b721013701f.svg",o=e.p+"88b665359bf0165ed6a0.svg";const l=[n,a,s,r,o];class i{static id=i.ID();static subjects=i.getSubjects();static addSubjects(e){i.id++,i.subjects.push({name:e,id:i.id}),i.updateLocalStorage()}static removeSubject(e){const t=i.subjects.find((t=>t.id==e)),c=i.subjects.indexOf(t);i.subjects.splice(c,1),i.updateLocalStorage()}static updateLocalStorage(){localStorage.setItem("subjects",JSON.stringify(i.subjects)),localStorage.setItem("id",JSON.stringify(i.id))}static ID(){return JSON.parse(localStorage.getItem("id"))}static getSubjects(){const e=JSON.parse(localStorage.getItem("subjects"));return e||[]}}const d=i;function u(){return(new Date).toDateString().split(" ")[0]}function p(){let e=(new Date).toDateString().split(" ");const[t,c,n]=[e[1],e[2],e[3]];return e=t+" "+c+", "+n,e}class g{static schedule=g.getSchedule();static getSchedule(){const e=JSON.parse(localStorage.getItem("schedule"));return e||[{day:"mon",subjects:[]},{day:"tue",subjects:[]},{day:"wed",subjects:[]},{day:"thu",subjects:[]},{day:"fri",subjects:[]}]}static removeSubject(e,t){const c=g.schedule.findIndex((t=>t.day==e)),n=g.schedule[c].subjects,a=n.findIndex((e=>e.id==t));n.splice(a,1),g.updateLocalStorage()}static addData(e,t){const c=g.schedule.findIndex((t=>t.day==e)),n=g.schedule[c].subjects;t.forEach((e=>{n.includes(e)||n.push(e)})),g.updateLocalStorage()}static updateLocalStorage(){localStorage.setItem("schedule",JSON.stringify(g.schedule))}static getDaySchedule(e){const t=g.schedule.find((t=>t.day==e.toLowerCase()));return t?.subjects}}const m=g;class S{static attendance=[];static setLocalStorage(){JSON.parse(localStorage.getItem("today"))==p()||(localStorage.setItem("today",JSON.stringify(p())),localStorage.setItem("extraclass",JSON.stringify([])),localStorage.setItem("todayReport",JSON.stringify(""))),S.todayReportData()}static addAttendance(e,t){const c=S.attendance.find((t=>t.subject.name==e.name));f.updateReport(e,c.status,t),c.status=t,S.updateLocalStorage()}static todayReportData(){if(""==JSON.parse(localStorage.getItem("todayReport"))){const e=m.getDaySchedule(u());e?.forEach((e=>{S.attendance.push({subject:e,status:"Select"})})),S.updateLocalStorage()}else S.attendance=JSON.parse(localStorage.getItem("todayReport")),S.updateLocalStorage()}static updateLocalStorage(){localStorage.setItem("todayReport",JSON.stringify(S.attendance))}}const y=S;class b{static report=[];static getReport(){return b.report}static setReport(){""==JSON.parse(localStorage.getItem("report"))?(d.getSubjects().forEach((e=>{b.report.push({subject:e,attended:0,bunk:0,holiday:0,total:0})})),localStorage.setItem("report",JSON.stringify(b.report))):b.report=JSON.parse(localStorage.getItem("report"))}static updateReport(e,t,c){const n=b.report.find((t=>t.subject.id==e.id));if("Select"==t){switch(console.log("new entry"),c){case"Attended":n.attended++,n.total++;break;case"Bunk":n.bunk++,n.total++;break;case"Holiday":n.holiday++}b.updateLocalStorage()}else if(console.log("updated entry"),t!=c){switch(c){case"Attended":n.attended++;break;case"Bunk":n.bunk++;break;case"Holiday":n.holiday++,n.total--}switch(t){case"Attended":n.attended--;break;case"Bunk":n.bunk--;break;case"Holiday":n.holiday--,n.total++}b.updateLocalStorage()}}static getData(e){return JSON.parse(localStorage.getItem("report")).find((t=>t.subject.id==e.id))}static updateLocalStorage(){localStorage.setItem("report",JSON.stringify(b.report))}}const f=b;class h{static subject=[];static setStorage(){""!=h.getData()&&(h.subject=h.getData())}static addSubject(e,t){h.subject.push({subject:e,status:t}),h.updateLocalStorage()}static updateLocalStorage(){localStorage.setItem("extraclass",JSON.stringify(h.subject))}static updateSubject(e,t){const c=h.subject.find((t=>t.subject.id==e)),n=c.status;console.log(n),f.updateReport(c.subject,n,t),c.status=t,h.updateLocalStorage()}static getData(){return JSON.parse(localStorage.getItem("extraclass"))}}const E=h,v=e.p+"34f636c2c2c097766c7e.svg",L=e.p+"06daa2700f6b85350d71.svg";function j(e){e.querySelector(".selector-options-wrapper").classList="selector-options-wrapper";const t=e.querySelector(".selector>img");t.src=v;e.querySelector(".selector").style.zIndex=t.src==L?3:1}const q=function(e,t){const c=document.createElement("div");c.className="sub",c.innerHTML=`\n                <div class="sub-name">${e}</div>\n                <div class="selector-wrapper">\n                    <div class="selector">\n                     <div class="value">${t}</div>           \n                      <img src="${v}" alt="" srcset="" >\n                    </div>\n                    <div class="selector-options-wrapper ">\n                        <div\n                        class="selector-options ">\n                        <div class="selector-option" id="attend">Attended</div>\n                        <div class="selector-option" id="bunk">Bunk</div>\n                        <div class="selector-option" id="holiday">Holiday</div>\n                        </div>\n                    </div>\n                </div>\n              `,c.querySelector(".selector>img").addEventListener("click",(e=>{e.target.src==L?j(c):function(e){const t=e.querySelector(".selector-options-wrapper");t.classList="selector-options-wrapper selector-dropdown";const c=e.querySelector(".selector>img");c.src=L;const n=e.querySelector(".selector");n.style.zIndex=c.src==L?3:1}(c)}));const n=c.querySelectorAll(".selector-option"),a=c.querySelector(".value");return n.forEach((e=>e.addEventListener("click",(()=>{a.innerText=e.innerText,j(c)})))),c},w=e.p+"1ff86f4a63d576adbe9d.svg",I=e.p+"a69ec82c0047e3b6e45c.svg";const k=function(e){const t=document.createElement("div");t.classList="select";const c=document.createElement("div");c.classList="select-input";const n=document.createElement("div");n.classList="name",n.innerText="Subjects";const a=document.createElement("img");a.src=I;const s=document.createElement("div");s.classList="options-wrapper";const r=document.createElement("div");r.classList="options";const o=()=>{a.src=a.src==w?I:w,s.classList=a.src==I?"options-wrapper":"options-wrapper dropdown-select"};return a.addEventListener("click",o),n.addEventListener("click",o),e&&r.addEventListener("click",o),c.appendChild(n),c.appendChild(a),s.appendChild(r),t.appendChild(c),t.appendChild(s),t};function x(){const e=document.querySelector("#extraclass-page").querySelector(".sub-container");e.innerHTML="",E.getData().forEach((t=>{const c=q(t.subject.name,t.status);c.setAttribute("data-ID",`${t.subject.id}`),e.appendChild(c)})),function(){const e=document.querySelectorAll(".selector-option");e?.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.innerText,c=e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("data-ID");E.updateSubject(c,t)}))}))}()}const T=function(){E.setStorage(),function(){const e=document.querySelector("#extraclass-page").querySelector(".extraclass-pg-wrapper");e.innerHTML="";const t=document.createElement("div");t.className="sub-container",e.appendChild(function(){const e=k(!0),t=e.querySelector(".options-wrapper>.options");return d.getSubjects().forEach((e=>{const c=document.createElement("div");c.classList="option",c.innerText=e.name,c.setAttribute("data-ID",`${e.id}`),t.appendChild(c)})),e}()),e.appendChild(t)}(),document.querySelectorAll(".options-wrapper>.options>.option").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-ID"),c=e.target.innerText;E.addSubject({name:c,id:t},"Select"),x()}))})),x()},N=document.querySelector(".subjects-wrapper"),A=document.querySelector("#home-page");const J=function(){!function(){const e=A.querySelector("#day"),t=A.querySelector("#date");e.innerText=u(),t.innerText=p()}(),y.setLocalStorage(),function(){const e=y.attendance;N.innerHTML="",e.forEach((e=>{const t=q(e.subject.name,e.status);t.setAttribute("data-ID",e.subject.id),N.appendChild(t)}))}(),document.querySelectorAll(".selector-option").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.innerText,c=e.target.parentElement.parentElement.parentElement.parentElement,n=c.getAttribute("data-ID"),a=c.querySelector(".sub-name").innerText;y.addAttendance({name:a,id:n},t)}))}))};const O=function(e,t,c,n,a){const s=document.createElement("div");s.className="table-row",s.setAttribute("data-ID",`${e}`);const r=document.createElement("div");r.className="cell",r.innerText=`${t}`;const o=document.createElement("div");o.className="cell",o.innerText=`${c}`;const l=document.createElement("div");l.className="cell",l.innerText=`${n}`;const i=document.createElement("div");return i.className="cell",i.innerText=`${a}`,s.appendChild(r),s.appendChild(o),s.appendChild(l),s.appendChild(i),s};const D=function(){const e=document.querySelector("#home-page").querySelector(".table-content");f.setReport(),function(e){e.innerHTML="",f.getReport().forEach((t=>{e.appendChild(O(t.subject.id,t.subject.name,t.total,t.attended,t.attended/t.total*100))}))}(e)};const C=function(){const e=document.querySelector("#home-page"),t=e.querySelector(".home-pg-wrapper"),c=e.querySelector(".nav"),n=t.querySelector(".today"),a=t.querySelector(".report");c.addEventListener("click",(e=>{c.querySelectorAll(".nav-item").forEach((e=>{e.classList="nav-item"})),e.target.classList="nav-item current","today"==e.target.id?(n.style.display="flex",a.style.display="none",J()):(n.style.display="none",a.style.display="flex",D())}))},$=e.p+"3f31ef6454ff1908db10.svg";const H=function(e,t){const c=document.createElement("div");c.classList="tile";const n=document.createElement("div");n.innerText=`${e}`,c.setAttribute("data-id",`${t}`);const a=document.createElement("img");return a.src=$,a.addEventListener("click",(()=>{a.parentElement.remove()})),c.appendChild(n),c.appendChild(a),c},R=document.querySelector("#schedule-page"),M=R.querySelectorAll("img"),B=R.querySelectorAll(".subject-list-wrapper"),P=R.querySelectorAll(".subject-list"),U=R.querySelectorAll(".add>button"),z=R.querySelector(".modal>dialog"),F=R.querySelector(".modal>dialog>.dialog"),G=R.querySelector(".message"),K=[];function Q(){z.querySelector(".list").innerHTML=""}const V=function(){!function(){const e=document.querySelector("#settings-page .reset>button");console.log(e),e.addEventListener("click",(()=>{localStorage.clear(),location.reload()}))}()};class W{static render(e){W.clearScreen();const t=`${e}-page`;switch(document.querySelector(`#${t}`).style.display="flex",t){case"schedule-page":!function(){const e=d.getSubjects();K.splice(0,K.length),0!=e.length?e.forEach((e=>{const t=document.createElement("div");t.classList="option",t.setAttribute("data-ID",`${e.id}`),t.innerText=`${e.name}`,t.addEventListener("click",(e=>{const t=z.querySelector(".list"),c=e.target,n=c.getAttribute("data-ID"),a=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("data-day"),s=[];m.getDaySchedule(a).forEach((e=>s.push(e.name))),s.includes(c.innerText)?(t.style.color="red",t.innerText="already selected"):(t.style.color="black",t.innerHTML="already selected"==t.innerText?"":t.innerHTML,t.appendChild(H(c.innerText,n)))})),K.push(t)})):(G.style.color="red",G.innerText="Please add subjects first..")}();break;case"home-page":C(),J(),D();break;case"extraclass-page":T();case"settings-page":V()}}static clearScreen(){document.querySelectorAll("#main>.page").forEach((e=>{e.style.display="none"}))}}const X=W,Y=document.querySelector("#menu-icon>img"),Z=document.querySelector("#menu"),_=Z.querySelectorAll(".pageTab"),ee=e=>{Z.contains(e.target)||Y.contains(e.target)||te()};function te(){Y.src=t,Z.classList="slide-backwards",document.removeEventListener("click",ee)}function ce(e){_.forEach((e=>{e.classList="pageTab"})),e.classList="pageTab active"}function ne(){Y.addEventListener("click",(()=>{Y.src==c?te():(Y.src=c,Z.classList="slide-forwards",document.addEventListener("click",ee))}))}const ae=document.querySelector("#starter>button"),se=document.querySelector("#starter");function re(){se.style.display="none";const e=document.querySelector("#subjects");ce(e),X.render(e.id),localStorage.setItem("newUser",JSON.stringify(!1)),ae.removeEventListener("click",re,!0)}const oe=function(){JSON.parse(localStorage.getItem("newUser"))?ae.addEventListener("click",re,!0):se.style.display="none"};const le=function(){0==localStorage.length&&(localStorage.setItem("subjects",JSON.stringify([])),localStorage.setItem("id",JSON.stringify(0)),localStorage.setItem("newUser",JSON.stringify(!0)),localStorage.setItem("schedule",JSON.stringify([{day:"mon",subjects:[]},{day:"tue",subjects:[]},{day:"wed",subjects:[]},{day:"thu",subjects:[]},{day:"fri",subjects:[]}])),localStorage.setItem("today",JSON.stringify("Jan 02, 2024")),localStorage.setItem("todayReport",JSON.stringify("")),localStorage.setItem("report",JSON.stringify("")),localStorage.setItem("extraclass",JSON.stringify([])))},ie=document.querySelector(".sub-pg-wrapper .add"),de=document.querySelector(".sub-pg-wrapper .subject-list"),ue=de.querySelector("p"),pe=ie.querySelector("input"),ge=document.querySelector("span#link");function me(){const e=d.getSubjects();0!=e.length&&(de.innerHTML="",e.forEach((e=>{de.appendChild(H(e.name,e.id))})),function(){const e=de.querySelectorAll(".tile > img");e?.forEach((e=>{e.addEventListener("click",(()=>{const t=e.parentElement.getAttribute("data-id");d.removeSubject(t)}))}))}())}const Se=function(){ie.querySelector("button").addEventListener("click",(e=>{e.preventDefault(),function(){const e=pe.value;""==e?(ue.style.color="red",ue.innerText="Please enter a subject name"):(d.addSubjects(e),pe.value="",pe.focus(),me())}()})),me(),ge.addEventListener("click",(()=>{X.render("schedule")}))};le(),oe(),Y.src=t,_.forEach(((e,t)=>{e.querySelector(".icon>img").src=l[t]})),ne(),JSON.parse(localStorage.getItem("newUser"))||X.render("home"),_.forEach((e=>{e.addEventListener("click",(()=>{ce(e),X.render(e.id),te()}))})),Se(),M.forEach(((e,t)=>{e.src=I,e.addEventListener("click",(c=>{e.src=e.src==I?w:I,B[t].classList=e.src==I?"subject-list-wrapper":"subject-list-wrapper dropdown";const n=c.target.parentElement.parentElement.parentElement.id;e.src==w&&function(e,t){const c=m.getSchedule().find((t=>t.day==e));P[t].innerHTML="",c?.subjects.forEach((e=>{P[t].appendChild(H(e.name,e.id))})),function(e,t){const c=P[t].querySelectorAll(".tile");c.forEach((t=>{t.querySelector("img").addEventListener("click",(()=>{const c=t.getAttribute("data-ID");m.removeSubject(e,c)}))}))}(e,t)}(n,t)}))})),U.forEach((e=>{e.addEventListener("click",(e=>{!function(e){(function(){const e=z.querySelector(".options");e.innerText="",K.forEach((t=>{e.append(t)}))})(),z.setAttribute("data-Day",`${e}`),z.showModal()}(e.target.parentElement.parentElement.id)}))})),function(){if(""==F.innerHTML){F.appendChild(k(!1));const e=document.createElement("div");e.className="list";const t=document.createElement("div");t.className="btn-container";const c=document.createElement("button");c.classList="submit-btn",c.innerText="Done",c.addEventListener("click",(e=>{!function(e){const t=z.querySelector(".list"),c=t.querySelectorAll(".tile");if(0!=c.length){const t=[];c.forEach((e=>{const c=e.getAttribute("data-id"),n=e.querySelector("div").innerText;t.push({name:n,id:c})})),m.addData(e,t),Q(),z.close()}else t.style.color="red",t.innerText="Please select subjects"}(e.target.parentElement.parentElement.parentElement.getAttribute("data-day"))}));const n=document.createElement("button");n.classList="cancel-btn",n.innerText="Cancel",n.addEventListener("click",(()=>{Q(),z.close()})),t.appendChild(n),t.appendChild(c),F.appendChild(e),F.appendChild(t)}}(),D()})();
//# sourceMappingURL=app.9fc172dc606c575389e0.js.map