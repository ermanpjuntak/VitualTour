var container = document.querySelector('#container');
var panorama = new PANOLENS.ImagePanorama('gambar1.jpg');
var panorama2 = new PANOLENS.ImagePanorama('gambar2.jpg');
var panorama3 = new PANOLENS.ImagePanorama('gambar3.jpg');

var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama, panorama2, panorama3);

var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
panorama.add(infospot);


infospot.addEventListener('click', function() {
    viewer.setPanorama(panorama2);
});

var infospott = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospott.position.set(0, -2000, -5000);
panorama2.add(infospott);


infospott.addEventListener('click', function() {
    viewer.setPanorama(panorama3);
});

var infospottt = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospottt.position.set(0, -2000, -5000);
panorama3.add(infospottt);


infospottt.addEventListener('click', function() {
    viewer.setPanorama(panorama);
});