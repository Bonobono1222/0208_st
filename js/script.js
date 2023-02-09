// setInterval(function() {
//   // setInterval 주기적으로 어떤 값을 업데이트 하거나, API로부터 변경된 데이터를 사용해야 할 때
//   let now = new Date(); //now변수에 현재 시간을 담아줌
//   let hr = now.getHours(); //시간
//   let min = now.getMinutes(); //분
//   let sec = now.getSeconds(); //초

//   if(hr >= 10) {
//     // hr이 10보다 크거나 같을 때
//     hnum = hr;
//   } else {
//     hnum = '0' + hr;
//   }

//   if(min >= 10) {
//     // min이 10보다 크거나 같을 때
//     mnum = min;
//   } else {
//     hnum = '0' + min;
//   }

//   if(sec >= 10) {
//     //sec이 10보다 크거나 같을 때
//     snum = sec;
//   } else {
//     snum = '0' + sec;
//   }

//   $("#phone p span").eq(0).text(hnum);
//   $("#phone p span").eq(1).text(mnum);
//   $("#phone p span").eq(2).text(snum);

//   });

//   let now = new Date(); //now변수에 현재 시간을 담아줌
//   let hr = now.getHours(); //시간

//   if(hr >= 6 && hr < 12) {
//     //시간이 6보다 크거나 같고 12보다 작을 때
//     $("#wrapper").addClass("morning");
//     $("nav li").eq(0).addClass("on");
//   } else if(hr >= 12 && hr < 16) {
//     //시간이 12보다 크거나 같고 16보다 작을 때
//     $("#wrapper").addClass("afternoon");
//     $("nav li").eq(1).addClass("on");
//   } else if(hr >=16 && hr < 20) {
//     //시간이 16보다 크거나 같고 20보다 작을 때
//     $("#wrapper").addClass("evening");
//     $("nav li").eq(2).addClass("on");
//   } else {
//     $("#wrapper").addClass("night");
//     $("nav li").eq(3).addClass("on");
//   }

//   $("nav li").click(function(e) {
//     e.preventDefault();
//     let back = $(this).children("a").text();
//     $("nav li").removeClass();
//     $(this).addClass("on");
//     $("#wrapper").removeClass();
//     $("#wrapper").addClass(back);
//   });


//위는 제이쿼리 밑은 바닐라

setInterval(function() {
  let now = new Date();
  //now변수에 현재 시간을 담아줌
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
  document.querySelectorAll("#phone p span")[0].innerHTML = hnum;
  //얘네들 중에 첫번째를 가져오겠다. (가져올 것의 인덱스 번호를 꼭 적어줘야 함)
  document.querySelectorAll("#phone p span")[1].innerHTML = mnum;
  document.querySelectorAll("#phone p span")[2].innerHTML = snum;
})

  let now = new Date(); //now변수에 현재 시간을 담아줌
  let hr = now.getHours(); //시간
  //전역변수로 또 선언해주고

  if(hr >= 6 && hr < 12) {
   //시간이 6보다 크거나 같고 12보다 작을 때
    document.getElementById("wrapper").classList.add("morning");
    //#wrapper에 morning이라는 클래스를 추가하겠다.
    document.querySelectorAll("nav li")[0].classList.add("on");
    //nav li들 중 첫번째 인덱스에 on이라는 클래스를 추가하겠다.
  } else if(hr >= 12 && hr < 16) {
    //시간이 12보다 크거나 같고 16보다 작을 때
    document.getElementById("wrapper").classList.add("afternoon");
    document.querySelectorAll("nav li")[1].classList.add("on");
  } else if(hr >=16 && hr < 20) {
      //시간이 16보다 크거나 같고 20보다 작을 때
    document.getElementById("wrapper").classList.add("evening");
    document.querySelectorAll("nav li")[2].classList.add("on");
  } else {
    document.getElementById("wrapper").classList.add("night");
    document.querySelectorAll("nav li")[3].classList.add("on");
  }

    let btnList = document.querySelectorAll("nav li");
    //변수 btnList에 nav li들을 담아주고
    let back = document.getElementById("wrapper");
    //변수 back에 #wrapper를 담아준다.

    btnList.forEach(function(btn) {
      //반복할 변수를 적어주고 forEach
      //반복할 값 btn(매개 변수)
      let text = btn.querySelector("a").innerHTML;
      //변수 text에 값(nav li a의 텍스트)을 담아주고
      
      btn.addEventListener('click', function(a){
        //btn이라는 매개변수에 클릭 이벤트가 추가 되었을 때 실행
        a.preventDefault();
        //넘어가려는거 막아주고
        btnList.forEach(function(e) {
          // 값이 담긴 매개변수 e
          e.classList.remove('on');
          //e에 담긴 값에 on이라는 클래스를 제거해주라
        })
        btn.classList.add('on');
        //btn에 담긴 값에 on이라는 클래스를 추가해줘라
        back.className = text;
        //back에 담긴 값의 클래스 이름은 text에 담긴 값
      })
    })

    let name = ['김지혜1','김지혜2','김지혜3','김지혜4','김지혜5'];

    // for(let i=0; i <=4; i++) {
    //   let text1 = name[i];
    //   console.log(text1);
    // }

    for(let i = 0; i < name.length; i++) {
      console.log(name[i]);
    }
    //for문

    name.forEach(function(jihye) {
      //배열의 요소를 나타내는 매개변수가 반드시 하나 이상 있어야 한다.
      console.log(jihye);
    })
    //forEach문
    //IE버전 8 이하를 제외한 모든 브라우저에서 사용 가능하다.
    




