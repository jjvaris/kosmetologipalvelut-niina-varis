import axios from 'axios';
import cache from './cache';

export function wakeUpEmailService() {
  return axios.get('https://send-grid-email-sender.fly.dev/api/health');
}

export function sendEmail(data) {
  return axios.post('https://send-grid-email-sender.fly.dev/api/email', data);
}

export async function getInstagramFeed() {
  const cachedFeed = cache.get('images');
  if (cachedFeed) {
    return cachedFeed;
  }
  const { data } = await axios.get(
    `https://www.instagram.com/kosmetologipalvelutniinavaris/`
  );

  const jsonObject = data
    .match(
      /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
    )[1]
    .slice(0, -1);

  const userInfo = JSON.parse(jsonObject);

  const feed =
    userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media
      .edges;

  const images = feed
    .filter((e) => e.node.__typename === 'GraphImage')
    .map((e) => {
      const {
        display_url,
        shortcode,
        edge_media_preview_like,
        edge_media_to_comment,
        accessibility_caption,
        thumbnail_resources,
      } = e.node;

      return {
        src: display_url,
        link: `https://www.instagram.com/p/${shortcode}/`,
        likes: edge_media_preview_like.count,
        comments: edge_media_to_comment.count,
        caption: accessibility_caption,
        thumbnails: thumbnail_resources,
      };
    });

  cache.put('images', images);
  return images;
}
