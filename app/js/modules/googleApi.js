export const GoogleApi = (opts) => {
  console.log('GoogleApi', opts)
  opts = opts || {}
  const apiKey = opts.apiKey;
  const libraries = opts.libraries || [];
  const client = opts.client;
  const URL = 'https://maps.googleapis.com/maps/api/js';
  let script = null;
  let google = window.google = null;
  let loading = false;
  let channel = null;
  let language = null;
  let region = null;
  let onLoadEvents = [];

  const url = () => {
    let url = URL;
    let params = {
      key: apiKey,
      callback: 'CALLBACK_NAME',
      libraries: libraries.join(','),
      client: client,
      channel: channel,
      language: language,
      region: region
    }

    let paramStr = Object.keys(params)
        .filter(k => !!params[k])
        .map(k => `${k}=${params[k]}`).join('&');

    return `${url}?${paramStr}`;
  }

  return url();
}
