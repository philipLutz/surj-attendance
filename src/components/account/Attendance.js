import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

class Attendance extends React.Component {
    
    state = { value : '' }
    render() {
        return (
            <div className="container page">
                <h2> IT works! </h2>
                <ReactAutocomplete
                    items={[
                      { id: 'foo', label: 'Matt Warren' },
                      { id: 'bar', label: 'bar' },
                      { id: 'baz', label: 'baz' },
                    ]}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                      <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                      >
                        {item.label}
                      </div>
                    }
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={value => this.setState({ value })}
                  />
                <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    disabled={this.props.inProgress}
                    onClick={this.submitForm}>
                    Save attendance
                </button>
            </div>
        );
    }
}

export default Attendance;