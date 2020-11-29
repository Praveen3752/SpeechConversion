$(document).ready(function()
{
	
});



 function runSpeechRecognition() 
 {
				$("#bubblediv").show();
				$("#spokenText").hide();
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new SpeechRecognition();
            
                // This runs when the speech recognition service starts
                recognition.onstart = function() {
                    //action.innerHTML = "<small>listening, please speak...</small>";
                };
                
                recognition.onspeechend = function() {
                    //action.innerHTML = "<small>stopped listening, hope you are done...</small>";
                    recognition.stop();
                }
              
                // This runs when the speech recognition service returns result
                recognition.onresult = function(event) {
                    var transcript = event.results[0][0].transcript;
                    var confidence = event.results[0][0].confidence;
					$("#bubblediv").hide();
					$("#spokenText").show();	
					$("#spokenText").html(transcript);
                    console.log(transcript);
                };
				
				recognition.onnomatch = function(event) {
					$("#bubblediv").hide();
					$("#spokenText").show();	
					$("#spokenText").html("Could not catch that word.Please try again.");
				}
              
                 // start recognition
                 recognition.start();
 }