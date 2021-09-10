song1 = "";
song2 = "";
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
song1status = "";
song2status = "";
currentsong = "";
music1 = "";
music2 = "";
music3 = "";
music4 = "";
music5 = "";
music6 = "";
var s1n = "Vibing in the 20s";
var s2n = "Karlson Vibe";

function preload(){
    
    music1 = loadSound("music.mp3");
    music2 = loadSound("moosic.mp3");
    music3 = loadSound("music2.mp3");
    music4 = loadSound("music3.mp3");
    music5 = loadSound("music4.mp3");
    music6 = loadSound("music5.mp3");
    song1 = loadSound("music.mp3");
    song2 = loadSound("moosic.mp3"); 

}

function setup(){
    
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill(255,0,0);
    stroke(0);

    song1status = song1.isPlaying();
    song2status = song2.isPlaying();

    if(scoreLeftWrist > 0.2){

        ellipse(lwx, lwy, 50);

        song2.stop();

        if(song1status == false){
            
            song1.play();
            

            document.getElementById("song_name").innerHTML = "Song playing - " + s1n;

        }
    }

    if(scoreRightWrist > 0.2){

        ellipse(rwx, rwy, 50);

        song1.stop();

        if(song2status == false){
            
            song2.play();

            document.getElementById("song_name").innerHTML = "Song playing - " + s2n;

        }
    }
}

function modelLoaded(){
    console.log("model is officially loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("score left wrist = " + scoreLeftWrist + ".");

        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("score right wrist = " + scoreRightWrist + ".");

        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        console.log("left wrist x = " + lwx + ". left wrist y = " + lwy + ".");

        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
        console.log("right wrist x = " + rwx + ". Right wrist y = " + rwy + ".");
    }
}
function sets1kv(){
    song1 = music1;
    s1n = "Karlson Vibe";
    console.log("song changed");
    song1.stop();
    
}
function sets2vi20s(){
    song2 = music2;
    s2n = "Vibing in the 20s";
    console.log("song changed");
    song2.stop();

}
function sets1run(){
    song1 = music3;
    s1n = "Rise Up - Nightcore";
    console.log("song changed");
    song1.stop();
}
function sets2sn(){
    song2 = music4;
    s2n = "Superhero - Nightcore";
    console.log("song changed");
    song2.stop();

}
function sets1tasb(){
    song1 = music5;
    s1n = "The Avengers - SVMS band";
    console.log("song changed");
    song1.stop();

}
function sets2hdl(){
    song2 = music6;
    s2n = "Helloween dream - Leo(also me)";
    console.log("song changed");
    song2.stop();

}