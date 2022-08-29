/*
jQWidgets v13.1.0 (2021-Nov)
Copyright (c) 2011-2021 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxTagCloud","",{});a.extend(a.jqx._jqxTagCloud.prototype,{defineInstance:function(){var b={width:null,height:null,source:null,disabled:false,rtl:false,valueMember:"value",displayMember:"label",urlMember:"url",urlBase:"",autoBind:true,takeTopWeightedItems:false,displayLimit:null,minValueToDisplay:0,maxValueToDisplay:0,minFontSize:10,maxFontSize:24,fontSizeUnit:"px",displayValue:false,sortBy:"none",alterTextCase:"none",sortOrder:"ascending",textColor:null,minColor:null,maxColor:null,tagRenderer:null};if(this===a.jqx._jqxTagCloud.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){var b=this;b.render();b.dataBind(b.source,true)},dataBind:function(b,c){var h=this;h.records=[];var e=b._source?true:false;var i;if(e){i=b;b=b._source}else{b.datafields=[{name:h.displayMember},{name:h.valueMember},{name:h.urlMember}];i=new a.jqx.dataAdapter(b,{autoBind:true})}var j=function(){if(b.type!==undefined){i._options.type=b.type}if(b.formatdata!==undefined){i._options.formatData=b.formatdata}if(b.contenttype!==undefined){i._options.contentType=b.contenttype}if(b.async!==undefined){i._options.async=b.async}};var f=function(k){k._setSourceData(i);k._raiseEvent(1,{records:k.records});k._renderTags()};j(this);switch(b.datatype){case"local":case"array":default:if(b.localdata!=null||a.isArray(b)){i.unbindBindingUpdate(h.element.id);if(h.autoBind||(!h.autoBind&&!c)){i.dataBind()}f(h);i.bindBindingUpdate(h.element.id,function(k){f(h,k)})}break;case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":case"csv":case"tab":if(b.localdata!=null){i.unbindBindingUpdate(h.element.id);if(h.autoBind||(!h.autoBind&&!c)){i.dataBind()}f(h);i.bindBindingUpdate(h.element.id,function(){f(h)});return}var d={};if(i._options.data){a.extend(i._options.data,d)}else{if(b.data){a.extend(d,b.data)}i._options.data=d}var g=function(){f(h)};i.unbindDownloadComplete(h.element.id);i.bindDownloadComplete(h.element.id,g);if(h.autoBind||(!h.autoBind&&!c)){i.dataBind()}}h._raiseEvent(2,{records:h.records})},destroy:function(){var b=this;b.removeHandler(b._el,"keydown");b.removeHandler(b._el,"click");b.host.empty();b.host.remove()},findTagIndex:function(c){var d=this;for(var b=0;b<d.records.length;b++){if(d.records[b][d.displayMember]===c){return d.records[b].index}}return -1},getHiddenTagsList:function(){return this.hiddenList.slice()},getRenderedTags:function(){return this.renderedData.slice()},getTagsList:function(){return this.records.slice()},insertAt:function(b,e){var d=this;e.index=b;if(e[this.displayMember]===undefined){throw new Error("jqxTagCloud: Insert tag requires a valid displayMember field to be supplied in the parameter")}var f=e[d.valueMember]!==undefined?parseFloat(e[d.valueMember]):0;e[d.valueMember]=isNaN(f)?0:f;if(d.source.insertTag&&typeof(d.source.insertTag)==="function"){d.source.insertTag(b,e,function(h){if(h){d.records.splice(b,0,e);for(var g=b+1;g<d.records.length;g++){d.records[g].index+=1}for(g=0;g<d.hiddenList.length;g++){if(d.hiddenList[g]>=b){d.hiddenList[g]++}}d._renderTags()}})}else{d.records.splice(b,0,e);for(var c=b+1;c<d.records.length;c++){d.records[c].index+=1}for(c=0;c<d.hiddenList.length;c++){if(d.hiddenList[c]>=b){d.hiddenList[c]++}}d._renderTags()}},updateAt:function(b,d){var c=this;if(d[this.displayMember]===undefined){throw new Error("jqxTagCloud: Update tag requires a valid displayMember field to be supplied in the parameter")}d.index=b;d.uid=c.records[b].uid;if(c.source.updateTag&&typeof(c.source.updateTag)==="function"){c.source.updateTag(b,d,function(e){if(e){a.each(d,function(f,g){c.records[b][f]=g});c._renderTags()}})}else{a.each(d,function(e,f){c.records[b][e]=f});c._renderTags()}},removeAt:function(b){var d=this;if(d.source.deleteTag&&typeof(d.source.deleteTag)==="function"){d.source.deleteTag(b,function(f){if(f){d.records.splice(b,1);for(var e=b;e<d.records.length;e++){d.records[e].index-=1}for(e=0;e<d.hiddenList.length;e++){if(d.hiddenList[e]>b){d.hiddenList[e]--}else{if(d.hiddenList[e]===b){d.hiddentList.splice(b,1)}}}}})}else{d.records.splice(b,1);for(var c=b;c<d.records.length;c++){d.records[c].index-=1}for(c=0;c<d.hiddenList.length;c++){if(d.hiddenList[c]>b){d.hiddenList[c]--}else{if(d.hiddenList[c]===b){d.hiddentList.splice(b,1)}}}}d._renderTags()},hideItem:function(b){var d=this;if(!(typeof(b)!=="number"||d.hiddenList.indexOf(b)!==-1)){d.hiddenList.push(b);var e=-1;for(var c=0;c<d.renderedData.length;c++){if(d.renderedData[c].index===b){e=c}}if(e!==-1){a(d._el).find("li")[e].style.display="none"}}},showItem:function(b){var d=this;if(d.hiddenList.indexOf(b)!==-1){var e=-1;for(var c=0;c<d.renderedData.length;c++){if(d.renderedData[c].index===b){e=c}}if(e!==-1){a(d._el).find("li")[e].style.display=""}d.hiddenList.splice(d.hiddenList.indexOf(b),1)}},render:function(){var b=this;b._updateSize();b.renderedData=[];b._el=a("<ul>");b.host.addClass(b.toThemeProperty("jqx-widget jqx-tag-cloud"));b._setRtl();b.host.append(b._el);b.focusedItem=null;b.minColor=b._parseColor(b.minColor);b.maxColor=b._parseColor(b.maxColor);b.displayLimit=parseInt(b.displayLimit);if(b.disabled){b.host.addClass(b.toThemeProperty("jqx-fill-state-disabled"))}b.addHandler(b._el,"click",function(d){if(a(document.activeElement).parents("#"+b._el[0].parentElement.id).length){}else{if(b.focusedItem!=null){a(b.focusedItem).focus()}else{a(b._el).find("a")[0].focus();b.focusedItem=document.activeElement}}if(b.disabled){d.preventDefault()}if(d.target.tagName.toLowerCase()==="a"){d.target.focus();b.focusedItem=document.activeElement}if(d.target.tagName.toLowerCase()==="li"){a(d.target).find("a").focus();b.focusedItem=document.activeElement}var c=a(d.target).closest("li").index();if(c!==-1){b._raiseEvent(0,{label:b.renderedData[c][b.displayMember],url:b.renderedData[c][b.urlMember],value:b.renderedData[c][b.valueMember],visibleIndex:c,index:b.renderedData[c].index,target:a(d.target).closest("li")[0],originalEvent:d})}});b._addKeyboardSupport()},resize:function(c,b){var d=this;d.width=c;d.height=b;d._updateSize()},propertyChangedHandler:function(b,c,f,e){var d=this;if(c==="source"){d.dataBind(b.source)}if(c==="displayLimit"){d[c]=parseInt(e)}if(c==="minColor"||c==="maxColor"){d[c]=d._parseColor(e)}if(c==="rtl"){d._setRtl();return}if(c==="width"||c==="height"){d._updateSize();return}if(c==="textColor"){if(!(d.minColor&&d.maxColor)){d._updateColor();return}}d._renderTags()},_alterCase:function(d){var c=this;function e(f){return f.replace(/\w\S*/g,function(g){return g.charAt(0).toUpperCase()+g.substr(1).toLowerCase()})}if(c.alterTextCase!=="none"){switch(c.alterTextCase){case"allLower":for(var b=0;b<d.length;b++){d[b][c.displayMember]=d[b][c.displayMember].toString().toLowerCase()}break;case"allUpper":for(b=0;b<d.length;b++){d[b][c.displayMember]=d[b][c.displayMember].toString().toUpperCase()}break;case"firstUpper":for(b=0;b<d.length;b++){d[b][c.displayMember]=d[b][c.displayMember].toString().toLowerCase();d[b][c.displayMember]=d[b][c.displayMember].substr(0,1).toUpperCase()+d[b][c.displayMember].substr(1)}break;case"titleCase":for(b=0;b<d.length;b++){d[b][c.displayMember]=e(d[b][c.displayMember].toString())}break;default:throw new Error("jqxTagCloud: Invalid alterTextCase value. Possible values: 'none', 'allLower', 'allUpper', 'firstUpper', 'titleCase'")}}return d},_addKeyboardSupport:function(){var b=this;b.addHandler(b._el,"keydown",function(c){if(c.keyCode==39){a("a:focus").closest("li").next().find("a").focus();b.focusedItem=document.activeElement}if(c.keyCode==37){a("a:focus").closest("li").prev().find("a").focus();b.focusedItem=document.activeElement}})},_renderTags:function(){var c=this;var f=c.records.slice();a.each(c.records,function(i,j){if(j[c.displayMember]===undefined){throw new Error("jqxTagCloud: 'label' property must be specified for every element.")}});f=c._filter(f);f=c._sort(f);f=c._alterCase(f);c._el.empty();if(f.length===0){return}var h=c._getMaxValue(f);var e=c._getMinValue(f);var g=h-e;for(var b=0;b<f.length;b++){var d=c._prepareTag(f[b],e,g);c._el.append(d);if(c.hiddenList.indexOf(f[b].index)!=-1){d[0].style.display="none"}}c.renderedData=f;c.focusedItem=null},_prepareTag:function(k,q,o){var m=this;if(!o){o=1}var f=a("<li>");var l="";if(null!==m.tagRenderer&&typeof(m.tagRenderer)==="function"){l=m.tagRenderer.apply(m,arguments)}else{l=k[m.displayMember]+(m.displayValue?"("+k[m.valueMember]+")":"")}l=a('<a rel="tag">').append(l);var g="javascript:void(0)";if(undefined!==k[m.urlMember]){g=(m.urlBase!=null?m.urlBase:"")+k[m.urlMember]}l.attr("href",g);f.append(l);f.addClass(m.toThemeProperty("jqx-tag-cloud-item"));var s=+m.minFontSize+((m.maxFontSize-m.minFontSize)*((k[m.valueMember]-q)/o));f[0].style.fontSize=s+m.fontSizeUnit;if(m.minColor&&m.maxColor){var p=m.minColor.split("(")[1].split(")")[0];p=p.split(",");var h=parseInt(p[0]);var j=parseInt(p[1]);var r=parseInt(p[2]);var i=parseFloat(p[3]);p=m.maxColor.split("(")[1].split(")")[0];p=p.split(",");var b=parseInt(p[0]);var e=parseInt(p[1]);var n=parseInt(p[2]);var d=parseFloat(p[3]);h+=Math.floor(((k[m.valueMember]-q)/o)*(b-h));j+=Math.floor(((k[m.valueMember]-q)/o)*(e-j));r+=Math.floor(((k[m.valueMember]-q)/o)*(n-r));i+=((k[m.valueMember]-q)/o)*(d-i);f[0].style.color="rgba("+h+","+j+","+r+","+i+")";f.find("a")[0].style.color="inherit"}else{if(m.textColor!==null){f[0].style.color=m.textColor;f.find("a")[0].style.color="inherit"}}return f},_parseColor:function(e){function k(b){var c={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};if(typeof c[b.toLowerCase()]!="undefined"){return c[b.toLowerCase()]}return false}var f=a("<span>").css("color",e);e=f.css("color");var i,h,d;if(e.substr(0,4)==="rgba"){return e}else{if(e.substr(0,3)==="rgb"){var j=e.split("(")[1].split(")")[0];j=j.split(",");i=parseInt(j[0]);h=parseInt(j[1]);d=parseInt(j[2]);return("rgba("+i+","+h+","+d+",1)")}else{if(e.substr(0,1)==="#"&&e.length===7){i=parseInt(e.substr(1,2),16);h=parseInt(e.substr(3,2),16);d=parseInt(e.substr(5,2),16);return("rgba("+i+","+h+","+d+",1)")}else{if(e.substr(0,1)==="#"&&e.length===4){i=parseInt(e.substr(1,1)+e.substr(1,1),16);h=parseInt(e.substr(2,1)+e.substr(2,1),16);d=parseInt(e.substr(3,1)+e.substr(3,1),16);return("rgba("+i+","+h+","+d+",1)")}else{if(e=k(e)){i=parseInt(e.substr(1,2),16);h=parseInt(e.substr(3,2),16);d=parseInt(e.substr(5,2),16);return("rgba("+i+","+h+","+d+",1)")}}}}}return e},_events:["itemClick","bindingUpdateComplete","bindingComplete"],_raiseEvent:function(d,b){var c=this._events[d],e=a.Event(c);e.args=b;return this.host.trigger(e)},_filter:function(d){var c=this;if(c.minValueToDisplay!=0){for(var b=0;b<d.length;){if(d[b][c.valueMember]<c.minValueToDisplay){d.splice(b,1)}else{b++}}}if(c.maxValueToDisplay!=0){for(var b=0;b<d.length;){if(d[b][c.valueMember]>c.maxValueToDisplay){d.splice(b,1)}else{b++}}}if(c.displayLimit!=null&&!isNaN(c.displayLimit)){if(c.takeTopWeightedItems===true){d.sort(function(f,e){if(f[c.valueMember]<e[c.valueMember]){return 1}if(f[c.valueMember]>e[c.valueMember]){return -1}return 0});d=d.slice(0,c.displayLimit);d.sort(function(f,e){if(f.index<e.index){return -1}if(f.index>e.index){return 1}return 0})}else{d=d.slice(0,c.displayLimit)}}return d},_sort:function(c){var b=this;if(b.sortBy!=="none"){if(b.sortBy==="label"){c.sort(function(e,d){if(e[b.displayMember]<d[b.displayMember]){return -1}if(e[b.displayMember]>d[b.displayMember]){return 1}return 0})}else{if(b.sortBy==="value"){c.sort(function(e,d){if(e[b.valueMember]<d[b.valueMember]){return -1}if(e[b.valueMember]>d[b.valueMember]){return 1}return 0})}else{throw new Error("jqxTagCloud: sortBy option needs to be either 'none' or 'label' or 'value'")}}if(b.sortOrder==="ascending"){return c}else{if(b.sortOrder==="descending"){return c.reverse()}else{throw new Error("jqxTagCloud: sortOrder option needs to be either 'ascending' or 'descending'")}}}return c},_getMaxValue:function(e){var d=this;var b=e[0][d.valueMember];for(var c=0;c<e.length;c++){if(b<e[c][d.valueMember]){b=e[c][d.valueMember]}}return b},_getMinValue:function(e){var d=this;var c=e[0][d.valueMember];for(var b=0;b<e.length;b++){if(c>e[b][d.valueMember]){c=e[b][d.valueMember]}}return c},_setSourceData:function(d){var c=this;c.records=d.records;for(var b=0;b<c.records.length;b++){var e=c.records[b][c.valueMember]!==undefined?parseFloat(c.records[b][c.valueMember]):0;c.records[b][c.valueMember]=isNaN(e)?0:e;c.records[b].index=b}c.hiddenList=[]},_updateColor:function(){var b=this;if(b.textColor){a(b._el).find("li").css("color",b.textColor)}},_updateSize:function(){var b=this;if(b.width){b.host.width(b.width)}if(b.height){b.host.height(b.height)}},_setRtl:function(){var b=this;if(b.rtl){b.host.addClass(b.toThemeProperty("jqx-rtl"))}else{b.host.removeClass(b.toThemeProperty("jqx-rtl"))}}})})(jqxBaseFramework);

