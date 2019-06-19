      //variables to determine what is shown
			var toggle_sharp = false; 
			var toggle_flat = false;
			var toggle_enharmonic = false;
			var flag_sharp = false;
			var flag_flat = false;
			var flag_enharmonic = false;
			var flag_grand = true;
			var flag_treble = false;
			var flag_bass = false;
			var flag_audio = false;
			var flag_settings = true;
			
			var right = 0;
			var wrong = 0;
			var note;
			var ans;
			var img;
			var audio;
			var imgCf, imgC, imgCs, imgDf, imgD, imgDs, imgEf, imgE, imgEs, imgFf, imgF, imgFs, imgGf, imgG, imgGs, imgAf, imgA, imgAs, imgBs, imgB, imgBf;
			
			img = "blank.png";
			
			t_imgAb = ["af3.png", "af4.png", "af5.png"];
			t_imgA = ["a3.png", "a4.png", "a5.png"];
			t_imgAs = ["as3.png", "as4.png", "as5.png"];
			t_imgBb = ["bf3.png", "bf4.png", "bf5.png"];
			t_imgB = ["b3.png", "b4.png", "b5.png"];
			t_imgBs = ["bs3.png", "bs4.png", "bs5.png"];
			t_imgCb = ["cf4.png", "cf5.png", "cf6.png"];
			t_imgC = ["c4.png", "c5.png", "c6.png"];
			t_imgCs = ["cs4.png", "cs5.png", "cs6.png"];
			t_imgDb = ["df4.png", "df5.png"];
			t_imgD = ["d4.png", "d5.png"];
			t_imgDs = ["ds4.png", "ds5.png"];
			t_imgEb = ["ef4.png", "ef5.png"];
			t_imgE = ["e4.png", "e5.png"];
			t_imgEs = ["es4.png", "es5.png"];
			t_imgFb = ["ff4.png", "ff5.png"];
			t_imgF = ["f4.png", "f5.png"];
			t_imgFs = ["fs4.png", "fs5.png"];
			t_imgGb = ["gf4.png", "gf5.png"];
			t_imgG = ["g4.png", "g5.png"];
			t_imgGs = ["gs4.png", "gs5.png"];
			
			imgAb = ["af2.png", "af3.png", "af4.png", "af5.png"];
			imgA = ["a2.png", "a3.png", "a4.png", "a5.png"];
			imgAs = ["as2.png", "as3.png", "as4.png", "as5.png"];
			imgBb = ["bf2.png", "bf3.png", "bf4.png", "bf5.png"];
			imgB = ["b2.png", "b3.png", "b4.png", "b5.png"];
			imgBs = ["bs2.png", "bs3.png", "bs4.png", "bs5.png"];
			imgCb = ["cf2.png", "cf3.png", "cf4.png", "cf5.png", "cf6.png"];
			imgC = ["c2.png", "c3.png", "c4.png", "c5.png", "c6.png"];
			imgCs = ["cs2.png", "cs3.png", "cs4.png", "cs5.png", "cs6.png"];
			imgDb = ["df2.png", "df3.png", "df4.png", "df5.png"];
			imgD = ["d2.png", "d3.png", "d4.png", "d5.png"];
			imgDs = ["ds2.png", "ds3.png", "ds4.png", "ds5.png"];
			imgEb = ["ef2.png", "ef3.png", "ef4.png", "ef5.png"];
			imgE = ["e2.png", "e3.png", "e4.png", "e5.png"];
			imgEs = ["es2.png", "es3.png", "es4.png", "es5.png"];
			imgFb = ["ff2.png", "ff3.png", "ff4.png", "ff5.png"];
			imgF = ["f2.png", "f3.png", "f4.png", "f5.png"];
			imgFs = ["fs2.png", "fs3.png", "fs4.png", "fs5.png"];
			imgGb = ["gf2.png", "gf3.png", "gf4.png", "gf5.png"];
			imgG = ["g2.png", "g3.png", "g4.png", "g5.png"];
			imgGs = ["gs2.png", "gs3.png", "gs4.png", "gs5.png"];
			
			b_imgAb = ["af2.png", "af3.png"];
			b_imgA = ["a2.png", "a3.png"];
			b_imgAs = ["as2.png", "as3.png"];
			b_imgBb = ["bf2.png", "bf3.png"];
			b_imgB = ["b2.png", "b3.png"];
			b_imgBs = ["b2.png", "b3.png"];
			b_imgCb = ["cf2.png", "cf3.png", "cf4.png"];
			b_imgC = ["c2.png", "c3.png", "c4.png"];
			b_imgCs = ["cs2.png", "cs3.png", "cs4.png"];
			b_imgDb = ["df2.png", "df3.png", "df3.png"];
			b_imgD = ["d2.png", "d3.png", "d3.png"];
			b_imgDs = ["ds2.png", "ds3.png", "ds3.png"];
			b_imgEb = ["ef2.png", "ef3.png", "ef4.png"];
			b_imgE = ["e2.png", "e3.png", "e4.png"];
			b_imgEs = ["es2.png", "es3.png", "es4.png"];
			b_imgFb = ["ff3.png"];
			b_imgF = ["f3.png"];
			b_imgFs = ["fs3.png"];
			b_imgGb = ["gf2.pnpg", "gf3.png"];
			b_imgG = ["g2.png", "g3.png"];
			b_imgGs = ["gs2.png", "gs3.png"];
			
			//function for the settings menu
			document.querySelector('#settings').addEventListener('click', function() {
				if(flag_settings == true) {
					flag_settings = false;
					document.getElementById("settings").src="https://www.melodicodyssey.com/assets/images/icons/close.png";
					document.getElementById("settings-menu").style.display = "block";
				}else if(flag_settings == false){
					flag_settings = true;
					document.getElementById("settings").src="https://www.melodicodyssey.com/assets/images/icons/settings.png";
					document.getElementById("settings-menu").style.display = "none";
				}
			});
			
			//changes the note when the page is loaded
			note = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"];
			ans = note[Math.floor(Math.random() * note.length)];
			
			//change the image when the page is loaded
			imgChange(ans);
			
			//change the audio when the page is loaded
			document.getElementById("audio").src="";
			
			//toggle sharps button
			document.querySelector('#btn1').addEventListener('click',function() {
				if(flag_enharmonic == true) {
					console.log("Enharmonics: "+flag_enharmonic);
					if(flag_sharp == false) {
						console.log("Sharps: "+flag_sharp);
						document.getElementById("sharp").style.display = "none";
						document.getElementById("btn1").innerHTML = "Enable";
						flag_sharp = true;
						toggle_sharp = true;
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}else{
							note = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}
					}else{
						console.log("Sharps: "+flag_sharp);
						document.getElementById("sharp").style.display = "block";
						document.getElementById("btn1").innerHTML = "Disable";
						flag_sharp = false;
						toggle_sharp = false;
						note = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
					}
				}else{
					console.log("Enharmonics: "+flag_enharmonic);
					if(flag_sharp == false) {
						console.log("Sharps: "+flag_sharp);
						document.getElementById("sharp").style.display = "none";
						document.getElementById("btn1").innerHTML = "Enable";
						flag_sharp = true;
						toggle_sharp = true;
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}else{
							note = ["Cb", "C", "Db", "D", "Eb", "E", "Fb", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}
					}else{
						console.log("Sharps: "+flag_sharp);
						document.getElementById("sharp").style.display = "block";
						document.getElementById("btn1").innerHTML = "Disable";
						flag_sharp = false;
						toggle_sharp = false;
						note = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
					}
				}
			});
			
			//toggle flats button
			document.querySelector('#btn2').addEventListener('click',function() {
				if(flag_enharmonic == true) {
					//enharmonics are turned on
					console.log("Enharmonics: "+flag_enharmonic);
					if(flag_flat == false) {
						console.log("Flats: "+flag_flat);
						document.getElementById("flat").style.display = "none";
						document.getElementById("btn2").innerHTML = "Enable";
						flag_flat = true;
						toggle_flat = true;
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}else{
							note = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}
					}else{
						console.log("Flats: "+flag_flat);
						document.getElementById("flat").style.display = "block";
						document.getElementById("btn2").innerHTML = "Disable";
						flag_flat = false;
						toggle_flat = false;
						note = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
					}
				}else{
					//enharmonics are turned off
					console.log("Enharmonics: "+flag_enharmonic);
					if(flag_flat == false) {
						console.log("Flats: "+flag_flat);
						document.getElementById("flat").style.display = "none";
						document.getElementById("btn2").innerHTML = "Enable";
						flag_flat = true;
						toggle_flat = true;
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}else{
							note = ["C", "C#", "D", "D#", "E", "E#", "F", "F#", "G", "G#", "A", "A#", "B", "B#"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}
					}else{
						console.log("Flats: "+flag_flat);
						document.getElementById("flat").style.display = "block";
						document.getElementById("btn2").innerHTML = "Disable";
						flag_flat = false;
						toggle_flat = false;
						note = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
					}
				}
			});
			
			//disables redundant enharmonic notes button
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
					
					document.getElementById("btn3").innerHTML = "Enable";
					
					if(flag_sharp == false && flag_flat == false) {
						note = ["C", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
					}else{
						note = ["Cb", "C", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Fb", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
					}
					
					//changes the note when the enharmonic button is toggled
					if(flag_flat == true) {
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}else{
							note = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}
					}
					
					if(flag_sharp == true) {
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}else{
							note = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}
					}
					
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
					
					document.getElementById("btn3").innerHTML = "Disable";
					
					//changes the note when the enharmonic button is toggled
					if(flag_flat == true) {
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}else{
							note = ["Cb", "C", "C#", "D", "D#", "E", "E#", "F", "F#", "G", "G#", "A", "A#", "B", "B#"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}
					}
					
					if(flag_sharp == true) {
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}else{
							note = ["Cb", "C", "Db", "D", "Eb", "E", "Fb", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
						}
					}
				}	
			});
			
			//toggler for the grand staff
			document.querySelector("#grand").addEventListener('click', function() {
				if(flag_grand == false) {
					flag_grand = true;
					flag_treble = false;
					flag_bass = false;
					document.getElementById("grand").innerHTML = "Enable";
					document.getElementById("btn4").innerHTML = "Disable";
					document.getElementById("btn5").innerHTML = "Disable";
					console.log("grand: "+flag_grand+"  treble: "+flag_treble+"  bass: "+flag_bass);
					imgChange(ans);
					document.getElementById("myImage").style.margin = "0px 0px -320px 0px";
				}else if(flag_grand == true) {
					flag_grand = false;
					document.getElementById("grand").innerHTML = "Disable";
					document.getElementById("btn4").innerHTML = "Disable";
					document.getElementById("btn5").innerHTML = "Disable";
					console.log("grand: "+flag_grand+"  treble: "+flag_treble+"  bass: "+flag_bass);
					imgChange(ans);
					document.getElementById("myImage").style.margin = "0px 0px -320px 0px";
				}
			});
			
			//toggles the treble clef
			document.querySelector("#btn4").addEventListener('click', function() {
				if(flag_treble == false) {
					flag_grand = false;
					flag_treble = true;
					flag_bass = false;
					document.getElementById("grand").innerHTML = "Disable";
					document.getElementById("btn4").innerHTML = "Enable";
					document.getElementById("btn5").innerHTML = "Disable";
					console.log("grand: "+flag_grand+"  treble: "+flag_treble+"  bass: "+flag_bass);
					imgChange(ans);
					document.getElementById("myImage").style.margin = "0px 0px -120px 0px";
				}else if(flag_treble == true) {
					flag_treble = false;
					document.getElementById("grand").innerHTML = "Disable";
					document.getElementById("btn4").innerHTML = "Disable";
					document.getElementById("btn5").innerHTML = "Disable";
					console.log("grand: "+flag_grand+"  treble: "+flag_treble+"  bass: "+flag_bass);
					imgChange(ans);	
					document.getElementById("myImage").style.margin = "0px 0px -320px 0px";
				}
			});
			
			//toggles the bass clef
			document.querySelector("#btn5").addEventListener('click', function() {
				if(flag_bass == false) {
					flag_grand = false;
					flag_treble = false;
					flag_bass = true;
					document.getElementById("grand").innerHTML = "Disable";
					document.getElementById("btn4").innerHTML = "Disable";
					document.getElementById("btn5").innerHTML = "Enable";
					console.log("grand: "+flag_grand+"  treble: "+flag_treble+"  bass: "+flag_bass);
					imgChange(ans);
					document.getElementById("myImage").style.margin = "0px 0px -120px 0px";
				}else if(flag_bass == true) {
					flag_bass = false;
					document.getElementById("grand").innerHTML = "Disable";
					document.getElementById("btn4").innerHTML = "Disable";
					document.getElementById("btn5").innerHTML = "Disable";
					console.log("grand: "+flag_grand+"  treble: "+flag_treble+"  bass: "+flag_bass);
					imgChange(ans);
					document.getElementById("myImage").style.margin = "0px 0px -320px 0px";
				}
			});

			//passes the answer to this function to get the audio for the play button
			function playAudio() {
				switch(ans) {
					case "A":
						if(img == "a2.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/a2.mp3";
								document.getElementById("audio").play();
							}else if(img == "a3.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/a3.mp3";
								document.getElementById("audio").play();
							}else if(img == "a4.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/a4.mp3";
								document.getElementById("audio").play();
							}else if(img == "a5.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/a5.mp3";
								document.getElementById("audio").play();
							}
						break;
					case "B":
						if(img == "b2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/b2.mp3";
							document.getElementById("audio").play();
						}else if(img == "b3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/b3.mp3";
							document.getElementById("audio").play();
						}else if(img == "b4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/b4.mp3";
							document.getElementById("audio").play();
						}else if(img == "b5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/b5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "C":
						if(img == "c2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/c2.mp3";
							document.getElementById("audio").play();
						}else if(img == "c3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/c3.mp3";
							document.getElementById("audio").play();
						}else if(img == "c4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/c4.mp3";
							document.getElementById("audio").play();
						}else if(img == "c5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/c5.mp3";
							document.getElementById("audio").play();
						}else if(img == "c6.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/c6.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "D":
						if(img == "d2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/d2.mp3";
							document.getElementById("audio").play();
						}else if(img == "d3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/d3.mp3";
							document.getElementById("audio").play();
						}else if(img == "d4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/d4.mp3";
							document.getElementById("audio").play();
						}else if(img == "d5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/d5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "E":
						if(img == "e2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/e2.mp3";
							document.getElementById("audio").play();
						}else if(img == "e3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/e3.mp3";
							document.getElementById("audio").play();
						}else if(img == "e4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/e4.mp3";
							document.getElementById("audio").play();
						}else if(img == "e5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/e5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "F":
						if(img == "f2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/f2.mp3";
							document.getElementById("audio").play();
						}else if(img == "f3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/f3.mp3";
							document.getElementById("audio").play();
						}else if(img == "f4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/f4.mp3";
							document.getElementById("audio").play();
						}else if(img == "f5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/f5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "G":
						if(img == "g2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/g2.mp3";
							document.getElementById("audio").play();
						}else if(img == "g3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/g3.mp3";
							document.getElementById("audio").play();
						}else if(img == "g4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/g4.mp3";
							document.getElementById("audio").play();
						}else if(img == "g5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/g5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "Ab":
						if(img == "af2.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/af2.mp3";
								document.getElementById("audio").play();
							}else if(img == "af3.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/af3.mp3";
								document.getElementById("audio").play();
							}else if(img == "af4.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/af4.mp3";
								document.getElementById("audio").play();
							}else if(img == "af5.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/af5.mp3";
								document.getElementById("audio").play();
							}
						break;
					case "Bb":
						if(img == "bf2.png") {
							console.log("working "+img+" "+ans);;
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/bf2.mp3";
							document.getElementById("audio").play();
						}else if(img == "bf3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/bf3.mp3";
							document.getElementById("audio").play();
						}else if(img == "bf4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/bf4.mp3";
							document.getElementById("audio").play();
						}else if(img == "bf5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/bf5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "Cb":
						if(img == "cb2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/cf2.mp3";
							document.getElementById("audio").play();
						}else if(img == "cb3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/cf3.mp3";
							document.getElementById("audio").play();
						}else if(img == "cb4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/cf4.mp3";
							document.getElementById("audio").play();
						}else if(img == "cb5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/cf5.mp3";
							document.getElementById("audio").play();
						}else if(img == "cb6.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/cf6.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "Db":
						if(img == "df2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/df2.mp3";
							document.getElementById("audio").play();
						}else if(img == "df3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/df3.mp3";
							document.getElementById("audio").play();
						}else if(img == "df4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/df4.mp3";
							document.getElementById("audio").play();
						}else if(img == "df5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/df5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "Eb":
						if(img == "ef2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/df2.mp3";
							document.getElementById("audio").play();
						}else if(img == "ef3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ef3.mp3";
							document.getElementById("audio").play();
						}else if(img == "ef4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ef4.mp3";
							document.getElementById("audio").play();
						}else if(img == "ef5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ef5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "Fb":
						if(img == "ff2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ff2.mp3";
							document.getElementById("audio").play();
						}else if(img == "ff3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ff3.mp3";
							document.getElementById("audio").play();
						}else if(img == "ff4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ff4.mp3";
							document.getElementById("audio").play();
						}else if(img == "ff5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ff5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "Gb":
						if(img == "gf2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/gf2.mp3";
							document.getElementById("audio").play();
						}else if(img == "gf3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/gf3.mp3";
							document.getElementById("audio").play();
						}else if(img == "gf4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/gf4.mp3";
							document.getElementById("audio").play();
						}else if(img == "gf5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/gf5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "A#":
						if(img == "as2.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/as2.mp3";
								document.getElementById("audio").play();
							}else if(img == "as3.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/as3.mp3";
								document.getElementById("audio").play();
							}else if(img == "as4.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/as4.mp3";
								document.getElementById("audio").play();
							}else if(img == "as5.png") {
								console.log("working "+img+" "+ans);
								document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/as5.mp3";
								document.getElementById("audio").play();
							}
						break;
					case "B#":
						if(img == "bs2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/bs2.mp3";
							document.getElementById("audio").play();
						}else if(img == "bs3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/bs3.mp3";
							document.getElementById("audio").play();
						}else if(img == "bs4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/bs4.mp3";
							document.getElementById("audio").play();
						}else if(img == "bs5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/bs5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "C#":
						if(img == "cs2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/cs2.mp3";
							document.getElementById("audio").play();
						}else if(img == "cs3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/cs3.mp3";
							document.getElementById("audio").play();
						}else if(img == "cs4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/cs4.mp3";
							document.getElementById("audio").play();
						}else if(img == "cs5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/cs5.mp3";
							document.getElementById("audio").play();
						}else if(img == "cs6.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/cs6.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "D#":
						if(img == "ds2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ds2.pm3";
							document.getElementById("audio").play();
						}else if(img == "ds3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ds3.mp3";
							document.getElementById("audio").play();
						}else if(img == "ds4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ds4.mp3";
							document.getElementById("audio").play();
						}else if(img == "ds5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/ds5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "E#":
						if(img == "es2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/es2.mp3";
							document.getElementById("audio").play();
						}else if(img == "es3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/es3.mp3";
							document.getElementById("audio").play();
						}else if(img == "es4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/es4.mp3";
							document.getElementById("audio").play();
						}else if(img == "es5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/es5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "F#":
						if(img == "fs2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/fs2.mp3";
							document.getElementById("audio").play();
						}else if(img == "fs3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/fs3.mp3";
							document.getElementById("audio").play();
						}else if(img == "fs4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/fs4.mp3";
							document.getElementById("audio").play();
						}else if(img == "fs5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/fs5.mp3";
							document.getElementById("audio").play();
						}
						break;
					case "G#":
						if(img == "gs2.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/gs2.mp3";
							document.getElementById("audio").play();
						}else if(img == "gs3.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/gs3.mp3";
							document.getElementById("audio").play();
						}else if(img == "gs4.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/gs4.mp3";
							document.getElementById("audio").play();
						}else if(img == "gs5.png") {
							console.log("working "+img+" "+ans);
							document.getElementById("audio").src="https://www.melodicodyssey.com/assets/audio/resources/notationtrainer/gs5.mp3";
							document.getElementById("audio").play();
						}
						break;
					default:
						console.log("error");
						break;
				}
			}
			
			//passes the answer to this function to change the image
			function imgChange(ans) {
				console.log(ans);
				if(flag_grand == true) {
					switch(ans) {
						case "A":
							img = imgA[Math.floor(Math.random() * imgA.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "B":
							img = imgB[Math.floor(Math.random() * imgB.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "C":
							img = imgC[Math.floor(Math.random() * imgC.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "D":
							img = imgD[Math.floor(Math.random() * imgD.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "E":
							img = imgE[Math.floor(Math.random() * imgE.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "F":
							img = imgF[Math.floor(Math.random() * imgF.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "G":
							img = imgG[Math.floor(Math.random() * imgG.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Ab":
							img = imgAb[Math.floor(Math.random() * imgAb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Bb":
							img = imgBb[Math.floor(Math.random() * imgBb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Cb":
							img = imgCb[Math.floor(Math.random() * imgCb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Db":
							img = imgDb[Math.floor(Math.random() * imgDb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Eb":
							img = imgEb[Math.floor(Math.random() * imgEb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Fb":
							img = imgFb[Math.floor(Math.random() * imgFb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Gb":
							img = imgGb[Math.floor(Math.random() * imgGb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "A#":
							img = imgAs[Math.floor(Math.random() * imgAs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "B#":
							img = imgBs[Math.floor(Math.random() * imgBs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "C#":
							img = imgCs[Math.floor(Math.random() * imgCs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "D#":
							img = imgDs[Math.floor(Math.random() * imgDs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "E#":
							img = imgEs[Math.floor(Math.random() * imgEs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "F#":
							img = imgFs[Math.floor(Math.random() * imgFs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "G#":
							img = imgGs[Math.floor(Math.random() * imgGs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						default:
							console.log(ans);
							break;
					}
				}else if(flag_treble == true) {
					switch(ans) {
						case "A":
							img = t_imgA[Math.floor(Math.random() * t_imgA.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "B":
							img = t_imgB[Math.floor(Math.random() * t_imgB.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "C":
							img = t_imgC[Math.floor(Math.random() * t_imgC.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "D":
							img = t_imgD[Math.floor(Math.random() * t_imgD.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "E":
							img = t_imgE[Math.floor(Math.random() * t_imgE.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "F":
							img = t_imgF[Math.floor(Math.random() * t_imgF.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "G":
							img = t_imgG[Math.floor(Math.random() * t_imgG.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "Ab":
							img = t_imgAb[Math.floor(Math.random() * t_imgAb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "Bb":
							img = t_imgBb[Math.floor(Math.random() * t_imgBb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "Cb":
							img = t_imgCb[Math.floor(Math.random() * t_imgCb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "Db":
							img = t_imgDb[Math.floor(Math.random() * t_imgDb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "Eb":
							img = t_imgEb[Math.floor(Math.random() * t_imgEb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "Fb":
							img = t_imgFb[Math.floor(Math.random() * t_imgFb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "Gb":
							img = t_imgGb[Math.floor(Math.random() * t_imgGb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "A#":
							img = t_imgAs[Math.floor(Math.random() * t_imgAs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "B#":
							img = t_imgBs[Math.floor(Math.random() * t_imgBs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "C#":
							img = t_imgCs[Math.floor(Math.random() * t_imgCs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "D#":
							img = t_imgDs[Math.floor(Math.random() * t_imgDs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "E#":
							img = t_imgEs[Math.floor(Math.random() * t_imgEs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "F#":
							img = t_imgFs[Math.floor(Math.random() * t_imgFs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						case "G#":
							img = t_imgGs[Math.floor(Math.random() * t_imgGs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/treble/"+img;
							break;
						default:
							console.log(ans);
							break;
					}
				}else if(flag_bass == true) {
					switch(ans) {
						case "A":
							img = b_imgA[Math.floor(Math.random() * b_imgA.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "B":
							img = b_imgB[Math.floor(Math.random() * b_imgB.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "C":
							img = b_imgC[Math.floor(Math.random() * b_imgC.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "D":
							img = b_imgD[Math.floor(Math.random() * b_imgD.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "E":
							img = b_imgE[Math.floor(Math.random() * b_imgE.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "F":
							img = b_imgF[Math.floor(Math.random() * b_imgF.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "G":
							img = b_imgG[Math.floor(Math.random() * b_imgG.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "Ab":
							img = b_imgAb[Math.floor(Math.random() * b_imgAb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "Bb":
							img = b_imgBb[Math.floor(Math.random() * b_imgBb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "Cb":
							img = b_imgCb[Math.floor(Math.random() * b_imgCb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "Db":
							img = b_imgDb[Math.floor(Math.random() * b_imgDb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "Eb":
							img = b_imgEb[Math.floor(Math.random() * b_imgEb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "Fb":
							img = b_imgFb[Math.floor(Math.random() * b_imgFb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "Gb":
							img = b_imgGb[Math.floor(Math.random() * b_imgGb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "A#":
							img = b_imgAs[Math.floor(Math.random() * b_imgAs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "B#":
							img = b_imgBs[Math.floor(Math.random() * b_imgBs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "C#":
							img = b_imgCs[Math.floor(Math.random() * b_imgCs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "D#":
							img = b_imgDs[Math.floor(Math.random() * b_imgDs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "E#":
							img = b_imgEs[Math.floor(Math.random() * b_imgEs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "F#":
							img = b_imgFs[Math.floor(Math.random() * b_imgFs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						case "G#":
							img = b_imgGs[Math.floor(Math.random() * b_imgGs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/bass/"+img;
							break;
						default:
							console.log(ans);
							break;
					}
				}else{
					switch(ans) {
						case "A":
							img = imgA[Math.floor(Math.random() * imgA.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "B":
							img = imgB[Math.floor(Math.random() * imgB.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "C":
							img = imgC[Math.floor(Math.random() * imgC.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "D":
							img = imgD[Math.floor(Math.random() * imgD.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "E":
							img = imgE[Math.floor(Math.random() * imgE.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "F":
							img = imgF[Math.floor(Math.random() * imgF.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "G":
							img = imgG[Math.floor(Math.random() * imgG.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Ab":
							img = imgAb[Math.floor(Math.random() * imgAb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Bb":
							img = imgBb[Math.floor(Math.random() * imgBb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Cb":
							img = imgCb[Math.floor(Math.random() * imgCb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Db":
							img = imgDb[Math.floor(Math.random() * imgDb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Eb":
							img = imgEb[Math.floor(Math.random() * imgEb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Fb":
							img = imgFb[Math.floor(Math.random() * imgFb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "Gb":
							img = imgGb[Math.floor(Math.random() * imgGb.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "A#":
							img = imgAs[Math.floor(Math.random() * imgAs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "B#":
							img = imgBs[Math.floor(Math.random() * imgBs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "C#":
							img = imgCs[Math.floor(Math.random() * imgCs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "D#":
							img = imgDs[Math.floor(Math.random() * imgDs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "E#":
							img = imgEs[Math.floor(Math.random() * imgEs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "F#":
							img = imgFs[Math.floor(Math.random() * imgFs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						case "G#":
							img = imgGs[Math.floor(Math.random() * imgGs.length)];
							document.getElementById('myImage').src = "https://www.melodicodyssey.com/assets/images/resources/notationtrainer/grand/"+img;
							break;
						default:
							console.log(ans);
							break;
					}
				}
			}
			
			function randomNote(val) {
				if(val == ans) {
					switch(ans) {
						case "A":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "B":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "C":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "D":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "E":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "F":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "G":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Ab":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Bb":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Cb":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Db":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Eb":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Fb":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Gb":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "A#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "B#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "C#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "D#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "E#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "F#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "G#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						default:
							console.log(ans);
							break;
					}
				}else{
					wrong++;
					document.getElementById("wrong").innerHTML = wrong;
				}
			}
