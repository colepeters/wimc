export async function get(req) {
  const { session = {} } = req
  const { result = null } = session

  return {
    json: {
      result,
    },
    session: {},
  }
}
