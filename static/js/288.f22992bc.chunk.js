"use strict";(self.webpackChunkMedDoc=self.webpackChunkMedDoc||[]).push([[288],{8288:function(i,t,s){s.r(t),s.d(t,{default:function(){return w}});var e=s(1413),n=s(4165),a=s(5861),r=s(9439),c=s(493),d=s(4852),o=s(4554),p=s(1889),l=s(6151),x=s(4721),m=s(1243),f=s(2426),g=s.n(f),h=s(2791),u=s(9434),v=s(1087),j=s(8800),Z=s(4259),_=s(6038),N={imgWrapper:"VisitHistory_imgWrapper__dSjy3",photo:"VisitHistory_photo__iVzcG",lable:"VisitHistory_lable__WqvPw",infoWrapp:"VisitHistory_infoWrapp__NZI+r",patientName:"VisitHistory_patientName__h0U2e",visitDate:"VisitHistory_visitDate__dkVSx",textInformations:"VisitHistory_textInformations__v8IT-"},b=s(184),y={marginLeft:"0",marginTop:"0",alignItems:{md:"center"},"& .MuiGrid-item":{paddingLeft:"0",paddingTop:"0",marginLeft:"0",marginTop:"0"},"& > .MuiGrid-item":{paddingLeft:"0",paddingTop:"0",marginLeft:"0",marginTop:"0"},"& .visitInfo":{flex:"1"},"& .btnWrapp":{textAlign:{md:"right"},marginRight:{md:"16px",lg:"8px"}}},V={padding:{xs:"14px 28px",md:"16px 40px"},fontSize:{md:"14px"},lineHeight:{xs:"1.17",md:"1.4"}},w=function(){var i=(0,u.I0)(),t=(0,u.v9)(Z._U),s=(0,h.useState)(1),f=(0,r.Z)(s,2),w=f[0],I=f[1],M=(0,h.useState)(null),W=(0,r.Z)(M,2),P=W[0],H=W[1];(0,h.useEffect)((function(){i((0,j.Eg)({page:w,limit:10}))}),[i,w]),(0,h.useEffect)((function(){function i(){return(i=(0,a.Z)((0,n.Z)().mark((function i(){var t,s;return(0,n.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,m.Z.get("/visits");case 2:t=i.sent,s=t.data,H(s);case 5:case"end":return i.stop()}}),i)})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()}),[]);var k=0;P&&(k=Math.ceil(P.length/10));return(0,b.jsxs)("section",{className:N.section,children:[(0,b.jsx)(c.Z,{sx:{width:"100%",bgcolor:"#FAFAFA",padding:{xs:"32px 16px",lg:"32px"},marginBottom:{xs:"20px",md:"32px"}},children:t.map((function(i,s){var n=i.patient,a=i.date,r=i._id;return(0,b.jsxs)("div",{children:[(0,b.jsx)(d.ZP,{sx:{marginBottom:{xs:"20px",md:"16px"},padding:"0px"},children:(0,b.jsx)(o.Z,{sx:{flexGrow:1},children:(0,b.jsxs)(p.ZP,{container:!0,spacing:2,sx:(0,e.Z)((0,e.Z)({},y),{},{flexWrap:{xs:"nowrap"},alignItems:{md:"center"}}),children:[(0,b.jsx)(p.ZP,{item:!0,sx:(0,e.Z)({},y),children:(0,b.jsx)("div",{className:N.imgWrapper,children:(0,b.jsx)("img",{src:n.avatarURL,alt:"avatar",className:N.photo})})}),(0,b.jsx)(p.ZP,{item:!0,xs:11,sx:y,children:(0,b.jsxs)(p.ZP,{container:!0,spacing:3,sx:(0,e.Z)((0,e.Z)({},y),{},{width:{md:"100%"}}),children:[(0,b.jsx)(p.ZP,{item:!0,xs:12,md:3,lg:6,sx:y,children:(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:N.lable,children:"Name"}),(0,b.jsx)("p",{className:N.patientName,children:n.name})]})}),(0,b.jsx)(p.ZP,{item:!0,xs:12,md:5,lg:3,sx:(0,e.Z)({},y),children:(0,b.jsx)("div",{className:"".concat(N.visitInfo," visitInfo"),children:(0,b.jsxs)("div",{className:N.infoWrapp,children:[(0,b.jsx)("span",{className:N.lable,children:"Last visit"}),(0,b.jsx)("p",{className:N.visitDate,children:g()(a).format("MMMM DD/MM/YYYY")})]})})}),(0,b.jsx)(p.ZP,{item:!0,xs:12,md:4,lg:3,sx:y,children:(0,b.jsx)("div",{className:"".concat(N.btnWrapp," btnWrapp"),children:(0,b.jsx)(v.rU,{to:"/doctor/patients-list/".concat(n._id),children:(0,b.jsx)(l.Z,{variant:"outlined",sx:V,onClick:function(){return function(i){var t=P.filter((function(t){return t._id===i}));localStorage.setItem("clickedVisit",JSON.stringify(t[0]))}(r)},children:"view profile"})})})})]})})]})})}),(0,b.jsx)(x.Z,{sx:{width:"100%",marginBottom:s!==t.length-1?"32px":"0px",borderBottom:"1px solid rgba(17, 17, 17, 0.1)"}})]},r)}))}),(0,b.jsx)(_.Rz,{numberOfBtnsOnVisitsHistory:k,handlePageOnVisits:function(i){I(i)}})]})}}}]);
//# sourceMappingURL=288.f22992bc.chunk.js.map