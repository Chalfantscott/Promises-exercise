$(function() {
    var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];
    $.get("https://dog.ceo/api/breed/beagle/images/random")
    .then(function(value){
        console.log(value);
        console.log("data was fetched");
        return $.get("https://dog.ceo/api/breed/beagle/images/random");
    }).then(function(value){
        console.log(value);
        console.log("second data was fetched");
        return $.get('https://dog.ceo/api/breed/chow/images/random');
    }).then(function(value){
        console.log(value);
        console.log("third data was fetched");
        return $.get('https://dog.ceo/api/breed/akita/images/random');
    }).then(function(value){
        console.log(value);
        console.log("fourth data was fetched");
        return $.get('https://dog.ceo/api/breed/dingo/images/random');
    }).then(function(value){
        console.log(value);
        console.log("fifth data was fetched");
        return $.get('https://dog.ceo/api/breed/eskimo/images/random');
    })
    .catch(function(error) {
        console.log(error)
    });

});