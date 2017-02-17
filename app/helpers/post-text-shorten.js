import Ember from 'ember';

const TITLE_LEN_MAX = 12;

export function postContentShorten([content, type]/*, hash*/) {
  if (type === 'title') {
    const splited = content.split(' ')
    return splited.length > TITLE_LEN_MAX ? splited.slice(0, TITLE_LEN_MAX).join(' ') + ' ...' : content;
  } else if (type === 'content') {
    return content.slice(0, 200).split(' ').slice(0, -1).join(' ');
  }
}

export default Ember.Helper.helper(postContentShorten);
