import mockjs from 'mockjs';

export default {
  'GET /api/questionList':  mockjs.mock({
    'question|20':[
      {
        'id':'@first',
        'title': '@csentence(7,15)',
        'option|4': [{'label':'@cword(3,5)','value|+1':['A','B','C','D']}],
        'type|0-1': 1
      }],
  })
}
