import Ember from 'ember';


export function postContentFormatter([content]/*, hash*/) {
  let formatted_content = content.split('\n');
  console.log('content in postContentFormatter: ', formatted_content);
  return Ember.String.htmlSafe('<p>' + formatted_content.join("</p><p>"));
}

export default Ember.Helper.helper(postContentFormatter);
