import Mock from 'mockjs'
import userAPI from './user'
import tableAPI from './table'
import articleAPI from './article'

// User
Mock.mock(/\/user\/login/, 'post', userAPI.login)
Mock.mock(/\/user\/info/, 'get', userAPI.getUserInfo)
Mock.mock(/\/user\/logout/, 'post', userAPI.logout)

// Table
Mock.mock(/\/table\/list/, 'get', tableAPI.list)

// Tab
Mock.mock(/\/article\/list/, 'get', articleAPI.list)

export default Mock
