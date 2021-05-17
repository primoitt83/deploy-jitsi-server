//Sempre solicitar que a pessoa preencha seu nome
config.requireDisplayName = true;

//Idioma padrão: Português-BR
config.defaultLanguage = 'ptBR';

//Limitar resolucao e framerate
config.resolution = 720;
config.constraints.video.frameRate = { ideal: 15, min: 5, max: 30 };
config.constraints.video.height = { ideal: 720, min: 180, max: 720};
config.constraints.video.width = { ideal: 1280, min: 320, max: 1280};

//Deixar simulcast ativado (false) ou desativado (true)
config.disableSimulcast = false;

//Sempre entrar com audio desativado
config.startWithVideoMuted = true;

//Limitar o numero de cameras abertas
config.startVideoMuted = 9;

//Sempre entrar com audio desativado
config.startWithAudioMuted = true;

//Limitar o numero de microfones abertos
config.startAudioMuted = 4;

//Ultimas 5 cameras poderao ficar abertas
config.channelLastN = 16;
//
//Limitar o número de streams enviados pelo simulcast
config.lastNLimits = { 5: 16, 30: 12, 50: 9, 70: 4, 90: 2};

//Limitar para nao misturar audio em confs grandes
//config.disableAudioLevels = true;

//Avisar qdo falar com mic fechado
config.enableNoAudioDetection = true;

//Avisar qdo mic estiver muito alto
config.enableNoisyMicDetection =  true;

//Nao enviar streams q nao estao sendo vistos. Soh faz sentido com Simulcast ativado
config.enableLayerSuspension =  true;

//Forçar recarregar a pág em caso de falha do jvb
config.enableForcedReload =  true;

//Desativar sincronia labial
config.enableLipSync =  false;

//Desativar audio stereo
config.stereo =  false;

//Desativar falar enquanto tiver mudo
config.enableTalkWhileMuted = true;
//
config.maxFullResolutionParticipants = 5;
//
//
config.desktopSharingFrameRate = { min: 5, max: 30 };
//
//
//config.videoQuality = { preferredCodec: 'VP9' };
//
//
config.videoQuality.maxBitratesVideo = { low: 200000, standard: 500000, high: 1500000 };
//
//Começar com uma banda de 800kbits
config.startBitrate = '800';
//
//
config.videoQuality.minHeightForQualityLvl = { 360: 'standard', 720: 'high' };
//
//Configs para OCTO
//
config.testing.octo.probability = 1;

//config.deploymentInfo = { shard: 'shard1', region: 'Brasilia', userRegion: 'Brasilia' };
config.deploymentInfo = { userRegion: 'Brasilia' };

//Para testar
//disableRtx: false, // Enables RTX everywhere
//desktopSharingSources: ['screen', 'window'],