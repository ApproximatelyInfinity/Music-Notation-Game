//global variable to determine what notes are shown
			var toggle_sharp = false; 
			var toggle_flat = false;
			var toggle_enharmonic = false;
			var flag_sharp = false;
			var flag_flat = false;
			var flag_enharmonic = false;
			var points = 0;
			var note;
			var ans;
			var img;
			var imgCf, imgC, imgCs, imgDf, imgD, imgDs, imgEf, imgE, imgEs, imgFf, imgF, imgFs, imgGf, imgG, imgGs, imgAf, imgA, imgAs, imgBs, imgB, imgBf;
			
			img = "blank.PNG";
			imgAb = ["af4.PNG", "af5.PNG", "af6.PNG"];
			imgA = ["a4.PNG", "a5.PNG", "a6.PNG"];
			imgAs = ["as4.PNG", "as5.PNG", "as6.PNG"];
			imgBb = ["bf4.PNG", "bf5.PNG", "bf6.PNG"];
			imgB = ["b4.PNG", "b5.PNG", "b6.PNG"];
			imgBs = ["blank.PNG"];
			imgCb = ["blank.PNG"];
			imgC = ["c4.PNG", "c5.PNG", "c6.PNG"];
			imgCs = ["cs4.PNG", "cs5.PNG", "cs6.PNG"];
			imgDb = ["df4.PNG", "df5.PNG"];
			imgD = ["d4.PNG", "d5.PNG"];
			imgDs = ["ds4.PNG", "ds5.PNG"];
			imgEb = ["ef4.PNG", "ef5.PNG"];
			imgE = ["e4.PNG", "e5.PNG"];
			imgEs = ["blank.PNG"];
			imgFb = ["blank.PNG"];
			imgF = ["f4.PNG", "f5.PNG"];
			imgFs = ["fs4.PNG", "fs5.PNG"];
			imgGb = ["gf4.PNG", "gf5.PNG"];
			imgG = ["g4.PNG", "g5.PNG"];
			imgGs = ["gs4.PNG", "gs5.PNG"];
			
			//perhaps change the note array to change on an if statement?
			note = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"];
			ans = note[Math.floor(Math.random() * note.length)];
			
			//change the image when the page is loaded
			switch(ans) {
				case "A":
					img = imgA[Math.floor(Math.random() * imgA.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "B":
					img = imgB[Math.floor(Math.random() * imgB.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "C":
					img = imgC[Math.floor(Math.random() * imgC.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "D":
					img = imgD[Math.floor(Math.random() * imgD.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "E":
					img = imgE[Math.floor(Math.random() * imgE.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "F":
					img = imgF[Math.floor(Math.random() * imgF.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "G":
					img = imgG[Math.floor(Math.random() * imgG.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "Ab":
					img = imgAb[Math.floor(Math.random() * imgAb.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "Bb":
					img = imgBb[Math.floor(Math.random() * imgBb.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "Cb":
					img = imgCb[Math.floor(Math.random() * imgCb.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "Db":
					img = imgDb[Math.floor(Math.random() * imgDb.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "Eb":
					img = imgEb[Math.floor(Math.random() * imgEb.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "Fb":
					img = imgFb[Math.floor(Math.random() * imgFb.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "Gb":
					img = imgGb[Math.floor(Math.random() * imgGb.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "A#":
					img = imgAs[Math.floor(Math.random() * imgAs.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "B#":
					img = imgBs[Math.floor(Math.random() * imgBs.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "C#":
					img = imgCs[Math.floor(Math.random() * imgCs.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "D#":
					img = imgDs[Math.floor(Math.random() * imgDs.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "E#":
					img = imgEs[Math.floor(Math.random() * imgEs.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "F#":
					img = imgFs[Math.floor(Math.random() * imgFs.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				case "G#":
					img = imgGs[Math.floor(Math.random() * imgGs.length)];
					document.getElementById("test2").innerHTML = img;
					document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
					break;
				default:
					console.log(ans);
					break;
			}
			
			//toggle accented notes
			document.querySelector('#btn1').addEventListener('click',function() {
				if(flag_sharp == false) {
					document.getElementById("sharp").style.display = "none";
					flag_sharp = true;
					toggle_sharp = true;
					if(toggle_sharp == true && toggle_flat == true) {
						note = ["C", "D", "E", "F", "G", "A", "B"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
					}else{
						note = ["Cb", "C",, "Db", "D", "Eb", "E", "Fb", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
					}
				}else{				
					document.getElementById("sharp").style.display = "block";
					flag_sharp = false;
					toggle_sharp = false;
					note = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"];
					ans = note[Math.floor(Math.random() * note.length)];
					imgChange(ans);
				}
			});
			
			document.querySelector('#btn2').addEventListener('click',function() {
				if(flag_flat == false) {
					document.getElementById("flat").style.display = "none";
					flag_flat = true;
					toggle_flat = true;
					if(toggle_sharp == true && toggle_flat == true) {
						note = ["C", "D", "E", "F", "G", "A", "B"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
					}else{
						if(flag_enharmonic == true) {
							console.log("working");
						}else{
							console.log("working2");
						}
						note = ["C", "C#", "D", "D#", "E", "E#", "F", "F#", "G", "G#", "A", "A#", "B", "B#"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
					}
				}else{				
					document.getElementById("flat").style.display = "block";
					flag_flat = false;
					toggle_flat = false;
					note = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"];
					ans = note[Math.floor(Math.random() * note.length)];
					imgChange(ans);
				}
			});
			
			document.querySelector('#btn3').addEventListener('click',function() {
				if(flag_enharmonic == false) {
					document.getElementById("Cb").style.backgroundColor = "grey";
					document.getElementById("Cb").disabled = true;
					document.getElementById("Fb").style.backgroundColor = "grey";
					document.getElementById("Fb").disabled = true;
					document.getElementById("E#").style.backgroundColor = "grey";
					document.getElementById("E#").disabled = true;
					document.getElementById("B#").style.backgroundColor = "grey";
					document.getElementById("B#").disabled = true;
					flag_enharmonic = true;
					toggle_enharmonic = true;
				}else{
					document.getElementById("Cb").style.backgroundColor = "#6D00BE";
					document.getElementById("Cb").disabled = false;
					document.getElementById("Fb").style.backgroundColor = "#6D00BE";
					document.getElementById("Fb").disabled = false;
					document.getElementById("E#").style.backgroundColor = "#6D00BE";
					document.getElementById("E#").disabled = false;
					document.getElementById("B#").style.backgroundColor = "#6D00BE";
					document.getElementById("B#").disabled = false;
					flag_enharmonic = false;
					toggle_enharmonic = false;
				}
					
			});
			
			//passes the answer to this function to change image
			function imgChange(ans) {
				console.log(ans);
				switch(ans) {
					case "A":
						img = imgA[Math.floor(Math.random() * imgA.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "B":
						img = imgB[Math.floor(Math.random() * imgB.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "C":
						img = imgC[Math.floor(Math.random() * imgC.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "D":
						img = imgD[Math.floor(Math.random() * imgD.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "E":
						img = imgE[Math.floor(Math.random() * imgE.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "F":
						img = imgF[Math.floor(Math.random() * imgF.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "G":
						img = imgG[Math.floor(Math.random() * imgG.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "Ab":
						img = imgAb[Math.floor(Math.random() * imgAb.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "Bb":
						img = imgBb[Math.floor(Math.random() * imgBb.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "Cb":
						img = imgCb[Math.floor(Math.random() * imgCb.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "Db":
						img = imgDb[Math.floor(Math.random() * imgDb.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "Eb":
						img = imgEb[Math.floor(Math.random() * imgEb.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "Fb":
						img = imgFb[Math.floor(Math.random() * imgFb.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "Gb":
						img = imgGb[Math.floor(Math.random() * imgGb.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "A#":
						img = imgAs[Math.floor(Math.random() * imgAs.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "B#":
						img = imgBs[Math.floor(Math.random() * imgBs.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "C#":
						img = imgCs[Math.floor(Math.random() * imgCs.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "D#":
						img = imgDs[Math.floor(Math.random() * imgDs.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "E#":
						img = imgEs[Math.floor(Math.random() * imgEs.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "F#":
						img = imgFs[Math.floor(Math.random() * imgFs.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					case "G#":
						img = imgGs[Math.floor(Math.random() * imgGs.length)];
						document.getElementById("test2").innerHTML = img;
						document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/"+img;
						break;
					default:
						console.log(ans);
						break;
				}
			}
			
			
			function randomNote(val) {
				if(val == ans) {
					switch(ans) {
						case "A":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "B":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "C":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "D":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "E":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "F":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "G":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "Ab":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "Bb":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "Cb":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "Db":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "Eb":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "Fb":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "Gb":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "A#":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "B#":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "C#":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "D#":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "E#":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "F#":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						case "G#":
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							break;
						default:
							console.log(ans);
							break;
					}
				}else{
					console.log("wrong");
				}
			}	
