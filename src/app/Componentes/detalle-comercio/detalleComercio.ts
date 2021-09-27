import { DetalleComercio } from './detalleComercioInterfaz';

export const DETALLE_COMERCIO: DetalleComercio[] = [
  //Almacen
  {nombre: 'Apu', direccion: 'Lisandro de la Torre 7635, Del Viso', urlMaps: '1Lisandro+de+la+Torre+7635,+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4465906,-58.8011556,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ec58b2d79af:0x9ea8bdb4e25a39a6!8m2!3d-34.4465906!4d-58.7989669',contacto: '11-3918-2322', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/FpNtCTMVcaI', categoria:'Almacén' },
  {nombre: 'Las Palmeras', direccion: 'Lisandro de la Torre 8070, Del Viso', urlMaps: 'Panaderia+Y+Confiteria+Las+Palmeras/@-34.4429327,-58.8035958,17z/data=!4m5!3m4!1s0x95bc9ec6b764f405:0x71fb02b28969274!8m2!3d-34.4429644!4d-58.8014584',contacto: '42320-471808', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/F_PHyvhedrs', categoria:'Almacén' },

 // Articulos para celulares
 {nombre: 'Electrofem', direccion: 'Av. Ingeniero eduardo madero 1371, Del Viso',urlMaps: 'Av.+Ing.+Eduardo+Madero+1371,+B1669+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4534556,-58.8012889,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecc69715af3:0xec17e80654d142f6!8m2!3d-34.4534556!4d-58.7991002', contacto: '11-2702-0651 ', instagram:'electrofempilar', facebook:'', video: 'https://www.youtube.com/embed/4rZJ3BTx-U4', categoria:'Artículos para celulares' },


  //Bicicleterias
  {nombre: 'Ruindi Bikes', direccion: 'Blanes 1206, Del Viso',urlMaps: 'Juan+Manuel+Blanes+1206,+B1669DUH+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4646837,-58.7866865,17z/data=!4m13!1m7!3m6!1s0x95bc992648042cc5:0x9116a073033dfcdb!2sJuan+Manuel+Blanes+1206,+B1669DUH+Del+Viso,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.4646249!4d-58.7867072!3m4!1s0x95bc992648042cc5:0x9116a073033dfcdb!8m2!3d-34.4646249!4d-58.7867072', contacto: '11-3800-0911', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/GyANvZ8Lu8I', categoria:'Bicicleterías' },

  
  //Carnicerías 
  {nombre: 'Carnes Mario', direccion: 'Domingo French 2199, Del Viso',urlMaps: 'Carnes+Marío/@-34.4522199,-58.7989947,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecdc89729a9:0xa0a21578ae9dd408!8m2!3d-34.4522199!4d-58.796806',contacto: '42320-659394', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/2DDYaH8q-3g', categoria:'Carnicerías' },

  //Dietetica
  {nombre: 'Trigo Negro', direccion: 'Av. Ing. Eduardo Madero 1420, Del Viso',urlMaps: 'Cerealera+Trigo+Negro/@-34.4530112,-58.8013907,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9f0e87225f9f:0x9c5b788c384177d3!8m2!3d-34.4530112!4d-58.799202',contacto: '11-3645-4311', instagram:'cerealera_trigo_negro', facebook:'', video: 'https://www.youtube.com/embed/5iY98CYeS3E', categoria:'Dietética' },


  //Elementos hogar
  //Estudio contable
  {nombre: 'ECI Del Viso', direccion: 'Av. Ing. Eduardo Madero 660, Manuel Alberti',urlMaps: 'Av.+Constitución+680,+B1669+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4433458,-58.7855434,3a,75y,352.75h,85.77t/data=!3m6!1e1!3m4!1sU0EhthqpkBhAaJZ0nPdOtg!2e0!7i16384!8i8192!4m5!3m4!1s0x95bc9ed81f7736c5:0x6c2a7db1d99fa833!8m2!3d-34.4425377!4d-58.7845331',contacto: '11-3010-9966 /02320-470187', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/alr5jRtBzHo', categoria:'Estudio contable' },

  
  //Estudio juridico
  //Estéticas (Falta)
  //Fabrica de pastas
  {nombre: 'Las Pastas De Ernesto', direccion: 'Panamericana Km 41.5, Ramal Pilar, Del Viso' ,urlMaps: 'Las+Pastas+de+Ernesto/@-34.44118,-58.777275,15z/data=!4m5!3m4!1s0x0:0x77396f3d1c88bb51!8m2!3d-34.44118!4d-58.777275',contacto: '02320-472129 ', instagram:'laspastasdeernesto_oficial', facebook:'PastasErnesto ', video: 'https://www.youtube.com/embed/6xTn6NDnr5Q', categoria:'Fabrica de pastas'},

  //Farmacias
  {nombre: 'Acceso Norte', direccion: 'Ángel Pacheco, Del Viso',urlMaps: 'Farmacia+Acceso+Norte/@-34.4420732,-58.7841751,15.96z/data=!4m5!3m4!1s0x0:0xd7e203539bac36c7!8m2!3d-34.4417978!4d-58.7835897',contacto: '02320-402222 ', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/Gj5nkQi9THY', categoria:'Farmacia'},
  {nombre: 'De La Ruta', direccion: 'Av. Constitución 417, Del Viso' ,urlMaps: 'Farmacia+de+la+Ruta/@-34.4451713,-58.7909719,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ed735604287:0xbb4dd42172cdcb82!8m2!3d-34.4451591!4d-58.7887891',contacto: '02320-400444 ', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/7QgWsIIxKrc', categoria:'Farmacia'},
  {nombre: 'Herrera', direccion: 'Beruti 1188, Del Viso' ,urlMaps: 'Farmacia+Herrera/@-34.4521111,-58.7961441,17z/data=!4m5!3m4!1s0x95bc9ecdf36b2017:0xb635c4fa36362c62!8m2!3d-34.4523407!4d-58.7955103?hl=es',contacto: '02320-470281 ', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/n_xfrgeL4fM', categoria:'Farmacia'},
  {nombre: 'Oroño', direccion: 'Beruti 1305, Del Viso' ,urlMaps: 'Farmacia+Oroño/@-34.4540917,-58.7985795,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecd97333a0b:0xc72b613aeba795ab!8m2!3d-34.4540917!4d-58.7963908?hl=es',contacto: '02320-476666 ', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/FKUA0IfXlYc', categoria:'Farmacia'},

  //Ferreteria
  //Gastronomia
  {nombre: 'Don Glotón', direccion: 'Lisandro de la Torre 7635, Del Viso', urlMaps: '1Lisandro+de+la+Torre+7635,+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4465906,-58.8011556,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ec58b2d79af:0x9ea8bdb4e25a39a6!8m2!3d-34.4465906!4d-58.7989669',contacto: '11-3918-2322', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/FpNtCTMVcaI', categoria:'Gastronomía' },

  //Gimnasios
  {nombre: 'Power Gym', direccion: 'Independencia 6828, Del Viso', urlMaps: 'POWER+GYM/@-34.4768562,-58.8031643,13.25z/data=!4m9!1m2!2m1!1spower+gym!3m5!1s0x95bc9fc2bd874f65:0x8e5692a414f8e787!8m2!3d-34.4535316!4d-58.7949813!15sCglwb3dlciBneW0iA4gBAZIBA2d5bQ',contacto: ' 011-6845-2123', instagram:'', facebook:'powergymdelviso', video: 'https://www.youtube.com/embed/drSbqOsH-aw', categoria:'Gimnasios' },
  
  //Heladerias
  {nombre: 'Le Fragole', direccion: 'Independencia 6740, Del Viso',urlMaps: 'HELADOS+Le+Fragole/@-34.4539559,-58.7960127,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecd7a6a1373:0x6e0a7fac64603d7e!8m2!3d-34.4540164!4d-58.7938621',contacto: '02320 47-0431', instagram:'lefragolehelados', facebook:'lefragoleheladosycafe', video: 'https://www.youtube.com/embed/KtnKv1nTVTs', categoria:'Heladerías' },
  //Iluminación
  {nombre: 'Spot', direccion: 'Av. Constitución 236 (Ruta 26), Del Viso',urlMaps: 'SPOT+La+Casa+del+Electricista/@-34.4539555,-58.8025788,15z/data=!4m9!1m2!2m1!1sspot!3m5!1s0x95bc9ed0f3a972bb:0x8eef370e9a899a5!8m2!3d-34.4459487!4d-58.7911023!15sCgRzcG90WgYiBHNwb3SSARdlbGVjdHJpY2FsX3N1cHBseV9zdG9yZQ',contacto: '011-2265-5018', instagram:'spotweb_ok', facebook:'SPOTweb.ok', video: 'https://www.youtube.com/embed/2oMzsDaFXRQ', categoria:'Iluminación' },


  //Indumentarias
  
  {nombre: 'Brujas Y Nietas', direccion: 'Independencia 6890, Del Viso',urlMaps: 'FYO,+Independencia+6890,+B1669+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4530472,-58.7974316,17.84z/data=!4m5!3m4!1s0x95bc9ecd9e92ce7f:0xc950b49d53ab933e!8m2!3d-34.4532073!4d-58.795726',contacto: '', instagram:'brujasynietas', facebook:'', video: 'https://www.youtube.com/embed/5UDkaea5BiM', categoria:'Indumentaria' },
  {nombre: 'Lenceria Sueños', direccion: 'Independencia 6998, Del Viso',urlMaps: 'Independencia+6998,+B1669FYT+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4520887,-58.8006012,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecc31483529:0x2744fae95bedcc30!8m2!3d-34.4520887!4d-58.7984125',contacto: '2304354696', instagram:'lenceria_suenos1', facebook:'', video: 'https://www.youtube.com/embed/Ex6CTud5joE', categoria:'Indumentaria' },
  {nombre: 'María Del Sol', direccion: 'Independencia 6824, Del Viso',urlMaps: 'María+del+Sol/@-34.4476799,-58.8052387,15z/data=!4m5!3m4!1s0x0:0xd42e93a90f845a8d!8m2!3d-34.4476799!4d-58.8052387',contacto: ' 02320-658390', instagram:'', facebook:'MariadelSol.DelViso ', video: 'https://www.youtube.com/embed/7K29jBtzQcY', categoria:'Indumentaria' },
  {nombre: 'La gran tienda', direccion: 'Independencia 6780, Del Viso',urlMaps: 'Galería+La+Gran+Tienda/@-34.4527624,-58.7955455,17z/data=!4m5!3m4!1s0x95bc9ecd9e014c8b:0x46aab1cdc3dec7ba!8m2!3d-34.4533552!4d-58.7956957',contacto: '011-4537-3647', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/d5PaS-SPPBI', categoria:'Indumentaria' },
  {nombre: 'Textil Del Viso', direccion: 'Av. Ing Eduardo Madero 1277, Del Viso',urlMaps: 'TEXTIL+DEL+VISO/@-34.4513109,-58.7997837,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ece80467535:0xaf8c64b11b0348a5!8m2!3d-34.4512737!4d-58.7976831',contacto: ' 011-6058-8791', instagram:'textildelviso', facebook:'Textil-DelViso-107422357620704/', video: 'https://www.youtube.com/embed/gnqdryYnfn4', categoria:'Indumentaria' },
  {nombre: 'Tienda Oriana', direccion: 'Independencia 6846, Del Viso',urlMaps: 'Independencia+6846,+B1669FYR+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4529737,-58.7987343,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecdbace9fb7:0xe9daaa86626a7fe!8m2!3d-34.4529781!4d-58.7965403',contacto: ' 0348-4346382', instagram:'', facebook:'TiendaOrianaD', video: 'https://www.youtube.com/embed/QwPFvHvOcmk', categoria:'Indumentaria' },
  {nombre: 'Tu Estilo', direccion: 'Av. Ing Eduardo Madero 1393, Del Viso',urlMaps: 'Tu+Estilo/@-34.4542783,-58.8006516,16.61z/data=!4m5!3m4!1s0x95bc9ecc7cae8c81:0x77798ba2fe7aa7f4!8m2!3d-34.4541975!4d-58.7996557',contacto: '11-3063-7550', instagram:'Tu_estilo.ropa', facebook:'Tu_estilo.ropa', video: 'https://www.youtube.com/embed/eruyHylCt_Y', categoria:'Indumentaria' },


  // Kioskos
  {nombre: 'Kiosko Elena', direccion: '',urlMaps: '',contacto: '', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/V9dGTQONvUc', categoria:'Kiosko' },

  //Marmoleria
  {nombre: 'Marmoleria La Roca', direccion: 'Av. Ing. Eduardo Madero, Del Viso',urlMaps: 'La+Roca+-+Marmolería/@-34.4559858,-58.8096759,13.75z/data=!4m9!1m2!2m1!1sLa+Roca+-+Marmolería!3m5!1s0x0:0xa34ffb111d174ef1!8m2!3d-34.446705!4d-58.792027!15sChVMYSBSb2NhIC0gTWFybW9sZXLDrWFaFSITbGEgcm9jYSBtYXJtb2xlcsOtYZIBBXN0b3Jl',contacto: '02320-659705', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/m5fkoFJzWus', categoria:'Marmoleria' },

  //Mecanico
  {nombre: 'Mecánica José', direccion: 'Labarden 7275, Del Viso',urlMaps: 'Labardén+7275,+Del+Viso,+Provincia+de+Buenos+Aires/@-34.448972,-58.7956503,17z/data=!4m13!1m7!3m6!1s0x95bc9ece372c83eb:0xb318b029221f859e!2sLabardén+7275,+Del+Viso,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.4490806!4d-58.795791!3m4!1s0x95bc9ece372c83eb:0xb318b029221f859e!8m2!3d-34.4490806!4d-58.795791',contacto: '02320-657536 / 11-155810-1757', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/d-ZhTrfpH_I', categoria:'Mecánica' },


  //Opticas
  {nombre: 'Opti Look', direccion: 'Av. Ing Eduardo Madero 1476, Del Viso',urlMaps: 'Av.+Ing.+Eduardo+Madero+1476,+B1669+CKV,+Provincia+de+Buenos+Aires/@-34.4533862,-58.801775,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecc6d824ea3:0x3c2e86f74064b05f!8m2!3d-34.4533862!4d-58.7995863',contacto: '11-2507-1144', instagram:'optilook_21', facebook:'', video: 'https://www.youtube.com/embed/aBbqyugJpyo', categoria:'Ópticas' },

  //Panaderías
  {nombre: 'Panadería Villa Del Carmen', direccion: 'Nobel 5705, Villa del Carmen',urlMaps: 'Panadería+y+pastelería+Villa+del+Carmen/@-34.4644026,-58.7865514,20z/data=!4m5!3m4!1s0x95bc9c4157af3699:0x8f10bba4d9104767!8m2!3d-34.464338!4d-58.7863074',contacto: '02320-472821', instagram:'panaderiavilladelcarmen_', facebook:'', video: 'https://www.youtube.com/embed/SDNH5xZi9kw', categoria:'Panaderías' },
  {nombre: 'Panadería La Nueva', direccion: 'Independencia 6880, Del Viso',urlMaps: 'PANADERÍA+La+Nueva/@-34.453307,-58.7976989,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecd764f216f:0x2f89fd2663621e0!8m2!3d-34.4532978!4d-58.7955042',contacto: ' 02320-470668', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/RQIHpN5ydc4', categoria:'Panaderías' },

  //Pinturerías
  {nombre: 'Quimtex', direccion: '12 De Octubre 1264, Del Viso',urlMaps: 'Quimtex+Express+Del+Viso/@-34.4397514,-58.7851877,15z/data=!4m5!3m4!1s0x0:0x535baf95480a2f03!8m2!3d-34.4397514!4d-58.7851877',contacto: ' 02320-405560', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/34v7s6c_fRo', categoria:'Pinturerías' },


  //Regalería
  {nombre: 'S & Z Regalería', direccion: 'Independencia 6724, Del Viso',urlMaps: 'El+Shopping/@-34.4536908,-58.7948974,17z/data=!4m13!1m7!3m6!1s0x95bc9ed2bd1a7373:0xdeeb100eddc4f2a3!2sFYP,+Independencia+6724,+B1669+Pilar,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.4536959!4d-58.7949986!3m4!1s0x95bc9ecd7c8ab715:0x2c7b7dc5bb90f44f!8m2!3d-34.4536153!4d-58.7948745',contacto: ' 02320-470668', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/GxIkg_oHnho', categoria:'Regalerías' },

  //Repuestos automotor
  {nombre: 'Repuestos independencia', direccion: 'Independencia 6832, Del Viso',urlMaps: 'Independencia+6832,+B1669FYR+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4530624,-58.7985521,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecd776f2183:0x45ec5635d132e224!8m2!3d-34.4530624!4d-58.7963634',contacto: '11-5155-3051', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/3KXsitvzeZY', categoria:'Repuestos automotor' },

  //Sanitarios
  {nombre: 'Sanitarios Elece', direccion: 'Av. Constitución 479, Del Viso',urlMaps: 'Sanitarios+Elece/@-34.444607,-58.7877095,15z/data=!4m2!3m1!1s0x0:0x6e8f108d8da38d47?sa=X&ved=2ahUKEwiNrsCfo-HyAhXbppUCHbj7AbUQ_BJ6BAhQEAU',contacto: '02320-471725', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/fD98FUTTdEI', categoria:'Elementos para el Hogar' },


  //Seguros
  {nombre: 'Alma Seguros', direccion: 'Sara Maqueda 6972, Del Viso',urlMaps: 'Sara+Maqueda+6972,+B1669GHO+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4537242,-58.8012615,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecc60c1b41f:0xdee15428f86e4ae!8m2!3d-34.4537286!4d-58.7990675',contacto: '11-155903-9735', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/_CLk2j821M8', categoria:'Seguros' },


  //Verduleria
  {nombre: 'Carlitos', direccion: '',urlMaps: '',contacto: '', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/IbOjskBM36Q', categoria:'Verdulerías' },

  //Veterinaria
  {nombre: 'Veterinaria Independencia', direccion: 'Independencia 6740, Del Viso',contacto: '02320-470431',urlMaps: 'Veterinaria+Independencia/@-34.4541036,-58.7961507,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ecd70abd89d:0x78e250fe8f9768ab!8m2!3d-34.454108!4d-58.793962', instagram:'', facebook:'veterinariaindependencia.delviso', video: 'https://www.youtube.com/embed/w8OoGpSp6jI', categoria:'Veterinarias' },
  {nombre: 'Pet Shop Norte', direccion: 'Av. Constitución, Del Viso, Provincia de Buenos Aires',urlMaps: 'Pet+Shop+Norte/@-34.4420226,-58.7858581,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9ed80f884613:0x59db3d11451cdc09!8m2!3d-34.442027!4d-58.7836694',contacto: '02320-658440', instagram:'', facebook:'', video: 'https://www.youtube.com/embed/QXmkon2oImg', categoria:'Veterinarias' },


  //Zapateria
  //Libreria

];