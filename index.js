saw1 = 'https://www.youtube.com/embed/Xw5AiRVqfqk';
saw2 = 'https://www.youtube.com/embed/-57Ti2i_yhU';
icbyd = 'https://www.youtube.com/embed/NJesxnyCMbU';
rdja = 'https://www.youtube.com/embed/bIoI0yE0aIo&list=PLiN-7mukU_RHfppe7hjRD6WU06C9ib-T4';
drukqs = 'https://www.youtube.com/embed/htUalPYmIxk&list=PL5SMXYhIcZ5IeYo5XP4haf5aJmj9TWs8b';
syro = 'https://www.youtube.com/embed/yl_zy389rbk&list=PL5SMXYhIcZ5KrbqW82yRAFgzoYcblFCFt';

yt_discog_list = [saw1,saw2,icbyd,rdja,drukqs,syro];
num = 0

$(function(){
    
    // jQuery methods go here...
    $("#back").click(function(){
        num -= 1;
        if (num < 0) {
            num = 5;
        }
        $("iframe").attr("src", yt_discog_list[num]);
      });
    $("#next").click(function(){
        num += 1;
        if (num > 5) {
            num = 0;
        }
        $("iframe").attr("src", yt_discog_list[num]);
      });
  });