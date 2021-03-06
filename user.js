user_pref('browser.manifestURL', "app://system.gaiamobile.org/manifest.webapp");
user_pref('browser.homescreenURL', "app://system.gaiamobile.org/index.html");
user_pref('network.http.max-connections-per-server', 15);
user_pref('ril.debugging.enabled', false);
user_pref('dom.mms.version', 17);
user_pref('network.dns.localDomains', "gaiamobile.org,pdfjs.gaiamobile.org,wallpaper.gaiamobile.org,gallery.gaiamobile.org,communications.gaiamobile.org,calendar.gaiamobile.org,settings.gaiamobile.org,fm.gaiamobile.org,sms.gaiamobile.org,email.gaiamobile.org,video.gaiamobile.org,music.gaiamobile.org,homescreen.gaiamobile.org,bluetooth.gaiamobile.org,keyboard.gaiamobile.org,browser.gaiamobile.org,camera.gaiamobile.org,costcontrol.gaiamobile.org,wappush.gaiamobile.org,clock.gaiamobile.org,system.gaiamobile.org,pdfjs.gaiamobile.org,wallpaper.gaiamobile.org,gallery.gaiamobile.org,communications.gaiamobile.org,calendar.gaiamobile.org,settings.gaiamobile.org,fm.gaiamobile.org,sms.gaiamobile.org,email.gaiamobile.org,video.gaiamobile.org,music.gaiamobile.org,homescreen.gaiamobile.org,bluetooth.gaiamobile.org,keyboard.gaiamobile.org,browser.gaiamobile.org,camera.gaiamobile.org,costcontrol.gaiamobile.org,wappush.gaiamobile.org,clock.gaiamobile.org,system.gaiamobile.org,marketplace.firefox.com.gaiamobile.org,marketplace.firefox.com.gaiamobile.org");
pref("geo.gps.supl_server", "supl.izatcloud.net");
pref("geo.gps.supl_port", 22024);
pref("dom.payment.provider.0.name", "firefoxmarket");
pref("dom.payment.provider.0.description", "marketplace.firefox.com");
pref("dom.payment.provider.0.uri", "https://marketplace.firefox.com/mozpay/?req=");
pref("dom.payment.provider.0.type", "mozilla/payments/pay/v1");
pref("dom.payment.provider.0.requestMethod", "GET");
// Send these sites a custom user-agent. Bugs to remove each override after
// evangelism are included.
pref("general.useragent.override.maps.google.com", "\\(Mobile#(Android; Mobile"); // bug 802981
pref("general.useragent.override.uol.com.br", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 826330
pref("general.useragent.override.live.com", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 826332
pref("general.useragent.override.globo.com", "\\(Mobile#(Android; Mobile"); // bug 826335
pref("general.useragent.override.yahoo.com", "\\(Mobile#(Android; Mobile"); // bug 826338
pref("general.useragent.override.mercadolivre.com.br", "\\(Mobile#(Android; Mobile"); // bug 826342
pref("general.useragent.override.ig.com.br", "\\(Mobile#(Android; Mobile"); // bug 826343
pref("general.useragent.override.abril.com.br", "\\(Mobile#(Android; Mobile"); // bug 826344
pref("general.useragent.override.msn.com", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 826347
pref("general.useragent.override.linkedin.com", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 826348
pref("general.useragent.override.itau.com.br", "\\(Mobile#(Android; Mobile"); // bug 826353
pref("general.useragent.override.orkut.com.br", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 826504
pref("general.useragent.override.r7.com", "\\(Mobile#(Android; Mobile"); // bug 826510
pref("general.useragent.override.estadao.com.br", "\\(Mobile#(Android; Mobile"); // bug 826514
pref("general.useragent.override.letras.mus.br", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 826517
pref("general.useragent.override.bb.com.br", "\\(Mobile#(Android; Mobile"); // bug 826711
pref("general.useragent.override.orkut.com", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 826712
pref("general.useragent.override.noticias.uol.com.br", "\\(Mobile#(Android; Mobile"); // bug 826715
pref("general.useragent.override.olx.com.br", "\\(Mobile#(Android; Mobile"); // bug 826720
pref("general.useragent.override.bancobrasil.com.br", "\\(Mobile#(Android; Mobile"); // bug 826736
pref("general.useragent.override.techtudo.com.br", "\\(Mobile#(Android; Mobile"); // bug 826845
pref("general.useragent.override.ebay.com", "\\(Mobile#(Android; Mobile");// bug 826958
pref("general.useragent.override.bing.com", "\\(Mobile#(Android; Mobile"); // bug 827622
pref("general.useragent.override.pagseguro.uol.com.br", "\\(Mobile#(Android; Mobile"); // bug 827625
pref("general.useragent.override.magazineluiza.com.br", "\\(Mobile#(Android; Mobile"); // bug 827626
pref("general.useragent.override.bol.uol.com.br", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 827627
pref("general.useragent.override.groupon.com.br", "\\(Mobile#(Android; Mobile"); // bug 827628
pref("general.useragent.override.vagalume.com.br", "\\(Mobile#(Android; Mobile"); // bug 827630
pref("general.useragent.override.climatempo.com.br", "\\(Mobile#(Android; Mobile"); // bug 827631
pref("general.useragent.override.tecmundo.com.br", "\\(Mobile#(Android; Mobile"); // bug 827632
pref("general.useragent.override.hao123.com", "\\(Mobile#(Android; Mobile"); // bug 827633
pref("general.useragent.override.lancenet.com.br", "\\(Mobile#(Android; Mobile"); // bug 827576
pref("general.useragent.override.webmotors.com.br", "\\(Mobile#(Android; Mobile"); // bug 827573
pref("general.useragent.override.mercadolibre.com.co", "\\(Mobile#(Android; Mobile"); // bug 827661
pref("general.useragent.override.elespectador.com", "\\(Mobile#(Android; Mobile"); // bug 827664
pref("general.useragent.override.scribd.com", "\\(Mobile#(Android; Mobile"); // bug 827668
pref("general.useragent.override.elpais.com.co", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 827670
pref("general.useragent.override.olx.com.co", "\\(Mobile#(Android; Mobile"); // bug 827672
pref("general.useragent.override.avianca.com", "\\(Mobile#(Android; Mobile"); // bug 827674
pref("general.useragent.override.marca.com", "\\(Mobile#(Android; Mobile"); // bug 827678
pref("general.useragent.override.gazeta.pl", "\\(Mobile#(Android; Mobile"); // bug 828354
pref("general.useragent.override.sport.pl", "\\(Mobile#(Android; Mobile"); // bug 828360
pref("general.useragent.override.nk.pl", "\\(Mobile#(Android; Mobile"); // bug 828364
pref("general.useragent.override.wyborcza.biz", "\\(Mobile#(Android; Mobile"); // bug 828366
pref("general.useragent.override.money.pl", "\\(Mobile#(Android; Mobile"); // bug 828369
pref("general.useragent.override.ingbank.pl", "\\(Mobile#(Android; Mobile"); // bug 828371
pref("general.useragent.override.plotek.pl", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 828376
pref("general.useragent.override.wyborcza.pl", "\\(Mobile#(Android; Mobile"); // bug 828378
pref("general.useragent.override.deser.pl", "\\(Mobile#(Android; Mobile"); // bug 828380
pref("general.useragent.override.ebay.es", "\\(Mobile#(Android; Mobile"); // bug 828386
pref("general.useragent.override.infojobs.net", "\\(Mobile#(Android; Mobile"); // bug 828392
pref("general.useragent.override.antena3.com", "\\(Mobile#(Android; Mobile"); // bug 828399
pref("general.useragent.override.ingdirect.es", "\\(Mobile#(Android; Mobile"); // bug 828401
pref("general.useragent.override.fotocasa.es", "\\(Mobile#(Android; Mobile"); // bug 828403
pref("general.useragent.override.orange.es", "\\(Mobile#(Android; Mobile"); // bug 828406
pref("general.useragent.override.paginasamarillas.es", "\\(Mobile#(Android; Mobile"); // bug 828414
pref("general.useragent.override.loteriasyapuestas.es", "\\(Mobile#(Android; Mobile"); // bug 828416
pref("general.useragent.override.bbva.es", "\\(Mobile#(Android; Mobile"); // bug 828418
pref("general.useragent.override.publico.es", "\\(Mobile#(Android; Mobile"); // bug 828422
pref("general.useragent.override.mercadolibre.com.ve", "\\(Mobile#(Android; Mobile"); // bug 828425
pref("general.useragent.override.olx.com.ve", "\\(Mobile#(Android; Mobile"); // bug 828433
pref("general.useragent.override.movistar.com.ve", "\\(Mobile#(Android; Mobile"); // bug 828439
pref("general.useragent.override.bumeran.com.ve", "\\(Mobile#(Android; Mobile"); // bug 828445
pref("general.useragent.override.petardas.com", "\\(Mobile#(Android; Mobile"); // bug 828448
pref("general.useragent.override.mail.google.com", "\\(Mobile#(Android; Mobile"); // bug 827869
pref("general.useragent.override.enfemenino.com", "\\(Mobile#(Android; Mobile"); // bug 843109
pref("general.useragent.override.movil.bankinter.es", "\\(Mobile#(Android; Mobile"); // bug 843112
pref("general.useragent.override.einforma.com", "\\(Mobile#(Android; Mobile"); // bug 843114
pref("general.useragent.override.wwwhatsnew.com", "\\(Mobile#(Android; Mobile"); // bug 843116
pref("general.useragent.override.askthebuilder.com", "\\(Mobile#(Android; Mobile"); // bug 843119
pref("general.useragent.override.tor.com", "\\(Mobile#(Android; Mobile"); // bug 843121
pref("general.useragent.override.maruccisports.com", "\\(Mobile#(Android; Mobile"); // bug 843124
pref("general.useragent.override.es.playstation.com", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 843126
pref("general.useragent.override.11870.com", "\\(Mobile#(Android; Mobile"); // bug 843129
pref("general.useragent.override.iphonejuegosgratis.com", "\\(Mobile#(Android; Mobile"); // bug 843200
pref("general.useragent.override.comunio.es", "\\(Mobile#(Android; Mobile"); // bug 843132
pref("general.useragent.override.news.google.com", "\\(Mobile#(Android; Mobile"); // bug 843134
pref("general.useragent.override.deviantart.com", "\\(Mobile#(Android; Mobile"); // bug 843136
pref("general.useragent.override.nytimes.com", "\\(Mobile#(Android; Mobile"); // bug 843137
pref("general.useragent.override.consumersearch.com", "\\(Mobile#(Android; Mobile"); // bug 843139
pref("general.useragent.override.foodily.com", "\\(Mobile#(Android; Mobile"); // bug 843141
pref("general.useragent.override.icanhas.cheezburger.com", "\\(Mobile#(Android; Mobile"); // bug 843197
pref("general.useragent.override.citibank.com", "\\(Mobile#(Android; Mobile"); // bug 843151
pref("general.useragent.override.games.com", "\\(Mobile#(Android; Mobile"); // bug 843153
pref("general.useragent.override.orbitz.com", "\\(Mobile#(Android; Mobile"); // bug 843156
pref("general.useragent.override.starwoodhotels.com", "\\(Mobile#(Android; Mobile"); // bug 843158
pref("general.useragent.override.ehow.com", "\\(Mobile#(Android; Mobile"); // bug 843160
pref("general.useragent.override.urbanspoon.com", "\\(Mobile#(Android; Mobile"); // bug 843162
pref("general.useragent.override.virginatlantic.com", "\\(Mobile#(Android; Mobile"); // bug 843165
pref("general.useragent.override.cheaptickets.com", "\\(Mobile#(Android; Mobile"); // bug 843168
pref("general.useragent.override.zimbio.com", "\\(Mobile#(Android; Mobile"); // bug 843172
pref("general.useragent.override.tylted.com", "\\(Mobile#(Android; Mobile"); // bug 843176
pref("general.useragent.override.txt2nite.com", "\\(Mobile#(Android; Mobile"); // bug 843178
pref("general.useragent.override.slashgear.com", "\\(Mobile#(Android; Mobile"); // bug 843181
pref("general.useragent.override.chevrolet.com", "\\(Mobile#(Android; Mobile"); // bug 843186
pref("general.useragent.override.deadline.com", "\\(Mobile#(Android; Mobile"); // bug 848854
pref("general.useragent.override.3g.qq.com", "\\(Mobile#(Android; Mobile"); // bug 866577
pref("general.useragent.override.arukereso.hu", "\\(Mobile#(Android; Mobile"); // bug 878222
pref("general.useragent.override.blikk.hu", "\\(Mobile#(Android; Mobile"); // bug 878228
pref("general.useragent.override.citromail.hu", "\\(Mobile#(Android; Mobile"); // bug 878230
pref("general.useragent.override.hazipatika.com", "\\(Mobile#(Android; Mobile"); // bug 878232
pref("general.useragent.override.hvg.hu", "\\(Mobile#(Android; Mobile"); // bug 878234
pref("general.useragent.override.jofogas.hu", "\\(Mobile#(Android; Mobile"); // bug 878236
pref("general.useragent.override.koponyeg.hu", "\\(Mobile#(Android; Mobile"); // bug 878238
pref("general.useragent.override.kuruc.info", "\\(Mobile#(Android; Mobile"); // bug 878240
pref("general.useragent.override.nemzetisport.hu", "\\(Mobile#(Android; Mobile"); // bug 878242
pref("general.useragent.override.nlcafe.hu", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 878244
pref("general.useragent.override.port.hu", "\\(Mobile#(Android; Mobile"); // bug 878246
pref("general.useragent.override.portfolio.hu", "\\(Mobile#(Android; Mobile"); // bug 878249
pref("general.useragent.override.vatera.hu", "\\(Mobile#(Android; Mobile"); // bug 878253
pref("general.useragent.override.24sata.hr", "\\(Mobile#(Android; Mobile"); // bug 878255
pref("general.useragent.override.bet365.com", "\\(Mobile#(Android; Mobile"); // bug 878256
pref("general.useragent.override.blackhatteam.com", "\\(Mobile#(Android; Mobile"); // bug 878258
pref("general.useragent.override.cdm.me", "\\(Mobile#(Android; Mobile"); // bug 878260
pref("general.useragent.override.download.com", "\\(Mobile#(Android; Mobile"); // bug 878262
pref("general.useragent.override.haber.ba", "\\(Mobile#(Android; Mobile"); // bug 878264
pref("general.useragent.override.jutarnji.hr", "\\(Mobile#(Android; Mobile"); // bug 878268
pref("general.useragent.override.kurir-info.rs", "\\(Mobile#(Android; Mobile"); // bug 878271
pref("general.useragent.override.livescore.com", "\\(Mobile#(Android; Mobile"); // bug 878273
pref("general.useragent.override.mondo.rs", "\\(Mobile#(Android; Mobile"); // bug 878275
pref("general.useragent.override.naslovi.net", "\\(Mobile#(Android; Mobile"); // bug 878277
pref("general.useragent.override.softonic.com", "\\(Mobile#(Android; Mobile"); // bug 878284
pref("general.useragent.override.yandex.ru", "\\(Mobile#(Android; Mobile"); // bug 878286
pref("general.useragent.override.ask.com", "\\(Mobile#(Android; Mobile"); // bug 878630
pref("general.useragent.override.banorte.com", "\\(Mobile#(Android; Mobile"); // bug 878632
pref("general.useragent.override.buenastareas.com", "\\(Mobile#(Android; Mobile"); // bug 878634
pref("general.useragent.override.cnn.com", "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"); // bug 878635
pref("general.useragent.override.eluniversal.com.mx", "\\(Mobile#(Android; Mobile"); // bug 878637
pref("general.useragent.override.hootsuite.com", "\\(Mobile#(Android; Mobile"); // bug 878640
pref("general.useragent.override.mercadolibre.com.mx", "\\(Mobile#(Android; Mobile"); // bug 878642
pref("general.useragent.override.olx.com.mx", "\\(Mobile#(Android; Mobile"); // bug 878645
pref("general.useragent.override.sat.gob.mx", "\\(Mobile#(Android; Mobile"); // bug 878647
pref("general.useragent.override.univision.com", "\\(Mobile#(Android; Mobile"); // bug 878649
pref("general.useragent.override.redstarbelgrade.info", "\\(Mobile#(Android; Mobile"); // bug 878653
pref("general.useragent.override.vesti-online.com", "\\(Mobile#(Android; Mobile"); // bug 878655
pref("security.apps.privileged.CSP.default", "default-src *; script-src *; object-src 'none'; style-src *");
