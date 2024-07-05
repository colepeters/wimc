export default async function Preflight({ req }) {
  return {
    pageTitle: getPageTitle(req.path)
  }
}

function getPageTitle(path) {
  const titleMap = {
    '/': 'Winnipeg Insight Meditation Community',
    '/orientation': 'Orientation — Winnipeg Insight Meditation Community',
    '/sessions': 'Weekly sessions — Winnipeg Insight Meditation Community',
  }

  return titleMap[path]
}
