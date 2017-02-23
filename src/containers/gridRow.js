import React, { Component, PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle-outline';
import { TableRow, TableRowColumn } from 'material-ui/Table';

class gridRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			version: '',
			mode: '',
		};
		this.handleUpdateVersion = this.handleUpdateVersion.bind(this);
		this.handleUpdateMode = this.handleUpdateMode.bind(this);
	}
	handleUpdateVersion(searchText) {
		this.setState({ version: searchText });
	}
	handleUpdateMode(searchText) {
		this.setState({ mode: searchText });
	}
	render() {
		return (
			<TableRow>
				<TableRowColumn>
					<AutoComplete
						hintText="Select Site Vesion"
						filter={AutoComplete.noFilter}
						openOnFocus={true}
						dataSource={this.props.versions}
						searchText={this.props.versionValue}
						onUpdateInput={this.handleUpdateVersion}
					/>
				</TableRowColumn>
				<TableRowColumn>
					<AutoComplete
						hintText="Select Site Mode"
						filter={AutoComplete.noFilter}
						openOnFocus={true}
						dataSource={this.props.modes}
						searchText={this.props.modeValue}
						onUpdateInput={this.handleUpdateMode}
					/>
				</TableRowColumn>
				<TableRowColumn>
					<Checkbox
						label=""
						disabled={this.state.version === '' && this.state.mode === ''}
						defaultChecked={this.props.isActive}
					/>
				</TableRowColumn>
				<TableRowColumn>
					<IconButton onClick={() => this.props.deleteRow(this.props.id)}>
						<ContentRemove />
					</IconButton>
				</TableRowColumn>
			</TableRow>
		);
	}
}

gridRow.propTypes = {
	id: PropTypes.number.isRequired,
	versions: PropTypes.array.isRequired,
	modes: PropTypes.array.isRequired,
	versionValue: PropTypes.string.isRequired,
	modeValue: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	deleteRow: PropTypes.func.isRequired,
};

export default gridRow;