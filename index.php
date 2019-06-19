 <?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<?php include 'header.php'; ?>
		<meta name="description" content="Begin your melodic odyssey with a host of FREE beginner lessons. Here you will find lessons on a variety of instruments. Whether you're looking to advance your skills or just beginning your journey, Melodic Odyssey has something for everyone." />
	</head>
	<body>
		<?php 
			if (!isset($_SESSION['username'])) {
				include 'navbar_login.php';
			}else{
				include 'navbar_logout.php';
			}
		?>
		<div class="content">
			<div class="main">
				<div class="container" style="background-color: white;">
					<div class="padding" style="padding-top:70px"></div>
					<h1 align="center">Notation Training</h1> 
					<hr/>
					<div class="notation-image-container row no-gutter" align="center">
						<div class="col-sm-12">
							<img id="myImage" class="notation-image" src=""/>
						</div>
					</div>
					<hr/>
					<div class="row no-gutter">
						<div class="col-sm"></div>
						<div class="col-sm">
							<p id="right" align="right" style="color: green; font-size: 24px;"><b>0</b></p>
						</div>
						<div class="col-sm">
							<input style="height: 24px; width: 24px; margin-left: 45%;" type="image" onclick="playAudio()" align="center" src="https://www.melodicodyssey.com/assets/images/icons/play-button.png"/>
							<audio id="audio">
								<source src="" type="audio/mp3">
							</audio>
						</div>
						<div class="col-sm">
							<p id="wrong" style="color: red; font-size: 24px; float:left;"><b>0</b></p>
							<input id="settings" type="image" align="left" src="https://www.melodicodyssey.com/assets/images/icons/settings.png" style="float:right;"/>
						</div>
						<div class="col-sm"></div>
					</div>
					<div id="settings-menu" class="row no-gutter">
						<div class="row no-gutter">
							<div class="col-sm">
								<p style="font-size: 20px; margin-bottom: -5%;">Notes</p><hr/>
								<div class="row no-gutter">
									<div class="col-sm">
										<p class="settings-menu-text">Sharps</p>
										<button id="btn1" class="btn-xs settings-menu-btn">Disable</button>
									</div>
								</div>
								<div class="row no-gutter">
									<div class="col-sm">
										<p class="settings-menu-text">Flats</p>
										<button id="btn2" class="btn-xs settings-menu-btn">Disable</button>
									</div>
								</div>
								<div class="row no-gutter">
									<div class="col-sm">
										<p class="settings-menu-text">Enharmonics</p>
										<button id="btn3" class="btn-xs settings-menu-btn">Disable</button>
									</div>
								</div>
							</div>
							<div class="col-sm">
								<p style="font-size: 20px; margin-bottom: -5%;">Staves</p><hr/>
								<div class="row no-gutter">
									<div class="col-sm">
										<p class="settings-menu-text">Grand</p>
										<button id="grand" class="btn-xs settings-menu-btn">Disable</button>
									</div>
								</div>
								<div class="row no-gutter">
									<div class="col-sm">
										<p class="settings-menu-text">Treble</p>
										<button id="btn4" class="btn-xs settings-menu-btn">Disable</button>
									</div>
								</div>
								<div class="row no-gutter">
									<div class="col-sm">
										<p class="settings-menu-text">Bass</p>
										<button id="btn5" class="btn-xs settings-menu-btn">Disable</button>
									</div>
								</div>
							</div>
						</div>	
					</div>
					<div class="row no-gutter" align="center">
						<div id="sharp" class="col-sm-12">
							<input class="btn btn-purple" type="button" value="C#" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="D#" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" id="E#" type="button" value="E#" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="F#" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="G#" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="A#" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" id="B#" type="button" value="B#" onclick="randomNote(this.value)"/>
						</div>
						<div id="natural" class="col-sm-12">
							<input class="btn btn-gold" type="button" value="C" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="D" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="E" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="F" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="G" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="A" onclick="randomNote(this.value)"/>
							<input class="btn btn-gold" type="button" value="B" onclick="randomNote(this.value)"/>
						</div>
						<div id="flat" class="col-sm-12">
							<input class="btn btn-purple" id="Cb" type="button" value="Cb" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="Db" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="Eb" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" id="Fb" type="button" value="Fb" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="Gb" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="Ab" onclick="randomNote(this.value)"/>
							<input class="btn btn-purple" type="button" value="Bb" onclick="randomNote(this.value)"/>
						</div>
					</div>
					<hr/>
				</div>
				<div style="padding-top: 64px"></div>
			</div>
		</div>
		<?php include "footer.php"; ?>
	</body>
</html>
