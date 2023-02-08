setInterval(function() {
  // setInterval 주기적으로 어떤 값을 업데이트 하거나, API로부터 변경된 데이터를 사용해야 할 때
  let now = new Date(); //now변수에 현재 시간을 담아줌
  let hr = now.getHours(); //시간
  let min = now.getMinutes(); //분
  let sec = now.getSeconds(); //초

  if(hr >= 10) {
    // hr이 10보다 크거나 같을 때
    hnum = hr;
  } else {
    hnum = '0' + hr;
  }

  if(min >= 10) {
    // min이 10보다 크거나 같을 때
    mnum = min;
  } else {
    hnum = '0' + min;
  }

  if(sec >= 10) {
    //sec이 10보다 크거나 같을 때
    snum = sec;
  } else {
    snum = '0' + sec;
  }

  $("#phone p span").eq(0).text(hnum);
  $("#phone p span").eq(1).text(mnum);
  $("#phone p span").eq(2).text(snum);

  });

  let now = new Date(); //now변수에 현재 시간을 담아줌
  let hr = now.getHours(); //시간

  if(hr >= 6 && hr < 12) {
    //시간이 6보다 크거나 같고 12보다 작을 때
    $("#wrapper").addClass("morning");
    $("nav li").eq(0).addClass("on");
  } else if(hr >= 12 && hr < 16) {
    //시간이 12보다 크거나 같고 16보다 작을 때
    $("#wrapper").addClass("afternoon");
    $("nav li").eq(1).addClass("on");
  } else if(hr >=16 && hr < 20) {
    //시간이 16보다 크거나 같고 20보다 작을 때
    $("#wrapper").addClass("evening");
    $("nav li").eq(2).addClass("on");
  } else {
    $("#wrapper").addClass("night");
    $("nav li").eq(3).addClass("on");
  }

  $("nav li").click(function(e) {
    e.preventDefault();
    let back = $(this).children("a").text();
    $("nav li").removeClass();
    $(this).addClass("on");
    $("#wrapper").removeClass();
    $("#wrapper").addClass(back);
  });


