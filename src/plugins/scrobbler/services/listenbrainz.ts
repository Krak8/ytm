import { net } from 'electron';

import { ScrobblerBase } from './base';

import { SetConfType } from '../main';

import type { SongInfo } from '@/providers/song-info';

import type { ScrobblerPluginConfig } from '../index';

interface ListenbrainzRequestBody {
  listen_type?: string;
  payload: {
    track_metadata?: {
      artist_name?: string;
      track_name?: string;
      release_name?: string;
      additional_info?: {
        media_player?: string;
        submission_client?: string;
        origin_url?: string;
        duration?: number;
      };
    };
    listened_at?: number;
  }[];
}

export class ListenbrainzScrobbler extends ScrobblerBase {
  isSessionCreated(): boolean {
    return true;
  }

  createSession(config: ScrobblerPluginConfig, _setConfig: SetConfType): Promise<ScrobblerPluginConfig> {
    return Promise.resolve(config);
  }

  setNowPlaying(songInfo: SongInfo, config: ScrobblerPluginConfig, _setConfig: SetConfType): void {
    if (!config.scrobblers.listenbrainz.api_root || !config.scrobblers.listenbrainz.token) {
      return;
    }

    const body = createRequestBody('playing_now', songInfo);
    submitListen(body, config);
  }

  addScrobble(songInfo: SongInfo, config: ScrobblerPluginConfig, _setConfig: SetConfType): void {
    if (!config.scrobblers.listenbrainz.api_root || !config.scrobblers.listenbrainz.token) {
      return;
    }

    const body = createRequestBody('single', songInfo);
    body.payload[0].listened_at = Math.trunc(Date.now() / 1000);

    submitListen(body, config);
  }
}

function createRequestBody(listenType: string, songInfo: SongInfo): ListenbrainzRequestBody {
  const trackMetadata = {
    artist_name: songInfo.artist,
    track_name: songInfo.title,
    release_name: songInfo.album ?? undefined,
    additional_info: {
      media_player: 'YouTube Music Desktop App',
      submission_client: 'YouTube Music Desktop App - Scrobbler Plugin',
      origin_url: songInfo.url,
      duration: songInfo.songDuration,
    }
  };

  return {
    listen_type: listenType,
    payload: [
      {
        track_metadata: trackMetadata,
      }
    ]
  };
}

function submitListen(body: ListenbrainzRequestBody, config: ScrobblerPluginConfig) {
  net.fetch(config.scrobblers.listenbrainz.api_root + 'submit-listens',
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Authorization': 'Token ' + config.scrobblers.listenbrainz.token,
        'Content-Type': 'application/json',
      }
    }).catch(console.error);
}