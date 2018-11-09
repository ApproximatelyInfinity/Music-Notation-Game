<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<?php include '/home/donbrogdon91/melodicodyssey.com/includes/header.php'; ?>
		<meta name="description" content="Begin your melodic odyssey with a host of FREE beginner lessons. Here you will find lessons on a variety of instruments. Whether you're looking to advance your skills or just beginning your journey, Melodic Odyssey has something for everyone." />
	</head>
	<body onload="randomNote()">
		<?php 
			if (!isset($_SESSION['username'])) {
				include '/home/donbrogdon91/melodicodyssey.com/includes/navbar_login.php';
			}else{
				include '/home/donbrogdon91/melodicodyssey.com/includes/navbar_logout.php';
			}
		?>
		<div class="content">
			<div class="main">
				<div class="container" style="background-color: white;">
					<div class="padding" style="padding-top:70px"></div>
					<h1 align="center">Notation Training</h1> 
					<hr/>
					<br/>
					<div class="row no-gutter" align="center">
						<div class="col-sm-12">
							<img id="myImage" src=""/>
						</div>
					</div>
					<div class="row no-gutter">
						<div class="col-sm-6" align="right">
							<br/>
							<b><i><p>Points: </p></i></b>
							<p class="notation-points" id="points"></p>
						</div>
						<div class="col-sm-6" align="left">
							<p id="status"></p>
						</div>
					</div>
					<p id="right"></p>
					<p id="wrong"></p>
					<hr/>
					<div class="row no-gutter" align="center">
						<div class="col-sm-12">
							<input class="btn btn-purple" type="button" value="C" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="C#/Db" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="D" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="D#/Eb" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="E" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="F" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="F#/Gb" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="G" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="G#/Ab" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="A" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="A#/Bb" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="B" onclick="randomNote(this.value)"/>
						</div>
					</div>
					<hr/>
					<div class="col-sm-6">
						<p id="test"></p>
					</div>
					<div class="col-sm-6">
						<p id="test2"></p>
					</div>
					<br/>
				</div>
				<div style="padding-top: 64px"></div>
			</div>
		</div>
		<script>
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
		</script>
		<?php include "/home/donbrogdon91/melodicodyssey.com/includes/footer.php"; ?>
	</body>
</html>