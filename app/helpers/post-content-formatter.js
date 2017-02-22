import Ember from 'ember';


export function postContentFormatter([content]/*, hash*/) {
  if (/\<p\>/.test(content)) {
    return content;
  }
  let formatted_content = content.split('\n ');
  return Ember.String.htmlSafe('<p>' + formatted_content.join("</p><p>"));
}

export default Ember.Helper.helper(postContentFormatter);
