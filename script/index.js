const { writeJSON } = require('./utils');

const API = {
  bilibili:
    'https://api.bilibili.com/x/space/bangumi/follow/list?type=1&follow_status=0&pn=1&ps=15&vmid=194714175&ts=1597596481239',
};

// bilibili
writeJSON({
  filename: 'database/bilibili.json',
  url: API.bilibili,
  fmtData(data, container) {
    data.data.list.map(i => {
      container.push({
        title: i.title,
        subtitle: i.subtitle,
        cover: i.cover,
        tags: [],
        url: `https://www.bilibili.com/bangumi/media/md${i.media_id}`,
        evaluate: i.evaluate,
      });
    });
  },
});
