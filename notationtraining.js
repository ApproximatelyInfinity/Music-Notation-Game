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
			
			var x = document.getElementById("myAudio");
			
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
			
			//function to play audio
			function playAudio() { 
				x.play(); 
			}
			
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
			audioChange(ans);
			
			//toggle sharps button
			document.querySelector('#btn1').addEventListener('click',function() {
				if(flag_enharmonic == true) {
					if(flag_sharp == false) {
						document.getElementById("sharp").style.display = "none";
						document.getElementById("btn1").innerHTML = "Enable";
						flag_sharp = true;
						toggle_sharp = true;
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}else{
							note = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}
					}else{
						document.getElementById("sharp").style.display = "block";
						document.getElementById("btn1").innerHTML = "Disable";
						flag_sharp = false;
						toggle_sharp = false;
						note = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
						audioChange(ans);
					}
				}else{
					if(flag_sharp == false) {
						document.getElementById("sharp").style.display = "none";
						document.getElementById("btn1").innerHTML = "Enable";
						flag_sharp = true;
						toggle_sharp = true;
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}else{
							note = ["Cb", "C", "Db", "D", "Eb", "E", "Fb", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}
					}else{
						document.getElementById("sharp").style.display = "block";
						document.getElementById("btn1").innerHTML = "Disable";
						flag_sharp = false;
						toggle_sharp = false;
						note = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
						audioChange(ans);
					}
				}
			});
			
			//toggle flats button
			document.querySelector('#btn2').addEventListener('click',function() {
				if(flag_enharmonic == true) {
					//enharmonics are turned on
					if(flag_flat == false) {
						document.getElementById("flat").style.display = "none";
						document.getElementById("btn2").innerHTML = "Enable";
						flag_flat = true;
						toggle_flat = true;
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}else{
							note = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}
					}else{
						document.getElementById("flat").style.display = "block";
						document.getElementById("btn2").innerHTML = "Disable";
						flag_flat = false;
						toggle_flat = false;
						note = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
						audioChange(ans);
					}
				}else{
					//enharmonics are turned off
					if(flag_flat == false) {
						document.getElementById("flat").style.display = "none";
						document.getElementById("btn2").innerHTML = "Enable";
						flag_flat = true;
						toggle_flat = true;
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}else{
							note = ["C", "C#", "D", "D#", "E", "E#", "F", "F#", "G", "G#", "A", "A#", "B", "B#"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}
					}else{
						document.getElementById("flat").style.display = "block";
						document.getElementById("btn2").innerHTML = "Disable";
						flag_flat = false;
						toggle_flat = false;
						note = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
						audioChange(ans);
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
						audioChange(ans);
					}else{
						note = ["Cb", "C", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Fb", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"];
						ans = note[Math.floor(Math.random() * note.length)];
						imgChange(ans);
						audioChange(ans);
					}
					
					//changes the note when the enharmonic button is toggled
					if(flag_flat == true) {
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}else{
							note = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}
					}
					
					if(flag_sharp == true) {
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}else{
							note = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
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
							audioChange(ans);
						}else{
							note = ["Cb", "C", "C#", "D", "D#", "E", "E#", "F", "F#", "G", "G#", "A", "A#", "B", "B#"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}
					}
					
					if(flag_sharp == true) {
						if(toggle_sharp == true && toggle_flat == true) {
							note = ["C", "D", "E", "F", "G", "A", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
						}else{
							note = ["Cb", "C", "Db", "D", "Eb", "E", "Fb", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
							ans = note[Math.floor(Math.random() * note.length)];
							imgChange(ans);
							audioChange(ans);
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
					imgChange(ans);
					audioChange(ans);
					document.getElementById("myImage").style.margin = "0px 0px -320px 0px";
				}else if(flag_grand == true) {
					flag_grand = false;
					document.getElementById("grand").innerHTML = "Disable";
					document.getElementById("btn4").innerHTML = "Disable";
					document.getElementById("btn5").innerHTML = "Disable";
					imgChange(ans);
					audioChange(ans);
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
					imgChange(ans);
					audioChange(ans);
					document.getElementById("myImage").style.margin = "0px 0px -120px 0px";
				}else if(flag_treble == true) {
					flag_treble = false;
					document.getElementById("grand").innerHTML = "Disable";
					document.getElementById("btn4").innerHTML = "Disable";
					document.getElementById("btn5").innerHTML = "Disable";
					imgChange(ans);
					audioChange(ans);
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
					imgChange(ans);
					audioChange(ans);
					document.getElementById("myImage").style.margin = "0px 0px -120px 0px";
				}else if(flag_bass == true) {
					flag_bass = false;
					document.getElementById("grand").innerHTML = "Disable";
					document.getElementById("btn4").innerHTML = "Disable";
					document.getElementById("btn5").innerHTML = "Disable";
					imgChange(ans);
					audioChange(ans);
					document.getElementById("myImage").style.margin = "0px 0px -320px 0px";
				}
			});

			//function to change the source of the audio
			function audioChange() {
				switch(ans) {
					case "A":
						if(img == "a2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/a2.ogg";
						}else if(img == "a3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/a3.ogg";
						}else if(img == "a4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/a4.ogg";
						}else if(img == "a5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/a5.ogg";
						}
						break;
					case "B":
						if(img == "b2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/b2.ogg";
						}else if(img == "b3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/b3.ogg";
						}else if(img == "b4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/b4.ogg";
						}else if(img == "b5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/b5.ogg";
						}
						break;
					case "C":
						if(img == "c2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/c2.ogg";
						}else if(img == "c3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/c3.ogg";
						}else if(img == "c4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/c4.ogg";
						}else if(img == "c5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/c5.ogg";
						}else if(img == "c6.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/c6.ogg";
						}
						break;
					case "D":
						if(img == "d2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/d2.ogg";
						}else if(img == "d3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/d3.ogg";
						}else if(img == "d4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/d4.ogg";
						}else if(img == "d5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/d5.ogg";
						}
						break;
					case "E":
						if(img == "e2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/e2.ogg";
						}else if(img == "e3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/e3.ogg";
						}else if(img == "e4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/e4.ogg";
						}else if(img == "e5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/e5.ogg";
						}
						break;
					case "F":
						if(img == "f2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/f2.ogg";
						}else if(img == "f3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/f3.ogg";
						}else if(img == "f4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/f4.ogg";
						}else if(img == "f5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/f5.ogg";
						}
						break;
					case "G":
						if(img == "g2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/g2.ogg";
						}else if(img == "g3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/g3.ogg";
						}else if(img == "g4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/g4.ogg";
						}else if(img == "g5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/g5.ogg";
						}
						break;
					case "Ab":
						if(img == "af2.png") {
							document.getElementById("myAudio").src = "https://www.melodicodyssey.com/assets/audio/notes/single/gs2.ogg";
						}else if(img == "af3.png") {
							document.getElementById("myAudio").src = "https://www.melodicodyssey.com/assets/audio/notes/single/gs3.ogg";
						}else if(img == "af4.png") {
							document.getElementById("myAudio").src = "https://www.melodicodyssey.com/assets/audio/notes/single/gs4.ogg";
						}else if(img == "af5.png") {
							document.getElementById("myAudio").src = "https://www.melodicodyssey.com/assets/audio/notes/single/gs5.ogg";
						}
						break;
					case "Bb":
						if(img == "bf2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/as2.ogg";
						}else if(img == "bf3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/as3.ogg";
						}else if(img == "bf4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/as4.ogg";
						}else if(img == "bf5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/as5.ogg";
						}
						break;
					case "Cb":
						if(img == "cf2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/b1.ogg";
						}else if(img == "cf3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/b2.ogg";
						}else if(img == "cf4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/b3.ogg";
						}else if(img == "cf5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/b4.ogg";
						}else if(img == "cf6.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/b5.ogg";
						}
						break;
					case "Db":
						if(img == "df2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/cs2.ogg";
						}else if(img == "df3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/cs3.ogg";
						}else if(img == "df4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/cs4.ogg";
						}else if(img == "df5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/cs5.ogg";
						}
						break;
					case "Eb":
						if(img == "ef2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/ds2.ogg";
						}else if(img == "ef3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/ds3.ogg";
						}else if(img == "ef4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/ds4.ogg";
						}else if(img == "ef5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/ds5.ogg";
						}
						break;
					case "Fb":
						if(img == "ff2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/e2.ogg";
						}else if(img == "ff3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/e3.ogg";
						}else if(img == "ff4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/e4.ogg";
						}else if(img == "ff5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/e5.ogg";
						}
						break;
					case "Gb":
						if(img == "gf2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/fs2.ogg";
						}else if(img == "gf3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/fs3.ogg";
						}else if(img == "gf4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/fs4.ogg";
						}else if(img == "gf5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/fs5.ogg";
						}
						break;
					case "A#":
						if(img == "as2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/as2.ogg";
						}else if(img == "as3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/as3.ogg";
						}else if(img == "as4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/as4.ogg";
						}else if(img == "as5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/as5.ogg";
						}
						break;
					case "B#":
						if(img == "bs2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/c2.ogg";
						}else if(img == "bs3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/c3.ogg";
						}else if(img == "bs4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/c4.ogg";
						}else if(img == "bs5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/c5.ogg";
						}
						break;
					case "C#":
						if(img == "cs2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/cs2.ogg";
						}else if(img == "cs3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/cs3.ogg";
						}else if(img == "cs4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/cs4.ogg";
						}else if(img == "cs5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/cs5.ogg";
						}else if(img == "cs6.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/cs6.ogg";
						}
						break;
					case "D#":
						if(img == "ds2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/ds2.ogg";
						}else if(img == "ds3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/ds3.ogg";
						}else if(img == "ds4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/ds4.ogg";
						}else if(img == "ds5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/ds5.ogg";
						}
						break;
					case "E#":
						if(img == "es2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/f2.ogg";
						}else if(img == "es3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/f3.ogg";
						}else if(img == "es4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/f4.ogg";
						}else if(img == "es5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/f5.ogg";
						}
						break;
					case "F#":
						if(img == "fs2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/fs2.ogg";
						}else if(img == "fs3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/fs3.ogg";
						}else if(img == "fs4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/fs4.ogg";
						}else if(img == "fs5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/fs5.ogg";
						}
						break;
					case "G#":
						if(img == "gs2.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/gs2.ogg";
						}else if(img == "gs3.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/gs3.ogg";
						}else if(img == "gs4.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/gs4.ogg";
						}else if(img == "gs5.png") {
							document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/gs5.ogg";
						}
						break;
					default:
						console.log("error");
						document.getElementById('myAudio').src = "https://www.melodicodyssey.com/assets/audio/notes/single/a2.ogg";
						break;
				}
			}
			
			//passes the answer to this function to change the image
			function imgChange(ans) {
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
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "B":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "C":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "D":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "E":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "F":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "G":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Ab":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Bb":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Cb":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Db":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Eb":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Fb":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "Gb":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "A#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "B#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "C#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "D#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "E#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "F#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
							document.getElementById("right").innerHTML = right;
							break;
						case "G#":
							ans = note[Math.floor(Math.random() * note.length)];
							right++;
							imgChange(ans);
							audioChange(ans);
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
