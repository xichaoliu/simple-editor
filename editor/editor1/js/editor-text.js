
var _element = null;

	$("#content").on("click","div.ct",function(e){
		var aLi = $("#content").children()
		
		
		
		$.each(aLi,function(index,opt){
			$(opt).removeClass("selected")
			
		})
		//获取点击对象
		_element = this;
		$(this).addClass("selected")
		//编辑器获取焦点--解决ie兼容问题
		var _child = $(this).children("div")
		if($(_child).hasClass("editor")){
			$(_child).focus()
		}
		//阻止事件冒泡
		if ( e && e.stopPropagation ){
      		  e.stopPropagation();
	    }else{
	        e.cancelBubble = true;
	    } 
	})
//上传图片
	$("#insertImg").on("click",function(e){
		$("#transImg").show();
		$("#transVideo").hide();
		console.log(1)
		 if ( e && e.stopPropagation ){
      		  e.stopPropagation();
	    }else{
	        e.cancelBubble = true;
	    }
	})
	//创建图片
	$("#upImg").on("click",function(e){
		var day = new Date
		var num = day.getTime()
		if(_element){
				if($(_element).hasClass("selected")){
					var _Img = $("<div></div>").addClass("img ct IV Img"+num).attr("Img","img/0.jpg")
					$(_element).after(_Img)
					
				}
		}else{
			$("<div></div>").addClass("img ct IV Img"+num).attr("Img","img/0.jpg").appendTo("#content")
		}
		
		$("<span></span>").addClass("cancel").html("X").appendTo("div.Img"+num)
		$("<img>",{
			src:"img/0.jpg"
		}).appendTo("#content>div.Img"+num);

		
		$("#transImg").hide();

		if ( e && e.stopPropagation ){
      		  e.stopPropagation();
	    }else{
	        e.cancelBubble = true;
	    }
	})

	//上传视频
	$("#insertVideo").on("click",function(e){
			$("#transImg").hide();
			$("#transVideo").show();
			//阻止时间冒泡
			if ( e && e.stopPropagation ){
	      		  e.stopPropagation();
		    }else{
		        e.cancelBubble = true;
		    }
		})
	//创建video
	$("#upVideo").on("click",function(e){
//		var vo_path = $("#video_path").val();
		var vo_path = "http://119.60.8.230:10088/EasyTrans/Data/cc153d43-17d5-4de7-8ec3-318ed65724f6/video.m3u8";

		var vo_pic = $("#video_pic").val();
		if(vo_path == null || vo_path.length == 0){
			layer.msg("请先选择视频", {
                icon: 2
            });        
			return;
		}
		var day1 = new Date();
		var num1 = day1.getTime();
		if(_element){
			
				if($(_element).hasClass("selected")){
					var _Video = $("<div></div>").addClass("video ct IV Video"+num1).attr("video", vo_pic).attr("VD", vo_path);
					$(_element).after(_Video)
				
			}
		}else{
			$("<div></div>").addClass("video ct IV Video"+num1).attr("video", vo_pic).attr("VD", vo_path).appendTo("#content")
		}
		
		
		
		$("<span></span>").addClass("cancel").html("X").appendTo("div.Video"+num1);
		//$("<video>",{src:vo_path}).appendTo("#content>div.Video"+num1)
		var uni_id = "vo" + num1;
		$("<div></div>").attr("id", uni_id).appendTo("#content>div.Video"+num1);
		playVideo(uni_id, vo_path);
		$("#transVideo").hide();
		if ( e && e.stopPropagation ){
      		  e.stopPropagation();
	    }else{
	        e.cancelBubble = true;
	    }
	})
//	//插入段落
	$("#insertText").on("click",function(e){
		
		if(_element){

				if($(_element).hasClass("selected")){
					
					var _con = $("<div></div>").addClass("textarea ct").insertAfter($(_element))
					var _div = $("<div></div>").addClass("editor para").html("插入段落").attr("contenteditable",true)
					$(_div).appendTo(_con);
				}
			
		}else{
			var _con = $("<div></div>").addClass("textarea ct").appendTo("#content")
			var _div = $("<div></div>").addClass("editor para").html("插入段落").attr("contenteditable",true)
			
			$(_div).appendTo(_con)	
		}
		
		$("<span></span>").addClass("cancel").html("X").appendTo(_con)
		if ( e && e.stopPropagation ){
	      		  e.stopPropagation();
		    }else{
		        e.cancelBubble = true;
		    }
		
	})
//插入标题
	$("#insertTitle").on("click",function(e){
		
		if(_element){
			
				if($(_element).hasClass("selected")){
					var _con = $("<div></div>").addClass("textarea ct").insertAfter($(_element))
					var _div = $("<div></div>").addClass("editor title").html("插入标题").attr("contenteditable",true)
					$(_div).appendTo(_con)
				}
			
		}else{
			var _con = $("<div></div>").addClass("textarea ct").appendTo("#content")
			var _div = $("<div></div>").addClass("editor title").html("插入标题").attr("contenteditable",true)
			
			$(_div).appendTo(_con)	
		}
		
		$("<span></span>").addClass("cancel").html("X").appendTo(_con)
		
		if ( e && e.stopPropagation ){
	      		  e.stopPropagation();
		    }else{
		        e.cancelBubble = true;
		    }
	})
	
	//删除按钮显示
	$("#content").on("mouseenter","div",function(){//删除图片和视频
		$(this).children("span").show();
		var _span = $(this).children("span")
		//点击删除按钮移除元素
		$(_span).on("click",function(){
			$(this).parent().remove()
		})
	})
	$("#content").on("mouseenter","div.textarea",function(){//删除文本
		$(this).children("span").show();
		var _span = $(this).children("span")
		$(_span).on("click",function(){
			$(this).parents("div.textarea").remove()
		})
	})
	//删除按钮隐藏
	$("#content").on("mouseleave","div",function(){
		$(this).children("span").hide()
	})
	$("#content").on("mouseleave","div.textarea",function(){
		$(this).children("span").hide()
	})
	
	
	//大文本框失焦获取文本
	$("#content").delegate("div","blur",function(){
		if($(this).hasClass("textarea")){
			var aList =  $(this).children("div.editor").contents()
			var _html = ""
			$.each(aList,function(index,opt){
				if(opt.nodeType == 3){
					_html  = _html+$(opt).text()+"%"
				}else{
					_html = _html+$(opt).html()+"%"
				}
			})
//			console.log(_html)
			$(this).attr("data",_html)
		}
	})
	
	//点击提交按钮获取信息
	$("#submit").on("click",function(){
		var total= "";
		
		var aLi = $("#content").children()
		$.each(aLi,function(index,opt){
			if($(opt).hasClass("textarea")){
				if(typeof $(opt).attr("data") != "undefined"){
					//文本
					if($(opt).children("div.editor").hasClass("para")){
						var _para =$(opt).attr("data")
						total = total +"<text>a%" +$(opt).attr("data")+"</text>"
					}
					//段落
					if($(opt).children("div.editor").hasClass("title")){
						total = total +"<caption>b%" +$(opt).attr("data")+"</caption>"
					}
					
				}
			}
			//图片
			if($(opt).hasClass("img")){
				total = total +"<picture>c"+$(opt).attr("img")+"</picture>"
				
			}
			//视频
			if($(opt).hasClass("video")){
				total = total +"<video thum='"+$(opt).attr("video")+"'>d"+$(opt).attr("VD")+"</video>"
			}
		})
		
		console.log("汇总："+total)
		$.cookie("editor",total)
		$("#content").html("")
	})
	//获取原数据重新渲染
	$("#getBtn").on("click",function(){
		
		var _to = $.cookie("editor");
		reRender(_to)
//		console.log(_to);

	})
	
function reRender(str){
//	var str = "<text>a&插入文本&<br>&发&<br>&<br>&&nbsp;&nbsp;&大&</text><video thum='[1506052140141]'>d{1506052140141}</video><caption>b&插入标题对对对&<br>&&nbsp; 嗯，对的&</caption><picture>c1506052142532</picture><text>a&插入文本&<br>&发&<br>&</text>";
	var patt2 = /(<text>|<caption>|<picture>|<video>|<\/text>|<\/picture>|<\/caption>|<\/video>|<video[^br]*?>)/g;
	var arr = str.replace(patt2,"█").replace(/█{2}/g,"█").slice(1,-1).split("█");
	console.log(arr)
//	var arr =  ["a&插入文本&<br>&发&<br>&<br>&&nbsp;&nbsp;&大&", "dhttp://119.60.8.230:10088/EasyTrans/Data/cc153d43-17d5-4de7-8ec3-318ed65724f6/video.m3u8", "b&插入标题对对对&<br>&&nbsp; 嗯，对的&", "cimg/0.jpg", "a&插入文本&<br>&发&<br>&"]
	
	var l = arr.length;
	for(var i=0; i<l; i++){
		var index = arr[i][0];
		if(index =="a" || index =="b"){
			var col = arr[i].split("%").slice(1,-1);
			if( index == "a" ){
				renderTxt(col);
			}
			if(index == "b"){
				renderPara(col);
			}
		}
		if(index == "c" || index == "d"){
			var sr = arr[i].substr(1);
			
			if(index == "d"){
				console.log(sr)
				renderVideo(sr)
			}else{
				renderImg(sr);
			}
		}
		
	}
}

//重绘文本
function renderTxt(arr){
	
		var _con = $("<div></div>").addClass("textarea ct").appendTo("#content");
		var _div = $("<div></div>").addClass("editor para").attr("contenteditable",true);
		$(_div).appendTo(_con);	
		for(var i=0; i<arr.length; i++){
			var _smallDiv = $("<div>"+arr[i]+"</div>");
			$(_div).append(_smallDiv);
			
		}
		$("<span></span>").addClass("cancel").html("X").appendTo(_con);
}
//重绘段落
function renderPara(arr){
		
			var _con = $("<div></div>").addClass("textarea ct").appendTo("#content");
			var _div = $("<div></div>").addClass("editor title").attr("contenteditable",true);
			
			$(_div).appendTo(_con)	;
			for(var i=0; i<arr.length; i++){
			
				var _smallDiv = $("<div>"+arr[i]+"</div>")
			$(_div).append(_smallDiv);
			
			}
		
		$("<span></span>").addClass("cancel").html("X").appendTo(_con);
}
//重绘图片
function renderImg(str){
	var day = new Date
	var num = day.getTime()
		
	$("<div></div>").addClass("img ct IV Img"+num).attr("Img",num).appendTo("#content");
	$("<span></span>").addClass("cancel").html("X").appendTo("div.Img"+num);
	$("<img>",{
		src:str
	}).appendTo("#content>div.Img"+num);
}
//重绘视频
function renderVideo(str){
	var day1 = new Date;
	var num1 = day1.getTime();
	
		$("<div></div>").addClass("video ct IV Video"+num1).attr("video","["+num1+"]").attr("VD","{"+num1+"}").appendTo("#content");
	
		$("<span></span>").addClass("cancel").html("X").appendTo("div.Video"+num1);
//		$("<video>",{src:str}).appendTo("#content>div.Video"+num1)
		var uni_id = "vo" + num1;
		$("<div></div>").attr("id", uni_id).appendTo("#content>div.Video"+num1);
		playVideo(uni_id,str);
		
}
function playVideo(div,url){
	var flashvars = {
		f:'ckplayer/m3u8.swf',
		a:url,
		s:4,
		c:0
		};
	var params = {bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
	var video = [url];
	var w = Math.floor(window.screen.width * 0.35);
	var h = Math.floor(w * 3 / 5);
	CKobject.embed('ckplayer/ckplayer.swf',div,'ckplayer_a1', 
			w, h, false, flashvars, video, params);
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//点击其他区域上传框消失，清空_element
	$("html").on("click",function(){
		$("#transImg,#transVideo").hide();
		
		_element = null;
		
		var aLi = $("#content").children()
		$.each(aLi,function(index,opt){
			$(opt).removeClass("selected")
		})
		
	})
	
	
	
	
//可编辑div输入验证
	$("#content").on("blur","div.editor",function(){
		var _html = $(this).contents()
		$.each(_html,function(index,opt){
			var _text = $(opt).text()
			var nhtml
			if(/["'<>%;)(&+]/g.test(_text)){
	         	nhtml =  _text.replace(/["'<>%;)(&+]/g,"");
    		}else{
    			nhtml = _text
    		}
    		if(_text == ""){
    			nhtml = "<br/>"
    		}
			if(opt.nodeType===3){
	        	 $(opt).replaceWith(nhtml)//替换文本
			}else{
				$(opt).html(nhtml)
			}
		})
	})

