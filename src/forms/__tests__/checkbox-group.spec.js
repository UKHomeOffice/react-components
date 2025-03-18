import React from 'react'
import { render } from 'enzyme'
import { CheckboxGroup } from 'ho-react-components';

describe('CheckboxGroup', () => {

  it('renders checkboxes', () => {
    const options = [
      {
        label: 'one',
        value: 1
      },
      {
        label: 'two',
        value: 2
      },
      {
        label: 'three',
        value: 3,
        reveal: <p className="revealed">Hello</p>
      }
    ];
    const rendered = render(<CheckboxGroup
      label="test"
      name="date"
      options={options}
      value={[ 1, 2 ]}
    />);
    expect(rendered.find('input[type="checkbox"]').length).toEqual(3);
    expect(rendered.find('input[checked]').length).toEqual(2);
    expect(rendered.find('input[checked]').eq(0).attr('value')).toEqual('1');
    expect(rendered.find('input[checked]').eq(1).attr('value')).toEqual('2');
  });

  it('should not render reveals if `initialHideReveals` is true', () => {
    const options = [
      {
        label: 'one',
        value: 1
      },
      {
        label: 'two',
        value: 2
      },
      {
        label: 'three',
        value: 3,
        reveal: <p className="revealed">Hello</p>
      }
    ];
    const rendered = render(<CheckboxGroup
      label="test"
      name="date"
      options={options}
      value={1}
      initialHideReveals={true}
    />);
    expect(rendered.find('.govuk-reveal').length).toEqual(0);
    expect(rendered.find('p.revealed').length).toEqual(0);
  });

  it('should render reveals if `initialHideReveals` is false', () => {
    const options = [
      {
        label: 'one',
        value: 1
      },
      {
        label: 'two',
        value: 2
      },
      {
        label: 'three',
        value: 3,
        reveal: <p className="revealed">Hello</p>
      }
    ];
    const rendered = render(<CheckboxGroup
      label="test"
      name="date"
      options={options}
      value={1}
      initialHideReveals={false}
    />);
    expect(rendered.find('.govuk-reveal').length).toEqual(1);
    expect(rendered.find('p.revealed').length).toEqual(1);
  });

  it('should render a divider', () => {
    const options = [
      {
        label: 'one',
        value: 1
      },
      {
        label: 'two',
        value: 2
      },
      {
        id: 'divider',
        divider: 'or'},
      {
        label: 'three',
        value: 3,
      }
    ];
    const rendered = render(<CheckboxGroup
        label="test"
        name="date"
        options={options}
        value={1}
        initialHideReveals={false}
    />);
    expect(rendered.find('.govuk-checkboxes__divider').length).toEqual(1);
    expect(rendered.find('.govuk-checkboxes__divider').text()).toEqual('or');
  })

  it('should render a divider with a long name and custom class', () => {
    const options = [
      {
        label: 'one',
        value: 1
      },
      {
        label: 'two',
        value: 2
      },
      {
        id: 'divider',
        divider: 'Or select each that applies:',
        className: 'govuk-checkboxes__divider govuk-checkboxes__divider-wide'
      },
      {
        label: 'three',
        value: 3,
      }
    ];
    const rendered = render(<CheckboxGroup
        label="test"
        name="date"
        options={options}
        value={1}
        initialHideReveals={false}
    />);
    expect(rendered.find('.govuk-checkboxes__divider-wide').length).toEqual(1);
    expect(rendered.find('.govuk-checkboxes__divider-wide').text()).toEqual('Or select each that applies:');
  })

});
