function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9YuTqz2Pn/', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_label").innerHTML;
        document.getElementById("result_confidence").innerHTML;
    }
}