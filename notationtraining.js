			var img_C = ["c4.PNG", "c5.PNG", "c6.PNG"];
			var img_CS = ["cs4.PNG", "cs5.PNG", "cs6.PNG", "df4.PNG", "df5.PNG"];
			var img_D = ["d4.PNG", "d5.PNG"];
			var img_DS = ["ds4.PNG", "ds5.PNG", "ef4.PNG", "ef5.PNG"];
			var img_E = ["e4.PNG", "e5.PNG"];
			var img_F = ["f4.PNG", "f5.PNG"];
			var img_FS = ["fs4.PNG", "fs5.PNG", "gf4.PNG", "gf5.PNG"];
			var img_G = ["g4.PNG", "g5.PNG"];
			var img_GS = ["gs4.PNG", "gs5.PNG", "af4.PNG", "af5.PNG", "af6.PNG"];
			var img_A = ["a4.PNG", "a5.PNG"];
			var img_AS = ["as4.PNG", "as5.PNG", "bf4.PNG", "bf5.PNG", "bf6.PNG"];
			var img_B = ["b4.PNG", "b5.PNG"];
			
			var note = ["C", "C#/Db", 
						"D", "D#/Eb", 
						"E", 
						"F", "F#/Gb", 
						"G", "G#/Ab", 
						"A", "A#/Bb", 
						"B"];
				
			let points = 1;
			let round = 0;
			let right = 0;
			let wrong = -1;
			let ans = note[Math.floor(Math.random() * note.length)];
			
			document.getElementById("test").innerHTML = ans;
			
			switch(ans) {
				case "C":
					img = img_C[Math.floor(Math.random() * img_C.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "C#/Db":
					img = img_CS[Math.floor(Math.random() * img_CS.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "D":
					img = img_D[Math.floor(Math.random() * img_D.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "D#/Eb":
					img = img_DS[Math.floor(Math.random() * img_DS.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "E":
					img = img_E[Math.floor(Math.random() * img_E.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "F":
					img = img_F[Math.floor(Math.random() * img_F.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "F#/Gb":
					img = img_FS[Math.floor(Math.random() * img_FS.length)];
					document.getElementById("test2").innerH5TML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "G":
					img = img_G[Math.floor(Math.random() * img_G.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "G#/Ab":
					img = img_GS[Math.floor(Math.random() * img_GS.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "A":
					img = img_A[Math.floor(Math.random() * img_A.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "A#/Bb":
					img = img_AS[Math.floor(Math.random() * img_AS.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "B":
					img = img_B[Math.floor(Math.random() * img_B.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;       
				default:
					document.getElementById("test2").innerHTML = "error";
					break;
			}
			
			function randomNote(val) {
				if(val == ans) {
					right++;
					document.getElementById("wrong").innerHTML = wrong;
					document.getElementById("status").innerHTML = "wrong";
					
					ans = note[Math.floor(Math.random() * note.length)];
					document.getElementById("test").innerHTML = ans;
					
					switch(ans) {
						case "C":
							img = img_C[Math.floor(Math.random() * img_C.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "C#/Db":
							img = img_CS[Math.floor(Math.random() * img_CS.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "D":
							img = img_D[Math.floor(Math.random() * img_D.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "D#/Eb":
							img = img_DS[Math.floor(Math.random() * img_DS.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "E":
							img = img_E[Math.floor(Math.random() * img_E.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "F":
							img = img_F[Math.floor(Math.random() * img_F.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "F#/Gb":
							img = img_FS[Math.floor(Math.random() * img_FS.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "G":
							img = img_G[Math.floor(Math.random() * img_G.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "G#/Ab":
							img = img_GS[Math.floor(Math.random() * img_GS.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "A":
							img = img_A[Math.floor(Math.random() * img_A.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "A#/Bb":
							img = img_AS[Math.floor(Math.random() * img_AS.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;
						case "B":
							img = img_B[Math.floor(Math.random() * img_B.length)];
							document.getElementById("test2").innerHTML = img;
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
							break;       
						default:
							document.getElementById("test2").innerHTML = "error";
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/blank.PNG";
							break;
					}
					
					points++;
					document.getElementById("points").innerHTML = points;
				}else{
					wrong++;
					document.getElementById("wrong").innerHTML = wrong;
					document.getElementById("status").innerHTML = "wrong";
					
					points--;
					document.getElementById("points").innerHTML = points;
					
					if(points <= -1) {
						document.getElementById("points").innerHTML = "Start Over";
						points = 0;
					}
				}
				
				if(round == 0) {
					document.getElementById("status").innerHTML = "";
				}
				round++;
			}