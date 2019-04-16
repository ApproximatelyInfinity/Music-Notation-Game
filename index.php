 <?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<?php include 'includes/header.php'; ?>
		<meta name="description" content="Begin your melodic odyssey with a host of FREE beginner lessons. Here you will find lessons on a variety of instruments. Whether you're looking to advance your skills or just beginning your journey, Melodic Odyssey has something for everyone." />
	</head>
	<body>
		<?php 
			if (!isset($_SESSION['username'])) {
				include 'includes/navbar_login.php';
			}else{
				include 'includes/navbar_logout.php';
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
						<div class="col-sm-6">
							<br/>
							<p id="right"></p>
						</div>
						<div class="col-sm-6">
							<br/>
							<p id="wrong"></p>
						</div>
					</div>
					<hr/>
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
					<button id="btn1">Toggle Sharps</button>
					<button id="btn2">Toggle Flats</button>
					<button id="btn3">Toggle Enharmonics</button>
					<hr/>
					<div class="col-sm-6">
						<p id="test"></p>
					</div>
					<div class="col-sm-6">
						<p id="test2"></p>
					</div>
					<div class="col-sm-6">
						<p id="test3" style="color:green;">0</p>
					</div>
					<div class="col-sm-6">
						<p id="test4" style="color:red;">0</p>
					</div>
					<br/>
				</div>
				<div style="padding-top: 64px"></div>
			</div>
		</div>
		<?php include "includes/footer.php"; ?>
	</body>
</html>
