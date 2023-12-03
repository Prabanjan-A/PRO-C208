canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.avif","nasa_image_3.webp","nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("backgrond_image = " + background_image);
rover_image = "rover.png"