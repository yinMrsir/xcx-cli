import Request from '../../common/request'

async function add (params) {
  let data = await Request(`xcx/need/add`, 'POST', params)
  return data
}

export default {
  add
}
