window.famobi_env=window.famobi_env||"gp";var _fgq=[];!function(a,e,p,i){p=a.createElement("script"),i=a.getElementsByTagName("script")[0],p.src="js/gameapi.js",p.onload=function(){"function"==typeof fg_api&&"undefined"!=typeof famobi&&famobi instanceof fg_api||(famobi=new fg_api({features:{highscores:1,menu:1,standalone:!1,fullscreen:1,screenshot:0,payment:0,ads:1},game_i18n:{default:{"images/sprites_2x.png":"fg_i18n/en/images/sprites_2x.png","api.back":"&laquo; Back","api.more":"&raquo; More Games","api.fullscreen":"[+] Fullscreen mode","api.continue":"Continue","api.play_now":"Play now","api.ad_modal_header":"Advertisement closes in&hellip;","api.ad_modal_header2":"Advertisement&hellip;","api.ad_modal_header3":"Loading&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Continue with the next episode&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text_2":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Low signal?","api.install_app_cta_2":"Install Full Game Now","api.install_app_text_3":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Long journeys?","api.install_app_cta_3":"Install Full Game Now","api.install_app_text":"Free full version","api.install_app_cta":"Get the App",more_games_image_prefix:"",more_games_image:"600x253.png",more_games_url:"",preload_image:"/html5games/gameapi/v1/invisPreloadImage.png",test_preload_image:"/html5games/gameapi/v1/testPreloadImage.png"},fr:{"images/sprites_2x.png":"fg_i18n/{lang}/images/sprites_2x.png","api.back":"&laquo; Retour","api.more":"&raquo; Plus de jeux","api.fullscreen":"[+] Mode plein écran","api.continue":"Continuer","api.play_now":"Jouer maintenant","api.ad_modal_header":"Advertisement closes in&hellip;","api.ad_modal_header2":"Réclame&hellip;","api.ad_modal_header3":"Loading&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Continue with the next episode&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Version complète gratuite!","api.install_app_cta":"Installer maintenant"},en:{"api.back":"&laquo; Back","api.more":"&raquo; More Games","api.fullscreen":"[+] Fullscreen mode","api.continue":"Continue","api.play_now":"Play now","api.ad_modal_header":"Advertisement closes in&hellip;","api.ad_modal_header2":"Advertisement&hellip;","api.ad_modal_header3":"Loading&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Continue with the next episode&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text_2":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Low signal?","api.install_app_cta_2":"Install Full Game Now","api.install_app_text_3":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Long journeys?","api.install_app_cta_3":"Install Full Game Now","api.install_app_text":"Free full version","api.install_app_cta":"Get the App"},de:{"api.back":"&laquo; zur&uuml;ck","api.more":"&raquo; mehr Spiele","api.fullscreen":"[+] Vollbildmodus","api.continue":"Weiter","api.play_now":"Jetzt spielen","api.ad_modal_header":"Werbung schließt automatisch in&hellip;","api.ad_modal_header2":"Werbung&hellip;","api.ad_modal_header3":"Lädt&hellip;","api.teaser_modal_header":"Spiele jetzt den nächsten Teil&hellip;","api.no_abo":"Kein Abo!","api.secure_payment":"Sicheres Bezahlen!","api.paymentmethod_cc":"Kreditkarte","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Weiter","api.install_app_text_2":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Kein Netz?","api.install_app_cta_2":"Spiel als App installieren","api.install_app_text_3":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Längere Reise?","api.install_app_cta_3":"Spiel als App installieren","api.install_app_text":"Kostenlose Vollversion","api.install_app_cta":"App installieren"},es:{"api.back":"&laquo; Regresar","api.more":"&raquo; Más juegos","api.fullscreen":"[+] Modo pantalla completa","api.continue":"Continuar","api.play_now":"Reproducir ahora","api.ad_modal_header":"La publicidad se cerrará en&hellip;","api.ad_modal_header2":"Anuncio&hellip;","api.ad_modal_header3":"Anuncio&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Continuar con el siguiente episodio&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Versión completa gratis!","api.install_app_cta":"Instalar ahora"},it:{"api.back":"&laquo; Indietro","api.more":"&raquo; More Games","api.fullscreen":"A tutto schermo","api.ad_modal_header":"Advertisement closes in&hellip;","api.ad_modal_header2":"Collegamento sponsorizzato&hellip;","api.ad_modal_header3":"Lädt&hellip;","api.teaser_modal_header":"Continue with the next episode&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.continue":"Continua","api.play_now":"Gioca subito","api.install_app_text":"La versione completa!","api.install_app_cta":"Installa ora"},nl:{"api.back":"&laquo; Vorige","api.more":"&raquo; Meer games","api.fullscreen":"[+] Volledig scherm","api.continue":"Doorgaan","api.play_now":"Nu spelen","api.ad_modal_header":"De publiciteit eindigt in&hellip;","api.ad_modal_header2":"Publiciteit&hellip;","api.ad_modal_header3":"Publiciteit&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Doorgaan met de volgende aflevering&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Gratis volledige versie!","api.install_app_cta":"Installeer nu"},pl:{"api.back":"&laquo; Wróć","api.more":"&raquo; Więcej gier","api.fullscreen":"[+] Tryb pełnoekranowy","api.continue":"Kontynuuj","api.play_now":"Graj teraz","api.ad_modal_header":"Reklama zamknie się za&hellip;","api.ad_modal_header2":"Reklama&hellip;","api.ad_modal_header3":"Reklama&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Przejdź do kolejnego odcinka&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Bezpłatna pełna wersja!","api.install_app_cta":"Zainstaluj teraz"},pt:{"api.back":"&laquo; Voltar","api.more":"&raquo; Mais jogos","api.fullscreen":"[+] Tela cheia","api.continue":"Continuar","api.play_now":"Jogar agora","api.ad_modal_header":"Publicidade fecha em &hellip;","api.ad_modal_header2":"Publicidade &hellip;","api.ad_modal_header3":"Publicidade &hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Continua com o próximo episódio&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Grátis Full Version!","api.install_app_cta":"Instale agora"},ru:{"api.back":"&laquo; Назад","api.more":"&raquo; Больше игр","api.fullscreen":"[+] Полноэкранный режим","api.continue":"Продолжить","api.play_now":"Играть","api.ad_modal_header":"Реклама &ndash; закроется через&hellip;","api.ad_modal_header2":"Реклама&hellip;","api.ad_modal_header3":"Реклама&hellip;","api.teaser_modal_header":"Перейти к следующему эпизоду&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Бесплатная Полная версия!","api.install_app_cta":"Установить сейчас"},tr:{"api.back":"&laquo; Geri","api.more":"&raquo; Daha Fazla Oyun","api.fullscreen":"Tam ekran","api.continue":"Devam","api.play_now":"Oyna","api.ad_modal_header":"Reklam &ndash; otomatik kapanacaktır&hellip;","api.ad_modal_header2":"Reklam&hellip;","api.ad_modal_header3":"Reklam&hellip;","api.teaser_modal_header":"Sonraki Bölüm&hellip;","api.no_abo":"Abonelik Yoktur!","api.secure_payment":"Güvenli Ödeme!","api.paymentmethod_cc":"Kredi Kartı","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Sonraki","api.install_app_text":"Bedava Tam Sürüm!","api.install_app_cta":"Şimdi kur"}},gameParams:{flags:{exclusive:1},highscores_enabled:1,fullscreen_enabled:1,languages_available:["en"],orientation:"portrait",aspectRatio:.75,header_image:"SoccertasticHeader.jpg"},urlRoot:"",assetsPath:"/assets/0.2-5087ba66",ts:151750497e4,short_url:"/soccertastic/A-BUYHTML5GAMES?fg_description_url=https%3A%2F%2Fbuy.html5games.com%2Fsoccertastic%23addToCartAndContact",uuid:"c97349ac-313a-44c4-8190-05cd95eb2f8c",pid:"987d2350-6278-476a-b573-ee75c6caf3c3",aid:"A-BUYHTML5GAMES",name:'""',package_id:'""',languages:["de","en","es","fr","it","nl","pl","pt","ru","tr"],ads:{min_s_between:120,min_s_before:15,show_initial:!1,show_video:!0,description_url:"",provider:"housead",dfp_available:!1,vast_url:""},i18n:{default:{"api.back":"&laquo; Back","api.more":"&raquo; More Games","api.fullscreen":"[+] Fullscreen mode","api.continue":"Continue","api.play_now":"Play now","api.ad_modal_header":"Advertisement closes in&hellip;","api.ad_modal_header2":"Advertisement&hellip;","api.ad_modal_header3":"Loading&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Continue with the next episode&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text_2":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Low signal?","api.install_app_cta_2":"Install Full Game Now","api.install_app_text_3":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Long journeys?","api.install_app_cta_3":"Install Full Game Now","api.install_app_text":"Free full version","api.install_app_cta":"Get the App"},en:{"api.back":"&laquo; Back","api.more":"&raquo; More Games","api.fullscreen":"[+] Fullscreen mode","api.continue":"Continue","api.play_now":"Play now","api.ad_modal_header":"Advertisement closes in&hellip;","api.ad_modal_header2":"Advertisement&hellip;","api.ad_modal_header3":"Loading&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Continue with the next episode&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text_2":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Low signal?","api.install_app_cta_2":"Install Full Game Now","api.install_app_text_3":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Long journeys?","api.install_app_cta_3":"Install Full Game Now","api.install_app_text":"Free full version","api.install_app_cta":"Get the App"},de:{"api.back":"&laquo; zur&uuml;ck","api.more":"&raquo; mehr Spiele","api.fullscreen":"[+] Vollbildmodus","api.continue":"Weiter","api.play_now":"Jetzt spielen","api.ad_modal_header":"Werbung schließt automatisch in&hellip;","api.ad_modal_header2":"Werbung&hellip;","api.ad_modal_header3":"Lädt&hellip;","api.teaser_modal_header":"Spiele jetzt den nächsten Teil&hellip;","api.no_abo":"Kein Abo!","api.secure_payment":"Sicheres Bezahlen!","api.paymentmethod_cc":"Kreditkarte","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Weiter","api.install_app_text_2":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Kein Netz?","api.install_app_cta_2":"Spiel als App installieren","api.install_app_text_3":"🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Längere Reise?","api.install_app_cta_3":"Spiel als App installieren","api.install_app_text":"Kostenlose Vollversion","api.install_app_cta":"App installieren"},es:{"api.back":"&laquo; Regresar","api.more":"&raquo; Más juegos","api.fullscreen":"[+] Modo pantalla completa","api.continue":"Continuar","api.play_now":"Reproducir ahora","api.ad_modal_header":"La publicidad se cerrará en&hellip;","api.ad_modal_header2":"Anuncio&hellip;","api.ad_modal_header3":"Anuncio&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Continuar con el siguiente episodio&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Versión completa gratis!","api.install_app_cta":"Instalar ahora"},fr:{"api.back":"&laquo; Retour","api.more":"&raquo; Plus de jeux","api.fullscreen":"[+] Mode plein écran","api.continue":"Continuer","api.play_now":"Jouer maintenant","api.ad_modal_header":"Advertisement closes in&hellip;","api.ad_modal_header2":"Réclame&hellip;","api.ad_modal_header3":"Loading&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Continue with the next episode&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Version complète gratuite!","api.install_app_cta":"Installer maintenant"},it:{"api.back":"&laquo; Indietro","api.more":"&raquo; More Games","api.fullscreen":"A tutto schermo","api.ad_modal_header":"Advertisement closes in&hellip;","api.ad_modal_header2":"Collegamento sponsorizzato&hellip;","api.ad_modal_header3":"Lädt&hellip;","api.teaser_modal_header":"Continue with the next episode&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.continue":"Continua","api.play_now":"Gioca subito","api.install_app_text":"La versione completa!","api.install_app_cta":"Installa ora"},nl:{"api.back":"&laquo; Vorige","api.more":"&raquo; Meer games","api.fullscreen":"[+] Volledig scherm","api.continue":"Doorgaan","api.play_now":"Nu spelen","api.ad_modal_header":"De publiciteit eindigt in&hellip;","api.ad_modal_header2":"Publiciteit&hellip;","api.ad_modal_header3":"Publiciteit&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Doorgaan met de volgende aflevering&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Gratis volledige versie!","api.install_app_cta":"Installeer nu"},pl:{"api.back":"&laquo; Wróć","api.more":"&raquo; Więcej gier","api.fullscreen":"[+] Tryb pełnoekranowy","api.continue":"Kontynuuj","api.play_now":"Graj teraz","api.ad_modal_header":"Reklama zamknie się za&hellip;","api.ad_modal_header2":"Reklama&hellip;","api.ad_modal_header3":"Reklama&hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Przejdź do kolejnego odcinka&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Bezpłatna pełna wersja!","api.install_app_cta":"Zainstaluj teraz"},pt:{"api.back":"&laquo; Voltar","api.more":"&raquo; Mais jogos","api.fullscreen":"[+] Tela cheia","api.continue":"Continuar","api.play_now":"Jogar agora","api.ad_modal_header":"Publicidade fecha em &hellip;","api.ad_modal_header2":"Publicidade &hellip;","api.ad_modal_header3":"Publicidade &hellip;","api.ad_modal_header_blocked":"Not available due to policy reasons","api.teaser_modal_header":"Continua com o próximo episódio&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Grátis Full Version!","api.install_app_cta":"Instale agora"},ru:{"api.back":"&laquo; Назад","api.more":"&raquo; Больше игр","api.fullscreen":"[+] Полноэкранный режим","api.continue":"Продолжить","api.play_now":"Играть","api.ad_modal_header":"Реклама &ndash; закроется через&hellip;","api.ad_modal_header2":"Реклама&hellip;","api.ad_modal_header3":"Реклама&hellip;","api.teaser_modal_header":"Перейти к следующему эпизоду&hellip;","api.no_abo":"No Subscription!","api.secure_payment":"Secure Payment!","api.paymentmethod_cc":"Credit Card","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Next","api.install_app_text":"Бесплатная Полная версия!","api.install_app_cta":"Установить сейчас"},tr:{"api.back":"&laquo; Geri","api.more":"&raquo; Daha Fazla Oyun","api.fullscreen":"Tam ekran","api.continue":"Devam","api.play_now":"Oyna","api.ad_modal_header":"Reklam &ndash; otomatik kapanacaktır&hellip;","api.ad_modal_header2":"Reklam&hellip;","api.ad_modal_header3":"Reklam&hellip;","api.teaser_modal_header":"Sonraki Bölüm&hellip;","api.no_abo":"Abonelik Yoktur!","api.secure_payment":"Güvenli Ödeme!","api.paymentmethod_cc":"Kredi Kartı","api.paymentmethod_paypal":"PayPal","api.paymentmethod_sms":"SMS","api.payment_cta":"Sonraki","api.install_app_text":"Bedava Tam Sürüm!","api.install_app_cta":"Şimdi kur"}},branding:{more_games_image_prefix:"",more_games_image:"600x253.png",more_games_url:"",preload_image:"/html5games/gameapi/v1/invisPreloadImage.png",test_preload_image:"/html5games/gameapi/v1/testPreloadImage.png"},thumb:"",blurred_thumb:"",favicon_32:"https://img.cdn.famobi.com/portal/html5games/images/tmp/32/Soccertastic_Teaser.jpg",favicon_64:"https://img.cdn.famobi.com/portal/html5games/images/tmp/64/Soccertastic_Teaser.jpg",favicon_96:"https://img.cdn.famobi.com/portal/html5games/images/tmp/96/Soccertastic_Teaser.jpg",favicon_192:"https://img.cdn.famobi.com/portal/html5games/images/tmp/192/Soccertastic_Teaser.jpg",type:"html5",tracking_date:"2018-01-30",video:{sources:[]},style:'\t<style type="text/css">\n\t\t\n\t</style>',headerHtml:'<header id="fg-header"><div class="fg-clip" id="fg-clip"><div class="fg-clip-btn"><span></span></div></div></header>',menuHtml:'<ul class="fa-menu-buttons"><li data-famobi-href="back"><a href="javascript:void(0);" class="fa-menu-button-back"><svg style="display: none;" version="1.1" xmlns:svg="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve"><g transform="translate(0,-952.36218)"><path d="M49.9,963.6c-0.5,0-1,0.2-1.5,0.5l-47.5,37.5c-1.1,0.9-1.2,2.5-0.4,3.6c0.8,1,2.5,1.2,3.6,0.4L50,969.3l45.9,36.2 c1,0.8,2.7,0.6,3.5-0.4c0.8-1,0.7-2.7-0.4-3.6l-20.3-16.1v-22h-10v14.1l-17.2-13.6C51,963.8,50.5,963.6,49.9,963.6z M50,973.6 l-33.8,26.2v41.3H40v-15c0-5.5,4.5-10,10-10s10,4.5,10,10v15h23.8v-41.3C83.8,999.9,50,973.6,50,973.6z"/></g></svg></a></li><li data-famobi-fullscreen><a href="javascript:void(0);" class="fa-menu-button-fullscreen fa-fullscreen-disabled"><svg style="display: none;" class="fa-fullscreen-icon-disabled" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 90 90" xml:space="preserve"><g><path d="M64.1,34.4l10.6-10.6l-8.5-8.5L55.6,25.9L64.1,34.4L64.1,34.4z M34.4,25.9L23.8,15.3l-8.5,8.5l10.6,10.6L34.4,25.9 L34.4,25.9z M25.9,55.6L15.3,66.2l8.5,8.5l10.6-10.6L25.9,55.6L25.9,55.6z M55.6,64.1l10.6,10.6l8.5-8.5L64.1,55.6L55.6,64.1 L55.6,64.1z M30.1,9H9v21.1L30.1,9L30.1,9z M59.9,9H81v21.1L59.9,9L59.9,9z M81,59.9V81H59.9L81,59.9L81,59.9z M30.1,81H9V59.9 L30.1,81L30.1,81z"/></g></svg><svg style="display: none;" class="fa-fullscreen-icon-enabled" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 90 90"><g><path d="M72.5,9L61.9,19.6l8.5,8.5L81,17.5L72.5,9L72.5,9z M9,17.5l10.6,10.6l8.5-8.5L17.5,9L9,17.5L9,17.5z M17.5,81l10.6-10.6 l-8.5-8.5L9,72.5L17.5,81L17.5,81z M81,72.5L70.4,61.9l-8.5,8.5L72.5,81L81,72.5L81,72.5z M13.3,34.4h21.1V13.3L13.3,34.4 L13.3,34.4z M76.7,34.4H55.6V13.3L76.7,34.4L76.7,34.4z M55.6,76.7V55.6h21.1L55.6,76.7L55.6,76.7z M13.3,55.6h21.1v21.1L13.3,55.6 L13.3,55.6z"/></g></svg></a></li></ul><ul class="fg-langs"><li class="fg-lang" data-switch-lang="de"><a href="javascript:void(0);"><img class="fg-flag" src="https://img.cdn.famobi.com/flags/flag_de.png" alt="de"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="en"><a href="javascript:void(0);"><img class="fg-flag" src="https://img.cdn.famobi.com/flags/flag_en.png" alt="en"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="es"><a href="javascript:void(0);"><img class="fg-flag" src="https://img.cdn.famobi.com/flags/flag_es.png" alt="es"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="fr"><a href="javascript:void(0);"><img class="fg-flag" src="https://img.cdn.famobi.com/flags/flag_fr.png" alt="fr"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="it"><a href="javascript:void(0);"><img class="fg-flag" src="https://img.cdn.famobi.com/flags/flag_it.png" alt="it"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="nl"><a href="javascript:void(0);"><img class="fg-flag" src="https://img.cdn.famobi.com/flags/flag_nl.png" alt="nl"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="pl"><a href="javascript:void(0);"><img class="fg-flag" src="https://img.cdn.famobi.com/flags/flag_pl.png" alt="pl"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="pt"><a href="javascript:void(0);"><img class="fg-flag" src="https://img.cdn.famobi.com/flags/flag_pt.png" alt="pt"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="ru"><a href="javascript:void(0);"><img class="fg-flag" src="https://img.cdn.famobi.com/flags/flag_ru.png" alt="ru"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="tr"><a href="javascript:void(0);"><img class="fg-flag" src="https://img.cdn.famobi.com/flags/flag_tr.png" alt="tr"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li></ul>',adsVastXML:'<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd" version="3.0">\n',adTagXML:'\t<Ad id="[index]">\n\t\t<Wrapper>\n\t\t\t<AdSystem>AdSense/AdX</AdSystem>\n\t\t\t<VASTAdTagURI>\n\t\t\t\t<![CDATA[\n\t\t\t\t\t[vast_ad_tag_url]\n\t\t\t\t]]>\n\t\t\t</VASTAdTagURI>\n\t\t\t<Creatives/>\n\t\t\t<Extensions>\n\t\t\t\t<Extension fallback_index="[fallback_index]" type="waterfall"/>\n\t\t\t</Extensions>\n\t\t</Wrapper>\n\t</Ad>',appOverlayHtml:'<div class="fg-app-overlay">\n\t<div class="fg-app-teaser">\n\t\t<div class="fg-app-teaser-inner">\n\t\t\t<a href="/soccertastic.app/A-BUYHTML5GAMES" target="_blank" class="fg-app-link fg-app-teaser-icon"><img src="https://img.cdn.famobi.com/portal/html5games/images/tmp/Soccertastic_Teaser.jpg" alt=""></a>\n\t\t\t<div class="fg-app-teaser-meta">\n\t\t\t\t<div class="titleHolder">\n\t\t\t\t\t<p><a href="/soccertastic.app/A-BUYHTML5GAMES" target="_blank" class="fg-app-link" data-i18n="api.install_app_text"></a></p>\n\n\t\t\t\t\t<ul class="fg-app-teaser-rating"><li></li><li></li><li></li><li></li></ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="ctaHolder">\n\t\t\t\t\t<div class="cta">\n\t\t\t\t\t\t<a href="/soccertastic.app/A-BUYHTML5GAMES" class="fg-app-link" target="_blank"><em class="fg-app-teaser-storeIcon"></em><span data-i18n="api.install_app_cta"></span></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href="javascript:void(0);" class="fg-app-teaser-close"></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'},_fgq,""))},i.parentNode.insertBefore(p,i)}(document);