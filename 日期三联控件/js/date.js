$(function(){
	 
    /*
 * 生成级联菜单
 */
    let i = 2017;
    let date = new Date();
    let thisYear = date.getFullYear();//获取当前年份
    let thisMonth = date.getMonth()+1;
    let today = date.getDate();
    let currentMonth;
    let dropList = "";
    for (i; i >= 1900; i--) {
      dropList = dropList + "<li>" + i + "</li>";
    }
    $("#yearList").html(dropList);//生成年份下拉菜单


    let now = $("#now").html();
    $("#year").children("span").html(""+thisYear);

    let monthly = "";
    for (let month = 1; month < 13; month++) {
      if (month < 10) {
        monthly = monthly + "<li>0" + month + "</li>";
      } else {
        monthly = monthly + "<li>" + month + "</li>";
      }
    }
    //当前月份
    let tm;

    if (thisMonth  < 10) {
     tm = thisMonth.toString();
      tm ="0" + tm;
    } else {
      tm =  thisMonth + 1;
    }
    $("#monthList").html(monthly);//生成月份下拉菜单
    $("#month").children("span").html(""+tm);
    //当前日期
    let td;
    if (today < 10) {
      td = today.toString();
      td = "0" + td;
    }else{
      td =today
    }
    $("#day").children("span").html(""+td);
    /*
     *联动
     */
    //show_and_hide
    let timer = null;
    $("#date").on("mouseenter","li.num", function () {
      let id = $(this).data("cd");
      let aList = $("ol.list");

      $.each(aList, function (index, opt) {
        if (Number(id)== index) {
          $(opt).show()
        } else {
          $(opt).hide()
        }
      })
    });
    $("#date").on("mouseleave","li.num", function () {
      let aList = $("ol.list");

      timer = setTimeout(function () {
        $.each(aList, function (index, opt) {
          $(opt).hide()
        })
      }, 500)

    });
    $("#year,#month,#day").on("mouseenter", function () {
      clearTimeout(timer);
    });
    $("#yearList").on("click", "li", function () {
      let year = $(this).html();
      $("#year").children("span").html(""+year);
      $(this).parent().hide()
      change();
    });
    $("#monthList").on("click", "li", function () {
      let mt = $(this).html();
      $("#month").children("span").html(mt);
      $(this).parent().hide();
      change();
    });


    $("#dayList").on("click", "li", function () {
      let dy = $(this).html();
      $("#day").children("span").html(""+dy);
      $(this).parent().hide();
    });


    function change(){
      let currentDay = "";
      let Flag = Number($('#year').children("span").html());
      let currentMonth = $('#month').children("span").html();
      let total = 0;
      switch (currentMonth) {
        case "01" :
        case "03" :
        case "05" :
        case "07" :
        case "08" :
        case "10" :
        case "12" :
          total = 31;
          break;
        case "04" :
        case "06" :
        case "09" :
        case "11" :
          total = 30;
          break;
        case "02" :
          if ((Flag % 4 == 0 && Flag % 100 != 0) || Flag % 400 == 0) {
            total = 29;
          } else {
            total = 28;
          }
        default:
          break;
      }
      for (let day = 1; day <= total; day++) {
        if (day < 10) {
          currentDay = currentDay + "<li>0" + day + "</li>";
        } else {
          currentDay = currentDay + "<li>" + day + "</li>";
        }
      }
      $('#dayList').html(currentDay);//生成日期下拉菜单
    }

		
})