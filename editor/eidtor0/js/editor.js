$("#content").on("click","div.textarea",function(){
	$(this).focus()
})
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
					var _div = $("<div></div>").addClass("editor para").attr("contenteditable",true).html("请输入图片描述")
					$(_element).after(_Img)
					
				}
		}else{
			$("<div></div>").addClass("img ct IV Img"+num).attr("Img",num).appendTo("#content")
			var _div = $("<div></div>").addClass("editor para").attr("contenteditable",true).html("请输入图片描述")
		}
		
		$("<span></span>").addClass("cancel").html("X").appendTo("div.Img"+num)
		$("<img>",{
			src:"img/0.jpg"
		}).appendTo("#content>div.Img"+num)
		//将新建的编辑框插入到图片框内
		$(_div).appendTo("div.Img"+num)
		
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
					var _Video = $("<div></div>").addClass("video ct IV Video"+num1).attr("video",num1)
					var _div = $("<div></div>").addClass("editor para").attr("contenteditable",true).html("请输入视频描述")
					$(_element).after(_Video)
					console.log(_element)
				
			}
		}else{
			$("<div></div>").addClass("video ct IV Video"+num1).attr("video",num1).appendTo("#content")
			var _div = $("<div></div>").addClass("editor para").attr("contenteditable",true).html("请输入视频描述")
		}
		
		
		
		$("<span></span>").addClass("cancel").html("X").appendTo("div.Video"+num1)
		$("<video>",{
			src:"img/1.mp4"
		}).appendTo("#content>div.Video"+num1)
		
		$(_div).appendTo("div.Video"+num1)
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
					var _div = $("<div></div>").addClass("editor").html("插入段落").attr("contenteditable",true)
					$(_div).appendTo(_con)
				}
			
		}else{
			var _con = $("<div></div>").addClass("textarea ct").appendTo("#content")
			var _div = $("<div></div>").addClass("editor").html("插入段落").attr("contenteditable",true)
			
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
			var _html =  $(this).children("div.editor").html()
	
			$(this).attr("data",_html)
		}
		if($(this).hasClass("IV")){
			var _html =  $(this).children("div.editor").contents().filter(function (index, content) {
					    return content.nodeType === 3;
					}).text()
	
			$(this).children("div.editor").attr("data",_html)
		}
		
	})
	
	//点击提交按钮获取信息
	$("#submit").on("click",function(){
		var _text = "";
		var _img = "";
		var _video = ""
		
		var aLi = $("#content").children()
		$.each(aLi,function(index,opt){
			if($(opt).hasClass("textarea")){
				if(typeof $(opt).attr("data") != "undefined"){
					_text = _text +"TT" +$(opt).attr("data")
				}
			}
			
			if($(opt).hasClass("img")){
				_img = _img +"im"+$(opt).attr("img")
				
				_text = _text +"imgTT" +$(opt).children("div.editor").attr("data")
			}
			if($(opt).hasClass("video")){
				_video = _video +"vid"+$(opt).attr("video")
				_text = _text +"vidTT" +$(opt).children("div.editor").attr("data")
			}
		})
		console.log("文本信息："+_text+"图片信息："+_img+"视频信息"+_video)
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
		var _html = $(this).html()
		
		if(/["'<>%;)(&+]/g.test(_html)){
         	var nhtml =  _html.replace(/["'<>%;)(&+]/g,"");
         $(this).html(nhtml)
    }
	})
