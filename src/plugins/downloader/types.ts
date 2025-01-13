export interface Preset {
  extension?: string | null;
  ffmpegArgs: string[];
}

// Presets for FFmpeg
export const DefaultPresetList: Record<string, Preset> = {
  'mp3 (256kbps)': {
    extension: 'mp3',
    ffmpegArgs: ['-b:a', '256k'],
  },
  'Source': {
    extension: undefined,
    ffmpegArgs: ['-acodec', 'copy'],
  },
  'Custom': {
    extension: null,
    ffmpegArgs: [],
  },
};

export interface YouTubeFormat {
  itag: number;
  container: string;
  content: string;
  resolution: string;
  bitrate: string;
  range: string;
  vrOr3D: string;
}

// converted from https://gist.github.com/sidneys/7095afe4da4ae58694d128b1034e01e2#file-youtube_format_code_itag_list-md
// and https://gist.github.com/MartinEesmaa/2f4b261cb90a47e9c41ba115a011a4aa
export const YoutubeFormatList: YouTubeFormat[] = [
  {
    itag: 5,
    container: 'flv',
    content: 'audio/video',
    resolution: '240p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 6,
    container: 'flv',
    content: 'audio/video',
    resolution: '270p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 17,
    container: '3gp',
    content: 'audio/video',
    resolution: '144p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 18,
    container: 'mp4',
    content: 'audio/video',
    resolution: '360p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 22,
    container: 'mp4',
    content: 'audio/video',
    resolution: '720p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 34,
    container: 'flv',
    content: 'audio/video',
    resolution: '360p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 35,
    container: 'flv',
    content: 'audio/video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 36,
    container: '3gp',
    content: 'audio/video',
    resolution: '180p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 37,
    container: 'mp4',
    content: 'audio/video',
    resolution: '1080p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 38,
    container: 'mp4',
    content: 'audio/video',
    resolution: '3072p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 43,
    container: 'webm',
    content: 'audio/video',
    resolution: '360p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 44,
    container: 'webm',
    content: 'audio/video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 45,
    container: 'webm',
    content: 'audio/video',
    resolution: '720p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 46,
    container: 'webm',
    content: 'audio/video',
    resolution: '1080p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 82,
    container: 'mp4',
    content: 'audio/video',
    resolution: '360p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 83,
    container: 'mp4',
    content: 'audio/video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 84,
    container: 'mp4',
    content: 'audio/video',
    resolution: '720p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 85,
    container: 'mp4',
    content: 'audio/video',
    resolution: '1080p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 91,
    container: 'hls',
    content: 'audio/video',
    resolution: '144p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 92,
    container: 'hls',
    content: 'audio/video',
    resolution: '240p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 93,
    container: 'hls',
    content: 'audio/video',
    resolution: '360p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 94,
    container: 'hls',
    content: 'audio/video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 95,
    container: 'hls',
    content: 'audio/video',
    resolution: '720p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 96,
    container: 'hls',
    content: 'audio/video',
    resolution: '1080p',
    bitrate: '-',
    range: '-',
    vrOr3D: '-',
  },
  {
    itag: 100,
    container: 'webm',
    content: 'audio/video',
    resolution: '360p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 101,
    container: 'webm',
    content: 'audio/video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 102,
    container: 'webm',
    content: 'audio/video',
    resolution: '720p',
    bitrate: '-',
    range: '-',
    vrOr3D: '3D',
  },
  {
    itag: 132,
    container: 'hls',
    content: 'audio/video',
    resolution: '240p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 133,
    container: 'mp4',
    content: 'video',
    resolution: '240p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 134,
    container: 'mp4',
    content: 'video',
    resolution: '360p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 135,
    container: 'mp4',
    content: 'video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 136,
    container: 'mp4',
    content: 'video',
    resolution: '720p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 137,
    container: 'mp4',
    content: 'video',
    resolution: '1080p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 138,
    container: 'mp4',
    content: 'video',
    resolution: '2160p60',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 139,
    container: 'm4a',
    content: 'audio',
    resolution: '-',
    bitrate: '48k',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 140,
    container: 'm4a',
    content: 'audio',
    resolution: '-',
    bitrate: '128k',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 141,
    container: 'm4a',
    content: 'audio',
    resolution: '-',
    bitrate: '256k',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 151,
    container: 'hls',
    content: 'audio/video',
    resolution: '72p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 160,
    container: 'mp4',
    content: 'video',
    resolution: '144p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 167,
    container: 'webm',
    content: 'video',
    resolution: '360p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 168,
    container: 'webm',
    content: 'video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 169,
    container: 'webm',
    content: 'video',
    resolution: '1080p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 171,
    container: 'webm',
    content: 'audio',
    resolution: '-',
    bitrate: '128k',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 218,
    container: 'webm',
    content: 'video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 219,
    container: 'webm',
    content: 'video',
    resolution: '144p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 242,
    container: 'webm',
    content: 'video',
    resolution: '240p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 243,
    container: 'webm',
    content: 'video',
    resolution: '360p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 244,
    container: 'webm',
    content: 'video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 245,
    container: 'webm',
    content: 'video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 246,
    container: 'webm',
    content: 'video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 247,
    container: 'webm',
    content: 'video',
    resolution: '720p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 248,
    container: 'webm',
    content: 'video',
    resolution: '1080p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 249,
    container: 'webm',
    content: 'audio',
    resolution: '-',
    bitrate: '50k',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 250,
    container: 'webm',
    content: 'audio',
    resolution: '-',
    bitrate: '70k',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 251,
    container: 'webm',
    content: 'audio',
    resolution: '-',
    bitrate: '160k',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 264,
    container: 'mp4',
    content: 'video',
    resolution: '1440p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 266,
    container: 'mp4',
    content: 'video',
    resolution: '2160p60',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 271,
    container: 'webm',
    content: 'video',
    resolution: '1440p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 272,
    container: 'webm',
    content: 'video',
    resolution: '4320p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 278,
    container: 'webm',
    content: 'video',
    resolution: '144p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 298,
    container: 'mp4',
    content: 'video',
    resolution: '720p60',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 299,
    container: 'mp4',
    content: 'video',
    resolution: '1080p60',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 302,
    container: 'webm',
    content: 'video',
    resolution: '720p60',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 303,
    container: 'webm',
    content: 'video',
    resolution: '1080p60',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 308,
    container: 'webm',
    content: 'video',
    resolution: '1440p60',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 313,
    container: 'webm',
    content: 'video',
    resolution: '2160p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 315,
    container: 'webm',
    content: 'video',
    resolution: '2160p60',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 330,
    container: 'webm',
    content: 'video',
    resolution: '144p60',
    bitrate: '-',
    range: 'hdr',
    vrOr3D: '',
  },
  {
    itag: 331,
    container: 'webm',
    content: 'video',
    resolution: '240p60',
    bitrate: '-',
    range: 'hdr',
    vrOr3D: '',
  },
  {
    itag: 332,
    container: 'webm',
    content: 'video',
    resolution: '360p60',
    bitrate: '-',
    range: 'hdr',
    vrOr3D: '',
  },
  {
    itag: 333,
    container: 'webm',
    content: 'video',
    resolution: '480p60',
    bitrate: '-',
    range: 'hdr',
    vrOr3D: '',
  },
  {
    itag: 334,
    container: 'webm',
    content: 'video',
    resolution: '720p60',
    bitrate: '-',
    range: 'hdr',
    vrOr3D: '',
  },
  {
    itag: 335,
    container: 'webm',
    content: 'video',
    resolution: '1080p60',
    bitrate: '-',
    range: 'hdr',
    vrOr3D: '',
  },
  {
    itag: 336,
    container: 'webm',
    content: 'video',
    resolution: '1440p60',
    bitrate: '-',
    range: 'hdr',
    vrOr3D: '',
  },
  {
    itag: 337,
    container: 'webm',
    content: 'video',
    resolution: '2160p60',
    bitrate: '-',
    range: 'hdr',
    vrOr3D: '',
  },
  {
    itag: 272,
    container: 'webm',
    content: 'video',
    resolution: '2880p/4320p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 399,
    container: 'mp4',
    content: 'video',
    resolution: '1080p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 400,
    container: 'mp4',
    content: 'video',
    resolution: '1440p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 401,
    container: 'mp4',
    content: 'video',
    resolution: '2160p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 402,
    container: 'mp4',
    content: 'video',
    resolution: '2880p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 571,
    container: 'mp4',
    content: 'video',
    resolution: '3840p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 702,
    container: 'mp4',
    content: 'video',
    resolution: '3840p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 571,
    container: 'mp4',
    content: 'video',
    resolution: '3840p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 694,
    container: 'mp4',
    content: 'video',
    resolution: '144p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 695,
    container: 'mp4',
    content: 'video',
    resolution: '240p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 696,
    container: 'mp4',
    content: 'video',
    resolution: '360p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 697,
    container: 'mp4',
    content: 'video',
    resolution: '480p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 698,
    container: 'mp4',
    content: 'video',
    resolution: '720p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 699,
    container: 'mp4',
    content: 'video',
    resolution: '1080p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 700,
    container: 'mp4',
    content: 'video',
    resolution: '1440p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 701,
    container: 'mp4',
    content: 'video',
    resolution: '2160p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 702,
    container: 'mp4',
    content: 'video',
    resolution: '3840p',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  // Audio formats
  {
    itag: 599,
    container: 'mp4',
    content: 'audio',
    resolution: '-',
    bitrate: '30k',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 600,
    container: 'webm',
    content: 'audio',
    resolution: '-',
    bitrate: '35k',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 774,
    container: 'webm',
    content: 'audio',
    resolution: '-',
    bitrate: '256k',
    range: '-',
    vrOr3D: '',
  },
  // Livestream formats
  {
    itag: 300,
    container: 'ts',
    content: 'audio/video',
    resolution: '720p60',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
  {
    itag: 301,
    container: 'ts',
    content: 'audio/video',
    resolution: '1080p60',
    bitrate: '-',
    range: '-',
    vrOr3D: '',
  },
];
