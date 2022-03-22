//https://teachablemachine.withgoogle.com/models/iRgKZ7cmA/

prediction_1="";
prediction_2="";

Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function snap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
});
}

console.log("ML5 Version: "+ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iRgKZ7cmA/model.json",modelloaded)

function modelloaded(){
console.log("modelloaded");
}

function speak(){
var synth=window.speechSynthesis;
speakdata_1="The first prediction is:"+prediction_1;
speakdata_2="The second prediction is:"+prediction_2;
var utterthis=new SpeechSynthesisUtterance(speakdata_1+speakdata_2);
synth.speak(utterthis)
}

function check(){
img=document.getElementById("capture_image");
classifier.classify(img,gotresult)
}

function gotresult(error,results){
if(error){
console.error(error);
}
else{
console.log(results)
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
prediction_1=results[0].label;
prediction_2=results[1].label;
speak();
if(results[0].label=="Happy"){
document.getElementById("update_emoji").innerHTML="&#128522;";
}
if(results[0].label=="Sad"){
    document.getElementById("update_emoji").innerHTML="&#128546;";
    }
    if(results[0].label=="Angry"){
        document.getElementById("update_emoji").innerHTML="&#128548;";
        }
        if(results[1].label=="Happy"){
            document.getElementById("update_emoji2").innerHTML="&#128522;";
            }
            if(results[1].label=="Sad"){
                document.getElementById("update_emoji2").innerHTML="&#128546;";
                }
                if(results[1].label=="Angry"){
                    document.getElementById("update_emoji2").innerHTML="&#128548;";
                    }
}
}