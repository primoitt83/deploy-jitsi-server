//Sempre solicitar que a pessoa preencha seu nome
config.requireDisplayName = true;

//Idioma padrão: Português-BR
config.defaultLanguage = 'ptBR';

//Limitar resolucao e framerate
config.resolution = 720;
config.constraints.video.frameRate = { ideal: 15, min: 5, max: 30 };
config.constraints.video.height = { ideal: 720, min: 360, max: 720};
config.constraints.video.width = { ideal: 1280, min: 640, max: 1280};

//Deixar simulcast ativado (false) ou desativado (true)
config.disableSimulcast = true;

//Limitar o numero de cameras abertas
config.startVideoMuted = 5;

//Limitar o numero de microfones abertos
config.startAudioMuted = 3;

//Ultimas 5 cameras poderao ficar abertas
config.channelLastN = 5;

//Limitar para nao misturar audio em confs grandes
//config.disableAudioLevels = true;

//Nao enviar streams q nao estao sendo vistos. Soh faz sentido com Simulcast ativado
//config.enableLayerSuspension =  true;

config.maxFullResolutionParticipants = 5;
//
//
config.desktopSharingFrameRate = { min: 5, max: 30 };
//
//
config.videoQuality = { preferredCodec: 'VP9' };
//
//
config.videoQuality.maxBitratesVideo = { low: 400000, standard: 600000, high: 1000000 };
//
//
config.videoQuality.minHeightForQualityLvl = { 360: 'standard', 480: 'high' };
//
//Configs para OCTO
//
config.testing.octo.probability = 1;

//config.deploymentInfo = { shard: 'shard1', region: 'Brasilia', userRegion: 'Brasilia' };
config.deploymentInfo = { userRegion: 'Brasilia' };




