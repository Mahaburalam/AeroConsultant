function initializeMap() {
    "use strict";
    var e = window.jQuery;
    function t() {
        var t=new InfoBox;
        function o(e, t, o, l, i, s) {
            return '<a href="'+e+'" class="listing-img-container"><div class="infoBox-close"><i class="fa fa-times"></i></div><img src="'+t+'" alt=""><div class="rate-info"> <h5>$550.000</h5> <span>For Rent</span> </div><div class="listing-item-content"><h3>'+o+"</h3><span><i class='la la-map-marker'></i>"+l+"</span></div></a>"
        }
        function fetch_list_of_elements(elem_list){
            return elem_list.substring(1, elem_list.length - 1);    
        }
        function fetch_first_element(list_of_elements){
            return list_of_elements.match(/\"(.*?)\"/g)[0];
        }
        function fetch_second_element(list_of_elements){
            return list_of_elements.match(/,\s*\-?(\d+.\d+),/g)[0];
        }
        function clean_second_element(second_elem){
            return second_elem.substring(1, second_elem.length - 1).trim();
        }
        function fetch_third_element(list_of_elements){
            return list_of_elements.match(/\s*\-?(\d+.\d+),/g)[0];
        }
        function clean_third_element(third_elem){
            return third_elem.substring(1, third_elem.length - 1).trim();
        }
        function fetch_fourth_element(list_of_elements){
            return list_of_elements.match(/\s*(\d+),/g)[0];
        }                                                                                                                                                                                                                                                                                                                                                                       
        function clean_fourth_element(fourth_elem){
            return fourth_elem.substring(1, fourth_elem.length - 1).trim();
        }
        function get_list_of_element_substring(list_of_elements, element_to_remove){
            return list_of_elements.replace(element_to_remove,"")
        }

        function convert_elemt_to_list(elem_list){
            var list_of_elements = fetch_list_of_elements(elem_list)
            var first_elem = fetch_first_element(list_of_elements);
            list_of_elements = get_list_of_element_substring(list_of_elements, first_elem);
            var second_elem = fetch_second_element(list_of_elements);
            list_of_elements = get_list_of_element_substring(list_of_elements, second_elem);
            second_elem = clean_second_element(second_elem);
            var third_elem = fetch_third_element(list_of_elements);
            list_of_elements = get_list_of_element_substring(list_of_elements, third_elem);
            third_elem = clean_third_element(third_elem);
            var fourth_elem = list_of_elements.match(/\s*(\d+),/g)[0];
            fourth_elem = fourth_elem.substring(1, fourth_elem.length - 1).trim();
            return [first_elem,parseFloat(second_elem),parseFloat(third_elem),parseFloat(fourth_elem),"<i class=\"la la-plane\"></i>"]
        }
        var map_marker_obj = e("#map").attr("marker-html");
        // console.log(map_marker_obj);
        var extract_small_list_all = map_marker_obj.substring(1, map_marker_obj.length - 1);
        var list_of_small_list = extract_small_list_all.match(/\[(.*?)\]/g);

        var list_result = [], i=-1;
        for ( var i = 0; i < list_of_small_list.length; i++ ) {
            // console.log(list_of_small_list.length)
            // console.log(list_of_small_list[i])
            list_result.push(convert_elemt_to_list(list_of_small_list[i]));
        }
        // var first_elem_list = list_of_small_list[0]
        // console.log(list_result);
        // console.log(map_marker_match_0_all_all);
        var latitude=e("#map").attr("data-map-center-lat");
        var longitude=e("#map").attr("data-map-center-long");
        var l= list_result,

        i=e("#map").attr("data-map-zoom"),
        a=e("#map").attr("data-map-scroll");
        
        if(void 0!==i&&!1!==i)var n=parseInt(i);
        else n=10;
        if(void 0!==a&&!1!==a)var r=parseInt(a);
        else r=!1;
        // console.log("n")
        var m=new google.maps.Map(document.getElementById("map"), {
            zoom:n, scrollwheel:r, center:new google.maps.LatLng(parseFloat(latitude), parseFloat(longitude)), mapTypeId:google.maps.MapTypeId.ROADMAP, zoomControl:!1, mapTypeControl:!1, scaleControl:!1, panControl:!1, navigationControl:!1, streetViewControl:!1, gestureHandling:"cooperative", styles:[ {
                featureType:"water", elementType:"geometry", stylers:[ {
                    color: "#e9e9e9"
                }
                , {
                    lightness: 17
                }
                ]
            }
            , {
                featureType:"landscape", elementType:"geometry", stylers:[ {
                    color: "#f5f5f5"
                }
                , {
                    lightness: 20
                }
                ]
            }
            , {
                featureType:"road.highway", elementType:"geometry.fill", stylers:[ {
                    color: "#ffffff"
                }
                , {
                    lightness: 17
                }
                ]
            }
            , {
                featureType:"road.highway", elementType:"geometry.stroke", stylers:[ {
                    color: "#ffffff"
                }
                , {
                    lightness: 29
                }
                , {
                    weight: .2
                }
                ]
            }
            , {
                featureType:"road.arterial", elementType:"geometry", stylers:[ {
                    color: "#ffffff"
                }
                , {
                    lightness: 18
                }
                ]
            }
            , {
                featureType:"road.local", elementType:"geometry", stylers:[ {
                    color: "#ffffff"
                }
                , {
                    lightness: 16
                }
                ]
            }
            , {
                featureType:"poi", elementType:"geometry", stylers:[ {
                    color: "#f5f5f5"
                }
                , {
                    lightness: 21
                }
                ]
            }
            , {
                featureType:"poi.park", elementType:"geometry", stylers:[ {
                    color: "#dedede"
                }
                , {
                    lightness: 21
                }
                ]
            }
            , {
                elementType:"labels.text.stroke", stylers:[ {
                    visibility: "on"
                }
                , {
                    color: "#ffffff"
                }
                , {
                    lightness: 16
                }
                ]
            }
            , {
                elementType:"labels.text.fill", stylers:[ {
                    saturation: 36
                }
                , {
                    color: "#333333"
                }
                , {
                    lightness: 40
                }
                ]
            }
            , {
                elementType:"labels.icon", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"transit", elementType:"geometry", stylers:[ {
                    color: "#f2f2f2"
                }
                , {
                    lightness: 19
                }
                ]
            }
            , {
                featureType:"administrative", elementType:"geometry.fill", stylers:[ {
                    color: "#fefefe"
                }
                , {
                    lightness: 20
                }
                ]
            }
            , {
                featureType:"administrative", elementType:"geometry.stroke", stylers:[ {
                    color: "#fefefe"
                }
                , {
                    lightness: 17
                }
                , {
                    weight: 1.2
                }
                ]
            }
            ]
        }
        );
e(".listing-item-container").on("mouseover", function() {
    if(void 0!==e(this).data("marker-id")) {
        var t=e(this).data("marker-id")-1, o=f[t].div;
        e(o).addClass("clicked"), e(this).on("mouseout", function() {
            e(o).is(":not(.infoBox-opened)")&&e(o).removeClass("clicked")
        }
        )
    }
}
);
        //set zoom level
        // m.setOptions({ minZoom: 2, maxZoom: 6 });

        var g=document.createElement("div");
        g.className="map-box";
        var p,
        c,
        d= {
            content:g,
            disableAutoPan:!1,
            alignBottom:!0,
            maxWidth:0,
            pixelOffset:new google.maps.Size(-148, -55),
            zIndex:null,
            boxStyle: {
                width: "295px"
            }
            ,
            closeBoxMargin:"0",
            closeBoxURL:"",
            infoBoxClearance:new google.maps.Size(25, 25),
            isHidden:!1,
            pane:"floatPane",
            enableEventPropagation:!1
        }
        ,
        f=[];
        for(p=0;
            p<l.length;
            p++) {
            c=l[p][4];
        var y=new s(new google.maps.LatLng(l[p][1], l[p][2]), m, {
            marker_id: p
        }
        , c);
        f.push(y),
        google.maps.event.addDomListener(y, "click", function(o, i) {
            return function() {
                var open = false;
                if(typeof l[i].open != 'undefined')
                    open = l[i].open;

                jQuery.each(l, function(){
                    this.open = false;
                })

                t.close();
                if(open){
                    l[i].open = false;
                    return false;
                }
                l[i].open = true;

                // t.setOptions(d), g.innerHTML=l[i][0], t.open(m, o), l[i][3], google.maps.event.addListener(t, "domready", function() {
                //     e(".infoBox-close").click(function(o) {
                //         o.preventDefault(), t.close(), e(".map-marker-container").removeClass("clicked infoBox-opened")
                //     }
                //     )
                // }
                // )
            }
        }
        (y, p))
    }
    new MarkerClusterer(m, f, {
        imagePath:"images/", styles:[ {
            textColor: "white", url: "", height: 50, width: 50
        }
        ], minClusterSize:2
    }
    ),
    google.maps.event.addDomListener(window, "resize", function() {
        var e=m.getCenter();
        google.maps.event.trigger(m, "resize"), m.setCenter(e)
    }
    );
    var u=document.createElement("div");
    new function(e, t) {
        u.index=1,
        t.controls[google.maps.ControlPosition.RIGHT_CENTER].push(u),
        e.style.padding="5px",
        e.className="zoomControlWrapper";
        var o=document.createElement("div");
        e.appendChild(o);
        var l=document.createElement("div");
        l.className="custom-zoom-in",
        o.appendChild(l);
        var i=document.createElement("div");
        i.className="custom-zoom-out",
        o.appendChild(i),
        google.maps.event.addDomListener(l, "click", function() {
            t.setZoom(t.getZoom()+1)
        }
        ),
        google.maps.event.addDomListener(i, "click", function() {
            t.setZoom(t.getZoom()-1)
        }
        )
    }
    (u, m);
    var v=e("#scrollEnabling");
    e(v).click(function(t) {
        t.preventDefault(), e(this).toggleClass("enabled"), e(this).is(".enabled")?m.setOptions( {
            scrollwheel: !0
        }
        ):m.setOptions( {
            scrollwheel: !1
        }
        )
    }
    ),
    e("#geoLocation, .input-with-icon.location a").click(function(e) {
        e.preventDefault(), navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e) {
            var t=new google.maps.LatLng(e.coords.latitude, e.coords.longitude);
            m.setCenter(t), m.setZoom(12)
        }
        )
    }
    )
}
var o=document.getElementById("map");
function l() {
    var t=new google.maps.LatLng( {
        lng: e("#singleListingMap").data("longitude"), lat: e("#singleListingMap").data("latitude")
    }
    ),
    o=new google.maps.Map(document.getElementById("singleListingMap"), {
        zoom:15, center:t, scrollwheel:!1, zoomControl:!1, mapTypeControl:!1, scaleControl:!1, panControl:!1, navigationControl:!1, streetViewControl:!1, styles:[ {
            featureType:"poi", elementType:"labels.text.fill", stylers:[ {
                color: "#747474"
            }
            , {
                lightness: "23"
            }
            ]
        }
        , {
            featureType:"poi.attraction", elementType:"geometry.fill", stylers:[ {
                color: "#f38eb0"
            }
            ]
        }
        , {
            featureType:"poi.government", elementType:"geometry.fill", stylers:[ {
                color: "#ced7db"
            }
            ]
        }
        , {
            featureType:"poi.medical", elementType:"geometry.fill", stylers:[ {
                color: "#ffa5a8"
            }
            ]
        }
        , {
            featureType:"poi.park", elementType:"geometry.fill", stylers:[ {
                color: "#c7e5c8"
            }
            ]
        }
        , {
            featureType:"poi.place_of_worship", elementType:"geometry.fill", stylers:[ {
                color: "#d6cbc7"
            }
            ]
        }
        , {
            featureType:"poi.school", elementType:"geometry.fill", stylers:[ {
                color: "#c4c9e8"
            }
            ]
        }
        , {
            featureType:"poi.sports_complex", elementType:"geometry.fill", stylers:[ {
                color: "#b1eaf1"
            }
            ]
        }
        , {
            featureType:"road", elementType:"geometry", stylers:[ {
                lightness: "100"
            }
            ]
        }
        , {
            featureType:"road", elementType:"labels", stylers:[ {
                visibility: "off"
            }
            , {
                lightness: "100"
            }
            ]
        }
        , {
            featureType:"road.highway", elementType:"geometry.fill", stylers:[ {
                color: "#ffd4a5"
            }
            ]
        }
        , {
            featureType:"road.arterial", elementType:"geometry.fill", stylers:[ {
                color: "#ffe9d2"
            }
            ]
        }
        , {
            featureType:"road.local", elementType:"all", stylers:[ {
                visibility: "simplified"
            }
            ]
        }
        , {
            featureType:"road.local", elementType:"geometry.fill", stylers:[ {
                weight: "3.00"
            }
            ]
        }
        , {
            featureType:"road.local", elementType:"geometry.stroke", stylers:[ {
                weight: "0.30"
            }
            ]
        }
        , {
            featureType:"road.local", elementType:"labels.text", stylers:[ {
                visibility: "on"
            }
            ]
        }
        , {
            featureType:"road.local", elementType:"labels.text.fill", stylers:[ {
                color: "#747474"
            }
            , {
                lightness: "36"
            }
            ]
        }
        , {
            featureType:"road.local", elementType:"labels.text.stroke", stylers:[ {
                color: "#e9e5dc"
            }
            , {
                lightness: "30"
            }
            ]
        }
        , {
            featureType:"transit.line", elementType:"geometry", stylers:[ {
                visibility: "on"
            }
            , {
                lightness: "100"
            }
            ]
        }
        , {
            featureType:"water", elementType:"all", stylers:[ {
                color: "#d2e7f7"
            }
            ]
        }
        ]
    }
    );
    e("#streetView").click(function(e) {
        e.preventDefault(), o.getStreetView().setOptions( {
            visible: !0, position: t
        }
        )
    }
    );
    var l=document.createElement("div");
    new function(e, t) {
        l.index=1,
        t.controls[google.maps.ControlPosition.RIGHT_CENTER].push(l),
        e.style.padding="5px";
        var o=document.createElement("div");
        e.appendChild(o);
        var i=document.createElement("div");
        i.className="custom-zoom-in",
        o.appendChild(i);
        var s=document.createElement("div");
        s.className="custom-zoom-out",
        o.appendChild(s),
        google.maps.event.addDomListener(i, "click", function() {
            t.setZoom(t.getZoom()+1)
        }
        ),
        google.maps.event.addDomListener(s, "click", function() {
            t.setZoom(t.getZoom()-1)
        }
        )
    }
    (l, o);
    var i="<i class='"+e("#singleListingMap").data("map-icon")+"'></i>";
    new s(t, o, {
        marker_id: "1"
    }
    , i)
}
void 0!==o&&null!=o&&(google.maps.event.addDomListener(window, "load", t), google.maps.event.addDomListener(window, "resize", t));
var i=document.getElementById("singleListingMap");
function s(e, t, o, l) {
    this.latlng=e,
    this.args=o,
    this.markerIco=l,
    this.setMap(t)
}
void 0!==i&&null!=i&&(google.maps.event.addDomListener(window, "load", l), google.maps.event.addDomListener(window, "resize", l)),
s.prototype=new google.maps.OverlayView,
s.prototype.draw=function() {
    var t=this,
    o=this.div;
    o||((o=this.div=document.createElement("div")).className="map-marker-container", o.innerHTML='<div class="marker-container"><div class="marker-card"><div class="front face">'+t.markerIco+'</div><div class="back face">'+t.markerIco+'</div><div class="marker-arrow"></div></div></div>', google.maps.event.addDomListener(o, "click", function(o) {
        var open = false;
        if(e(this).hasClass("infoBox-opened"))
            open = true;
        e(".map-marker-container").removeClass("clicked infoBox-opened"), 
        google.maps.event.trigger(t, "click");
        if(!open){
            e(this).addClass("clicked infoBox-opened");
        }
    }
    ), void 0!==t.args.marker_id&&(o.dataset.marker_id=t.args.marker_id), this.getPanes().overlayImage.appendChild(o));
    var l=this.getProjection().fromLatLngToDivPixel(this.latlng);
    l&&(o.style.left=l.x+"px", o.style.top=l.y+"px")
}
,
s.prototype.remove=function() {
    this.div&&(this.div.parentNode.removeChild(this.div), this.div=null, e(this).removeClass("clicked"))
}
,
s.prototype.getPosition=function() {
    return this.latlng
}
}
