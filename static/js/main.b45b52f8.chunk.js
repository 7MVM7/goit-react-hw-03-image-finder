(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(28),a(14)),i=a(5),l=a(6),u=a(8),h=a(7),m=a(9),g=(a(29),a(1)),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):m.b.info("\u0422\u0438 \u0449\u043e\u0441\u044c \u0442\u0430\u043a\u0435 \u0448\u0443\u043a\u0430\u0454\u0448...")},e.handleChange=function(t){e.setState({searchQuery:t.currentTarget.value})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{onChange:this.handleChange,className:"SearchForm-input",type:"text",name:"query",value:this.props.searcQuery,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component);var b=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.getLargeImageURL;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:t,alt:"",onClick:function(){return n(a)}})})};var j=function(e){var t=e.images,a=e.onSelect;return Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.webformatURL,n=e.largeImageURL,r=e.tags,o=e.id;return Object(g.jsx)(b,{webformatURL:t,largeImageURL:n,alt:r,getLargeImageURL:a},o)}))})},f=a(13),p=a.n(f);p.a.defaults.baseURL="https://pixabay.com/api";var y={getPictures:function(e){var t=e.query,a=e.page;return p.a.get("/?image_type=photo&orientation=horizontal&q=".concat(t,"&page=").concat(a,"&per_page=12&key=").concat("23035715-e0cb760b48ddc49b0eff80b6c")).then((function(e){return e.data.hits}))}},O=a(23),v=a.n(O);var S=function(){return Object(g.jsx)(v.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},w=document.querySelector("#modal-root"),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{onClick:this.handleBackdropClick,className:"Overlay",children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),w)}}]),a}(r.a.Component),I=function(e){var t=e.fetchImages;return Object(g.jsx)("button",{type:"button",onClick:t,children:"Load more"})},k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",images:[],loading:!1,error:null,showModal:!1,selectedImage:"",page:1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleSelectImage=function(t){e.setState({selectedImage:t}),e.toggleModal()},e.handleSubmit=function(t){e.setState({images:[],query:t,page:1})},e.fetchImages=function(){var t=e.state,a=t.query,n=t.page;e.setState({loading:!0}),y.getPictures({query:a,page:n}).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:!0})})).finally((function(){return e.setState({loading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.selectedImage,a=e.showModal,n=e.loading,r=e.images,o=e.error;return Object(g.jsxs)("div",{children:[o&&m.b.error("OOO, something is wrong!"),Object(g.jsx)(d,{onSubmit:this.handleSubmit}),Object(g.jsx)(j,{images:this.state.images,onSelect:this.handleSelectImage}),r.length>0&&Object(g.jsx)(I,{fetchImages:this.fetchImages}),n&&Object(g.jsx)(S,{}),a&&Object(g.jsx)(x,{onClose:this.toggleModal,largeImageURL:t}),Object(g.jsx)(m.a,{position:"bottom-right",autoClose:3e3})]})}}]),a}(n.Component);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.b45b52f8.chunk.js.map