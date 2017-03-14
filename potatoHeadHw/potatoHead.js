/*global $*/
(function () {
    'use strict';
    var partsArray = [],
        placementArray = [],
        body = $('#body'),
        //pbody = document.getElementsByClassName('body');
        pbody = document.querySelector(".body");
    
   function placeParts() {
        var x = 0,
            y = 0;
        partsArray.forEach(function (part) {
            part.css({ top: y, left: x });
            x += 170;
            if (x > 171) {
                x = 0;
                y += 170;
            }
        });
    }
    $.getJSON('potatoHead.php', function (parts) {
        parts.forEach(function (part) {
            partsArray.push($('<img  src="parts/' + part + '" class="parts draggable">').appendTo(body));
            console.log('part', part);
        });
        console.log('partsArray', partsArray);
        var dragging,
            offset,
            place,
            highestZindex = 0;
        $(document).on('mousedown', '.draggable', function (event) {
            dragging = $(this);
            place = { top: event.clientY, left: event.clientX };
            if ($(this).hasClass("parts")) { dragging.css('zIndex', ++highestZindex); }
            offset = { top: event.offsetY, left: event.offsetX };
        }).on('mouseup', '.draggable', function (event) {
            dragging = null;
        });
        $(document).mousemove(function (event) {
            if (dragging) {
                dragging.css({ top: event.clientY - offset.top, left: event.clientX - offset.left });
                console.log('top', ({ top: event.clientY - offset.top, left: event.clientX - offset.left }));
                console.log({ top: event.clientY - offset.top }, ({ left: event.clientX - offset.left }));

                event.preventDefault();


                //console.log('partsArray',partsArray);
                localStorage.placements = JSON.stringify(partsArray.map(function (part) {
                    //console.log('src:', part.attr('src'));
                    return {
                        src: part.attr('src'),
                        x: part.css('left'),
                        y: part.css('top')
                    };
                }));
                placementArray = partsArray.map(function (part) {
                    //console.log('src:', part.attr('src'));
                    return {
                        src: part.attr('src'),
                        x: part.css('left'),
                        y: part.css('top')
                    };//var element = document.getElementById('some-id');

                });


                
            }
        });
     /*   if (localStorage.placements) {
            var oldParts = JSON.parse(localStorage.placements);
            partsArray.forEach(function (part) {

                var oldPart = oldParts.find(function (oldPart) {
                    return 'http://localhost/hwjs/hw_12_18/' + oldPart.src === part[0].src;
                });

                if (oldPart) {
                    part.css({ top: oldPart.y, left: oldPart.x });
                }
            });
        } else { */
            placeParts();
     //  }
        
    });
} ()); 