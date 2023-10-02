
var viewer = null;

var player = null;

var player2 = null;

window.onload = function() {

viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "autoLoad": true,
    "default": {
        "firstScene": "start",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "start": {
            "title": "Startseite",
            "hfov": 110,
            "pitch": 0,
            "yaw": 360,
            "type": "equirectangular",
            "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/82018/raw/media-82018-raw.png",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 90.0,
                    "type": "scene",
                    "text": "Impressum",
                    "sceneId": "impressum_1",
                    "cssClass": "impressum",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },

                {
                    "pitch": 0,
                    "yaw": -90.0,
                    "type": "info",
                    "text": "Förderung",
                    "cssClass": "bund",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },

                {
                    "pitch": 11.5,
                    "yaw": 0.5,
                    "type": "scene",
                    "text": "OnBoarding",
                    "sceneId": "onboarding",
                    "cssClass": "onBoarding",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                }

            ]
        },
        "impressum_1": {
            "title": "Impressum",
            "hfov": 110,
            "pitch": 0,
            "yaw": 360,
            "type": "equirectangular",
            "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/82018/raw/media-82018-raw.png",
            "hotSpots": [

                {
                    "pitch": 0,
                    "yaw": 360.0,
                    "type": "info",
                    "text": "Seite_1",
                    "cssClass": "page_1",
                    "clickHandlerFunc": onHotspotClick
                },

                {
                    "pitch": -20,
                    "yaw": 40.0,
                    "type": "scene",
                    "sceneId": "impressum_2",
                    "cssClass": "forward",
                    "clickHandlerFunc": onHotspotClick
                },

                {
                    "pitch": 0,
                    "yaw": 80.0,
                    "type": "scene",
                    "sceneId": "start",
                    "cssClass": "menu",
                    "clickHandlerFunc": onHotspotClick
                }

            ]
    },
    "impressum_2": {
            "title": "Impressum",
            "hfov": 110,
            "pitch": 0,
            "yaw": 360,
            "type": "equirectangular",
            "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/82018/raw/media-82018-raw.png",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 360.0,
                    "type": "info",
                    "text": "Seite_2",
                    "cssClass": "page_2",
                    "clickHandlerFunc": onHotspotClick
                },

                {
                    "pitch": -20,
                    "yaw": 40.0,
                    "type": "scene",
                    "sceneId": "impressum_3",
                    "cssClass": "forward",
                    "clickHandlerFunc": onHotspotClick
                },

                {
                    "pitch": 0,
                    "yaw": 80.0,
                    "type": "scene",
                    "sceneId": "start",
                    "cssClass": "menu",
                    "clickHandlerFunc": onHotspotClick
                },

                {
                    "pitch": -20,
                    "yaw": 320,
                    "type": "scene",
                    "sceneId": "impressum_1",
                    "cssClass": "backward",
                    "clickHandlerFunc": onHotspotClick
                }
            ]
    },
    "impressum_3": {
            "title": "Impressum",
            "hfov": 110,
            "pitch": 0,
            "yaw": 360,
            "type": "equirectangular",
            "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/82018/raw/media-82018-raw.png",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 360.0,
                    "type": "info",
                    "text": "Seite_3",
                    "cssClass": "page_3",
                    "clickHandlerFunc": onHotspotClick
                    },

                {
                    "pitch": 0,
                    "yaw": 80.0,
                    "type": "scene",
                    "sceneId": "start",
                    "cssClass": "menu",
                    "clickHandlerFunc": onHotspotClick
                },

                {
                    "pitch": -20,
                    "yaw": 320,
                    "type": "scene",
                    "sceneId": "impressum_2",
                    "cssClass": "backward",
                    "clickHandlerFunc": onHotspotClick
                }
            ]
    },
    "onboarding": {
            "title": "OnBoarding",
            "hfov": 110,
            "pitch": 0,
            "yaw": 360,
            "type": "equirectangular",
            "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92907/raw/media-92907-raw.png",
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 355,
                    "type": "scene",
                    "sceneId": "menü",
                    "cssClass": "home",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Direkt ins Hauptmenü",
                    "clickHandlerFunc": onHotspotClick
                },

                {
                    "pitch": 0,
                    "yaw": 320,
                    "type": "info",
                    "cssClass": "play",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 295,
                    "type": "info",
                    "cssClass": "up",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 270,
                    "type": "info",
                    "cssClass": "backward_",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 245,
                    "type": "info",
                    "cssClass": "forward_",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 220,
                    "type": "info",
                    "cssClass": "home",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 195,
                    "type": "info",
                    "cssClass": "menü",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                
                {
                    "pitch": 0,
                    "yaw": 35,
                    "type": "info",
                    "cssClass": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 60,
                    "type": "info",
                    "cssClass": "audio",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 85,
                    "type": "info",
                    "cssClass": "steckbrief",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 110,
                    "type": "info",
                    "cssClass": "foto",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 135,
                    "type": "info",
                    "cssClass": "drohne",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 160,
                    "type": "info",
                    "cssClass": "turm",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 185,
                    "type": "info",
                    "cssClass": "gehege",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 30,
                    "yaw": 35,
                    "type": "info",
                    "cssClass": "person_1",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 30,
                    "yaw": 325,
                    "type": "info",
                    "cssClass": "person_2",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 30,
                    "yaw": 275,
                    "type": "info",
                    "cssClass": "person_3",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 30,
                    "yaw": 85,
                    "type": "info",
                    "cssClass": "person_4",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick
                },
                
            ]
    },
    "menü": {
            "title": "Hauptmenü",
            "hfov": 110,
            "pitch": 0,
            "yaw": 360,
            "type": "equirectangular",
            "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/82414/raw/media-82414-raw.png",
            "hotSpots": [
            
                {
                    "pitch": 0,
                    "yaw": 45.0,
                    "type": "scene",
                    "sceneid": "",
                    "text": "",
                    "cssClass": "hpt_pinguin",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": 120.0,
                    "type": "scene",
                    "sceneid": "",
                    "text": "",
                    "cssClass": "hpt_pinguin",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 5,
                    "yaw": 355.0,
                    "type": "scene",
                    "sceneId": "Intro_Roter_Panda",
                    "text": "",
                    "cssClass": "hpt_panda",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": -6,
                    "yaw": 325.0,
                    "type": "scene",
                    "sceneId": "Aralandia Intro",
                    "text": "",
                    "cssClass": "hpt_aras",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 5,
                    "yaw": 295.0,
                    "type": "scene",
                    "sceneid": "",
                    "text": "",
                    "cssClass": "hpt_pudus",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": -100.0,
                    "type": "scene",
                    "sceneid": "",
                    "text": "",
                    "cssClass": "hpt_löwe",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 0,
                    "yaw": -130.0,
                    "type": "scene",
                    "sceneId": "Intro_Elefanten",
                    "text": "",
                    "cssClass": "hpt_elefant",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 5,
                    "yaw": -160.0,
                    "type": "scene",
                    "sceneid": "",
                    "text": "",
                    "cssClass": "hpt_ballon_1",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 5,
                    "yaw": 160.0,
                    "type": "scene",
                    "sceneid": "",
                    "text": "",
                    "cssClass": "hpt_ballon_2",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 30,
                    "yaw": 45.0,
                    "type": "info",
                    "text": "",
                    "cssClass": "hpt_info_button",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 30,
                    "yaw": 120.0,
                    "type": "info",
                    "text": "",
                    "cssClass": "hpt_info_button1",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 30,
                    "yaw": -30.0,
                    "type": "info",
                    "text": "",
                    "cssClass": "hpt_info_button2",
                    "clickHandlerFunc": onHotspotClick
                },
                {
                    "pitch": 30,
                    "yaw": -110.0,
                    "type": "info",
                    "text": "",
                    "cssClass": "hpt_info_button3",
                    "clickHandlerFunc": onHotspotClick
                },
            ]
    },



    "Intro_Roter_Panda": { 
            "title": "Intro Roter Panda", 
            "hfov": 110, 
            "pitch": 0, 
            "yaw": 360, 
            "type": "equirectangular",
            "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92914/raw/media-92914-raw.png?",

            "hotSpots": [

                {
                    "pitch": 0,
                    "yaw": -35.0, 
                    "type": "Scene",
                    "text": "Der Rote Panda",
                    "sceneId": "",
                    "cssClass": "Der_Rote_Panda",
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "", 
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": 0, 
                    "yaw": 35.0,
                    "type": "Scene", 
                    "text": "Ins Gehege",
                    "cssClass": "gehege",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": 0, 
                    "yaw": 90.0, 
                    "type": "Scene", 
                    "text": "Hauptmenü", 
                    "sceneId": "menü",
                    "cssClass": "Hauptmenue_Roter_Panda",
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "", 
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": -15,
                    "yaw": -10.0, 
                    "type": "Info", 
                    "text": "Roter Panda", 
                    "cssClass": "Roter_Panda", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "", 
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": -30,
                    "yaw": 360.0, 
                    "type": "Info", 
                    "text": "Begruessung Roter Panda", 
                    "cssClass": "Begruessung_RoterPanda", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "", 
                    "clickHandlerFunc": onHotspotClick

                },


            ] 
    },

    "Einleitung Roter Panda_Still": {
                "title": "Einleitung Roter Panda", 
                "hfov": 110, 
                "pitch": 0, 
                "yaw": 360, 
                "type": "equirectangular",
                "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/82427/raw/media-82427-raw.png?",

                "hotSpots": [ 


                    {
                        "pitch": 0,
                        "yaw": -80.0, 
                        "type": "Scene", 
                        "text": "Hauptmenü", 
                        "sceneId": "menü",
                        "cssClass": "home",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Hauptmenü", 
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                    "pitch": -10,
                    "yaw": 50.0,
                    "type": "Info", 
                    "text": "Ins Gehege",
                    "cssClass": "gehege",
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick

                },

                    {
                        "pitch": 0,
                        "yaw": -100.0,
                        "type": "Scene", 
                        "text": "Zurück", 
                        "sceneId": "Intro_Roter_Panda",
                        "cssClass": "backward_",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Zurück", 
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                    "pitch": 0, 
                    "yaw": 100.0, 
                    "type": "Info", 
                    "text": "Steckbrief Roter Panda",
                    "cssClass": "Steckbrieficon",
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "", 
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": 0, 
                    "yaw": -30.0, 
                    "type": "Info", 
                    "text": "Bedrohungsstatus",
                    "cssClass": "Bedrohungsstatus", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "", 
                    "clickHandlerFunc": onHotspotClick

                },


                ] // Ende aller Hotspots
        },


        "Roter Panda Gehege_Still": {

                "title": "Das Roter Panda Gehege", 
                "hfov": 110, 
                "pitch": 0, 
                "yaw": 360, 
                "type": "equirectangular",
                "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92970/raw/media-92970-raw.png?",

                "hotSpots": [

                    {
                        "pitch": 0, 
                        "yaw": 120.0, 
                        "type": "Scene", 
                        "text": "Weiter",
                        "sceneId": "",
                        "cssClass": "up", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Ab ins Gehege", 
                        "clickHandlerFunc": onHotspotClick

                    }, 

                    {
                    "pitch": 0,
                    "yaw": 50.0,
                    "type": "Info", 
                    "text": "Steckbrief Roter Panda", 
                    "cssClass": "Steckbrieficon", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick

                },                                
                    {
                    "pitch": 0,
                    "yaw": -25.0,
                    "type": "Info", 
                    "text": "Fun Fact", 
                    "cssClass": "rpd_Funfact", 
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick

                },
                    {
                        "pitch": 0,
                        "yaw": -120.0,
                        "type": "Scene", 
                        "text": "Hauptmenü",
                        "sceneId": "menü",
                        "cssClass": "home", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Hauptmenü", 
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": 0, 
                        "yaw": -90.0,
                        "type": "Scene", 
                        "text": "",
                        "sceneId": "Einleitung Roter Panda_Still",
                        "cssClass": "backward_",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Zurück", 
                        "clickHandlerFunc": onHotspotClick

                    },
                    {
                        "pitch": 0, 
                        "yaw": -170.0, 
                        "type": "Info", 
                        "text": "Audio Die neue Anlage", 
                        "cssClass": "audio", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick

                    },


                ] 
        },

        "Roter Panda Gehege 2_Still": {
                "title": "Roter Panda Gehege_Still", 
                "hfov": 110, 
                "pitch": 0, 
                "yaw": 360, 
                "type": "equirectangular",
                "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92979/raw/media-92979-raw.png?", 

                "hotSpots": [ 
            

                    {
                        "pitch": 0,
                        "yaw": -120.0, 
                        "type": "Scene",
                        "text": "Hauptmenü",
                        "sceneId": "menü",
                        "cssClass": "home",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Hauptmenü",
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": 0,
                        "yaw": -90.0, 
                        "type": "Scene", 
                        "text": "Zurück", 
                        "sceneId": "Roter Panda Gehege_Still",
                        "cssClass": "backward_", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Zurück", 
                        "clickHandlerFunc": onHotspotClick

                    },
                    {
                        "pitch": 0, 
                        "yaw": -180.0, 
                        "type": "Info", 
                        "text": "Audio Die neue Anlage",
                        "cssClass": "audio", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick

                    },
                    {
                        "pitch": 0,
                        "yaw": 360.0,
                        "type": "Info",
                        "text": "Play", 
                        "cssClass": "play", 
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": 0,
                        "yaw": 360.0, 
                        "type": "Info",
                        "text": "Play", 
                        "cssClass": "play", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick

                    },
                    
                    {
                        "pitch": 0, 
                        "yaw": 80.0,
                        "type": "Scene",
                        "sceneId": "Quiz",
                        "text": "Quiz",
                        "cssClass": "quiz", 
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Quiz",
                        "clickHandlerFunc": onHotspotClick

                    },

                ] 
        },
        "Quiz": { 
                "title": "Quiz", 
                "hfov": 110, 
                "pitch": 0, 
                "yaw": 80, 
                "type": "equirectangular",
                "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92979/raw/media-92979-raw.png?",

                "hotSpots": [ 

                    {
                        "pitch": 0, 
                        "yaw": -120.0, 
                        "type": "Scene", 
                        "text": "Hauptmenü",
                        "sceneId": "menü",
                        "cssClass": "home", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Hauptmenü",
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": 0,
                        "yaw": -90.0,
                        "type": "Scene",
                        "text": "Zurück", 
                        "sceneId": "Roter Panda Gehege_Still",
                        "cssClass": "Zurueck", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Zurück", 
                        "clickHandlerFunc": onHotspotClick

                    },
                    {
                        "pitch": 0, 
                        "yaw": -180.0, 
                        "type": "Info", 
                        "text": "Audio Die neue Anlage", 
                        "cssClass": "Audiobutton", 
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick

                    },
                    {
                        "pitch": 0, 
                        "yaw": 360.0,
                        "type": "Info",
                        "text": "Play", 
                        "cssClass": "play", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": 0, 
                        "yaw": 360.0, 
                        "type": "Info",
                        "text": "Play", 
                        "cssClass": "play", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": 20, 
                        "yaw": 80.0,
                        "type": "Info",
                        "text": "Quiz_image", 
                        "cssClass": "quiz_img", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick

                    },
                    {
                        "pitch": 0, 
                        "yaw": 55.0,
                        "type": "Info",
                        "text": "Antwort_1", 
                        "cssClass": "antwort_1", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick

                    },
                    {
                        "pitch": 0, 
                        "yaw": 80.0, 
                        "type": "Info",
                        "text": "Antwort_2", 
                        "cssClass": "antwort_2", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick

                    },     
                    {
                        "pitch": 0,
                        "yaw": 105.0,
                        "type": "Info",
                        "text": "Antwort_3", 
                        "cssClass": "antwort_3", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick

                    },                           
                    

                ] 
    },




    // Elephants




    "Intro_Elefanten": {
            "title": "Intro Elefanten", 
            "hfov": 110, 
            "pitch": 0, 
            "yaw": 360,
            "type": "equirectangular",
            "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92960/raw/media-92960-raw.png?", 
            "hotSpots": [

              
                {
                    "pitch": 0,
                    "yaw": -25.0, 
                    "type": "Scene", 
                    "text": "Der Savannenelefant", 
                    "sceneId": "Elefanten Einleitung",
                    "cssClass": "Der_Savannen_Elefant",
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "",  
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": 0, 
                    "yaw": 25.0,
                    "type": "Scene",
                    "text": "Ins Gehege", 
                    "sceneId": "",
                    "cssClass": "Ins_Gehege",
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "",  
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": 0,
                    "yaw": 90.0, 
                    "type": "Scene",
                    "text": "Hauptmenü", 
                    "sceneId": "",
                    "cssClass": "home", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "Hauptmenü", 
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": -3, 
                    "yaw": 360.0,
                    "type": "Info",
                    "text": "Elefant", 
                    "cssClass": "Elefant", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "",
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": -25,
                    "yaw": 360.0,
                    "type": "Info", 
                    "text": "Begruessung Elefant", 
                    "sceneId": "",
                    "cssClass": "Begruessung_Elefant", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "", 
                    "clickHandlerFunc": onHotspotClick

                },

            ]         
    },



        // ALADRIAN



    "Aralandia Intro": { 

            "title": "Aralandia", 
            "hfov": 110, 
            "pitch": 0, 
            "yaw": 360, 
            "type": "equirectangular",
            "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92914/raw/media-92914-raw.png?", 

            "hotSpots": [ 

                {
                    "pitch": 0,
                    "yaw": -35.0, 
                    "type": "Scene",
                    "text": "Der Hyazinth-Ara", 
                    "sceneId": "",
                    "cssClass": "Hyazinth-AraButton", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "Hyazinth Ara",
                    "clickHandlerFunc": onHotspotClick

                }, 

                {
                    "pitch": 25, 
                    "yaw": 360.0,
                    "type": "Info", 
                    "text": "Image?",
                    "sceneId": "",
                    "cssClass": "HyazinthAra", 
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "", 
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": 0, 
                    "yaw": 35.0, 
                    "type": "Scene", 
                    "text": "Aralandia",
                    "cssClass": "gehege",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Ab ins Gehege", 
                    "clickHandlerFunc": onHotspotClick

                },
                {
                    "pitch": 0,
                    "yaw": 90.0,
                    "type": "Scene",
                    "text": "Hauptmnue",
                    "sceneId": "menü",
                    "cssClass": "home", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "Hauptmenü",
                    "clickHandlerFunc": onHotspotClick

                },

                {
                    "pitch": -25, 
                    "yaw": 360.0, 
                    "type": "Info", 
                    "text": "Info", 
                    "cssClass": "Begruessung_HyazinthAra", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "", 
                    "clickHandlerFunc": onHotspotClick

                },
            ]
        },
        "Aralandia Einleitung_Still": { 

                    "title": "Einleitung Aralandia", 
                    "hfov": 110, 
                    "pitch": 0,
                    "yaw": 360, 
                    "type": "equirectangular",
                    "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/82373/raw/media-82373-raw.png?",

                    "hotSpots": [

                        {
                            "pitch": -1, 
                            "yaw": -90.0, 
                            "type": "Scene", 
                            "text": "Weiter", 
                            "sceneId": "",
                            "cssClass": "backward_", 
                            "createTooltipFunc": hotspot,
                            "createTooltipArgs": "weitergehen", 
                            "clickHandlerFunc": onHotspotClick

                        },

                        {
                            "pitch": -5, 
                            "yaw": 20.0, 
                            "type": "Scene", 
                            "text": "Hauptmenü", 
                            "sceneId": "",
                            "cssClass": "home", 
                            "createTooltipFunc": hotspot, 
                            "createTooltipArgs": "Hauptmenü", 
                            "clickHandlerFunc": onHotspotClick

                        },

                        {
                            "pitch": -10, 
                            "yaw": 360.0, 
                            "type": "Scene", 
                            "text": "Zu den Flamingos", 
                            "sceneId": "",
                            "cssClass": "up", 
                            "createTooltipFunc": hotspot, 
                            "createTooltipArgs": "Zu den Flamingos", 
                            "clickHandlerFunc": onHotspotClick

                        },


                    ] 
            },
            "Aras Standort 5": { 
                "title": "Aralandia", 
                "hfov": 110, 
                "pitch": 0, 
                "yaw": 360, 
                "type": "equirectangular",
                "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92997/raw/media-92997-raw.png?", 
                "hotSpots": [

                    {
                        "pitch": -5, 
                        "yaw": 160.0,
                        "type": "Scene", 
                        "text": "Hauptmenue", 
                        "sceneId": "menü",
                        "cssClass": "home", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Hauptmenü",
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": -5, 
                        "yaw": 120.0, 
                        "type": "Scene", 
                        "text": "Zurueck zum Anfang", 
                        "sceneId": "Aralandia Einleitung_Still",
                        "cssClass": "forward_",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Zurück zum Anfang", 
                        "clickHandlerFunc": onHotspotClick

                    },
                   
                    {
                        "pitch": 0,
                        "yaw": 80.0, 
                        "type": "Info",
                        "text": "Erfahre mehr über Flamingos", 
                        "sceneId": "",
                        "cssClass": "Info_Flamingo", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Erfahre mehr über Flamingos", 
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": 5, 
                        "yaw": 40.0, 
                        "type": "Info", 
                        "text": "Steckbrief Flamingo", 
                        "sceneId": "",
                        "cssClass": "Steckbrief_Flamingo", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Steckbrief Flamingo", 
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": -10, 
                        "yaw": -10.0, 
                        "type": "Info", 
                        "text": "Image1",
                        "sceneId": "",
                        "cssClass": "Image_Flamingo_1", 
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick

                    },
                   

                    {
                        "pitch": -10, 
                        "yaw": -40.0, 
                        "type": "Info", 
                        "text": "Image2",
                        "sceneId": "",
                        "cssClass": "Image_Flamingo_2",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": 0,
                        "yaw": -90.0, 
                        "type": "Scene", 
                        "text": "Zurueck zum Baumstamm", 
                        "cssClass": "backward_",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Zurück zum Baumstamm",
                        "clickHandlerFunc": onHotspotClick

                    },
                ]
            },
            "Aras Standort 4 - Baumstamm_Still": { 
                "title": "Aralandia", 
                "hfov": 110, 
                "pitch": 0,
                "yaw": 360,
                "type": "equirectangular",
                "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92993/raw/media-92993-raw.png?", 
                "hotSpots": [ 
                    

                    {
                        "pitch": -2.4,
                        "yaw": 144.96,
                        "type": "Scene", 
                        "text": "Hauptmenue", 
                        "sceneId": "menü",
                        "cssClass": "home",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Hauptmenü",
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": -5.28, 
                        "yaw": 121.56,
                        "type": "Scene",
                        "text": "Weiter zu den Flamingos", 
                        "sceneId": "",
                        "cssClass": "forward_",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Weiter zu den Flamingos", 
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": 13.8, 
                        "yaw": 108.24, 
                        "type": "Scene",
                        "text": "Ab auf den Baumstamm",
                        "sceneId": "",
                        "cssClass": "up", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Ab auf den Baumstamm", 
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": -12.12,
                        "yaw": 39.84,
                        "type": "Scene", 
                        "text": "Unsere Unterstützer",
                        "sceneId": "",
                        "cssClass": "up_1", 
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Unsere Unterstützer",
                        "clickHandlerFunc": onHotspotClick

                    },

                    {
                        "pitch": -6.36,
                        "yaw": 15.0,
                        "type": "Scene",
                        "text": "Zurück auf die Brücke", 
                        "sceneId": "",
                        "cssClass": "forward_1", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Zurück auf die Brücke", 
                        "clickHandlerFunc": onHotspotClick

                    },
                    {
                        "pitch": -3.48,
                        "yaw": -14.88,
                        "type": "Scene", 
                        "text": "Hauptmenue", 
                        "sceneId": "menü",
                        "cssClass": "home",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Hauptmenü",
                        "clickHandlerFunc": onHotspotClick

                    },
                    {
                        "pitch": 19.56,
                        "yaw": -46.92, 
                        "type": "Info", 
                        "text": "Image2",
                        "cssClass": "Aras_Sot_5_Img", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick

                    },
                ]
            },
            
            "Aras -Actioncam_Still": {
                "title": "Aralandia", 
                "hfov": 110,
                "pitch": 0, 
                "yaw": 360, 
                "type": "equirectangular",
                "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92972/raw/media-92972-raw.png?", 

                "hotSpots": [ 

                    {
                        "pitch": 1.2, 
                        "yaw": 122.92, 
                        "type": "Scene",
                        "text": "Hauptmenue",
                        "sceneId": "menü",
                        "cssClass": "home",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Hauptmenü", 
                        "clickHandlerFunc": onHotspotClick
                    },

                    {
                        "pitch": -39.6,
                        "yaw": 45.6,
                        "type": "Scene", 
                        "text": "Zurueck", 
                        "sceneId": "Aras Standort 4 - Baumstamm_Still",
                        "cssClass": "forward_",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Zurück", 
                        "clickHandlerFunc": onHotspotClick
                    },

                    {
                        "pitch": 25.2,
                        "yaw": 65.76, 
                        "type": "Info",
                        "text": "Image1", 
                        "sceneId": "",
                        "cssClass": "Action-Cam_Img_1",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick
                    },

                    {
                        "pitch": -4.94,                                                                                               
                        "yaw": 2.64,                                                                     
                        "type": "Info", 
                        "text": "Image2",
                        "sceneId": "",
                        "cssClass": "Action-Cam_Img_2",  
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick
                    },

                    {
                        "pitch": 8.28,
                        "yaw": -74.34, 
                        "type": "Info",
                        "text": "Quiz", 
                        "sceneId": "Aras -Actioncam_Still_Quiz",
                        "cssClass": "quiz", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick
                    },

                    {
                        "pitch": -6.36,
                        "yaw": -132.24,
                        "type": "Info",
                        "text": "Audio", 
                        "cssClass": "audio", 
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick
                    },
                ]
            },
            "Aras -Actioncam_Still_Quiz": {
                "title": "Aralandia", 
                "hfov": 110,
                "pitch": 8.28, 
                "yaw": -74.34, 
                "type": "equirectangular",
                "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92972/raw/media-92972-raw.png?", 

                "hotSpots": [ 

                    {
                        "pitch": 1.2, 
                        "yaw": 122.92, 
                        "type": "Scene",
                        "text": "Hauptmenue",
                        "sceneId": "menü",
                        "cssClass": "home",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Hauptmenü", 
                        "clickHandlerFunc": onHotspotClick
                    },

                    {
                        "pitch": -39.6,
                        "yaw": 45.6,
                        "type": "Scene", 
                        "text": "Zurueck", 
                        "sceneId": "Aras Standort 4 - Baumstamm_Still",
                        "cssClass": "forward_",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Zurück", 
                        "clickHandlerFunc": onHotspotClick
                    },

                    {
                        "pitch": 25.2,
                        "yaw": 65.76, 
                        "type": "Info",
                        "text": "Image1", 
                        "sceneId": "",
                        "cssClass": "Action-Cam_Img_1",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick
                    },

                    {
                        "pitch": -4.94,                                                                                               
                        "yaw": 2.64,                                                                     
                        "type": "Info", 
                        "text": "Image2",
                        "sceneId": "",
                        "cssClass": "Action-Cam_Img_2",  
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick
                    },

                    {
                        "pitch": -6.36,
                        "yaw": -132.24,
                        "type": "Info",
                        "text": "Audio", 
                        "cssClass": "audio", 
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick
                    },

                    {
                        "pitch": 25.28,
                        "yaw": -74.34, 
                        "type": "Info",
                        "text": "Quiz", 
                        "cssClass": "Aras-Actioncam_Still_Quiz_Img_1", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick
                    },
                    {
                        "pitch": 8.28,
                        "yaw": -50.34, 
                        "type": "Info",
                        "text": "Quiz", 
                        "cssClass": "Aras-Actioncam_Still_Quiz_Img_4", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick
                    },
                    {
                        "pitch": 8.28,
                        "yaw": -74.34, 
                        "type": "Info",
                        "text": "Quiz", 
                        "cssClass": "Aras-Actioncam_Still_Quiz_Img_3", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick
                    },
                    {
                        "pitch": 8.28,
                        "yaw": -99.34, 
                        "type": "Info",
                        "text": "Quiz", 
                        "cssClass": "Aras-Actioncam_Still_Quiz_Img_2", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "",
                        "clickHandlerFunc": onHotspotClick
                    }

                ]
            },

            "Aras Standort 3 Auf der Brücke_Still": { 
                "title": "Aralandia",
                "hfov": 110, 
                "pitch": 0, 
                "yaw": 360, 
                "type": "equirectangular",
                "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92988/raw/media-92988-raw.png?",

                "hotSpots": [ 
            

                    {
                        "pitch": -12.74,
                        "yaw": 36.95,
                        "type": "Scene", 
                        "text": "Hauptmenue", 
                        "sceneId": "menü",
                        "cssClass": "home", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Hauptmenü", 
                        "clickHandlerFunc": onHotspotClick,
                        "createTooltipArgs": "Hauptmenü", 
                    },
                        
                    

                    {
                        "pitch": -12.84, 
                        "yaw": 63.96, 
                        "type": "Scene", 
                        "text": "Zurueck", 
                        "sceneId": "Aras Standort 2.2 vor der Brücke_Still",
                        "cssClass": "forward_", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Zurück", 
                        "clickHandlerFunc": onHotspotClick,
                    },
                    

                    {
                        "pitch": -8.88,
                        "yaw": 90.24, 
                        "type": "Info",
                        "text": "Steckbrief Ara",
                        "sceneId": "",
                        "cssClass": "Aras_Steckbrief",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Steckbrief Ara", 
                        "clickHandlerFunc": onHotspotClick,

                    },

                    {
                        "pitch": -8.16, 
                        "yaw": 150.72, 
                        "type": "Info",
                        "text": "Fun Fact Aras", 
                        "sceneId": "",
                        "cssClass": "Aras_Funfact", 
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Fun Facts Aras", 
                        "clickHandlerFunc": onHotspotClick,

                    },

                    {
                        "pitch": -3.48, 
                        "yaw": -48.0, 
                        "type": "Info", 
                        "text": "Image1", 
                        "sceneId": "",
                        "cssClass": "Aras_Standort_3_Auf_der_Brücke_Still_Img_1", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick,

                    },

                    {
                        "pitch": -0.96, 
                        "yaw": -117.12,
                        "type": "Info", 
                        "text": "Image2", 
                        "sceneId": "",
                        "cssClass": "Aras_Standort_3_Auf_der_Brücke_Still_Img_2", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick,
                    },

                    {
                        "pitch": -11.76, 
                        "yaw": -157.44, 
                        "type": "Info", 
                        "text": "Fun Fact Sonnensittiche", 
                        "sceneId": "",
                        "cssClass": "Sonnensittich_Funfact", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Fun Fact Sonnensittiche", 
                        "clickHandlerFunc": onHotspotClick,
                    },

                    {
                        "pitch": -13.56, 
                        "yaw": 9.84, 
                        "type": "Scene",
                        "text": "Zum Baumstamm", 
                        "sceneId": "",
                        "cssClass": "backward_", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Zum Baumstamm", 
                        "clickHandlerFunc": onHotspotClick,
                    },
                ]
            },
            "Aras Standort 2.2 vor der Brücke_Still": { 
                "title": "Aralandia", 
                "hfov": 110,
                "pitch": 0, 
                "yaw": 360, 
                "type": "equirectangular",
                "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/92982/raw/media-92982-raw.png?",

                "hotSpots": [ 
            

                    {
                        "pitch": -14.4,
                        "yaw": -21.42, 
                        "type": "Scene", 
                        "text": "Hauptmenue", 
                        "sceneId": "menü",
                        "cssClass": "home",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Hauptmenü", 
                        "clickHandlerFunc": onHotspotClick,
                    },

                    {
                        "pitch": -48.48,
                        "yaw": 15.36,
                        "type": "Scene",
                        "text": "Zurueck",
                        "sceneId": "",
                        "cssClass": "backward_",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Zurück",
                        "clickHandlerFunc": onHotspotClick,
                    },

                    {
                        "pitch": 3.6, 
                        "yaw": 24.3, 
                        "type": "Info", 
                        "text": "Zoo Verein",
                        "sceneId": "",
                        "cssClass": "Zoovereinsschild", 
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick,
                    },

                    {
                        "pitch":-22.56, 
                        "yaw": 41.28,
                        "type": "Scene",
                        "text": "Unsere Unterstuetzer",
                        "sceneId": "",
                        "cssClass": "up",
                        "createTooltipFunc": hotspot,
                        "createTooltipArgs": "Unsere Unterstützer", 
                        "clickHandlerFunc": onHotspotClick,
                    },

                    {
                        "pitch": 23.04,
                        "yaw": -28.98,
                        "type": "Info", 
                        "text": "Image", 
                        "sceneId": "",
                        "cssClass": "Aras_Standort_2_2_vor_der_Brücke_Still_Img",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "", 
                        "clickHandlerFunc": onHotspotClick,
                    },

                    {
                        "pitch": -12.6, 
                        "yaw": -50.88, 
                        "type": "Scene", 
                        "text": "Auf die Bruecke",
                        "sceneId": "",
                        "cssClass": "backward_1",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Auf die Brücke", 
                        "clickHandlerFunc": onHotspotClick,
                    },

                    {
                        "pitch": -0.96, 
                        "yaw": 154.32, 
                        "type": "Scene", 
                        "text": "Zum Baumstamm", 
                        "sceneId": "",
                        "cssClass": "forward_",
                        "createTooltipFunc": hotspot, 
                        "createTooltipArgs": "Zum Baumstamm", 
                        "clickHandlerFunc": onHotspotClick,
                    },
                ]
        },
        "Aras Standort 2.3 im Tunnel mood": { 
            "title": "Aralandia", 
            "hfov": 110, 
            "pitch": 0, 
            "yaw": 360, 
            "type": "equirectangular",
            "panorama": "https://cdn.mobfish.studio/zoowuppertal/media/78727/raw/media-78727-raw.png?", 

            "hotSpots": [ 

                {
                    "pitch": 0, // (Oben / Unten) 0 = mittig
                    "yaw": 90.0, // (Rechts / Links) 360 °= Gerade aus
                    "type": "Scene", // Entweder Scene oder Info in die Gänsefüschen | Scene wird verwendet falls der Hotspot zu einer anderen Scene(Seite) führen soll. | Info wird bei einem normalen Bild verwendet.
                    "text": "Hauptmenue", // Titel für den Hotspot | Nichts spezifisches
                    "sceneId": "",// Wird nur im Falle von "type": "scene" verwendet (Beispiel oben) ansonsten kann diese Zeile gelöscht werden | Titel der Scene (Z.66)
                    "cssClass": "Hauptmenuebutton", // Name der Css-Klasse siehe Z.40 (Style) | Muss genau gleich geschrieben werden (Großschreibung)
                    "createTooltipFunc": hotspot, //Bleibt gleich
                    "createTooltipArgs": "Hauptmenü", //Bleibt gleich

                },

                {
                    "pitch": 0, // (Oben / Unten) 0 = mittig
                    "yaw": 90.0, // (Rechts / Links) 360 °= Gerade aus
                    "type": "Scene", // Entweder Scene oder Info in die Gänsefüschen | Scene wird verwendet falls der Hotspot zu einer anderen Scene(Seite) führen soll. | Info wird bei einem normalen Bild verwendet.
                    "text": "Zurueck zur Brücke", // Titel für den Hotspot | Nichts spezifisches
                    "sceneId": "",// Wird nur im Falle von "type": "scene" verwendet (Beispiel oben) ansonsten kann diese Zeile gelöscht werden | Titel der Scene (Z.66)
                    "cssClass": "VorwaertsButton", // Name der Css-Klasse siehe Z.40 (Style) | Muss genau gleich geschrieben werden (Großschreibung)
                    "createTooltipFunc": hotspot, //Bleibt gleich
                    "createTooltipArgs": "Zurück zur Brücke", //Bleibt gleich

                },
               
                {
                    "pitch": 0, // (Oben / Unten) 0 = mittig
                    "yaw": 90.0, // (Rechts / Links) 360 °= Gerade aus
                    "type": "Scene", // Entweder Scene oder Info in die Gänsefüschen | Scene wird verwendet falls der Hotspot zu einer anderen Scene(Seite) führen soll. | Info wird bei einem normalen Bild verwendet.
                    "text": "Beweggründe", // Titel für den Hotspot | Nichts spezifisches
                    "sceneId": "",// Wird nur im Falle von "type": "scene" verwendet (Beispiel oben) ansonsten kann diese Zeile gelöscht werden | Titel der Scene (Z.66)
                    "cssClass": "InfoButton", // Name der Css-Klasse siehe Z.40 (Style) | Muss genau gleich geschrieben werden (Großschreibung)
                    "createTooltipFunc": hotspot, //Bleibt gleich
                    "createTooltipArgs": "Beweggründe", //Bleibt gleich

                },

                {
                    "pitch": 0, // (Oben / Unten) 0 = mittig
                    "yaw": 90.0, // (Rechts / Links) 360 °= Gerade aus
                    "type": "Scene", // Entweder Scene oder Info in die Gänsefüschen | Scene wird verwendet falls der Hotspot zu einer anderen Scene(Seite) führen soll. | Info wird bei einem normalen Bild verwendet.
                    "text": "25 Jahre Investitionen", // Titel für den Hotspot | Nichts spezifisches
                    "sceneId": "",// Wird nur im Falle von "type": "scene" verwendet (Beispiel oben) ansonsten kann diese Zeile gelöscht werden | Titel der Scene (Z.66)
                    "cssClass": "InfoButton", // Name der Css-Klasse siehe Z.40 (Style) | Muss genau gleich geschrieben werden (Großschreibung)
                    "createTooltipFunc": hotspot, //Bleibt gleich
                    "createTooltipArgs": "25 Jahre Investitionen", //Bleibt gleich

                },

                {
                    "pitch": 0, // (Oben / Unten) 0 = mittig
                    "yaw": 90.0, // (Rechts / Links) 360 °= Gerade aus
                    "type": "Scene", // Entweder Scene oder Info in die Gänsefüschen | Scene wird verwendet falls der Hotspot zu einer anderen Scene(Seite) führen soll. | Info wird bei einem normalen Bild verwendet.
                    "text": "Die Zoogründung", // Titel für den Hotspot | Nichts spezifisches
                    "sceneId": "",// Wird nur im Falle von "type": "scene" verwendet (Beispiel oben) ansonsten kann diese Zeile gelöscht werden | Titel der Scene (Z.66)
                    "cssClass": "InfoButton", // Name der Css-Klasse siehe Z.40 (Style) | Muss genau gleich geschrieben werden (Großschreibung)
                    "createTooltipFunc": hotspot, //Bleibt gleich
                    "createTooltipArgs": "Die Zoogründung", //Bleibt gleich

                },
               

                {
                    "pitch": 0, // (Oben / Unten) 0 = mittig
                    "yaw": 90.0, // (Rechts / Links) 360 °= Gerade aus
                    "type": "Scene", // Entweder Scene oder Info in die Gänsefüschen | Scene wird verwendet falls der Hotspot zu einer anderen Scene(Seite) führen soll. | Info wird bei einem normalen Bild verwendet.
                    "text": "Die Pinguinale", // Titel für den Hotspot | Nichts spezifisches
                    "sceneId": "",// Wird nur im Falle von "type": "scene" verwendet (Beispiel oben) ansonsten kann diese Zeile gelöscht werden | Titel der Scene (Z.66)
                    "cssClass": "InfoButton", // Name der Css-Klasse siehe Z.40 (Style) | Muss genau gleich geschrieben werden (Großschreibung)
                    "createTooltipFunc": hotspot, //Bleibt gleich
                    "createTooltipArgs": "Die Pinguinale", //Bleibt gleich

                },

                {
                    "pitch": 0, // (Oben / Unten) 0 = mittig
                    "yaw": 90.0, // (Rechts / Links) 360 °= Gerade aus
                    "type": "Scene", // Entweder Scene oder Info in die Gänsefüschen | Scene wird verwendet falls der Hotspot zu einer anderen Scene(Seite) führen soll. | Info wird bei einem normalen Bild verwendet.
                    "text": "Zurueck zum Baumstamm", // Titel für den Hotspot | Nichts spezifisches
                    "sceneId": "",// Wird nur im Falle von "type": "scene" verwendet (Beispiel oben) ansonsten kann diese Zeile gelöscht werden | Titel der Scene (Z.66)
                    "cssClass": "VorwaertsButton", // Name der Css-Klasse siehe Z.40 (Style) | Muss genau gleich geschrieben werden (Großschreibung)
                    "createTooltipFunc": hotspot, //Bleibt gleich
                    "createTooltipArgs": "Zurück zum Baumstamm", //Bleibt gleich

                },

                {
                    "pitch": 0, // (Oben / Unten) 0 = mittig
                    "yaw": 90.0, // (Rechts / Links) 360 °= Gerade aus
                    "type": "Scene", // Entweder Scene oder Info in die Gänsefüschen | Scene wird verwendet falls der Hotspot zu einer anderen Scene(Seite) führen soll. | Info wird bei einem normalen Bild verwendet.
                    "text": "Mehr über den Zooverein", // Titel für den Hotspot | Nichts spezifisches
                    "sceneId": "",// Wird nur im Falle von "type": "scene" verwendet (Beispiel oben) ansonsten kann diese Zeile gelöscht werden | Titel der Scene (Z.66)
                    "cssClass": "InfoButton", // Name der Css-Klasse siehe Z.40 (Style) | Muss genau gleich geschrieben werden (Großschreibung)
                    "createTooltipFunc": hotspot, //Bleibt gleich
                    "createTooltipArgs": "Mehr über den Zooverein", //Bleibt gleich

                },

                {
                    "pitch": 0, // (Oben / Unten) 0 = mittig
                    "yaw": 90.0, // (Rechts / Links) 360 °= Gerade aus
                    "type": "Scene", // Entweder Scene oder Info in die Gänsefüschen | Scene wird verwendet falls der Hotspot zu einer anderen Scene(Seite) führen soll. | Info wird bei einem normalen Bild verwendet.
                    "text": "Wie kann ich Mitglied werden?", // Titel für den Hotspot | Nichts spezifisches
                    "sceneId": "",// Wird nur im Falle von "type": "scene" verwendet (Beispiel oben) ansonsten kann diese Zeile gelöscht werden | Titel der Scene (Z.66)
                    "cssClass": "InfoButton", // Name der Css-Klasse siehe Z.40 (Style) | Muss genau gleich geschrieben werden (Großschreibung)
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Wie kann ich Mitglied werden?", //Bleibt gleich

                },

                {
                    "pitch": 0, 
                    "yaw": 90.0,
                    "type": "Scene", 
                    "text": "Zooverein", 
                    "sceneId": "",
                    "cssClass": "InfoButton",
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "Zooverein", 
                },
               
                {
                    "pitch": 0, 
                    "yaw": 90.0, 
                    "type": "Info", 
                    "text": "Sonnensittiche", 
                    "sceneId": "",
                    "cssClass": "Imagebutton", 
                    "createTooltipFunc": hotspot, 
                    "createTooltipArgs": "Sonnensittiche",  

                },

                {
                    "pitch": 0, 
                    "yaw": 90.0, 
                    "type": "Scene", 
                    "text": "Alltag der Tierärztin",
                    "sceneId": "",
                    "cssClass": "TierarztButton", 
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Alltag der Tierärztin", 

                },
            ]
        }

    }

});
player = videojs('video', {

    plugins: {
        pannellum: {}
    }

});

player2 = videojs('video2', {

});

}


var playing = false;

var backgroundSound = null;

var currentScreen = null;

var current = new Audio("https://cdn.mobfish.studio/zoowuppertal/media/78690/raw/media-78690-raw.mp3");

var lastButton = null;

function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}
function onHotspotClick(event){
    var hotspot = document.elementFromPoint(event.x, event.y).className.split(" ").at(1);
    var hotspotElement = document.elementFromPoint(event.x, event.y);
    lastButton = hotspot
   
    if(currentScreen == "onboarding"){
    switch(hotspot){

        case "up":
            playSound("https://cdn.mobfish.studio/zoowuppertal/media/78690/raw/media-78690-raw.mp3")
            break;
        case "forward_":
            playSound("https://cdn.mobfish.studio/zoowuppertal/media/78690/raw/media-78690-raw.mp3")
            break;
        case "backward_":
            playSound("https://cdn.mobfish.studio/zoowuppertal/media/78690/raw/media-78690-raw.mp3")
            break;
        case "play":
            playSound("https://cdn.mobfish.studio/zoowuppertal/media/78689/raw/media-78689-raw.mp3")
            break;
        case "home":
            if(hotspotElement.innerHTML.span == null){
                playSound("https://cdn.mobfish.studio/zoowuppertal/media/78687/raw/media-78687-raw.mp3")
            }
            break;
        case "info":
            playSound("https://cdn.mobfish.studio/zoowuppertal/media/78688/raw/media-78688-raw.mp3")
            break;
        default:
            console.log("Error")
            break;
    }
}

if(currentScreen == "Intro_Roter_Panda") {
   
  
    switch(hotspot){
        
        case "Der_Rote_Panda":

            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/82200/raw/media-82200-raw.mp4"})
            break;
        case "gehege":
            
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81869/raw/media-81869-raw.mp4"})
            break;

    }
}
if(currentScreen =="Einleitung Roter Panda_Still") {

    switch(hotspot) {

        case "gehege":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81869/raw/media-81869-raw.mp4"})
            break;
    }

}
if(currentScreen == "Roter Panda Gehege_Still") {

    switch(hotspot) {

        case "audio":

            playSound("https://cdn.mobfish.studio/zoowuppertal/media/82428/raw/media-82428-raw.mp3");
            break;

        case "up":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81868/raw/media-81868-raw.mp4"})
            break;
    }

}

if(currentScreen == "Roter Panda Gehege 2_Still" || "Quiz"){
    switch(hotspot){
        case "audio":

            playSound("https://cdn.mobfish.studio/zoowuppertal/media/82429/raw/media-82429-raw.mp3")
            break;

        case "play":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            document.getElementById("video").style.width = "0"
            document.getElementById("video").style.height = "0" 
            player2.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/77806/raw/media-77806-raw.mp4"})
            break;
        case "quiz_img":
            playSound("https://cdn.mobfish.studio/zoowuppertal/media/82430/raw/media-82430-raw.mp3")
            break;
        case "antwort_1":
            playSound("https://cdn.mobfish.studio/zoowuppertal/media/81781/raw/media-81781-raw.mp3")
            hotspotElement.setAttribute("style","border: 8px solid lime; border-radius: 6px;")
            setTimeout(()=> {
                viewer.loadScene("Roter Panda Gehege 2_Still")
            },5000);
            break;
        case "antwort_2":
            hotspotElement.setAttribute("style","border: 8px solid red; border-radius: 6px;")
            break;
        case "antwort_3":
            hotspotElement.setAttribute("style","border: 8px solid red; border-radius: 6px;")
            break;
    }
if(currentScreen == "Aralandia Intro") {
    switch(hotspot){

        case "gehege":
            break;
        case "Hyazinth-AraButton":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/82032/raw/media-82032-raw.mp4"})
            break;

    }
}
if(currentScreen == "Aralandia Einleitung_Still"){

    switch(hotspot) {

        case "up":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81859/raw/media-81859-raw.mp4"})
            break;
    }

}
if(currentScreen === "Aras Standort 2.2 vor der Brücke_Still") {
    switch(hotspot){
        case "backward_1":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81858/raw/media-81858-raw.mp4"})
            break;
        case "forward_":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81797/4k/media-81797-raw.mp4"})
            break;
    }
}
if(currentScreen === "Aras Standort 3 Auf der Brücke_Still"){

    switch(hotspot) {
        case "backward_":
           
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81797/3k/media-81797-raw.mp4"})
            break;
    }ss
}
if(currentScreen == "Aras Standort 4 - Baumstamm_Still"){
    switch(hotspot) {
        case "forward_":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81859/raw/media-81859-raw.mp4"})
            break;
        case "up":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81702/raw/media-81702-raw.mp4"})
            break;
        case "forward_1":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81858/raw/media-81858-raw.mp4"})
            break;
    }
}
if(currentScreen == "Aras -Actioncam_Still"  || currentScreen == "Aras -Actioncam_Still_Quiz") {
    switch(hotspot) {
        case "audio":
            playSound("https://cdn.mobfish.studio/zoowuppertal/media/78681/raw/media-78681-raw.mp3")
            break;
        case "Aras-Actioncam_Still_Quiz_Img_1":
            playSound("https://cdn.mobfish.studio/zoowuppertal/media/78732/raw/media-78732-raw.mp3")
            break;
        case "Aras-Actioncam_Still_Quiz_Img_2":
            playSound("https://cdn.mobfish.studio/zoowuppertal/media/78733/raw/media-78733-raw.mp3")
            hotspotElement.setAttribute("style","border: 8px solid lime; border-radius: 6px;")
            setTimeout(()=> {
                viewer.loadScene("Aras Standort 4 - Baumstamm_Still")
            },13000);
            break;
        case "Aras-Actioncam_Still_Quiz_Img_3":
            hotspotElement.setAttribute("style","border: 8px solid red; border-radius: 6px;")
            break;
        case "Aras-Actioncam_Still_Quiz_Img_4":
            hotspotElement.setAttribute("style","border: 8px solid red; border-radius: 6px;")
            break;
    }
}

if(currentScreen == "Aras Standort 5"){
    
    switch(hotspot) {
        case "backward_":
            document.getElementById("panorama").style.width = "0"
            document.getElementById("panorama").style.height = "0" 
            player.src({type: "video/mp4", src:"https://cdn.mobfish.studio/zoowuppertal/media/81797/3k/media-81797-raw.mp4"})
            break;
    }
}
};

viewer.on('scenechange', function(sceneid) {
    
    playSound("")
    
    currentScreen = sceneid
    console.log(currentScreen)
    if (backgroundSound !== null) {
         backgroundSound.pause();
         backgroundSound = null;
    }

    if(sceneid == "onboarding") {
        
        playSound("https://cdn.mobfish.studio/zoowuppertal/media/78685/raw/media-78685-raw.mp3");

        if (backgroundSound === null) {
            backgroundSound = new Audio("https://cdn.mobfish.studio/zoowuppertal/media/93068/raw/media-93068-raw.mp3");
            backgroundSound.play();
            backgroundSound.loop = true; 
        }

    }
    if(sceneid == "Quiz") {
            
    }

    if(sceneid == "Aras -Actioncam_Still_Quiz"){
        playSound("https://cdn.mobfish.studio/zoowuppertal/media/78732/raw/media-78732-raw.mp3");
    }
});

function playSound(url) {
    if (current !== null) {
        current.pause();
    }
    var sound = new Audio(url);
    current = sound;
    sound.play();
    sound.onpause = function () {
        playing = false;
    };
    sound.onended = function () {
        playing = false;
    };
    playing = true; 
}
player.on("ended", function() {

    if(currentScreen == "Intro_Roter_Panda"){
        switch(lastButton) {
            case "gehege":
                viewer.loadScene("Roter Panda Gehege_Still")
                document.getElementById("panorama").removeAttribute("style")
            case "Der_Rote_Panda":
                viewer.loadScene("Einleitung Roter Panda_Still")
                document.getElementById("panorama").removeAttribute("style")
        }

    }
    if(currentScreen == "Einleitung Roter Panda_Still"){

        viewer.loadScene("Roter Panda Gehege_Still")
        document.getElementById("panorama").removeAttribute("style")

    }
    if(currentScreen == "Roter Panda Gehege_Still") {

        viewer.loadScene("Roter Panda Gehege 2_Still")
        document.getElementById("panorama").removeAttribute("style")

    }
    if(currentScreen == "Aralandia Intro") {
        switch(lastButton){
            case "Hyazinth-AraButton":
                viewer.loadScene("Aralandia Einleitung_Still")
                document.getElementById("panorama").removeAttribute("style")
        }
    }
    if(currentScreen == "Aralandia Einleitung_Still") {
        switch(lastButton){
            case "up":
                viewer.loadScene("Aras Standort 5")
                document.getElementById("panorama").removeAttribute("style")
                break;
        }
    }
    
    if(currentScreen === "Aras Standort 3 Auf der Brücke_Still"){
        
        switch(lastButton) {
            case "backward_":
                
                viewer.loadScene("Aras Standort 4 - Baumstamm_Still")
                document.getElementById("panorama").removeAttribute("style")
                break;
        }
    }
    if(currentScreen === "Aras Standort 2.2 vor der Brücke_Still"){
        console.log(lastButton)
        console.log(hotspot)
        switch(hotspot){

            case "backward_1":
                viewer.loadScene("Aras Standort 3 Auf der Brücke_Still")
                document.getElementById("panorama").removeAttribute("style")
                break;
            case "forward_":
                viewer.loadScene("Aras Standort 4 - Baumstamm_Still")
                document.getElementById("panorama").removeAttribute("style")
                break;
        }
    }
    if(currentScreen == "Aras Standort 4 - Baumstamm_Still") {
    
        switch(lastButton) {
            case "forward_":
                viewer.loadScene("Aras Standort 5")
                document.getElementById("panorama").removeAttribute("style")
                break;
            case "up":
                viewer.loadScene("Aras -Actioncam_Still")
                document.getElementById("panorama").removeAttribute("style")
                break;
            case "forward_1":
                viewer.loadScene("Aras Standort 3 Auf der Brücke_Still")
                document.getElementById("panorama").removeAttribute("style")
                break;
        }
    }
    if(currentScreen == "Aras Standort 5") {
        
        switch(lastButton) {
            case "backward_":
                viewer.loadScene("Aras Standort 4 - Baumstamm_Still")
                document.getElementById("panorama").removeAttribute("style")
                break;
        }
    }
})
player2.on("ended", function() {
    if(currentScreen == "Roter Panda Gehege 2_Still" || "Quiz") {
        
        document.getElementById("panorama").removeAttribute("style")
        document.getElementById("video").removeAttribute("style")

    }
})
}