(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,a,t){e.exports=t(352)},207:function(e,a,t){},209:function(e,a,t){},352:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(33),i=t.n(s),l=(t(207),t(123)),c=t(21),o=t(22),m=t(25),u=t(23),d=t(24),g=t(19),p=(t(209),t(45)),f=t.n(p),h=t(29),b=t.n(h),y=t(17),E=t.n(y),v=t(8),_=t(54),x=t.n(_),w=t(55),j=t.n(w),C=t(27),k=t.n(C);var S=Object(v.withStyles)({root:{flexGrow:1}})(function(e){var a=e.classes,t=e.appTitle;return n.a.createElement("div",{className:a.root},n.a.createElement(x.a,{position:"static",color:"default"},n.a.createElement(j.a,null,n.a.createElement(k.a,{variant:"h6",color:"inherit"},t))))}),O=t(30),N=t.n(O),A=t(28),F=t.n(A),I=t(56),M=t.n(I);var B=Object(v.withStyles)(function(e){return{button:{margin:e.spacing.unit,float:"right"}}})(function(e){var a=e.classes,t=e.onFileChooserChange;return n.a.createElement("div",null,n.a.createElement(M.a,{size:"small",variant:"outlined",color:"primary",className:a.button},n.a.createElement("label",{htmlFor:"upload"},"Add your own images")),n.a.createElement("input",{type:"file",onChange:t,id:"upload",style:{display:"none"}}))});var G=Object(v.withStyles)(function(e){return{typography:{useNextVariants:!0},root:{minWidth:275,maxWidth:"100%",height:"auto",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-evenly",alignItems:"flex-start",alignContent:"flex-start"},details1:{width:"40%",order:"1",flexGrow:"1"},details2:{width:"40%",order:"2",flexGrow:"1"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:16},pos:{marginBottom:12}}})(function(e){var a=e.classes,t=e.onFileChooserChange;return n.a.createElement(N.a,{className:a.root},n.a.createElement(F.a,{className:a.details1},n.a.createElement(k.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"Click an image below to process")),n.a.createElement(F.a,{className:a.details2},n.a.createElement(B,{onFileChooserChange:t})))}),z=t(57),D=t.n(z),W=t(58),R=t.n(W),T=t(59),H=t.n(T),P=t(60),V=t.n(P),J=t(114),U=t.n(J),L=t(5),K=t.n(L),Y=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.galleryImagesJSON,r=e.handleGalleryImageClick,s=e.removeImage,i=e.imageMainSource;return n.a.createElement("div",{className:a.root},n.a.createElement(D.a,{className:a.gridList,cols:2.5},t.map(function(e){return n.a.createElement(R.a,{key:e.id,className:i===e.full_path?a.imgSelected:""},n.a.createElement("img",{className:K()(a.imgCursor),src:e.full_path,onClick:r,id:e.id,alt:""}),n.a.createElement(H.a,{title:"",classes:{root:i===e.full_path?a.titleBarSelected:a.titleBar,title:a.title},actionIcon:1===e.delete&&n.a.createElement(V.a,{onClick:function(){return s(e.id)},color:"secondary",className:a.button,"aria-label":"Delete"},n.a.createElement(U.a,null))}))})))}}]),a}(n.a.Component),Z=Object(v.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},imgSelected:{borderBottom:"6px dashed #999"},imgCursor:{cursor:"pointer"},title:{color:e.palette.primary.light},titleBarSelected:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},titleBar:{background:"linear-gradient(to top, rgba(245,245,245,0.7) 0%, rgba(204,204,204,0.3) 70%, rgba(0,0,0,0) 100%)"},button:{margin:e.spacing.unit},extendedIcon:{marginRight:e.spacing.unit}}})(Y),$=t(115),q=t.n($),Q=t(117),X=t.n(Q),ee=t(118),ae=t.n(ee),te=t(119),re=t.n(te),ne=t(120),se=t.n(ne),ie=t(61),le=t.n(ie),ce=t(44),oe=t.n(ce),me=t(116),ue=t.n(me),de={success:q.a,warning:ue.a,error:X.a,info:ae.a};var ge=Object(v.withStyles)(function(e){return{typography:{useNextVariants:!0},success:{backgroundColor:re.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:se.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var a=e.classes,t=e.className,r=e.message,s=e.variant,i=de[s];return n.a.createElement(oe.a,{className:K()(a[s],t),"aria-describedby":"client-snackbar",message:n.a.createElement("span",{id:"client-snackbar",className:a.message},n.a.createElement(i,{className:K()(a.icon,a.iconVariant)}),r)})}),pe=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.successMsg,r=e.successMsgState,s=e.successMsgTimer,i=e.successMsgType;return n.a.createElement("div",null,n.a.createElement(le.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:r,autoHideDuration:s},n.a.createElement(ge,{variant:i,message:t,className:a.margin})))}}]),a}(n.a.Component),fe=Object(v.withStyles)(function(e){return{typography:{useNextVariants:!0},margin:{margin:e.spacing.unit}}})(pe),he=t(31),be=t.n(he),ye=t(34),Ee=t.n(ye),ve=t(62),_e=t(77),xe=t.n(_e),we=t(79),je=t.n(we),Ce=t(78),ke=t.n(Ce),Se=t(121),Oe=t.n(Se),Ne=t(122),Ae=t.n(Ne),Fe=t(39),Ie=t.n(Fe),Me=t(10),Be=t.n(Me),Ge=t(11),ze=t.n(Ge),De=t(38),We=t.n(De),Re=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.imageAnalyzeResult,r=e.imageMainSource,s=t.map(function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:a.root1},n.a.createElement(Ee.a,{avatar:n.a.createElement(be.a,{size:"large",alt:"Male",src:r}),label:e.faceAttributes.gender+" - "+e.faceAttributes.age+" y/o",className:a.chip,color:"male"===e.faceAttributes.gender?"primary":"secondary"}),n.a.createElement(Ee.a,{avatar:n.a.createElement(be.a,null,(100*e.faceAttributes.smile).toFixed(1)>50?n.a.createElement(Oe.a,null):n.a.createElement(Ae.a,null)),label:"Smile "+(100*e.faceAttributes.smile).toFixed(1)+"%",className:a.chip}),n.a.createElement(Ee.a,{label:"Makeup",icon:!0===e.faceAttributes.makeup.eyeMakeup||!0===e.faceAttributes.makeup.lipMakeup?n.a.createElement(ke.a,null):n.a.createElement(je.a,null),className:a.chip}),n.a.createElement(Ee.a,{label:"Glasses",icon:"NoGlasses"===e.faceAttributes.glasses?n.a.createElement(je.a,null):n.a.createElement(ke.a,null),className:a.chip})),n.a.createElement("div",{className:a.root2},n.a.createElement(N.a,{className:a.card1},n.a.createElement(ve.a,{avatar:n.a.createElement(be.a,{"aria-label":"",className:"male"===e.faceAttributes.gender?a.primaryAvatar:a.secondaryAvatar},"HH"),title:"Hair",subheader:"head"}),n.a.createElement(We.a,null),n.a.createElement(F.a,null,n.a.createElement(E.a,{container:!0,spacing:16},n.a.createElement(E.a,{item:!0,xs:12,md:6},n.a.createElement("div",{className:a.demo},n.a.createElement(Ie.a,{dense:!0},n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Beard",secondary:(100*e.faceAttributes.facialHair.beard).toFixed(1)+"%"})),n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Moustache",secondary:(100*e.faceAttributes.facialHair.moustache).toFixed(1)+"%"})),n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"SideBurns",secondary:(100*e.faceAttributes.facialHair.sideburns).toFixed(1)+"%"})),n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Bald",secondary:(100*e.faceAttributes.hair.bald).toFixed(1)+"%"})))))))),n.a.createElement(N.a,{className:a.card2},n.a.createElement(ve.a,{avatar:n.a.createElement(be.a,{"aria-label":"Recipe",className:"male"===e.faceAttributes.gender?a.primaryAvatar:a.secondaryAvatar},"BE"),title:"Bad",subheader:"emotion"}),n.a.createElement(We.a,null),n.a.createElement(F.a,null,n.a.createElement(E.a,{container:!0,spacing:16},n.a.createElement(E.a,{item:!0,xs:12,md:6},n.a.createElement("div",{className:a.demo},n.a.createElement(Ie.a,{dense:!0},n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Anger",secondary:(100*e.faceAttributes.emotion.anger).toFixed(1)+"%"})),n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Contempt",secondary:(100*e.faceAttributes.emotion.contempt).toFixed(1)+"%"})),n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Disgust",secondary:(100*e.faceAttributes.emotion.disgust).toFixed(1)+"%"})),n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Fear",secondary:(100*e.faceAttributes.emotion.fear).toFixed(1)+"%"})))))))),n.a.createElement(N.a,{className:a.card3},n.a.createElement(ve.a,{avatar:n.a.createElement(be.a,{"aria-label":"Recipe",className:"male"===e.faceAttributes.gender?a.primaryAvatar:a.secondaryAvatar},"GE"),title:"Good",subheader:"emotion"}),n.a.createElement(We.a,null),n.a.createElement(F.a,null,n.a.createElement(E.a,{container:!0,spacing:16},n.a.createElement(E.a,{item:!0,xs:12,md:6},n.a.createElement("div",{className:a.demo},n.a.createElement(Ie.a,{dense:!0},n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Happiness",secondary:(100*e.faceAttributes.emotion.happiness).toFixed(1)+"%"})),n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Neutral",secondary:(100*e.faceAttributes.emotion.neutral).toFixed(1)+"%"})),n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Sadness",secondary:(100*e.faceAttributes.emotion.sadness).toFixed(1)+"%"})),n.a.createElement(Be.a,null,n.a.createElement(ze.a,{primary:"Surprise",secondary:(100*e.faceAttributes.emotion.surprise).toFixed(1)+"%"}))))))))))});return n.a.createElement("div",null,Object.keys(s).length>0?n.a.createElement("div",null,s):n.a.createElement("div",{className:a.notDetectedDiv},n.a.createElement("h3",{className:a.notDetected},"No facial features detected!"),n.a.createElement("p",{className:a.notDetected},"Click on a different image")))}}]),a}(r.Component),Te=Object(v.withStyles)(function(e){return{root1:{minWidth:275,maxWidth:"100%",height:"auto",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-evenly",alignItems:"flex-start",alignContent:"flex-start"},root2:{minWidth:275,maxWidth:"100%",height:"auto",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-evenly",alignItems:"flex-start",alignContent:"flex-start"},card1:{width:"40%",order:"1",flexGrow:"1"},card2:{width:"40%",order:"2",flexGrow:"1"},card3:{width:"40%",order:"3",flexGrow:"1"},primaryAvatar:{color:"#fff",backgroundColor:"#3f51b5"},secondaryAvatar:{color:"#fff",backgroundColor:"#f50057"},notDetected:{color:"#666666"},notDetectedDiv:{padding:"20px",margin:"15px",textAlign:"center"},avatar:{backgroundColor:xe.a[500],margin:10},card:{maxWidth:"100%",height:"auto",justifyContent:"center",display:"flex"},details:{display:"flex",flexDirection:"column"},media:{height:300,backgroundPosition:"center top"},avrow:{display:"flex",justifyContent:"center"},bigAvatar:{width:200,height:200},chip:{margin:e.spacing.unit}}})(Re),He=function(e){function a(){var e,t;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={opacity:1},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.progressBarState;return n.a.createElement("div",{className:a.root},t&&n.a.createElement("div",{className:a.inner,style:{opacity:this.state.opacity}}))}}]),a}(r.Component),Pe=Object(v.withStyles)({root:{flexGrow:1,height:"5px",backgroundColor:"#eee"},inner:{height:"5px",backgroundColor:"#e63131"},colorPrimary:{backgroundColor:"#B2DFDB"},barColorPrimary:{backgroundColor:"#00695C"}})(He),Ve=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).removeImage=function(e){t.setState({progress_bar_state:!0});var a=Object(g.a)(Object(g.a)(t)),r="https://leadtactic.com/api/face-image/"+e;f.a.delete(r,{headers:{"Access-Control-Allow-Origin":"*","content-type":"application/x-www-form-urlencoded"}}).then(function(t){if(t.data.data.length<1)a.setResetMessage("Image was not removed, please try again!",2e3,"error");else if("deleted"===t.data.data[0].msg){var r=a.state.gallery_images_json.filter(function(a){return a.id!==e}),n=r[0].full_path;a.setState({gallery_images_json:r,image_main_source:n},function(){a.setResetMessage("Image removed!",1500,"success"),setTimeout(function(){a.analyzeImage(!1,!0)},1500)})}this.setState({progress_bar_state:!1})}).catch(function(e){return a.setState({error:e})})},t.state={gallery_images_json:[],file:null,uploading:!1,image_main_source:"",image_analyze_result:[],sb_msg:"",sb_msg_type:"",sb_msg_state:!1,sb_msg_timer:5e3,progress_bar_state:!1},t.onFileChooserChange=t.onFileChooserChange.bind(Object(g.a)(Object(g.a)(t))),t.fileUpload=t.fileUpload.bind(Object(g.a)(Object(g.a)(t))),t.handleGalleryImageClick=t.handleGalleryImageClick.bind(Object(g.a)(Object(g.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshGallery()}},{key:"refreshGallery",value:function(){this.setState({progress_bar_state:!0});var e=this;f.a.get("https://leadtactic.com/api/face-gallery").then(function(a){if(a.data.data.length<1)e.setState({progress_bar_state:!1,image_main_source:""});else{var t=a.data.data[0].full_path;e.setState({image_main_source:t,gallery_images_json:a.data.data},function(){e.analyzeImage(!1,!0)})}}).catch(function(a){return e.setState({error:a})})}},{key:"setResetMessage",value:function(e){var a=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"success";this.setState({sb_msg_state:!0,sb_msg_type:r,sb_msg:e,sb_msg_timer:t}),setTimeout(function(){a.setState({sb_msg_state:!1,sb_msg_type:r,sb_msg:"",sb_msg_timer:0})},t)}},{key:"onFileChooserChange",value:function(e){var a=this,t=e.target.files[0];if(["image/png","image/jpeg","image/gif"].every(function(e){return t.type!==e}))this.setResetMessage("File must be an image (.png,.jpg,.gif)!",4e3,"error");else{t.size>1e6?this.setResetMessage("The image uploaded was too large, it must be less than 1 MB.",4e3,"error"):this.setState({file:t},function(){a.fileProcess()})}}},{key:"fileProcess",value:function(e){var a=this,t=this;if(null===this.state.file&&void 0===this.state.file)return this.setState({progress_bar_state:!1}),void this.setResetMessage('No image was selected, click "Add Your Own Images".',200,"warning");this.setState({progress_bar_state:!0}),this.fileUpload(this.state.file).then(function(e){a.setState({file:null,uploading:!1,gallery_images_json:[e.data.data].concat(Object(l.a)(a.state.gallery_images_json)),image_main_source:e.data.data.full_path},function(){t.setResetMessage("Image added!",1500,"success"),setTimeout(function(){t.analyzeImage(!1,!0)},1500)})})}},{key:"fileUpload",value:function(e){this.setState({uploading:!0});var a=new FormData;a.append("file_img_faces",e);return f.a.post("https://leadtactic.com/api/face-image-uploader",a,{headers:{"Access-Control-Allow-Origin":"*","content-type":"application/x-www-form-urlencoded"}})}},{key:"handleGalleryImageClick",value:function(e){var a=this,t=e.target.id,r=this.state.gallery_images_json.filter(function(e){if(e.id==t)return e});this.setState({image_main_source:r[0].full_path,progress_bar_state:!0},function(){a.analyzeImage(!1,!0)})}},{key:"analyzeImage",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e&&this.setState({progress_bar_state:!0});var t={url:this.state.image_main_source},r={headers:{"Content-Type":"application/json","Ocp-Apim-Subscription-Key":"71122c33d60d4284bf612e69f3c61092"},params:{returnFaceId:"true",returnFaceLandmarks:"false",returnFaceAttributes:"age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise"}},n=this;f.a.post("https://eastus2.api.cognitive.microsoft.com/face/v1.0/detect",t,r).then(function(e){"OK"===e.statusText?void 0!==e.data[0]?(n.setState({image_analyze_result:e.data}),a&&n.setState({progress_bar_state:!1})):(n.setState({image_analyze_result:[]}),a&&n.setState({progress_bar_state:!1})):(a&&n.setState({progress_bar_state:!1}),n.setResetMessage("Image was not processed!",1500,"error"))}).catch(function(e){return n.setState({error:e})})}},{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.root,style:{border:"0px solid blue"}},n.a.createElement(E.a,{container:!0,spacing:24,justify:"center",style:{border:"0px solid red"}},n.a.createElement(E.a,{container:!0,justify:"center",className:e.gridinner,style:{border:"0px solid orange"}},n.a.createElement(E.a,{item:!0,xs:12,zeroMinWidth:!0},n.a.createElement(b.a,null,n.a.createElement(S,{appTitle:"Facial Characteristics Detector"}),n.a.createElement(Pe,{progressBarState:this.state.progress_bar_state}),n.a.createElement(G,{onFileChooserChange:this.onFileChooserChange}),n.a.createElement(Z,{imageMainSource:this.state.image_main_source,galleryImagesJSON:this.state.gallery_images_json,removeImage:this.removeImage,handleGalleryImageClick:this.handleGalleryImageClick}))),n.a.createElement(E.a,{item:!0,xs:12,zeroMinWidth:!0},n.a.createElement(b.a,null,n.a.createElement(Te,{imageMainSource:this.state.image_main_source,imageAnalyzeResult:this.state.image_analyze_result}))))),n.a.createElement(fe,{successMsgState:this.state.sb_msg_state,successMsgType:this.state.sb_msg_type,successMsg:this.state.sb_msg,successMsgTimer:this.state.sb_msg_timer}))}}]),a}(r.Component),Je=Object(v.withStyles)(function(e){return{root:{padding:2*e.spacing.unit},container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:"".concat(3*e.spacing.unit,"px")},gridinner:{maxWidth:600},paper:{padding:e.spacing.unit,textAlign:"center",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:e.spacing.unit},divider:{margin:"".concat(2*e.spacing.unit,"px 0")}}})(Ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(350);i.a.render(n.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[202,2,1]]]);
//# sourceMappingURL=main.cf33164c.chunk.js.map