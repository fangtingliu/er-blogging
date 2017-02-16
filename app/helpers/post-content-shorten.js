import Ember from 'ember';

export function postContentShorten([content]/*, hash*/) {
    return content.slice(0, 200).split(' ').slice(0, -1).join(' ');
}

export default Ember.Helper.helper(postContentShorten);
