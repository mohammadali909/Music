let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

let track = document.createElement('audio');


let All_song = [{
		name: "Mehbooba",
		path: "music/song-1.mp3",
		img: "image/image-1.jpg",
		singer: "Ananya Bhat, Ravi Basrur"
	},
	{
		name: "Mari Zindagi Ha Tu",
		path: "music/song-2.mp3",
		img: "image/image-2.jpg",
		singer: "Jubin Nautiyal, Neeti Mohan"
	},
	{
		name: "Chura Liya ",
		path: "music/song-3.mp3",
		img: "image/image-3.jpg",
		singer: "Asha Bhosle"
	},
	{
		name: "Tujh Mein Rab Dikhta Hai ",
		path: "music/song-4.mp3",
		img: "image/image-4.jpg",
		singer: " Roopkumar Rathod, Jay Kadn"
	},
	{
		name: "Maan Mari Jan ",
		path: "music/song-5.mp3",
		img: "image/image-5.jpg",
		singer: " King"
	},
	{
		name: "Rabba Janda ",
		path: "music/song-6.mp3",
		img: "image/image-6.jpg",
		singer: "Jubin Nautiyal, Tanishk Bagchi"
	},
	{
		name: "Main Ager Kahoo ",
		path: "music/song-7.mp3",
		img: "image/image-7.jpg",
		singer: "Shreya Ghoshal, Sonu Nigam"
	},
	{
		name: "Tera Fitoor ",
		path: "music/song-8.mp3",
		img: "image/image-8.jpg",
		singer: " Arijit Singh"
	},
	{
		name: "Suraj Hua Maddham ",
		path: "music/song-9.mp3",
		img: "image/image-9.jpg",
		singer: "Sonu Nigam, Alka Yagnik"
	},
	{
		name: "Kashmir Main Tu  ",
		path: "music/song-10.mp3",
		img: "image/image-10.jpg",
		singer: "Arijit Singh, Sunidhi Chauhan"
	},
	{
		name: "Jhoome Jo Pathaan ",
		path: "music/song-11.mp3",
		img: "image/image-11.jpg",
		singer: "Arijit Singh, Sukriti Kakar"
	},
	{
		name: "Dil Diyan Gallan ",
		path: "music/song-12.mp3",
		img: "image/image-12.png",
		singer: "Atif Aslam"
	},
	{
		name: "Jhaanjar ",
		path: "music/song-13.mp3",
		img: "image/image-13.jpg",
		singer: "B Praak"
	},
	{
		name: "Koi Mil Gaya ",
		path: "music/song-14.mp3",
		img: "image/image-14.jpg",
		singer: "Jatin-Lalit"
	},
	{
		name: "Ao Sunao Piyar Ki Ek Kahani ",
		path: "music/song-15.mp3",
		img: "image/image-15.jpg",
		singer: "Shreya Ghoshal, Sonu Nigam"
	},
	{
		name: "Tiwst ",
		path: "music/song-16.mp3",
		img: "image/image-16.jpg",
		singer: "Neeraj Shridhar "
	},
	{
		name: "O O Jaane Jaana ",
		path: "music/song-17.mp3",
		img: "image/image-17.jpg",
		singer: " Kamaal Khan "
	},
	{
		name: "Paniyon Sa ",
		path: "music/song-18.mp3",
		img: "image/image-18.jpg",
		singer: " Atif Aslam, Tulsi Kumar "
	},
	{
		name: "Jag Ghoomeya ",
		path: "music/song-19.mp3",
		img: "image/image-19.jpg",
		singer: " Rahat Fateh Ali Khan, Vishal-Shekhar "
	},
];


function load_track(index_no) {
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;
	track_image.src = All_song[index_no].img;
	artist.innerHTML = All_song[index_no].singer;
	track.load();

	timer = setInterval(range_slider, 1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


function mute_sound() {
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


function justplay() {
	if (Playing_song == false) {
		playsong();

	} else {
		pausesong();
	}
}


function reset_slider() {
	slider.value = 0;
}

function playsong() {
	track.play();
	Playing_song = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

function pausesong() {
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


function next_song() {
	if (index_no < All_song.length - 1) {
		index_no += 1;
		load_track(index_no);
		playsong();
	} else {
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


function previous_song() {
	if (index_no > 0) {
		index_no -= 1;
		load_track(index_no);
		playsong();

	} else {
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}


function change_duration() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

function range_slider() {
	let position = 0;

	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}

}