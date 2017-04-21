import Ember from 'ember';
import layout from '../../templates/components/ember-do-forms/input-field';
import setDataTestSelector from '../../utils/set-data-test-selector';

const {
  assert,
  Component,
  get,
  isPresent,
  isEmpty,
  inject: { service },
  set
} = Ember;

const InputFieldComponent = Component.extend({
  layout,
  tagName: '',

  config: service('ember-do-forms/config'),

  controlType: 'text',

  labelComponent: 'do-label',

  labelClasses: [],
  controlClasses: [],
  feedbackClasses: [],
  hintClasses: [],

  init() {
    setDataTestSelector(this, 'input-field', '_dataTestSelectorInputField');
    setDataTestSelector(this, 'do-label', '_dataTestSelectorLabel');
    setDataTestSelector(this, 'do-control', '_dataTestSelectorControl');
    setDataTestSelector(this, 'do-feedback', '_dataTestSelectorFeedback');
    setDataTestSelector(this, 'do-hint', '_dataTestSelectorHint');

    this._super(...arguments);
    let defaultClasses = get(this, 'config.defaultClasses');

    assert('{{ember-do-forms/input-field}} requires an object to be passed in', isPresent(get(this, 'object')));
    assert('{{ember-do-forms/input-field}} requires a propertyName to be passed in', isPresent(get(this, 'propertyName')));

    if (isEmpty(get(this, 'labelClasses'))) {
      set(this, 'labelClasses', defaultClasses.label);
    }

    if (isEmpty(get(this, 'controlClasses'))) {
      set(this, 'controlClasses', defaultClasses.control);
    }

    if (isEmpty(get(this, 'feedbackClasses'))) {
      set(this, 'feedbackClasses', defaultClasses.feedback);
    }

    if (isEmpty(get(this, 'hintClasses'))) {
      set(this, 'hintClasses', defaultClasses.hint);
    }
  }
});

InputFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default InputFieldComponent;
