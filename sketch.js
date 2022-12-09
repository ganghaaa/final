var song;
var button;
var t=0;
var amp;
//배경
function setup(){
    createCanvas(640,480);
    song = loadSound('ANL.mp3', loaded);
    button = createButton('play');
    button.mousePressed(togglePlaying);
    background(51);
    amp = new p5.Amplitude();
}

//플레이하는거
function togglePlaying(){
    if (!song.isPlaying()){
        song.play();
        song.jump(80);
        button.html('pause');
    } else {
        song.stop();
        button.html('play');
    }
}
function loaded(){
    console.log('loaded');
}

//누르면 시간이 넘어감
function mousePressed(){
    t = t+10;
    song.jump(t);
}

//배경변하기
function draw(){
    console.log(amp.getLevel());
    background(255,255,255);
    noStroke();
    fill(50,100,00);
    ellipse(300, 300,amp.getLevel()*500, amp.getLevel()*700)

}

