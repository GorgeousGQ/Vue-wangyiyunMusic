"use strict";(self["webpackChunkwangyiyun_app"]=self["webpackChunkwangyiyun_app"]||[]).push([[246],{8246:function(s,e,t){t.r(e),t.d(e,{default:function(){return B}});t(7658);var i=t(3396),a=t(9242),o=t(7139);const n=s=>((0,i.dD)("data-v-1fd9cd98"),s=s(),(0,i.Cn)(),s),d={class:"searchRoot"},r={class:"searchTop"},c=n((()=>(0,i._)("use",{"xlink:href":"#icon-fanhui"},null,-1))),l=[c],u={class:"searchBox"},h=n((()=>(0,i._)("svg",{class:"icon","aria-hidden":"true"},[(0,i._)("use",{"xlink:href":"#icon-sousuo-copy"})],-1))),y={class:"foundMusic"},p=["onClick"],g=n((()=>(0,i._)("svg",{class:"icon","aria-hidden":"true"},[(0,i._)("use",{"xlink:href":"#icon-sousuo-copy"})],-1))),f={style:{color:"#fff"}},v={class:"musicPart"},k=(0,i.uE)('<span data-v-1fd9cd98><svg class="icon" aria-hidden="true" data-v-1fd9cd98><use xlink:href="#icon-geshou2" data-v-1fd9cd98></use></svg><p data-v-1fd9cd98>歌手</p></span><span data-v-1fd9cd98><svg class="icon" aria-hidden="true" data-v-1fd9cd98><use xlink:href="#icon-a-24gf-musicAlbum" data-v-1fd9cd98></use></svg><p data-v-1fd9cd98>曲风</p></span><span data-v-1fd9cd98><svg class="icon" aria-hidden="true" data-v-1fd9cd98><use xlink:href="#icon-yinfu" data-v-1fd9cd98></use></svg><p data-v-1fd9cd98>专区</p></span>',3),_={style:{border:"none"}},W={class:"icon","aria-hidden":"true",style:{padding:"0"}},w=n((()=>(0,i._)("use",{"xlink:href":"#icon-tinggeshiqu-copy"},null,-1))),L=[w],m=n((()=>(0,i._)("p",null,"识曲",-1))),x={class:"searchHistory"},K={class:"historyTop"},H=n((()=>(0,i._)("span",null,"搜索历史",-1))),D=n((()=>(0,i._)("use",{"xlink:href":"#icon-shanchu-copy"},null,-1))),C=[D],b={class:"historyContent"},I=["onClick"],S={class:"HotMusic"},z={class:"HotTop"},$=n((()=>(0,i._)("p",{style:{"padding-right":"20px"}},"热搜榜",-1))),U=n((()=>(0,i._)("use",{"xlink:href":"#icon-bofang1"},null,-1))),M=[U],P=n((()=>(0,i._)("p",null,"播放",-1))),T=n((()=>(0,i._)("hr",{style:{"background-color":"rgba(255, 255, 255, 0.195)",height:"1px",border:"none",margin:"5px 10px"}},null,-1))),Y={class:"HotList"};function J(s,e,t,n,c,w){return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",r,[((0,i.wg)(),(0,i.iD)("svg",{class:"icon","aria-hidden":"true",onClick:e[0]||(e[0]=e=>s.$router.push("/"))},l)),(0,i._)("div",u,[h,(0,i.wy)((0,i._)("input",{type:"text",onKeydown:e[1]||(e[1]=(0,a.D2)(((...s)=>w.searchKeyWord&&w.searchKeyWord(...s)),["enter"])),"onUpdate:modelValue":e[2]||(e[2]=s=>c.KeyWord=s),placeholder:"杨和苏","data-auto-clear-button":"true"},null,544),[[a.nr,c.KeyWord]])]),(0,i._)("span",{onClick:e[3]||(e[3]=(...s)=>w.searchKeyWord&&w.searchKeyWord(...s))},"搜索")]),(0,i._)("div",y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.searchList,((s,e)=>((0,i.wg)(),(0,i.iD)("span",{key:e,onClick:t=>w.updateIndex(s,e)},[g,(0,i._)("p",null,(0,o.zw)(s.artists[0].name),1),(0,i._)("p",f,(0,o.zw)(s.name),1)],8,p)))),128))]),(0,i._)("div",v,[k,(0,i._)("span",_,[((0,i.wg)(),(0,i.iD)("svg",W,L)),m])]),(0,i._)("div",x,[(0,i._)("div",K,[H,((0,i.wg)(),(0,i.iD)("svg",{class:"icon","aria-hidden":"true",onClick:e[4]||(e[4]=(...s)=>w.delHistory&&w.delHistory(...s))},C))]),(0,i._)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.keyWordList,(s=>((0,i.wg)(),(0,i.iD)("span",{key:s,onClick:e=>w.searchHistory(s)},(0,o.zw)(s),9,I)))),128))])]),(0,i._)("div",S,[(0,i._)("div",z,[$,(0,i._)("span",null,[((0,i.wg)(),(0,i.iD)("svg",{class:"icon","aria-hidden":"true",onClick:e[5]||(e[5]=e=>s.$router.push("/"))},M)),P])]),T,(0,i._)("div",Y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.HotList,((s,e)=>((0,i.wg)(),(0,i.iD)("span",{key:e},[(0,i._)("p",null,(0,o.zw)(e+1),1),(0,i.Uk)(" "+(0,o.zw)(s.searchWord),1)])))),128))])])])}var N=t(5041),O={data(){return{keyWordList:[],KeyWord:"",searchList:[],HotList:[]}},mounted(){this.keyWordList=JSON.parse(localStorage.getItem("keyWordList")||"[]"),this.searchHot()},methods:{searchKeyWord:async function(){if(""!=this.KeyWord){this.keyWordList.unshift(this.KeyWord),this.keyWordList=[...new Set(this.keyWordList)],this.keyWordList.length>10&&this.keyWordList.splice(this.keyWordList.length-1,1),localStorage.setItem("keyWordList",JSON.stringify(this.keyWordList));let s=await(0,N.xK)(this.KeyWord);console.log(s),this.searchList=s.data.result.songs,this.KeyWord=""}},searchHistory:async function(s){let e=await(0,N.xK)(s);this.searchList=e.data.result.songs,console.log(e),this.KeyWord=""},searchHot:async function(){let s=await(0,N.sM)();this.HotList=s.data.data},updateIndex(s){s.al=s.album,s.al.picUrl=s.album.artist.img1vUrl,this.$store.commit("pushPlayList",s),this.$store.commit("updatePlayListIndex",this.$store.state.playList.length-1)},delHistory(){localStorage.removeItem("keyWordList"),this.keyWordList=[]}}},q=t(89);const A=(0,q.Z)(O,[["render",J],["__scopeId","data-v-1fd9cd98"]]);var B=A}}]);
//# sourceMappingURL=246.2f0c1fc0.js.map