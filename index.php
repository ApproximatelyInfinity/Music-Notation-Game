<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>Notation Training</title>
		<style>
			.notation-image-container {
				border: 1px solid red;
				height: 350px;
			}
			.notation-image {
				border: 1px solid orange;
				margin-left: 35%;
				height: 350px;
			}
			.notation-menu-bar {
				border: 1px solid yellow;
				list-style-type: none;
				margin: 0;
			}
			.notation-image {
				height: 350px;
			}
			.notation-image-container {
				height: 350px;
			}
			.notation-menu-bar-right {
				margin-left: 36%;
				width: 13%;
			}
			.notation-menu-bar-audio {
				width: 13%;
			}
			.notation-menu-bar-wrong {
				width: 10%;
			}
			.right {
				position: static;
				color: green;
				font-size: 24px;
				font-weight: bold;
			}
			.audio-btn {
				position: static;
			}
			.wrong {
				position: static;
				color: red; 
				font-size: 24px;
				font-weight: bold;
			}
			.settings-btn {
				position: static;
			
			}
			#settings-menu {
				display: none;
				width: 50%;
				margin-left: 25%;
				border-style: inset;
			}
			.settings-menu-section {
				border-style: inset;	
			}
			.settings-menu-text {
				float: left;
				margin-top: -3%;
			}
			.settings-menu-btn {
				float: right;
				margin-top: -4%;
			}
		</style>
	</head>
	
	<body>
		<div class="main">
			<h1 align="center">Notation Training</h1>
			<div class="notation-image-container">
				<img id="myImage" class="notation-image" src=""/>
			</div>
			<ul class="notation-menu-bar">
				<li class="notation-menu-bar-right" style="display:inline-block;">
					<p id="right" class="right"><b>0</b></p>
				</li>
				<li class="notation-menu-bar-audio" style="display:inline-block;">
					<audio id="myAudio">
						<source src="" type="audio/ogg">
					</audio>
					<input class="audio-btn" onclick="playAudio()" type="image" src="assets/images/icons/play-button.png"></input>
				</li>
				<li class="notation-menu-bar-wrong" style="display:inline-block;">
					<p id="wrong" class="wrong"><b>0</b></p>
				</li>
				<li class="notation-menu-bar-settings" style="display:inline-block;"><input id="settings" class="settings-btn" type="image" src="assets/images/icons/settings.png"/></li>
			</ul>
			<div id="settings-menu">
					<p style="font-size: 20px;">Notes</p><hr/><br>
					<p class="settings-menu-text">Sharps</p><br>
					<button id="btn1" class="btn-xs settings-menu-btn">Disable</button><br>

					<p class="settings-menu-text">Flats</p><br>
					<button id="btn2" class="btn-xs settings-menu-btn">Disable</button><br>

					<p class="settings-menu-text">Enharmonics</p><br>
					<button id="btn3" class="btn-xs settings-menu-btn">Disable</button><br>
					

					<p style="font-size: 20px;">Staves</p><hr/><br>
					<p class="settings-menu-text">Grand</p><br>
					<button id="grand" class="btn-xs settings-menu-btn">Disable</button><br>

					<p class="settings-menu-text">Treble</p><br>
					<button id="btn4" class="btn-xs settings-menu-btn">Disable</button><br>

					<p class="settings-menu-text">Bass</p><br>
					<button id="btn5" class="btn-xs settings-menu-btn">Disable</button><br>
			</div>	
			<div id="sharp" align="center">
				<input type="button" value="C#" onclick="randomNote(this.value)"/>
				<input type="button" value="D#" onclick="randomNote(this.value)"/>
				<input id="E#" type="button" value="E#" onclick="randomNote(this.value)"/>
				<input type="button" value="F#" onclick="randomNote(this.value)"/>
				<input type="button" value="G#" onclick="randomNote(this.value)"/>
				<input type="button" value="A#" onclick="randomNote(this.value)"/>
				<input id="B#" type="button" value="B#" onclick="randomNote(this.value)"/>
			</div>
			<div id="natural" align="center">
				<input type="button" value="C" onclick="randomNote(this.value)"/>
				<input type="button" value="D" onclick="randomNote(this.value)"/>
				<input type="button" value="E" onclick="randomNote(this.value)"/>
				<input type="button" value="F" onclick="randomNote(this.value)"/>
				<input type="button" value="G" onclick="randomNote(this.value)"/>
				<input type="button" value="A" onclick="randomNote(this.value)"/>
				<input type="button" value="B" onclick="randomNote(this.value)"/>
			</div>
			<div id="flat" align="center">
				<input id="Cb" type="button" value="Cb" onclick="randomNote(this.value)"/>
				<input type="button" value="Db" onclick="randomNote(this.value)"/>
				<input type="button" value="Eb" onclick="randomNote(this.value)"/>
				<input id="Fb" type="button" value="Fb" onclick="randomNote(this.value)"/>
				<input type="button" value="Gb" onclick="randomNote(this.value)"/>
				<input type="button" value="Ab" onclick="randomNote(this.value)"/>
				<input type="button" value="Bb" onclick="randomNote(this.value)"/>
			</div>
			<hr/>
		</div>
		<script src="notationtraining.js"></script>
	</body>
</html>
