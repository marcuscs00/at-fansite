saw1 = 'https://www.youtube.com/watch?v=Xw5AiRVqfqk';
saw2 = 'https://www.youtube.com/watch?v=-57Ti2i_yhU';
icbyd = 'https://www.youtube.com/watch?v=NJesxnyCMbU';
rdja = 'https://www.youtube.com/watch?v=bIoI0yE0aIo&list=PLiN-7mukU_RHfppe7hjRD6WU06C9ib-T4';
drukqs = 'https://www.youtube.com/watch?v=htUalPYmIxk&list=PL5SMXYhIcZ5IeYo5XP4haf5aJmj9TWs8b';
syro = 'https://www.youtube.com/watch?v=yl_zy389rbk&list=PL5SMXYhIcZ5KrbqW82yRAFgzoYcblFCFt';

yt_discog_list = [saw1,saw2,icbyd,rdja,drukqs,syro];

$(function(){

    // jQuery methods go here...
    $("button").click(function(){
        $("iframe").prop('src') = saw2;
      });
  });