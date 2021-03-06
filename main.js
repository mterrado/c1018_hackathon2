$(document).ready(initializeApp);

var responseData;

function initializeApp() {
    console.log('Initializing App...');
    // getDataFromServer();
    $(".youtubeIframe").attr('src','');
    $(".modalFooter").empty();
    
    $(".movieTitle").remove();

    var modal = $('.modalPageContainer');
    
    $(".close-modal").click((event)=>{
        if($(event.target).hasClass("close-modal")) {
            $("body").css('overflow', 'visible');
            $(".movieTitle").remove();
            $(".youtubeIframe").attr('src','');
            $(".modalFooter").empty();
            $(".left-modal").css({'left' : 0});
            $(".map-main-container").css({'right':'-100%'})
            $("#pac-input").remove();
            $("#map").remove();
            modal.hide();
            updateUrl();
        }
            
    })
    
    $('.findTickets').click(function () {
        // initMap();

        var searchBarElement = $('<input>', {
            id:"pac-input",
            class:"controls",
            type:"text",
            placeholder:"Search for Theatres By Location"
        })

        var mapElement = $('<div>', {
            id: 'map'
        })

        $('.map-container').append(searchBarElement, mapElement);
        movieMap.initMap();
        $('.left-modal').animate({'left': '-100%' }, "slow");
        $(".map-main-container").animate({ "right": 0 }, "slow");
    });


}

function updateUrl(movieInfo) {
    if (!movieInfo){
        window.history.replaceState({},'',location.pathname);
    }else{
    window.history.replaceState({}, '', `?movieId=${movieInfo}`);
    }
}
// function getDataFromServer() {
//     console.log('hi');
//     var settings = {
//         url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=fb2158f8324ad535f0c817ef2fb98040',
//         dataType: 'json',
//         method: 'get',
//         success: function(response) {
//             console.log(response);
//             responseData = response.results;
//             fillMovieInformation(responseData);
//             getActorInformation(responseData);
//         }

//     }

//     $.ajax(settings);
// }

// function fillMovieInformation(movieArray) {

//     $('.movieTitle').text(movieArray[0].title);
//     console.log($('.movieTitle').text());
//     $('.movieDescription').text(movieArray[0].overview);
//     console.log($('.movieDescription').text());


// }

// function getActorInformation(movieArray) {
//     console.log('getactor', movieArray);
//     var movieId = movieArray[0].id;
//     console.log(movieId);

//     var settings = {
//         url: `http://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fb2158f8324ad535f0c817ef2fb98040`,
//         dataType: 'json',
//         method: 'get',
//         success: function(response) {
//             console.log('getActorSuccess', response);
//             getActorPictures(response.cast);
            
//         },
//         error: function(response){
//             console.log('error');
//         }
//     }

//     $.ajax(settings);

    

// }

// function getActorPictures(movieArray) {
//     console.log('movieArray', movieArray);
//     var actorId = movieArray[0].id;

//     var settings = {
//         url: `http://api.themoviedb.org/3/person/${actorId}/images?api_key=fb2158f8324ad535f0c817ef2fb98040`,
//         dataType: 'json',
//         method: 'get',
//         success: function(response) {
//             console.log('actorImages', response);

//             var image = $('<img>', {
//                 class: 'actorImage',
//                 height: '80%',
//                 width: '15%',
//                 src: `https://image.tmdb.org/t/p/w440_and_h660_bestv2/${response.profiles[0].file_path}`
//             });
            
//             var image2 = $('<img>', {
//                 class: 'actorImage',
//                 height: '80%',
//                 width: '15%',
//                 src: `https://image.tmdb.org/t/p/w440_and_h660_bestv2/${response.profiles[0].file_path}`
//             });

//             var image3 = $('<img>', {
//                 class: 'actorImage',
//                 height: '80%',
//                 width: '15%',
//                 src: `https://image.tmdb.org/t/p/w440_and_h660_bestv2/${response.profiles[0].file_path}`
//             });

//             var image4 = $('<img>', {
//                 class: 'actorImage',
//                 height: '80%',
//                 width: '15%',
//                 src: `https://image.tmdb.org/t/p/w440_and_h660_bestv2/${response.profiles[0].file_path}`
//             });

//             var image5 = $('<img>', {
//                 class: 'actorImage',
//                 height: '80%',
//                 width: '15%',
//                 src: `https://image.tmdb.org/t/p/w440_and_h660_bestv2/${response.profiles[0].file_path}`
//             });

//             $('.modalFooter').append(image, image2, image3, image4, image5);
           
            
//         },
//         error: function(response){
//             console.log('error');
//         }
//     }

//     $.ajax(settings);

// }
