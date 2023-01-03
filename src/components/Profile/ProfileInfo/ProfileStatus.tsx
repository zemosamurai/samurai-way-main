import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }
    activateEditMode()  {
        this.setState({
            editMode: true
        })
    }
    activateViewMode() {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} onBlur={this.activateViewMode.bind(this)} autoFocus/>
                    </div>
                }
            </div>
        );
    }

};
