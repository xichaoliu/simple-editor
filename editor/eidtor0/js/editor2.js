
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
	//创建图片及相邻文本编辑框
	$("#upImg").on("click",function(e){
		var day = new Date
		var num = day.getTime()
		if(_element){
				if($(_element).hasClass("selected")){
					var _Img = $("<div></div>").addClass("img ct IV Img"+num).attr("Img",num)
					$(_element).after(_Img)
					
				}
		}else{
			$("<div></div>").addClass("img ct IV Img"+num).attr("Img",num).appendTo("#content")
		}
		
		$("<span></span>").addClass("cancel").html("X").appendTo("div.Img"+num)
		$("<img>",{
			src:"img/0.jpg"
		}).appendTo("#content>div.Img"+num)

		
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
	//创建video及相邻文本输入框
	$("#upVideo").on("click",function(e){
		var day1 = new Date
		var num1 = day1.getTime()
		
		
		if(_element){
			
				if($(_element).hasClass("selected")){
					var _Video = $("<div></div>").addClass("video ct IV Video"+num1).attr("video","["+num1+"]").attr("VD","{"+num1+"}")
					$(_element).after(_Video)
				
			}
		}else{
			$("<div></div>").addClass("video ct IV Video"+num1).attr("video","["+num1+"]").attr("VD","{"+num1+"}").appendTo("#content")
		}
		
		
		
		$("<span></span>").addClass("cancel").html("X").appendTo("div.Video"+num1)
		$("<video>",{
			src:"img/1.mp4"
		}).appendTo("#content>div.Video"+num1)
		
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
					$(_div).appendTo(_con)
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
			var _html =  $(this).children("div.editor").text()
			console.log(_html)
			$(this).attr("data",_html)
		}
	})
	
	//点击提交按钮获取信息
	$("#submit").on("click",function(){
		var _text = "";
		var _graph = ""
		var _img = "";
		var _video = ""
		
		var aLi = $("#content").children()
		$.each(aLi,function(index,opt){
			if($(opt).hasClass("textarea")){
				if(typeof $(opt).attr("data") != "undefined"){
					if($(opt).children("div.editor").hasClass("para")){
						var _para =$(opt).attr("data")
						_graph = _graph +"<text>" +$(opt).attr("data")+"</text>"
					}
					if($(opt).children("div.editor").hasClass("title")){
						_text = _text +"<caption>" +$(opt).attr("data")+"</caption>"
					}
					
				}
			}
			
			if($(opt).hasClass("img")){
				_img = _img +"<picture>"+$(opt).attr("img")+"</picture>"
				
			}
			if($(opt).hasClass("video")){
				_video = _video +"<video thum='"+$(opt).attr("video")+"'>"+$(opt).attr("VD")+"</video>"
			}
		})
		var _total = _graph+_text+_img+_video
		console.log("段落："+_graph)
		console.log("标题:"+_text)
		console.log("图片信息："+_img)
		console.log("视频信息:"+_video)
		console.log("汇总："+_total)
		
	})
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
		
//		if(/["'%;)(+]/g.test(_html)){
//       	var nhtml =  _html.replace(/["'%;)(+]/g,"");
//      	 $(this).html(nhtml)
//  	}
	})

